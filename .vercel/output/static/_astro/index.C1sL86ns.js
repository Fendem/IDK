import{j as C,a as Y}from"./utils.JnRaa0S_.js";import{g as G,r as i,R as J,b as R}from"./index.FkReswY5.js";import{r as Q}from"./index.DnQl-8DU.js";var H=Q();const Ie=G(H);function F(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function K(...e){return t=>{let n=!1;const r=e.map(o=>{const s=F(o,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let o=0;o<r.length;o++){const s=r[o];typeof s=="function"?s():F(e[o],null)}}}}function N(...e){return i.useCallback(K(...e),e)}var D=i.forwardRef((e,t)=>{const{children:n,...r}=e,o=i.Children.toArray(n),s=o.find(te);if(s){const a=s.props.children,u=o.map(l=>l===s?i.Children.count(a)>1?i.Children.only(null):i.isValidElement(a)?a.props.children:null:l);return C.jsx(I,{...r,ref:t,children:i.isValidElement(a)?i.cloneElement(a,void 0,u):null})}return C.jsx(I,{...r,ref:t,children:n})});D.displayName="Slot";var I=i.forwardRef((e,t)=>{const{children:n,...r}=e;if(i.isValidElement(n)){const o=re(n),s=ne(r,n.props);return n.type!==i.Fragment&&(s.ref=t?K(t,o):o),i.cloneElement(n,s)}return i.Children.count(n)>1?i.Children.only(null):null});I.displayName="SlotClone";var ee=({children:e})=>C.jsx(C.Fragment,{children:e});function te(e){return i.isValidElement(e)&&e.type===ee}function ne(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...u)=>{s(...u),o(...u)}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function re(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}const U=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,B=Y,Te=(e,t)=>n=>{var r;if(t?.variants==null)return B(e,n?.class,n?.className);const{variants:o,defaultVariants:s}=t,a=Object.keys(o).map(c=>{const d=n?.[c],f=s?.[c];if(d===null)return null;const m=U(d)||U(f);return o[c][m]}),u=n&&Object.entries(n).reduce((c,d)=>{let[f,m]=d;return m===void 0||(c[f]=m),c},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,d)=>{let{class:f,className:m,...v}=d;return Object.entries(v).every(p=>{let[h,y]=p;return Array.isArray(y)?y.includes({...s,...u}[h]):{...s,...u}[h]===y})?[...c,f,m]:c},[]);return B(e,a,l,n?.class,n?.className)};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var se={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:s,iconNode:a,...u},l)=>i.createElement("svg",{ref:l,...se,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:q("lucide",o),...u},[...a.map(([c,d])=>i.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(e,t)=>{const n=i.forwardRef(({className:r,...o},s)=>i.createElement(ie,{ref:s,iconNode:t,className:q(`lucide-${oe(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=ce("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var ae=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],_=ae.reduce((e,t)=>{const n=i.forwardRef((r,o)=>{const{asChild:s,...a}=r,u=s?D:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),C.jsx(u,{...a,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function ue(e,t){e&&H.flushSync(()=>e.dispatchEvent(t))}function M(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e?.(o),n===!1||!o.defaultPrevented)return t?.(o)}}function _e(e,t){const n=i.createContext(t),r=s=>{const{children:a,...u}=s,l=i.useMemo(()=>u,Object.values(u));return C.jsx(n.Provider,{value:l,children:a})};r.displayName=e+"Provider";function o(s){const a=i.useContext(n);if(a)return a;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return[r,o]}function le(e,t=[]){let n=[];function r(s,a){const u=i.createContext(a),l=n.length;n=[...n,a];const c=f=>{const{scope:m,children:v,...p}=f,h=m?.[e]?.[l]||u,y=i.useMemo(()=>p,Object.values(p));return C.jsx(h.Provider,{value:y,children:v})};c.displayName=s+"Provider";function d(f,m){const v=m?.[e]?.[l]||u,p=i.useContext(v);if(p)return p;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${s}\``)}return[c,d]}const o=()=>{const s=n.map(a=>i.createContext(a));return function(u){const l=u?.[e]||s;return i.useMemo(()=>({[`__scope${e}`]:{...u,[e]:l}}),[u,l])}};return o.scopeName=e,[r,de(o,...t)]}function de(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const a=r.reduce((u,{useScope:l,scopeName:c})=>{const f=l(s)[`__scope${c}`];return{...u,...f}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}var T=globalThis?.document?i.useLayoutEffect:()=>{},fe=J.useId||(()=>{}),me=0;function ke(e){const[t,n]=i.useState(fe());return T(()=>{n(r=>r??String(me++))},[e]),e||(t?`radix-${t}`:"")}function P(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...n)=>t.current?.(...n),[])}function We({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=ve({defaultProp:t,onChange:n}),s=e!==void 0,a=s?e:r,u=P(n),l=i.useCallback(c=>{if(s){const f=typeof c=="function"?c(e):c;f!==e&&u(f)}else o(c)},[s,e,o,u]);return[a,l]}function ve({defaultProp:e,onChange:t}){const n=i.useState(e),[r]=n,o=i.useRef(r),s=P(t);return i.useEffect(()=>{o.current!==r&&(s(r),o.current=r)},[r,o,s]),n}function pe(e,t=globalThis?.document){const n=P(e);i.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var ye="DismissableLayer",j="dismissableLayer.update",Ee="dismissableLayer.pointerDownOutside",he="dismissableLayer.focusOutside",$,z=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ce=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:s,onInteractOutside:a,onDismiss:u,...l}=e,c=i.useContext(z),[d,f]=i.useState(null),m=d?.ownerDocument??globalThis?.document,[,v]=i.useState({}),p=N(t,E=>f(E)),h=Array.from(c.layers),[y]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),b=h.indexOf(y),g=d?h.indexOf(d):-1,O=c.layersWithOutsidePointerEventsDisabled.size>0,w=g>=b,A=we(E=>{const x=E.target,W=[...c.branches].some(L=>L.contains(x));!w||W||(o?.(E),a?.(E),E.defaultPrevented||u?.())},m),k=Re(E=>{const x=E.target;[...c.branches].some(L=>L.contains(x))||(s?.(E),a?.(E),E.defaultPrevented||u?.())},m);return pe(E=>{g===c.layers.size-1&&(r?.(E),!E.defaultPrevented&&u&&(E.preventDefault(),u()))},m),i.useEffect(()=>{if(d)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&($=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),V(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=$)}},[d,m,n,c]),i.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),V())},[d,c]),i.useEffect(()=>{const E=()=>v({});return document.addEventListener(j,E),()=>document.removeEventListener(j,E)},[]),C.jsx(_.div,{...l,ref:p,style:{pointerEvents:O?w?"auto":"none":void 0,...e.style},onFocusCapture:M(e.onFocusCapture,k.onFocusCapture),onBlurCapture:M(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:M(e.onPointerDownCapture,A.onPointerDownCapture)})});Ce.displayName=ye;var be="DismissableLayerBranch",ge=i.forwardRef((e,t)=>{const n=i.useContext(z),r=i.useRef(null),o=N(t,r);return i.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),C.jsx(_.div,{...e,ref:o})});ge.displayName=be;function we(e,t=globalThis?.document){const n=P(e),r=i.useRef(!1),o=i.useRef(()=>{});return i.useEffect(()=>{const s=u=>{if(u.target&&!r.current){let l=function(){Z(Ee,n,c,{discrete:!0})};const c={originalEvent:u};u.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",s),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Re(e,t=globalThis?.document){const n=P(e),r=i.useRef(!1);return i.useEffect(()=>{const o=s=>{s.target&&!r.current&&Z(he,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function V(){const e=new CustomEvent(j);document.dispatchEvent(e)}function Z(e,t,n,{discrete:r}){const o=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?ue(o,s):o.dispatchEvent(s)}function Ne(e,t){return i.useReducer((n,r)=>t[n][r]??n,e)}var Pe=e=>{const{present:t,children:n}=e,r=Oe(t),o=typeof n=="function"?n({present:r.isPresent}):i.Children.only(n),s=N(r.ref,xe(o));return typeof n=="function"||r.isPresent?i.cloneElement(o,{ref:s}):null};Pe.displayName="Presence";function Oe(e){const[t,n]=i.useState(),r=i.useRef({}),o=i.useRef(e),s=i.useRef("none"),a=e?"mounted":"unmounted",[u,l]=Ne(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const c=S(r.current);s.current=u==="mounted"?c:"none"},[u]),T(()=>{const c=r.current,d=o.current;if(d!==e){const m=s.current,v=S(c);e?l("MOUNT"):v==="none"||c?.display==="none"?l("UNMOUNT"):l(d&&m!==v?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),T(()=>{if(t){let c;const d=t.ownerDocument.defaultView??window,f=v=>{const h=S(r.current).includes(v.animationName);if(v.target===t&&h&&(l("ANIMATION_END"),!o.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},m=v=>{v.target===t&&(s.current=S(r.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:i.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function S(e){return e?.animationName||"none"}function xe(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Se="VisuallyHidden",X=i.forwardRef((e,t)=>C.jsx(_.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));X.displayName=Se;var Fe=X;function Ue(e){const t=e+"CollectionProvider",[n,r]=le(t),[o,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=v=>{const{scope:p,children:h}=v,y=R.useRef(null),b=R.useRef(new Map).current;return C.jsx(o,{scope:p,itemMap:b,collectionRef:y,children:h})};a.displayName=t;const u=e+"CollectionSlot",l=R.forwardRef((v,p)=>{const{scope:h,children:y}=v,b=s(u,h),g=N(p,b.collectionRef);return C.jsx(D,{ref:g,children:y})});l.displayName=u;const c=e+"CollectionItemSlot",d="data-radix-collection-item",f=R.forwardRef((v,p)=>{const{scope:h,children:y,...b}=v,g=R.useRef(null),O=N(p,g),w=s(c,h);return R.useEffect(()=>(w.itemMap.set(g,{ref:g,...b}),()=>void w.itemMap.delete(g))),C.jsx(D,{[d]:"",ref:O,children:y})});f.displayName=c;function m(v){const p=s(e+"CollectionConsumer",v);return R.useCallback(()=>{const y=p.collectionRef.current;if(!y)return[];const b=Array.from(y.querySelectorAll(`[${d}]`));return Array.from(p.itemMap.values()).sort((w,A)=>b.indexOf(w.ref.current)-b.indexOf(A.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:a,Slot:l,ItemSlot:f},m,r]}var De=i.createContext(void 0);function Be(e){const t=i.useContext(De);return e||t||"ltr"}export{je as C,Ce as D,_ as P,Fe as R,D as S,Be as a,We as b,le as c,Ue as d,M as e,Pe as f,Ie as g,P as h,ke as i,T as j,K as k,ue as l,Te as m,ce as n,_e as o,ee as p,H as r,N as u};
