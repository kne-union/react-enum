import React from 'react';
import { useGlobalContext, usePreset } from '@kne/global-context';
import useRefCallback from '@kne/use-ref-callback';
import Fetch, { useFetch } from '@kne/react-fetch';
import groupBy from 'lodash/groupBy';
import uniq from 'lodash/uniq';
import transform from 'lodash/transform';
import preset, { globalParams, getCache } from './preset';
import { isEmpty } from '@kne/is-empty';

const formatEnum = ({ value, format, language, locale }) => {
  if (!value) {
    return '';
  }
  const label = value.translation?.[language || locale] || value.description;
  if (format === 'origin') {
    return value;
  }
  if (format === 'option') {
    return Object.assign({}, value, { label });
  }
  return label;
};

const useEnumResource = () => {
  const { enums } = usePreset();
  return useRefCallback(async ({ moduleNames, language }) => {
    const getResource = async target => {
      const loader = Object.assign({}, globalParams.base, enums)[target];
      if (!loader) {
        console.warn(`枚举[${target}]的loader没有被正确设置`);
        return null;
      }

      //locale参数可能被废弃
      const resource = await (typeof loader === 'function' ? loader({ target, language, locale: language }) : loader);

      if (Array.isArray(resource)) {
        return new Map(resource.map(item => [item.value, item]));
      }
      if (resource instanceof Map) {
        return resource;
      }
      throw new Error('获取到的resource类型不正确，仅支持Array或Map');
    };
    return await Promise.all(moduleNames.map(getResource));
  });
};

const useEnumLoader = () => {
  const resource = useEnumResource();
  return useRefCallback(async ({ requests, format, language }) => {
    const cache = getCache();
    const getCacheKey = request => {
      return Symbol.for(`${request.moduleName}_${request.value}_${language}_${request.format || format}`);
    };
    const requestsGroup = groupBy(requests, request => {
      return !request.force && cache.has(getCacheKey(request)) ? 'cached' : 'uncached';
    });

    const uncached = requestsGroup.uncached || [],
      cached = requestsGroup.cached || [];

    const results = [];

    const moduleNames = uniq(uncached.map(({ moduleName }) => moduleName));

    const resourceObject = transform(
      await resource({ moduleNames, language }),
      (result, value, index) => {
        const moduleName = moduleNames[index];
        result[moduleName] = value;
      },
      {}
    );

    cached.forEach(request => {
      const formatValue = cache.get(getCacheKey(request));
      const index = requests.indexOf(request);
      results[index] = formatValue;
    });

    uncached.forEach(request => {
      const formatValue = (request => {
        if (cache.has(getCacheKey(request))) {
          return cache.get(getCacheKey(request));
        }
        const currentResource = resourceObject[request.moduleName];
        const enumValue = currentResource.get(request.value);
        const formatValue = formatEnum({ value: enumValue, format: request.format || format, language });
        formatValue && cache.set(getCacheKey(request), formatValue);
        return formatValue;
      })(request);

      const index = requests.indexOf(request);
      results[index] = formatValue;
    });

    return results;
  });
};

const EnumResource = p => {
  const { moduleName, children, format, ...props } = Object.assign(
    {},
    {
      format: 'origin'
    },
    p
  );
  const resource = useEnumResource();
  const { language, locale } = useGlobalContext();
  return (
    <Fetch
      {...props}
      data={{
        moduleName
      }}
      loader={({ data }) => {
        const { moduleName } = Object.assign({}, data);
        return resource({
          moduleNames: Array.isArray(moduleName) ? moduleName : [moduleName],
          language: language || locale
        });
      }}
      render={({ data }) => {
        if (typeof children === 'function') {
          return children(
            Array.isArray(moduleName)
              ? data.map(item =>
                  Array.from(item.values()).map(value =>
                    formatEnum({
                      value,
                      format,
                      language,
                      locale
                    })
                  )
                )
              : Array.from(data[0].values()).map(value =>
                  formatEnum({
                    value,
                    format,
                    language,
                    locale
                  })
                )
          );
        }
        return children;
      }}
    />
  );
};

const EnumLegacy = p => {
  const { moduleName, name, format, force, children, ...props } = Object.assign(
    {},
    {
      force: false
    },
    p
  );
  const { language, locale } = useGlobalContext();
  const loader = useEnumLoader();

  if (isEmpty(name)) {
    return (
      <EnumResource moduleName={moduleName} format={format || 'origin'}>
        {children}
      </EnumResource>
    );
  }

  return (
    <Fetch
      {...props}
      loader={({ data }) => {
        const { requests, language, format } = Object.assign({}, data);
        return loader({ requests, language, format });
      }}
      data={{
        requests: [
          {
            moduleName,
            value: name,
            force,
            format: typeof children === 'function' ? 'origin' : format || 'default'
          }
        ],
        language: language || locale || window.navigator.language
      }}
      render={({ data, ...fetchApi }) => {
        if (typeof children === 'function') {
          return children(Array.isArray(moduleName) ? data : data[0], fetchApi);
        }
        return children || data;
      }}
    />
  );
};

const Enum = p => {
  const { request, children, ...props } = Object.assign(
    {},
    {
      format: 'default'
    },
    p
  );
  const { language, locale } = useGlobalContext();
  const loader = useEnumLoader();
  return (
    <Fetch
      {...props}
      loader={({ data }) => {
        const { requests, format, language } = Object.assign({}, data);
        return loader({ requests, language, format });
      }}
      data={{
        requests: Array.isArray(request) ? request : [request],
        language: language || locale || window.navigator.language
      }}
      render={({ data, ...fetchApi }) => {
        if (typeof children === 'function') {
          return children(Array.isArray(request) ? data : data[0], fetchApi);
        }
        return children || data.join(',');
      }}
    />
  );
};

export default EnumLegacy;

export { preset, Enum, EnumResource, useEnumLoader, useEnumResource };
