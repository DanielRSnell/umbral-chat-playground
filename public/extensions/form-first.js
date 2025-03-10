var Vt=Object.defineProperty;var Qt=(y,$,_)=>$ in y?Vt(y,$,{enumerable:!0,configurable:!0,writable:!0,value:_}):y[$]=_;var $t=(y,$,_)=>Qt(y,typeof $!="symbol"?$+"":$,_);(function(y){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pt;const $=globalThis,_=$.ShadowRoot&&($.ShadyCSS===void 0||$.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),J=new WeakMap;let ft=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(_&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&J.set(e,t))}return t}toString(){return this.cssText}};const gt=s=>new ft(typeof s=="string"?s:s+"",void 0,K),yt=(s,t)=>{if(_)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),n=$.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)}},Y=_?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return gt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_t,defineProperty:vt,getOwnPropertyDescriptor:bt,getOwnPropertyNames:At,getOwnPropertySymbols:wt,getPrototypeOf:Et}=Object,v=globalThis,Z=v.trustedTypes,St=Z?Z.emptyScript:"",z=v.reactiveElementPolyfillSupport,k=(s,t)=>s,L={toAttribute(s,t){switch(t){case Boolean:s=s?St:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},G=(s,t)=>!_t(s,t),X={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:G};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=X){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&vt(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:r}=bt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const l=n==null?void 0:n.call(this);r.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??X}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const e=this.properties,i=[...At(e),...wt(e)];for(const n of i)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Y(n))}else t!==void 0&&e.push(Y(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var r;const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:L).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:L;this._$Em=n,this[n]=l.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??G)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,o]of n)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(e)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[k("elementProperties")]=new Map,C[k("finalized")]=new Map,z==null||z({ReactiveElement:C}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,R=T.trustedTypes,tt=R?R.createPolicy("lit-html",{createHTML:s=>s}):void 0,et="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,it="?"+b,Ct=`<${it}>`,A=document,P=()=>A.createComment(""),U=s=>s===null||typeof s!="object"&&typeof s!="function",j=Array.isArray,xt=s=>j(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",V=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,nt=/>/g,w=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,rt=/"/g,at=/^(?:script|style|textarea|title)$/i,Mt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),m=Mt(1),x=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),lt=new WeakMap,E=A.createTreeWalker(A,129);function ht(s,t){if(!j(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return tt!==void 0?tt.createHTML(t):t}const kt=(s,t)=>{const e=s.length-1,i=[];let n,r=t===2?"<svg>":t===3?"<math>":"",o=F;for(let l=0;l<e;l++){const a=s[l];let h,u,c=-1,f=0;for(;f<a.length&&(o.lastIndex=f,u=o.exec(a),u!==null);)f=o.lastIndex,o===F?u[1]==="!--"?o=st:u[1]!==void 0?o=nt:u[2]!==void 0?(at.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=w):u[3]!==void 0&&(o=w):o===w?u[0]===">"?(o=n??F,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?w:u[3]==='"'?rt:ot):o===rt||o===ot?o=w:o===st||o===nt?o=F:(o=w,n=void 0);const g=o===w&&s[l+1].startsWith("/>")?" ":"";r+=o===F?a+Ct:c>=0?(i.push(h),a.slice(0,c)+et+a.slice(c)+b+g):a+b+(c===-2?l:g)}return[ht(s,r+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class I{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const l=t.length-1,a=this.parts,[h,u]=kt(t,e);if(this.el=I.createElement(h,i),E.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=E.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith(et)){const f=u[o++],g=n.getAttribute(c).split(b),S=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:S[2],strings:g,ctor:S[1]==="."?Pt:S[1]==="?"?Ut:S[1]==="@"?Ft:B}),n.removeAttribute(c)}else c.startsWith(b)&&(a.push({type:6,index:r}),n.removeAttribute(c));if(at.test(n.tagName)){const c=n.textContent.split(b),f=c.length-1;if(f>0){n.textContent=R?R.emptyScript:"";for(let g=0;g<f;g++)n.append(c[g],P()),E.nextNode(),a.push({type:2,index:++r});n.append(c[f],P())}}}else if(n.nodeType===8)if(n.data===it)a.push({type:2,index:r});else{let c=-1;for(;(c=n.data.indexOf(b,c+1))!==-1;)a.push({type:7,index:r}),c+=b.length-1}r++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function M(s,t,e=s,i){var o,l;if(t===x)return t;let n=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const r=U(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==r&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=n:e._$Cl=n),n!==void 0&&(t=M(s,n._$AS(s,t.values),n,i)),t}class Tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=((t==null?void 0:t.creationScope)??A).importNode(e,!0);E.currentNode=n;let r=E.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new O(r,r.nextSibling,this,t):a.type===1?h=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(h=new It(r,this,t)),this._$AV.push(h),a=i[++l]}o!==(a==null?void 0:a.index)&&(r=E.nextNode(),o++)}return E.currentNode=A,n}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),U(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=I.createElement(ht(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===n)this._$AH.p(e);else{const o=new Tt(n,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new I(t)),e}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new O(this.O(P()),this.O(P()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(r===void 0)t=M(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==x,o&&(this._$AH=t);else{const l=t;let a,h;for(t=r[0],a=0;a<r.length-1;a++)h=M(this,l[i+a],e,a),h===x&&(h=this._$AH[a]),o||(o=!U(h)||h!==this._$AH[a]),h===p?t=p:t!==p&&(t+=(h??"")+r[a+1]),this._$AH[a]=h}o&&!n&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ut extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Ft extends B{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){if((t=M(this,t,e,0)??p)===x)return;const i=this._$AH,n=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==p&&(i===p||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class It{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const Q=T.litHtmlPolyfillSupport;Q==null||Q(I,O),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.2.1");const Ot=(s,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let n=i._$litPart$;if(n===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=n=new O(t.insertBefore(P(),r),r,void 0,e??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class H extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}}H._$litElement$=!0,H.finalized=!0,(pt=globalThis.litElementHydrateSupport)==null||pt.call(globalThis,{LitElement:H});const W=globalThis.litElementPolyfillSupport;W==null||W({LitElement:H}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const d={branding:{logo:{icon:"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",url:"/assets/logos/main.png",alt:"Support Chat"},poweredBy:{text:"POWERED BY",logo:{text:"Street2Fleet",icon:"/assets/logos/powered-by.png"}}},header:{title:"Hi there! 👋",subtitle:"Welcome! We're here to help."},steps:[{id:"zipcode",placeholder:"Enter your zip code (ex: 23455)",validation:s=>s.length>=5},{id:"email",placeholder:"What's your email?",validation:s=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)}],questions:[{id:"repairs",title:"Our repair services",icon:"chevron-right"},{id:"areas",title:"Service locations",icon:"chevron-right"},{id:"emergency",title:"Emergency service",icon:"chevron-right"},{id:"quote",title:"Get a quote",icon:"chevron-right"},{id:"maintain",title:"Maintenance tips",icon:"chevron-right"}],footer:{navigation:[{id:"home",label:"Home",icon:"home"},{id:"chat",label:"Chat",icon:"chat"}]},icons:{"chevron-right":"M9 5l7 7-7 7",home:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",chat:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",menu:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z",send:"M5 12h14M12 5l7 7-7 7",calendar:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},extensions:[{id:"book-now",meta:{label:"Book Now",icon:"add a icon here",iframe:!0,url:null,src:"https://assets.a2o-static.com/git/scheduler/v3/street2fleet/themes/precision/2025-01-31-23-47-43/index.html?api_token=4%7CRhwvRsp4MVAtoEZYp9a8r7xcHC1q6heig5hEtfzB&market=pd-northern-nj&bust_downstream_cache=1&iframe_parent_domain=https%3A%2F%2Fpdsnj.com&ga_client_id=1036035276.1741611885&landing_page=https%3A%2F%2Fpdsnj.com%2F&referrer=https%3A%2F%2Fpdsnj.com%2F&original_referrer=https%3A%2F%2Fpdsnj.com%2F",trigger:"LaunchCalendar"}}]},N=({name:s,className:t="w-5 h-5"})=>m`
  <svg 
    class=${t} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <path d=${d.icons[s]}></path>
  </svg>
`,Ht=()=>m`
  <div class="chat-header">
    <div class="chat-logo">
      ${d.branding.logo.url?m`
        <img 
          src=${d.branding.logo.url} 
          alt=${d.branding.logo.alt||"Logo"} 
          class="w-auto object-contain" style="height: 3.5rem;"
        />
      `:m`
        <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d=${d.branding.logo.icon}
          />
        </svg>
      `}
    </div>
    <button class="chat-menu">
      ${N({name:"menu"})}
    </button>
  </div>
`,ct=({value:s,handleInput:t,handleSubmit:e,placeholder:i,disabled:n,currentStep:r})=>m`
  <div class="input-group ${s.trim()?"":"needs-completion"}">
    <div class="step-indicator ${s.trim()?"":"active"}">
      <span>Please complete: ${i}</span>
    </div>
    <input
      type="${d.steps[r].id==="email"?"email":"text"}"
      class="chat-input"
      .value=${s}
      @input=${t}
      placeholder=${i}
      ?disabled=${n}
      @keyup=${o=>o.key==="Enter"&&e()}
      autocomplete=${d.steps[r].id}
      aria-label=${i}
      @focus=${o=>o.target.select()}
      .autoFocus=${!0}
    >
    <button
      class="send-button"
      @click=${e}
      ?disabled=${n||!s.trim()}
      aria-label="Send"
    >
      ${N({name:"send",className:"w-5 h-5"})}
    </button>
  </div>
`,Nt=({onQuestionClick:s})=>m`
  <div class="question-list">
    ${d.questions.map(t=>m`
      <button 
        class="question-button"
        @click=${()=>s(t)}
      >
        <span>${t.title}</span>
        ${N({name:t.icon})}
      </button>
    `)}
  </div>
`,Rt=()=>m`
  <div class="powered-by">
    <span class="powered-text">${d.branding.poweredBy.text}</span>
    <div class="powered-logo">
      <img 
        src=${d.branding.poweredBy.logo.icon} 
        alt="Lyro AI"
        class="h-8 w-auto"
      >    </div>
  </div>
`,Bt=()=>d.extensions&&d.extensions.find(s=>s.id==="book-now"),qt=()=>{const s=d.extensions.find(t=>t.id==="book-now");if(s&&s.meta&&s.meta.src){const t=document.createElement("div");t.style.cssText="position: fixed;inset: 0px;z-index: 2147483647;width: 100%;height: 100%;",t.style.display="flex",t.style.justifyContent="center",t.style.alignItems="center";const e=document.createElement("button");e.textContent="×",e.style.position="absolute",e.style.top="10px",e.style.right="10px",e.style.fontSize="24px",e.style.color="white",e.style.background="none",e.style.border="none",e.style.cursor="pointer",e.style.zIndex="10000",e.addEventListener("click",()=>document.body.removeChild(t));const i=document.createElement("iframe");i.src=s.meta.src,i.style.width="100%",i.style.height="100%",i.style.border="none",i.style.backgroundColor="transparent",t.appendChild(e),t.appendChild(i),document.body.appendChild(t)}},zt=({currentTab:s,onTabChange:t})=>{const e=Bt();return m`
    <div class="chat-footer">
      ${e?m`
        <button 
          class="book-now-button"
          @click=${qt}
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--color-primary-500, oklch(37.59% 0.0629 172.95));
            color: white;
            border: none;
            border-radius: 6px;
            padding: 8px 16px;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
            width: auto;
            margin: 8px auto;
            gap: 6px;
            height: 36px;
          "
        >
          ${N({name:"calendar"})}
          <span>${e.meta.label||"Book Now"}</span>
        </button>
      `:m`
        ${d.footer.navigation.map(i=>m`
          <button 
            class="footer-tab ${s===i.id?"active":""}"
            @click=${()=>t(i.id)}
          >
            ${N({name:i.icon})}
            <span>${i.label}</span>
          </button>
        `)}
      `}
    </div>
  `},Lt=({showModal:s,currentStep:t,inputs:e,handleInput:i,handleSubmit:n,questionTitle:r,isClosing:o,loading:l})=>{const a=d.steps[t];return m`
    <div class="modal-overlay ${s?"flex":"hidden"} ${o?"closing":""}">
      <div class="modal-content ${o?"closing":""}">
        <h3 class="modal-title">I look forward to answering questions about ${r}</h3>
        
        ${ct({value:e[a.id],handleInput:h=>i(a.id,h),handleSubmit:n,placeholder:a.placeholder,disabled:l,currentStep:t})}
      </div>
    </div>
  `},jt=s=>m`
  <div 
    class=${s.containerClasses}
    @keydown=${t=>t.key==="Enter"&&s.handleSubmit()}
  >
    ${Ht()}
    
    <div class="chat-content">
      <div class="header-content">
        <h1 class="chat-title">${d.header.title}</h1>
        <p class="chat-subtitle">${d.header.subtitle}</p>
      </div>
      
      <div class="chat-form">
        ${s.error?m`
          <div class="error-message" role="alert">
            ${s.error}
          </div>
        `:""}
        
        ${ct({value:s.inputs[d.steps[s.currentStep].id],handleInput:t=>s.handleInput(d.steps[s.currentStep].id,t),handleSubmit:s.handleSubmit,placeholder:d.steps[s.currentStep].placeholder,disabled:s.loading,currentStep:s.currentStep})}

        ${s.currentTab==="home"?Nt({onQuestionClick:s.handleQuestionClick}):""}
      </div>

      ${Rt()}
    </div>

    ${zt({currentTab:s.currentTab,onTabChange:s.handleTabChange})}
    
    ${Lt({showModal:s.showEmailModal,currentStep:s.currentStep,inputs:s.inputs,handleInput:s.handleInput,handleSubmit:s.handleSubmit,questionTitle:s.selectedQuestion?s.selectedQuestion.title:"",isClosing:s.isModalClosing,loading:s.loading})}
  </div>
`;class dt extends H{constructor(){super(),this.config=d;const t=this.config.steps.reduce((e,i)=>(e[i.id]="",e),{});this.currentStep=0,this.inputs=t,this.loading=!1,this.currentTab="home",this.error="",this.isClosing=!1,this.isVisible=!0,this.isAnimatingIn=!1,this.showEmailModal=!1,this.selectedQuestion=null,this.isModalClosing=!1,this.handleInput=this.handleInput.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.handleQuestionClick=this.handleQuestionClick.bind(this),this.handleTabChange=this.handleTabChange.bind(this),this.handleKeyPress=this.handleKeyPress.bind(this),this.handleEmailInput=this.handleEmailInput.bind(this),this.handleEmailSubmit=this.handleEmailSubmit.bind(this)}set config(t){const e=this._config;this._config=t||d,e&&this._config!==e&&(this.inputs=this._config.steps.reduce((i,n)=>(i[n.id]=this.inputs[n.id]||"",i),{}),this.requestUpdate("config",e))}get config(){return this._config||d}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this.isAnimatingIn=!0,this.requestUpdate(),this.updateComplete.then(()=>{setTimeout(()=>{const t=this.querySelector(".chat-input");t&&(t.focus(),t.select())},300)})}),window.addEventListener("keydown",this.handleKeyPress)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyPress)}createRenderRoot(){return this}handleKeyPress(t){t.key==="Escape"&&this.isVisible&&this.closeForm()}handleInput(t,e){this.inputs={...this.inputs,[t]:e.target.value.trim()},this.error="",this.requestUpdate()}validateCurrentStep(){const t=this.config.steps[this.currentStep],e=this.inputs[t.id];return t.validation(e)}async closeForm(){this.isClosing=!0,this.requestUpdate(),await new Promise(t=>setTimeout(t,300)),this.isVisible=!1,this.requestUpdate()}async handleSubmit(){if(this.loading||!this.validateCurrentStep()){this.validateCurrentStep()||(this.error=`Please enter a valid ${this.config.steps[this.currentStep].id}`);return}this.loading=!0;try{await new Promise(t=>setTimeout(t,500)),this.currentStep<this.config.steps.length-1?(this.currentStep++,this.error="",this.updateComplete.then(()=>{setTimeout(()=>{const t=this.querySelector(".chat-input");t&&(t.focus(),t.select())},50)})):(await this.closeForm(),this.dispatchEvent(new CustomEvent("form-submit",{detail:{type:"form_completion",value:this.inputs},bubbles:!0,composed:!0})))}catch{this.error="Something went wrong. Please try again."}finally{this.loading=!1}}handleQuestionClick(t){this.selectedQuestion=t,this.showEmailModal=!0,this.requestUpdate(),this.updateComplete.then(()=>{setTimeout(()=>{const e=this.querySelector(".modal-content .chat-input");e&&(e.focus(),e.select())},100)})}handleEmailInput(t){this.inputs.email=t.target.value.trim(),this.requestUpdate()}async handleEmailSubmit(){if(!this.inputs.email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.inputs.email)){this.error="Please enter a valid email address",this.requestUpdate();return}this.isModalClosing=!0,this.requestUpdate(),await new Promise(t=>setTimeout(t,300)),this.showEmailModal=!1,this.isModalClosing=!1,this.dispatchEvent(new CustomEvent("form-submit",{detail:{type:"email",value:this.inputs.email,questionId:this.selectedQuestion.id,questionTitle:this.selectedQuestion.title},bubbles:!0,composed:!0})),await this.closeForm()}handleTabChange(t){this.currentTab!==t&&(this.currentTab=t,this.requestUpdate())}render(){if(!this.isVisible)return null;const t=["chat-container",this.isAnimatingIn?"visible":"",this.isClosing?"fade-out":""].filter(Boolean).join(" ");return jt({formConfig:this.config,currentStep:this.currentStep,inputs:this.inputs,loading:this.loading,currentTab:this.currentTab,error:this.error,isClosing:this.isClosing,containerClasses:t,handleInput:this.handleInput,handleSubmit:this.handleSubmit,handleQuestionClick:this.handleQuestionClick,handleTabChange:this.handleTabChange,showEmailModal:this.showEmailModal,selectedQuestion:this.selectedQuestion,handleEmailInput:this.handleEmailInput,handleEmailSubmit:this.handleEmailSubmit,isModalClosing:this.isModalClosing})}}$t(dt,"properties",{currentStep:{type:Number},inputs:{type:Object},loading:{type:Boolean},currentTab:{type:String},error:{type:String},isClosing:{type:Boolean},isVisible:{type:Boolean},isAnimatingIn:{type:Boolean},showEmailModal:{type:Boolean},selectedQuestion:{type:Object},isModalClosing:{type:Boolean},config:{type:Object}}),customElements.define("form-first",dt);const D=(s={})=>{const t="form_first_completed",e="form_first_user_data",i=()=>localStorage.getItem(t)==="true",n=o=>{localStorage.setItem(t,"true"),o&&localStorage.setItem(e,JSON.stringify(o))},r=(o,l=null)=>{console.log("Generating welcome card",o);try{let a,h;l?(a=l.data.form_completion||{},h=l,n(a)):(a=JSON.parse(localStorage.getItem(e)||"{}"),h={status:"success",data:{form_completion:a,returning_user:!0}});const u=document.createElement("div");return u.className="welcome-card",u.innerHTML=`
        <div class="welcome-card-content">
          <div class="welcome-card-header">
            <h2>Welcome!</h2>
          </div>
          <p class="welcome-card-text">Thanks for completing your profile. How can we help you today?</p>
          ${a!=null&&a.zipcode?`<p class="welcome-card-text">${a.zipcode}</p>`:""}
          ${a!=null&&a.email?`<p class="welcome-card-text">${a.email}</p>`:""}
        </div>
      `,o.appendChild(u),window.voiceflow.chat.interact({type:"form_submit",payload:h}),!0}catch(a){return console.error("Error generating welcome card:",a),!1}};return{name:"FormFirst",type:"response",config:s,match:({trace:o})=>{var l;return o.type==="form_gate"||((l=o.payload)==null?void 0:l.name)==="form_gate"},render:async({trace:o,element:l})=>{if(console.log("Rendering Extension: Form First with config:",s),i()){r(l);return}const a=document.querySelector("#voiceflow-chat");if(!(a!=null&&a.shadowRoot))return;const h=a.shadowRoot.querySelector(".vfrc-chat");if(!h)return;const u=document.createElement("form-first");s&&(u.config=s),u.addEventListener("form-submit",c=>{const{type:f,value:g,questionId:S,questionTitle:mt}=c.detail;let q={status:"success",data:{[f]:g}};S&&mt&&(q.data.questionId=S,q.data.questionTitle=mt),f==="form_completion"?r(l,q):window.voiceflow.chat.interact({type:"form_submit",payload:q})}),h.appendChild(u)}}},ut=D(d);typeof window<"u"&&(window.createFormFirstExtension=D,window.FormFirstExtension=ut),y.FormFirstExtension=ut,y.createFormFirstExtension=D,Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})})(this.FormFirstExtension=this.FormFirstExtension||{});
