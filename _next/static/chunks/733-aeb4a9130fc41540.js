(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[733],{1210:function(b,a){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(a,"__esModule",{value:!0}),a.getDomainLocale=c,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),b.exports=a.default)},8418:function(e,a,b){"use strict";var c,g=b(4941).Z;b(5753).default,Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=(c=b(7294),c&&c.__esModule?c:{default:c}),h=b(6273),i=b(2725),j=b(3462),k=b(1018),l=b(7190),m=b(1210),n=b(8684),o=void 0!==d.default.useTransition,p={};function q(a,c,d,b){if(a&&h.isLocalURL(c)){a.prefetch(c,d,b).catch(function(a){});var e=b&& void 0!==b.locale?b.locale:a&&a.locale;p[c+"%"+d+(e?"%"+e:"")]=!0}}var f=d.default.forwardRef(function(a,A){var c,e,B=a.href,C=a.as,D=a.children,E=a.prefetch,F=a.passHref,P=a.replace,Q=a.shallow,R=a.scroll,s=a.locale,S=a.onClick,T=a.onMouseEnter,w=a.legacyBehavior,f=void 0===w?!0!==Boolean(!1):w,G=function(b,f){if(null==b)return{};var c,a,d={},e=Object.keys(b);for(a=0;a<e.length;a++)f.indexOf(c=e[a])>=0||(d[c]=b[c]);return d}(a,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);c=D,f&&("string"==typeof c||"number"==typeof c)&&(c=d.default.createElement("a",null,c));var H=!1!==E,I=g(o?d.default.useTransition():[],2),U=I[1],b=d.default.useContext(j.RouterContext),x=d.default.useContext(k.AppRouterContext);x&&(b=x);var y=d.default.useMemo(function(){var a=g(h.resolveHref(b,B,!0),2),c=a[0],d=a[1];return{href:c,as:C?h.resolveHref(b,C):d||c}},[b,B,C]),t=y.href,r=y.as,V=d.default.useRef(t),W=d.default.useRef(r);f&&(e=d.default.Children.only(c));var J=f?e&&"object"==typeof e&&e.ref:A,u=g(l.useIntersection({rootMargin:"200px"}),3),K=u[0],L=u[1],M=u[2],N=d.default.useCallback(function(a){(W.current!==r||V.current!==t)&&(M(),W.current=r,V.current=t),K(a),J&&("function"==typeof J?J(a):"object"==typeof J&&(J.current=a))},[r,J,t,M,K]);d.default.useEffect(function(){var c=L&&H&&h.isLocalURL(t),a=void 0!==s?s:b&&b.locale,d=p[t+"%"+r+(a?"%"+a:"")];c&&!d&&q(b,t,r,{locale:a})},[r,t,L,s,H,b]);var v={ref:N,onClick:function(a){f||"function"!=typeof S||S(a),f&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,e,d,f,g,i,j,k,b){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(d)){a.preventDefault();var l,m,c=function(){e[g?"replace":"push"](d,f,{shallow:i,locale:k,scroll:j})};b?b(c):c()}}(a,b,t,r,P,Q,R,s,x?U:void 0)},onMouseEnter:function(a){f||"function"!=typeof T||T(a),f&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(t)&&q(b,t,r,{priority:!0})}};if(!f||F||"a"===e.type&&!("href"in e.props)){var z=void 0!==s?s:b&&b.locale,O=b&&b.isLocaleDomain&&m.getDomainLocale(r,z,b.locales,b.domainLocales);v.href=O||n.addBasePath(i.addLocale(r,z,b&&b.defaultLocale))}return f?d.default.cloneElement(e,v):d.default.createElement("a",Object.assign({},G,v),c)});a.default=f,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},7190:function(c,a,b){"use strict";var d=b(4941).Z;Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(a){var j=a.rootRef,k=a.rootMargin,l=a.disabled||!g,p=e.useRef(),b=d(e.useState(!1),2),c=b[0],q=b[1],i=d(e.useState(null),2),m=i[0],n=i[1];e.useEffect(function(){if(g){if(p.current&&(p.current(),p.current=void 0),!l&&!c)return m&&m.tagName&&(p.current=h(m,function(a){return a&&q(a)},{root:null==j?void 0:j.current,rootMargin:k})),function(){null==p.current||p.current(),p.current=void 0}}else if(!c){var a=f.requestIdleCallback(function(){return q(!0)});return function(){return f.cancelIdleCallback(a)}}},[m,l,k,j,c]);var o=e.useCallback(function(){q(!1)},[]);return[n,c,o]};var e=b(7294),f=b(9311),g="function"==typeof IntersectionObserver;function h(b,c,d){var a=k(d),g=a.id,e=a.observer,f=a.elements;return f.set(b,c),e.observe(b),function(){if(f.delete(b),e.unobserve(b),0===f.size){e.disconnect(),i.delete(g);var a=j.findIndex(function(a){return a.root===g.root&&a.margin===g.margin});a> -1&&j.splice(a,1)}}}var i=new Map,j=[];function k(b){var a,c={root:b.root||null,margin:b.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(a=i.get(d)))return a;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},b);return a={id:c,observer:f,elements:e},j.push(c),i.set(c,a),a}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),c.exports=a.default)},1018:function(h,a,d){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.FullAppTreeContext=a.AppTreeContext=a.AppRouterContext=void 0;var b,c=(b=d(7294),b&&b.__esModule?b:{default:b}),e=c.default.createContext(null);a.AppRouterContext=e;var f=c.default.createContext(null);a.AppTreeContext=f;var g=c.default.createContext(null);a.FullAppTreeContext=g},9008:function(a,c,b){a.exports=b(5443)},1664:function(a,c,b){a.exports=b(8418)},5257:function(x,k,i){"use strict";i.d(k,{p:function(){return V}});var j,c=i(7294);function y(a,b,...e){if(a in b){let c=b[a];return"function"==typeof c?c(...e):c}let d=Error(`Tried to handle "${a}" but there is no handler defined. Only defined handlers are: ${Object.keys(b).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,y),d}var d,e,g=((d=g||{})[d.None=0]="None",d[d.RenderStrategy=1]="RenderStrategy",d[d.Static=2]="Static",d),l=((e=l||{})[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e);function z({ourProps:g,theirProps:h,slot:b,defaultTag:c,features:e,visible:i=!0,name:d}){let a=B(h,g);if(i)return A(a,b,c,d);let f=null!=e?e:0;if(2&f){let{static:j=!1,...k}=a;if(j)return A(k,b,c,d)}if(1&f){let{unmount:l=!0,...m}=a;return y(l?0:1,{0:()=>null,1:()=>A({...m,hidden:!0,style:{display:"none"}},b,c,d)})}return A(a,b,c,d)}function A(e,g={},j,k){let{as:d=j,children:f,refName:l="ref",...a}=D(e,["unmount","static"]),h=void 0!==e.ref?{[l]:e.ref}:{},b="function"==typeof f?f(g):f;a.className&&"function"==typeof a.className&&(a.className=a.className(g));let i={};if(d===c.Fragment&&Object.keys(C(a)).length>0){if(!(0,c.isValidElement)(b)||Array.isArray(b)&&b.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${k} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));return(0,c.cloneElement)(b,Object.assign({},B(b.props,C(D(a,["ref"]))),i,h))}return(0,c.createElement)(d,Object.assign({},D(a,["ref"]),d!==c.Fragment&&h,d!==c.Fragment&&i),b)}function B(...d){if(0===d.length)return{};if(1===d.length)return d[0];let b={},c={};for(let e of d)for(let a in e)a.startsWith("on")&&"function"==typeof e[a]?(null!=c[a]||(c[a]=[]),c[a].push(e[a])):b[a]=e[a];if(b.disabled||b["aria-disabled"])return Object.assign(b,Object.fromEntries(Object.keys(c).map(a=>[a,void 0])));for(let f in c)Object.assign(b,{[f](a,...b){let d=c[f];for(let e of d){if(a.defaultPrevented)return;e(a,...b)}}});return b}function h(a){var b;return Object.assign((0,c.forwardRef)(a),{displayName:null!=(b=a.displayName)?b:a.name})}function C(c){let a=Object.assign({},c);for(let b in a)void 0===a[b]&&delete a[b];return a}function D(c,d=[]){let a=Object.assign({},c);for(let b of d)b in a&&delete a[b];return a}let E="undefined"!=typeof window?c.useLayoutEffect:c.useEffect,F=function(d){var a;let b,e=(a=d,b=(0,c.useRef)(a),E(()=>{b.current=a},[a]),b);return c.useCallback((...a)=>e.current(...a),[e])},G=Symbol();function H(...a){let d=(0,c.useRef)(a);(0,c.useEffect)(()=>{d.current=a},[a]);let b=F(b=>{for(let a of d.current)null!=a&&("function"==typeof a?a(b):a.current=b)});return a.every(a=>null==a||(null==a?void 0:a[G]))?void 0:b}let I={serverHandoffComplete:!1},J=0;function K(){return++J}let L=null!=(j=c.useId)?j:function(){let b=function(){let[a,b]=(0,c.useState)(I.serverHandoffComplete);return(0,c.useEffect)(()=>{!0!==a&&b(!0)},[a]),(0,c.useEffect)(()=>{!1===I.serverHandoffComplete&&(I.serverHandoffComplete=!0)},[]),a}(),[a,d]=c.useState(b?K:null);return E(()=>{null===a&&d(K())},[a]),null!=a?""+a:void 0};var a,m=((a=m||{}).Space=" ",a.Enter="Enter",a.Escape="Escape",a.Backspace="Backspace",a.Delete="Delete",a.ArrowLeft="ArrowLeft",a.ArrowUp="ArrowUp",a.ArrowRight="ArrowRight",a.ArrowDown="ArrowDown",a.Home="Home",a.End="End",a.PageUp="PageUp",a.PageDown="PageDown",a.Tab="Tab",a);let n=(0,c.createContext)(null);n.displayName="OpenClosedContext";var o=((O=o||{})[O.Open=0]="Open",O[O.Closed=1]="Closed",O);function M({value:a,children:b}){return c.createElement(n.Provider,{value:a},b)}function N(a){var b;if(a.type)return a.type;let c=null!=(b=a.as)?b:"button";if("string"==typeof c&&"button"===c.toLowerCase())return"button"}var O,f,b,p=((f=p||{})[f.Open=0]="Open",f[f.Closed=1]="Closed",f),q=((b=q||{})[b.ToggleDisclosure=0]="ToggleDisclosure",b[b.CloseDisclosure=1]="CloseDisclosure",b[b.SetButtonId=2]="SetButtonId",b[b.SetPanelId=3]="SetPanelId",b[b.LinkPanel=4]="LinkPanel",b[b.UnlinkPanel=5]="UnlinkPanel",b);let P={0:a=>({...a,disclosureState:y(a.disclosureState,{0:1,1:0})}),1:a=>1===a.disclosureState?a:{...a,disclosureState:1},4:a=>!0===a.linkedPanel?a:{...a,linkedPanel:!0},5:a=>!1===a.linkedPanel?a:{...a,linkedPanel:!1},2:(a,b)=>a.buttonId===b.buttonId?a:{...a,buttonId:b.buttonId},3:(a,b)=>a.panelId===b.panelId?a:{...a,panelId:b.panelId}},r=(0,c.createContext)(null);function Q(d){let a=(0,c.useContext)(r);if(null===a){let b=Error(`<${d} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(b,Q),b}return a}r.displayName="DisclosureContext";let s=(0,c.createContext)(null);function R(d){let a=(0,c.useContext)(s);if(null===a){let b=Error(`<${d} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(b,R),b}return a}s.displayName="DisclosureAPIContext";let t=(0,c.createContext)(null);function S(b,a){return y(a.type,P,b,a)}t.displayName="DisclosurePanelContext";let T=c.Fragment,u=h(function(a,i){let{defaultOpen:j=!1,...k}=a,b=`headlessui-disclosure-button-${L()}`,d=`headlessui-disclosure-panel-${L()}`,t=(0,c.useRef)(null),l=H(i,function(a,b=!0){return Object.assign(a,{[G]:b})}(a=>{t.current=a},void 0===a.as||a.as===c.Fragment)),m=(0,c.useRef)(null),n=(0,c.useRef)(null),e=(0,c.useReducer)(S,{disclosureState:j?0:1,linkedPanel:!1,buttonRef:n,panelRef:m,buttonId:b,panelId:d}),[{disclosureState:f},g]=e;(0,c.useEffect)(()=>g({type:2,buttonId:b}),[b,g]),(0,c.useEffect)(()=>g({type:3,panelId:d}),[d,g]);let h=F(c=>{var a;g({type:1});let d=(a=t,"undefined"==typeof window?null:a instanceof Node?a.ownerDocument:null!=a&&a.hasOwnProperty("current")&&a.current instanceof Node?a.current.ownerDocument:document);if(!d)return;let e=c?c instanceof HTMLElement?c:c.current instanceof HTMLElement?c.current:d.getElementById(b):d.getElementById(b);null==e||e.focus()}),p=(0,c.useMemo)(()=>({close:h}),[h]),q=(0,c.useMemo)(()=>({open:0===f,close:h}),[f,h]);return c.createElement(r.Provider,{value:e},c.createElement(s.Provider,{value:p},c.createElement(M,{value:y(f,{0:o.Open,1:o.Closed})},z({ourProps:{ref:l},theirProps:k,slot:q,defaultTag:T,name:"Disclosure"}))))}),v=h(function(b,k){let[a,p]=Q("Disclosure.Button"),d=(0,c.useContext)(t),e=null!==d&&d===a.panelId,f=(0,c.useRef)(null),g=H(f,k,e?null:a.buttonRef),h=F(b=>{var c;if(e){if(1===a.disclosureState)return;switch(b.key){case m.Space:case m.Enter:b.preventDefault(),b.stopPropagation(),p({type:0}),null==(c=a.buttonRef.current)||c.focus()}}else switch(b.key){case m.Space:case m.Enter:b.preventDefault(),b.stopPropagation(),p({type:0})}}),l=F(a=>{a.key===m.Space&&a.preventDefault()}),i=F(d=>{var c;(function(d){let a=d.parentElement,b=null;for(;a&&!(a instanceof HTMLFieldSetElement);)a instanceof HTMLLegendElement&&(b=a),a=a.parentElement;let c=(null==a?void 0:a.getAttribute("disabled"))==="";return!(c&&function c(b){if(!b)return!1;let a=b.previousElementSibling;for(;null!==a;){if(a instanceof HTMLLegendElement)return!1;a=a.previousElementSibling}return!0}(b))&&c})(d.currentTarget)||b.disabled||(e?(p({type:0}),null==(c=a.buttonRef.current)||c.focus()):p({type:0}))}),n=(0,c.useMemo)(()=>({open:0===a.disclosureState}),[a]),j=function(a,d){let[b,e]=(0,c.useState)(()=>N(a));return E(()=>{e(N(a))},[a.type,a.as]),E(()=>{b||!d.current||d.current instanceof HTMLButtonElement&&!d.current.hasAttribute("type")&&e("button")},[b,d]),b}(b,f),o=e?{ref:g,type:j,onKeyDown:h,onClick:i}:{ref:g,id:a.buttonId,type:j,"aria-expanded":b.disabled?void 0:0===a.disclosureState,"aria-controls":a.linkedPanel?a.panelId:void 0,onKeyDown:h,onKeyUp:l,onClick:i};return z({ourProps:o,theirProps:b,slot:n,defaultTag:"button",name:"Disclosure.Button"})}),U=g.RenderStrategy|g.Static,w=h(function(b,f){let[a,d]=Q("Disclosure.Panel"),{close:g}=R("Disclosure.Panel"),h=H(f,a.panelRef,()=>{a.linkedPanel||d({type:4})}),e=(0,c.useContext)(n),i=null!==e?e===o.Open:0===a.disclosureState;(0,c.useEffect)(()=>()=>d({type:5}),[d]),(0,c.useEffect)(()=>{var c;1===a.disclosureState&&(null==(c=b.unmount)||c)&&d({type:5})},[a.disclosureState,b.unmount,d]);let j=(0,c.useMemo)(()=>({open:0===a.disclosureState,close:g}),[a,g]),k={ref:h,id:a.panelId};return c.createElement(t.Provider,{value:a.panelId},z({ourProps:k,theirProps:b,slot:j,defaultTag:"div",features:U,visible:i,name:"Disclosure.Panel"}))}),V=Object.assign(u,{Button:v,Panel:w})},9065:function(e,a,b){"use strict";var c=b(7294);let d=c.forwardRef(function(a,b){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:b},a),c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"}))});a.Z=d},5506:function(e,a,b){"use strict";var c=b(7294);let d=c.forwardRef(function(a,b){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:b},a),c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});a.Z=d}}])