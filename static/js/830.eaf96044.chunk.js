"use strict";(self.webpackChunk_kne_components_react_enum=self.webpackChunk_kne_components_react_enum||[]).push([[830],{71830:(e,a,r)=>{r.r(a),r.d(a,{Enum:()=>S,EnumResource:()=>G,default:()=>M,preset:()=>O,useEnumLoader:()=>P,useEnumResource:()=>$});var n=r(94922),t=r.n(n),o=r(74946),u=r(78678),l=r(16052),s=r.n(l),c=r(12097),m=r.n(c),i=r(34598),g=r.n(i),f=r(9211),d=r.n(f),y=r(58554),p=r(64755),h=r.n(p),b=r(67823);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(null,arguments)}function w(e,a){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(a.includes(n))continue;r[n]=e[n]}return r}const A={base:{},cache:{max:100}};let N=new y.q(A.cache);const O=e=>{h()(A,e),N=new y.q(A.cache)},E=()=>N,j=["moduleName","children","format"],q=["moduleName","name","format","force","children"],_=["data"],k=["request","children"],x=["data"],C=e=>{let{value:a,format:r,language:n,locale:t}=e;var o;if(!a)return"";const u=(null==(o=a.translation)?void 0:o[n||t])||a.description;return"origin"===r?a:"option"===r?Object.assign({},a,{label:u}):u},$=()=>{const{enums:e}=(0,o.usePreset)();return(0,u.A)((async a=>{let{moduleNames:r,language:n}=a;return await Promise.all(r.map((async a=>{const r=Object.assign({},A.base,e)[a];if(!r)return console.warn(`\u679a\u4e3e[${a}]\u7684loader\u6ca1\u6709\u88ab\u6b63\u786e\u8bbe\u7f6e`),null;const t=await("function"===typeof r?r({target:a,language:n,locale:n}):r);if(Array.isArray(t))return new Map(t.map((e=>[String(e.value),e])));if(t instanceof Map)return t;throw new Error("\u83b7\u53d6\u5230\u7684resource\u7c7b\u578b\u4e0d\u6b63\u786e\uff0c\u4ec5\u652f\u6301Array\u6216Map")})))}))},P=()=>{const e=$();return(0,u.A)((async a=>{let{requests:r,format:n,language:t}=a;const o=E(),u=e=>Symbol.for(`${e.moduleName}_${e.value}_${t}_${e.format||n}`),l=m()(r,(e=>!e.force&&o.has(u(e))?"cached":"uncached")),s=l.uncached||[],c=l.cached||[],i=[],f=g()(s.map((e=>{let{moduleName:a}=e;return a}))),y=d()(await e({moduleNames:f,language:t}),((e,a,r)=>{e[f[r]]=a}),{});return c.forEach((e=>{const a=o.get(u(e)),n=r.indexOf(e);i[n]=a})),s.forEach((e=>{const a=(e=>{if(o.has(u(e)))return o.get(u(e));const a=y[e.moduleName].get(String(e.value)),r=C({value:a,format:e.format||n,language:t});return r&&o.set(u(e),r),r})(e),l=r.indexOf(e);i[l]=a})),i}))},G=e=>{const a=Object.assign({},{format:"origin"},e),{moduleName:r,children:n,format:u}=a,l=w(a,j),c=$(),{language:m,locale:i}=(0,o.useGlobalContext)();return t().createElement(s(),v({},l,{data:{moduleName:r},loader:e=>{let{data:a}=e;const{moduleName:r}=Object.assign({},a);return c({moduleNames:Array.isArray(r)?r:[r],language:m||i})},render:e=>{let{data:a}=e;return"function"===typeof n?n(Array.isArray(r)?a.map((e=>Array.from(e.values()).map((e=>C({value:e,format:u,language:m,locale:i}))))):Array.from(a[0].values()).map((e=>C({value:e,format:u,language:m,locale:i})))):n}}))},M=e=>{const a=Object.assign({},{force:!1},e),{moduleName:r,name:n,format:u,force:l,children:c}=a,m=w(a,q),{language:i,locale:g}=(0,o.useGlobalContext)(),f=P();return(0,b.isEmpty)(n)?t().createElement(G,{moduleName:r,format:u||"origin"},c):t().createElement(s(),v({},m,{loader:e=>{let{data:a}=e;const{requests:r,language:n,format:t}=Object.assign({},a);return f({requests:r,language:n,format:t})},data:{requests:[{moduleName:r,value:n,force:l,format:"function"===typeof c?"origin":u||"default"}],language:i||g||window.navigator.language},render:e=>{let{data:a}=e,n=w(e,_);return"function"===typeof c?c(Array.isArray(r)?a:a[0],n):c||a}}))},S=e=>{const a=Object.assign({},{format:"default"},e),{request:r,children:n}=a,u=w(a,k),{language:l,locale:c}=(0,o.useGlobalContext)(),m=P();return t().createElement(s(),v({},u,{loader:e=>{let{data:a}=e;const{requests:r,format:n,language:t}=Object.assign({},a);return m({requests:r,language:t,format:n})},data:{requests:Array.isArray(r)?r:[r],language:l||c||window.navigator.language},render:e=>{let{data:a}=e,t=w(e,x);return"function"===typeof n?n(Array.isArray(r)?a:a[0],t):n||a.join(",")}}))}}}]);
//# sourceMappingURL=830.eaf96044.chunk.js.map