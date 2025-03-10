var et=Object.defineProperty;var tt=($,g,_)=>g in $?et($,g,{enumerable:!0,configurable:!0,writable:!0,value:_}):$[g]=_;var D=($,g,_)=>tt($,typeof g!="symbol"?g+"":g,_);(function(){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ge;const $=globalThis,g=$.ShadowRoot&&($.ShadyCSS===void 0||$.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_=Symbol(),K=new WeakMap;let $e=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(g&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=K.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&K.set(t,e))}return e}toString(){return this.cssText}};const fe=s=>new $e(typeof s=="string"?s:s+"",void 0,_),ve=(s,e)=>{if(g)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=$.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)}},G=g?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return fe(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ye,defineProperty:be,getOwnPropertyDescriptor:_e,getOwnPropertyNames:we,getOwnPropertySymbols:Se,getPrototypeOf:Ae}=Object,v=globalThis,J=v.trustedTypes,Ee=J?J.emptyScript:"",L=v.reactiveElementPolyfillSupport,k=(s,e)=>s,z={toAttribute(s,e){switch(e){case Boolean:s=s?Ee:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Y=(s,e)=>!ye(s,e),Z={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:Y};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Z){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&be(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:r}=_e(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const c=n==null?void 0:n.call(this);r.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Z}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const e=Ae(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const t=this.properties,i=[...we(t),...Se(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(G(n))}else e!==void 0&&t.push(G(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ve(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var r;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:z).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var r;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:z;this._$Em=n,this[n]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Y)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,o]of n)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(t)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[k("elementProperties")]=new Map,E[k("finalized")]=new Map,L==null||L({ReactiveElement:E}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,H=M.trustedTypes,X=H?H.createPolicy("lit-html",{createHTML:s=>s}):void 0,ee="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,te="?"+y,Ce=`<${te}>`,w=document,P=()=>w.createComment(""),U=s=>s===null||typeof s!="object"&&typeof s!="function",V=Array.isArray,xe=s=>V(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",j=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ie=/-->/g,se=/>/g,S=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ne=/'/g,oe=/"/g,re=/^(?:script|style|textarea|title)$/i,Te=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),l=Te(1),C=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),ae=new WeakMap,A=w.createTreeWalker(w,129);function le(s,e){if(!V(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(e):e}const ke=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":e===3?"<math>":"",o=O;for(let c=0;c<t;c++){const a=s[c];let d,p,h=-1,f=0;for(;f<a.length&&(o.lastIndex=f,p=o.exec(a),p!==null);)f=o.lastIndex,o===O?p[1]==="!--"?o=ie:p[1]!==void 0?o=se:p[2]!==void 0?(re.test(p[2])&&(n=RegExp("</"+p[2],"g")),o=S):p[3]!==void 0&&(o=S):o===S?p[0]===">"?(o=n??O,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?S:p[3]==='"'?oe:ne):o===oe||o===ne?o=S:o===ie||o===se?o=O:(o=S,n=void 0);const b=o===S&&s[c+1].startsWith("/>")?" ":"";r+=o===O?a+Ce:h>=0?(i.push(d),a.slice(0,h)+ee+a.slice(h)+y+b):a+y+(h===-2?c:b)}return[le(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class I{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,o=0;const c=e.length-1,a=this.parts,[d,p]=ke(e,t);if(this.el=I.createElement(d,i),A.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=A.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const h of n.getAttributeNames())if(h.endsWith(ee)){const f=p[o++],b=n.getAttribute(h).split(y),B=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:B[2],strings:b,ctor:B[1]==="."?Pe:B[1]==="?"?Ue:B[1]==="@"?Oe:F}),n.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:r}),n.removeAttribute(h));if(re.test(n.tagName)){const h=n.textContent.split(y),f=h.length-1;if(f>0){n.textContent=H?H.emptyScript:"";for(let b=0;b<f;b++)n.append(h[b],P()),A.nextNode(),a.push({type:2,index:++r});n.append(h[f],P())}}}else if(n.nodeType===8)if(n.data===te)a.push({type:2,index:r});else{let h=-1;for(;(h=n.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:r}),h+=y.length-1}r++}}static createElement(e,t){const i=w.createElement("template");return i.innerHTML=e,i}}function x(s,e,t=s,i){var o,c;if(e===C)return e;let n=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const r=U(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==r&&((c=n==null?void 0:n._$AO)==null||c.call(n,!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=n:t._$Cl=n),n!==void 0&&(e=x(s,n._$AS(s,e.values),n,i)),e}class Me{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??w).importNode(t,!0);A.currentNode=n;let r=A.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new R(r,r.nextSibling,this,e):a.type===1?d=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(d=new Ie(r,this,e)),this._$AV.push(d),a=i[++c]}o!==(a==null?void 0:a.index)&&(r=A.nextNode(),o++)}return A.currentNode=w,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class R{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),U(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=I.createElement(le(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===n)this._$AH.p(t);else{const o=new Me(n,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=ae.get(e.strings);return t===void 0&&ae.set(e.strings,t=new I(e)),t}k(e){V(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new R(this.O(P()),this.O(P()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,r){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(e,t=this,i,n){const r=this.strings;let o=!1;if(r===void 0)e=x(this,e,t,0),o=!U(e)||e!==this._$AH&&e!==C,o&&(this._$AH=e);else{const c=e;let a,d;for(e=r[0],a=0;a<r.length-1;a++)d=x(this,c[i+a],t,a),d===C&&(d=this._$AH[a]),o||(o=!U(d)||d!==this._$AH[a]),d===m?e=m:e!==m&&(e+=(d??"")+r[a+1]),this._$AH[a]=d}o&&!n&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Pe extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class Ue extends F{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class Oe extends F{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){if((e=x(this,e,t,0)??m)===C)return;const i=this._$AH,n=e===m&&i!==m||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==m&&(i===m||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ie{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const Q=M.litHtmlPolyfillSupport;Q==null||Q(I,R),(M.litHtmlVersions??(M.litHtmlVersions=[])).push("3.2.1");const Re=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=n=new R(e.insertBefore(P(),r),r,void 0,t??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class T extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Re(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return C}}T._$litElement$=!0,T.finalized=!0,(ge=globalThis.litElementHydrateSupport)==null||ge.call(globalThis,{LitElement:T});const W=globalThis.litElementPolyfillSupport;W==null||W({LitElement:T}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const q={branding:{logo:{url:"https://p0kwoe9stg.wpdns.site/wp-content/uploads/2025/02/umbral-new-logo-svg.svg",alt:"Umbral Logo",width:180}},options:[{id:"chat",title:"Chat Solutions",description:"Build conversational experiences that feel natural and engaging.",image:"https://api.iconify.design/carbon:chat.svg",buttonText:"Learn More",enabled:!0},{id:"voice",title:"Voice Agents",description:"Create voice-enabled assistants that understand and respond naturally.",image:"https://api.iconify.design/carbon:microphone.svg",buttonText:"Explore Voice",enabled:!0},{id:"automation",title:"Automation",description:"Streamline workflows and processes with intelligent automation.",image:"https://api.iconify.design/carbon:settings.svg",buttonText:"Get Started",enabled:!0}]},Ne=()=>l`
  <div class="logo-container">
    <img 
      src=${q.branding.logo.url}
      alt=${q.branding.logo.alt}
      width=${q.branding.logo.width}
      class="logo-image"
    />
  </div>
`,He=({option:s,onSelect:e})=>l`
  <div class="option-card">
    ${s.image?l`
      <div class="option-image">
        <img src=${s.image} alt=${s.title} />
      </div>
    `:""}
    
    ${s.title?l`
      <h3 class="option-title">${s.title}</h3>
    `:""}
    
    ${s.description?l`
      <p class="option-description">${s.description}</p>
    `:""}
    
    ${s.buttonText?l`
      <button 
        @click=${()=>e(s)}
        class="option-button"
      >
        ${s.buttonText}
      </button>
    `:""}
  </div>
`,Fe=({total:s,current:e})=>l`
  <div class="carousel-dots">
    ${Array.from({length:s},(t,i)=>l`
      <div class="carousel-dot ${i===e?"active":""}"></div>
    `)}
  </div>
`,qe=({options:s,onSelect:e,currentSlide:t})=>l`
  <div class="options-grid">
    ${s.map(i=>He({option:i,onSelect:e}))}
  </div>
  ${Fe({total:s.length,current:t})}
`,Be=s=>l`
  <div class=${s.containerClasses}>
    <div class="extension-content">
      ${Ne()}
      ${qe({options:q.options.filter(e=>e.enabled),onSelect:s.handleOptionSelect,currentSlide:s.currentSlide})}
    </div>
  </div>
`;class ce extends T{constructor(){super(),this.isVisible=!0,this.isAnimatingIn=!1,this.isClosing=!1,this.currentSlide=0,this.handleOptionSelect=this.handleOptionSelect.bind(this),this.handleScroll=this.handleScroll.bind(this)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this.isAnimatingIn=!0,this.requestUpdate()}),window.innerWidth<=768&&this.addEventListener("scroll",this.handleScroll,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("scroll",this.handleScroll)}handleScroll(e){const t=e.target,i=t.offsetWidth,n=t.scrollLeft;this.currentSlide=Math.round(n/i),this.requestUpdate()}createRenderRoot(){return this}async handleOptionSelect(e){this.isClosing=!0,this.requestUpdate(),await new Promise(t=>setTimeout(t,300)),this.dispatchEvent(new CustomEvent("three-column-options-submit",{detail:{type:"option_selection",value:e.id},bubbles:!0,composed:!0})),setTimeout(()=>{this.remove()},100)}render(){if(!this.isVisible)return null;const e=["extension-container",this.isAnimatingIn?"visible":"",this.isClosing?"closing":""].filter(Boolean).join(" ");return Be({containerClasses:e,handleOptionSelect:this.handleOptionSelect,currentSlide:this.currentSlide})}}D(ce,"properties",{isVisible:{type:Boolean},isAnimatingIn:{type:Boolean},isClosing:{type:Boolean},currentSlide:{type:Number}}),customElements.define("three-column-options",ce);const Le={name:"ThreeColumnOptions",type:"response",match:({trace:s})=>s.type==="option_cards"||s.payload.name==="option_cards",render:async({trace:s,element:e})=>{var t;if(console.log("Options Render Attempt"),window.voiceflowChat=document.querySelector("#umbral-chat"),!((t=window.voiceflowChat)!=null&&t.shadowRoot)){console.log("Options Render Failed - No Chat Shadow Root");return}setTimeout(()=>{if(window.targetElement=window.voiceflowChat.shadowRoot.querySelector(".vfrc-chat"),!targetElement){console.log("Options Render Failed - No Chat Element");return}const i=document.createElement("three-column-options");e.append("Make a selection"),i.addEventListener("three-column-options-submit",n=>{const{type:r,value:o}=n.detail;window.voiceflow.chat.interact({type:"option_selection",payload:{status:"success",data:{selection:o}}})}),targetElement.appendChild(i)},1e3)}},u={branding:{logo:{icon:"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",url:"/assets/logos/main.png",alt:"Support Chat"},poweredBy:{text:"POWERED BY",logo:{text:"Street2Fleet",icon:"/assets/logos/powered-by.png"}}},header:{title:"Hi there! 👋",subtitle:"Welcome! We're here to help."},steps:[{id:"zipcode",placeholder:"Enter your zip code (ex: 23455)",validation:s=>s.length>=5},{id:"email",placeholder:"What's your email?",validation:s=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)}],questions:[{id:"repairs",title:"Our repair services",icon:"chevron-right"},{id:"areas",title:"Service locations",icon:"chevron-right"},{id:"emergency",title:"Emergency service",icon:"chevron-right"},{id:"quote",title:"Get a quote",icon:"chevron-right"},{id:"maintain",title:"Maintenance tips",icon:"chevron-right"}],footer:{navigation:[{id:"home",label:"Home",icon:"home"},{id:"chat",label:"Chat",icon:"chat"}]},icons:{"chevron-right":"M9 5l7 7-7 7",home:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",chat:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",menu:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z",send:"M5 12h14M12 5l7 7-7 7",calendar:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},extensions:[{id:"book-now",meta:{label:"Book Now",icon:"add a icon here",iframe:!0,url:null,src:"https://assets.a2o-static.com/git/scheduler/v3/street2fleet/themes/precision/2025-01-31-23-47-43/index.html?api_token=4%7CRhwvRsp4MVAtoEZYp9a8r7xcHC1q6heig5hEtfzB&market=pd-northern-nj&bust_downstream_cache=1&iframe_parent_domain=https%3A%2F%2Fpdsnj.com&ga_client_id=1036035276.1741611885&landing_page=https%3A%2F%2Fpdsnj.com%2F&referrer=https%3A%2F%2Fpdsnj.com%2F&original_referrer=https%3A%2F%2Fpdsnj.com%2F",trigger:"LaunchCalendar"}}]},N=({name:s,className:e="w-5 h-5"})=>l`
  <svg 
    class=${e} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <path d=${u.icons[s]}></path>
  </svg>
`,ze=()=>l`
  <div class="chat-header">
    <div class="chat-logo">
      ${l`
        <img 
          src=${u.branding.logo.url} 
          alt=${u.branding.logo.alt} 
          class="w-auto object-contain" style="height: 3.5rem;"
        />
      `}
    </div>
    <button class="chat-menu">
      ${N({name:"menu"})}
    </button>
  </div>
`,he=({value:s,handleInput:e,handleSubmit:t,placeholder:i,disabled:n,currentStep:r})=>l`
  <div class="input-group ${s.trim()?"":"needs-completion"}">
    <div class="step-indicator ${s.trim()?"":"active"}">
      <span>Please complete: ${i}</span>
    </div>
    <input
      type="${u.steps[r].id==="email"?"email":"text"}"
      class="chat-input"
      .value=${s}
      @input=${e}
      placeholder=${i}
      ?disabled=${n}
      @keyup=${o=>o.key==="Enter"&&t()}
      autocomplete=${u.steps[r].id}
      aria-label=${i}
      @focus=${o=>o.target.select()}
      .autoFocus=${!0}
    >
    <button
      class="send-button"
      @click=${t}
      ?disabled=${n||!s.trim()}
      aria-label="Send"
    >
      ${N({name:"send",className:"w-5 h-5"})}
    </button>
  </div>
`,Ve=({onQuestionClick:s})=>l`
  <div class="question-list">
    ${u.questions.map(e=>l`
      <button 
        class="question-button"
        @click=${()=>s(e)}
      >
        <span>${e.title}</span>
        ${N({name:e.icon})}
      </button>
    `)}
  </div>
`,je=()=>l`
  <div class="powered-by">
    <span class="powered-text">${u.branding.poweredBy.text}</span>
    <div class="powered-logo">
      <img 
        src=${u.branding.poweredBy.logo.icon} 
        alt="Lyro AI"
        class="h-8 w-auto"
      >    </div>
  </div>
`,Qe=()=>u.extensions&&u.extensions.find(s=>s.id==="book-now"),We=()=>{const s=u.extensions.find(e=>e.id==="book-now");if(s&&s.meta&&s.meta.src){const e=document.createElement("div");e.style.cssText="position: fixed;inset: 0px;z-index: 2147483647;width: 100%;height: 100%;",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center";const t=document.createElement("button");t.textContent="×",t.style.position="absolute",t.style.top="10px",t.style.right="10px",t.style.fontSize="24px",t.style.color="white",t.style.background="none",t.style.border="none",t.style.cursor="pointer",t.style.zIndex="10000",t.addEventListener("click",()=>document.body.removeChild(e));const i=document.createElement("iframe");i.src=s.meta.src,i.style.width="100%",i.style.height="100%",i.style.border="none",i.style.backgroundColor="transparent",e.appendChild(t),e.appendChild(i),document.body.appendChild(e)}},De=({currentTab:s,onTabChange:e})=>{const t=Qe();return l`
    <div class="chat-footer">
      ${t?l`
        <button 
          class="book-now-button"
          @click=${We}
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
          <span>${t.meta.label||"Book Now"}</span>
        </button>
      `:l`
        ${u.footer.navigation.map(i=>l`
          <button 
            class="footer-tab ${s===i.id?"active":""}"
            @click=${()=>e(i.id)}
          >
            ${N({name:i.icon})}
            <span>${i.label}</span>
          </button>
        `)}
      `}
    </div>
  `},Ke=({showModal:s,currentStep:e,inputs:t,handleInput:i,handleSubmit:n,questionTitle:r,isClosing:o,loading:c})=>{const a=u.steps[e];return l`
    <div class="modal-overlay ${s?"flex":"hidden"} ${o?"closing":""}">
      <div class="modal-content ${o?"closing":""}">
        <h3 class="modal-title">I look forward to answering questions about ${r}</h3>
        
        ${he({value:t[a.id],handleInput:d=>i(a.id,d),handleSubmit:n,placeholder:a.placeholder,disabled:c,currentStep:e})}
      </div>
    </div>
  `},Ge=s=>l`
  <div 
    class=${s.containerClasses}
    @keydown=${e=>e.key==="Enter"&&s.handleSubmit()}
  >
    ${ze()}
    
    <div class="chat-content">
      <div class="header-content">
        <h1 class="chat-title">${u.header.title}</h1>
        <p class="chat-subtitle">${u.header.subtitle}</p>
      </div>
      
      <div class="chat-form">
        ${s.error?l`
          <div class="error-message" role="alert">
            ${s.error}
          </div>
        `:""}
        
        ${he({value:s.inputs[u.steps[s.currentStep].id],handleInput:e=>s.handleInput(u.steps[s.currentStep].id,e),handleSubmit:s.handleSubmit,placeholder:u.steps[s.currentStep].placeholder,disabled:s.loading,currentStep:s.currentStep})}

        ${s.currentTab==="home"?Ve({onQuestionClick:s.handleQuestionClick}):""}
      </div>

      ${je()}
    </div>

    ${De({currentTab:s.currentTab,onTabChange:s.handleTabChange})}
    
    ${Ke({showModal:s.showEmailModal,currentStep:s.currentStep,inputs:s.inputs,handleInput:s.handleInput,handleSubmit:s.handleSubmit,questionTitle:s.selectedQuestion?s.selectedQuestion.title:"",isClosing:s.isModalClosing,loading:s.loading})}
  </div>
`;class de extends T{constructor(){super();const e=u.steps.reduce((t,i)=>(t[i.id]="",t),{});this.currentStep=0,this.inputs=e,this.loading=!1,this.currentTab="home",this.error="",this.isClosing=!1,this.isVisible=!0,this.isAnimatingIn=!1,this.showEmailModal=!1,this.selectedQuestion=null,this.isModalClosing=!1,this.handleInput=this.handleInput.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.handleQuestionClick=this.handleQuestionClick.bind(this),this.handleTabChange=this.handleTabChange.bind(this),this.handleKeyPress=this.handleKeyPress.bind(this),this.handleEmailInput=this.handleEmailInput.bind(this),this.handleEmailSubmit=this.handleEmailSubmit.bind(this)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this.isAnimatingIn=!0,this.requestUpdate(),this.updateComplete.then(()=>{setTimeout(()=>{const e=this.querySelector(".chat-input");e&&(e.focus(),e.select())},300)})}),window.addEventListener("keydown",this.handleKeyPress)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyPress)}createRenderRoot(){return this}handleKeyPress(e){e.key==="Escape"&&this.isVisible&&this.closeForm()}handleInput(e,t){this.inputs={...this.inputs,[e]:t.target.value.trim()},this.error="",this.requestUpdate()}validateCurrentStep(){const e=u.steps[this.currentStep],t=this.inputs[e.id];return e.validation(t)}async closeForm(){this.isClosing=!0,this.requestUpdate(),await new Promise(e=>setTimeout(e,300)),this.isVisible=!1,this.requestUpdate()}async handleSubmit(){if(this.loading||!this.validateCurrentStep()){this.validateCurrentStep()||(this.error=`Please enter a valid ${u.steps[this.currentStep].id}`);return}this.loading=!0;try{await new Promise(e=>setTimeout(e,500)),this.currentStep<u.steps.length-1?(this.currentStep++,this.error="",this.updateComplete.then(()=>{setTimeout(()=>{const e=this.querySelector(".chat-input");e&&(e.focus(),e.select())},50)})):(await this.closeForm(),this.dispatchEvent(new CustomEvent("form-submit",{detail:{type:"form_completion",value:this.inputs},bubbles:!0,composed:!0})))}catch{this.error="Something went wrong. Please try again."}finally{this.loading=!1}}handleQuestionClick(e){this.selectedQuestion=e,this.showEmailModal=!0,this.requestUpdate(),this.updateComplete.then(()=>{setTimeout(()=>{const t=this.querySelector(".modal-content .chat-input");t&&(t.focus(),t.select())},100)})}handleEmailInput(e){this.inputs.email=e.target.value.trim(),this.requestUpdate()}async handleEmailSubmit(){if(!this.inputs.email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.inputs.email)){this.error="Please enter a valid email address",this.requestUpdate();return}this.isModalClosing=!0,this.requestUpdate(),await new Promise(e=>setTimeout(e,300)),this.showEmailModal=!1,this.isModalClosing=!1,this.dispatchEvent(new CustomEvent("form-submit",{detail:{type:"email",value:this.inputs.email,questionId:this.selectedQuestion.id,questionTitle:this.selectedQuestion.title},bubbles:!0,composed:!0})),await this.closeForm()}handleTabChange(e){this.currentTab!==e&&(this.currentTab=e,this.requestUpdate())}render(){if(!this.isVisible)return null;const e=["chat-container",this.isAnimatingIn?"visible":"",this.isClosing?"fade-out":""].filter(Boolean).join(" ");return Ge({currentStep:this.currentStep,inputs:this.inputs,loading:this.loading,currentTab:this.currentTab,error:this.error,isClosing:this.isClosing,containerClasses:e,handleInput:this.handleInput,handleSubmit:this.handleSubmit,handleQuestionClick:this.handleQuestionClick,handleTabChange:this.handleTabChange,showEmailModal:this.showEmailModal,selectedQuestion:this.selectedQuestion,handleEmailInput:this.handleEmailInput,handleEmailSubmit:this.handleEmailSubmit,isModalClosing:this.isModalClosing})}}D(de,"properties",{currentStep:{type:Number},inputs:{type:Object},loading:{type:Boolean},currentTab:{type:String},error:{type:String},isClosing:{type:Boolean},isVisible:{type:Boolean},isAnimatingIn:{type:Boolean},showEmailModal:{type:Boolean},selectedQuestion:{type:Object},isModalClosing:{type:Boolean}}),customElements.define("form-first",de);const ue="form_first_completed",pe="form_first_user_data",Je=()=>localStorage.getItem(ue)==="true",Ye=s=>{localStorage.setItem(ue,"true"),s&&localStorage.setItem(pe,JSON.stringify(s))},me=(s,e=null)=>{console.log("Generating welcome card",s);try{let t,i;e?(t=e.data.form_completion||{},i=e,Ye(t)):(t=JSON.parse(localStorage.getItem(pe)||"{}"),i={status:"success",data:{form_completion:t,returning_user:!0}});const n=document.createElement("div");return n.className="welcome-card",n.innerHTML=`
      <div class="welcome-card-content">
        <div class="welcome-card-header">
          <h2>Welcome!</h2>
        </div>
        <p class="welcome-card-text">Thanks for completing your profile. How can we help you today?</p>
        ${t!=null&&t.zipcode?`<p class="welcome-card-text">${t.zipcode}</p>`:""}
        ${t!=null&&t.email?`<p class="welcome-card-text">${t.email}</p>`:""}
      </div>
    `,s.appendChild(n),window.voiceflow.chat.interact({type:"form_submit",payload:i}),!0}catch(t){return console.error("Error generating welcome card:",t),!1}},Ze={name:"FormFirst",type:"response",match:({trace:s})=>{var e;return s.type==="form_gate"||((e=s.payload)==null?void 0:e.name)==="form_gate"},render:async({trace:s,element:e})=>{if(console.log("Rendering Extension: Form First"),Je()){me(e);return}const t=document.querySelector("#voiceflow-chat");if(!(t!=null&&t.shadowRoot))return;const i=t.shadowRoot.querySelector(".vfrc-chat");if(!i)return;const n=document.createElement("form-first");n.addEventListener("form-submit",r=>{const{type:o,value:c,questionId:a,questionTitle:d}=r.detail;let p={status:"success",data:{[o]:c}};a&&d&&(p.data.questionId=a,p.data.questionTitle=d),o==="form_completion"?me(e,p):window.voiceflow.chat.interact({type:"form_submit",payload:p})}),i.appendChild(n)}};class Xe{constructor(e){this.config=e,this.extensions=[Le,Ze]}async loadVoiceflowScript(){return new Promise((e,t)=>{const i=document.createElement("script");i.src="https://cdn.voiceflow.com/widget-next/bundle.mjs",i.type="module",i.onload=e,i.onerror=t,document.head.appendChild(i)})}async initialize(){try{await this.loadVoiceflowScript(),await this.waitForVoiceflow(),window.voiceflowStylesheet&&window.voiceflow.chat.setStylesheet(window.voiceflowStylesheet),window.voiceflow.chat.load({...this.config,assistant:{...this.config.assistant,extensions:this.extensions}})}catch(e){console.error("Failed to initialize Voiceflow:",e)}}waitForVoiceflow(){return new Promise(e=>{const t=()=>{window.voiceflow?e():setTimeout(t,50)};t()})}}window.UmbralExtensions=window.UmbralExtensions||{},window.UmbralExtensions.VoiceflowLauncher=Xe})();
