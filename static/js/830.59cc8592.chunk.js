"use strict";(self.webpackChunk_kne_components_react_enum=self.webpackChunk_kne_components_react_enum||[]).push([[830],{71830:(e,r,a)=>{a.r(r),a.d(r,{Enum:()=>S,EnumResource:()=>C,default:()=>R,preset:()=>q,useEnum:()=>M,useEnumLoader:()=>x,useEnumResource:()=>$});var t=a(94922),n=a.n(t),o=a(74946),u=a(78678),s=a(16052),c=a.n(s),l=a(12097),m=a.n(l),f=a(34598),i=a.n(f),d=a(9211),g=a.n(d),p=a(58554),h=a(94530),y=a.n(h);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)({}).hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},b.apply(null,arguments)}function v(e,r){if(null==e)return{};var a={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(r.includes(t))continue;a[t]=e[t]}return a}const O={base:{},cache:{max:100}};let N=new p.q(O.cache);const q=e=>{y()(O,e),N=new p.q(O.cache)},w=()=>N,j=["moduleName","children","format"],E=["moduleName","name","format","force","children"],A=["data"],_=["requests","children"],k=["data"],P=e=>{let{value:r,format:a,language:t}=e;var n;const o=(null==(n=r.locale)?void 0:n[t])||r.description;return"origin"===a?r:"option"===a?Object.assign({},r,{label:o}):o},$=()=>{const{enums:e}=(0,o.usePreset)();return(0,u.A)((async r=>{let{moduleNames:a}=r;return await Promise.all(a.map((async r=>{const a=Object.assign({},O.base,e)[r];if(!a)return console.warn(`\u679a\u4e3e[${r}]\u7684loader\u6ca1\u6709\u88ab\u6b63\u786e\u8bbe\u7f6e`),null;const t=await("function"===typeof a?a({target:r}):a);if(Array.isArray(t))return new Map(t.map((e=>[e.value.toString(),e])));if(t instanceof Map)return t;throw new Error("\u83b7\u53d6\u5230\u7684resource\u7c7b\u578b\u4e0d\u6b63\u786e\uff0c\u4ec5\u652f\u6301Array\u6216Map")})))}))},x=()=>{const{language:e}=(0,o.usePreset)(),r=$();return(0,u.A)((async a=>{let{requests:t,format:n}=a;const o=w(),u=e=>Symbol.for(`${e.moduleName}_${e.value}_${e.format||n}`),s=m()(t,(e=>!e.force&&o.has(u(e))?"cached":"uncached")),c=s.uncached||[],l=s.cached||[],f=[],d=i()(c.map((e=>{let{moduleName:r}=e;return r}))),p=g()(await r({moduleNames:d}),((e,r,a)=>{e[d[a]]=r}),{});return l.forEach((e=>{const r=o.get(u(e)),a=t.indexOf(e);f[a]=r})),c.forEach((r=>{const a=(r=>{if(o.has(u(r)))return o.get(u(r));const a=p[r.moduleName].get(r.value),t=P({value:a,format:r.format||n,language:e});return o.set(u(r),t),t})(r),s=t.indexOf(r);f[s]=a})),f}))},M=()=>{const e=x();return(0,s.useFetch)({loader:r=>{let{data:a}=r;const{requests:t,format:n}=Object.assign({},{format:"default"},a);return e({requests:t,format:n})}})},C=e=>{const r=Object.assign({},{format:"origin"},e),{moduleName:a,children:t,format:u}=r,s=v(r,j),l=$(),{language:m}=(0,o.usePreset)();return n().createElement(c(),b({},s,{data:{moduleName:a},loader:e=>{let{data:r}=e;const{moduleName:a}=Object.assign({},r);return l({moduleNames:Array.isArray(a)?a:[a]})},render:e=>{let{data:r}=e;return"function"===typeof t?t(Array.isArray(a)?r.map((e=>Array.from(e.values()).map((e=>P({value:e,format:u,language:m}))))):Array.from(r[0].values()).map((e=>P({value:e,format:u,language:m})))):t}}))},R=e=>{const r=Object.assign({},{force:!1},e),{moduleName:a,name:t,format:o,force:u,children:s}=r,l=v(r,E),m=x();return t?n().createElement(c(),b({},l,{loader:e=>{let{data:r}=e;const{requests:a,format:t}=Object.assign({},r);return m({requests:a,format:t})},data:{requests:[{moduleName:a,value:t,force:u,format:"function"===typeof s?"origin":o||"default"}]},render:e=>{let{data:r}=e,a=v(e,A);return"function"===typeof s?s(r,a):s||r}})):n().createElement(C,{moduleName:a,format:o||"origin"},s)},S=e=>{const r=Object.assign({},{format:"default"},e),{requests:a,children:t}=r,o=v(r,_),u=x();return n().createElement(c(),b({},o,{loader:e=>{let{data:r}=e;const{requests:a,format:t}=Object.assign({},r);return u({requests:a,format:t})},data:{requests:a},render:e=>{let{data:r}=e,a=v(e,k);return"function"===typeof t?t(r,a):t||r.join(",")}}))}}}]);
//# sourceMappingURL=830.59cc8592.chunk.js.map