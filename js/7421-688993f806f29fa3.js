(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7421],{71739:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},67421:function(e,n,t){"use strict";let a;t.d(n,{$G:function(){return y}});var s=t(67294);t(71739),Object.create(null);let r={};function o(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&r[n[0]]||("string"==typeof n[0]&&(r[n[0]]=new Date),function(){if(console&&console.warn){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&(n[0]=`react-i18next:: ${n[0]}`),console.warn(...n)}}(...n))}let i=(e,n)=>()=>{if(e.isInitialized)n();else{let t=()=>{setTimeout(()=>{e.off("initialized",t)},0),n()};e.on("initialized",t)}};function u(e,n,t){e.loadNamespaces(n,i(e,t))}function l(e,n,t,a){"string"==typeof t&&(t=[t]),t.forEach(n=>{0>e.options.ns.indexOf(n)&&e.options.ns.push(n)}),e.loadLanguages(n,i(e,a))}let c=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,g={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},p=e=>g[e],d=e=>e.replace(c,p),f={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:d},h=(0,s.createContext)();class m{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}let b=(e,n)=>{let t=(0,s.useRef)();return(0,s.useEffect)(()=>{t.current=n?t.current:e},[e,n]),t.current};function y(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{i18n:t}=n,{i18n:r,defaultNS:i}=(0,s.useContext)(h)||{},c=t||r||a;if(c&&!c.reportNamespaces&&(c.reportNamespaces=new m),!c){o("You will need to pass in an i18next instance by using initReactI18next");let g=(e,n)=>"string"==typeof n?n:n&&"object"==typeof n&&"string"==typeof n.defaultValue?n.defaultValue:Array.isArray(e)?e[e.length-1]:e,p=[g,{},!1];return p.t=g,p.i18n={},p.ready=!1,p}c.options.react&&void 0!==c.options.react.wait&&o("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");let d={...f,...c.options.react,...n},{useSuspense:y,keyPrefix:N}=d,k=e||i||c.options&&c.options.defaultNS;k="string"==typeof k?[k]:k||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(k);let x=(c.isInitialized||c.initializedStoreOnce)&&k.every(e=>(function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return o("i18n.languages were undefined or empty",n.languages),!0;let a=void 0!==n.options.ignoreJSONStructure;return a?n.hasLoadedNamespace(e,{lng:t.lng,precheck(n,a){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))return!1}}):function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.languages[0],s=!!n.options&&n.options.fallbackLng,r=n.languages[n.languages.length-1];if("cimode"===a.toLowerCase())return!0;let o=(e,t)=>{let a=n.services.backendConnector.state[`${e}|${t}`];return -1===a||2===a};return(!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1)||!n.services.backendConnector.backend||!n.isLanguageChangingTo||!!o(n.isLanguageChangingTo,e))&&!!(n.hasResourceBundle(a,e)||!n.services.backendConnector.backend||n.options.resources&&!n.options.partialBundledLanguages||o(a,e)&&(!s||o(r,e)))}(e,n,t)})(e,c,d));function C(){return c.getFixedT(n.lng||null,"fallback"===d.nsMode?k:k[0],N)}let[w,v]=(0,s.useState)(C),E=k.join();n.lng&&(E=`${n.lng}${E}`);let I=b(E),S=(0,s.useRef)(!0);(0,s.useEffect)(()=>{let{bindI18n:e,bindI18nStore:t}=d;function a(){S.current&&v(C)}return S.current=!0,x||y||(n.lng?l(c,n.lng,k,()=>{S.current&&v(C)}):u(c,k,()=>{S.current&&v(C)})),x&&I&&I!==E&&S.current&&v(C),e&&c&&c.on(e,a),t&&c&&c.store.on(t,a),()=>{S.current=!1,e&&c&&e.split(" ").forEach(e=>c.off(e,a)),t&&c&&t.split(" ").forEach(e=>c.store.off(e,a))}},[c,E]);let L=(0,s.useRef)(!0);(0,s.useEffect)(()=>{S.current&&!L.current&&v(C),L.current=!1},[c,N]);let O=[w,c,x];if(O.t=w,O.i18n=c,O.ready=x,x||!x&&!y)return O;throw new Promise(e=>{n.lng?l(c,n.lng,k,()=>e()):u(c,k,()=>e())})}}}]);
//# sourceMappingURL=7421-688993f806f29fa3.js.map