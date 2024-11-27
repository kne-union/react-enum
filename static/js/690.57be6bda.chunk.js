"use strict";(self.webpackChunk_kne_components_react_enum=self.webpackChunk_kne_components_react_enum||[]).push([[690],{5690:(e,n,a)=>{a.r(n),a.d(n,{default:()=>t,manifest:()=>r});const t={ReactEnum:{name:"react-enum",summary:'<h1>react-enum</h1>\n<h3>\u63cf\u8ff0</h3>\n<p>\u7ba1\u7406\u548c\u83b7\u53d6\u679a\u4e3e\u503c.</p>\n<h3>\u5b89\u88c5</h3>\n<pre><code class="language-shell">npm i --save @kne/react-enum\n</code></pre>',description:"\u7ba1\u7406\u548c\u83b7\u53d6\u679a\u4e3e\u503c.",packageName:"@kne/react-enum",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>",example:{isFull:!1,className:"react_enum_dbed9",style:".react_enum_dbed9 .ant-card {\n  border-color: black;\n  text-align: center;\n  width: 200px;\n}",list:[{title:"EnumLegacy",description:"\u517c\u5bb9\u8001\u7248\u672cEnum\u7684API",code:"const { default: Enum, preset } = _ReactEnum;\nconst { createWithRemoteLoader } = remoteLoader;\nconst { Divider } = antd;\n\npreset({\n  base: {\n    confirm: () => [{ description: '\u662f', value: 'Y' }, {\n      description: '\u5426', value: 'N'\n    }]\n  }\n});\n\nconst BaseExample = createWithRemoteLoader({\n  modules: ['components-core:Global@PureGlobal']\n})(({ remoteModules }) => {\n  const [PureGlobal] = remoteModules;\n  return <PureGlobal preset={{\n    enums: {\n      gender: [{ value: 'M', description: '\u7537' }, {\n        value: 'F', description: '\u5973'\n      }], marital: async () => [{ description: '\u5df2\u5a5a', value: 'Y' }, {\n        description: '\u672a\u5a5a', value: 'N'\n      }]\n    }\n  }}>\n    <Enum moduleName=\"gender\" name=\"M\" />\n    <Divider />\n    <Enum moduleName=\"gender\">{(data) => {\n      return data.map((data) => `${data.value}:${data.description}`).join(',');\n    }}</Enum>\n    <Divider />\n    <Enum moduleName={['gender', 'marital']}>{([gender, marital]) => {\n      return <div>\n        <div>{gender.map((data) => `${data.value}:${data.description}`).join(',')}</div>\n        <div>{marital.map((data) => `${data.value}:${data.description}`).join(',')}</div>\n      </div>;\n    }}</Enum>\n    <Divider />\n    <Enum moduleName=\"confirm\" name=\"Y\" />\n    <Enum moduleName=\"confirm\" name=\"N\">{(data) => data.description}</Enum>\n  </PureGlobal>;\n});\n\nrender(<BaseExample />);\n\n",scope:[{name:"_ReactEnum",packageName:"@kne/current-lib_react-enum",importStatement:'import * as _ReactEnum from "@kne/react-enum"',component:a(88506)},{name:"antd",packageName:"antd",component:a(55199)},{name:"remoteLoader",packageName:"@kne/remote-loader",component:a(13050)}]}]}}},r={name:"react-enum",version:"0.1.9","open-version":!0,"public-url":"/react-enum",modules:[{name:"react-enum",baseDir:"/home/runner/work/react-enum/react-enum",description:"\u7ba1\u7406\u548c\u83b7\u53d6\u679a\u4e3e\u503c.",packageName:"@kne/react-enum"}]}}}]);
//# sourceMappingURL=690.57be6bda.chunk.js.map