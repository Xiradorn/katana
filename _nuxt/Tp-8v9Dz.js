import{i as ae,f as ge,g as E,h as ve,r as F,j as he,k as h,l as s,m as ye,n as R,p as se,o as g,q as y,w as v,s as O,P as I,v as we,x as re,y as Y,z as ie,A as le,B as N,C as be,D as _e,E as $,F as K,G as J,H as Ce,b as M,I as Ee,J as W,K as De,L as Oe,M as G,N as ue,O as j,Q as Be,R as ke,S as Re,T as Q,U as Le,V as A,W as ce,X as de,Y as Ae,Z as ee,$ as Fe,a0 as Ue,a1 as $e,a2 as Se,a3 as Pe,a4 as Me,a5 as k,a6 as Ie,a7 as xe,c as U,d as te,t as P,a8 as Te,a9 as je,aa as Ne,ab as Ke,a as D}from"./CV0U0XXF.js";const ze=globalThis.crypto,Ve=()=>ze.randomUUID();function V(o,n="reka"){return ae({useId:void 0}),`${n}-${ge()}`}const[L,We]=ye("DialogRoot"),Ge=E({inheritAttrs:!1,__name:"DialogRoot",props:{open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},modal:{type:Boolean,default:!0}},emits:["update:open"],setup(o,{emit:n}){const e=o,a=ve(e,"open",n,{defaultValue:e.defaultOpen,passive:e.open===void 0}),p=F(),f=F(),{modal:i}=he(e);return We({open:a,modal:i,openModal:()=>{a.value=!0},onOpenChange:u=>{a.value=u},onOpenToggle:()=>{a.value=!a.value},contentId:"",titleId:"",descriptionId:"",triggerElement:p,contentElement:f}),(u,c)=>h(u.$slots,"default",{open:s(a)})}}),He=E({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(o){const n=o,e=L(),{forwardRef:r,currentElement:a}=R();return e.contentId||(e.contentId=V(void 0,"reka-dialog-content")),se(()=>{e.triggerElement.value=a.value}),(p,f)=>(g(),y(s(I),O(n,{ref:s(r),type:p.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":s(e).open.value||!1,"aria-controls":s(e).open.value?s(e).contentId:void 0,"data-state":s(e).open.value?"open":"closed",onClick:s(e).onOpenToggle}),{default:v(()=>[h(p.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),qe=we(()=>F([]));function Ze(){const o=qe();return{add(n){const e=o.value[0];n!==e&&(e==null||e.pause()),o.value=oe(o.value,n),o.value.unshift(n)},remove(n){var e;o.value=oe(o.value,n),(e=o.value[0])==null||e.resume()}}}function oe(o,n){const e=[...o],r=e.indexOf(n);return r!==-1&&e.splice(r,1),e}function Xe(o){return o.filter(n=>n.tagName!=="A")}const Ye=E({__name:"FocusScope",props:{loop:{type:Boolean,default:!1},trapped:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["mountAutoFocus","unmountAutoFocus"],setup(o,{emit:n}){const e=o,r=n,{currentRef:a,currentElement:p}=R(),f=F(null),i=Ze(),u=re({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}});Y(l=>{if(!ie)return;const t=p.value;if(!e.trapped)return;function d(C){if(u.paused||!t)return;const B=C.target;t.contains(B)?f.value=B:$(f.value,{select:!0})}function w(C){if(u.paused||!t)return;const B=C.relatedTarget;B!==null&&(t.contains(B)||$(f.value,{select:!0}))}function b(C){t.contains(f.value)||$(t)}document.addEventListener("focusin",d),document.addEventListener("focusout",w);const _=new MutationObserver(b);t&&_.observe(t,{childList:!0,subtree:!0}),l(()=>{document.removeEventListener("focusin",d),document.removeEventListener("focusout",w),_.disconnect()})}),Y(async l=>{const t=p.value;if(await le(),!t)return;i.add(u);const d=document.activeElement;if(!t.contains(d)){const b=new CustomEvent(N,J);t.addEventListener(N,_=>r("mountAutoFocus",_)),t.dispatchEvent(b),b.defaultPrevented||(be(Xe(_e(t)),{select:!0}),document.activeElement===d&&$(t))}l(()=>{t.removeEventListener(N,C=>r("mountAutoFocus",C));const b=new CustomEvent(K,J),_=C=>{r("unmountAutoFocus",C)};t.addEventListener(K,_),t.dispatchEvent(b),setTimeout(()=>{b.defaultPrevented||$(d??document.body,{select:!0}),t.removeEventListener(K,_),i.remove(u)},0)})});function c(l){if(!e.loop&&!e.trapped||u.paused)return;const t=l.key==="Tab"&&!l.altKey&&!l.ctrlKey&&!l.metaKey,d=document.activeElement;if(t&&d){const w=l.currentTarget,[b,_]=Ce(w);b&&_?!l.shiftKey&&d===_?(l.preventDefault(),e.loop&&$(b,{select:!0})):l.shiftKey&&d===b&&(l.preventDefault(),e.loop&&$(_,{select:!0})):d===w&&l.preventDefault()}}return(l,t)=>(g(),y(s(I),{ref_key:"currentRef",ref:a,tabindex:"-1","as-child":l.asChild,as:l.as,onKeydown:c},{default:v(()=>[h(l.$slots,"default")]),_:3},8,["as-child","as"]))}});function Je(o){return o?"open":"closed"}const pe=E({__name:"DialogContentImpl",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(o,{emit:n}){const e=o,r=n,a=L(),{forwardRef:p,currentElement:f}=R();return a.titleId||(a.titleId=V(void 0,"reka-dialog-title")),a.descriptionId||(a.descriptionId=V(void 0,"reka-dialog-description")),se(()=>{a.contentElement=f,document.activeElement!==document.body&&(a.triggerElement.value=document.activeElement)}),(i,u)=>(g(),y(s(Ye),{"as-child":"",loop:"",trapped:e.trapFocus,onMountAutoFocus:u[5]||(u[5]=c=>r("openAutoFocus",c)),onUnmountAutoFocus:u[6]||(u[6]=c=>r("closeAutoFocus",c))},{default:v(()=>[M(s(Ee),O({id:s(a).contentId,ref:s(p),as:i.as,"as-child":i.asChild,"disable-outside-pointer-events":i.disableOutsidePointerEvents,role:"dialog","aria-describedby":s(a).descriptionId,"aria-labelledby":s(a).titleId,"data-state":s(Je)(s(a).open.value)},i.$attrs,{onDismiss:u[0]||(u[0]=c=>s(a).onOpenChange(!1)),onEscapeKeyDown:u[1]||(u[1]=c=>r("escapeKeyDown",c)),onFocusOutside:u[2]||(u[2]=c=>r("focusOutside",c)),onInteractOutside:u[3]||(u[3]=c=>r("interactOutside",c)),onPointerDownOutside:u[4]||(u[4]=c=>r("pointerDownOutside",c))}),{default:v(()=>[h(i.$slots,"default")]),_:3},16,["id","as","as-child","disable-outside-pointer-events","aria-describedby","aria-labelledby","data-state"])]),_:3},8,["trapped"]))}});var Qe=function(o){if(typeof document>"u")return null;var n=Array.isArray(o)?o[0]:o;return n.ownerDocument.body},S=new WeakMap,x=new WeakMap,T={},z=0,me=function(o){return o&&(o.host||me(o.parentNode))},et=function(o,n){return n.map(function(e){if(o.contains(e))return e;var r=me(e);return r&&o.contains(r)?r:(console.error("aria-hidden",e,"in not contained inside",o,". Doing nothing"),null)}).filter(function(e){return!!e})},tt=function(o,n,e,r){var a=et(n,Array.isArray(o)?o:[o]);T[e]||(T[e]=new WeakMap);var p=T[e],f=[],i=new Set,u=new Set(a),c=function(t){!t||i.has(t)||(i.add(t),c(t.parentNode))};a.forEach(c);var l=function(t){!t||u.has(t)||Array.prototype.forEach.call(t.children,function(d){if(i.has(d))l(d);else try{var w=d.getAttribute(r),b=w!==null&&w!=="false",_=(S.get(d)||0)+1,C=(p.get(d)||0)+1;S.set(d,_),p.set(d,C),f.push(d),_===1&&b&&x.set(d,!0),C===1&&d.setAttribute(e,"true"),b||d.setAttribute(r,"true")}catch(B){console.error("aria-hidden: cannot operate on ",d,B)}})};return l(n),i.clear(),z++,function(){f.forEach(function(t){var d=S.get(t)-1,w=p.get(t)-1;S.set(t,d),p.set(t,w),d||(x.has(t)||t.removeAttribute(r),x.delete(t)),w||t.removeAttribute(e)}),z--,z||(S=new WeakMap,S=new WeakMap,x=new WeakMap,T={})}},ot=function(o,n,e){e===void 0&&(e="data-aria-hidden");var r=Array.from(Array.isArray(o)?o:[o]),a=Qe(o);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),tt(r,a,e,"aria-hidden")):function(){return null}};function nt(o){let n;W(()=>De(o),e=>{e?n=ot(e):n&&n()}),Oe(()=>{n&&n()})}const at=E({__name:"DialogContentModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(o,{emit:n}){const e=o,r=n,a=L(),p=G(r),{forwardRef:f,currentElement:i}=R();return nt(i),(u,c)=>(g(),y(pe,O({...e,...s(p)},{ref:s(f),"trap-focus":s(a).open.value,"disable-outside-pointer-events":!0,onCloseAutoFocus:c[0]||(c[0]=l=>{var t;l.defaultPrevented||(l.preventDefault(),(t=s(a).triggerElement.value)==null||t.focus())}),onPointerDownOutside:c[1]||(c[1]=l=>{const t=l.detail.originalEvent,d=t.button===0&&t.ctrlKey===!0;(t.button===2||d)&&l.preventDefault()}),onFocusOutside:c[2]||(c[2]=l=>{l.preventDefault()})}),{default:v(()=>[h(u.$slots,"default")]),_:3},16,["trap-focus"]))}}),st=E({__name:"DialogContentNonModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(o,{emit:n}){const e=o,a=G(n);R();const p=L(),f=F(!1),i=F(!1);return(u,c)=>(g(),y(pe,O({...e,...s(a)},{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:c[0]||(c[0]=l=>{var t;l.defaultPrevented||(f.value||(t=s(p).triggerElement.value)==null||t.focus(),l.preventDefault()),f.value=!1,i.value=!1}),onInteractOutside:c[1]||(c[1]=l=>{var w;l.defaultPrevented||(f.value=!0,l.detail.originalEvent.type==="pointerdown"&&(i.value=!0));const t=l.target;((w=s(p).triggerElement.value)==null?void 0:w.contains(t))&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&i.value&&l.preventDefault()})}),{default:v(()=>[h(u.$slots,"default")]),_:3},16))}}),rt=E({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(o,{emit:n}){const e=o,r=n,a=L(),p=G(r),{forwardRef:f}=R();return(i,u)=>(g(),y(s(ue),{present:i.forceMount||s(a).open.value},{default:v(()=>[s(a).modal.value?(g(),y(at,O({key:0,ref:s(f)},{...e,...s(p),...i.$attrs}),{default:v(()=>[h(i.$slots,"default")]),_:3},16)):(g(),y(st,O({key:1,ref:s(f)},{...e,...s(p),...i.$attrs}),{default:v(()=>[h(i.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),it=ke(()=>{const o=F(new Map),n=F(),e=j(()=>{for(const f of o.value.values())if(f)return!0;return!1}),r=ae({scrollBody:F(!0)});let a=null;const p=()=>{document.body.style.paddingRight="",document.body.style.marginRight="",document.body.style.pointerEvents="",document.body.style.removeProperty("--scrollbar-width"),document.body.style.overflow=n.value??"",Q&&(a==null||a()),n.value=void 0};return W(e,(f,i)=>{var t;if(!ie)return;if(!f){i&&p();return}n.value===void 0&&(n.value=document.body.style.overflow);const u=window.innerWidth-document.documentElement.clientWidth,c={padding:u,margin:0},l=(t=r.scrollBody)!=null&&t.value?typeof r.scrollBody.value=="object"?Re({padding:r.scrollBody.value.padding===!0?u:r.scrollBody.value.padding,margin:r.scrollBody.value.margin===!0?u:r.scrollBody.value.margin},c):c:{padding:0,margin:0};u>0&&(document.body.style.paddingRight=typeof l.padding=="number"?`${l.padding}px`:String(l.padding),document.body.style.marginRight=typeof l.margin=="number"?`${l.margin}px`:String(l.margin),document.body.style.setProperty("--scrollbar-width",`${u}px`),document.body.style.overflow="hidden"),Q&&(a=Le(document,"touchmove",d=>ut(d),{passive:!1})),le(()=>{document.body.style.pointerEvents="none",document.body.style.overflow="hidden"})},{immediate:!0,flush:"sync"}),o});function lt(o){const n=Ve(),e=it();e.value.set(n,o);const r=j({get:()=>e.value.get(n)??!1,set:a=>e.value.set(n,a)});return Be(()=>{e.value.delete(n)}),r}function fe(o){const n=window.getComputedStyle(o);if(n.overflowX==="scroll"||n.overflowY==="scroll"||n.overflowX==="auto"&&o.clientWidth<o.scrollWidth||n.overflowY==="auto"&&o.clientHeight<o.scrollHeight)return!0;{const e=o.parentNode;return!e||e.tagName==="BODY"?!1:fe(e)}}function ut(o){const n=o||window.event,e=n.target;return e instanceof Element&&fe(e)?!1:n.touches.length>1?!0:(n.preventDefault&&n.cancelable&&n.preventDefault(),!1)}const ct=E({__name:"DialogOverlayImpl",props:{asChild:{type:Boolean},as:{}},setup(o){const n=L();return lt(!0),R(),(e,r)=>(g(),y(s(I),{as:e.as,"as-child":e.asChild,"data-state":s(n).open.value?"open":"closed",style:{"pointer-events":"auto"}},{default:v(()=>[h(e.$slots,"default")]),_:3},8,["as","as-child","data-state"]))}}),dt=E({__name:"DialogOverlay",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(o){const n=L(),{forwardRef:e}=R();return(r,a)=>{var p;return(p=s(n))!=null&&p.modal.value?(g(),y(s(ue),{key:0,present:r.forceMount||s(n).open.value},{default:v(()=>[M(ct,O(r.$attrs,{ref:s(e),as:r.as,"as-child":r.asChild}),{default:v(()=>[h(r.$slots,"default")]),_:3},16,["as","as-child"])]),_:3},8,["present"])):A("",!0)}}}),pt=E({__name:"DialogClose",props:{asChild:{type:Boolean},as:{default:"button"}},setup(o){const n=o;R();const e=L();return(r,a)=>(g(),y(s(I),O(n,{type:r.as==="button"?"button":void 0,onClick:a[0]||(a[0]=p=>s(e).onOpenChange(!1))}),{default:v(()=>[h(r.$slots,"default")]),_:3},16,["type"]))}}),mt=E({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{default:"h2"}},setup(o){const n=o,e=L();return R(),(r,a)=>(g(),y(s(I),O(n,{id:s(e).titleId}),{default:v(()=>[h(r.$slots,"default")]),_:3},16,["id"]))}}),ft=E({__name:"DialogDescription",props:{asChild:{type:Boolean},as:{default:"p"}},setup(o){const n=o;R();const e=L();return(r,a)=>(g(),y(s(I),O(n,{id:s(e).descriptionId}),{default:v(()=>[h(r.$slots,"default")]),_:3},16,["id"]))}}),gt=E({__name:"DialogPortal",props:{to:{},disabled:{type:Boolean},forceMount:{type:Boolean}},setup(o){const n=o;return(e,r)=>(g(),y(s(Ae),ce(de(n)),{default:v(()=>[h(e.$slots,"default")]),_:3},16))}}),vt={slots:{overlay:"fixed inset-0 bg-[var(--ui-bg-elevated)]/75",content:"fixed w-full h-dvh bg-[var(--ui-bg)] divide-y divide-[var(--ui-border)] flex flex-col focus:outline-none",header:"px-4 py-5 sm:px-6",body:"flex-1 overflow-y-auto p-4 sm:p-6",footer:"flex items-center gap-1.5 p-4 sm:px-6",title:"text-[var(--ui-text-highlighted)] font-semibold",description:"mt-1 text-[var(--ui-text-muted)] text-sm",close:"absolute top-4 end-4"},variants:{transition:{true:{overlay:"data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]",content:"data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]"}},fullscreen:{true:{content:"inset-0"},false:{content:"top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:max-w-lg sm:h-auto sm:max-h-[calc(100vh-4rem)] sm:rounded-[calc(var(--ui-radius)*2)] sm:shadow-lg sm:ring ring-[var(--ui-border)]"}}}},ht=xe;var ne;const yt=ee({extend:ee(vt),...((ne=ht.ui)==null?void 0:ne.modal)||{}}),wt=E({__name:"Modal",props:{title:{},description:{},content:{},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},fullscreen:{type:Boolean},portal:{type:Boolean,default:!0},close:{type:Boolean,default:!0},closeIcon:{},preventClose:{type:Boolean},class:{},ui:{},open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean,default:!0}},emits:["update:open"],setup(o,{emit:n}){const e=o,r=n,a=Fe(),{t:p}=Ue(),f=$e(),i=Se(Pe(e,"open","defaultOpen","modal"),r),u=Me(()=>e.content),c=j(()=>e.preventClose?{pointerDownOutside:t=>t.preventDefault(),interactOutside:t=>t.preventDefault(),escapeKeyDown:t=>t.preventDefault()}:{interactOutside:t=>{if(t.target instanceof Element&&t.target.closest("[data-sonner-toaster]"))return t.preventDefault()}}),l=j(()=>yt({transition:e.transition,fullscreen:e.fullscreen}));return(t,d)=>(g(),y(s(Ge),ce(de(s(i))),{default:v(({open:w})=>[a.default?(g(),y(s(He),{key:0,"as-child":"",class:k(e.class)},{default:v(()=>[h(t.$slots,"default",{open:w})]),_:2},1032,["class"])):A("",!0),M(s(gt),{disabled:!t.portal},{default:v(()=>{var b,_;return[t.overlay?(g(),y(s(dt),{key:0,class:k(l.value.overlay({class:(b=e.ui)==null?void 0:b.overlay}))},null,8,["class"])):A("",!0),M(s(rt),O({class:l.value.content({class:[!a.default&&e.class,(_=e.ui)==null?void 0:_.content]})},u.value,Ie(c.value)),{default:v(()=>[h(t.$slots,"content",{},()=>{var C,B,H;return[a.header||t.title||a.title||t.description||a.description||t.close||a.close?(g(),U("div",{key:0,class:k(l.value.header({class:(C=e.ui)==null?void 0:C.header}))},[h(t.$slots,"header",{},()=>{var q,Z;return[t.title||a.title?(g(),y(s(mt),{key:0,class:k(l.value.title({class:(q=e.ui)==null?void 0:q.title}))},{default:v(()=>[h(t.$slots,"title",{},()=>[te(P(t.title),1)])]),_:3},8,["class"])):A("",!0),t.description||a.description?(g(),y(s(ft),{key:1,class:k(l.value.description({class:(Z=e.ui)==null?void 0:Z.description}))},{default:v(()=>[h(t.$slots,"description",{},()=>[te(P(t.description),1)])]),_:3},8,["class"])):A("",!0),M(s(pt),{"as-child":""},{default:v(()=>[h(t.$slots,"close",{ui:l.value},()=>{var X;return[t.close?(g(),y(Te,O({key:0,icon:t.closeIcon||s(f).ui.icons.close,size:"md",color:"neutral",variant:"ghost","aria-label":s(p)("modal.close")},typeof t.close=="object"?t.close:void 0,{class:l.value.close({class:(X=e.ui)==null?void 0:X.close})}),null,16,["icon","aria-label","class"])):A("",!0)]})]),_:3})]})],2)):A("",!0),a.body?(g(),U("div",{key:1,class:k(l.value.body({class:(B=e.ui)==null?void 0:B.body}))},[h(t.$slots,"body")],2)):A("",!0),a.footer?(g(),U("div",{key:2,class:k(l.value.footer({class:(H=e.ui)==null?void 0:H.footer}))},[h(t.$slots,"footer")],2)):A("",!0)]})]),_:3},16,["class"])]}),_:3},8,["disabled"])]),_:3},16))}}),bt=Object.assign(wt,{__name:"UModal"}),_t=""+new URL("3bmax.CDjR7kd3.png",import.meta.url).href,Ct=""+new URL("armonia.Ct1Kmr_q.png",import.meta.url).href,Et=""+new URL("contestabilehomedesign.CWrF1w8j.png",import.meta.url).href,Dt=""+new URL("ethyly.C8RXNluZ.png",import.meta.url).href,Ot=""+new URL("gaetagames.whV_xnO2.png",import.meta.url).href,Bt=""+new URL("izumi.BGWnqdfj.png",import.meta.url).href,kt=""+new URL("magniricevimenti.iNZeZAHE.png",import.meta.url).href,Rt=""+new URL("pasticceriabuttafoco.CIf2fesE.png",import.meta.url).href,Lt=""+new URL("studiolegalegraverini.CwR85Uz5.png",import.meta.url).href,At=""+new URL("vladimiro.Bn1TBLGj.png",import.meta.url).href,Ft=""+new URL("57miglia.BFFKy9cq.png",import.meta.url).href,Ut=""+new URL("bohemycake.Bm44GA6p.png",import.meta.url).href,$t=""+new URL("dimascoloarredamenti.CZj26H38.png",import.meta.url).href,St=""+new URL("ferrantefragole.BoIA6N1D.png",import.meta.url).href,Pt=""+new URL("gavillucci.BCpVkw_h.png",import.meta.url).href,Mt=""+new URL("jungle.54u2PINm.png",import.meta.url).href,It=""+new URL("miramare.Cj4SZcVe.png",import.meta.url).href,xt=""+new URL("sienergie.Dz7yP2u1.png",import.meta.url).href,Tt=""+new URL("tornesi.Dgt7q2S8.png",import.meta.url).href,jt=""+new URL("xiradorn.CfR9pN4J.png",import.meta.url).href,Nt=""+new URL("abc.B-tVbAIl.png",import.meta.url).href,Kt=""+new URL("confortsofa.DP1X4iy4.png",import.meta.url).href,zt=""+new URL("duemshop.BOVM954c.png",import.meta.url).href,Vt=""+new URL("fitness.BcTKn2bo.png",import.meta.url).href,Wt=""+new URL("gemgroupservizi.uUUjxygV.png",import.meta.url).href,Gt=""+new URL("latinafilmcommission.BQ8Vzk6N.png",import.meta.url).href,Ht=""+new URL("miworld.CIZEiYdO.png",import.meta.url).href,qt=""+new URL("stilosacomete.CroAEvPe.png",import.meta.url).href,Zt=""+new URL("totaro.DqztfrfF.png",import.meta.url).href,m={a3bmax:_t,armonia:Ct,contestabilehomedesign:Et,ethyly:Dt,gaetagames:Ot,izumi:Bt,magniricevimenti:kt,pasticceriabuttafoco:Rt,studiolegalegraverini:Lt,vladimiro:At,a57miglia:Ft,bohemycake:Ut,dimascoloarredamenti:$t,ferrantefragole:St,gavillucci:Pt,jungle:Mt,miramare:It,sienergie:xt,tornesi:Tt,xiradorn:jt,abc:Nt,confortsofa:Kt,duemshop:zt,fitness:Vt,gemgroupservizi:Wt,latinafilmcommission:Gt,miworld:Ht,stilosacomete:qt,totaro:Zt},Xt={class:"p-20 grid grid-cols-3 gap-10"},Yt={key:0},Jt=["onClick"],Qt={class:"w-1/2"},eo=["src","alt"],to={class:"w-1/2"},oo={class:"font-quig text-9xl"},no={class:"uppercase"},ao={key:1,class:"w-full"},so=["onClick"],ro=["src","alt"],io={class:"mt-4"},lo={class:"font-quig text-6xl -mb-4"},uo={class:"uppercase"},co=["src"],mo=E({__name:"index",setup(o){const n=je([{slug:"ethyly",name:"Ethyly",description:"Wine Marketplace",url:"https://ethyly.com/",image:m.ethyly,full:!0},{slug:"bohemycake",name:"BohemyCake",description:"Portale di Pasticceria",url:"https://bohemycake.it/",image:m.bohemycake},{slug:"fitness",name:"FFEvolution",description:"Fitness Shop",url:"https://ffevolutionshop.it/",image:m.fitness},{slug:"izumi",name:"Izumi",description:"Asian Restaurant",url:"https://www.izumifondi.it/",image:m.izumi},{slug:"armonia",name:"Armonia Shop",description:"Store Online",url:"https://www.armoniashop.it/",image:m.armonia},{slug:"confortsofa",name:"Confort Sofà",description:"Divani & Living",url:"https://www.confortsofa.it/",image:m.confortsofa},{slug:"contestabilehomedesign",name:"Contestabile",description:"Home Design",url:"https://www.contestabilehomedesign.it/",image:m.contestabilehomedesign},{slug:"gavillucci",name:"Gavillucci",description:"Arredamento",url:"https://www.gavillucci.it/",image:m.gavillucci},{slug:"totaro",name:"Antonio Totaro",description:"Photography",url:"https://www.antonio-totaro.com/",image:m.totaro},{slug:"sienergie",name:"SiEnergie",description:"Cartotecnica",url:"https://sienergie.com/",image:m.sienergie},{slug:"vladimiro",name:"Vladimiro",description:"Luxury Restaurant | Rome",url:"https://www.ristorantevladimiro.com/",image:m.vladimiro},{slug:"ferrantefragole",name:"Ferrante Fragole",description:"Produttore locale",url:"https://ferrantefragole.it/",image:m.ferrantefragole},{slug:"pasticceriabuttafoco",name:"Buttafoco",description:"Pasticceria",url:"https://pasticceriabuttafoco.it/",image:m.pasticceriabuttafoco},{slug:"studiolegalegraverini",name:"Graverini",description:"Studio Legale",url:"https://www.studiolegalegraverini.it/",image:m.studiolegalegraverini},{slug:"latinafilmcommission",name:"Latina Film Commission",description:"Cinema, Tv & Locations",url:"https://www.latinafilmcommission.it/",image:m.latinafilmcommission},{slug:"gemgroupservizi",name:"Gem Group",description:"Digital & Security Services",url:"https://gemgroupservizi.it/",image:m.gemgroupservizi},{slug:"jungle",name:"Jungle Team",description:"Digital & Marketing",url:"https://jungleteam.it/",image:m.jungle},{slug:"tornesi",name:"Tornesi",description:"Immobiliare",url:"https://www.tornesiimmobiliare.it/",image:m.tornesi},{slug:"miworld",name:"MiWorld",description:"Retro & Vintage Gaming",url:"https://www.miworld.eu/",image:m.miworld},{slug:"dimascoloarredamenti",name:"Di Mascolo Arredamenti",description:"Arredamento",url:"https://www.dimascoloarredamenti.it/",image:m.dimascoloarredamenti},{slug:"miramare",name:"Miramare",description:"Luxury Grand Hotel",url:"https://www.grandealbergomiramare.com/",image:m.miramare},{slug:"gaetagames",name:"Gaeta Games",description:"Evento Nazionale Giochi",url:"https://www.gaetagames.it/2009/home/home.html",image:m.gaetagames},{slug:"_3bmax",name:"3BMax",description:"3D Printing Service (CLOSED)",url:"",image:m.a3bmax,death:!0},{slug:"magniricevimenti",name:"Magni Ricevimenti",description:"Luxury Restaurant",url:"",image:m.magniricevimenti,death:!0},{slug:"_57miglia",name:"57 Miglia",description:"Mastri Birrai (CLOSED)",url:"",image:m.a57miglia,death:!0},{slug:"abc",name:"ABC Consulting",description:"Digital & Marketing (CLOSED)",url:"",image:m.abc,death:!0},{slug:"duemshop",name:"Dueme Shop",description:"Digital & Marketing (CLOSED)",url:"https://duemeshop.it/",image:m.duemshop,death:!0},{slug:"stilosacomete",name:"stilosacomete",description:"Digital & Marketing (CLOSED)",url:"https://www.stilosacomete.it/",image:m.stilosacomete,death:!0},{slug:"xiradorn",name:"xiradorn",description:"Coming Soon",url:"",image:m.xiradorn,coming:!0},{slug:"xiradorn",name:"xiradorn",description:"Coming Soon",url:"",image:m.xiradorn,coming:!0},{slug:"xiradorn",name:"xiradorn",description:"Coming Soon",url:"",image:m.xiradorn,coming:!0}]),e=re({open:!1,selected:void 0});return W(e,()=>{e.open||(e.open=!1,e.selected=void 0)},{deep:!0}),(r,a)=>{var f;const p=bt;return g(),U("div",Xt,[(g(!0),U(Ne,null,Ke(s(n),i=>(g(),U("div",{key:i.name,class:k([{"col-span-3":i.full}])},[i.full?(g(),U("div",Yt,[D("button",{class:k(["w-full flex items-center justify-center",{"cursor-pointer":!i.death||!i.coming}]),onClick:()=>{!i.death&&!i.coming&&(s(e).open=!0,s(e).selected=i)}},[D("div",Qt,[D("img",{src:i.image,alt:i.name,class:"aspect-[16/9] object-cover object-center !w-full !h-full rounded"},null,8,eo)]),D("div",to,[D("h2",oo,P(i.name),1),D("p",no,P(i.description),1)])],10,Jt)])):(g(),U("div",ao,[D("button",{class:k(["w-full",{"cursor-pointer":!i.death&&!i.coming}]),onClick:()=>{!i.death&&!i.coming&&(s(e).open=!0,s(e).selected=i)}},[D("img",{src:i.image,alt:i.name,class:k(["aspect-[16/9] object-cover object-center !w-full !h-full rounded",{"blur-xs saturate-0":i.death}])},null,10,ro),D("div",io,[D("h2",lo,P(i.name),1),D("p",uo,P(i.description),1)])],10,so)]))],2))),128)),M(p,{open:s(e).open,"onUpdate:open":a[0]||(a[0]=i=>s(e).open=i),title:(f=s(e).selected)==null?void 0:f.name,class:"min-w-[90vw] min-h-[90vh] overflow-hidden"},{content:v(()=>{var i;return[D("iframe",{src:(i=s(e).selected)==null?void 0:i.url,class:"w-full h-screen"},null,8,co)]}),_:1},8,["open","title"])])}}});export{mo as default};