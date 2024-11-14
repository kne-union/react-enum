
# react-enum


### 描述

管理和获取枚举值


### 安装

```shell
npm i --save @kne/react-enum
```

### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- EnumLegacy
- 兼容老版本Enum的API
- _ReactEnum(@kne/current-lib_react-enum)[import * as _ReactEnum from "@kne/react-enum"],antd(antd),remoteLoader(@kne/remote-loader)

```jsx
const { default: Enum } = _ReactEnum;
const { createWithRemoteLoader } = remoteLoader;
const {Divider} = antd;

const BaseExample = createWithRemoteLoader({
  modules: ['components-core:Global@PureGlobal']
})(({ remoteModules }) => {
  const [PureGlobal] = remoteModules;
  return <PureGlobal preset={{
    enums: {
      gender: [{ value: 'M', description: '男' }, {
        value: 'F', description: '女'
      }], marital: async () => [{ description: '已婚', value: 'Y' }, {
        description: '未婚', value: 'N'
      }]
    }
  }}>
    <Enum moduleName="gender" name="M" />
    <Divider />
    <Enum moduleName="gender">{(data) => {
      return data.map((data) => `${data.value}:${data.description}`).join(',');
    }}</Enum>
    <Divider />
    <Enum moduleName={['gender', 'marital']}>{([gender, marital]) => {
      return <div>
        <div>{gender.map((data) => `${data.value}:${data.description}`).join(',')}</div>
        <div>{marital.map((data) => `${data.value}:${data.description}`).join(',')}</div>
      </div>;
    }}</Enum>
  </PureGlobal>;
});

render(<BaseExample />);

```


### API

| 属性名 | 说明 | 类型 | 默认值 |
|-----|----|----|-----|
|     |    |    |     |

