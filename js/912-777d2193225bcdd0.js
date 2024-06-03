(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[912],{63736:function(e,t,r){"use strict";r.d(t,{NY:function(){return w},Ee:function(){return E},fC:function(){return g}});var n=r(87462),i=r(67294);let o=Boolean(null==globalThis?void 0:globalThis.document)?i.useLayoutEffect:()=>{};r(73935);let s=(0,i.forwardRef)((e,t)=>{let{children:r,...o}=e,s=i.Children.toArray(r),a=s.find(l);if(a){let c=a.props.children,f=s.map(e=>e!==a?e:i.Children.count(c)>1?i.Children.only(null):(0,i.isValidElement)(c)?c.props.children:null);return(0,i.createElement)(u,(0,n.Z)({},o,{ref:t}),(0,i.isValidElement)(c)?(0,i.cloneElement)(c,void 0,f):null)}return(0,i.createElement)(u,(0,n.Z)({},o,{ref:t}),r)});s.displayName="Slot";let u=(0,i.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,i.isValidElement)(r)?(0,i.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let i=e[n],o=t[n],s=/^on[A-Z]/.test(n);s?i&&o?r[n]=(...e)=>{o(...e),i(...e)}:i&&(r[n]=i):"style"===n?r[n]={...i,...o}:"className"===n&&(r[n]=[i,o].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:function(...e){return t=>e.forEach(e=>{var r;"function"==typeof(r=e)?r(t):null!=r&&(r.current=t)})}(t,r.ref)}):i.Children.count(r)>1?i.Children.only(null):null});u.displayName="SlotClone";let a=({children:e})=>(0,i.createElement)(i.Fragment,null,e);function l(e){return(0,i.isValidElement)(e)&&e.type===a}let c=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,i.forwardRef)((e,r)=>{let{asChild:o,...u}=e,a=o?s:t;return(0,i.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,i.createElement)(a,(0,n.Z)({},u,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),f="Avatar",[d,h]=function(e,t=[]){let r=[],n=()=>{let t=r.map(e=>(0,i.createContext)(e));return function(r){let n=(null==r?void 0:r[e])||t;return(0,i.useMemo)(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return n.scopeName=e,[function(t,n){let o=(0,i.createContext)(n),s=r.length;function u(t){let{scope:r,children:n,...u}=t,a=(null==r?void 0:r[e][s])||o,l=(0,i.useMemo)(()=>u,Object.values(u));return(0,i.createElement)(a.Provider,{value:l},n)}return r=[...r,n],u.displayName=t+"Provider",[u,function(r,u){let a=(null==u?void 0:u[e][s])||o,l=(0,i.useContext)(a);if(l)return l;if(void 0!==n)return n;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:n})=>{let i=r(e),o=i[`__scope${n}`];return{...t,...o}},{});return(0,i.useMemo)(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(n,...t)]}(f),[m,p]=d(f),v=(0,i.forwardRef)((e,t)=>{let{__scopeAvatar:r,...o}=e,[s,u]=(0,i.useState)("idle");return(0,i.createElement)(m,{scope:r,imageLoadingStatus:s,onImageLoadingStatusChange:u},(0,i.createElement)(c.span,(0,n.Z)({},o,{ref:t})))}),y=(0,i.forwardRef)((e,t)=>{let{__scopeAvatar:r,src:s,onLoadingStatusChange:u=()=>{},...a}=e,l=p("AvatarImage",r),f=function(e){let[t,r]=(0,i.useState)("idle");return(0,i.useEffect)(()=>{if(!e){r("error");return}let t=!0,n=new window.Image,i=e=>()=>{t&&r(e)};return r("loading"),n.onload=i("loaded"),n.onerror=i("error"),n.src=e,()=>{t=!1}},[e]),t}(s),d=function(e){let t=(0,i.useRef)(e);return(0,i.useEffect)(()=>{t.current=e}),(0,i.useMemo)(()=>(...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)},[])}(e=>{u(e),l.onImageLoadingStatusChange(e)});return o(()=>{"idle"!==f&&d(f)},[f,d]),"loaded"===f?(0,i.createElement)(c.img,(0,n.Z)({},a,{ref:t,src:s})):null}),_=(0,i.forwardRef)((e,t)=>{let{__scopeAvatar:r,delayMs:o,...s}=e,u=p("AvatarFallback",r),[a,l]=(0,i.useState)(void 0===o);return(0,i.useEffect)(()=>{if(void 0!==o){let e=window.setTimeout(()=>l(!0),o);return()=>window.clearTimeout(e)}},[o]),a&&"loaded"!==u.imageLoadingStatus?(0,i.createElement)(c.span,(0,n.Z)({},s,{ref:t})):null}),g=v,E=y,w=_},7996:function(e){var t=function(e){void 0==e&&(e=new Date().getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=Array(this.N),this.mti=this.N+1,e.constructor==Array?this.init_by_array(e,e.length):this.init_seed(e)};t.prototype.init_seed=function(e){for(this.mt[0]=e>>>0,this.mti=1;this.mti<this.N;this.mti++){var e=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(((4294901760&e)>>>16)*1812433253<<16)+(65535&e)*1812433253+this.mti,this.mt[this.mti]>>>=0}},t.prototype.init_by_array=function(e,t){var r,n,i;for(this.init_seed(19650218),r=1,n=0,i=this.N>t?this.N:t;i;i--){var o=this.mt[r-1]^this.mt[r-1]>>>30;this.mt[r]=(this.mt[r]^(((4294901760&o)>>>16)*1664525<<16)+(65535&o)*1664525)+e[n]+n,this.mt[r]>>>=0,r++,n++,r>=this.N&&(this.mt[0]=this.mt[this.N-1],r=1),n>=t&&(n=0)}for(i=this.N-1;i;i--){var o=this.mt[r-1]^this.mt[r-1]>>>30;this.mt[r]=(this.mt[r]^(((4294901760&o)>>>16)*1566083941<<16)+(65535&o)*1566083941)-r,this.mt[r]>>>=0,++r>=this.N&&(this.mt[0]=this.mt[this.N-1],r=1)}this.mt[0]=2147483648},t.prototype.random_int=function(){var e,t,r=[0,this.MATRIX_A];if(this.mti>=this.N){for(this.mti==this.N+1&&this.init_seed(5489),t=0;t<this.N-this.M;t++)e=this.mt[t]&this.UPPER_MASK|this.mt[t+1]&this.LOWER_MASK,this.mt[t]=this.mt[t+this.M]^e>>>1^r[1&e];for(;t<this.N-1;t++)e=this.mt[t]&this.UPPER_MASK|this.mt[t+1]&this.LOWER_MASK,this.mt[t]=this.mt[t+(this.M-this.N)]^e>>>1^r[1&e];e=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^e>>>1^r[1&e],this.mti=0}return e=this.mt[this.mti++],e^=e>>>11,e^=e<<7&2636928640,e^=e<<15&4022730752,(e^=e>>>18)>>>0},t.prototype.random_int31=function(){return this.random_int()>>>1},t.prototype.random_incl=function(){return this.random_int()*(1/4294967295)},t.prototype.random=function(){return this.random_int()*(1/4294967296)},t.prototype.random_excl=function(){return(this.random_int()+.5)*(1/4294967296)},t.prototype.random_long=function(){return(67108864*(this.random_int()>>>5)+(this.random_int()>>>6))*(1/9007199254740992)},e.exports=t},35342:function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&s(t,e,r);return u(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=r(85893),f=a(r(67294)),d=l(r(7996)),h=r(16401),m=l(r(17241)),p=l(r(62480)),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.genColor=function(e){t.generator.random();var r=Math.floor(e.length*t.generator.random());return e.splice(r,1)[0]},t.hueShift=function(e,t){var r=30*t.random()-15;return e.map(function(e){return(0,h.colorRotate)(e,r)})},t.genShape=function(e,r,n,i){var o=r/2,s=t.generator.random(),u=2*Math.PI*s,a=r/i*t.generator.random()+n*r/i,l="rotate("+(360*s+180*t.generator.random()).toFixed(1)+" "+o+" "+o+")",f=t.genColor(e);return(0,c.jsx)("rect",{x:"0",y:"0",rx:"0",ry:"0",height:r,width:r,transform:"translate("+Math.cos(u)*a+" "+Math.sin(u)*a+") "+l,fill:f},n)},t}return i(t,e),t.prototype.render=function(){var e=this,t=this.props,r=t.diameter,n=void 0===r?24:r,i=t.paperStyles,s=t.seed,u=t.svgStyles;this.generator=new d.default(s);var a=this.hueShift(m.default.slice(),this.generator),l=[,,,,].fill(void 0);return(0,c.jsx)(p.default,o({color:this.genColor(a),diameter:n,style:void 0===i?{}:i},{children:(0,c.jsx)("svg",o({xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",height:n,width:n,style:void 0===u?{}:u},{children:l.map(function(t,r){return e.genShape(a,n,r,3)})}),void 0)}),void 0)},t}(f.PureComponent);t.default=v},62480:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(85893),o={borderRadius:"50px",display:"inline-block",margin:0,overflow:"hidden",padding:0};t.default=function(e){var t=e.children,r=e.color,s=e.diameter,u=e.style;return(0,i.jsx)("div",n({className:"paper",style:n(n(n({},o),{backgroundColor:r,height:s,width:s}),u)},{children:t}),void 0)}},16401:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HSLToHex=t.hexToHSL=t.colorRotate=void 0,t.colorRotate=function(e,r){var n=(0,t.hexToHSL)(e),i=n.h;return i=(i=(i+r)%360)<0?360+i:i,n.h=i,(0,t.HSLToHex)(n)},t.hexToHSL=function(e){var t="0x"+e[1]+e[2],r="0x"+e[3]+e[4],n="0x"+e[5]+e[6],i=parseInt(t)/255,o=parseInt(r)/255,s=parseInt(n)/255,u=Math.min(i,o,s),a=Math.max(i,o,s),l=a-u,c=0,f=0,d=0;return(c=Math.round(60*(c=0==l?0:a==i?(o-s)/l%6:a==o?(s-i)/l+2:(i-o)/l+4)))<0&&(c+=360),d=(a+u)/2,{h:c,s:+(100*(0==l?0:l/(1-Math.abs(2*d-1)))).toFixed(1),l:d=+(100*d).toFixed(1)}},t.HSLToHex=function(e){var t=e.h,r=e.s,n=e.l,i=(1-Math.abs(2*(n/=100)-1))*(r/=100),o=i*(1-Math.abs(t/60%2-1)),s=n-i/2,u=0,a=0,l=0;0<=t&&t<60?(u=i,a=o,l=0):60<=t&&t<120?(u=o,a=i,l=0):120<=t&&t<180?(u=0,a=i,l=o):180<=t&&t<240?(u=0,a=o,l=i):240<=t&&t<300?(u=o,a=0,l=i):300<=t&&t<360&&(u=i,a=0,l=o);var c=Math.round((u+s)*255).toString(16),f=Math.round((a+s)*255).toString(16),d=Math.round((l+s)*255).toString(16);return 1==c.length&&(c="0"+c),1==f.length&&(f="0"+f),1==d.length&&(d="0"+d),"#"+c+f+d}},17241:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=Object.freeze(["#01888c","#fc7500","#034f5d","#f73f01","#fc1960","#c7144c","#f3c100","#1598f2","#2465e1","#f19e02"])},44111:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.jsNumberForAddress=t.default=void 0;var i=r(35342);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(i).default}});var o=r(586);Object.defineProperty(t,"jsNumberForAddress",{enumerable:!0,get:function(){return n(o).default}})},586:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return parseInt(e.slice(2,10),16)}},5678:function(e,t,r){"use strict";r.d(t,{m9:function(){return i},Nr:function(){return o},S1:function(){return s}});var n=r(67294),i=function(){let[e,t]=(0,n.useState)(null),r=e=>{var r,n,i,o;return r=this,n=void 0,i=void 0,o=function*(){if(!(null==navigator?void 0:navigator.clipboard))return console.warn("Clipboard not supported"),!1;try{return yield navigator.clipboard.writeText(e),t(e),!0}catch(r){return console.warn("Copy failed",r),t(null),!1}},new(i||(i=Promise))(function(e,t){function s(e){try{a(o.next(e))}catch(r){t(r)}}function u(e){try{a(o.throw(e))}catch(r){t(r)}}function a(t){var r;t.done?e(t.value):((r=t.value)instanceof i?r:new i(function(e){e(r)})).then(s,u)}a((o=o.apply(r,n||[])).next())})};return[e,r]},o=function(e,t){let[r,i]=(0,n.useState)(e);return(0,n.useEffect)(()=>{let r=setTimeout(()=>i(e),t||500);return()=>{clearTimeout(r)}},[e,t]),r},s=function(e,{threshold:t=0,root:r=null,rootMargin:i="0%",freezeOnceVisible:o=!1}){let[s,u]=(0,n.useState)(),a=(null==s?void 0:s.isIntersecting)&&o,l=([e])=>{u(e)};return(0,n.useEffect)(()=>{let n=null==e?void 0:e.current,o=!!window.IntersectionObserver;if(!o||a||!n)return;let s=new IntersectionObserver(l,{threshold:t,root:r,rootMargin:i});return s.observe(n),()=>s.disconnect()},[null==e?void 0:e.current,JSON.stringify(t),r,i,a]),s};"undefined"!=typeof window?n.useLayoutEffect:n.useEffect},51526:function(e,t,r){"use strict";r.d(t,{M:function(){return v}});var n=r(67294),i=r(58868);function o(){let e=(0,n.useRef)(!1);return(0,i.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var s=r(26166),u=r(240),a=r(96681);class l extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:t}){let r=(0,n.useId)(),i=(0,n.useRef)(null),o=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)(()=>{let{width:e,height:n,top:s,left:u}=o.current;if(t||!i.current||!e||!n)return;i.current.dataset.motionPopId=r;let a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${s}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[t]),n.createElement(l,{isPresent:t,childRef:i,sizeRef:o},n.cloneElement(e,{ref:i}))}let f=({children:e,initial:t,isPresent:r,onExitComplete:i,custom:o,presenceAffectsLayout:s,mode:l})=>{let f=(0,a.h)(d),h=(0,n.useId)(),m=(0,n.useMemo)(()=>({id:h,initial:t,isPresent:r,custom:o,onExitComplete(e){for(let t of(f.set(e,!0),f.values()))if(!t)return;i&&i()},register:e=>(f.set(e,!1),()=>f.delete(e))}),s?void 0:[r]);return(0,n.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[r]),n.useEffect(()=>{r||f.size||!i||i()},[r]),"popLayout"===l&&(e=n.createElement(c,{isPresent:r},e)),n.createElement(u.O.Provider,{value:m},e)};function d(){return new Map}var h=r(25364),m=r(45487);let p=e=>e.key||"",v=({children:e,custom:t,initial:r=!0,onExitComplete:u,exitBeforeEnter:a,presenceAffectsLayout:l=!0,mode:c="sync"})=>{var d;(0,m.k)(!a,"Replace exitBeforeEnter with mode='wait'");let v=(0,n.useContext)(h.p).forceRender||function(){let e=o(),[t,r]=(0,n.useState)(0),i=(0,n.useCallback)(()=>{e.current&&r(t+1)},[t]),u=(0,n.useCallback)(()=>s.Wi.postRender(i),[i]);return[u,t]}()[0],y=o(),_=function(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}(e),g=_,E=(0,n.useRef)(new Map).current,w=(0,n.useRef)(g),b=(0,n.useRef)(new Map).current,M=(0,n.useRef)(!0);if((0,i.L)(()=>{M.current=!1,function(e,t){e.forEach(e=>{let r=p(e);t.set(r,e)})}(_,b),w.current=g}),d=()=>{M.current=!0,b.clear(),E.clear()},(0,n.useEffect)(()=>()=>d(),[]),M.current)return n.createElement(n.Fragment,null,g.map(e=>n.createElement(f,{key:p(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:l,mode:c},e)));g=[...g];let x=w.current.map(p),S=_.map(p),N=x.length;for(let O=0;O<N;O++){let P=x[O];-1!==S.indexOf(P)||E.has(P)||E.set(P,void 0)}return"wait"===c&&E.size&&(g=[]),E.forEach((e,r)=>{if(-1!==S.indexOf(r))return;let i=b.get(r);if(!i)return;let o=x.indexOf(r),s=e;if(!s){let a=()=>{E.delete(r);let e=Array.from(b.keys()).filter(e=>!S.includes(e));if(e.forEach(e=>b.delete(e)),w.current=_.filter(t=>{let n=p(t);return n===r||e.includes(n)}),!E.size){if(!1===y.current)return;v(),u&&u()}};s=n.createElement(f,{key:p(i),isPresent:!1,onExitComplete:a,custom:t,presenceAffectsLayout:l,mode:c},i),E.set(r,s)}g.splice(o,0,s)}),g=g.map(e=>{let t=e.key;return E.has(t)?e:n.createElement(f,{key:p(e),isPresent:!0,presenceAffectsLayout:l,mode:c},e)}),n.createElement(n.Fragment,null,E.size?g:g.map(e=>(0,n.cloneElement)(e)))}},33305:function(e,t,r){"use strict";r.d(t,{f:function(){return o}});var n=r(84192),i=r(21803);function o(e,t="wei"){return(0,i.v)(e,n.ez[t])}}}]);
//# sourceMappingURL=912-777d2193225bcdd0.js.map