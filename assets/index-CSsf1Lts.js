(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Od(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const $e={},ds=[],Vn=()=>{},Dw=()=>!1,eu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Md=n=>n.startsWith("onUpdate:"),Lt=Object.assign,Ld=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},xw=Object.prototype.hasOwnProperty,Oe=(n,e)=>xw.call(n,e),le=Array.isArray,fs=n=>Ca(n)==="[object Map]",Qs=n=>Ca(n)==="[object Set]",lm=n=>Ca(n)==="[object Date]",Ie=n=>typeof n=="function",ct=n=>typeof n=="string",Ln=n=>typeof n=="symbol",qe=n=>n!==null&&typeof n=="object",cy=n=>(qe(n)||Ie(n))&&Ie(n.then)&&Ie(n.catch),uy=Object.prototype.toString,Ca=n=>uy.call(n),Vw=n=>Ca(n).slice(8,-1),hy=n=>Ca(n)==="[object Object]",Fd=n=>ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Fo=Od(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},kw=/-(\w)/g,qr=tu(n=>n.replace(kw,(e,t)=>t?t.toUpperCase():"")),Nw=/\B([A-Z])/g,Bi=tu(n=>n.replace(Nw,"-$1").toLowerCase()),dy=tu(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ju=tu(n=>n?`on${dy(n)}`:""),Mr=(n,e)=>!Object.is(n,e),Ll=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Oh=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},uc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let cm;const nu=()=>cm||(cm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ud(n){if(le(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=ct(r)?Fw(r):Ud(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(ct(n)||qe(n))return n}const Ow=/;(?![^(]*\))/g,Mw=/:([^]+)/,Lw=/\/\*[^]*?\*\//g;function Fw(n){const e={};return n.replace(Lw,"").split(Ow).forEach(t=>{if(t){const r=t.split(Mw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Da(n){let e="";if(ct(n))e=n;else if(le(n))for(let t=0;t<n.length;t++){const r=Da(n[t]);r&&(e+=r+" ")}else if(qe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Uw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bw=Od(Uw);function fy(n){return!!n||n===""}function $w(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=xa(n[r],e[r]);return t}function xa(n,e){if(n===e)return!0;let t=lm(n),r=lm(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Ln(n),r=Ln(e),t||r)return n===e;if(t=le(n),r=le(e),t||r)return t&&r?$w(n,e):!1;if(t=qe(n),r=qe(e),t||r){if(!t||!r)return!1;const i=Object.keys(n).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!xa(n[o],e[o]))return!1}}return String(n)===String(e)}function Bd(n,e){return n.findIndex(t=>xa(t,e))}const py=n=>!!(n&&n.__v_isRef===!0),Me=n=>ct(n)?n:n==null?"":le(n)||qe(n)&&(n.toString===uy||!Ie(n.toString))?py(n)?Me(n.value):JSON.stringify(n,my,2):String(n),my=(n,e)=>py(e)?my(n,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i],s)=>(t[Zu(r,s)+" =>"]=i,t),{})}:Qs(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Zu(t))}:Ln(e)?Zu(e):qe(e)&&!le(e)&&!hy(e)?String(e):e,Zu=(n,e="")=>{var t;return Ln(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class jw{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){++this._on===1&&(this.prevScope=Kt,Kt=this)}off(){this._on>0&&--this._on===0&&(Kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function qw(){return Kt}let je;const eh=new WeakSet;class gy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,eh.has(this)&&(eh.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||yy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,um(this),vy(this);const e=je,t=En;je=this,En=!0;try{return this.fn()}finally{Iy(this),je=e,En=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qd(e);this.deps=this.depsTail=void 0,um(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?eh.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Mh(this)&&this.run()}get dirty(){return Mh(this)}}let _y=0,Uo,Bo;function yy(n,e=!1){if(n.flags|=8,e){n.next=Bo,Bo=n;return}n.next=Uo,Uo=n}function $d(){_y++}function jd(){if(--_y>0)return;if(Bo){let e=Bo;for(Bo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Uo;){let e=Uo;for(Uo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function vy(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Iy(n){let e,t=n.depsTail,r=t;for(;r;){const i=r.prevDep;r.version===-1?(r===t&&(t=i),qd(r),zw(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}n.deps=e,n.depsTail=t}function Mh(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ey(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ey(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===aa)||(n.globalVersion=aa,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Mh(n))))return;n.flags|=2;const e=n.dep,t=je,r=En;je=n,En=!0;try{vy(n);const i=n.fn(n._value);(e.version===0||Mr(i,n._value))&&(n.flags|=128,n._value=i,e.version++)}catch(i){throw e.version++,i}finally{je=t,En=r,Iy(n),n.flags&=-3}}function qd(n,e=!1){const{dep:t,prevSub:r,nextSub:i}=n;if(r&&(r.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)qd(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function zw(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let En=!0;const Ty=[];function ir(){Ty.push(En),En=!1}function sr(){const n=Ty.pop();En=n===void 0?!0:n}function um(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=je;je=void 0;try{e()}finally{je=t}}}let aa=0;class Kw{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!je||!En||je===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==je)t=this.activeLink=new Kw(je,this),je.deps?(t.prevDep=je.depsTail,je.depsTail.nextDep=t,je.depsTail=t):je.deps=je.depsTail=t,wy(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=je.depsTail,t.nextDep=void 0,je.depsTail.nextDep=t,je.depsTail=t,je.deps===t&&(je.deps=r)}return t}trigger(e){this.version++,aa++,this.notify(e)}notify(e){$d();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{jd()}}}function wy(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)wy(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const hc=new WeakMap,bi=Symbol(""),Lh=Symbol(""),la=Symbol("");function Vt(n,e,t){if(En&&je){let r=hc.get(n);r||hc.set(n,r=new Map);let i=r.get(t);i||(r.set(t,i=new zd),i.map=r,i.key=t),i.track()}}function Wn(n,e,t,r,i,s){const o=hc.get(n);if(!o){aa++;return}const a=c=>{c&&c.trigger()};if($d(),e==="clear")o.forEach(a);else{const c=le(n),u=c&&Fd(t);if(c&&t==="length"){const h=Number(r);o.forEach((p,m)=>{(m==="length"||m===la||!Ln(m)&&m>=h)&&a(p)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(la)),e){case"add":c?u&&a(o.get("length")):(a(o.get(bi)),fs(n)&&a(o.get(Lh)));break;case"delete":c||(a(o.get(bi)),fs(n)&&a(o.get(Lh)));break;case"set":fs(n)&&a(o.get(bi));break}}jd()}function Gw(n,e){const t=hc.get(n);return t&&t.get(e)}function Hi(n){const e=ke(n);return e===n?e:(Vt(e,"iterate",la),hn(n)?e:e.map(bt))}function ru(n){return Vt(n=ke(n),"iterate",la),n}const Hw={__proto__:null,[Symbol.iterator](){return th(this,Symbol.iterator,bt)},concat(...n){return Hi(this).concat(...n.map(e=>le(e)?Hi(e):e))},entries(){return th(this,"entries",n=>(n[1]=bt(n[1]),n))},every(n,e){return Gn(this,"every",n,e,void 0,arguments)},filter(n,e){return Gn(this,"filter",n,e,t=>t.map(bt),arguments)},find(n,e){return Gn(this,"find",n,e,bt,arguments)},findIndex(n,e){return Gn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Gn(this,"findLast",n,e,bt,arguments)},findLastIndex(n,e){return Gn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Gn(this,"forEach",n,e,void 0,arguments)},includes(...n){return nh(this,"includes",n)},indexOf(...n){return nh(this,"indexOf",n)},join(n){return Hi(this).join(n)},lastIndexOf(...n){return nh(this,"lastIndexOf",n)},map(n,e){return Gn(this,"map",n,e,void 0,arguments)},pop(){return Eo(this,"pop")},push(...n){return Eo(this,"push",n)},reduce(n,...e){return hm(this,"reduce",n,e)},reduceRight(n,...e){return hm(this,"reduceRight",n,e)},shift(){return Eo(this,"shift")},some(n,e){return Gn(this,"some",n,e,void 0,arguments)},splice(...n){return Eo(this,"splice",n)},toReversed(){return Hi(this).toReversed()},toSorted(n){return Hi(this).toSorted(n)},toSpliced(...n){return Hi(this).toSpliced(...n)},unshift(...n){return Eo(this,"unshift",n)},values(){return th(this,"values",bt)}};function th(n,e,t){const r=ru(n),i=r[e]();return r!==n&&!hn(n)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=t(s.value)),s}),i}const Ww=Array.prototype;function Gn(n,e,t,r,i,s){const o=ru(n),a=o!==n&&!hn(n),c=o[e];if(c!==Ww[e]){const p=c.apply(n,s);return a?bt(p):p}let u=t;o!==n&&(a?u=function(p,m){return t.call(this,bt(p),m,n)}:t.length>2&&(u=function(p,m){return t.call(this,p,m,n)}));const h=c.call(o,u,r);return a&&i?i(h):h}function hm(n,e,t,r){const i=ru(n);let s=t;return i!==n&&(hn(n)?t.length>3&&(s=function(o,a,c){return t.call(this,o,a,c,n)}):s=function(o,a,c){return t.call(this,o,bt(a),c,n)}),i[e](s,...r)}function nh(n,e,t){const r=ke(n);Vt(r,"iterate",la);const i=r[e](...t);return(i===-1||i===!1)&&Hd(t[0])?(t[0]=ke(t[0]),r[e](...t)):i}function Eo(n,e,t=[]){ir(),$d();const r=ke(n)[e].apply(n,t);return jd(),sr(),r}const Qw=Od("__proto__,__v_isRef,__isVue"),by=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ln));function Xw(n){Ln(n)||(n=String(n));const e=ke(this);return Vt(e,"has",n),e.hasOwnProperty(n)}class Ay{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return s;if(t==="__v_raw")return r===(i?s?ob:Cy:s?Py:Ry).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!i){let c;if(o&&(c=Hw[t]))return c;if(t==="hasOwnProperty")return Xw}const a=Reflect.get(e,t,lt(e)?e:r);return(Ln(t)?by.has(t):Qw(t))||(i||Vt(e,"get",t),s)?a:lt(a)?o&&Fd(t)?a:a.value:qe(a)?i?Dy(a):Va(a):a}}class Sy extends Ay{constructor(e=!1){super(!1,e)}set(e,t,r,i){let s=e[t];if(!this._isShallow){const c=zr(s);if(!hn(r)&&!zr(r)&&(s=ke(s),r=ke(r)),!le(e)&&lt(s)&&!lt(r))return c?!1:(s.value=r,!0)}const o=le(e)&&Fd(t)?Number(t)<e.length:Oe(e,t),a=Reflect.set(e,t,r,lt(e)?e:i);return e===ke(i)&&(o?Mr(r,s)&&Wn(e,"set",t,r):Wn(e,"add",t,r)),a}deleteProperty(e,t){const r=Oe(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&r&&Wn(e,"delete",t,void 0),i}has(e,t){const r=Reflect.has(e,t);return(!Ln(t)||!by.has(t))&&Vt(e,"has",t),r}ownKeys(e){return Vt(e,"iterate",le(e)?"length":bi),Reflect.ownKeys(e)}}class Yw extends Ay{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Jw=new Sy,Zw=new Yw,eb=new Sy(!0);const Fh=n=>n,vl=n=>Reflect.getPrototypeOf(n);function tb(n,e,t){return function(...r){const i=this.__v_raw,s=ke(i),o=fs(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=i[n](...r),h=t?Fh:e?dc:bt;return!e&&Vt(s,"iterate",c?Lh:bi),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:a?[h(p[0]),h(p[1])]:h(p),done:m}},[Symbol.iterator](){return this}}}}function Il(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function nb(n,e){const t={get(i){const s=this.__v_raw,o=ke(s),a=ke(i);n||(Mr(i,a)&&Vt(o,"get",i),Vt(o,"get",a));const{has:c}=vl(o),u=e?Fh:n?dc:bt;if(c.call(o,i))return u(s.get(i));if(c.call(o,a))return u(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!n&&Vt(ke(i),"iterate",bi),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=ke(s),a=ke(i);return n||(Mr(i,a)&&Vt(o,"has",i),Vt(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,c=ke(a),u=e?Fh:n?dc:bt;return!n&&Vt(c,"iterate",bi),a.forEach((h,p)=>i.call(s,u(h),u(p),o))}};return Lt(t,n?{add:Il("add"),set:Il("set"),delete:Il("delete"),clear:Il("clear")}:{add(i){!e&&!hn(i)&&!zr(i)&&(i=ke(i));const s=ke(this);return vl(s).has.call(s,i)||(s.add(i),Wn(s,"add",i,i)),this},set(i,s){!e&&!hn(s)&&!zr(s)&&(s=ke(s));const o=ke(this),{has:a,get:c}=vl(o);let u=a.call(o,i);u||(i=ke(i),u=a.call(o,i));const h=c.call(o,i);return o.set(i,s),u?Mr(s,h)&&Wn(o,"set",i,s):Wn(o,"add",i,s),this},delete(i){const s=ke(this),{has:o,get:a}=vl(s);let c=o.call(s,i);c||(i=ke(i),c=o.call(s,i)),a&&a.call(s,i);const u=s.delete(i);return c&&Wn(s,"delete",i,void 0),u},clear(){const i=ke(this),s=i.size!==0,o=i.clear();return s&&Wn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=tb(i,n,e)}),t}function Kd(n,e){const t=nb(n,e);return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(Oe(t,i)&&i in r?t:r,i,s)}const rb={get:Kd(!1,!1)},ib={get:Kd(!1,!0)},sb={get:Kd(!0,!1)};const Ry=new WeakMap,Py=new WeakMap,Cy=new WeakMap,ob=new WeakMap;function ab(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lb(n){return n.__v_skip||!Object.isExtensible(n)?0:ab(Vw(n))}function Va(n){return zr(n)?n:Gd(n,!1,Jw,rb,Ry)}function cb(n){return Gd(n,!1,eb,ib,Py)}function Dy(n){return Gd(n,!0,Zw,sb,Cy)}function Gd(n,e,t,r,i){if(!qe(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=lb(n);if(s===0)return n;const o=i.get(n);if(o)return o;const a=new Proxy(n,s===2?r:t);return i.set(n,a),a}function ps(n){return zr(n)?ps(n.__v_raw):!!(n&&n.__v_isReactive)}function zr(n){return!!(n&&n.__v_isReadonly)}function hn(n){return!!(n&&n.__v_isShallow)}function Hd(n){return n?!!n.__v_raw:!1}function ke(n){const e=n&&n.__v_raw;return e?ke(e):n}function ub(n){return!Oe(n,"__v_skip")&&Object.isExtensible(n)&&Oh(n,"__v_skip",!0),n}const bt=n=>qe(n)?Va(n):n,dc=n=>qe(n)?Dy(n):n;function lt(n){return n?n.__v_isRef===!0:!1}function Ge(n){return hb(n,!1)}function hb(n,e){return lt(n)?n:new db(n,e)}class db{constructor(e,t){this.dep=new zd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ke(e),this._value=t?e:bt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||hn(e)||zr(e);e=r?e:ke(e),Mr(e,t)&&(this._rawValue=e,this._value=r?e:bt(e),this.dep.trigger())}}function Ee(n){return lt(n)?n.value:n}const fb={get:(n,e,t)=>e==="__v_raw"?n:Ee(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return lt(i)&&!lt(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function xy(n){return ps(n)?n:new Proxy(n,fb)}function pb(n){const e=le(n)?new Array(n.length):{};for(const t in n)e[t]=gb(n,t);return e}class mb{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Gw(ke(this._object),this._key)}}function gb(n,e,t){const r=n[e];return lt(r)?r:new mb(n,e,t)}class _b{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new zd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=aa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&je!==this)return yy(this,!0),!0}get value(){const e=this.dep.track();return Ey(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function yb(n,e,t=!1){let r,i;return Ie(n)?r=n:(r=n.get,i=n.set),new _b(r,i,t)}const El={},fc=new WeakMap;let fi;function vb(n,e=!1,t=fi){if(t){let r=fc.get(t);r||fc.set(t,r=[]),r.push(n)}}function Ib(n,e,t=$e){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:c}=t,u=F=>i?F:hn(F)||i===!1||i===0?Qn(F,1):Qn(F);let h,p,m,y,A=!1,R=!1;if(lt(n)?(p=()=>n.value,A=hn(n)):ps(n)?(p=()=>u(n),A=!0):le(n)?(R=!0,A=n.some(F=>ps(F)||hn(F)),p=()=>n.map(F=>{if(lt(F))return F.value;if(ps(F))return u(F);if(Ie(F))return c?c(F,2):F()})):Ie(n)?e?p=c?()=>c(n,2):n:p=()=>{if(m){ir();try{m()}finally{sr()}}const F=fi;fi=h;try{return c?c(n,3,[y]):n(y)}finally{fi=F}}:p=Vn,e&&i){const F=p,ee=i===!0?1/0:i;p=()=>Qn(F(),ee)}const x=qw(),k=()=>{h.stop(),x&&x.active&&Ld(x.effects,h)};if(s&&e){const F=e;e=(...ee)=>{F(...ee),k()}}let L=R?new Array(n.length).fill(El):El;const M=F=>{if(!(!(h.flags&1)||!h.dirty&&!F))if(e){const ee=h.run();if(i||A||(R?ee.some((K,v)=>Mr(K,L[v])):Mr(ee,L))){m&&m();const K=fi;fi=h;try{const v=[ee,L===El?void 0:R&&L[0]===El?[]:L,y];L=ee,c?c(e,3,v):e(...v)}finally{fi=K}}}else h.run()};return a&&a(M),h=new gy(p),h.scheduler=o?()=>o(M,!1):M,y=F=>vb(F,!1,h),m=h.onStop=()=>{const F=fc.get(h);if(F){if(c)c(F,4);else for(const ee of F)ee();fc.delete(h)}},e?r?M(!0):L=h.run():o?o(M.bind(null,!0),!0):h.run(),k.pause=h.pause.bind(h),k.resume=h.resume.bind(h),k.stop=k,k}function Qn(n,e=1/0,t){if(e<=0||!qe(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,lt(n))Qn(n.value,e,t);else if(le(n))for(let r=0;r<n.length;r++)Qn(n[r],e,t);else if(Qs(n)||fs(n))n.forEach(r=>{Qn(r,e,t)});else if(hy(n)){for(const r in n)Qn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Qn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ka(n,e,t,r){try{return r?n(...r):n()}catch(i){iu(i,e,t)}}function Fn(n,e,t,r){if(Ie(n)){const i=ka(n,e,t,r);return i&&cy(i)&&i.catch(s=>{iu(s,e,t)}),i}if(le(n)){const i=[];for(let s=0;s<n.length;s++)i.push(Fn(n[s],e,t,r));return i}}function iu(n,e,t,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||$e;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let p=0;p<h.length;p++)if(h[p](n,c,u)===!1)return}a=a.parent}if(s){ir(),ka(s,null,10,[n,c,u]),sr();return}}Eb(n,t,i,r,o)}function Eb(n,e,t,r=!0,i=!1){if(i)throw n;console.error(n)}const $t=[];let Sn=-1;const ms=[];let Ar=null,ns=0;const Vy=Promise.resolve();let pc=null;function As(n){const e=pc||Vy;return n?e.then(this?n.bind(this):n):e}function Tb(n){let e=Sn+1,t=$t.length;for(;e<t;){const r=e+t>>>1,i=$t[r],s=ca(i);s<n||s===n&&i.flags&2?e=r+1:t=r}return e}function Wd(n){if(!(n.flags&1)){const e=ca(n),t=$t[$t.length-1];!t||!(n.flags&2)&&e>=ca(t)?$t.push(n):$t.splice(Tb(e),0,n),n.flags|=1,ky()}}function ky(){pc||(pc=Vy.then(Oy))}function wb(n){le(n)?ms.push(...n):Ar&&n.id===-1?Ar.splice(ns+1,0,n):n.flags&1||(ms.push(n),n.flags|=1),ky()}function dm(n,e,t=Sn+1){for(;t<$t.length;t++){const r=$t[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;$t.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ny(n){if(ms.length){const e=[...new Set(ms)].sort((t,r)=>ca(t)-ca(r));if(ms.length=0,Ar){Ar.push(...e);return}for(Ar=e,ns=0;ns<Ar.length;ns++){const t=Ar[ns];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ar=null,ns=0}}const ca=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Oy(n){try{for(Sn=0;Sn<$t.length;Sn++){const e=$t[Sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ka(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Sn<$t.length;Sn++){const e=$t[Sn];e&&(e.flags&=-2)}Sn=-1,$t.length=0,Ny(),pc=null,($t.length||ms.length)&&Oy()}}let tn=null,My=null;function mc(n){const e=tn;return tn=n,My=n&&n.type.__scopeId||null,e}function Ly(n,e=tn,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&Em(-1);const s=mc(e);let o;try{o=n(...i)}finally{mc(s),r._d&&Em(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ai(n,e){if(tn===null)return n;const t=lu(tn),r=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,c=$e]=e[i];s&&(Ie(s)&&(s={mounted:s,updated:s}),s.deep&&Qn(o),r.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function li(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(ir(),Fn(c,t,8,[n.el,a,n,e]),sr())}}const bb=Symbol("_vte"),Ab=n=>n.__isTeleport;function Qd(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Qd(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Sb(n,e){return Ie(n)?Lt({name:n.name},e,{setup:n}):n}function Fy(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function $o(n,e,t,r,i=!1){if(le(n)){n.forEach((A,R)=>$o(A,e&&(le(e)?e[R]:e),t,r,i));return}if(jo(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&$o(n,e,t,r.component.subTree);return}const s=r.shapeFlag&4?lu(r.component):r.el,o=i?null:s,{i:a,r:c}=n,u=e&&e.r,h=a.refs===$e?a.refs={}:a.refs,p=a.setupState,m=ke(p),y=p===$e?()=>!1:A=>Oe(m,A);if(u!=null&&u!==c&&(ct(u)?(h[u]=null,y(u)&&(p[u]=null)):lt(u)&&(u.value=null)),Ie(c))ka(c,a,12,[o,h]);else{const A=ct(c),R=lt(c);if(A||R){const x=()=>{if(n.f){const k=A?y(c)?p[c]:h[c]:c.value;i?le(k)&&Ld(k,s):le(k)?k.includes(s)||k.push(s):A?(h[c]=[s],y(c)&&(p[c]=h[c])):(c.value=[s],n.k&&(h[n.k]=c.value))}else A?(h[c]=o,y(c)&&(p[c]=o)):R&&(c.value=o,n.k&&(h[n.k]=o))};o?(x.id=-1,Yt(x,t)):x()}}}nu().requestIdleCallback;nu().cancelIdleCallback;const jo=n=>!!n.type.__asyncLoader,Uy=n=>n.type.__isKeepAlive;function Rb(n,e){By(n,"a",e)}function Pb(n,e){By(n,"da",e)}function By(n,e,t=kt){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(su(e,r,t),t){let i=t.parent;for(;i&&i.parent;)Uy(i.parent.vnode)&&Cb(r,e,t,i),i=i.parent}}function Cb(n,e,t,r){const i=su(e,n,r,!0);Yd(()=>{Ld(r[e],i)},t)}function su(n,e,t=kt,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ir();const a=Na(t),c=Fn(e,t,n,o);return a(),sr(),c});return r?i.unshift(s):i.push(s),s}}const dr=n=>(e,t=kt)=>{(!da||n==="sp")&&su(n,(...r)=>e(...r),t)},Db=dr("bm"),Xd=dr("m"),xb=dr("bu"),Vb=dr("u"),$y=dr("bum"),Yd=dr("um"),kb=dr("sp"),Nb=dr("rtg"),Ob=dr("rtc");function Mb(n,e=kt){su("ec",n,e)}const Lb=Symbol.for("v-ndc");function gc(n,e,t,r){let i;const s=t,o=le(n);if(o||ct(n)){const a=o&&ps(n);let c=!1,u=!1;a&&(c=!hn(n),u=zr(n),n=ru(n)),i=new Array(n.length);for(let h=0,p=n.length;h<p;h++)i[h]=e(c?u?dc(bt(n[h])):bt(n[h]):n[h],h,void 0,s)}else if(typeof n=="number"){i=new Array(n);for(let a=0;a<n;a++)i[a]=e(a+1,a,void 0,s)}else if(qe(n))if(n[Symbol.iterator])i=Array.from(n,(a,c)=>e(a,c,void 0,s));else{const a=Object.keys(n);i=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];i[c]=e(n[h],h,c,s)}}else i=[];return i}const Uh=n=>n?av(n)?lu(n):Uh(n.parent):null,qo=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Uh(n.parent),$root:n=>Uh(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>qy(n),$forceUpdate:n=>n.f||(n.f=()=>{Wd(n.update)}),$nextTick:n=>n.n||(n.n=As.bind(n.proxy)),$watch:n=>s0.bind(n)}),rh=(n,e)=>n!==$e&&!n.__isScriptSetup&&Oe(n,e),Fb={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(rh(r,e))return o[e]=1,r[e];if(i!==$e&&Oe(i,e))return o[e]=2,i[e];if((u=n.propsOptions[0])&&Oe(u,e))return o[e]=3,s[e];if(t!==$e&&Oe(t,e))return o[e]=4,t[e];Bh&&(o[e]=0)}}const h=qo[e];let p,m;if(h)return e==="$attrs"&&Vt(n.attrs,"get",""),h(n);if((p=a.__cssModules)&&(p=p[e]))return p;if(t!==$e&&Oe(t,e))return o[e]=4,t[e];if(m=c.config.globalProperties,Oe(m,e))return m[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return rh(i,e)?(i[e]=t,!0):r!==$e&&Oe(r,e)?(r[e]=t,!0):Oe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||n!==$e&&Oe(n,o)||rh(e,o)||(a=s[0])&&Oe(a,o)||Oe(r,o)||Oe(qo,o)||Oe(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Oe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function fm(n){return le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Bh=!0;function Ub(n){const e=qy(n),t=n.proxy,r=n.ctx;Bh=!1,e.beforeCreate&&pm(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:p,mounted:m,beforeUpdate:y,updated:A,activated:R,deactivated:x,beforeDestroy:k,beforeUnmount:L,destroyed:M,unmounted:F,render:ee,renderTracked:K,renderTriggered:v,errorCaptured:_,serverPrefetch:T,expose:E,inheritAttrs:b,components:P,directives:I,filters:re}=e;if(u&&Bb(u,r,null),o)for(const ce in o){const we=o[ce];Ie(we)&&(r[ce]=we.bind(t))}if(i){const ce=i.call(t,t);qe(ce)&&(n.data=Va(ce))}if(Bh=!0,s)for(const ce in s){const we=s[ce],gt=Ie(we)?we.bind(t,t):Ie(we.get)?we.get.bind(t,t):Vn,fn=!Ie(we)&&Ie(we.set)?we.set.bind(t):Vn,jn=st({get:gt,set:fn});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>jn.value,set:ht=>jn.value=ht})}if(a)for(const ce in a)jy(a[ce],r,t,ce);if(c){const ce=Ie(c)?c.call(t):c;Reflect.ownKeys(ce).forEach(we=>{Gb(we,ce[we])})}h&&pm(h,n,"c");function ye(ce,we){le(we)?we.forEach(gt=>ce(gt.bind(t))):we&&ce(we.bind(t))}if(ye(Db,p),ye(Xd,m),ye(xb,y),ye(Vb,A),ye(Rb,R),ye(Pb,x),ye(Mb,_),ye(Ob,K),ye(Nb,v),ye($y,L),ye(Yd,F),ye(kb,T),le(E))if(E.length){const ce=n.exposed||(n.exposed={});E.forEach(we=>{Object.defineProperty(ce,we,{get:()=>t[we],set:gt=>t[we]=gt})})}else n.exposed||(n.exposed={});ee&&n.render===Vn&&(n.render=ee),b!=null&&(n.inheritAttrs=b),P&&(n.components=P),I&&(n.directives=I),T&&Fy(n)}function Bb(n,e,t=Vn){le(n)&&(n=$h(n));for(const r in n){const i=n[r];let s;qe(i)?"default"in i?s=Fl(i.from||r,i.default,!0):s=Fl(i.from||r):s=Fl(i),lt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function pm(n,e,t){Fn(le(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function jy(n,e,t,r){let i=r.includes(".")?nv(t,r):()=>t[r];if(ct(n)){const s=e[n];Ie(s)&&_s(i,s)}else if(Ie(n))_s(i,n.bind(t));else if(qe(n))if(le(n))n.forEach(s=>jy(s,e,t,r));else{const s=Ie(n.handler)?n.handler.bind(t):e[n.handler];Ie(s)&&_s(i,s,n)}}function qy(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!t&&!r?c=e:(c={},i.length&&i.forEach(u=>_c(c,u,o,!0)),_c(c,e,o)),qe(e)&&s.set(e,c),c}function _c(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&_c(n,s,t,!0),i&&i.forEach(o=>_c(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=$b[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const $b={data:mm,props:gm,emits:gm,methods:Po,computed:Po,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Po,directives:Po,watch:qb,provide:mm,inject:jb};function mm(n,e){return e?n?function(){return Lt(Ie(n)?n.call(this,this):n,Ie(e)?e.call(this,this):e)}:e:n}function jb(n,e){return Po($h(n),$h(e))}function $h(n){if(le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ut(n,e){return n?[...new Set([].concat(n,e))]:e}function Po(n,e){return n?Lt(Object.create(null),n,e):e}function gm(n,e){return n?le(n)&&le(e)?[...new Set([...n,...e])]:Lt(Object.create(null),fm(n),fm(e??{})):e}function qb(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const r in e)t[r]=Ut(n[r],e[r]);return t}function zy(){return{app:null,config:{isNativeTag:Dw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zb=0;function Kb(n,e){return function(r,i=null){Ie(r)||(r=Lt({},r)),i!=null&&!qe(i)&&(i=null);const s=zy(),o=new WeakSet,a=[];let c=!1;const u=s.app={_uid:zb++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:R0,get config(){return s.config},set config(h){},use(h,...p){return o.has(h)||(h&&Ie(h.install)?(o.add(h),h.install(u,...p)):Ie(h)&&(o.add(h),h(u,...p))),u},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),u},component(h,p){return p?(s.components[h]=p,u):s.components[h]},directive(h,p){return p?(s.directives[h]=p,u):s.directives[h]},mount(h,p,m){if(!c){const y=u._ceVNode||Ot(r,i);return y.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),n(y,h,m),c=!0,u._container=h,h.__vue_app__=u,lu(y.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Fn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(h,p){return s.provides[h]=p,u},runWithContext(h){const p=gs;gs=u;try{return h()}finally{gs=p}}};return u}}let gs=null;function Gb(n,e){if(kt){let t=kt.provides;const r=kt.parent&&kt.parent.provides;r===t&&(t=kt.provides=Object.create(r)),t[n]=e}}function Fl(n,e,t=!1){const r=kt||tn;if(r||gs){let i=gs?gs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&Ie(e)?e.call(r&&r.proxy):e}}const Ky={},Gy=()=>Object.create(Ky),Hy=n=>Object.getPrototypeOf(n)===Ky;function Hb(n,e,t,r=!1){const i={},s=Gy();n.propsDefaults=Object.create(null),Wy(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:cb(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function Wb(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,a=ke(i),[c]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let p=0;p<h.length;p++){let m=h[p];if(ou(n.emitsOptions,m))continue;const y=e[m];if(c)if(Oe(s,m))y!==s[m]&&(s[m]=y,u=!0);else{const A=qr(m);i[A]=jh(c,a,A,y,n,!1)}else y!==s[m]&&(s[m]=y,u=!0)}}}else{Wy(n,e,i,s)&&(u=!0);let h;for(const p in a)(!e||!Oe(e,p)&&((h=Bi(p))===p||!Oe(e,h)))&&(c?t&&(t[p]!==void 0||t[h]!==void 0)&&(i[p]=jh(c,a,p,void 0,n,!0)):delete i[p]);if(s!==a)for(const p in s)(!e||!Oe(e,p))&&(delete s[p],u=!0)}u&&Wn(n.attrs,"set","")}function Wy(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Fo(c))continue;const u=e[c];let h;i&&Oe(i,h=qr(c))?!s||!s.includes(h)?t[h]=u:(a||(a={}))[h]=u:ou(n.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=ke(t),u=a||$e;for(let h=0;h<s.length;h++){const p=s[h];t[p]=jh(i,c,p,u[p],n,!Oe(u,p))}}return o}function jh(n,e,t,r,i,s){const o=n[t];if(o!=null){const a=Oe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ie(c)){const{propsDefaults:u}=i;if(t in u)r=u[t];else{const h=Na(i);r=u[t]=c.call(null,e),h()}}else r=c;i.ce&&i.ce._setProp(t,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Bi(t))&&(r=!0))}return r}const Qb=new WeakMap;function Qy(n,e,t=!1){const r=t?Qb:e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},a=[];let c=!1;if(!Ie(n)){const h=p=>{c=!0;const[m,y]=Qy(p,e,!0);Lt(o,m),y&&a.push(...y)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!s&&!c)return qe(n)&&r.set(n,ds),ds;if(le(s))for(let h=0;h<s.length;h++){const p=qr(s[h]);_m(p)&&(o[p]=$e)}else if(s)for(const h in s){const p=qr(h);if(_m(p)){const m=s[h],y=o[p]=le(m)||Ie(m)?{type:m}:Lt({},m),A=y.type;let R=!1,x=!0;if(le(A))for(let k=0;k<A.length;++k){const L=A[k],M=Ie(L)&&L.name;if(M==="Boolean"){R=!0;break}else M==="String"&&(x=!1)}else R=Ie(A)&&A.name==="Boolean";y[0]=R,y[1]=x,(R||Oe(y,"default"))&&a.push(p)}}const u=[o,a];return qe(n)&&r.set(n,u),u}function _m(n){return n[0]!=="$"&&!Fo(n)}const Jd=n=>n[0]==="_"||n==="$stable",Zd=n=>le(n)?n.map(Pn):[Pn(n)],Xb=(n,e,t)=>{if(e._n)return e;const r=Ly((...i)=>Zd(e(...i)),t);return r._c=!1,r},Xy=(n,e,t)=>{const r=n._ctx;for(const i in n){if(Jd(i))continue;const s=n[i];if(Ie(s))e[i]=Xb(i,s,r);else if(s!=null){const o=Zd(s);e[i]=()=>o}}},Yy=(n,e)=>{const t=Zd(e);n.slots.default=()=>t},Jy=(n,e,t)=>{for(const r in e)(t||!Jd(r))&&(n[r]=e[r])},Yb=(n,e,t)=>{const r=n.slots=Gy();if(n.vnode.shapeFlag&32){const i=e.__;i&&Oh(r,"__",i,!0);const s=e._;s?(Jy(r,e,t),t&&Oh(r,"_",s,!0)):Xy(e,r)}else e&&Yy(n,e)},Jb=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=$e;if(r.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Jy(i,e,t):(s=!e.$stable,Xy(e,i)),o=e}else e&&(Yy(n,e),o={default:1});if(s)for(const a in i)!Jd(a)&&o[a]==null&&delete i[a]},Yt=d0;function Zb(n){return e0(n)}function e0(n,e){const t=nu();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:p,nextSibling:m,setScopeId:y=Vn,insertStaticContent:A}=n,R=(w,S,N,q=null,$=null,j=null,Z=void 0,Q=null,H=!!S.dynamicChildren)=>{if(w===S)return;w&&!To(w,S)&&(q=qn(w),ht(w,$,j,!0),w=null),S.patchFlag===-2&&(H=!1,S.dynamicChildren=null);const{type:z,ref:oe,shapeFlag:J}=S;switch(z){case au:x(w,S,N,q);break;case Kr:k(w,S,N,q);break;case Ul:w==null&&L(S,N,q,Z);break;case jt:P(w,S,N,q,$,j,Z,Q,H);break;default:J&1?ee(w,S,N,q,$,j,Z,Q,H):J&6?I(w,S,N,q,$,j,Z,Q,H):(J&64||J&128)&&z.process(w,S,N,q,$,j,Z,Q,H,wn)}oe!=null&&$?$o(oe,w&&w.ref,j,S||w,!S):oe==null&&w&&w.ref!=null&&$o(w.ref,null,j,w,!0)},x=(w,S,N,q)=>{if(w==null)r(S.el=a(S.children),N,q);else{const $=S.el=w.el;S.children!==w.children&&u($,S.children)}},k=(w,S,N,q)=>{w==null?r(S.el=c(S.children||""),N,q):S.el=w.el},L=(w,S,N,q)=>{[w.el,w.anchor]=A(w.children,S,N,q,w.el,w.anchor)},M=({el:w,anchor:S},N,q)=>{let $;for(;w&&w!==S;)$=m(w),r(w,N,q),w=$;r(S,N,q)},F=({el:w,anchor:S})=>{let N;for(;w&&w!==S;)N=m(w),i(w),w=N;i(S)},ee=(w,S,N,q,$,j,Z,Q,H)=>{S.type==="svg"?Z="svg":S.type==="math"&&(Z="mathml"),w==null?K(S,N,q,$,j,Z,Q,H):T(w,S,$,j,Z,Q,H)},K=(w,S,N,q,$,j,Z,Q)=>{let H,z;const{props:oe,shapeFlag:J,transition:se,dirs:fe}=w;if(H=w.el=o(w.type,j,oe&&oe.is,oe),J&8?h(H,w.children):J&16&&_(w.children,H,null,q,$,ih(w,j),Z,Q),fe&&li(w,null,q,"created"),v(H,w,w.scopeId,Z,q),oe){for(const ve in oe)ve!=="value"&&!Fo(ve)&&s(H,ve,null,oe[ve],j,q);"value"in oe&&s(H,"value",null,oe.value,j),(z=oe.onVnodeBeforeMount)&&bn(z,q,w)}fe&&li(w,null,q,"beforeMount");const ue=t0($,se);ue&&se.beforeEnter(H),r(H,S,N),((z=oe&&oe.onVnodeMounted)||ue||fe)&&Yt(()=>{z&&bn(z,q,w),ue&&se.enter(H),fe&&li(w,null,q,"mounted")},$)},v=(w,S,N,q,$)=>{if(N&&y(w,N),q)for(let j=0;j<q.length;j++)y(w,q[j]);if($){let j=$.subTree;if(S===j||iv(j.type)&&(j.ssContent===S||j.ssFallback===S)){const Z=$.vnode;v(w,Z,Z.scopeId,Z.slotScopeIds,$.parent)}}},_=(w,S,N,q,$,j,Z,Q,H=0)=>{for(let z=H;z<w.length;z++){const oe=w[z]=Q?Sr(w[z]):Pn(w[z]);R(null,oe,S,N,q,$,j,Z,Q)}},T=(w,S,N,q,$,j,Z)=>{const Q=S.el=w.el;let{patchFlag:H,dynamicChildren:z,dirs:oe}=S;H|=w.patchFlag&16;const J=w.props||$e,se=S.props||$e;let fe;if(N&&ci(N,!1),(fe=se.onVnodeBeforeUpdate)&&bn(fe,N,S,w),oe&&li(S,w,N,"beforeUpdate"),N&&ci(N,!0),(J.innerHTML&&se.innerHTML==null||J.textContent&&se.textContent==null)&&h(Q,""),z?E(w.dynamicChildren,z,Q,N,q,ih(S,$),j):Z||we(w,S,Q,null,N,q,ih(S,$),j,!1),H>0){if(H&16)b(Q,J,se,N,$);else if(H&2&&J.class!==se.class&&s(Q,"class",null,se.class,$),H&4&&s(Q,"style",J.style,se.style,$),H&8){const ue=S.dynamicProps;for(let ve=0;ve<ue.length;ve++){const Pe=ue[ve],yt=J[Pe],vt=se[Pe];(vt!==yt||Pe==="value")&&s(Q,Pe,yt,vt,$,N)}}H&1&&w.children!==S.children&&h(Q,S.children)}else!Z&&z==null&&b(Q,J,se,N,$);((fe=se.onVnodeUpdated)||oe)&&Yt(()=>{fe&&bn(fe,N,S,w),oe&&li(S,w,N,"updated")},q)},E=(w,S,N,q,$,j,Z)=>{for(let Q=0;Q<S.length;Q++){const H=w[Q],z=S[Q],oe=H.el&&(H.type===jt||!To(H,z)||H.shapeFlag&198)?p(H.el):N;R(H,z,oe,null,q,$,j,Z,!0)}},b=(w,S,N,q,$)=>{if(S!==N){if(S!==$e)for(const j in S)!Fo(j)&&!(j in N)&&s(w,j,S[j],null,$,q);for(const j in N){if(Fo(j))continue;const Z=N[j],Q=S[j];Z!==Q&&j!=="value"&&s(w,j,Q,Z,$,q)}"value"in N&&s(w,"value",S.value,N.value,$)}},P=(w,S,N,q,$,j,Z,Q,H)=>{const z=S.el=w?w.el:a(""),oe=S.anchor=w?w.anchor:a("");let{patchFlag:J,dynamicChildren:se,slotScopeIds:fe}=S;fe&&(Q=Q?Q.concat(fe):fe),w==null?(r(z,N,q),r(oe,N,q),_(S.children||[],N,oe,$,j,Z,Q,H)):J>0&&J&64&&se&&w.dynamicChildren?(E(w.dynamicChildren,se,N,$,j,Z,Q),(S.key!=null||$&&S===$.subTree)&&Zy(w,S,!0)):we(w,S,N,oe,$,j,Z,Q,H)},I=(w,S,N,q,$,j,Z,Q,H)=>{S.slotScopeIds=Q,w==null?S.shapeFlag&512?$.ctx.activate(S,N,q,Z,H):re(S,N,q,$,j,Z,H):he(w,S,H)},re=(w,S,N,q,$,j,Z)=>{const Q=w.component=I0(w,q,$);if(Uy(w)&&(Q.ctx.renderer=wn),E0(Q,!1,Z),Q.asyncDep){if($&&$.registerDep(Q,ye,Z),!w.el){const H=Q.subTree=Ot(Kr);k(null,H,S,N)}}else ye(Q,w,S,N,$,j,Z)},he=(w,S,N)=>{const q=S.component=w.component;if(u0(w,S,N))if(q.asyncDep&&!q.asyncResolved){ce(q,S,N);return}else q.next=S,q.update();else S.el=w.el,q.vnode=S},ye=(w,S,N,q,$,j,Z)=>{const Q=()=>{if(w.isMounted){let{next:J,bu:se,u:fe,parent:ue,vnode:ve}=w;{const At=ev(w);if(At){J&&(J.el=ve.el,ce(w,J,Z)),At.asyncDep.then(()=>{w.isUnmounted||Q()});return}}let Pe=J,yt;ci(w,!1),J?(J.el=ve.el,ce(w,J,Z)):J=ve,se&&Ll(se),(yt=J.props&&J.props.onVnodeBeforeUpdate)&&bn(yt,ue,J,ve),ci(w,!0);const vt=vm(w),an=w.subTree;w.subTree=vt,R(an,vt,p(an.el),qn(an),w,$,j),J.el=vt.el,Pe===null&&h0(w,vt.el),fe&&Yt(fe,$),(yt=J.props&&J.props.onVnodeUpdated)&&Yt(()=>bn(yt,ue,J,ve),$)}else{let J;const{el:se,props:fe}=S,{bm:ue,m:ve,parent:Pe,root:yt,type:vt}=w,an=jo(S);ci(w,!1),ue&&Ll(ue),!an&&(J=fe&&fe.onVnodeBeforeMount)&&bn(J,Pe,S),ci(w,!0);{yt.ce&&yt.ce._def.shadowRoot!==!1&&yt.ce._injectChildStyle(vt);const At=w.subTree=vm(w);R(null,At,N,q,w,$,j),S.el=At.el}if(ve&&Yt(ve,$),!an&&(J=fe&&fe.onVnodeMounted)){const At=S;Yt(()=>bn(J,Pe,At),$)}(S.shapeFlag&256||Pe&&jo(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&w.a&&Yt(w.a,$),w.isMounted=!0,S=N=q=null}};w.scope.on();const H=w.effect=new gy(Q);w.scope.off();const z=w.update=H.run.bind(H),oe=w.job=H.runIfDirty.bind(H);oe.i=w,oe.id=w.uid,H.scheduler=()=>Wd(oe),ci(w,!0),z()},ce=(w,S,N)=>{S.component=w;const q=w.vnode.props;w.vnode=S,w.next=null,Wb(w,S.props,q,N),Jb(w,S.children,N),ir(),dm(w),sr()},we=(w,S,N,q,$,j,Z,Q,H=!1)=>{const z=w&&w.children,oe=w?w.shapeFlag:0,J=S.children,{patchFlag:se,shapeFlag:fe}=S;if(se>0){if(se&128){fn(z,J,N,q,$,j,Z,Q,H);return}else if(se&256){gt(z,J,N,q,$,j,Z,Q,H);return}}fe&8?(oe&16&&ni(z,$,j),J!==z&&h(N,J)):oe&16?fe&16?fn(z,J,N,q,$,j,Z,Q,H):ni(z,$,j,!0):(oe&8&&h(N,""),fe&16&&_(J,N,q,$,j,Z,Q,H))},gt=(w,S,N,q,$,j,Z,Q,H)=>{w=w||ds,S=S||ds;const z=w.length,oe=S.length,J=Math.min(z,oe);let se;for(se=0;se<J;se++){const fe=S[se]=H?Sr(S[se]):Pn(S[se]);R(w[se],fe,N,null,$,j,Z,Q,H)}z>oe?ni(w,$,j,!0,!1,J):_(S,N,q,$,j,Z,Q,H,J)},fn=(w,S,N,q,$,j,Z,Q,H)=>{let z=0;const oe=S.length;let J=w.length-1,se=oe-1;for(;z<=J&&z<=se;){const fe=w[z],ue=S[z]=H?Sr(S[z]):Pn(S[z]);if(To(fe,ue))R(fe,ue,N,null,$,j,Z,Q,H);else break;z++}for(;z<=J&&z<=se;){const fe=w[J],ue=S[se]=H?Sr(S[se]):Pn(S[se]);if(To(fe,ue))R(fe,ue,N,null,$,j,Z,Q,H);else break;J--,se--}if(z>J){if(z<=se){const fe=se+1,ue=fe<oe?S[fe].el:q;for(;z<=se;)R(null,S[z]=H?Sr(S[z]):Pn(S[z]),N,ue,$,j,Z,Q,H),z++}}else if(z>se)for(;z<=J;)ht(w[z],$,j,!0),z++;else{const fe=z,ue=z,ve=new Map;for(z=ue;z<=se;z++){const It=S[z]=H?Sr(S[z]):Pn(S[z]);It.key!=null&&ve.set(It.key,z)}let Pe,yt=0;const vt=se-ue+1;let an=!1,At=0;const _r=new Array(vt);for(z=0;z<vt;z++)_r[z]=0;for(z=fe;z<=J;z++){const It=w[z];if(yt>=vt){ht(It,$,j,!0);continue}let ln;if(It.key!=null)ln=ve.get(It.key);else for(Pe=ue;Pe<=se;Pe++)if(_r[Pe-ue]===0&&To(It,S[Pe])){ln=Pe;break}ln===void 0?ht(It,$,j,!0):(_r[ln-ue]=z+1,ln>=At?At=ln:an=!0,R(It,S[ln],N,null,$,j,Z,Q,H),yt++)}const ao=an?n0(_r):ds;for(Pe=ao.length-1,z=vt-1;z>=0;z--){const It=ue+z,ln=S[It],rl=It+1<oe?S[It+1].el:q;_r[z]===0?R(null,ln,N,rl,$,j,Z,Q,H):an&&(Pe<0||z!==ao[Pe]?jn(ln,N,rl,2):Pe--)}}},jn=(w,S,N,q,$=null)=>{const{el:j,type:Z,transition:Q,children:H,shapeFlag:z}=w;if(z&6){jn(w.component.subTree,S,N,q);return}if(z&128){w.suspense.move(S,N,q);return}if(z&64){Z.move(w,S,N,wn);return}if(Z===jt){r(j,S,N);for(let J=0;J<H.length;J++)jn(H[J],S,N,q);r(w.anchor,S,N);return}if(Z===Ul){M(w,S,N);return}if(q!==2&&z&1&&Q)if(q===0)Q.beforeEnter(j),r(j,S,N),Yt(()=>Q.enter(j),$);else{const{leave:J,delayLeave:se,afterLeave:fe}=Q,ue=()=>{w.ctx.isUnmounted?i(j):r(j,S,N)},ve=()=>{J(j,()=>{ue(),fe&&fe()})};se?se(j,ue,ve):ve()}else r(j,S,N)},ht=(w,S,N,q=!1,$=!1)=>{const{type:j,props:Z,ref:Q,children:H,dynamicChildren:z,shapeFlag:oe,patchFlag:J,dirs:se,cacheIndex:fe}=w;if(J===-2&&($=!1),Q!=null&&(ir(),$o(Q,null,N,w,!0),sr()),fe!=null&&(S.renderCache[fe]=void 0),oe&256){S.ctx.deactivate(w);return}const ue=oe&1&&se,ve=!jo(w);let Pe;if(ve&&(Pe=Z&&Z.onVnodeBeforeUnmount)&&bn(Pe,S,w),oe&6)ti(w.component,N,q);else{if(oe&128){w.suspense.unmount(N,q);return}ue&&li(w,null,S,"beforeUnmount"),oe&64?w.type.remove(w,S,N,wn,q):z&&!z.hasOnce&&(j!==jt||J>0&&J&64)?ni(z,S,N,!1,!0):(j===jt&&J&384||!$&&oe&16)&&ni(H,S,N),q&&dt(w)}(ve&&(Pe=Z&&Z.onVnodeUnmounted)||ue)&&Yt(()=>{Pe&&bn(Pe,S,w),ue&&li(w,null,S,"unmounted")},N)},dt=w=>{const{type:S,el:N,anchor:q,transition:$}=w;if(S===jt){Mu(N,q);return}if(S===Ul){F(w);return}const j=()=>{i(N),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:Z,delayLeave:Q}=$,H=()=>Z(N,j);Q?Q(w.el,j,H):H()}else j()},Mu=(w,S)=>{let N;for(;w!==S;)N=m(w),i(w),w=N;i(S)},ti=(w,S,N)=>{const{bum:q,scope:$,job:j,subTree:Z,um:Q,m:H,a:z,parent:oe,slots:{__:J}}=w;ym(H),ym(z),q&&Ll(q),oe&&le(J)&&J.forEach(se=>{oe.renderCache[se]=void 0}),$.stop(),j&&(j.flags|=8,ht(Z,w,S,N)),Q&&Yt(Q,S),Yt(()=>{w.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},ni=(w,S,N,q=!1,$=!1,j=0)=>{for(let Z=j;Z<w.length;Z++)ht(w[Z],S,N,q,$)},qn=w=>{if(w.shapeFlag&6)return qn(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const S=m(w.anchor||w.el),N=S&&S[bb];return N?m(N):S};let so=!1;const nl=(w,S,N)=>{w==null?S._vnode&&ht(S._vnode,null,null,!0):R(S._vnode||null,w,S,null,null,null,N),S._vnode=w,so||(so=!0,dm(),Ny(),so=!1)},wn={p:R,um:ht,m:jn,r:dt,mt:re,mc:_,pc:we,pbc:E,n:qn,o:n};return{render:nl,hydrate:void 0,createApp:Kb(nl)}}function ih({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ci({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function t0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Zy(n,e,t=!1){const r=n.children,i=e.children;if(le(r)&&le(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Sr(i[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Zy(o,a)),a.type===au&&(a.el=o.el),a.type===Kr&&!a.el&&(a.el=o.el)}}function n0(n){const e=n.slice(),t=[0];let r,i,s,o,a;const c=n.length;for(r=0;r<c;r++){const u=n[r];if(u!==0){if(i=t[t.length-1],n[i]<u){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function ev(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ev(e)}function ym(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const r0=Symbol.for("v-scx"),i0=()=>Fl(r0);function _s(n,e,t){return tv(n,e,t)}function tv(n,e,t=$e){const{immediate:r,deep:i,flush:s,once:o}=t,a=Lt({},t),c=e&&r||!e&&s!=="post";let u;if(da){if(s==="sync"){const y=i0();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=Vn,y.resume=Vn,y.pause=Vn,y}}const h=kt;a.call=(y,A,R)=>Fn(y,h,A,R);let p=!1;s==="post"?a.scheduler=y=>{Yt(y,h&&h.suspense)}:s!=="sync"&&(p=!0,a.scheduler=(y,A)=>{A?y():Wd(y)}),a.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,h&&(y.id=h.uid,y.i=h))};const m=Ib(n,e,a);return da&&(u?u.push(m):c&&m()),m}function s0(n,e,t){const r=this.proxy,i=ct(n)?n.includes(".")?nv(r,n):()=>r[n]:n.bind(r,r);let s;Ie(e)?s=e:(s=e.handler,t=e);const o=Na(this),a=tv(i,s.bind(r),t);return o(),a}function nv(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}const o0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${qr(e)}Modifiers`]||n[`${Bi(e)}Modifiers`];function a0(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||$e;let i=t;const s=e.startsWith("update:"),o=s&&o0(r,e.slice(7));o&&(o.trim&&(i=t.map(h=>ct(h)?h.trim():h)),o.number&&(i=t.map(uc)));let a,c=r[a=Ju(e)]||r[a=Ju(qr(e))];!c&&s&&(c=r[a=Ju(Bi(e))]),c&&Fn(c,n,6,i);const u=r[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Fn(u,n,6,i)}}function rv(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},a=!1;if(!Ie(n)){const c=u=>{const h=rv(u,e,!0);h&&(a=!0,Lt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(qe(n)&&r.set(n,null),null):(le(s)?s.forEach(c=>o[c]=null):Lt(o,s),qe(n)&&r.set(n,o),o)}function ou(n,e){return!n||!eu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(n,e[0].toLowerCase()+e.slice(1))||Oe(n,Bi(e))||Oe(n,e))}function vm(n){const{type:e,vnode:t,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:p,data:m,setupState:y,ctx:A,inheritAttrs:R}=n,x=mc(n);let k,L;try{if(t.shapeFlag&4){const F=i||r,ee=F;k=Pn(u.call(ee,F,h,p,y,m,A)),L=a}else{const F=e;k=Pn(F.length>1?F(p,{attrs:a,slots:o,emit:c}):F(p,null)),L=e.props?a:l0(a)}}catch(F){zo.length=0,iu(F,n,1),k=Ot(Kr)}let M=k;if(L&&R!==!1){const F=Object.keys(L),{shapeFlag:ee}=M;F.length&&ee&7&&(s&&F.some(Md)&&(L=c0(L,s)),M=Ss(M,L,!1,!0))}return t.dirs&&(M=Ss(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&Qd(M,t.transition),k=M,mc(x),k}const l0=n=>{let e;for(const t in n)(t==="class"||t==="style"||eu(t))&&((e||(e={}))[t]=n[t]);return e},c0=(n,e)=>{const t={};for(const r in n)(!Md(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function u0(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Im(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const m=h[p];if(o[m]!==r[m]&&!ou(u,m))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Im(r,o,u):!0:!!o;return!1}function Im(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!ou(t,s))return!0}return!1}function h0({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const iv=n=>n.__isSuspense;function d0(n,e){e&&e.pendingBranch?le(n)?e.effects.push(...n):e.effects.push(n):wb(n)}const jt=Symbol.for("v-fgt"),au=Symbol.for("v-txt"),Kr=Symbol.for("v-cmt"),Ul=Symbol.for("v-stc"),zo=[];let nn=null;function Te(n=!1){zo.push(nn=n?null:[])}function f0(){zo.pop(),nn=zo[zo.length-1]||null}let ua=1;function Em(n,e=!1){ua+=n,n<0&&nn&&e&&(nn.hasOnce=!0)}function sv(n){return n.dynamicChildren=ua>0?nn||ds:null,f0(),ua>0&&nn&&nn.push(n),n}function Re(n,e,t,r,i,s){return sv(U(n,e,t,r,i,s,!0))}function Co(n,e,t,r,i){return sv(Ot(n,e,t,r,i,!0))}function yc(n){return n?n.__v_isVNode===!0:!1}function To(n,e){return n.type===e.type&&n.key===e.key}const ov=({key:n})=>n??null,Bl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ct(n)||lt(n)||Ie(n)?{i:tn,r:n,k:e,f:!!t}:n:null);function U(n,e=null,t=null,r=0,i=null,s=n===jt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ov(e),ref:e&&Bl(e),scopeId:My,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:tn};return a?(ef(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=ct(t)?8:16),ua>0&&!o&&nn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&nn.push(c),c}const Ot=p0;function p0(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===Lb)&&(n=Kr),yc(n)){const a=Ss(n,e,!0);return t&&ef(a,t),ua>0&&!s&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag=-2,a}if(A0(n)&&(n=n.__vccOpts),e){e=m0(e);let{class:a,style:c}=e;a&&!ct(a)&&(e.class=Da(a)),qe(c)&&(Hd(c)&&!le(c)&&(c=Lt({},c)),e.style=Ud(c))}const o=ct(n)?1:iv(n)?128:Ab(n)?64:qe(n)?4:Ie(n)?2:0;return U(n,e,t,r,i,o,s,!0)}function m0(n){return n?Hd(n)||Hy(n)?Lt({},n):n:null}function Ss(n,e,t=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:c}=n,u=e?_0(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&ov(u),ref:e&&e.ref?t&&s?le(s)?s.concat(Bl(e)):[s,Bl(e)]:Bl(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==jt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ss(n.ssContent),ssFallback:n.ssFallback&&Ss(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&Qd(h,c.clone(h)),h}function ha(n=" ",e=0){return Ot(au,null,n,e)}function g0(n,e){const t=Ot(Ul,null,n);return t.staticCount=e,t}function er(n="",e=!1){return e?(Te(),Co(Kr,null,n)):Ot(Kr,null,n)}function Pn(n){return n==null||typeof n=="boolean"?Ot(Kr):le(n)?Ot(jt,null,n.slice()):yc(n)?Sr(n):Ot(au,null,String(n))}function Sr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ss(n)}function ef(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(le(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),ef(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!Hy(e)?e._ctx=tn:i===3&&tn&&(tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:tn},t=32):(e=String(e),r&64?(t=16,e=[ha(e)]):t=8);n.children=e,n.shapeFlag|=t}function _0(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Da([e.class,r.class]));else if(i==="style")e.style=Ud([e.style,r.style]);else if(eu(i)){const s=e[i],o=r[i];o&&s!==o&&!(le(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function bn(n,e,t,r=null){Fn(n,e,7,[t,r])}const y0=zy();let v0=0;function I0(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||y0,s={uid:v0++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qy(r,i),emitsOptions:rv(r,i),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:r.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=a0.bind(null,s),n.ce&&n.ce(s),s}let kt=null;const tf=()=>kt||tn;let vc,qh;{const n=nu(),e=(t,r)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};vc=e("__VUE_INSTANCE_SETTERS__",t=>kt=t),qh=e("__VUE_SSR_SETTERS__",t=>da=t)}const Na=n=>{const e=kt;return vc(n),n.scope.on(),()=>{n.scope.off(),vc(e)}},Tm=()=>{kt&&kt.scope.off(),vc(null)};function av(n){return n.vnode.shapeFlag&4}let da=!1;function E0(n,e=!1,t=!1){e&&qh(e);const{props:r,children:i}=n.vnode,s=av(n);Hb(n,r,s,e),Yb(n,i,t||e);const o=s?T0(n,e):void 0;return e&&qh(!1),o}function T0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Fb);const{setup:r}=t;if(r){ir();const i=n.setupContext=r.length>1?b0(n):null,s=Na(n),o=ka(r,n,0,[n.props,i]),a=cy(o);if(sr(),s(),(a||n.sp)&&!jo(n)&&Fy(n),a){if(o.then(Tm,Tm),e)return o.then(c=>{wm(n,c)}).catch(c=>{iu(c,n,0)});n.asyncDep=o}else wm(n,o)}else lv(n)}function wm(n,e,t){Ie(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:qe(e)&&(n.setupState=xy(e)),lv(n)}function lv(n,e,t){const r=n.type;n.render||(n.render=r.render||Vn);{const i=Na(n);ir();try{Ub(n)}finally{sr(),i()}}}const w0={get(n,e){return Vt(n,"get",""),n[e]}};function b0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,w0),slots:n.slots,emit:n.emit,expose:e}}function lu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xy(ub(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qo)return qo[t](n)},has(e,t){return t in e||t in qo}})):n.proxy}function A0(n){return Ie(n)&&"__vccOpts"in n}const st=(n,e)=>yb(n,e,da);function S0(n,e,t){const r=arguments.length;return r===2?qe(e)&&!le(e)?yc(e)?Ot(n,null,[e]):Ot(n,e):Ot(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&yc(t)&&(t=[t]),Ot(n,e,t))}const R0="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zh;const bm=typeof window<"u"&&window.trustedTypes;if(bm)try{zh=bm.createPolicy("vue",{createHTML:n=>n})}catch{}const cv=zh?n=>zh.createHTML(n):n=>n,P0="http://www.w3.org/2000/svg",C0="http://www.w3.org/1998/Math/MathML",Hn=typeof document<"u"?document:null,Am=Hn&&Hn.createElement("template"),D0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e==="svg"?Hn.createElementNS(P0,n):e==="mathml"?Hn.createElementNS(C0,n):t?Hn.createElement(n,{is:t}):Hn.createElement(n);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>Hn.createTextNode(n),createComment:n=>Hn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Hn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Am.innerHTML=cv(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=Am.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},x0=Symbol("_vtc");function V0(n,e,t){const r=n[x0];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Sm=Symbol("_vod"),k0=Symbol("_vsh"),N0=Symbol(""),O0=/(^|;)\s*display\s*:/;function M0(n,e,t){const r=n.style,i=ct(t);let s=!1;if(t&&!i){if(e)if(ct(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&$l(r,a,"")}else for(const o in e)t[o]==null&&$l(r,o,"");for(const o in t)o==="display"&&(s=!0),$l(r,o,t[o])}else if(i){if(e!==t){const o=r[N0];o&&(t+=";"+o),r.cssText=t,s=O0.test(t)}}else e&&n.removeAttribute("style");Sm in n&&(n[Sm]=s?r.display:"",n[k0]&&(r.display="none"))}const Rm=/\s*!important$/;function $l(n,e,t){if(le(t))t.forEach(r=>$l(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=L0(n,e);Rm.test(t)?n.setProperty(Bi(r),t.replace(Rm,""),"important"):n[r]=t}}const Pm=["Webkit","Moz","ms"],sh={};function L0(n,e){const t=sh[e];if(t)return t;let r=qr(e);if(r!=="filter"&&r in n)return sh[e]=r;r=dy(r);for(let i=0;i<Pm.length;i++){const s=Pm[i]+r;if(s in n)return sh[e]=s}return e}const Cm="http://www.w3.org/1999/xlink";function Dm(n,e,t,r,i,s=Bw(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Cm,e.slice(6,e.length)):n.setAttributeNS(Cm,e,t):t==null||s&&!fy(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ln(t)?String(t):t)}function xm(n,e,t,r,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?cv(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=fy(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(i||e)}function Pr(n,e,t,r){n.addEventListener(e,t,r)}function F0(n,e,t,r){n.removeEventListener(e,t,r)}const Vm=Symbol("_vei");function U0(n,e,t,r,i=null){const s=n[Vm]||(n[Vm]={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=B0(e);if(r){const u=s[e]=q0(r,i);Pr(n,a,u,c)}else o&&(F0(n,a,o,c),s[e]=void 0)}}const km=/(?:Once|Passive|Capture)$/;function B0(n){let e;if(km.test(n)){e={};let r;for(;r=n.match(km);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Bi(n.slice(2)),e]}let oh=0;const $0=Promise.resolve(),j0=()=>oh||($0.then(()=>oh=0),oh=Date.now());function q0(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Fn(z0(r,t.value),e,5,[r])};return t.value=n,t.attached=j0(),t}function z0(n,e){if(le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Nm=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,K0=(n,e,t,r,i,s)=>{const o=i==="svg";e==="class"?V0(n,r,o):e==="style"?M0(n,t,r):eu(e)?Md(e)||U0(n,e,t,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):G0(n,e,r,o))?(xm(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Dm(n,e,r,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!ct(r))?xm(n,qr(e),r,s,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Dm(n,e,r,o))};function G0(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Nm(e)&&Ie(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Nm(e)&&ct(t)?!1:e in n}const Rs=n=>{const e=n.props["onUpdate:modelValue"]||!1;return le(e)?t=>Ll(e,t):e};function H0(n){n.target.composing=!0}function Om(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tr=Symbol("_assign"),Tl={created(n,{modifiers:{lazy:e,trim:t,number:r}},i){n[tr]=Rs(i);const s=r||i.props&&i.props.type==="number";Pr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=uc(a)),n[tr](a)}),t&&Pr(n,"change",()=>{n.value=n.value.trim()}),e||(Pr(n,"compositionstart",H0),Pr(n,"compositionend",Om),Pr(n,"change",Om))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:i,number:s}},o){if(n[tr]=Rs(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?uc(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||i&&n.value.trim()===c)||(n.value=c))}},W0={deep:!0,created(n,e,t){n[tr]=Rs(t),Pr(n,"change",()=>{const r=n._modelValue,i=fa(n),s=n.checked,o=n[tr];if(le(r)){const a=Bd(r,i),c=a!==-1;if(s&&!c)o(r.concat(i));else if(!s&&c){const u=[...r];u.splice(a,1),o(u)}}else if(Qs(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(uv(n,s))})},mounted:Mm,beforeUpdate(n,e,t){n[tr]=Rs(t),Mm(n,e,t)}};function Mm(n,{value:e,oldValue:t},r){n._modelValue=e;let i;if(le(e))i=Bd(e,r.props.value)>-1;else if(Qs(e))i=e.has(r.props.value);else{if(e===t)return;i=xa(e,uv(n,!0))}n.checked!==i&&(n.checked=i)}const Lm={deep:!0,created(n,{value:e,modifiers:{number:t}},r){const i=Qs(e);Pr(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?uc(fa(o)):fa(o));n[tr](n.multiple?i?new Set(s):s:s[0]),n._assigning=!0,As(()=>{n._assigning=!1})}),n[tr]=Rs(r)},mounted(n,{value:e}){Fm(n,e)},beforeUpdate(n,e,t){n[tr]=Rs(t)},updated(n,{value:e}){n._assigning||Fm(n,e)}};function Fm(n,e){const t=n.multiple,r=le(e);if(!(t&&!r&&!Qs(e))){for(let i=0,s=n.options.length;i<s;i++){const o=n.options[i],a=fa(o);if(t)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Bd(e,a)>-1}else o.selected=e.has(a);else if(xa(fa(o),e)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function fa(n){return"_value"in n?n._value:n.value}function uv(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Q0=["ctrl","shift","alt","meta"],X0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Q0.some(t=>n[`${t}Key`]&&!e.includes(t))},Y0=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=X0[e[o]];if(a&&a(i,e))return}return n(i,...s)})},J0=Lt({patchProp:K0},D0);let Um;function Z0(){return Um||(Um=Zb(J0))}const eA=(...n)=>{const e=Z0().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=nA(r);if(!i)return;const s=e._component;!Ie(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=t(i,!1,tA(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function tA(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function nA(n){return ct(n)?document.querySelector(n):n}var rA=Object.defineProperty,Ic=Object.getOwnPropertySymbols,hv=Object.prototype.hasOwnProperty,dv=Object.prototype.propertyIsEnumerable,Bm=(n,e,t)=>e in n?rA(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,cs=(n,e)=>{for(var t in e||(e={}))hv.call(e,t)&&Bm(n,t,e[t]);if(Ic)for(var t of Ic(e))dv.call(e,t)&&Bm(n,t,e[t]);return n},fv=(n,e)=>{var t={};for(var r in n)hv.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&Ic)for(var r of Ic(n))e.indexOf(r)<0&&dv.call(n,r)&&(t[r]=n[r]);return t};const pv="[vue-draggable-plus]: ";function iA(n){console.warn(pv+n)}function sA(n){console.error(pv+n)}function $m(n,e,t){return t>=0&&t<n.length&&n.splice(t,0,n.splice(e,1)[0]),n}function oA(n){return n.replace(/-(\w)/g,(e,t)=>t?t.toUpperCase():"")}function aA(n){return Object.keys(n).reduce((e,t)=>(typeof n[t]<"u"&&(e[oA(t)]=n[t]),e),{})}function jm(n,e){return Array.isArray(n)&&n.splice(e,1),n}function qm(n,e,t){return Array.isArray(n)&&n.splice(e,0,t),n}function lA(n){return typeof n>"u"}function cA(n){return typeof n=="string"}function zm(n,e,t){const r=n.children[t];n.insertBefore(e,r)}function ah(n){n.parentNode&&n.parentNode.removeChild(n)}function uA(n,e=document){var t;let r=null;return typeof e?.querySelector=="function"?r=(t=e?.querySelector)==null?void 0:t.call(e,n):r=document.querySelector(n),r||iA(`Element not found: ${n}`),r}function hA(n,e,t=null){return function(...r){return n.apply(t,r),e.apply(t,r)}}function dA(n,e){const t=cs({},n);return Object.keys(e).forEach(r=>{t[r]?t[r]=hA(n[r],e[r]):t[r]=e[r]}),t}function fA(n){return n instanceof HTMLElement}function Km(n,e){Object.keys(n).forEach(t=>{e(t,n[t])})}function pA(n){return n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97)}const mA=Object.assign;/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Gm(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Un(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Gm(Object(t),!0).forEach(function(r){gA(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Gm(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function jl(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?jl=function(e){return typeof e}:jl=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jl(n)}function gA(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function or(){return or=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},or.apply(this,arguments)}function _A(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function yA(n,e){if(n==null)return{};var t=_A(n,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var vA="1.15.2";function nr(n){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(n)}var fr=nr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Oa=nr(/Edge/i),Hm=nr(/firefox/i),Ko=nr(/safari/i)&&!nr(/chrome/i)&&!nr(/android/i),mv=nr(/iP(ad|od|hone)/i),gv=nr(/chrome/i)&&nr(/android/i),_v={capture:!1,passive:!1};function Ve(n,e,t){n.addEventListener(e,t,!fr&&_v)}function De(n,e,t){n.removeEventListener(e,t,!fr&&_v)}function Ec(n,e){if(e){if(e[0]===">"&&(e=e.substring(1)),n)try{if(n.matches)return n.matches(e);if(n.msMatchesSelector)return n.msMatchesSelector(e);if(n.webkitMatchesSelector)return n.webkitMatchesSelector(e)}catch{return!1}return!1}}function IA(n){return n.host&&n!==document&&n.host.nodeType?n.host:n.parentNode}function gn(n,e,t,r){if(n){t=t||document;do{if(e!=null&&(e[0]===">"?n.parentNode===t&&Ec(n,e):Ec(n,e))||r&&n===t)return n;if(n===t)break}while(n=IA(n))}return null}var Wm=/\s+/g;function Xt(n,e,t){if(n&&e)if(n.classList)n.classList[t?"add":"remove"](e);else{var r=(" "+n.className+" ").replace(Wm," ").replace(" "+e+" "," ");n.className=(r+(t?" "+e:"")).replace(Wm," ")}}function pe(n,e,t){var r=n&&n.style;if(r){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(n,""):n.currentStyle&&(t=n.currentStyle),e===void 0?t:t[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=t+(typeof t=="string"?"":"px")}}function ys(n,e){var t="";if(typeof n=="string")t=n;else do{var r=pe(n,"transform");r&&r!=="none"&&(t=r+" "+t)}while(!e&&(n=n.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(t)}function yv(n,e,t){if(n){var r=n.getElementsByTagName(e),i=0,s=r.length;if(t)for(;i<s;i++)t(r[i],i);return r}return[]}function kn(){var n=document.scrollingElement;return n||document.documentElement}function ot(n,e,t,r,i){if(!(!n.getBoundingClientRect&&n!==window)){var s,o,a,c,u,h,p;if(n!==window&&n.parentNode&&n!==kn()?(s=n.getBoundingClientRect(),o=s.top,a=s.left,c=s.bottom,u=s.right,h=s.height,p=s.width):(o=0,a=0,c=window.innerHeight,u=window.innerWidth,h=window.innerHeight,p=window.innerWidth),(e||t)&&n!==window&&(i=i||n.parentNode,!fr))do if(i&&i.getBoundingClientRect&&(pe(i,"transform")!=="none"||t&&pe(i,"position")!=="static")){var m=i.getBoundingClientRect();o-=m.top+parseInt(pe(i,"border-top-width")),a-=m.left+parseInt(pe(i,"border-left-width")),c=o+s.height,u=a+s.width;break}while(i=i.parentNode);if(r&&n!==window){var y=ys(i||n),A=y&&y.a,R=y&&y.d;y&&(o/=R,a/=A,p/=A,h/=R,c=o+h,u=a+p)}return{top:o,left:a,bottom:c,right:u,width:p,height:h}}}function Qm(n,e,t){for(var r=Nr(n,!0),i=ot(n)[e];r;){var s=ot(r)[t],o=void 0;if(o=i>=s,!o)return r;if(r===kn())break;r=Nr(r,!1)}return!1}function Ps(n,e,t,r){for(var i=0,s=0,o=n.children;s<o.length;){if(o[s].style.display!=="none"&&o[s]!==me.ghost&&(r||o[s]!==me.dragged)&&gn(o[s],t.draggable,n,!1)){if(i===e)return o[s];i++}s++}return null}function nf(n,e){for(var t=n.lastElementChild;t&&(t===me.ghost||pe(t,"display")==="none"||e&&!Ec(t,e));)t=t.previousElementSibling;return t||null}function cn(n,e){var t=0;if(!n||!n.parentNode)return-1;for(;n=n.previousElementSibling;)n.nodeName.toUpperCase()!=="TEMPLATE"&&n!==me.clone&&(!e||Ec(n,e))&&t++;return t}function Xm(n){var e=0,t=0,r=kn();if(n)do{var i=ys(n),s=i.a,o=i.d;e+=n.scrollLeft*s,t+=n.scrollTop*o}while(n!==r&&(n=n.parentNode));return[e,t]}function EA(n,e){for(var t in n)if(n.hasOwnProperty(t)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===n[t][r])return Number(t)}return-1}function Nr(n,e){if(!n||!n.getBoundingClientRect)return kn();var t=n,r=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var i=pe(t);if(t.clientWidth<t.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return kn();if(r||e)return t;r=!0}}while(t=t.parentNode);return kn()}function TA(n,e){if(n&&e)for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function lh(n,e){return Math.round(n.top)===Math.round(e.top)&&Math.round(n.left)===Math.round(e.left)&&Math.round(n.height)===Math.round(e.height)&&Math.round(n.width)===Math.round(e.width)}var Go;function vv(n,e){return function(){if(!Go){var t=arguments,r=this;t.length===1?n.call(r,t[0]):n.apply(r,t),Go=setTimeout(function(){Go=void 0},e)}}}function wA(){clearTimeout(Go),Go=void 0}function Iv(n,e,t){n.scrollLeft+=e,n.scrollTop+=t}function Ev(n){var e=window.Polymer,t=window.jQuery||window.Zepto;return e&&e.dom?e.dom(n).cloneNode(!0):t?t(n).clone(!0)[0]:n.cloneNode(!0)}function Tv(n,e,t){var r={};return Array.from(n.children).forEach(function(i){var s,o,a,c;if(!(!gn(i,e.draggable,n,!1)||i.animated||i===t)){var u=ot(i);r.left=Math.min((s=r.left)!==null&&s!==void 0?s:1/0,u.left),r.top=Math.min((o=r.top)!==null&&o!==void 0?o:1/0,u.top),r.right=Math.max((a=r.right)!==null&&a!==void 0?a:-1/0,u.right),r.bottom=Math.max((c=r.bottom)!==null&&c!==void 0?c:-1/0,u.bottom)}}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}var en="Sortable"+new Date().getTime();function bA(){var n=[],e;return{captureAnimationState:function(){if(n=[],!!this.options.animation){var t=[].slice.call(this.el.children);t.forEach(function(r){if(!(pe(r,"display")==="none"||r===me.ghost)){n.push({target:r,rect:ot(r)});var i=Un({},n[n.length-1].rect);if(r.thisAnimationDuration){var s=ys(r,!0);s&&(i.top-=s.f,i.left-=s.e)}r.fromRect=i}})}},addAnimationState:function(t){n.push(t)},removeAnimationState:function(t){n.splice(EA(n,{target:t}),1)},animateAll:function(t){var r=this;if(!this.options.animation){clearTimeout(e),typeof t=="function"&&t();return}var i=!1,s=0;n.forEach(function(o){var a=0,c=o.target,u=c.fromRect,h=ot(c),p=c.prevFromRect,m=c.prevToRect,y=o.rect,A=ys(c,!0);A&&(h.top-=A.f,h.left-=A.e),c.toRect=h,c.thisAnimationDuration&&lh(p,h)&&!lh(u,h)&&(y.top-h.top)/(y.left-h.left)===(u.top-h.top)/(u.left-h.left)&&(a=SA(y,p,m,r.options)),lh(h,u)||(c.prevFromRect=u,c.prevToRect=h,a||(a=r.options.animation),r.animate(c,y,h,a)),a&&(i=!0,s=Math.max(s,a),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},a),c.thisAnimationDuration=a)}),clearTimeout(e),i?e=setTimeout(function(){typeof t=="function"&&t()},s):typeof t=="function"&&t(),n=[]},animate:function(t,r,i,s){if(s){pe(t,"transition",""),pe(t,"transform","");var o=ys(this.el),a=o&&o.a,c=o&&o.d,u=(r.left-i.left)/(a||1),h=(r.top-i.top)/(c||1);t.animatingX=!!u,t.animatingY=!!h,pe(t,"transform","translate3d("+u+"px,"+h+"px,0)"),this.forRepaintDummy=AA(t),pe(t,"transition","transform "+s+"ms"+(this.options.easing?" "+this.options.easing:"")),pe(t,"transform","translate3d(0,0,0)"),typeof t.animated=="number"&&clearTimeout(t.animated),t.animated=setTimeout(function(){pe(t,"transition",""),pe(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},s)}}}}function AA(n){return n.offsetWidth}function SA(n,e,t,r){return Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))/Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))*r.animation}var Wi=[],ch={initializeByDefault:!0},Ma={mount:function(n){for(var e in ch)ch.hasOwnProperty(e)&&!(e in n)&&(n[e]=ch[e]);Wi.forEach(function(t){if(t.pluginName===n.pluginName)throw"Sortable: Cannot mount plugin ".concat(n.pluginName," more than once")}),Wi.push(n)},pluginEvent:function(n,e,t){var r=this;this.eventCanceled=!1,t.cancel=function(){r.eventCanceled=!0};var i=n+"Global";Wi.forEach(function(s){e[s.pluginName]&&(e[s.pluginName][i]&&e[s.pluginName][i](Un({sortable:e},t)),e.options[s.pluginName]&&e[s.pluginName][n]&&e[s.pluginName][n](Un({sortable:e},t)))})},initializePlugins:function(n,e,t,r){Wi.forEach(function(o){var a=o.pluginName;if(!(!n.options[a]&&!o.initializeByDefault)){var c=new o(n,e,n.options);c.sortable=n,c.options=n.options,n[a]=c,or(t,c.defaults)}});for(var i in n.options)if(n.options.hasOwnProperty(i)){var s=this.modifyOption(n,i,n.options[i]);typeof s<"u"&&(n.options[i]=s)}},getEventProperties:function(n,e){var t={};return Wi.forEach(function(r){typeof r.eventProperties=="function"&&or(t,r.eventProperties.call(e[r.pluginName],n))}),t},modifyOption:function(n,e,t){var r;return Wi.forEach(function(i){n[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[e]=="function"&&(r=i.optionListeners[e].call(n[i.pluginName],t))}),r}};function RA(n){var e=n.sortable,t=n.rootEl,r=n.name,i=n.targetEl,s=n.cloneEl,o=n.toEl,a=n.fromEl,c=n.oldIndex,u=n.newIndex,h=n.oldDraggableIndex,p=n.newDraggableIndex,m=n.originalEvent,y=n.putSortable,A=n.extraEventProperties;if(e=e||t&&t[en],!!e){var R,x=e.options,k="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!fr&&!Oa?R=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(R=document.createEvent("Event"),R.initEvent(r,!0,!0)),R.to=o||t,R.from=a||t,R.item=i||t,R.clone=s,R.oldIndex=c,R.newIndex=u,R.oldDraggableIndex=h,R.newDraggableIndex=p,R.originalEvent=m,R.pullMode=y?y.lastPutMode:void 0;var L=Un(Un({},A),Ma.getEventProperties(r,e));for(var M in L)R[M]=L[M];t&&t.dispatchEvent(R),x[k]&&x[k].call(e,R)}}var PA=["evt"],zt=function(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.evt,i=yA(t,PA);Ma.pluginEvent.bind(me)(n,e,Un({dragEl:W,parentEl:Je,ghostEl:_e,rootEl:He,nextEl:pi,lastDownEl:ql,cloneEl:Qe,cloneHidden:Cr,dragStarted:Do,putSortable:Tt,activeSortable:me.active,originalEvent:r,oldIndex:us,oldDraggableIndex:Ho,newIndex:Jt,newDraggableIndex:Rr,hideGhostForTarget:Sv,unhideGhostForTarget:Rv,cloneNowHidden:function(){Cr=!0},cloneNowShown:function(){Cr=!1},dispatchSortableEvent:function(s){Bt({sortable:e,name:s,originalEvent:r})}},i))};function Bt(n){RA(Un({putSortable:Tt,cloneEl:Qe,targetEl:W,rootEl:He,oldIndex:us,oldDraggableIndex:Ho,newIndex:Jt,newDraggableIndex:Rr},n))}var W,Je,_e,He,pi,ql,Qe,Cr,us,Jt,Ho,Rr,wl,Tt,rs=!1,Tc=!1,wc=[],ui,mn,uh,hh,Ym,Jm,Do,Qi,Wo,Qo=!1,bl=!1,zl,Pt,dh=[],Kh=!1,bc=[],cu=typeof document<"u",Al=mv,Zm=Oa||fr?"cssFloat":"float",CA=cu&&!gv&&!mv&&"draggable"in document.createElement("div"),wv=function(){if(cu){if(fr)return!1;var n=document.createElement("x");return n.style.cssText="pointer-events:auto",n.style.pointerEvents==="auto"}}(),bv=function(n,e){var t=pe(n),r=parseInt(t.width)-parseInt(t.paddingLeft)-parseInt(t.paddingRight)-parseInt(t.borderLeftWidth)-parseInt(t.borderRightWidth),i=Ps(n,0,e),s=Ps(n,1,e),o=i&&pe(i),a=s&&pe(s),c=o&&parseInt(o.marginLeft)+parseInt(o.marginRight)+ot(i).width,u=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+ot(s).width;if(t.display==="flex")return t.flexDirection==="column"||t.flexDirection==="column-reverse"?"vertical":"horizontal";if(t.display==="grid")return t.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&o.float&&o.float!=="none"){var h=o.float==="left"?"left":"right";return s&&(a.clear==="both"||a.clear===h)?"vertical":"horizontal"}return i&&(o.display==="block"||o.display==="flex"||o.display==="table"||o.display==="grid"||c>=r&&t[Zm]==="none"||s&&t[Zm]==="none"&&c+u>r)?"vertical":"horizontal"},DA=function(n,e,t){var r=t?n.left:n.top,i=t?n.right:n.bottom,s=t?n.width:n.height,o=t?e.left:e.top,a=t?e.right:e.bottom,c=t?e.width:e.height;return r===o||i===a||r+s/2===o+c/2},xA=function(n,e){var t;return wc.some(function(r){var i=r[en].options.emptyInsertThreshold;if(!(!i||nf(r))){var s=ot(r),o=n>=s.left-i&&n<=s.right+i,a=e>=s.top-i&&e<=s.bottom+i;if(o&&a)return t=r}}),t},Av=function(n){function e(i,s){return function(o,a,c,u){var h=o.options.group.name&&a.options.group.name&&o.options.group.name===a.options.group.name;if(i==null&&(s||h))return!0;if(i==null||i===!1)return!1;if(s&&i==="clone")return i;if(typeof i=="function")return e(i(o,a,c,u),s)(o,a,c,u);var p=(s?o:a).options.group.name;return i===!0||typeof i=="string"&&i===p||i.join&&i.indexOf(p)>-1}}var t={},r=n.group;(!r||jl(r)!="object")&&(r={name:r}),t.name=r.name,t.checkPull=e(r.pull,!0),t.checkPut=e(r.put),t.revertClone=r.revertClone,n.group=t},Sv=function(){!wv&&_e&&pe(_e,"display","none")},Rv=function(){!wv&&_e&&pe(_e,"display","")};cu&&!gv&&document.addEventListener("click",function(n){if(Tc)return n.preventDefault(),n.stopPropagation&&n.stopPropagation(),n.stopImmediatePropagation&&n.stopImmediatePropagation(),Tc=!1,!1},!0);var hi=function(n){if(W){n=n.touches?n.touches[0]:n;var e=xA(n.clientX,n.clientY);if(e){var t={};for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.target=t.rootEl=e,t.preventDefault=void 0,t.stopPropagation=void 0,e[en]._onDragOver(t)}}},VA=function(n){W&&W.parentNode[en]._isOutsideThisEl(n.target)};function me(n,e){if(!(n&&n.nodeType&&n.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));this.el=n,this.options=e=or({},e),n[en]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(n.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return bv(n,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(s,o){s.setData("Text",o.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:me.supportPointer!==!1&&"PointerEvent"in window&&!Ko,emptyInsertThreshold:5};Ma.initializePlugins(this,n,t);for(var r in t)!(r in e)&&(e[r]=t[r]);Av(e);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=e.forceFallback?!1:CA,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Ve(n,"pointerdown",this._onTapStart):(Ve(n,"mousedown",this._onTapStart),Ve(n,"touchstart",this._onTapStart)),this.nativeDraggable&&(Ve(n,"dragover",this),Ve(n,"dragenter",this)),wc.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),or(this,bA())}me.prototype={constructor:me,_isOutsideThisEl:function(n){!this.el.contains(n)&&n!==this.el&&(Qi=null)},_getDirection:function(n,e){return typeof this.options.direction=="function"?this.options.direction.call(this,n,e,W):this.options.direction},_onTapStart:function(n){if(n.cancelable){var e=this,t=this.el,r=this.options,i=r.preventOnFilter,s=n.type,o=n.touches&&n.touches[0]||n.pointerType&&n.pointerType==="touch"&&n,a=(o||n).target,c=n.target.shadowRoot&&(n.path&&n.path[0]||n.composedPath&&n.composedPath()[0])||a,u=r.filter;if(BA(t),!W&&!(/mousedown|pointerdown/.test(s)&&n.button!==0||r.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&Ko&&a&&a.tagName.toUpperCase()==="SELECT")&&(a=gn(a,r.draggable,t,!1),!(a&&a.animated)&&ql!==a)){if(us=cn(a),Ho=cn(a,r.draggable),typeof u=="function"){if(u.call(this,n,a,this)){Bt({sortable:e,rootEl:c,name:"filter",targetEl:a,toEl:t,fromEl:t}),zt("filter",e,{evt:n}),i&&n.cancelable&&n.preventDefault();return}}else if(u&&(u=u.split(",").some(function(h){if(h=gn(c,h.trim(),t,!1),h)return Bt({sortable:e,rootEl:h,name:"filter",targetEl:a,fromEl:t,toEl:t}),zt("filter",e,{evt:n}),!0}),u)){i&&n.cancelable&&n.preventDefault();return}r.handle&&!gn(c,r.handle,t,!1)||this._prepareDragStart(n,o,a)}}},_prepareDragStart:function(n,e,t){var r=this,i=r.el,s=r.options,o=i.ownerDocument,a;if(t&&!W&&t.parentNode===i){var c=ot(t);if(He=i,W=t,Je=W.parentNode,pi=W.nextSibling,ql=t,wl=s.group,me.dragged=W,ui={target:W,clientX:(e||n).clientX,clientY:(e||n).clientY},Ym=ui.clientX-c.left,Jm=ui.clientY-c.top,this._lastX=(e||n).clientX,this._lastY=(e||n).clientY,W.style["will-change"]="all",a=function(){if(zt("delayEnded",r,{evt:n}),me.eventCanceled){r._onDrop();return}r._disableDelayedDragEvents(),!Hm&&r.nativeDraggable&&(W.draggable=!0),r._triggerDragStart(n,e),Bt({sortable:r,name:"choose",originalEvent:n}),Xt(W,s.chosenClass,!0)},s.ignore.split(",").forEach(function(u){yv(W,u.trim(),fh)}),Ve(o,"dragover",hi),Ve(o,"mousemove",hi),Ve(o,"touchmove",hi),Ve(o,"mouseup",r._onDrop),Ve(o,"touchend",r._onDrop),Ve(o,"touchcancel",r._onDrop),Hm&&this.nativeDraggable&&(this.options.touchStartThreshold=4,W.draggable=!0),zt("delayStart",this,{evt:n}),s.delay&&(!s.delayOnTouchOnly||e)&&(!this.nativeDraggable||!(Oa||fr))){if(me.eventCanceled){this._onDrop();return}Ve(o,"mouseup",r._disableDelayedDrag),Ve(o,"touchend",r._disableDelayedDrag),Ve(o,"touchcancel",r._disableDelayedDrag),Ve(o,"mousemove",r._delayedDragTouchMoveHandler),Ve(o,"touchmove",r._delayedDragTouchMoveHandler),s.supportPointer&&Ve(o,"pointermove",r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(a,s.delay)}else a()}},_delayedDragTouchMoveHandler:function(n){var e=n.touches?n.touches[0]:n;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){W&&fh(W),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var n=this.el.ownerDocument;De(n,"mouseup",this._disableDelayedDrag),De(n,"touchend",this._disableDelayedDrag),De(n,"touchcancel",this._disableDelayedDrag),De(n,"mousemove",this._delayedDragTouchMoveHandler),De(n,"touchmove",this._delayedDragTouchMoveHandler),De(n,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(n,e){e=e||n.pointerType=="touch"&&n,!this.nativeDraggable||e?this.options.supportPointer?Ve(document,"pointermove",this._onTouchMove):e?Ve(document,"touchmove",this._onTouchMove):Ve(document,"mousemove",this._onTouchMove):(Ve(W,"dragend",this),Ve(He,"dragstart",this._onDragStart));try{document.selection?Kl(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(n,e){if(rs=!1,He&&W){zt("dragStarted",this,{evt:e}),this.nativeDraggable&&Ve(document,"dragover",VA);var t=this.options;!n&&Xt(W,t.dragClass,!1),Xt(W,t.ghostClass,!0),me.active=this,n&&this._appendGhost(),Bt({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(mn){this._lastX=mn.clientX,this._lastY=mn.clientY,Sv();for(var n=document.elementFromPoint(mn.clientX,mn.clientY),e=n;n&&n.shadowRoot&&(n=n.shadowRoot.elementFromPoint(mn.clientX,mn.clientY),n!==e);)e=n;if(W.parentNode[en]._isOutsideThisEl(n),e)do{if(e[en]){var t=void 0;if(t=e[en]._onDragOver({clientX:mn.clientX,clientY:mn.clientY,target:n,rootEl:e}),t&&!this.options.dragoverBubble)break}n=e}while(e=e.parentNode);Rv()}},_onTouchMove:function(n){if(ui){var e=this.options,t=e.fallbackTolerance,r=e.fallbackOffset,i=n.touches?n.touches[0]:n,s=_e&&ys(_e,!0),o=_e&&s&&s.a,a=_e&&s&&s.d,c=Al&&Pt&&Xm(Pt),u=(i.clientX-ui.clientX+r.x)/(o||1)+(c?c[0]-dh[0]:0)/(o||1),h=(i.clientY-ui.clientY+r.y)/(a||1)+(c?c[1]-dh[1]:0)/(a||1);if(!me.active&&!rs){if(t&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<t)return;this._onDragStart(n,!0)}if(_e){s?(s.e+=u-(uh||0),s.f+=h-(hh||0)):s={a:1,b:0,c:0,d:1,e:u,f:h};var p="matrix(".concat(s.a,",").concat(s.b,",").concat(s.c,",").concat(s.d,",").concat(s.e,",").concat(s.f,")");pe(_e,"webkitTransform",p),pe(_e,"mozTransform",p),pe(_e,"msTransform",p),pe(_e,"transform",p),uh=u,hh=h,mn=i}n.cancelable&&n.preventDefault()}},_appendGhost:function(){if(!_e){var n=this.options.fallbackOnBody?document.body:He,e=ot(W,!0,Al,!0,n),t=this.options;if(Al){for(Pt=n;pe(Pt,"position")==="static"&&pe(Pt,"transform")==="none"&&Pt!==document;)Pt=Pt.parentNode;Pt!==document.body&&Pt!==document.documentElement?(Pt===document&&(Pt=kn()),e.top+=Pt.scrollTop,e.left+=Pt.scrollLeft):Pt=kn(),dh=Xm(Pt)}_e=W.cloneNode(!0),Xt(_e,t.ghostClass,!1),Xt(_e,t.fallbackClass,!0),Xt(_e,t.dragClass,!0),pe(_e,"transition",""),pe(_e,"transform",""),pe(_e,"box-sizing","border-box"),pe(_e,"margin",0),pe(_e,"top",e.top),pe(_e,"left",e.left),pe(_e,"width",e.width),pe(_e,"height",e.height),pe(_e,"opacity","0.8"),pe(_e,"position",Al?"absolute":"fixed"),pe(_e,"zIndex","100000"),pe(_e,"pointerEvents","none"),me.ghost=_e,n.appendChild(_e),pe(_e,"transform-origin",Ym/parseInt(_e.style.width)*100+"% "+Jm/parseInt(_e.style.height)*100+"%")}},_onDragStart:function(n,e){var t=this,r=n.dataTransfer,i=t.options;if(zt("dragStart",this,{evt:n}),me.eventCanceled){this._onDrop();return}zt("setupClone",this),me.eventCanceled||(Qe=Ev(W),Qe.removeAttribute("id"),Qe.draggable=!1,Qe.style["will-change"]="",this._hideClone(),Xt(Qe,this.options.chosenClass,!1),me.clone=Qe),t.cloneId=Kl(function(){zt("clone",t),!me.eventCanceled&&(t.options.removeCloneOnHide||He.insertBefore(Qe,W),t._hideClone(),Bt({sortable:t,name:"clone"}))}),!e&&Xt(W,i.dragClass,!0),e?(Tc=!0,t._loopId=setInterval(t._emulateDragOver,50)):(De(document,"mouseup",t._onDrop),De(document,"touchend",t._onDrop),De(document,"touchcancel",t._onDrop),r&&(r.effectAllowed="move",i.setData&&i.setData.call(t,r,W)),Ve(document,"drop",t),pe(W,"transform","translateZ(0)")),rs=!0,t._dragStartId=Kl(t._dragStarted.bind(t,e,n)),Ve(document,"selectstart",t),Do=!0,Ko&&pe(document.body,"user-select","none")},_onDragOver:function(n){var e=this.el,t=n.target,r,i,s,o=this.options,a=o.group,c=me.active,u=wl===a,h=o.sort,p=Tt||c,m,y=this,A=!1;if(Kh)return;function R(ce,we){zt(ce,y,Un({evt:n,isOwner:u,axis:m?"vertical":"horizontal",revert:s,dragRect:r,targetRect:i,canSort:h,fromSortable:p,target:t,completed:k,onMove:function(gt,fn){return Sl(He,e,W,r,gt,ot(gt),n,fn)},changed:L},we))}function x(){R("dragOverAnimationCapture"),y.captureAnimationState(),y!==p&&p.captureAnimationState()}function k(ce){return R("dragOverCompleted",{insertion:ce}),ce&&(u?c._hideClone():c._showClone(y),y!==p&&(Xt(W,Tt?Tt.options.ghostClass:c.options.ghostClass,!1),Xt(W,o.ghostClass,!0)),Tt!==y&&y!==me.active?Tt=y:y===me.active&&Tt&&(Tt=null),p===y&&(y._ignoreWhileAnimating=t),y.animateAll(function(){R("dragOverAnimationComplete"),y._ignoreWhileAnimating=null}),y!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(t===W&&!W.animated||t===e&&!t.animated)&&(Qi=null),!o.dragoverBubble&&!n.rootEl&&t!==document&&(W.parentNode[en]._isOutsideThisEl(n.target),!ce&&hi(n)),!o.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),A=!0}function L(){Jt=cn(W),Rr=cn(W,o.draggable),Bt({sortable:y,name:"change",toEl:e,newIndex:Jt,newDraggableIndex:Rr,originalEvent:n})}if(n.preventDefault!==void 0&&n.cancelable&&n.preventDefault(),t=gn(t,o.draggable,e,!0),R("dragOver"),me.eventCanceled)return A;if(W.contains(n.target)||t.animated&&t.animatingX&&t.animatingY||y._ignoreWhileAnimating===t)return k(!1);if(Tc=!1,c&&!o.disabled&&(u?h||(s=Je!==He):Tt===this||(this.lastPutMode=wl.checkPull(this,c,W,n))&&a.checkPut(this,c,W,n))){if(m=this._getDirection(n,t)==="vertical",r=ot(W),R("dragOverValid"),me.eventCanceled)return A;if(s)return Je=He,x(),this._hideClone(),R("revert"),me.eventCanceled||(pi?He.insertBefore(W,pi):He.appendChild(W)),k(!0);var M=nf(e,o.draggable);if(!M||MA(n,m,this)&&!M.animated){if(M===W)return k(!1);if(M&&e===n.target&&(t=M),t&&(i=ot(t)),Sl(He,e,W,r,t,i,n,!!t)!==!1)return x(),M&&M.nextSibling?e.insertBefore(W,M.nextSibling):e.appendChild(W),Je=e,L(),k(!0)}else if(M&&OA(n,m,this)){var F=Ps(e,0,o,!0);if(F===W)return k(!1);if(t=F,i=ot(t),Sl(He,e,W,r,t,i,n,!1)!==!1)return x(),e.insertBefore(W,F),Je=e,L(),k(!0)}else if(t.parentNode===e){i=ot(t);var ee=0,K,v=W.parentNode!==e,_=!DA(W.animated&&W.toRect||r,t.animated&&t.toRect||i,m),T=m?"top":"left",E=Qm(t,"top","top")||Qm(W,"top","top"),b=E?E.scrollTop:void 0;Qi!==t&&(K=i[T],Qo=!1,bl=!_&&o.invertSwap||v),ee=LA(n,t,i,m,_?1:o.swapThreshold,o.invertedSwapThreshold==null?o.swapThreshold:o.invertedSwapThreshold,bl,Qi===t);var P;if(ee!==0){var I=cn(W);do I-=ee,P=Je.children[I];while(P&&(pe(P,"display")==="none"||P===_e))}if(ee===0||P===t)return k(!1);Qi=t,Wo=ee;var re=t.nextElementSibling,he=!1;he=ee===1;var ye=Sl(He,e,W,r,t,i,n,he);if(ye!==!1)return(ye===1||ye===-1)&&(he=ye===1),Kh=!0,setTimeout(NA,30),x(),he&&!re?e.appendChild(W):t.parentNode.insertBefore(W,he?re:t),E&&Iv(E,0,b-E.scrollTop),Je=W.parentNode,K!==void 0&&!bl&&(zl=Math.abs(K-ot(t)[T])),L(),k(!0)}if(e.contains(W))return k(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){De(document,"mousemove",this._onTouchMove),De(document,"touchmove",this._onTouchMove),De(document,"pointermove",this._onTouchMove),De(document,"dragover",hi),De(document,"mousemove",hi),De(document,"touchmove",hi)},_offUpEvents:function(){var n=this.el.ownerDocument;De(n,"mouseup",this._onDrop),De(n,"touchend",this._onDrop),De(n,"pointerup",this._onDrop),De(n,"touchcancel",this._onDrop),De(document,"selectstart",this)},_onDrop:function(n){var e=this.el,t=this.options;if(Jt=cn(W),Rr=cn(W,t.draggable),zt("drop",this,{evt:n}),Je=W&&W.parentNode,Jt=cn(W),Rr=cn(W,t.draggable),me.eventCanceled){this._nulling();return}rs=!1,bl=!1,Qo=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Gh(this.cloneId),Gh(this._dragStartId),this.nativeDraggable&&(De(document,"drop",this),De(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ko&&pe(document.body,"user-select",""),pe(W,"transform",""),n&&(Do&&(n.cancelable&&n.preventDefault(),!t.dropBubble&&n.stopPropagation()),_e&&_e.parentNode&&_e.parentNode.removeChild(_e),(He===Je||Tt&&Tt.lastPutMode!=="clone")&&Qe&&Qe.parentNode&&Qe.parentNode.removeChild(Qe),W&&(this.nativeDraggable&&De(W,"dragend",this),fh(W),W.style["will-change"]="",Do&&!rs&&Xt(W,Tt?Tt.options.ghostClass:this.options.ghostClass,!1),Xt(W,this.options.chosenClass,!1),Bt({sortable:this,name:"unchoose",toEl:Je,newIndex:null,newDraggableIndex:null,originalEvent:n}),He!==Je?(Jt>=0&&(Bt({rootEl:Je,name:"add",toEl:Je,fromEl:He,originalEvent:n}),Bt({sortable:this,name:"remove",toEl:Je,originalEvent:n}),Bt({rootEl:Je,name:"sort",toEl:Je,fromEl:He,originalEvent:n}),Bt({sortable:this,name:"sort",toEl:Je,originalEvent:n})),Tt&&Tt.save()):Jt!==us&&Jt>=0&&(Bt({sortable:this,name:"update",toEl:Je,originalEvent:n}),Bt({sortable:this,name:"sort",toEl:Je,originalEvent:n})),me.active&&((Jt==null||Jt===-1)&&(Jt=us,Rr=Ho),Bt({sortable:this,name:"end",toEl:Je,originalEvent:n}),this.save()))),this._nulling()},_nulling:function(){zt("nulling",this),He=W=Je=_e=pi=Qe=ql=Cr=ui=mn=Do=Jt=Rr=us=Ho=Qi=Wo=Tt=wl=me.dragged=me.ghost=me.clone=me.active=null,bc.forEach(function(n){n.checked=!0}),bc.length=uh=hh=0},handleEvent:function(n){switch(n.type){case"drop":case"dragend":this._onDrop(n);break;case"dragenter":case"dragover":W&&(this._onDragOver(n),kA(n));break;case"selectstart":n.preventDefault();break}},toArray:function(){for(var n=[],e,t=this.el.children,r=0,i=t.length,s=this.options;r<i;r++)e=t[r],gn(e,s.draggable,this.el,!1)&&n.push(e.getAttribute(s.dataIdAttr)||UA(e));return n},sort:function(n,e){var t={},r=this.el;this.toArray().forEach(function(i,s){var o=r.children[s];gn(o,this.options.draggable,r,!1)&&(t[i]=o)},this),e&&this.captureAnimationState(),n.forEach(function(i){t[i]&&(r.removeChild(t[i]),r.appendChild(t[i]))}),e&&this.animateAll()},save:function(){var n=this.options.store;n&&n.set&&n.set(this)},closest:function(n,e){return gn(n,e||this.options.draggable,this.el,!1)},option:function(n,e){var t=this.options;if(e===void 0)return t[n];var r=Ma.modifyOption(this,n,e);typeof r<"u"?t[n]=r:t[n]=e,n==="group"&&Av(t)},destroy:function(){zt("destroy",this);var n=this.el;n[en]=null,De(n,"mousedown",this._onTapStart),De(n,"touchstart",this._onTapStart),De(n,"pointerdown",this._onTapStart),this.nativeDraggable&&(De(n,"dragover",this),De(n,"dragenter",this)),Array.prototype.forEach.call(n.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),wc.splice(wc.indexOf(this.el),1),this.el=n=null},_hideClone:function(){if(!Cr){if(zt("hideClone",this),me.eventCanceled)return;pe(Qe,"display","none"),this.options.removeCloneOnHide&&Qe.parentNode&&Qe.parentNode.removeChild(Qe),Cr=!0}},_showClone:function(n){if(n.lastPutMode!=="clone"){this._hideClone();return}if(Cr){if(zt("showClone",this),me.eventCanceled)return;W.parentNode==He&&!this.options.group.revertClone?He.insertBefore(Qe,W):pi?He.insertBefore(Qe,pi):He.appendChild(Qe),this.options.group.revertClone&&this.animate(W,Qe),pe(Qe,"display",""),Cr=!1}}};function kA(n){n.dataTransfer&&(n.dataTransfer.dropEffect="move"),n.cancelable&&n.preventDefault()}function Sl(n,e,t,r,i,s,o,a){var c,u=n[en],h=u.options.onMove,p;return window.CustomEvent&&!fr&&!Oa?c=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(c=document.createEvent("Event"),c.initEvent("move",!0,!0)),c.to=e,c.from=n,c.dragged=t,c.draggedRect=r,c.related=i||e,c.relatedRect=s||ot(e),c.willInsertAfter=a,c.originalEvent=o,n.dispatchEvent(c),h&&(p=h.call(u,c,o)),p}function fh(n){n.draggable=!1}function NA(){Kh=!1}function OA(n,e,t){var r=ot(Ps(t.el,0,t.options,!0)),i=Tv(t.el,t.options,_e),s=10;return e?n.clientX<i.left-s||n.clientY<r.top&&n.clientX<r.right:n.clientY<i.top-s||n.clientY<r.bottom&&n.clientX<r.left}function MA(n,e,t){var r=ot(nf(t.el,t.options.draggable)),i=Tv(t.el,t.options,_e),s=10;return e?n.clientX>i.right+s||n.clientY>r.bottom&&n.clientX>r.left:n.clientY>i.bottom+s||n.clientX>r.right&&n.clientY>r.top}function LA(n,e,t,r,i,s,o,a){var c=r?n.clientY:n.clientX,u=r?t.height:t.width,h=r?t.top:t.left,p=r?t.bottom:t.right,m=!1;if(!o){if(a&&zl<u*i){if(!Qo&&(Wo===1?c>h+u*s/2:c<p-u*s/2)&&(Qo=!0),Qo)m=!0;else if(Wo===1?c<h+zl:c>p-zl)return-Wo}else if(c>h+u*(1-i)/2&&c<p-u*(1-i)/2)return FA(e)}return m=m||o,m&&(c<h+u*s/2||c>p-u*s/2)?c>h+u/2?1:-1:0}function FA(n){return cn(W)<cn(n)?1:-1}function UA(n){for(var e=n.tagName+n.className+n.src+n.href+n.textContent,t=e.length,r=0;t--;)r+=e.charCodeAt(t);return r.toString(36)}function BA(n){bc.length=0;for(var e=n.getElementsByTagName("input"),t=e.length;t--;){var r=e[t];r.checked&&bc.push(r)}}function Kl(n){return setTimeout(n,0)}function Gh(n){return clearTimeout(n)}cu&&Ve(document,"touchmove",function(n){(me.active||rs)&&n.cancelable&&n.preventDefault()});me.utils={on:Ve,off:De,css:pe,find:yv,is:function(n,e){return!!gn(n,e,n,!1)},extend:TA,throttle:vv,closest:gn,toggleClass:Xt,clone:Ev,index:cn,nextTick:Kl,cancelNextTick:Gh,detectDirection:bv,getChild:Ps};me.get=function(n){return n[en]};me.mount=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(me.utils=Un(Un({},me.utils),r.utils)),Ma.mount(r)})};me.create=function(n,e){return new me(n,e)};me.version=vA;var rt=[],xo,Hh,Wh=!1,ph,mh,Ac,Vo;function $A(){function n(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return n.prototype={dragStarted:function(e){var t=e.originalEvent;this.sortable.nativeDraggable?Ve(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Ve(document,"pointermove",this._handleFallbackAutoScroll):t.touches?Ve(document,"touchmove",this._handleFallbackAutoScroll):Ve(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var t=e.originalEvent;!this.options.dragOverBubble&&!t.rootEl&&this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?De(document,"dragover",this._handleAutoScroll):(De(document,"pointermove",this._handleFallbackAutoScroll),De(document,"touchmove",this._handleFallbackAutoScroll),De(document,"mousemove",this._handleFallbackAutoScroll)),eg(),Gl(),wA()},nulling:function(){Ac=Hh=xo=Wh=Vo=ph=mh=null,rt.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,t){var r=this,i=(e.touches?e.touches[0]:e).clientX,s=(e.touches?e.touches[0]:e).clientY,o=document.elementFromPoint(i,s);if(Ac=e,t||this.options.forceAutoScrollFallback||Oa||fr||Ko){gh(e,this.options,o,t);var a=Nr(o,!0);Wh&&(!Vo||i!==ph||s!==mh)&&(Vo&&eg(),Vo=setInterval(function(){var c=Nr(document.elementFromPoint(i,s),!0);c!==a&&(a=c,Gl()),gh(e,r.options,c,t)},10),ph=i,mh=s)}else{if(!this.options.bubbleScroll||Nr(o,!0)===kn()){Gl();return}gh(e,this.options,Nr(o,!1),!1)}}},or(n,{pluginName:"scroll",initializeByDefault:!0})}function Gl(){rt.forEach(function(n){clearInterval(n.pid)}),rt=[]}function eg(){clearInterval(Vo)}var gh=vv(function(n,e,t,r){if(e.scroll){var i=(n.touches?n.touches[0]:n).clientX,s=(n.touches?n.touches[0]:n).clientY,o=e.scrollSensitivity,a=e.scrollSpeed,c=kn(),u=!1,h;Hh!==t&&(Hh=t,Gl(),xo=e.scroll,h=e.scrollFn,xo===!0&&(xo=Nr(t,!0)));var p=0,m=xo;do{var y=m,A=ot(y),R=A.top,x=A.bottom,k=A.left,L=A.right,M=A.width,F=A.height,ee=void 0,K=void 0,v=y.scrollWidth,_=y.scrollHeight,T=pe(y),E=y.scrollLeft,b=y.scrollTop;y===c?(ee=M<v&&(T.overflowX==="auto"||T.overflowX==="scroll"||T.overflowX==="visible"),K=F<_&&(T.overflowY==="auto"||T.overflowY==="scroll"||T.overflowY==="visible")):(ee=M<v&&(T.overflowX==="auto"||T.overflowX==="scroll"),K=F<_&&(T.overflowY==="auto"||T.overflowY==="scroll"));var P=ee&&(Math.abs(L-i)<=o&&E+M<v)-(Math.abs(k-i)<=o&&!!E),I=K&&(Math.abs(x-s)<=o&&b+F<_)-(Math.abs(R-s)<=o&&!!b);if(!rt[p])for(var re=0;re<=p;re++)rt[re]||(rt[re]={});(rt[p].vx!=P||rt[p].vy!=I||rt[p].el!==y)&&(rt[p].el=y,rt[p].vx=P,rt[p].vy=I,clearInterval(rt[p].pid),(P!=0||I!=0)&&(u=!0,rt[p].pid=setInterval((function(){r&&this.layer===0&&me.active._onTouchMove(Ac);var he=rt[this.layer].vy?rt[this.layer].vy*a:0,ye=rt[this.layer].vx?rt[this.layer].vx*a:0;typeof h=="function"&&h.call(me.dragged.parentNode[en],ye,he,n,Ac,rt[this.layer].el)!=="continue"||Iv(rt[this.layer].el,ye,he)}).bind({layer:p}),24))),p++}while(e.bubbleScroll&&m!==c&&(m=Nr(m,!1)));Wh=u}},30),Pv=function(n){var e=n.originalEvent,t=n.putSortable,r=n.dragEl,i=n.activeSortable,s=n.dispatchSortableEvent,o=n.hideGhostForTarget,a=n.unhideGhostForTarget;if(e){var c=t||i;o();var u=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,h=document.elementFromPoint(u.clientX,u.clientY);a(),c&&!c.el.contains(h)&&(s("spill"),this.onSpill({dragEl:r,putSortable:t}))}};function rf(){}rf.prototype={startIndex:null,dragStart:function(n){var e=n.oldDraggableIndex;this.startIndex=e},onSpill:function(n){var e=n.dragEl,t=n.putSortable;this.sortable.captureAnimationState(),t&&t.captureAnimationState();var r=Ps(this.sortable.el,this.startIndex,this.options);r?this.sortable.el.insertBefore(e,r):this.sortable.el.appendChild(e),this.sortable.animateAll(),t&&t.animateAll()},drop:Pv};or(rf,{pluginName:"revertOnSpill"});function sf(){}sf.prototype={onSpill:function(n){var e=n.dragEl,t=n.putSortable,r=t||this.sortable;r.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),r.animateAll()},drop:Pv};or(sf,{pluginName:"removeOnSpill"});me.mount(new $A);me.mount(sf,rf);function jA(n){return n==null?n:JSON.parse(JSON.stringify(n))}function qA(n){tf()&&Yd(n)}function zA(n){tf()?Xd(n):As(n)}let Cv=null,Dv=null;function tg(n=null,e=null){Cv=n,Dv=e}function KA(){return{data:Cv,clonedData:Dv}}const ng=Symbol("cloneElement");function GA(...n){var e,t;const r=(e=tf())==null?void 0:e.proxy;let i=null;const s=n[0];let[,o,a]=n;Array.isArray(Ee(o))||(a=o,o=null);let c=null;const{immediate:u=!0,clone:h=jA,forceFallback:p,fallbackOnBody:m,customUpdate:y}=(t=Ee(a))!=null?t:{};function A(E){var b;const{from:P,oldIndex:I,item:re}=E,he=Array.from(P.childNodes);i=p&&!m?he.slice(0,-1):he;const ye=Ee((b=Ee(o))==null?void 0:b[I]),ce=h(ye);tg(ye,ce),re[ng]=ce}function R(E){const b=E.item[ng];if(!lA(b)){if(ah(E.item),lt(o)){const P=[...Ee(o)];o.value=qm(P,E.newDraggableIndex,b);return}qm(Ee(o),E.newDraggableIndex,b)}}function x(E){const{from:b,item:P,oldIndex:I,oldDraggableIndex:re,pullMode:he,clone:ye}=E;if(zm(b,P,I),he==="clone"){ah(ye);return}if(lt(o)){const ce=[...Ee(o)];o.value=jm(ce,re);return}jm(Ee(o),re)}function k(E){if(y){y(E);return}const{from:b,item:P,oldIndex:I,oldDraggableIndex:re,newDraggableIndex:he}=E;if(ah(P),zm(b,P,I),lt(o)){const ye=[...Ee(o)];o.value=$m(ye,re,he);return}$m(Ee(o),re,he)}function L(E){const{newIndex:b,oldIndex:P,from:I,to:re}=E;let he=null;const ye=b===P&&I===re;try{if(ye){let ce=null;i?.some((we,gt)=>{if(ce&&i?.length!==re.childNodes.length)return I.insertBefore(ce,we.nextSibling),!0;const fn=re.childNodes[gt];ce=re?.replaceChild(we,fn)})}}catch(ce){he=ce}finally{i=null}As(()=>{if(tg(),he)throw he})}const M={onUpdate:k,onStart:A,onAdd:R,onRemove:x,onEnd:L};function F(E){const b=Ee(s);return E||(E=cA(b)?uA(b,r?.$el):b),E&&!fA(E)&&(E=E.$el),E||sA("Root element not found"),E}function ee(){var E;const b=(E=Ee(a))!=null?E:{},{immediate:P,clone:I}=b,re=fv(b,["immediate","clone"]);return Km(re,(he,ye)=>{pA(he)&&(re[he]=(ce,...we)=>{const gt=KA();return mA(ce,gt),ye(ce,...we)})}),dA(o===null?{}:M,re)}const K=E=>{E=F(E),c&&v.destroy(),c=new me(E,ee())};_s(()=>a,()=>{c&&Km(ee(),(E,b)=>{c?.option(E,b)})},{deep:!0});const v={option:(E,b)=>c?.option(E,b),destroy:()=>{c?.destroy(),c=null},save:()=>c?.save(),toArray:()=>c?.toArray(),closest:(...E)=>c?.closest(...E)},_=()=>v?.option("disabled",!0),T=()=>v?.option("disabled",!1);return zA(()=>{u&&K()}),qA(v.destroy),cs({start:K,pause:_,resume:T},v)}const Qh=["update","start","add","remove","choose","unchoose","end","sort","filter","clone","move","change"],HA=["clone","animation","ghostClass","group","sort","disabled","store","handle","draggable","swapThreshold","invertSwap","invertedSwapThreshold","removeCloneOnHide","direction","chosenClass","dragClass","ignore","filter","preventOnFilter","easing","setData","dropBubble","dragoverBubble","dataIdAttr","delay","delayOnTouchOnly","touchStartThreshold","forceFallback","fallbackClass","fallbackOnBody","fallbackTolerance","fallbackOffset","supportPointer","emptyInsertThreshold","scroll","forceAutoScrollFallback","scrollSensitivity","scrollSpeed","bubbleScroll","modelValue","tag","target","customUpdate",...Qh.map(n=>`on${n.replace(/^\S/,e=>e.toUpperCase())}`)],WA=Sb({name:"VueDraggable",model:{prop:"modelValue",event:"update:modelValue"},props:HA,emits:["update:modelValue",...Qh],setup(n,{slots:e,emit:t,expose:r,attrs:i}){const s=Qh.reduce((h,p)=>{const m=`on${p.replace(/^\S/,y=>y.toUpperCase())}`;return h[m]=(...y)=>t(p,...y),h},{}),o=st(()=>{const h=pb(n),{modelValue:p}=h,m=fv(h,["modelValue"]),y=Object.entries(m).reduce((A,[R,x])=>{const k=Ee(x);return k!==void 0&&(A[R]=k),A},{});return cs(cs({},s),aA(cs(cs({},i),y)))}),a=st({get:()=>n.modelValue,set:h=>t("update:modelValue",h)}),c=Ge(),u=Va(GA(n.target||c,a,o));return r(u),()=>{var h;return S0(n.tag||"div",{ref:c},(h=e?.default)==null?void 0:h.call(e,u))}}}),uu=Ge(new Date);let rg=!1;function QA(){rg||typeof window>"u"||(rg=!0,setInterval(()=>{uu.value=new Date},1e3))}const XA=st(()=>uu.value.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})),YA=st(()=>uu.value.toLocaleDateString([],{weekday:"short",month:"short",day:"numeric"}));function xv(){return QA(),{now:uu,formattedTime:XA,formattedDate:YA}}const Sc="color-scheme",_h=["system","light","dark"];function ig(){try{const n=localStorage.getItem(Sc);return n==="light"||n==="dark"?n:"system"}catch{return"system"}}function Xh(n){const e=n==="system"?"light dark":n,t=document.querySelector('meta[name="color-scheme"]');t&&t.setAttribute("content",e);try{n==="system"?localStorage.removeItem(Sc):localStorage.setItem(Sc,n)}catch{}}const vn=Ge("system"),Rc=Ge(!1);let sg=!1;function JA(){if(sg||typeof window>"u")return;sg=!0,vn.value=ig(),Xh(vn.value);const n=window.matchMedia("(prefers-color-scheme: dark)");Rc.value=n.matches,n.addEventListener("change",e=>{Rc.value=e.matches}),window.addEventListener("storage",e=>{e.key===Sc&&(vn.value=ig(),Xh(vn.value))})}const ZA=st(()=>vn.value==="light"||vn.value==="dark"?vn.value:Rc.value?"dark":"light");function Vv(n){vn.value=n==="light"||n==="dark"?n:"system",Xh(vn.value)}function eS(){const n=_h.indexOf(vn.value);Vv(_h[(n+1)%_h.length])}function kv(){return JA(),{preference:vn,resolvedTheme:ZA,systemPrefersDark:Rc,setTheme:Vv,cycleTheme:eS}}const La=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},tS={class:"app-header"},nS={class:"container header-inner"},rS={class:"header-top"},iS={class:"brand"},sS={class:"meta-row"},oS={class:"clock"},aS={key:0,class:"dot","aria-hidden":"true"},lS={key:1,class:"progress-text"},cS={class:"header-actions"},uS=["aria-label"],hS={key:0,"aria-hidden":"true",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},dS={key:1,"aria-hidden":"true",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},fS={key:2,"aria-hidden":"true",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},pS={class:"btn-label"},mS={type:"button",class:"btn icon-btn",popovertarget:"account-popover","aria-label":"Account menu"},gS=["src"],_S={class:"btn-label"},yS={id:"account-popover",popover:"",class:"account-popover"},vS={class:"account-info"},IS={class:"account-email"},ES={class:"uid-box"},TS={class:"uid-row"},wS={class:"uid-code"},bS={class:"visually-hidden","aria-live":"polite"},AS={class:"toolbar"},SS={class:"sort-group",role:"group","aria-label":"Sort games"},RS=["aria-pressed"],PS=["aria-pressed"],CS={__name:"AppHeader",props:{user:{type:Object,required:!0},sortMode:{type:String,required:!0},syncing:{type:Boolean,default:!1},offline:{type:Boolean,default:!1},doneCount:{type:Number,default:0},totalCount:{type:Number,default:0}},emits:["update:sortMode","sign-out","add-game"],setup(n,{emit:e}){const t=n,r=e,{formattedDate:i,formattedTime:s}=xv(),{preference:o,cycleTheme:a}=kv(),c=Ge(!1);let u=null;const h=st(()=>t.offline?"Offline cache":t.syncing?"Syncing…":"Synced"),p=st(()=>o.value==="light"?{label:"Light",aria:"Color theme: Light. Switch to Dark."}:o.value==="dark"?{label:"Dark",aria:"Color theme: Dark. Switch to System."}:{label:"System",aria:"Color theme: System. Switch to Light."});async function m(){try{await navigator.clipboard.writeText(t.user.uid),c.value=!0,clearTimeout(u),u=setTimeout(()=>{c.value=!1},2e3)}catch{c.value=!1}}return(y,A)=>(Te(),Re("header",tS,[U("div",nS,[U("div",rS,[U("div",iS,[A[6]||(A[6]=U("h1",null,"Gacha Reset Tracker",-1)),U("div",sS,[U("span",oS,Me(Ee(i))+" · "+Me(Ee(s)),1),A[5]||(A[5]=U("span",{class:"dot","aria-hidden":"true"},"•",-1)),U("span",{class:Da(["sync-pill",{"is-offline":n.offline,"is-syncing":n.syncing}])},Me(h.value),3),n.totalCount>0?(Te(),Re("span",aS,"•")):er("",!0),n.totalCount>0?(Te(),Re("span",lS,Me(n.doneCount)+"/"+Me(n.totalCount)+" done ",1)):er("",!0)])]),U("div",cS,[U("button",{type:"button",class:"btn icon-btn","aria-label":p.value.aria,onClick:A[0]||(A[0]=(...R)=>Ee(a)&&Ee(a)(...R))},[Ee(o)==="light"?(Te(),Re("svg",hS,A[7]||(A[7]=[U("circle",{cx:"12",cy:"12",r:"4"},null,-1),U("path",{d:"M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"},null,-1)]))):Ee(o)==="dark"?(Te(),Re("svg",dS,A[8]||(A[8]=[U("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"},null,-1)]))):(Te(),Re("svg",fS,A[9]||(A[9]=[U("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"},null,-1),U("path",{d:"M8 21h8m-4-4v4"},null,-1)]))),U("span",pS,Me(p.value.label),1)],8,uS),U("button",mS,[n.user.photoURL?(Te(),Re("img",{key:0,src:n.user.photoURL,alt:"",width:"22",height:"22",class:"avatar",referrerpolicy:"no-referrer"},null,8,gS)):er("",!0),U("span",_S,Me(n.user.displayName?.split(" ")[0]||"Account"),1)]),U("div",yS,[U("div",vS,[U("strong",null,Me(n.user.displayName||"Signed in"),1),U("span",IS,Me(n.user.email),1)]),U("div",ES,[A[10]||(A[10]=U("span",{class:"uid-label"},"Your UID (for GitHub secret)",-1)),U("div",TS,[U("code",wS,Me(n.user.uid),1),U("button",{type:"button",class:"btn btn-compact",onClick:m},Me(c.value?"Copied":"Copy"),1)]),U("span",bS,Me(c.value?"User ID copied to clipboard":""),1)]),U("button",{type:"button",class:"btn btn-danger signout-btn",onClick:A[1]||(A[1]=R=>r("sign-out"))}," Sign out ")])])]),U("div",AS,[U("div",SS,[U("button",{type:"button",class:"sort-btn","aria-pressed":n.sortMode==="manual",onClick:A[2]||(A[2]=R=>r("update:sortMode","manual"))}," My order ",8,RS),U("button",{type:"button",class:"sort-btn","aria-pressed":n.sortMode==="soonest",onClick:A[3]||(A[3]=R=>r("update:sortMode","soonest"))}," Soonest reset ",8,PS)]),U("button",{type:"button",class:"btn btn-primary",onClick:A[4]||(A[4]=R=>r("add-game"))},A[11]||(A[11]=[U("span",{"aria-hidden":"true"},"+",-1),U("span",null,"Add game",-1)]))])])]))}},DS=La(CS,[["__scopeId","data-v-01995809"]]),Nv=864e5,Hl=120;function xS(n){if(n==null)return null;if(typeof n?.toMillis=="function")return n.toMillis();if(typeof n=="number")return Number.isFinite(n)?n:null;const e=new Date(n).getTime();return Number.isFinite(e)?e:null}function Ov(n,e=new Date){const t=e instanceof Date?e.getTime():Number(e),r=(n.utcOffsetMin??0)*6e4,i=new Date(t+r);let o=Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate(),n.resetHour??0,n.resetMinute??0,0,0)-r;return o>t&&(o-=Nv),new Date(o)}function Mv(n,e=new Date){return new Date(Ov(n,e).getTime()+Nv)}function vs(n,e=new Date){const t=xS(n?.lastDoneAt);return t===null?!1:t>=Ov(n,e).getTime()}function Pc(n,e=new Date){const t=e instanceof Date?e.getTime():Number(e);return Math.max(0,Mv(n,e).getTime()-t)}function VS(n,e=new Date){if(vs(n,e))return"done";const t=n?.remindBeforeMin??Hl;return Pc(n,e)<=t*6e4?"urgent":"pending"}function kS(n){const e=Math.max(0,Math.floor(n/1e3)),t=Math.floor(e/3600),r=Math.floor(e%3600/60),i=e%60;return[t,r,i].map(s=>String(s).padStart(2,"0")).join(":")}function NS(n){const e=Math.max(0,Math.ceil(n/6e4));if(e<=1)return"under 1m";const t=Math.floor(e/60),r=e%60;return t===0?`${r}m`:r===0?`${t}h`:`${t}h ${r}m`}function Lv(n){if(!n)return"UTC+0";const e=n>=0?"+":"-",t=Math.abs(n),r=Math.floor(t/60),i=t%60;return i===0?`UTC${e}${r}`:`UTC${e}${r}:${String(i).padStart(2,"0")}`}function OS(n,e=new Date){const t=Mv(n,e),r=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0");return`${r}:${i}`}function MS(n){const e=String(n?.resetHour??0).padStart(2,"0"),t=String(n?.resetMinute??0).padStart(2,"0");return`${e}:${t}`}const LS={key:0,class:"drag-handle","aria-hidden":"true",title:"Drag to reorder"},FS=["aria-pressed"],US={class:"icon-wrap","aria-hidden":"true"},BS=["src"],$S={key:1,class:"icon-fallback"},jS={class:"card-info"},qS={class:"title-row"},zS={class:"game-name"},KS={key:0,class:"server-tag"},GS={class:"reset-line"},HS={class:"server-sub"},WS={class:"status-row"},QS={class:"countdown"},XS={key:0,class:"status-badge is-done"},YS={key:1,class:"status-badge is-urgent"},JS={key:2,class:"status-badge is-pending"},ZS=["aria-label"],eR={__name:"GameCard",props:{game:{type:Object,required:!0},now:{type:Date,required:!0},draggable:{type:Boolean,default:!0}},emits:["toggle","edit"],setup(n,{emit:e}){const t=n,r=e,i=Ge(!1);_s(()=>t.game.iconUrl,()=>{i.value=!1});const s=st(()=>vs(t.game,t.now)),o=st(()=>VS(t.game,t.now)),a=st(()=>Pc(t.game,t.now)),c=st(()=>kS(a.value)),u=st(()=>NS(a.value)),h=st(()=>OS(t.game,t.now)),p=st(()=>`${MS(t.game)} ${Lv(t.game.utcOffsetMin)}`),m=st(()=>(t.game.name||"?").trim().split(/\s+/).slice(0,2).map(A=>A[0]?.toUpperCase()||"").join(""));return(y,A)=>(Te(),Re("li",{class:Da(["game-card",[`state-${o.value}`,{"has-drag":n.draggable}]])},[n.draggable?(Te(),Re("span",LS,A[3]||(A[3]=[g0('<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" data-v-46ea5607><circle cx="5.5" cy="3.5" r="1.3" data-v-46ea5607></circle><circle cx="10.5" cy="3.5" r="1.3" data-v-46ea5607></circle><circle cx="5.5" cy="8" r="1.3" data-v-46ea5607></circle><circle cx="10.5" cy="8" r="1.3" data-v-46ea5607></circle><circle cx="5.5" cy="12.5" r="1.3" data-v-46ea5607></circle><circle cx="10.5" cy="12.5" r="1.3" data-v-46ea5607></circle></svg>',1)]))):er("",!0),U("button",{type:"button",class:"card-toggle","aria-pressed":s.value,onClick:A[1]||(A[1]=R=>r("toggle",n.game))},[U("span",US,[n.game.iconUrl&&!i.value?(Te(),Re("img",{key:0,src:n.game.iconUrl,alt:"",class:"game-icon",loading:"lazy",onError:A[0]||(A[0]=R=>i.value=!0)},null,40,BS)):(Te(),Re("span",$S,Me(m.value),1))]),U("span",jS,[U("span",qS,[U("span",zS,Me(n.game.name),1),n.game.server?(Te(),Re("span",KS,Me(n.game.server),1)):er("",!0)]),U("span",GS,[ha(" Resets "+Me(h.value)+" local ",1),U("span",HS,"("+Me(p.value)+")",1)]),U("span",WS,[U("span",QS,Me(c.value),1),o.value==="done"?(Te(),Re("span",XS,A[4]||(A[4]=[U("svg",{"aria-hidden":"true",viewBox:"0 0 20 20",width:"14",height:"14",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[U("path",{d:"M4 10.5 8 14.5 16 6.5"})],-1),ha(" Done today ")]))):o.value==="urgent"?(Te(),Re("span",YS," Due in "+Me(u.value),1)):(Te(),Re("span",JS," Not done "))])])],8,FS),U("button",{type:"button",class:"edit-btn","aria-label":`Edit ${n.game.name}`,onClick:A[2]||(A[2]=R=>r("edit",n.game))},A[5]||(A[5]=[U("svg",{"aria-hidden":"true",viewBox:"0 0 20 20",width:"18",height:"18",fill:"currentColor"},[U("circle",{cx:"4",cy:"10",r:"1.6"}),U("circle",{cx:"10",cy:"10",r:"1.6"}),U("circle",{cx:"16",cy:"10",r:"1.6"})],-1)]),8,ZS)],2))}},og=La(eR,[["__scopeId","data-v-46ea5607"]]),tR={class:"dialog-header"},nR={id:"editor-title"},rR={class:"form-row-2"},iR={class:"field"},sR={class:"field"},oR={class:"field"},aR={class:"icon-input-row"},lR={class:"icon-preview","aria-hidden":"true"},cR=["src"],uR={key:1},hR={class:"form-row-2"},dR={class:"field"},fR={class:"field"},pR=["value"],mR={class:"field"},gR=["value"],_R={class:"checkbox-field"},yR={key:0,class:"form-error",role:"alert"},vR={class:"dialog-actions"},IR={key:0,class:"delete-zone"},ER=["disabled"],TR=["disabled"],wR=["disabled"],bR={class:"primary-actions"},AR=["disabled"],SR=["disabled"],RR={__name:"GameEditorDialog",props:{saving:{type:Boolean,default:!1}},emits:["save","delete"],setup(n,{expose:e,emit:t}){const r=t,i=Ge(null),s=Ge(null),o=Ge(null),a=Ge(!1),c=Ge(""),u=Ge(!1),h=Va({name:"",server:"",iconUrl:"",resetTime:"04:00",utcOffsetMin:480,remindBeforeMin:Hl,remindersEnabled:!0}),p=[-720,-660,-600,-540,-480,-420,-360,-300,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,540,570,600,660,720,780,840].map(K=>({value:K,label:Lv(K)})),m=[{value:15,label:"15 minutes before"},{value:30,label:"30 minutes before"},{value:60,label:"1 hour before"},{value:120,label:"2 hours before (default)"},{value:180,label:"3 hours before"},{value:240,label:"4 hours before"},{value:360,label:"6 hours before"},{value:720,label:"12 hours before"}],y=st(()=>!!o.value);function A(K=null){if(o.value=K?.id??null,a.value=!1,c.value="",u.value=!1,K){const v=String(K.resetHour??4).padStart(2,"0"),_=String(K.resetMinute??0).padStart(2,"0");h.name=K.name??"",h.server=K.server??"",h.iconUrl=K.iconUrl??"",h.resetTime=`${v}:${_}`,h.utcOffsetMin=K.utcOffsetMin??480,h.remindBeforeMin=K.remindBeforeMin??Hl,h.remindersEnabled=K.remindersEnabled??!0}else h.name="",h.server="",h.iconUrl="",h.resetTime="04:00",h.utcOffsetMin=480,h.remindBeforeMin=Hl,h.remindersEnabled=!0}async function R(){A(null),i.value?.showModal(),await As(),s.value?.focus()}async function x(K){A(K),i.value?.showModal(),await As(),s.value?.focus()}function k(){i.value?.close()}function L(){i.value&&(i.value.returnValue=""),a.value=!1,c.value=""}function M(){c.value="";const[K,v]=h.resetTime.split(":").map(Number);if(!Number.isInteger(K)||!Number.isInteger(v)){c.value="Please choose a valid reset time.";return}r("save",{id:o.value,data:{name:h.name,server:h.server,iconUrl:h.iconUrl,resetHour:K,resetMinute:v,utcOffsetMin:h.utcOffsetMin,remindBeforeMin:h.remindBeforeMin,remindersEnabled:h.remindersEnabled},done:()=>k(),fail:_=>{c.value=_}})}function F(){if(!a.value){a.value=!0;return}r("delete",{id:o.value,done:()=>k(),fail:K=>{c.value=K}})}let ee=null;return Xd(()=>{const K=i.value;if(!K||"closedBy"in HTMLDialogElement.prototype)return;const v=b=>{const P=K.getBoundingClientRect();return b.clientX<P.left||b.clientX>P.right||b.clientY<P.top||b.clientY>P.bottom};let _=!1;const T=b=>{_=v(b)},E=b=>{_&&v(b)&&K.close(),_=!1};K.addEventListener("pointerdown",T),K.addEventListener("pointerup",E),ee=()=>{K.removeEventListener("pointerdown",T),K.removeEventListener("pointerup",E)}}),$y(()=>{ee?.()}),e({openForCreate:R,openForEdit:x}),(K,v)=>(Te(),Re("dialog",{ref_key:"dialogRef",ref:i,class:"editor-dialog",closedby:"any","aria-labelledby":"editor-title",onClose:L},[U("div",tR,[U("h2",nR,Me(y.value?"Edit game":"Add game"),1),U("button",{type:"button",class:"close-btn","aria-label":"Close dialog",onClick:k}," ✕ ")]),U("form",{class:"editor-form",onSubmit:Y0(M,["prevent"])},[U("div",rR,[U("div",iR,[v[10]||(v[10]=U("label",{for:"game-name"},[ha("Game name "),U("span",{"aria-hidden":"true"},"*")],-1)),ai(U("input",{id:"game-name",ref_key:"nameInputRef",ref:s,"onUpdate:modelValue":v[0]||(v[0]=_=>h.name=_),name:"name",type:"text",required:"",maxlength:"60",autofocus:""},null,512),[[Tl,h.name]])]),U("div",sR,[v[11]||(v[11]=U("label",{for:"game-server"},"Server",-1)),ai(U("input",{id:"game-server","onUpdate:modelValue":v[1]||(v[1]=_=>h.server=_),name:"server",type:"text",maxlength:"30",placeholder:"e.g. Global, Asia"},null,512),[[Tl,h.server]])])]),U("div",oR,[v[12]||(v[12]=U("label",{for:"game-icon"},"Icon URL",-1)),v[13]||(v[13]=U("span",{id:"game-icon-hint",class:"hint"}," Optional image URL or built-in icon path. Falls back to initials if blank. ",-1)),U("div",aR,[ai(U("input",{id:"game-icon","onUpdate:modelValue":v[2]||(v[2]=_=>h.iconUrl=_),name:"iconUrl",type:"text",inputmode:"url",autocorrect:"off",autocapitalize:"none",spellcheck:"false","aria-describedby":"game-icon-hint",onInput:v[3]||(v[3]=_=>u.value=!1)},null,544),[[Tl,h.iconUrl]]),U("span",lR,[h.iconUrl&&!u.value?(Te(),Re("img",{key:0,src:h.iconUrl,alt:"",onError:v[4]||(v[4]=_=>u.value=!0)},null,40,cR)):(Te(),Re("span",uR,Me((h.name||"?").slice(0,2).toUpperCase()),1))])])]),U("div",hR,[U("div",dR,[v[14]||(v[14]=U("label",{for:"game-reset-time"},[ha("Server reset time "),U("span",{"aria-hidden":"true"},"*")],-1)),ai(U("input",{id:"game-reset-time","onUpdate:modelValue":v[5]||(v[5]=_=>h.resetTime=_),name:"resetTime",type:"time",required:""},null,512),[[Tl,h.resetTime]])]),U("div",fR,[v[15]||(v[15]=U("label",{for:"game-timezone"},"Server timezone",-1)),ai(U("select",{id:"game-timezone","onUpdate:modelValue":v[6]||(v[6]=_=>h.utcOffsetMin=_),name:"utcOffsetMin"},[(Te(!0),Re(jt,null,gc(Ee(p),_=>(Te(),Re("option",{key:_.value,value:_.value},Me(_.label),9,pR))),128))],512),[[Lm,h.utcOffsetMin,void 0,{number:!0}]])])]),U("div",mR,[v[16]||(v[16]=U("label",{for:"game-remind-lead"},"Reminder lead time",-1)),ai(U("select",{id:"game-remind-lead","onUpdate:modelValue":v[7]||(v[7]=_=>h.remindBeforeMin=_),name:"remindBeforeMin"},[(Te(),Re(jt,null,gc(m,_=>U("option",{key:_.value,value:_.value},Me(_.label),9,gR)),64))],512),[[Lm,h.remindBeforeMin,void 0,{number:!0}]])]),U("div",_R,[ai(U("input",{id:"game-reminders-enabled","onUpdate:modelValue":v[8]||(v[8]=_=>h.remindersEnabled=_),name:"remindersEnabled",type:"checkbox"},null,512),[[W0,h.remindersEnabled]]),v[17]||(v[17]=U("label",{for:"game-reminders-enabled"},"Send Discord reminder if not done in time",-1))]),c.value?(Te(),Re("p",yR,Me(c.value),1)):er("",!0),U("div",vR,[y.value?(Te(),Re("div",IR,[a.value?(Te(),Re(jt,{key:1},[U("button",{type:"button",class:"btn btn-danger",disabled:n.saving,onClick:F}," Confirm delete ",8,TR),U("button",{type:"button",class:"btn",disabled:n.saving,onClick:v[9]||(v[9]=_=>a.value=!1)}," Keep ",8,wR)],64)):(Te(),Re("button",{key:0,type:"button",class:"btn btn-danger",disabled:n.saving,onClick:F}," Delete ",8,ER))])):er("",!0),U("div",bR,[U("button",{type:"button",class:"btn",disabled:n.saving,onClick:k},"Cancel",8,AR),U("button",{type:"submit",class:"btn btn-primary",disabled:n.saving},Me(n.saving?"Saving…":"Save"),9,SR)])])],32)],544))}},PR=La(RR,[["__scopeId","data-v-929373c6"]]),CR="/gchMonitoring/pwa-192.png",DR={class:"signin-shell"},xR={class:"signin-topbar"},VR={class:"signin-main"},kR={class:"signin-card"},NR={key:0,class:"signin-error",role:"alert"},OR=["disabled"],MR={__name:"SignInScreen",props:{signingIn:{type:Boolean,default:!1},error:{type:String,default:""}},emits:["sign-in"],setup(n,{emit:e}){const t=e,{preference:r,cycleTheme:i}=kv(),s={system:"Theme: System",light:"Theme: Light",dark:"Theme: Dark"};return(o,a)=>(Te(),Re("div",DR,[U("div",xR,[U("button",{type:"button",class:"btn btn-quiet",onClick:a[0]||(a[0]=(...c)=>Ee(i)&&Ee(i)(...c))},Me(s[Ee(r)]),1)]),U("main",VR,[U("section",kR,[a[3]||(a[3]=U("img",{src:CR,alt:"",width:"64",height:"64",class:"signin-logo"},null,-1)),a[4]||(a[4]=U("h1",null,"Gacha Reset Tracker",-1)),a[5]||(a[5]=U("p",{class:"signin-desc"}," Track daily server resets, mark games done across PC and Android, and get Discord reminders before reset if you haven't played yet. ",-1)),n.error?(Te(),Re("p",NR,Me(n.error),1)):er("",!0),U("button",{type:"button",class:"btn btn-primary signin-btn",disabled:n.signingIn,onClick:a[1]||(a[1]=c=>t("sign-in"))},[a[2]||(a[2]=U("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",width:"20",height:"20"},[U("path",{fill:"currentColor",d:"M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"})],-1)),U("span",null,Me(n.signingIn?"Signing in…":"Sign in with Google"),1)],8,OR)])])]))}},LR=La(MR,[["__scopeId","data-v-81f7fdee"]]),FR=()=>{};var ag={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},UR=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Uv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,y=u&63;c||(y=64,o||(m=64)),r.push(t[h],t[p],t[m],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):UR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw new BR;const m=s<<2|a>>4;if(r.push(m),u!==64){const y=a<<4&240|u>>2;if(r.push(y),p!==64){const A=u<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class BR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $R=function(n){const e=Fv(n);return Uv.encodeByteArray(e,!0)},Bv=function(n){return $R(n).replace(/\./g,"")},$v=function(n){try{return Uv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=()=>jv().__FIREBASE_DEFAULTS__,qR=()=>{if(typeof process>"u"||typeof ag>"u")return;const n=ag.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$v(n[1]);return e&&JSON.parse(e)},hu=()=>{try{return FR()||jR()||qR()||zR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},KR=n=>{var e,t;return(t=(e=hu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},qv=()=>{var n;return(n=hu())===null||n===void 0?void 0:n.config},zv=n=>{var e;return(e=hu())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kv(n){return(await fetch(n,{credentials:"include"})).ok}const Xo={};function HR(){const n={prod:[],emulator:[]};for(const e of Object.keys(Xo))Xo[e]?n.emulator.push(e):n.prod.push(e);return n}function WR(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let lg=!1;function QR(n,e){if(typeof window>"u"||typeof document>"u"||!Xs(window.location.host)||Xo[n]===e||Xo[n]||lg)return;Xo[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=HR().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{lg=!0,o()},m}function h(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=WR(r),y=t("text"),A=document.getElementById(y)||document.createElement("span"),R=t("learnmore"),x=document.getElementById(R)||document.createElement("a"),k=t("preprendIcon"),L=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const M=m.element;a(M),h(x,R);const F=u();c(L,k),M.append(L,A,x,F),document.body.appendChild(M)}s?(A.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function Gv(){var n;const e=(n=hu())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ZR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e1(){const n=pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hv(){return!Gv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wv(){return!Gv()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Qv(){try{return typeof indexedDB=="object"}catch{return!1}}function t1(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="FirebaseError";class pr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=n1,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fa.prototype.create)}}class Fa{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?r1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pr(i,a,r)}}function r1(n,e){return n.replace(i1,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const i1=/\{\$([^}]+)}/g;function s1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Di(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(cg(s)&&cg(o)){if(!Di(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function cg(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function o1(n,e){const t=new a1(n,e);return t.subscribe.bind(t)}class a1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");l1(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=yh),i.error===void 0&&(i.error=yh),i.complete===void 0&&(i.complete=yh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function l1(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(n){return n&&n._delegate?n._delegate:n}class xi{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new GR;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(h1(e))try{this.getOrInitializeService({instanceIdentifier:mi})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=mi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mi){return this.instances.has(e)}getOptions(e=mi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:u1(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mi){return this.component?this.component.multipleInstances?e:mi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u1(n){return n===mi?void 0:n}function h1(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new c1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ae||(Ae={}));const f1={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},p1=Ae.INFO,m1={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},g1=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=m1[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class of{constructor(e){this.name=e,this._logLevel=p1,this._logHandler=g1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?f1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const _1=(n,e)=>e.some(t=>n instanceof t);let ug,hg;function y1(){return ug||(ug=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function v1(){return hg||(hg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xv=new WeakMap,Yh=new WeakMap,Yv=new WeakMap,vh=new WeakMap,af=new WeakMap;function I1(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Lr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Xv.set(t,n)}).catch(()=>{}),af.set(e,n),e}function E1(n){if(Yh.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Yh.set(n,e)}let Jh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Lr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function T1(n){Jh=n(Jh)}function w1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ih(this),e,...t);return Yv.set(r,e.sort?e.sort():[e]),Lr(r)}:v1().includes(n)?function(...e){return n.apply(Ih(this),e),Lr(Xv.get(this))}:function(...e){return Lr(n.apply(Ih(this),e))}}function b1(n){return typeof n=="function"?w1(n):(n instanceof IDBTransaction&&E1(n),_1(n,y1())?new Proxy(n,Jh):n)}function Lr(n){if(n instanceof IDBRequest)return I1(n);if(vh.has(n))return vh.get(n);const e=b1(n);return e!==n&&(vh.set(n,e),af.set(e,n)),e}const Ih=n=>af.get(n);function A1(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Lr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Lr(o.result),c.oldVersion,c.newVersion,Lr(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const S1=["get","getKey","getAll","getAllKeys","count"],R1=["put","add","delete","clear"],Eh=new Map;function dg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Eh.get(e))return Eh.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=R1.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||S1.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Eh.set(e,s),s}T1(n=>({...n,get:(e,t,r)=>dg(e,t)||n.get(e,t,r),has:(e,t)=>!!dg(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(C1(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function C1(n){const e=n.getComponent();return e?.type==="VERSION"}const Zh="@firebase/app",fg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new of("@firebase/app"),D1="@firebase/app-compat",x1="@firebase/analytics-compat",V1="@firebase/analytics",k1="@firebase/app-check-compat",N1="@firebase/app-check",O1="@firebase/auth",M1="@firebase/auth-compat",L1="@firebase/database",F1="@firebase/data-connect",U1="@firebase/database-compat",B1="@firebase/functions",$1="@firebase/functions-compat",j1="@firebase/installations",q1="@firebase/installations-compat",z1="@firebase/messaging",K1="@firebase/messaging-compat",G1="@firebase/performance",H1="@firebase/performance-compat",W1="@firebase/remote-config",Q1="@firebase/remote-config-compat",X1="@firebase/storage",Y1="@firebase/storage-compat",J1="@firebase/firestore",Z1="@firebase/ai",eP="@firebase/firestore-compat",tP="firebase",nP="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="[DEFAULT]",rP={[Zh]:"fire-core",[D1]:"fire-core-compat",[V1]:"fire-analytics",[x1]:"fire-analytics-compat",[N1]:"fire-app-check",[k1]:"fire-app-check-compat",[O1]:"fire-auth",[M1]:"fire-auth-compat",[L1]:"fire-rtdb",[F1]:"fire-data-connect",[U1]:"fire-rtdb-compat",[B1]:"fire-fn",[$1]:"fire-fn-compat",[j1]:"fire-iid",[q1]:"fire-iid-compat",[z1]:"fire-fcm",[K1]:"fire-fcm-compat",[G1]:"fire-perf",[H1]:"fire-perf-compat",[W1]:"fire-rc",[Q1]:"fire-rc-compat",[X1]:"fire-gcs",[Y1]:"fire-gcs-compat",[J1]:"fire-fst",[eP]:"fire-fst-compat",[Z1]:"fire-vertex","fire-js":"fire-js",[tP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=new Map,iP=new Map,td=new Map;function pg(n,e){try{n.container.addComponent(e)}catch(t){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Cs(n){const e=n.name;if(td.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;td.set(e,n);for(const t of Cc.values())pg(t,n);for(const t of iP.values())pg(t,n);return!0}function lf(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function yn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fr=new Fa("app","Firebase",sP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=nP;function Jv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ed,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Fr.create("bad-app-name",{appName:String(i)});if(t||(t=qv()),!t)throw Fr.create("no-options");const s=Cc.get(i);if(s){if(Di(t,s.options)&&Di(r,s.config))return s;throw Fr.create("duplicate-app",{appName:i})}const o=new d1(i);for(const c of td.values())o.addComponent(c);const a=new oP(t,r,o);return Cc.set(i,a),a}function aP(n=ed){const e=Cc.get(n);if(!e&&n===ed&&qv())return Jv();if(!e)throw Fr.create("no-app",{appName:n});return e}function Ur(n,e,t){var r;let i=(r=rP[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(a.join(" "));return}Cs(new xi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP="firebase-heartbeat-database",cP=1,pa="firebase-heartbeat-store";let Th=null;function Zv(){return Th||(Th=A1(lP,cP,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pa)}catch(t){console.warn(t)}}}}).catch(n=>{throw Fr.create("idb-open",{originalErrorMessage:n.message})})),Th}async function uP(n){try{const t=(await Zv()).transaction(pa),r=await t.objectStore(pa).get(eI(n));return await t.done,r}catch(e){if(e instanceof pr)ar.warn(e.message);else{const t=Fr.create("idb-get",{originalErrorMessage:e?.message});ar.warn(t.message)}}}async function mg(n,e){try{const r=(await Zv()).transaction(pa,"readwrite");await r.objectStore(pa).put(e,eI(n)),await r.done}catch(t){if(t instanceof pr)ar.warn(t.message);else{const r=Fr.create("idb-set",{originalErrorMessage:t?.message});ar.warn(r.message)}}}function eI(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=1024,dP=30;class fP{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mP(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>dP){const o=gP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gg(),{heartbeatsToSend:r,unsentEntries:i}=pP(this._heartbeatsCache.heartbeats),s=Bv(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ar.warn(t),""}}}function gg(){return new Date().toISOString().substring(0,10)}function pP(n,e=hP){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_g(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),_g(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class mP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qv()?t1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await uP(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return mg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return mg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _g(n){return Bv(JSON.stringify({version:2,heartbeats:n})).length}function gP(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(n){Cs(new xi("platform-logger",e=>new P1(e),"PRIVATE")),Cs(new xi("heartbeat",e=>new fP(e),"PRIVATE")),Ur(Zh,fg,n),Ur(Zh,fg,"esm2017"),Ur("fire-js","")}_P("");function cf(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function tI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yP=tI,nI=new Fa("auth","Firebase",tI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=new of("@firebase/auth");function vP(n,...e){Dc.logLevel<=Ae.WARN&&Dc.warn(`Auth (${Ys}): ${n}`,...e)}function Wl(n,...e){Dc.logLevel<=Ae.ERROR&&Dc.error(`Auth (${Ys}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n,...e){throw hf(n,...e)}function Tn(n,...e){return hf(n,...e)}function uf(n,e,t){const r=Object.assign(Object.assign({},yP()),{[e]:t});return new Fa("auth","Firebase",r).create(e,{appName:n.name})}function Ai(n){return uf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function IP(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Bn(n,"argument-error"),uf(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hf(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return nI.create(n,...e)}function ge(n,e,...t){if(!n)throw hf(e,...t)}function Yn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Wl(e),new Error(e)}function lr(n,e){n||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function EP(){return yg()==="http:"||yg()==="https:"}function yg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EP()||JR()||"connection"in navigator)?navigator.onLine:!0}function wP(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.shortDelay=e,this.longDelay=t,lr(t>e,"Short delay should be less than long delay!"),this.isMobile=XR()||ZR()}get(){return TP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(n,e){lr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SP=new Ba(3e4,6e4);function ff(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Js(n,e,t,r,i={}){return iI(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ua(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},s);return YR()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Xs(n.emulatorConfig.host)&&(u.credentials="include"),rI.fetch()(await sI(n,n.config.apiHost,t,a),u)})}async function iI(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},bP),e);try{const i=new PP(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Rl(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rl(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Rl(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Rl(n,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw uf(n,h,u);Bn(n,h)}}catch(i){if(i instanceof pr)throw i;Bn(n,"network-request-failed",{message:String(i)})}}async function RP(n,e,t,r,i={}){const s=await Js(n,e,t,r,i);return"mfaPendingCredential"in s&&Bn(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function sI(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?df(n.config,i):`${n.config.apiScheme}://${i}`;return AP.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class PP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),SP.get())})}}function Rl(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Tn(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(n,e){return Js(n,"POST","/v1/accounts:delete",e)}async function xc(n,e){return Js(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DP(n,e=!1){const t=ut(n),r=await t.getIdToken(e),i=pf(r);ge(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:Yo(wh(i.auth_time)),issuedAtTime:Yo(wh(i.iat)),expirationTime:Yo(wh(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function wh(n){return Number(n)*1e3}function pf(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Wl("JWT malformed, contained fewer than 3 sections"),null;try{const i=$v(t);return i?JSON.parse(i):(Wl("Failed to decode base64 JWT payload"),null)}catch(i){return Wl("Caught error parsing JWT payload as JSON",i?.toString()),null}}function vg(n){const e=pf(n);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof pr&&xP(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xP({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yo(this.lastLoginAt),this.creationTime=Yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ma(n,xc(t,{idToken:r}));ge(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?oI(s.providerUserInfo):[],a=NP(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,h=c?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rd(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function kP(n){const e=ut(n);await Vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NP(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function oI(n){return n.map(e=>{var{providerId:t}=e,r=cf(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP(n,e){const t=await iI(n,{},async()=>{const r=Ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await sI(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return n.emulatorConfig&&Xs(n.emulatorConfig.host)&&(c.credentials="include"),rI.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function MP(n,e){return Js(n,"POST","/v2/accounts:revokeToken",ff(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=vg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await OP(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Is;return r&&(ge(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ge(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ge(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n,e){ge(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=cf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ma(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return DP(this,e)}reload(){return kP(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Vc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(Ai(this.auth));const e=await this.getIdToken();return await ma(this,CP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,h;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,y=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=t.photoURL)!==null&&o!==void 0?o:void 0,R=(a=t.tenantId)!==null&&a!==void 0?a:void 0,x=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=t.createdAt)!==null&&u!==void 0?u:void 0,L=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:M,emailVerified:F,isAnonymous:ee,providerData:K,stsTokenManager:v}=t;ge(M&&v,e,"internal-error");const _=Is.fromJSON(this.name,v);ge(typeof M=="string",e,"internal-error"),Er(p,e.name),Er(m,e.name),ge(typeof F=="boolean",e,"internal-error"),ge(typeof ee=="boolean",e,"internal-error"),Er(y,e.name),Er(A,e.name),Er(R,e.name),Er(x,e.name),Er(k,e.name),Er(L,e.name);const T=new In({uid:M,auth:e,email:m,emailVerified:F,displayName:p,isAnonymous:ee,photoURL:A,phoneNumber:y,tenantId:R,stsTokenManager:_,createdAt:k,lastLoginAt:L});return K&&Array.isArray(K)&&(T.providerData=K.map(E=>Object.assign({},E))),x&&(T._redirectEventId=x),T}static async _fromIdTokenResponse(e,t,r=!1){const i=new Is;i.updateFromServerResponse(t);const s=new In({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vc(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ge(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?oI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,a=new Is;a.updateFromIdToken(r);const c=new In({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new rd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new Map;function Jn(n){lr(n instanceof Function,"Expected a class definition");let e=Ig.get(n);return e?(lr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ig.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}aI.type="NONE";const Eg=aI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n,e,t){return`firebase:${n}:${e}:${t}`}class Es{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ql(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ql("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await xc(this.auth,{idToken:e}).catch(()=>{});return t?In._fromGetAccountInfoResponse(this.auth,t,e):null}return In._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Es(Jn(Eg),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Jn(Eg);const o=Ql(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){let p;if(typeof h=="string"){const m=await xc(e,{idToken:h}).catch(()=>{});if(!m)break;p=await In._fromGetAccountInfoResponse(e,m,h)}else p=In._fromJSON(e,h);u!==s&&(a=p),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Es(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Es(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fI(e))return"Blackberry";if(pI(e))return"Webos";if(cI(e))return"Safari";if((e.includes("chrome/")||uI(e))&&!e.includes("edge/"))return"Chrome";if(dI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function lI(n=pt()){return/firefox\//i.test(n)}function cI(n=pt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uI(n=pt()){return/crios\//i.test(n)}function hI(n=pt()){return/iemobile/i.test(n)}function dI(n=pt()){return/android/i.test(n)}function fI(n=pt()){return/blackberry/i.test(n)}function pI(n=pt()){return/webos/i.test(n)}function mf(n=pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function LP(n=pt()){var e;return mf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FP(){return e1()&&document.documentMode===10}function mI(n=pt()){return mf(n)||dI(n)||pI(n)||fI(n)||/windows phone/i.test(n)||hI(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(n,e=[]){let t;switch(n){case"Browser":t=Tg(pt());break;case"Worker":t=`${Tg(pt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ys}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BP(n,e={}){return Js(n,"GET","/v2/passwordPolicy",ff(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=6;class jP{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:$P,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wg(this),this.idTokenSubscription=new wg(this),this.beforeStateQueue=new UP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Jn(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xc(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(Ai(this));const t=e?ut(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(Ai(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(Ai(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BP(this),t=new jP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fa("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await MP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Jn(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Jn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&vP(`Error while retrieving App Check token: ${t.error}`),t?.token}}function du(n){return ut(n)}class wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=o1(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zP(n){gf=n}function KP(n){return gf.loadJS(n)}function GP(){return gf.gapiScript}function HP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(n,e){const t=lf(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Di(s,e??{}))return i;Bn(i,"already-initialized")}return t.initialize({options:e})}function QP(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Jn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function XP(n,e,t){const r=du(n);ge(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=_I(e),{host:o,port:a}=YP(e),c=a===null?"":`:${a}`,u={url:`${s}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ge(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ge(Di(u,r.config.emulator)&&Di(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Xs(o)?(Kv(`${s}//${o}${c}`),QR("Auth",!0)):JP()}function _I(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function YP(n){const e=_I(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:bg(o)}}}function bg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function JP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,t){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(n,e){return RP(n,"POST","/v1/accounts:signInWithIdp",ff(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP="http://localhost";class Vi extends yI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Bn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=cf(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ts(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ts(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ts(e,t)}buildRequest(){const e={requestUri:ZP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ua(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends _f{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends $a{constructor(){super("facebook.com")}static credential(e){return Vi._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends $a{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vi._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Xn.credential(t,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends $a{constructor(){super("github.com")}static credential(e){return Vi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends $a{constructor(){super("twitter.com")}static credential(e,t){return Vi._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vr.credential(t,r)}catch{return null}}}Vr.TWITTER_SIGN_IN_METHOD="twitter.com";Vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await In._fromIdTokenResponse(e,r,i),o=Ag(r);return new Ds({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ag(r);return new Ds({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ag(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends pr{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,kc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new kc(e,t,r,i)}}function vI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kc._fromErrorAndOperation(n,s,e,r):s})}async function eC(n,e,t=!1){const r=await ma(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ds._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(n,e,t=!1){const{auth:r}=n;if(yn(r.app))return Promise.reject(Ai(r));const i="reauthenticate";try{const s=await ma(n,vI(r,i,e,n),t);ge(s.idToken,r,"internal-error");const o=pf(s.idToken);ge(o,r,"internal-error");const{sub:a}=o;return ge(n.uid===a,r,"user-mismatch"),Ds._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Bn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC(n,e,t=!1){if(yn(n.app))return Promise.reject(Ai(n));const r="signIn",i=await vI(n,r,e),s=await Ds._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function rC(n,e,t,r){return ut(n).onIdTokenChanged(e,t,r)}function iC(n,e,t){return ut(n).beforeAuthStateChanged(e,t)}function sC(n,e,t,r){return ut(n).onAuthStateChanged(e,t,r)}function oC(n){return ut(n).signOut()}const Nc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Nc,"1"),this.storage.removeItem(Nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=1e3,lC=10;class EI extends II{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lC):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}EI.type="LOCAL";const cC=EI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI extends II{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}TI.type="SESSION";const wI=TI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new fu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await uC(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=yf("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function dC(n){Nn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function fC(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pC(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function mC(){return bI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="firebaseLocalStorageDb",gC=1,Oc="firebaseLocalStorage",SI="fbase_key";class ja{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pu(n,e){return n.transaction([Oc],e?"readwrite":"readonly").objectStore(Oc)}function _C(){const n=indexedDB.deleteDatabase(AI);return new ja(n).toPromise()}function id(){const n=indexedDB.open(AI,gC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Oc,{keyPath:SI})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Oc)?e(r):(r.close(),await _C(),e(await id()))})})}async function Sg(n,e,t){const r=pu(n,!0).put({[SI]:e,value:t});return new ja(r).toPromise()}async function yC(n,e){const t=pu(n,!1).get(e),r=await new ja(t).toPromise();return r===void 0?null:r.value}function Rg(n,e){const t=pu(n,!0).delete(e);return new ja(t).toPromise()}const vC=800,IC=3;class RI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await id(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>IC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fu._getInstance(mC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fC(),!this.activeServiceWorker)return;this.sender=new hC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await id();return await Sg(e,Nc,"1"),await Rg(e,Nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sg(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>yC(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Rg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pu(i,!1).getAll();return new ja(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RI.type="LOCAL";const EC=RI;new Ba(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(n,e){return e?Jn(e):(ge(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends yI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ts(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function TC(n){return nC(n.auth,new vf(n),n.bypassAuthState)}function wC(n){const{auth:e,user:t}=n;return ge(t,e,"internal-error"),tC(t,new vf(n),n.bypassAuthState)}async function bC(n){const{auth:e,user:t}=n;return ge(t,e,"internal-error"),eC(t,new vf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TC;case"linkViaPopup":case"linkViaRedirect":return bC;case"reauthViaPopup":case"reauthViaRedirect":return wC;default:Bn(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=new Ba(2e3,1e4);async function SC(n,e,t){if(yn(n.app))return Promise.reject(Tn(n,"operation-not-supported-in-this-environment"));const r=du(n);IP(n,e,_f);const i=PI(r,t);return new Ti(r,"signInViaPopup",e,i).executeNotNull()}class Ti extends CI{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ti.currentPopupAction&&Ti.currentPopupAction.cancel(),Ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=yf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AC.get())};e()}}Ti.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="pendingRedirect",Xl=new Map;class PC extends CI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Xl.get(this.auth._key());if(!e){try{const r=await CC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Xl.set(this.auth._key(),e)}return this.bypassAuthState||Xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CC(n,e){const t=VC(e),r=xC(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function DC(n,e){Xl.set(n._key(),e)}function xC(n){return Jn(n._redirectPersistence)}function VC(n){return Ql(RC,n.config.apiKey,n.name)}async function kC(n,e,t=!1){if(yn(n.app))return Promise.reject(Ai(n));const r=du(n),i=PI(r,e),o=await new PC(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=10*60*1e3;class OC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!DI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Tn(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pg(e))}saveEventToCache(e){this.cachedEventUids.add(Pg(e)),this.lastProcessedEventTime=Date.now()}}function Pg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function DI({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function MC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return DI(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(n,e={}){return Js(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UC=/^https?/;async function BC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await LC(n);for(const t of e)try{if($C(t))return}catch{}Bn(n,"unauthorized-domain")}function $C(n){const e=nd(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!UC.test(t))return!1;if(FC.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=new Ba(3e4,6e4);function Cg(){const n=Nn().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qC(n){return new Promise((e,t)=>{var r,i,s;function o(){Cg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cg(),t(Tn(n,"network-request-failed"))},timeout:jC.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const a=HP("iframefcb");return Nn()[a]=()=>{gapi.load?o():t(Tn(n,"network-request-failed"))},KP(`${GP()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Yl=null,e})}let Yl=null;function zC(n){return Yl=Yl||qC(n),Yl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=new Ba(5e3,15e3),GC="__/auth/iframe",HC="emulator/auth/iframe",WC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XC(n){const e=n.config;ge(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?df(e,HC):`https://${n.config.authDomain}/${GC}`,r={apiKey:e.apiKey,appName:n.name,v:Ys},i=QC.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ua(r).slice(1)}`}async function YC(n){const e=await zC(n),t=Nn().gapi;return ge(t,n,"internal-error"),e.open({where:document.body,url:XC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(n,"network-request-failed"),a=Nn().setTimeout(()=>{s(o)},KC.get());function c(){Nn().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZC=500,eD=600,tD="_blank",nD="http://localhost";class Dg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rD(n,e,t,r=ZC,i=eD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},JC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=pt().toLowerCase();t&&(a=uI(u)?tD:t),lI(u)&&(e=e||nD,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[y,A])=>`${m}${y}=${A},`,"");if(LP(u)&&a!=="_self")return iD(e||"",a),new Dg(null);const p=window.open(e||"",a,h);ge(p,n,"popup-blocked");try{p.focus()}catch{}return new Dg(p)}function iD(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD="__/auth/handler",oD="emulator/auth/handler",aD=encodeURIComponent("fac");async function xg(n,e,t,r,i,s){ge(n.config.authDomain,n,"auth-domain-config-required"),ge(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ys,eventId:i};if(e instanceof _f){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",s1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof $a){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),u=c?`#${aD}=${encodeURIComponent(c)}`:"";return`${lD(n)}?${Ua(a).slice(1)}${u}`}function lD({config:n}){return n.emulator?df(n,oD):`https://${n.authDomain}/${sD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="webStorageSupport";class cD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wI,this._completeRedirectFn=kC,this._overrideRedirectResult=DC}async _openPopup(e,t,r,i){var s;lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xg(e,t,r,nd(),i);return rD(e,o,yf())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await xg(e,t,r,nd(),i);return dC(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await YC(e),r=new OC(e);return t.register("authEvent",i=>(ge(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bh,{type:bh},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[bh];o!==void 0&&t(!!o),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=BC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mI()||cI()||mf()}}const uD=cD;var Vg="@firebase/auth",kg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fD(n){Cs(new xi("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ge(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gI(n)},u=new qP(r,i,s,c);return QP(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Cs(new xi("auth-internal",e=>{const t=du(e.getProvider("auth").getImmediate());return(r=>new hD(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ur(Vg,kg,dD(n)),Ur(Vg,kg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=5*60,mD=zv("authIdTokenMaxAge")||pD;let Ng=null;const gD=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>mD)return;const i=t?.token;Ng!==i&&(Ng=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _D(n=aP()){const e=lf(n,"auth");if(e.isInitialized())return e.getImmediate();const t=WP(n,{popupRedirectResolver:uD,persistence:[EC,cC,wI]}),r=zv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=gD(s.toString());iC(t,o,()=>o(t.currentUser)),rC(t,a=>o(a))}}const i=KR("auth");return i&&XP(t,`http://${i}`),t}function yD(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}zP({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Tn("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",yD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fD("Browser");var vD="firebase",ID="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur(vD,ID,"app");var Og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,xI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function T(){}T.prototype=_.prototype,v.D=_.prototype,v.prototype=new T,v.prototype.constructor=v,v.C=function(E,b,P){for(var I=Array(arguments.length-2),re=2;re<arguments.length;re++)I[re-2]=arguments[re];return _.prototype[b].apply(E,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,_,T){T||(T=0);var E=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)E[b]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(b=0;16>b;++b)E[b]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=v.g[0],T=v.g[1],b=v.g[2];var P=v.g[3],I=_+(P^T&(b^P))+E[0]+3614090360&4294967295;_=T+(I<<7&4294967295|I>>>25),I=P+(b^_&(T^b))+E[1]+3905402710&4294967295,P=_+(I<<12&4294967295|I>>>20),I=b+(T^P&(_^T))+E[2]+606105819&4294967295,b=P+(I<<17&4294967295|I>>>15),I=T+(_^b&(P^_))+E[3]+3250441966&4294967295,T=b+(I<<22&4294967295|I>>>10),I=_+(P^T&(b^P))+E[4]+4118548399&4294967295,_=T+(I<<7&4294967295|I>>>25),I=P+(b^_&(T^b))+E[5]+1200080426&4294967295,P=_+(I<<12&4294967295|I>>>20),I=b+(T^P&(_^T))+E[6]+2821735955&4294967295,b=P+(I<<17&4294967295|I>>>15),I=T+(_^b&(P^_))+E[7]+4249261313&4294967295,T=b+(I<<22&4294967295|I>>>10),I=_+(P^T&(b^P))+E[8]+1770035416&4294967295,_=T+(I<<7&4294967295|I>>>25),I=P+(b^_&(T^b))+E[9]+2336552879&4294967295,P=_+(I<<12&4294967295|I>>>20),I=b+(T^P&(_^T))+E[10]+4294925233&4294967295,b=P+(I<<17&4294967295|I>>>15),I=T+(_^b&(P^_))+E[11]+2304563134&4294967295,T=b+(I<<22&4294967295|I>>>10),I=_+(P^T&(b^P))+E[12]+1804603682&4294967295,_=T+(I<<7&4294967295|I>>>25),I=P+(b^_&(T^b))+E[13]+4254626195&4294967295,P=_+(I<<12&4294967295|I>>>20),I=b+(T^P&(_^T))+E[14]+2792965006&4294967295,b=P+(I<<17&4294967295|I>>>15),I=T+(_^b&(P^_))+E[15]+1236535329&4294967295,T=b+(I<<22&4294967295|I>>>10),I=_+(b^P&(T^b))+E[1]+4129170786&4294967295,_=T+(I<<5&4294967295|I>>>27),I=P+(T^b&(_^T))+E[6]+3225465664&4294967295,P=_+(I<<9&4294967295|I>>>23),I=b+(_^T&(P^_))+E[11]+643717713&4294967295,b=P+(I<<14&4294967295|I>>>18),I=T+(P^_&(b^P))+E[0]+3921069994&4294967295,T=b+(I<<20&4294967295|I>>>12),I=_+(b^P&(T^b))+E[5]+3593408605&4294967295,_=T+(I<<5&4294967295|I>>>27),I=P+(T^b&(_^T))+E[10]+38016083&4294967295,P=_+(I<<9&4294967295|I>>>23),I=b+(_^T&(P^_))+E[15]+3634488961&4294967295,b=P+(I<<14&4294967295|I>>>18),I=T+(P^_&(b^P))+E[4]+3889429448&4294967295,T=b+(I<<20&4294967295|I>>>12),I=_+(b^P&(T^b))+E[9]+568446438&4294967295,_=T+(I<<5&4294967295|I>>>27),I=P+(T^b&(_^T))+E[14]+3275163606&4294967295,P=_+(I<<9&4294967295|I>>>23),I=b+(_^T&(P^_))+E[3]+4107603335&4294967295,b=P+(I<<14&4294967295|I>>>18),I=T+(P^_&(b^P))+E[8]+1163531501&4294967295,T=b+(I<<20&4294967295|I>>>12),I=_+(b^P&(T^b))+E[13]+2850285829&4294967295,_=T+(I<<5&4294967295|I>>>27),I=P+(T^b&(_^T))+E[2]+4243563512&4294967295,P=_+(I<<9&4294967295|I>>>23),I=b+(_^T&(P^_))+E[7]+1735328473&4294967295,b=P+(I<<14&4294967295|I>>>18),I=T+(P^_&(b^P))+E[12]+2368359562&4294967295,T=b+(I<<20&4294967295|I>>>12),I=_+(T^b^P)+E[5]+4294588738&4294967295,_=T+(I<<4&4294967295|I>>>28),I=P+(_^T^b)+E[8]+2272392833&4294967295,P=_+(I<<11&4294967295|I>>>21),I=b+(P^_^T)+E[11]+1839030562&4294967295,b=P+(I<<16&4294967295|I>>>16),I=T+(b^P^_)+E[14]+4259657740&4294967295,T=b+(I<<23&4294967295|I>>>9),I=_+(T^b^P)+E[1]+2763975236&4294967295,_=T+(I<<4&4294967295|I>>>28),I=P+(_^T^b)+E[4]+1272893353&4294967295,P=_+(I<<11&4294967295|I>>>21),I=b+(P^_^T)+E[7]+4139469664&4294967295,b=P+(I<<16&4294967295|I>>>16),I=T+(b^P^_)+E[10]+3200236656&4294967295,T=b+(I<<23&4294967295|I>>>9),I=_+(T^b^P)+E[13]+681279174&4294967295,_=T+(I<<4&4294967295|I>>>28),I=P+(_^T^b)+E[0]+3936430074&4294967295,P=_+(I<<11&4294967295|I>>>21),I=b+(P^_^T)+E[3]+3572445317&4294967295,b=P+(I<<16&4294967295|I>>>16),I=T+(b^P^_)+E[6]+76029189&4294967295,T=b+(I<<23&4294967295|I>>>9),I=_+(T^b^P)+E[9]+3654602809&4294967295,_=T+(I<<4&4294967295|I>>>28),I=P+(_^T^b)+E[12]+3873151461&4294967295,P=_+(I<<11&4294967295|I>>>21),I=b+(P^_^T)+E[15]+530742520&4294967295,b=P+(I<<16&4294967295|I>>>16),I=T+(b^P^_)+E[2]+3299628645&4294967295,T=b+(I<<23&4294967295|I>>>9),I=_+(b^(T|~P))+E[0]+4096336452&4294967295,_=T+(I<<6&4294967295|I>>>26),I=P+(T^(_|~b))+E[7]+1126891415&4294967295,P=_+(I<<10&4294967295|I>>>22),I=b+(_^(P|~T))+E[14]+2878612391&4294967295,b=P+(I<<15&4294967295|I>>>17),I=T+(P^(b|~_))+E[5]+4237533241&4294967295,T=b+(I<<21&4294967295|I>>>11),I=_+(b^(T|~P))+E[12]+1700485571&4294967295,_=T+(I<<6&4294967295|I>>>26),I=P+(T^(_|~b))+E[3]+2399980690&4294967295,P=_+(I<<10&4294967295|I>>>22),I=b+(_^(P|~T))+E[10]+4293915773&4294967295,b=P+(I<<15&4294967295|I>>>17),I=T+(P^(b|~_))+E[1]+2240044497&4294967295,T=b+(I<<21&4294967295|I>>>11),I=_+(b^(T|~P))+E[8]+1873313359&4294967295,_=T+(I<<6&4294967295|I>>>26),I=P+(T^(_|~b))+E[15]+4264355552&4294967295,P=_+(I<<10&4294967295|I>>>22),I=b+(_^(P|~T))+E[6]+2734768916&4294967295,b=P+(I<<15&4294967295|I>>>17),I=T+(P^(b|~_))+E[13]+1309151649&4294967295,T=b+(I<<21&4294967295|I>>>11),I=_+(b^(T|~P))+E[4]+4149444226&4294967295,_=T+(I<<6&4294967295|I>>>26),I=P+(T^(_|~b))+E[11]+3174756917&4294967295,P=_+(I<<10&4294967295|I>>>22),I=b+(_^(P|~T))+E[2]+718787259&4294967295,b=P+(I<<15&4294967295|I>>>17),I=T+(P^(b|~_))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+b&4294967295,v.g[3]=v.g[3]+P&4294967295}r.prototype.u=function(v,_){_===void 0&&(_=v.length);for(var T=_-this.blockSize,E=this.B,b=this.h,P=0;P<_;){if(b==0)for(;P<=T;)i(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<_;)if(E[b++]=v.charCodeAt(P++),b==this.blockSize){i(this,E),b=0;break}}else for(;P<_;)if(E[b++]=v[P++],b==this.blockSize){i(this,E),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;var T=8*this.o;for(_=v.length-8;_<v.length;++_)v[_]=T&255,T/=256;for(this.u(v),v=Array(16),_=T=0;4>_;++_)for(var E=0;32>E;E+=8)v[T++]=this.g[_]>>>E&255;return v};function s(v,_){var T=a;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=_(v)}function o(v,_){this.h=_;for(var T=[],E=!0,b=v.length-1;0<=b;b--){var P=v[b]|0;E&&P==_||(T[b]=P,E=!1)}this.g=T}var a={};function c(v){return-128<=v&&128>v?s(v,function(_){return new o([_|0],0>_?-1:0)}):new o([v|0],0>v?-1:0)}function u(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return x(u(-v));for(var _=[],T=1,E=0;v>=T;E++)_[E]=v/T|0,T*=4294967296;return new o(_,0)}function h(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return x(h(v.substring(1),_));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(_,8)),E=p,b=0;b<v.length;b+=8){var P=Math.min(8,v.length-b),I=parseInt(v.substring(b,b+P),_);8>P?(P=u(Math.pow(_,P)),E=E.j(P).add(u(I))):(E=E.j(T),E=E.add(u(I)))}return E}var p=c(0),m=c(1),y=c(16777216);n=o.prototype,n.m=function(){if(R(this))return-x(this).m();for(var v=0,_=1,T=0;T<this.g.length;T++){var E=this.i(T);v+=(0<=E?E:4294967296+E)*_,_*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A(this))return"0";if(R(this))return"-"+x(this).toString(v);for(var _=u(Math.pow(v,6)),T=this,E="";;){var b=F(T,_).g;T=k(T,b.j(_));var P=((0<T.g.length?T.g[0]:T.h)>>>0).toString(v);if(T=b,A(T))return P+E;for(;6>P.length;)P="0"+P;E=P+E}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function A(v){if(v.h!=0)return!1;for(var _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function R(v){return v.h==-1}n.l=function(v){return v=k(this,v),R(v)?-1:A(v)?0:1};function x(v){for(var _=v.g.length,T=[],E=0;E<_;E++)T[E]=~v.g[E];return new o(T,~v.h).add(m)}n.abs=function(){return R(this)?x(this):this},n.add=function(v){for(var _=Math.max(this.g.length,v.g.length),T=[],E=0,b=0;b<=_;b++){var P=E+(this.i(b)&65535)+(v.i(b)&65535),I=(P>>>16)+(this.i(b)>>>16)+(v.i(b)>>>16);E=I>>>16,P&=65535,I&=65535,T[b]=I<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function k(v,_){return v.add(x(_))}n.j=function(v){if(A(this)||A(v))return p;if(R(this))return R(v)?x(this).j(x(v)):x(x(this).j(v));if(R(v))return x(this.j(x(v)));if(0>this.l(y)&&0>v.l(y))return u(this.m()*v.m());for(var _=this.g.length+v.g.length,T=[],E=0;E<2*_;E++)T[E]=0;for(E=0;E<this.g.length;E++)for(var b=0;b<v.g.length;b++){var P=this.i(E)>>>16,I=this.i(E)&65535,re=v.i(b)>>>16,he=v.i(b)&65535;T[2*E+2*b]+=I*he,L(T,2*E+2*b),T[2*E+2*b+1]+=P*he,L(T,2*E+2*b+1),T[2*E+2*b+1]+=I*re,L(T,2*E+2*b+1),T[2*E+2*b+2]+=P*re,L(T,2*E+2*b+2)}for(E=0;E<_;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=_;E<2*_;E++)T[E]=0;return new o(T,0)};function L(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function M(v,_){this.g=v,this.h=_}function F(v,_){if(A(_))throw Error("division by zero");if(A(v))return new M(p,p);if(R(v))return _=F(x(v),_),new M(x(_.g),x(_.h));if(R(_))return _=F(v,x(_)),new M(x(_.g),_.h);if(30<v.g.length){if(R(v)||R(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,E=_;0>=E.l(v);)T=ee(T),E=ee(E);var b=K(T,1),P=K(E,1);for(E=K(E,2),T=K(T,2);!A(E);){var I=P.add(E);0>=I.l(v)&&(b=b.add(T),P=I),E=K(E,1),T=K(T,1)}return _=k(v,b.j(_)),new M(b,_)}for(b=p;0<=v.l(_);){for(T=Math.max(1,Math.floor(v.m()/_.m())),E=Math.ceil(Math.log(T)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),P=u(T),I=P.j(_);R(I)||0<I.l(v);)T-=E,P=u(T),I=P.j(_);A(P)&&(P=m),b=b.add(P),v=k(v,I)}return new M(b,v)}n.A=function(v){return F(this,v).h},n.and=function(v){for(var _=Math.max(this.g.length,v.g.length),T=[],E=0;E<_;E++)T[E]=this.i(E)&v.i(E);return new o(T,this.h&v.h)},n.or=function(v){for(var _=Math.max(this.g.length,v.g.length),T=[],E=0;E<_;E++)T[E]=this.i(E)|v.i(E);return new o(T,this.h|v.h)},n.xor=function(v){for(var _=Math.max(this.g.length,v.g.length),T=[],E=0;E<_;E++)T[E]=this.i(E)^v.i(E);return new o(T,this.h^v.h)};function ee(v){for(var _=v.g.length+1,T=[],E=0;E<_;E++)T[E]=v.i(E)<<1|v.i(E-1)>>>31;return new o(T,v.h)}function K(v,_){var T=_>>5;_%=32;for(var E=v.g.length-T,b=[],P=0;P<E;P++)b[P]=0<_?v.i(P+T)>>>_|v.i(P+T+1)<<32-_:v.i(P+T);return new o(b,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Br=o}).apply(typeof Og<"u"?Og:typeof self<"u"?self:typeof window<"u"?window:{});var Pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var VI,ko,kI,Jl,sd,NI,OI,MI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,f){return l==Array.prototype||l==Object.prototype||(l[d]=f.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pl=="object"&&Pl];for(var d=0;d<l.length;++d){var f=l[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function i(l,d){if(d)e:{var f=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var D=l[g];if(!(D in f))break e;f=f[D]}l=l[l.length-1],g=f[l],d=d(g),d!=g&&d!=null&&e(f,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var f=0,g=!1,D={next:function(){if(!g&&f<l.length){var V=f++;return{value:d(V,l[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,f){return l.call.apply(l.bind,arguments)}function p(l,d,f){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,g),l.apply(d,D)}}return function(){return l.apply(d,arguments)}}function m(l,d,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function y(l,d){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function A(l,d){function f(){}f.prototype=d.prototype,l.aa=d.prototype,l.prototype=new f,l.prototype.constructor=l,l.Qb=function(g,D,V){for(var X=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)X[Be-2]=arguments[Be];return d.prototype[D].apply(g,X)}}function R(l){const d=l.length;if(0<d){const f=Array(d);for(let g=0;g<d;g++)f[g]=l[g];return f}return[]}function x(l,d){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const D=l.length||0,V=g.length||0;l.length=D+V;for(let X=0;X<V;X++)l[D+X]=g[X]}else l.push(g)}}class k{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function L(l){return/^[\s\xa0]*$/.test(l)}function M(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function F(l){return F[" "](l),l}F[" "]=function(){};var ee=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function K(l,d,f){for(const g in l)d.call(f,l[g],g,l)}function v(l,d){for(const f in l)d.call(void 0,l[f],f,l)}function _(l){const d={};for(const f in l)d[f]=l[f];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(l,d){let f,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(f in g)l[f]=g[f];for(let V=0;V<T.length;V++)f=T[V],Object.prototype.hasOwnProperty.call(g,f)&&(l[f]=g[f])}}function b(l){var d=1;l=l.split(":");const f=[];for(;0<d&&l.length;)f.push(l.shift()),d--;return l.length&&f.push(l.join(":")),f}function P(l){a.setTimeout(()=>{throw l},0)}function I(){var l=gt;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class re{constructor(){this.h=this.g=null}add(d,f){const g=he.get();g.set(d,f),this.h?this.h.next=g:this.g=g,this.h=g}}var he=new k(()=>new ye,l=>l.reset());class ye{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,we=!1,gt=new re,fn=()=>{const l=a.Promise.resolve(void 0);ce=()=>{l.then(jn)}};var jn=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(f){P(f)}var d=he;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}we=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var Mu=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const f=()=>{};a.addEventListener("test",f,d),a.removeEventListener("test",f,d)}catch{}return l}();function ti(l,d){if(dt.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var f=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(ee){e:{try{F(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else f=="mouseover"?d=l.fromElement:f=="mouseout"&&(d=l.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ni[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ti.aa.h.call(this)}}A(ti,dt);var ni={2:"touch",3:"pen",4:"mouse"};ti.prototype.h=function(){ti.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var qn="closure_listenable_"+(1e6*Math.random()|0),so=0;function nl(l,d,f,g,D){this.listener=l,this.proxy=null,this.src=d,this.type=f,this.capture=!!g,this.ha=D,this.key=++so,this.da=this.fa=!1}function wn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function oo(l){this.src=l,this.g={},this.h=0}oo.prototype.add=function(l,d,f,g,D){var V=l.toString();l=this.g[V],l||(l=this.g[V]=[],this.h++);var X=S(l,d,g,D);return-1<X?(d=l[X],f||(d.fa=!1)):(d=new nl(d,this.src,V,!!g,D),d.fa=f,l.push(d)),d};function w(l,d){var f=d.type;if(f in l.g){var g=l.g[f],D=Array.prototype.indexOf.call(g,d,void 0),V;(V=0<=D)&&Array.prototype.splice.call(g,D,1),V&&(wn(d),l.g[f].length==0&&(delete l.g[f],l.h--))}}function S(l,d,f,g){for(var D=0;D<l.length;++D){var V=l[D];if(!V.da&&V.listener==d&&V.capture==!!f&&V.ha==g)return D}return-1}var N="closure_lm_"+(1e6*Math.random()|0),q={};function $(l,d,f,g,D){if(Array.isArray(d)){for(var V=0;V<d.length;V++)$(l,d[V],f,g,D);return null}return f=fe(f),l&&l[qn]?l.K(d,f,u(g)?!!g.capture:!1,D):j(l,d,f,!1,g,D)}function j(l,d,f,g,D,V){if(!d)throw Error("Invalid event type");var X=u(D)?!!D.capture:!!D,Be=J(l);if(Be||(l[N]=Be=new oo(l)),f=Be.add(d,f,g,X,V),f.proxy)return f;if(g=Z(),f.proxy=g,g.src=l,g.listener=f,l.addEventListener)Mu||(D=X),D===void 0&&(D=!1),l.addEventListener(d.toString(),g,D);else if(l.attachEvent)l.attachEvent(z(d.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Z(){function l(f){return d.call(l.src,l.listener,f)}const d=oe;return l}function Q(l,d,f,g,D){if(Array.isArray(d))for(var V=0;V<d.length;V++)Q(l,d[V],f,g,D);else g=u(g)?!!g.capture:!!g,f=fe(f),l&&l[qn]?(l=l.i,d=String(d).toString(),d in l.g&&(V=l.g[d],f=S(V,f,g,D),-1<f&&(wn(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete l.g[d],l.h--)))):l&&(l=J(l))&&(d=l.g[d.toString()],l=-1,d&&(l=S(d,f,g,D)),(f=-1<l?d[l]:null)&&H(f))}function H(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[qn])w(d.i,l);else{var f=l.type,g=l.proxy;d.removeEventListener?d.removeEventListener(f,g,l.capture):d.detachEvent?d.detachEvent(z(f),g):d.addListener&&d.removeListener&&d.removeListener(g),(f=J(d))?(w(f,l),f.h==0&&(f.src=null,d[N]=null)):wn(l)}}}function z(l){return l in q?q[l]:q[l]="on"+l}function oe(l,d){if(l.da)l=!0;else{d=new ti(d,this);var f=l.listener,g=l.ha||l.src;l.fa&&H(l),l=f.call(g,d)}return l}function J(l){return l=l[N],l instanceof oo?l:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function fe(l){return typeof l=="function"?l:(l[se]||(l[se]=function(d){return l.handleEvent(d)}),l[se])}function ue(){ht.call(this),this.i=new oo(this),this.M=this,this.F=null}A(ue,ht),ue.prototype[qn]=!0,ue.prototype.removeEventListener=function(l,d,f,g){Q(this,l,d,f,g)};function ve(l,d){var f,g=l.F;if(g)for(f=[];g;g=g.F)f.push(g);if(l=l.M,g=d.type||d,typeof d=="string")d=new dt(d,l);else if(d instanceof dt)d.target=d.target||l;else{var D=d;d=new dt(g,l),E(d,D)}if(D=!0,f)for(var V=f.length-1;0<=V;V--){var X=d.g=f[V];D=Pe(X,g,!0,d)&&D}if(X=d.g=l,D=Pe(X,g,!0,d)&&D,D=Pe(X,g,!1,d)&&D,f)for(V=0;V<f.length;V++)X=d.g=f[V],D=Pe(X,g,!1,d)&&D}ue.prototype.N=function(){if(ue.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var f=l.g[d],g=0;g<f.length;g++)wn(f[g]);delete l.g[d],l.h--}}this.F=null},ue.prototype.K=function(l,d,f,g){return this.i.add(String(l),d,!1,f,g)},ue.prototype.L=function(l,d,f,g){return this.i.add(String(l),d,!0,f,g)};function Pe(l,d,f,g){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,V=0;V<d.length;++V){var X=d[V];if(X&&!X.da&&X.capture==f){var Be=X.listener,Et=X.ha||X.src;X.fa&&w(l.i,X),D=Be.call(Et,g)!==!1&&D}}return D&&!g.defaultPrevented}function yt(l,d,f){if(typeof l=="function")f&&(l=m(l,f));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function vt(l){l.g=yt(()=>{l.g=null,l.i&&(l.i=!1,vt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class an extends ht{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:vt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(l){ht.call(this),this.h=l,this.g={}}A(At,ht);var _r=[];function ao(l){K(l.g,function(d,f){this.g.hasOwnProperty(f)&&H(d)},l),l.g={}}At.prototype.N=function(){At.aa.N.call(this),ao(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var It=a.JSON.stringify,ln=a.JSON.parse,rl=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Lu(){}Lu.prototype.h=null;function _p(l){return l.h||(l.h=l.i())}function yp(){}var lo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fu(){dt.call(this,"d")}A(Fu,dt);function Uu(){dt.call(this,"c")}A(Uu,dt);var ri={},vp=null;function il(){return vp=vp||new ue}ri.La="serverreachability";function Ip(l){dt.call(this,ri.La,l)}A(Ip,dt);function co(l){const d=il();ve(d,new Ip(d))}ri.STAT_EVENT="statevent";function Ep(l,d){dt.call(this,ri.STAT_EVENT,l),this.stat=d}A(Ep,dt);function Ft(l){const d=il();ve(d,new Ep(d,l))}ri.Ma="timingevent";function Tp(l,d){dt.call(this,ri.Ma,l),this.size=d}A(Tp,dt);function uo(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function ho(){this.g=!0}ho.prototype.xa=function(){this.g=!1};function aw(l,d,f,g,D,V){l.info(function(){if(l.g)if(V)for(var X="",Be=V.split("&"),Et=0;Et<Be.length;Et++){var xe=Be[Et].split("=");if(1<xe.length){var St=xe[0];xe=xe[1];var Rt=St.split("_");X=2<=Rt.length&&Rt[1]=="type"?X+(St+"="+xe+"&"):X+(St+"=redacted&")}}else X=null;else X=V;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+d+`
`+f+`
`+X})}function lw(l,d,f,g,D,V,X){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+d+`
`+f+`
`+V+" "+X})}function qi(l,d,f,g){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+uw(l,f)+(g?" "+g:"")})}function cw(l,d){l.info(function(){return"TIMEOUT: "+d})}ho.prototype.info=function(){};function uw(l,d){if(!l.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(l=0;l<f.length;l++)if(Array.isArray(f[l])){var g=f[l];if(!(2>g.length)){var D=g[1];if(Array.isArray(D)&&!(1>D.length)){var V=D[0];if(V!="noop"&&V!="stop"&&V!="close")for(var X=1;X<D.length;X++)D[X]=""}}}}return It(f)}catch{return d}}var sl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bu;function ol(){}A(ol,Lu),ol.prototype.g=function(){return new XMLHttpRequest},ol.prototype.i=function(){return{}},Bu=new ol;function yr(l,d,f,g){this.j=l,this.i=d,this.l=f,this.R=g||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bp}function bp(){this.i=null,this.g="",this.h=!1}var Ap={},$u={};function ju(l,d,f){l.L=1,l.v=ul(zn(d)),l.m=f,l.P=!0,Sp(l,null)}function Sp(l,d){l.F=Date.now(),al(l),l.A=zn(l.v);var f=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),Bp(f.i,"t",g),l.C=0,f=l.j.J,l.h=new bp,l.g=im(l.j,f?d:null,!l.m),0<l.O&&(l.M=new an(m(l.Y,l,l.g),l.O)),d=l.U,f=l.g,g=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(_r[0]=D.toString()),D=_r);for(var V=0;V<D.length;V++){var X=$(f,D[V],g||d.handleEvent,!1,d.h||d);if(!X)break;d.g[X.key]=X}d=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),co(),aw(l.i,l.u,l.A,l.l,l.R,l.m)}yr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Kn(l)==3?d.j():this.Y(l)},yr.prototype.Y=function(l){try{if(l==this.g)e:{const Rt=Kn(this.g);var d=this.g.Ba();const Gi=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Hp(this.g)))){this.J||Rt!=4||d==7||(d==8||0>=Gi?co(3):co(2)),qu(this);var f=this.g.Z();this.X=f;t:if(Rp(this)){var g=Hp(this.g);l="";var D=g.length,V=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ii(this),fo(this);var X="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,l+=this.h.i.decode(g[d],{stream:!(V&&d==D-1)});g.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=f==200,lw(this.i,this.u,this.A,this.l,this.R,Rt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,Et=this.g;if((Be=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Be)){var xe=Be;break t}}xe=null}if(f=xe)qi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zu(this,f);else{this.o=!1,this.s=3,Ft(12),ii(this),fo(this);break e}}if(this.P){f=!0;let pn;for(;!this.J&&this.C<X.length;)if(pn=hw(this,X),pn==$u){Rt==4&&(this.s=4,Ft(14),f=!1),qi(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==Ap){this.s=4,Ft(15),qi(this.i,this.l,X,"[Invalid Chunk]"),f=!1;break}else qi(this.i,this.l,pn,null),zu(this,pn);if(Rp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||X.length!=0||this.h.h||(this.s=1,Ft(16),f=!1),this.o=this.o&&f,!f)qi(this.i,this.l,X,"[Invalid Chunked Response]"),ii(this),fo(this);else if(0<X.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Xu(St),St.M=!0,Ft(11))}}else qi(this.i,this.l,X,null),zu(this,X);Rt==4&&ii(this),this.o&&!this.J&&(Rt==4?em(this.j,this):(this.o=!1,al(this)))}else Pw(this.g),f==400&&0<X.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),ii(this),fo(this)}}}catch{}finally{}};function Rp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function hw(l,d){var f=l.C,g=d.indexOf(`
`,f);return g==-1?$u:(f=Number(d.substring(f,g)),isNaN(f)?Ap:(g+=1,g+f>d.length?$u:(d=d.slice(g,g+f),l.C=g+f,d)))}yr.prototype.cancel=function(){this.J=!0,ii(this)};function al(l){l.S=Date.now()+l.I,Pp(l,l.I)}function Pp(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=uo(m(l.ba,l),d)}function qu(l){l.B&&(a.clearTimeout(l.B),l.B=null)}yr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(cw(this.i,this.A),this.L!=2&&(co(),Ft(17)),ii(this),this.s=2,fo(this)):Pp(this,this.S-l)};function fo(l){l.j.G==0||l.J||em(l.j,l)}function ii(l){qu(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,ao(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function zu(l,d){try{var f=l.j;if(f.G!=0&&(f.g==l||Ku(f.h,l))){if(!l.K&&Ku(f.h,l)&&f.G==3){try{var g=f.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<l.F)gl(f),pl(f);else break e;Qu(f),Ft(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=uo(m(f.Za,f),6e3));if(1>=xp(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else oi(f,11)}else if((l.K||f.g==l)&&gl(f),!L(d))for(D=f.Da.g.parse(d),d=0;d<D.length;d++){let xe=D[d];if(f.T=xe[0],xe=xe[1],f.G==2)if(xe[0]=="c"){f.K=xe[1],f.ia=xe[2];const St=xe[3];St!=null&&(f.la=St,f.j.info("VER="+f.la));const Rt=xe[4];Rt!=null&&(f.Aa=Rt,f.j.info("SVER="+f.Aa));const Gi=xe[5];Gi!=null&&typeof Gi=="number"&&0<Gi&&(g=1.5*Gi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const pn=l.g;if(pn){const yl=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yl){var V=g.h;V.g||yl.indexOf("spdy")==-1&&yl.indexOf("quic")==-1&&yl.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Gu(V,V.h),V.h=null))}if(g.D){const Yu=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;Yu&&(g.ya=Yu,Ke(g.I,g.D,Yu))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-l.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var X=l;if(g.qa=rm(g,g.J?g.ia:null,g.W),X.K){Vp(g.h,X);var Be=X,Et=g.L;Et&&(Be.I=Et),Be.B&&(qu(Be),al(Be)),g.g=X}else Jp(g);0<f.i.length&&ml(f)}else xe[0]!="stop"&&xe[0]!="close"||oi(f,7);else f.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?oi(f,7):Wu(f):xe[0]!="noop"&&f.l&&f.l.ta(xe),f.v=0)}}co(4)}catch{}}var dw=class{constructor(l,d){this.g=l,this.map=d}};function Cp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function xp(l){return l.h?1:l.g?l.g.size:0}function Ku(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Gu(l,d){l.g?l.g.add(d):l.h=d}function Vp(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Cp.prototype.cancel=function(){if(this.i=kp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function kp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const f of l.g.values())d=d.concat(f.D);return d}return R(l.i)}function fw(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],f=l.length,g=0;g<f;g++)d.push(l[g]);return d}d=[],f=0;for(g in l)d[f++]=l[g];return d}function pw(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var f=0;f<l;f++)d.push(f);return d}d=[],f=0;for(const g in l)d[f++]=g;return d}}}function Np(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var f=pw(l),g=fw(l),D=g.length,V=0;V<D;V++)d.call(void 0,g[V],f&&f[V],l)}var Op=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mw(l,d){if(l){l=l.split("&");for(var f=0;f<l.length;f++){var g=l[f].indexOf("="),D=null;if(0<=g){var V=l[f].substring(0,g);D=l[f].substring(g+1)}else V=l[f];d(V,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function si(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof si){this.h=l.h,ll(this,l.j),this.o=l.o,this.g=l.g,cl(this,l.s),this.l=l.l;var d=l.i,f=new go;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),Mp(this,f),this.m=l.m}else l&&(d=String(l).match(Op))?(this.h=!1,ll(this,d[1]||"",!0),this.o=po(d[2]||""),this.g=po(d[3]||"",!0),cl(this,d[4]),this.l=po(d[5]||"",!0),Mp(this,d[6]||"",!0),this.m=po(d[7]||"")):(this.h=!1,this.i=new go(null,this.h))}si.prototype.toString=function(){var l=[],d=this.j;d&&l.push(mo(d,Lp,!0),":");var f=this.g;return(f||d=="file")&&(l.push("//"),(d=this.o)&&l.push(mo(d,Lp,!0),"@"),l.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&l.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&l.push("/"),l.push(mo(f,f.charAt(0)=="/"?yw:_w,!0))),(f=this.i.toString())&&l.push("?",f),(f=this.m)&&l.push("#",mo(f,Iw)),l.join("")};function zn(l){return new si(l)}function ll(l,d,f){l.j=f?po(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function cl(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Mp(l,d,f){d instanceof go?(l.i=d,Ew(l.i,l.h)):(f||(d=mo(d,vw)),l.i=new go(d,l.h))}function Ke(l,d,f){l.i.set(d,f)}function ul(l){return Ke(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function po(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function mo(l,d,f){return typeof l=="string"?(l=encodeURI(l).replace(d,gw),f&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function gw(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Lp=/[#\/\?@]/g,_w=/[#\?:]/g,yw=/[#\?]/g,vw=/[#\?@]/g,Iw=/#/g;function go(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function vr(l){l.g||(l.g=new Map,l.h=0,l.i&&mw(l.i,function(d,f){l.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}n=go.prototype,n.add=function(l,d){vr(this),this.i=null,l=zi(this,l);var f=this.g.get(l);return f||this.g.set(l,f=[]),f.push(d),this.h+=1,this};function Fp(l,d){vr(l),d=zi(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Up(l,d){return vr(l),d=zi(l,d),l.g.has(d)}n.forEach=function(l,d){vr(this),this.g.forEach(function(f,g){f.forEach(function(D){l.call(d,D,g,this)},this)},this)},n.na=function(){vr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let g=0;g<d.length;g++){const D=l[g];for(let V=0;V<D.length;V++)f.push(d[g])}return f},n.V=function(l){vr(this);let d=[];if(typeof l=="string")Up(this,l)&&(d=d.concat(this.g.get(zi(this,l))));else{l=Array.from(this.g.values());for(let f=0;f<l.length;f++)d=d.concat(l[f])}return d},n.set=function(l,d){return vr(this),this.i=null,l=zi(this,l),Up(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},n.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Bp(l,d,f){Fp(l,d),0<f.length&&(l.i=null,l.g.set(zi(l,d),R(f)),l.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var g=d[f];const V=encodeURIComponent(String(g)),X=this.V(g);for(g=0;g<X.length;g++){var D=V;X[g]!==""&&(D+="="+encodeURIComponent(String(X[g]))),l.push(D)}}return this.i=l.join("&")};function zi(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function Ew(l,d){d&&!l.j&&(vr(l),l.i=null,l.g.forEach(function(f,g){var D=g.toLowerCase();g!=D&&(Fp(this,g),Bp(this,D,f))},l)),l.j=d}function Tw(l,d){const f=new ho;if(a.Image){const g=new Image;g.onload=y(Ir,f,"TestLoadImage: loaded",!0,d,g),g.onerror=y(Ir,f,"TestLoadImage: error",!1,d,g),g.onabort=y(Ir,f,"TestLoadImage: abort",!1,d,g),g.ontimeout=y(Ir,f,"TestLoadImage: timeout",!1,d,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else d(!1)}function ww(l,d){const f=new ho,g=new AbortController,D=setTimeout(()=>{g.abort(),Ir(f,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:g.signal}).then(V=>{clearTimeout(D),V.ok?Ir(f,"TestPingServer: ok",!0,d):Ir(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Ir(f,"TestPingServer: error",!1,d)})}function Ir(l,d,f,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(f)}catch{}}function bw(){this.g=new rl}function Aw(l,d,f){const g=f||"";try{Np(l,function(D,V){let X=D;u(D)&&(X=It(D)),d.push(g+V+"="+encodeURIComponent(X))})}catch(D){throw d.push(g+"type="+encodeURIComponent("_badmap")),D}}function hl(l){this.l=l.Ub||null,this.j=l.eb||!1}A(hl,Lu),hl.prototype.g=function(){return new dl(this.l,this.j)},hl.prototype.i=function(l){return function(){return l}}({});function dl(l,d){ue.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(dl,ue),n=dl.prototype,n.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,yo(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_o(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,yo(this)),this.g&&(this.readyState=3,yo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$p(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function $p(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?_o(this):yo(this),this.readyState==3&&$p(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,_o(this))},n.Qa=function(l){this.g&&(this.response=l,_o(this))},n.ga=function(){this.g&&_o(this)};function _o(l){l.readyState=4,l.l=null,l.j=null,l.v=null,yo(l)}n.setRequestHeader=function(l,d){this.u.append(l,d)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,l.push(f[0]+": "+f[1]),f=d.next();return l.join(`\r
`)};function yo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(dl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function jp(l){let d="";return K(l,function(f,g){d+=g,d+=":",d+=f,d+=`\r
`}),d}function Hu(l,d,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=jp(f),typeof l=="string"?f!=null&&encodeURIComponent(String(f)):Ke(l,d,f))}function Ye(l){ue.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ye,ue);var Sw=/^https?$/i,Rw=["POST","PUT"];n=Ye.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,d,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bu.g(),this.v=this.o?_p(this.o):_p(Bu),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(V){qp(this,V);return}if(l=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)f.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Rw,d,void 0))||g||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,X]of f)this.g.setRequestHeader(V,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gp(this),this.u=!0,this.g.send(l),this.u=!1}catch(V){qp(this,V)}};function qp(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,zp(l),fl(l)}function zp(l){l.A||(l.A=!0,ve(l,"complete"),ve(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ve(this,"complete"),ve(this,"abort"),fl(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fl(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Kp(this):this.bb())},n.bb=function(){Kp(this)};function Kp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Kn(l)!=4||l.Z()!=2)){if(l.u&&Kn(l)==4)yt(l.Ea,0,l);else if(ve(l,"readystatechange"),Kn(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var g;if(g=X===0){var D=String(l.D).match(Op)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),g=!Sw.test(D?D.toLowerCase():"")}f=g}if(f)ve(l,"complete"),ve(l,"success");else{l.m=6;try{var V=2<Kn(l)?l.g.statusText:""}catch{V=""}l.l=V+" ["+l.Z()+"]",zp(l)}}finally{fl(l)}}}}function fl(l,d){if(l.g){Gp(l);const f=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||ve(l,"ready");try{f.onreadystatechange=g}catch{}}}function Gp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function Kn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),ln(d)}};function Hp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Pw(l){const d={};l=(l.g&&2<=Kn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(L(l[g]))continue;var f=b(l[g]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=d[D]||[];d[D]=V,V.push(f)}v(d,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vo(l,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[l]||d}function Wp(l){this.Aa=0,this.i=[],this.j=new ho,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vo("baseRetryDelayMs",5e3,l),this.cb=vo("retryDelaySeedMs",1e4,l),this.Wa=vo("forwardChannelMaxRetries",2,l),this.wa=vo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Cp(l&&l.concurrentRequestLimit),this.Da=new bw,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Wp.prototype,n.la=8,n.G=1,n.connect=function(l,d,f,g){Ft(0),this.W=l,this.H=d||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=rm(this,null,this.W),ml(this)};function Wu(l){if(Qp(l),l.G==3){var d=l.U++,f=zn(l.I);if(Ke(f,"SID",l.K),Ke(f,"RID",d),Ke(f,"TYPE","terminate"),Io(l,f),d=new yr(l,l.j,d),d.L=2,d.v=ul(zn(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&a.Image&&(new Image().src=d.v,f=!0),f||(d.g=im(d.j,null),d.g.ea(d.v)),d.F=Date.now(),al(d)}nm(l)}function pl(l){l.g&&(Xu(l),l.g.cancel(),l.g=null)}function Qp(l){pl(l),l.u&&(a.clearTimeout(l.u),l.u=null),gl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ml(l){if(!Dp(l.h)&&!l.s){l.s=!0;var d=l.Ga;ce||fn(),we||(ce(),we=!0),gt.add(d,l),l.B=0}}function Cw(l,d){return xp(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=uo(m(l.Ga,l,d),tm(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new yr(this,this.j,l);let V=this.o;if(this.S&&(V?(V=_(V),E(V,this.S)):V=this.S),this.m!==null||this.O||(D.H=V,V=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Yp(this,D,d),f=zn(this.I),Ke(f,"RID",l),Ke(f,"CVER",22),this.D&&Ke(f,"X-HTTP-Session-Id",this.D),Io(this,f),V&&(this.O?d="headers="+encodeURIComponent(String(jp(V)))+"&"+d:this.m&&Hu(f,this.m,V)),Gu(this.h,D),this.Ua&&Ke(f,"TYPE","init"),this.P?(Ke(f,"$req",d),Ke(f,"SID","null"),D.T=!0,ju(D,f,null)):ju(D,f,d),this.G=2}}else this.G==3&&(l?Xp(this,l):this.i.length==0||Dp(this.h)||Xp(this))};function Xp(l,d){var f;d?f=d.l:f=l.U++;const g=zn(l.I);Ke(g,"SID",l.K),Ke(g,"RID",f),Ke(g,"AID",l.T),Io(l,g),l.m&&l.o&&Hu(g,l.m,l.o),f=new yr(l,l.j,f,l.B+1),l.m===null&&(f.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Yp(l,f,1e3),f.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Gu(l.h,f),ju(f,g,d)}function Io(l,d){l.H&&K(l.H,function(f,g){Ke(d,g,f)}),l.l&&Np({},function(f,g){Ke(d,g,f)})}function Yp(l,d,f){f=Math.min(l.i.length,f);var g=l.l?m(l.l.Na,l.l,l):null;e:{var D=l.i;let V=-1;for(;;){const X=["count="+f];V==-1?0<f?(V=D[0].g,X.push("ofs="+V)):V=0:X.push("ofs="+V);let Be=!0;for(let Et=0;Et<f;Et++){let xe=D[Et].g;const St=D[Et].map;if(xe-=V,0>xe)V=Math.max(0,D[Et].g-100),Be=!1;else try{Aw(St,X,"req"+xe+"_")}catch{g&&g(St)}}if(Be){g=X.join("&");break e}}}return l=l.i.splice(0,f),d.D=l,g}function Jp(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;ce||fn(),we||(ce(),we=!0),gt.add(d,l),l.v=0}}function Qu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=uo(m(l.Fa,l),tm(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,Zp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=uo(m(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ft(10),pl(this),Zp(this))};function Xu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Zp(l){l.g=new yr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=zn(l.qa);Ke(d,"RID","rpc"),Ke(d,"SID",l.K),Ke(d,"AID",l.T),Ke(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ke(d,"TO",l.ja),Ke(d,"TYPE","xmlhttp"),Io(l,d),l.m&&l.o&&Hu(d,l.m,l.o),l.L&&(l.g.I=l.L);var f=l.g;l=l.ia,f.L=1,f.v=ul(zn(d)),f.m=null,f.P=!0,Sp(f,l)}n.Za=function(){this.C!=null&&(this.C=null,pl(this),Qu(this),Ft(19))};function gl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function em(l,d){var f=null;if(l.g==d){gl(l),Xu(l),l.g=null;var g=2}else if(Ku(l.h,d))f=d.D,Vp(l.h,d),g=1;else return;if(l.G!=0){if(d.o)if(g==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var D=l.B;g=il(),ve(g,new Tp(g,f)),ml(l)}else Jp(l);else if(D=d.s,D==3||D==0&&0<d.X||!(g==1&&Cw(l,d)||g==2&&Qu(l)))switch(f&&0<f.length&&(d=l.h,d.i=d.i.concat(f)),D){case 1:oi(l,5);break;case 4:oi(l,10);break;case 3:oi(l,6);break;default:oi(l,2)}}}function tm(l,d){let f=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(f*=2),f*d}function oi(l,d){if(l.j.info("Error code "+d),d==2){var f=m(l.fb,l),g=l.Xa;const D=!g;g=new si(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ll(g,"https"),ul(g),D?Tw(g.toString(),f):ww(g.toString(),f)}else Ft(2);l.G=0,l.l&&l.l.sa(d),nm(l),Qp(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function nm(l){if(l.G=0,l.ka=[],l.l){const d=kp(l.h);(d.length!=0||l.i.length!=0)&&(x(l.ka,d),x(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function rm(l,d,f){var g=f instanceof si?zn(f):new si(f);if(g.g!="")d&&(g.g=d+"."+g.g),cl(g,g.s);else{var D=a.location;g=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var V=new si(null);g&&ll(V,g),d&&(V.g=d),D&&cl(V,D),f&&(V.l=f),g=V}return f=l.D,d=l.ya,f&&d&&Ke(g,f,d),Ke(g,"VER",l.la),Io(l,g),g}function im(l,d,f){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ye(new hl({eb:f})):new Ye(l.pa),d.Ha(l.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sm(){}n=sm.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _l(){}_l.prototype.g=function(l,d){return new Wt(l,d)};function Wt(l,d){ue.call(this),this.g=new Wp(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!L(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!L(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Ki(this)}A(Wt,ue),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){Wu(this.g)},Wt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var f={};f.__data__=l,l=f}else this.u&&(f={},f.__data__=It(l),l=f);d.i.push(new dw(d.Ya++,l)),d.G==3&&ml(d)},Wt.prototype.N=function(){this.g.l=null,delete this.j,Wu(this.g),delete this.g,Wt.aa.N.call(this)};function om(l){Fu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const f in d){l=f;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}A(om,Fu);function am(){Uu.call(this),this.status=1}A(am,Uu);function Ki(l){this.g=l}A(Ki,sm),Ki.prototype.ua=function(){ve(this.g,"a")},Ki.prototype.ta=function(l){ve(this.g,new om(l))},Ki.prototype.sa=function(l){ve(this.g,new am)},Ki.prototype.ra=function(){ve(this.g,"b")},_l.prototype.createWebChannel=_l.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,MI=function(){return new _l},OI=function(){return il()},NI=ri,sd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sl.NO_ERROR=0,sl.TIMEOUT=8,sl.HTTP_ERROR=6,Jl=sl,wp.COMPLETE="complete",kI=wp,yp.EventType=lo,lo.OPEN="a",lo.CLOSE="b",lo.ERROR="c",lo.MESSAGE="d",ue.prototype.listen=ue.prototype.K,ko=yp,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,VI=Ye}).apply(typeof Pl<"u"?Pl:typeof self<"u"?self:typeof window<"u"?window:{});const Mg="@firebase/firestore",Lg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new of("@firebase/firestore");function is(){return ki.logLevel}function B(n,...e){if(ki.logLevel<=Ae.DEBUG){const t=e.map(If);ki.debug(`Firestore (${Zs}): ${n}`,...t)}}function tt(n,...e){if(ki.logLevel<=Ae.ERROR){const t=e.map(If);ki.error(`Firestore (${Zs}): ${n}`,...t)}}function Gr(n,...e){if(ki.logLevel<=Ae.WARN){const t=e.map(If);ki.warn(`Firestore (${Zs}): ${n}`,...t)}}function If(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,LI(n,r,t)}function LI(n,e,t){let r=`FIRESTORE (${Zs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw tt(r),new Error(r)}function ie(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||LI(e,i,r)}function ne(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends pr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Dt.UNAUTHENTICATED))}shutdown(){}}class wD{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ie(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rr)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string",31837,{l:r}),new ED(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string",2055,{h:e}),new Dt(e)}}class bD{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class AD{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new bD(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SD{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ie(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Fg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ie(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Fg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=RD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function de(n,e){return n<e?-1:n>e?1:0}function od(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return de(r,i);{const s=FI(),o=PD(s.encode(Ug(n,t)),s.encode(Ug(e,t)));return o!==0?o:de(r,i)}}t+=r>65535?2:1}return de(n.length,e.length)}function Ug(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function PD(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return de(n[t],e[t]);return de(n.length,e.length)}function xs(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function UI(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="__name__";class Rn{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Rn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Rn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Rn.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return de(e.length,t.length)}static compareSegments(e,t){const r=Rn.isNumericId(e),i=Rn.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Rn.extractNumericId(e).compare(Rn.extractNumericId(t)):od(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Br.fromString(e.substring(4,e.length-2))}}class Ne extends Rn{construct(e,t,r){return new Ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Ne(t)}static emptyPath(){return new Ne([])}}const CD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Rn{construct(e,t,r){return new Xe(e,t,r)}static isValidIdentifier(e){return CD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bg}static keyField(){return new Xe([Bg])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(t)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ne.fromString(e))}static fromName(e){return new Y(Ne.fromString(e).popFirst(5))}static empty(){return new Y(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ne(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(n,e,t){if(!t)throw new G(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function DD(n,e,t,r){if(e===!0&&r===!0)throw new G(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function $g(n){if(!Y.isDocumentKey(n))throw new G(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function jg(n){if(Y.isDocumentKey(n))throw new G(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function $I(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function mu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te(12329,{type:typeof n})}function dn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mu(n);throw new G(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n,e){const t={typeString:n};return e&&(t.value=e),t}function qa(n,e){if(!$I(n))throw new G(O.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new G(O.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=-62135596800,zg=1e6;class Le{static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*zg);return new Le(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qg)throw new G(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zg}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qa(e,Le._jsonSchema))return new Le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Le._jsonSchemaVersion="firestore/timestamp/1.0",Le._jsonSchema={type:at("string",Le._jsonSchemaVersion),seconds:at("number"),nanoseconds:at("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Le(0,0))}static max(){return new ae(new Le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=-1;class Mc{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function ad(n){return n.fields.find(e=>e.kind===2)}function gi(n){return n.fields.filter(e=>e.kind!==2)}Mc.UNKNOWN_ID=-1;class Zl{constructor(e,t){this.fieldPath=e,this.kind=t}}class ga{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ga(0,on.min())}}function jI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new Le(t+1,0):new Le(t,r));return new on(i,Y.empty(),e)}function qI(n){return new on(n.readTime,n.key,Vs)}class on{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new on(ae.min(),Y.empty(),Vs)}static max(){return new on(ae.max(),Y.empty(),Vs)}}function Tf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:de(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==zI)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(i=>i?C.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,t){return new C((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="SimpleDb";class gu{static open(e,t,r,i){try{return new gu(t,e.transaction(i,r))}catch(s){throw new Jo(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new rr,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Jo(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=wf(r.target.error);this.S.reject(new Jo(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(B(Zt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new VD(t)}}class $r{static delete(e){return B(Zt,"Removing database:",e),yi(jv().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Qv())return!1;if($r.F())return!0;const e=pt(),t=$r.M(e),r=0<t&&t<10,i=GI(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,$r.M(pt())===12.2&&tt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(B(Zt,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Jo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new G(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new G(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Jo(e,o))},i.onupgradeneeded=s=>{B(Zt,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;if(this.L!==null&&this.L!==s.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${s.oldVersion}, event.newVersion=${s.newVersion}, db.version=${o.version}`);this.B.q(o,i.transaction,s.oldVersion,this.version).next(()=>{B(Zt,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const r=t.target;this.L=r.version},{passive:!0})),this.db.addEventListener("versionchange",t=>{var r;t.newVersion===null&&(Gr('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(r=this.databaseDeletedListener)===null||r===void 0||r.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const a=gu.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.v(),u)).catch(u=>(a.abort(u),C.reject(u))).toPromise();return c.catch(()=>{}),await a.D,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(B(Zt,"Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function GI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class xD{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return yi(this.$.delete())}}class Jo extends G{constructor(e,t){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Jr(n){return n.name==="IndexedDbTransactionError"}class VD{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(B(Zt,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(B(Zt,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),yi(r)}add(e){return B(Zt,"ADD",this.store.name,e,e),yi(this.store.add(e))}get(e){return yi(this.store.get(e)).next(t=>(t===void 0&&(t=null),B(Zt,"GET",this.store.name,e,t),t))}delete(e){return B(Zt,"DELETE",this.store.name,e),yi(this.store.delete(e))}count(){return B(Zt,"COUNT",this.store.name),yi(this.store.count())}j(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new C((o,a)=>{s.onerror=c=>{a(c.target.error)},s.onsuccess=c=>{o(c.target.result)}})}{const s=this.cursor(r),o=[];return this.J(s,(a,c)=>{o.push(c)}).next(()=>o)}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new C((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,t){B(Zt,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Z=!1;const i=this.cursor(r);return this.J(i,(s,o,a)=>a.delete())}X(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.J(i,t)}ee(e){const t=this.cursor({});return new C((r,i)=>{t.onerror=s=>{const o=wf(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}J(e,t){const r=[];return new C((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new xD(a),u=t(a.primaryKey,a.value,c);if(u instanceof C){const h=u.catch(p=>(c.done(),C.reject(p)));r.push(h)}c.isDone?i():c.W===null?a.continue():a.continue(c.W)}}).next(()=>C.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function yi(n){return new C((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=wf(r.target.error);t(i)}})}let Kg=!1;function wf(n){const e=$r.M(pt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new G("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Kg||(Kg=!0,setTimeout(()=>{throw r},0)),r}}return n}const Zo="IndexBackfiller";class kD{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){B(Zo,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.te.re();B(Zo,`Documents written: ${t}`)}catch(t){Jr(t)?B(Zo,"Ignoring IndexedDB error during index backfill: ",t):await Yr(t)}await this.ne(6e4)})}}class ND{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ie(t,e))}ie(e,t){const r=new Set;let i=t,s=!0;return C.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return B(Zo,`Processing collection: ${o}`),this.se(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}se(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.oe(i,s)).next(a=>(B(Zo,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}oe(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=qI(s);Tf(o,r)>0&&(r=o)}),new on(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Gt.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=-1;function _u(n){return n==null}function _a(n){return n===0&&1/n==-1/0}function HI(n){return typeof n=="number"&&Number.isInteger(n)&&!_a(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="";function Mt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Gg(e)),e=OD(n.get(t),e);return Gg(e)}function OD(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Lc:t+="";break;default:t+=s}}return t}function Gg(n){return n+Lc+""}function Dn(n){const e=n.length;if(ie(e>=2,64408,{path:n}),e===2)return ie(n.charAt(0)===Lc&&n.charAt(1)==="",56145,{path:n}),Ne.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf(Lc,s);switch((o<0||o>t)&&te(50515,{path:n}),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:te(61167,{path:n})}s=o+2}return new Ne(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="remoteDocuments",za="owner",Xi="owner",ya="mutationQueues",MD="userId",_n="mutations",Hg="batchId",wi="userMutationsIndex",Wg=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n,e){return[n,Mt(e)]}function WI(n,e,t){return[n,Mt(e),t]}const LD={},ks="documentMutations",Fc="remoteDocumentsV14",FD=["prefixPath","collectionGroup","readTime","documentId"],tc="documentKeyIndex",UD=["prefixPath","collectionGroup","documentId"],QI="collectionGroupIndex",BD=["collectionGroup","readTime","prefixPath","documentId"],va="remoteDocumentGlobal",ld="remoteDocumentGlobalKey",Ns="targets",XI="queryTargetsIndex",$D=["canonicalId","targetId"],Os="targetDocuments",jD=["targetId","path"],bf="documentTargetsIndex",qD=["path","targetId"],Uc="targetGlobalKey",Ri="targetGlobal",Ia="collectionParents",zD=["collectionId","parent"],Ms="clientMetadata",KD="clientId",yu="bundles",GD="bundleId",vu="namedQueries",HD="name",Af="indexConfiguration",WD="indexId",cd="collectionGroupIndex",QD="collectionGroup",ea="indexState",XD=["indexId","uid"],YI="sequenceNumberIndex",YD=["uid","sequenceNumber"],ta="indexEntries",JD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],JI="documentKeyIndex",ZD=["indexId","uid","orderedDocumentKey"],Iu="documentOverlays",ex=["userId","collectionPath","documentId"],ud="collectionPathOverlayIndex",tx=["userId","collectionPath","largestBatchId"],ZI="collectionGroupOverlayIndex",nx=["userId","collectionGroup","largestBatchId"],Sf="globals",rx="name",eE=[ya,_n,ks,_i,Ns,za,Ri,Os,Ms,va,Ia,yu,vu],ix=[...eE,Iu],tE=[ya,_n,ks,Fc,Ns,za,Ri,Os,Ms,va,Ia,yu,vu,Iu],nE=tE,Rf=[...nE,Af,ea,ta],sx=Rf,rE=[...Rf,Sf],ox=rE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd extends KI{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function mt(n,e){const t=ne(n);return $r.N(t.ce,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function iE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){this.comparator=e,this.root=t||wt.EMPTY}insert(e,t){return new ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cl(this.root,e,this.comparator,!0)}}class Cl{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??wt.RED,this.left=i??wt.EMPTY,this.right=s??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new wt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return wt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new wt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xg(this.data.getIterator())}getIteratorFrom(e){return new Xg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ue(this.comparator);return t.data=e,t}}class Xg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Yi(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Ht([])}unionWith(e){let t=new Ue(Xe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ht(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new sE("Invalid base64 string: "+s):s}}(e);return new nt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const ax=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(n){if(ie(!!n,39018),typeof n=="string"){let e=0;const t=ax.exec(n);if(ie(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(n.seconds),nanos:We(n.nanos)}}function We(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ur(n){return typeof n=="string"?nt.fromBase64String(n):nt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="server_timestamp",aE="__type__",lE="__previous_value__",cE="__local_write_time__";function Pf(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[aE])===null||t===void 0?void 0:t.stringValue)===oE}function Eu(n){const e=n.mapValue.fields[lE];return Pf(e)?Eu(e):e}function Ea(n){const e=cr(n.mapValue.fields[cE].timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,t,r,i,s,o,a,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const Bc="(default)";class Ni{constructor(e,t){this.projectId=e,this.database=t||Bc}static empty(){return new Ni("","")}get isDefaultDatabase(){return this.database===Bc}isEqual(e){return e instanceof Ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="__type__",uE="__max__",Or={mapValue:{fields:{__type__:{stringValue:uE}}}},Df="__vector__",Ls="value",nc={nullValue:"NULL_VALUE"};function Hr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pf(n)?4:hE(n)?9007199254740991:Tu(n)?10:11:te(28295,{value:n})}function $n(n,e){if(n===e)return!0;const t=Hr(n);if(t!==Hr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ea(n).isEqual(Ea(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=cr(i.timestampValue),a=cr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return ur(i.bytesValue).isEqual(ur(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return We(i.geoPointValue.latitude)===We(s.geoPointValue.latitude)&&We(i.geoPointValue.longitude)===We(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return We(i.integerValue)===We(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=We(i.doubleValue),a=We(s.doubleValue);return o===a?_a(o)===_a(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return xs(n.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Qg(o)!==Qg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!$n(o[c],a[c])))return!1;return!0}(n,e);default:return te(52216,{left:n})}}function Ta(n,e){return(n.values||[]).find(t=>$n(t,e))!==void 0}function Wr(n,e){if(n===e)return 0;const t=Hr(n),r=Hr(e);if(t!==r)return de(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return de(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=We(s.integerValue||s.doubleValue),c=We(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Yg(n.timestampValue,e.timestampValue);case 4:return Yg(Ea(n),Ea(e));case 5:return od(n.stringValue,e.stringValue);case 6:return function(s,o){const a=ur(s),c=ur(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=de(a[u],c[u]);if(h!==0)return h}return de(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=de(We(s.latitude),We(o.latitude));return a!==0?a:de(We(s.longitude),We(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Jg(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,c,u,h;const p=s.fields||{},m=o.fields||{},y=(a=p[Ls])===null||a===void 0?void 0:a.arrayValue,A=(c=m[Ls])===null||c===void 0?void 0:c.arrayValue,R=de(((u=y?.values)===null||u===void 0?void 0:u.length)||0,((h=A?.values)===null||h===void 0?void 0:h.length)||0);return R!==0?R:Jg(y,A)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===Or.mapValue&&o===Or.mapValue)return 0;if(s===Or.mapValue)return 1;if(o===Or.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let p=0;p<c.length&&p<h.length;++p){const m=od(c[p],h[p]);if(m!==0)return m;const y=Wr(a[c[p]],u[h[p]]);if(y!==0)return y}return de(c.length,h.length)}(n.mapValue,e.mapValue);default:throw te(23264,{le:t})}}function Yg(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return de(n,e);const t=cr(n),r=cr(e),i=de(t.seconds,r.seconds);return i!==0?i:de(t.nanos,r.nanos)}function Jg(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Wr(t[i],r[i]);if(s)return s}return de(t.length,r.length)}function Fs(n){return dd(n)}function dd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=cr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ur(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=dd(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dd(t.fields[o])}`;return i+"}"}(n.mapValue):te(61005,{value:n})}function rc(n){switch(Hr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Eu(n);return e?16+rc(e):16;case 5:return 2*n.stringValue.length;case 6:return ur(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+rc(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Zr(r.fields,(s,o)=>{i+=s.length+rc(o)}),i}(n.mapValue);default:throw te(13486,{value:n})}}function wa(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function fd(n){return!!n&&"integerValue"in n}function ba(n){return!!n&&"arrayValue"in n}function Zg(n){return!!n&&"nullValue"in n}function e_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ic(n){return!!n&&"mapValue"in n}function Tu(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Cf])===null||t===void 0?void 0:t.stringValue)===Df}function na(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Zr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=na(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=na(n.arrayValue.values[t]);return e}return Object.assign({},n)}function hE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===uE}const dE={mapValue:{fields:{[Cf]:{stringValue:Df},[Ls]:{arrayValue:{}}}}};function cx(n){return"nullValue"in n?nc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?wa(Ni.empty(),Y.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Tu(n)?dE:{mapValue:{}}:te(35942,{value:n})}function ux(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?wa(Ni.empty(),Y.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?dE:"mapValue"in n?Tu(n)?{mapValue:{}}:Or:te(61959,{value:n})}function t_(n,e){const t=Wr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function n_(n,e){const t=Wr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ic(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=na(t)}setAll(e){let t=Xe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=na(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ic(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ic(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Zr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(na(this.value))}}function fE(n){const e=[];return Zr(n.fields,(t,r)=>{const i=new Xe([t]);if(ic(r)){const s=fE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ze(e,0,ae.min(),ae.min(),ae.min(),Nt.empty(),0)}static newFoundDocument(e,t,r,i){return new Ze(e,1,t,ae.min(),r,i,0)}static newNoDocument(e,t){return new Ze(e,2,t,ae.min(),ae.min(),Nt.empty(),0)}static newUnknownDocument(e,t){return new Ze(e,3,t,ae.min(),ae.min(),Nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t){this.position=e,this.inclusive=t}}function r_(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),t.key):r=Wr(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function i_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!$n(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t="asc"){this.field=e,this.dir=t}}function hx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{}class Se extends pE{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new dx(e,t,r):t==="array-contains"?new mx(e,r):t==="in"?new IE(e,r):t==="not-in"?new gx(e,r):t==="array-contains-any"?new _x(e,r):new Se(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new fx(e,r):new px(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Wr(t,this.value)):t!==null&&Hr(this.value)===Hr(t)&&this.matchesComparison(Wr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fe extends pE{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Fe(e,t)}matches(e){return Bs(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Bs(n){return n.op==="and"}function pd(n){return n.op==="or"}function xf(n){return mE(n)&&Bs(n)}function mE(n){for(const e of n.filters)if(e instanceof Fe)return!1;return!0}function md(n){if(n instanceof Se)return n.field.canonicalString()+n.op.toString()+Fs(n.value);if(xf(n))return n.filters.map(e=>md(e)).join(",");{const e=n.filters.map(t=>md(t)).join(",");return`${n.op}(${e})`}}function gE(n,e){return n instanceof Se?function(r,i){return i instanceof Se&&r.op===i.op&&r.field.isEqual(i.field)&&$n(r.value,i.value)}(n,e):n instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&gE(o,i.filters[a]),!0):!1}(n,e):void te(19439)}function _E(n,e){const t=n.filters.concat(e);return Fe.create(t,n.op)}function yE(n){return n instanceof Se?function(t){return`${t.field.canonicalString()} ${t.op} ${Fs(t.value)}`}(n):n instanceof Fe?function(t){return t.op.toString()+" {"+t.getFilters().map(yE).join(" ,")+"}"}(n):"Filter"}class dx extends Se{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class fx extends Se{constructor(e,t){super(e,"in",t),this.keys=vE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class px extends Se{constructor(e,t){super(e,"not-in",t),this.keys=vE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Y.fromName(r.referenceValue))}class mx extends Se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ba(t)&&Ta(t.arrayValue,this.value)}}class IE extends Se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ta(this.value.arrayValue,t)}}class gx extends Se{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ta(this.value.arrayValue,t)}}class _x extends Se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ba(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ta(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Pe=null}}function gd(n,e=null,t=[],r=[],i=null,s=null,o=null){return new yx(n,e,t,r,i,s,o)}function Oi(n){const e=ne(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>md(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),_u(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Fs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Fs(r)).join(",")),e.Pe=t}return e.Pe}function Ka(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!hx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!i_(n.startAt,e.startAt)&&i_(n.endAt,e.endAt)}function $c(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function jc(n,e){return n.filters.filter(t=>t instanceof Se&&t.field.isEqual(e))}function s_(n,e,t){let r=nc,i=!0;for(const s of jc(n,e)){let o=nc,a=!0;switch(s.op){case"<":case"<=":o=cx(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=nc}t_({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];t_({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function o_(n,e,t){let r=Or,i=!0;for(const s of jc(n,e)){let o=Or,a=!0;switch(s.op){case">=":case">":o=ux(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Or}n_({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];n_({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function EE(n,e,t,r,i,s,o,a){return new eo(n,e,t,r,i,s,o,a)}function Ga(n){return new eo(n)}function a_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function TE(n){return n.collectionGroup!==null}function ra(n){const e=ne(n);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ue(Xe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Aa(s,r))}),t.has(Xe.keyField().canonicalString())||e.Te.push(new Aa(Xe.keyField(),r))}return e.Te}function sn(n){const e=ne(n);return e.Ie||(e.Ie=vx(e,ra(n))),e.Ie}function vx(n,e){if(n.limitType==="F")return gd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Aa(i.field,s)});const t=n.endAt?new Us(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Us(n.startAt.position,n.startAt.inclusive):null;return gd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function _d(n,e){const t=n.filters.concat([e]);return new eo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function yd(n,e,t){return new eo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function wu(n,e){return Ka(sn(n),sn(e))&&n.limitType===e.limitType}function wE(n){return`${Oi(sn(n))}|lt:${n.limitType}`}function ss(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>yE(i)).join(", ")}]`),_u(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Fs(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Fs(i)).join(",")),`Target(${r})`}(sn(n))}; limitType=${n.limitType})`}function Ha(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ra(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=r_(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,ra(r),i)||r.endAt&&!function(o,a,c){const u=r_(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,ra(r),i))}(n,e)}function bE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function AE(n){return(e,t)=>{let r=!1;for(const i of ra(n)){const s=Ix(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ix(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Wr(c,u):te(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return iE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=new ze(Y.comparator);function rn(){return Ex}const SE=new ze(Y.comparator);function No(...n){let e=SE;for(const t of n)e=e.insert(t.key,t);return e}function RE(n){let e=SE;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function xn(){return ia()}function PE(){return ia()}function ia(){return new mr(n=>n.toString(),(n,e)=>n.isEqual(e))}const Tx=new ze(Y.comparator),wx=new Ue(Y.comparator);function be(...n){let e=wx;for(const t of n)e=e.add(t);return e}const bx=new Ue(de);function Vf(){return bx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_a(e)?"-0":e}}function CE(n){return{integerValue:""+n}}function Ax(n,e){return HI(e)?CE(e):kf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this._=void 0}}function Sx(n,e,t){return n instanceof $s?function(i,s){const o={fields:{[aE]:{stringValue:oE},[cE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Pf(s)&&(s=Eu(s)),s&&(o.fields[lE]=s),{mapValue:o}}(t,e):n instanceof js?xE(n,e):n instanceof qs?VE(n,e):function(i,s){const o=DE(i,s),a=l_(o)+l_(i.Ee);return fd(o)&&fd(i.Ee)?CE(a):kf(i.serializer,a)}(n,e)}function Rx(n,e,t){return n instanceof js?xE(n,e):n instanceof qs?VE(n,e):t}function DE(n,e){return n instanceof Sa?function(r){return fd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class $s extends bu{}class js extends bu{constructor(e){super(),this.elements=e}}function xE(n,e){const t=kE(e);for(const r of n.elements)t.some(i=>$n(i,r))||t.push(r);return{arrayValue:{values:t}}}class qs extends bu{constructor(e){super(),this.elements=e}}function VE(n,e){let t=kE(e);for(const r of n.elements)t=t.filter(i=>!$n(i,r));return{arrayValue:{values:t}}}class Sa extends bu{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function l_(n){return We(n.integerValue||n.doubleValue)}function kE(n){return ba(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,t){this.field=e,this.transform=t}}function Px(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof js&&i instanceof js||r instanceof qs&&i instanceof qs?xs(r.elements,i.elements,$n):r instanceof Sa&&i instanceof Sa?$n(r.Ee,i.Ee):r instanceof $s&&i instanceof $s}(n.transform,e.transform)}class Cx{constructor(e,t){this.version=e,this.transformResults=t}}class ft{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ft}static exists(e){return new ft(void 0,e)}static updateTime(e){return new ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Au{}function OE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Wa(n.key,ft.none()):new to(n.key,n.data,ft.none());{const t=n.data,r=Nt.empty();let i=new Ue(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gr(n.key,r,new Ht(i.toArray()),ft.none())}}function Dx(n,e,t){n instanceof to?function(i,s,o){const a=i.value.clone(),c=u_(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof gr?function(i,s,o){if(!sc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=u_(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(ME(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function sa(n,e,t,r){return n instanceof to?function(s,o,a,c){if(!sc(s.precondition,o))return a;const u=s.value.clone(),h=h_(s.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof gr?function(s,o,a,c){if(!sc(s.precondition,o))return a;const u=h_(s.fieldTransforms,c,o),h=o.data;return h.setAll(ME(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(s,o,a){return sc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function xx(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=DE(r.transform,i||null);s!=null&&(t===null&&(t=Nt.empty()),t.set(r.field,s))}return t||null}function c_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xs(r,i,(s,o)=>Px(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class to extends Au{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gr extends Au{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ME(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function u_(n,e,t){const r=new Map;ie(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Rx(o,a,t[i]))}return r}function h_(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,Sx(s,o,e))}return r}class Wa extends Au{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LE extends Au{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Dx(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=sa(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=sa(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=PE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=OE(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),be())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,(t,r)=>c_(t,r))&&xs(this.baseMutations,e.baseMutations,(t,r)=>c_(t,r))}}class Of{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ie(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return Tx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Of(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,Ce;function kx(n){switch(n){case O.OK:return te(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return te(15467,{code:n})}}function FE(n){if(n===void 0)return tt("GRPC error has no .code"),O.UNKNOWN;switch(n){case it.OK:return O.OK;case it.CANCELLED:return O.CANCELLED;case it.UNKNOWN:return O.UNKNOWN;case it.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case it.INTERNAL:return O.INTERNAL;case it.UNAVAILABLE:return O.UNAVAILABLE;case it.UNAUTHENTICATED:return O.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case it.NOT_FOUND:return O.NOT_FOUND;case it.ALREADY_EXISTS:return O.ALREADY_EXISTS;case it.PERMISSION_DENIED:return O.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case it.ABORTED:return O.ABORTED;case it.OUT_OF_RANGE:return O.OUT_OF_RANGE;case it.UNIMPLEMENTED:return O.UNIMPLEMENTED;case it.DATA_LOSS:return O.DATA_LOSS;default:return te(39323,{code:n})}}(Ce=it||(it={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=new Br([4294967295,4294967295],0);function d_(n){const e=FI().encode(n),t=new xI;return t.update(e),new Uint8Array(t.digest())}function f_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Br([t,r],0),new Br([i,s],0)]}class Lf{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Oo(`Invalid padding: ${t}`);if(r<0)throw new Oo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Oo(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Oo(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Br.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(Br.fromNumber(r)));return i.compare(Nx)===1&&(i=new Br([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=d_(e),[r,i]=f_(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Lf(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.fe===0)return;const t=d_(e),[r,i]=f_(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Oo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Xa.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Qa(ae.min(),i,new ze(de),rn(),be())}}class Xa{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Xa(r,t,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class UE{constructor(e,t){this.targetId=e,this.De=t}}class BE{constructor(e,t,r=nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class p_{constructor(){this.ve=0,this.Ce=m_(),this.Fe=nt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=be(),t=be(),r=be();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:te(38017,{changeType:s})}}),new Xa(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=m_()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ie(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Ox{constructor(e){this.We=e,this.Ge=new Map,this.ze=rn(),this.je=Dl(),this.Je=Dl(),this.He=new ze(de)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:te(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,i)=>{this.nt(i)&&t(i)})}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const s=i.target;if($c(s))if(r===0){const o=new Y(s.path);this.Xe(t,o,Ze.newNoDocument(o,ae.min()))}else ie(r===1,20013,{expectedCount:r});else{const o=this.ot(t);if(o!==r){const a=this._t(e),c=a?this.ut(a,e,o):1;if(c!==0){this.rt(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,u)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=ur(r).toUint8Array()}catch(c){if(c instanceof sE)return Gr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Lf(o,i,s)}catch(c){return Gr(c instanceof Oo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.fe===0?null:a}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Xe(t,s,null),i++)}),i}Pt(e){const t=new Map;this.Ge.forEach((s,o)=>{const a=this.st(o);if(a){if(s.current&&$c(a.target)){const c=new Y(a.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Ze.newNoDocument(c,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}});let r=be();this.Je.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new Qa(e,t,this.He,this.ze,r);return this.ze=rn(),this.je=Dl(),this.Je=Dl(),this.He=new ze(de),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new p_,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ue(de),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ue(de),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new p_),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Dl(){return new ze(Y.comparator)}function m_(){return new ze(Y.comparator)}const Mx={asc:"ASCENDING",desc:"DESCENDING"},Lx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fx={and:"AND",or:"OR"};class Ux{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vd(n,e){return n.useProto3Json||_u(e)?e:{value:e}}function zs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $E(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Bx(n,e){return zs(n,e.toTimestamp())}function qt(n){return ie(!!n,49232),ae.fromTimestamp(function(t){const r=cr(t);return new Le(r.seconds,r.nanos)}(n))}function Ff(n,e){return Id(n,e).canonicalString()}function Id(n,e){const t=function(i){return new Ne(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function jE(n){const e=Ne.fromString(n);return ie(YE(e),10190,{key:e.toString()}),e}function qc(n,e){return Ff(n.databaseId,e.path)}function Pi(n,e){const t=jE(e);if(t.get(1)!==n.databaseId.projectId)throw new G(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(KE(t))}function qE(n,e){return Ff(n.databaseId,e)}function zE(n){const e=jE(n);return e.length===4?Ne.emptyPath():KE(e)}function Ed(n){return new Ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function KE(n){return ie(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function g_(n,e,t){return{name:qc(n,e),fields:t.value.mapValue.fields}}function $x(n,e,t){const r=Pi(n,e.name),i=qt(e.updateTime),s=e.createTime?qt(e.createTime):ae.min(),o=new Nt({mapValue:{fields:e.fields}}),a=Ze.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function jx(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:te(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(ie(h===void 0||typeof h=="string",58123),nt.fromBase64String(h||"")):(ie(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),nt.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?O.UNKNOWN:FE(u.code);return new G(h,u.message||"")}(o);t=new BE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pi(n,r.document.name),s=qt(r.document.updateTime),o=r.document.createTime?qt(r.document.createTime):ae.min(),a=new Nt({mapValue:{fields:r.document.fields}}),c=Ze.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];t=new oc(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pi(n,r.document),s=r.readTime?qt(r.readTime):ae.min(),o=Ze.newNoDocument(i,s),a=r.removedTargetIds||[];t=new oc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pi(n,r.document),s=r.removedTargetIds||[];t=new oc([],s,i,null)}else{if(!("filter"in e))return te(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Vx(i,s),a=r.targetId;t=new UE(a,o)}}return t}function zc(n,e){let t;if(e instanceof to)t={update:g_(n,e.key,e.value)};else if(e instanceof Wa)t={delete:qc(n,e.key)};else if(e instanceof gr)t={update:g_(n,e.key,e.data),updateMask:Wx(e.fieldMask)};else{if(!(e instanceof LE))return te(16599,{Rt:e.type});t={verify:qc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof $s)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof js)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Sa)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw te(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Bx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te(27497)}(n,e.precondition)),t}function Td(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?ft.updateTime(qt(s.updateTime)):s.exists!==void 0?ft.exists(s.exists):ft.none()}(e.currentDocument):ft.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)ie(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),c=new $s;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];c=new js(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];c=new qs(h)}else"increment"in a?c=new Sa(o,a.increment):te(16584,{proto:a});const u=Xe.fromServerFormat(a.fieldPath);return new NE(u,c)}(n,i)):[];if(e.update){e.update.name;const i=Pi(n,e.update.name),s=new Nt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Ht(u.map(h=>Xe.fromServerFormat(h)))}(e.updateMask);return new gr(i,s,o,t,r)}return new to(i,s,t,r)}if(e.delete){const i=Pi(n,e.delete);return new Wa(i,t)}if(e.verify){const i=Pi(n,e.verify);return new LE(i,t)}return te(1463,{proto:e})}function qx(n,e){return n&&n.length>0?(ie(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?qt(i.updateTime):qt(s);return o.isEqual(ae.min())&&(o=qt(s)),new Cx(o,i.transformResults||[])}(t,e))):[]}function GE(n,e){return{documents:[qE(n,e.path)]}}function HE(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=qE(n,i);const s=function(u){if(u.length!==0)return XE(Fe.create(u,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:os(m.field),direction:Kx(m.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=vd(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Vt:t,parent:i}}function WE(n){let e=zE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ie(r===1,65062);const h=t.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=function(p){const m=QE(p);return m instanceof Fe&&xf(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(A){return new Aa(as(A.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(t.orderBy));let a=null;t.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,_u(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(p){const m=!!p.before,y=p.values||[];return new Us(y,m)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const m=!p.before,y=p.values||[];return new Us(y,m)}(t.endAt)),EE(e,i,o,s,a,"F",c,u)}function zx(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function QE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=as(t.unaryFilter.field);return Se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=as(t.unaryFilter.field);return Se.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=as(t.unaryFilter.field);return Se.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=as(t.unaryFilter.field);return Se.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}}(n):n.fieldFilter!==void 0?function(t){return Se.create(as(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Fe.create(t.compositeFilter.filters.map(r=>QE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return te(1026)}}(t.compositeFilter.op))}(n):te(30097,{filter:n})}function Kx(n){return Mx[n]}function Gx(n){return Lx[n]}function Hx(n){return Fx[n]}function os(n){return{fieldPath:n.canonicalString()}}function as(n){return Xe.fromServerFormat(n.fieldPath)}function XE(n){return n instanceof Se?function(t){if(t.op==="=="){if(e_(t.value))return{unaryFilter:{field:os(t.field),op:"IS_NAN"}};if(Zg(t.value))return{unaryFilter:{field:os(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(e_(t.value))return{unaryFilter:{field:os(t.field),op:"IS_NOT_NAN"}};if(Zg(t.value))return{unaryFilter:{field:os(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(t.field),op:Gx(t.op),value:t.value}}}(n):n instanceof Fe?function(t){const r=t.getFilters().map(i=>XE(i));return r.length===1?r[0]:{compositeFilter:{op:Hx(t.op),filters:r}}}(n):te(54877,{filter:n})}function Wx(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function YE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,r,i,s=ae.min(),o=ae.min(),a=nt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this.gt=e}}function Qx(n,e){let t;if(e.document)t=$x(n.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=Y.fromSegments(e.noDocument.path),i=Li(e.noDocument.readTime);t=Ze.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return te(56709);{const r=Y.fromSegments(e.unknownDocument.path),i=Li(e.unknownDocument.version);t=Ze.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Le(i[0],i[1]);return ae.fromTimestamp(s)}(e.readTime)),t}function __(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Kc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:qc(s,o.key),fields:o.data.value.mapValue.fields,updateTime:zs(s,o.version.toTimestamp()),createTime:zs(s,o.createTime.toTimestamp())}}(n.gt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Mi(e.version)};else{if(!e.isUnknownDocument())return te(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Mi(e.version)}}return r}function Kc(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Mi(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Li(n){const e=new Le(n.seconds,n.nanoseconds);return ae.fromTimestamp(e)}function vi(n,e){const t=(e.baseMutations||[]).map(s=>Td(n.gt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Td(n.gt,s)),i=Le.fromMillis(e.localWriteTimeMs);return new Nf(e.batchId,i,t,r)}function Mo(n){const e=Li(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Li(n.lastLimboFreeSnapshotVersion):ae.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){const o=s.documents.length;return ie(o===1,1966,{count:o}),sn(Ga(zE(s.documents[0])))}(n.query):function(s){return sn(WE(s))}(n.query),new Zn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,nt.fromBase64String(n.resumeToken))}function ZE(n,e){const t=Mi(e.snapshotVersion),r=Mi(e.lastLimboFreeSnapshotVersion);let i;i=$c(e.target)?GE(n.gt,e.target):HE(n.gt,e.target).Vt;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Oi(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function eT(n){const e=WE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?yd(e,e.limit,"L"):e}function Ah(n,e){return new Mf(e.largestBatchId,Td(n.gt,e.overlayMutation))}function y_(n,e){const t=e.path.lastSegment();return[n,Mt(e.path.popLast()),t]}function v_(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Mi(r.readTime),documentKey:Mt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{getBundleMetadata(e,t){return I_(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Li(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return I_(e).put(function(i){return{bundleId:i.id,createTime:Mi(qt(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return E_(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:eT(s.bundledQuery),readTime:Li(s.readTime)}}(r)})}saveNamedQuery(e,t){return E_(e).put(function(i){return{name:i.name,readTime:Mi(qt(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function I_(n){return mt(n,yu)}function E_(n){return mt(n,vu)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const r=t.uid||"";return new Su(e,r)}getOverlay(e,t){return wo(e).get(y_(this.userId,t)).next(r=>r?Ah(this.serializer,r):null)}getOverlays(e,t){const r=xn();return C.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Mf(t,o);i.push(this.wt(e,a))}),C.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Mt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(wo(e).Y(ud,a))}),C.waitFor(s)}getOverlaysForCollection(e,t,r){const i=xn(),s=Mt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return wo(e).j(ud,o).next(a=>{for(const c of a){const u=Ah(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=xn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return wo(e).X({index:ZI,range:a},(c,u,h)=>{const p=Ah(this.serializer,u);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):h.done()}).next(()=>s)}wt(e,t){return wo(e).put(function(i,s,o){const[a,c,u]=y_(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:zc(i.gt,o.mutation)}}(this.serializer,this.userId,t))}}function wo(n){return mt(n,Iu)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{St(e){return mt(e,Sf)}getSessionToken(e){return this.St(e).get("sessionToken").next(t=>{const r=t?.value;return r?nt.fromUint8Array(r):nt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(We(e.integerValue));else if("doubleValue"in e){const r=We(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),_a(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=cr(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(ur(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?hE(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):Tu(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):te(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const r=e.fields||{};this.Ct(t,55);for(const i of Object.keys(r))this.xt(i,t),this.Dt(r[i],t)}Lt(e,t){var r,i;const s=e.fields||{};this.Ct(t,53);const o=Ls,a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(We(a)),this.xt(o,t),this.Dt(s[o],t)}qt(e,t){const r=e.values||[];this.Ct(t,50);for(const i of r)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),Y.fromName(e).path.forEach(r=>{this.Ct(t,60),this.$t(r,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}Ii.Ut=new Ii;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=255;function Jx(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function T_(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=Jx(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class Zx{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Wt(r.value),r=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.jt(r.value),r=t.next();this.Jt()}Ht(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Wt(r);else if(r<2048)this.Wt(960|r>>>6),this.Wt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|r>>>12),this.Wt(128|63&r>>>6),this.Wt(128|63&r);else{const i=t.codePointAt(0);this.Wt(240|i>>>18),this.Wt(128|63&i>>>12),this.Wt(128|63&i>>>6),this.Wt(128|63&i)}}this.Gt()}Yt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.jt(r);else if(r<2048)this.jt(960|r>>>6),this.jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|r>>>12),this.jt(128|63&r>>>6),this.jt(128|63&r);else{const i=t.codePointAt(0);this.jt(240|i>>>18),this.jt(128|63&i>>>12),this.jt(128|63&i>>>6),this.jt(128|63&i)}}this.Jt()}Zt(e){const t=this.Xt(e),r=T_(t);this.en(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}tn(e){const t=this.Xt(e),r=T_(t);this.en(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}nn(){this.rn(Ji),this.rn(255)}sn(){this._n(Ji),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Wt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===Ji?(this.rn(Ji),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Ji?(this._n(Ji),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class eV{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class tV{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class bo{constructor(){this.un=new Zx,this.cn=new eV(this.un),this.ln=new tV(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,r,i){this.Pn=e,this.Tn=t,this.In=r,this.dn=i}En(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new Ei(this.Pn,this.Tn,this.In,r)}An(e,t,r){return{indexId:this.Pn,uid:e,arrayValue:ac(this.In),directionalValue:ac(this.dn),orderedDocumentKey:ac(t),documentKey:r.path.toArray()}}Rn(e,t,r){const i=this.An(e,t,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function Tr(n,e){let t=n.Pn-e.Pn;return t!==0?t:(t=w_(n.In,e.In),t!==0?t:(t=w_(n.dn,e.dn),t!==0?t:Y.comparator(n.Tn,e.Tn)))}function w_(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function ac(n){return Wv()?function(t){let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return r}(n):n}function b_(n){return typeof n!="string"?n:function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(n)}class A_{constructor(e){this.Vn=new Ue((t,r)=>Xe.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.fn.push(r)}}get gn(){return this.Vn.size>1}pn(e){if(ie(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=ad(e);if(t!==void 0&&!this.yn(t))return!1;const r=gi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.yn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Vn.size>0){const a=this.Vn.getIterator().getNext();if(!i.has(a.field.canonicalString())){const c=r[s];if(!this.wn(a,c)||!this.Sn(this.mn[o++],c))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.mn.length||!this.Sn(this.mn[o++],a))return!1}return!0}bn(){if(this.gn)return null;let e=new Ue(Xe.comparator);const t=[];for(const r of this.fn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Zl(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Zl(r.field,0))}for(const r of this.mn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Zl(r.field,r.dir==="asc"?0:1)));return new Mc(Mc.UNKNOWN_ID,this.collectionId,t,ga.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(n){var e,t;if(ie(n instanceof Se||n instanceof Fe,20012),n instanceof Se){if(n instanceof IE){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Se.create(n.field,"==",s)))||[];return Fe.create(i,"or")}return n}const r=n.filters.map(i=>tT(i));return Fe.create(r,n.op)}function nV(n){if(n.getFilters().length===0)return[];const e=Ad(tT(n));return ie(nT(e),7391),wd(e)||bd(e)?[e]:e.getFilters()}function wd(n){return n instanceof Se}function bd(n){return n instanceof Fe&&xf(n)}function nT(n){return wd(n)||bd(n)||function(t){if(t instanceof Fe&&pd(t)){for(const r of t.getFilters())if(!wd(r)&&!bd(r))return!1;return!0}return!1}(n)}function Ad(n){if(ie(n instanceof Se||n instanceof Fe,34018),n instanceof Se)return n;if(n.filters.length===1)return Ad(n.filters[0]);const e=n.filters.map(r=>Ad(r));let t=Fe.create(e,n.op);return t=Gc(t),nT(t)?t:(ie(t instanceof Fe,64498),ie(Bs(t),40251),ie(t.filters.length>1,57927),t.filters.reduce((r,i)=>Uf(r,i)))}function Uf(n,e){let t;return ie(n instanceof Se||n instanceof Fe,38388),ie(e instanceof Se||e instanceof Fe,25473),t=n instanceof Se?e instanceof Se?function(i,s){return Fe.create([i,s],"and")}(n,e):S_(n,e):e instanceof Se?S_(e,n):function(i,s){if(ie(i.filters.length>0&&s.filters.length>0,48005),Bs(i)&&Bs(s))return _E(i,s.getFilters());const o=pd(i)?i:s,a=pd(i)?s:i,c=o.filters.map(u=>Uf(u,a));return Fe.create(c,"or")}(n,e),Gc(t)}function S_(n,e){if(Bs(e))return _E(e,n.getFilters());{const t=e.filters.map(r=>Uf(n,r));return Fe.create(t,"or")}}function Gc(n){if(ie(n instanceof Se||n instanceof Fe,11850),n instanceof Se)return n;const e=n.getFilters();if(e.length===1)return Gc(e[0]);if(mE(n))return n;const t=e.map(i=>Gc(i)),r=[];return t.forEach(i=>{i instanceof Se?r.push(i):i instanceof Fe&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Fe.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(){this.Dn=new Bf}addToCollectionParentIndex(e,t){return this.Dn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(on.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(on.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class Bf{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ue(Ne.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ue(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="IndexedDbIndexManager",xl=new Uint8Array(0);class iV{constructor(e,t){this.databaseId=t,this.vn=new Bf,this.Cn=new mr(r=>Oi(r),(r,i)=>Ka(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});const s={collectionId:r,parent:Mt(i)};return P_(e).put(s)}return C.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[UI(t),""],!1,!0);return P_(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Dn(o.parent))}return r})}addFieldIndex(e,t){const r=Ao(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=es(e);return s.next(a=>{o.put(v_(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Ao(e),i=es(e),s=Zi(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ao(e),r=Zi(e),i=es(e);return t.Y().next(()=>r.Y()).next(()=>i.Y())}createTargetIndexes(e,t){return C.forEach(this.Fn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new A_(r).bn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=Zi(e);let i=!0;const s=new Map;return C.forEach(this.Fn(t),o=>this.Mn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=be();const a=[];return C.forEach(s,(c,u)=>{B(R_,`Using index ${function(M){return`id=${M.indexId}|cg=${M.collectionGroup}|f=${M.fields.map(F=>`${F.fieldPath}:${F.kind}`).join(",")}`}(c)} to execute ${Oi(t)}`);const h=function(M,F){const ee=ad(F);if(ee===void 0)return null;for(const K of jc(M,ee.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(u,c),p=function(M,F){const ee=new Map;for(const K of gi(F))for(const v of jc(M,K.fieldPath))switch(v.op){case"==":case"in":ee.set(K.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return ee.set(K.fieldPath.canonicalString(),v.value),Array.from(ee.values())}return null}(u,c),m=function(M,F){const ee=[];let K=!0;for(const v of gi(F)){const _=v.kind===0?s_(M,v.fieldPath,M.startAt):o_(M,v.fieldPath,M.startAt);ee.push(_.value),K&&(K=_.inclusive)}return new Us(ee,K)}(u,c),y=function(M,F){const ee=[];let K=!0;for(const v of gi(F)){const _=v.kind===0?o_(M,v.fieldPath,M.endAt):s_(M,v.fieldPath,M.endAt);ee.push(_.value),K&&(K=_.inclusive)}return new Us(ee,K)}(u,c),A=this.xn(c,u,m),R=this.xn(c,u,y),x=this.On(c,u,p),k=this.Nn(c.indexId,h,A,m.inclusive,R,y.inclusive,x);return C.forEach(k,L=>r.H(L,t.limit).next(M=>{M.forEach(F=>{const ee=Y.fromSegments(F.documentKey);o.has(ee)||(o=o.add(ee),a.push(ee))})}))}).next(()=>a)}return C.resolve(null)})}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=nV(Fe.create(e.filters,"and")).map(r=>gd(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}Nn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),h=[];for(let p=0;p<c;++p){const m=t?this.Bn(t[p/u]):xl,y=this.Ln(e,m,r[p%u],i),A=this.kn(e,m,s[p%u],o),R=a.map(x=>this.Ln(e,m,x,!0));h.push(...this.createRange(y,A,R))}return h}Ln(e,t,r,i){const s=new Ei(e,Y.empty(),t,r);return i?s:s.En()}kn(e,t,r,i){const s=new Ei(e,Y.empty(),t,r);return i?s.En():s}Mn(e,t){const r=new A_(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.pn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.Fn(t);return C.forEach(i,s=>this.Mn(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new Ue(Xe.comparator),h=!1;for(const p of c.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?h=!0:u=u.add(m.field));for(const p of c.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}qn(e,t){const r=new bo;for(const i of gi(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.hn(i.kind);Ii.Ut.bt(s,o)}return r.an()}Bn(e){const t=new bo;return Ii.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const r=new bo;return Ii.Ut.bt(wa(this.databaseId,t),r.hn(function(s){const o=gi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.an()}On(e,t,r){if(r===null)return[];let i=[];i.push(new bo);let s=0;for(const o of gi(e)){const a=r[s++];for(const c of i)if(this.$n(t,o.fieldPath)&&ba(a))i=this.Un(i,o,a);else{const u=c.hn(o.kind);Ii.Ut.bt(a,u)}}return this.Kn(i)}xn(e,t,r){return this.On(e,t,r.position)}Kn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].an();return t}Un(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new bo;c.seed(a.an()),Ii.Ut.bt(o,c.hn(t.kind)),s.push(c)}return s}$n(e,t){return!!e.filters.find(r=>r instanceof Se&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ao(e),i=es(e);return(t?r.j(cd,IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return C.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(h,p){const m=p?new ga(p.sequenceNumber,new on(Li(p.readTime),new Y(Dn(p.documentKey)),p.largestBatchId)):ga.empty(),y=h.fields.map(([A,R])=>new Zl(Xe.fromServerFormat(A),R));return new Mc(h.indexId,h.collectionGroup,y,m)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:de(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Ao(e),s=es(e);return this.Wn(e).next(o=>i.j(cd,IDBKeyRange.bound(t,t)).next(a=>C.forEach(a,c=>s.put(v_(c.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return C.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?C.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),C.forEach(a,c=>this.Gn(e,i,c).next(u=>{const h=this.zn(s,c);return u.isEqual(h)?C.resolve():this.jn(e,s,c,u,h)}))))})}Jn(e,t,r,i){return Zi(e).put(i.An(this.uid,this.Qn(r,t.key),t.key))}Hn(e,t,r,i){return Zi(e).delete(i.Rn(this.uid,this.Qn(r,t.key),t.key))}Gn(e,t,r){const i=Zi(e);let s=new Ue(Tr);return i.X({index:JI,range:IDBKeyRange.only([r.indexId,this.uid,ac(this.Qn(r,t))])},(o,a)=>{s=s.add(new Ei(r.indexId,t,b_(a.arrayValue),b_(a.directionalValue)))}).next(()=>s)}zn(e,t){let r=new Ue(Tr);const i=this.qn(t,e);if(i==null)return r;const s=ad(t);if(s!=null){const o=e.data.field(s.fieldPath);if(ba(o))for(const a of o.arrayValue.values||[])r=r.add(new Ei(t.indexId,e.key,this.Bn(a),i))}else r=r.add(new Ei(t.indexId,e.key,xl,i));return r}jn(e,t,r,i,s){B(R_,"Updating index entries for document '%s'",t.key);const o=[];return function(c,u,h,p,m){const y=c.getIterator(),A=u.getIterator();let R=Yi(y),x=Yi(A);for(;R||x;){let k=!1,L=!1;if(R&&x){const M=h(R,x);M<0?L=!0:M>0&&(k=!0)}else R!=null?L=!0:k=!0;k?(p(x),x=Yi(A)):L?(m(R),R=Yi(y)):(R=Yi(y),x=Yi(A))}}(i,s,Tr,a=>{o.push(this.Jn(e,t,r,a))},a=>{o.push(this.Hn(e,t,r,a))}),C.waitFor(o)}Wn(e){let t=1;return es(e).X({index:YI,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Tr(o,a)).filter((o,a,c)=>!a||Tr(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Tr(o,e),c=Tr(o,t);if(a===0)i[0]=e.En();else if(a>0&&c<0)i.push(o),i.push(o.En());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Yn(i[o],i[o+1]))return[];const a=i[o].Rn(this.uid,xl,Y.empty()),c=i[o+1].Rn(this.uid,xl,Y.empty());s.push(IDBKeyRange.bound(a,c))}return s}Yn(e,t){return Tr(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(C_)}getMinOffset(e,t){return C.mapArray(this.Fn(t),r=>this.Mn(e,r).next(i=>i||te(44426))).next(C_)}}function P_(n){return mt(n,Ia)}function Zi(n){return mt(n,ta)}function Ao(n){return mt(n,Af)}function es(n){return mt(n,ea)}function C_(n){ie(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Tf(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new on(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rT=41943040;class xt{static withCacheSize(e){return new xt(e,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(n,e,t){const r=n.store(_n),i=n.store(ks),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.X({range:o},(h,p,m)=>(a++,m.delete()));s.push(c.next(()=>{ie(a===1,47070,{batchId:t.batchId})}));const u=[];for(const h of t.mutations){const p=WI(e,h.key.path,t.batchId);s.push(i.delete(p)),u.push(h.key)}return C.waitFor(s).next(()=>u)}function Hc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw te(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(rT,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);class Ru{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Zn={}}static yt(e,t,r,i){ie(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new Ru(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return wr(e).X({index:wi,range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=ls(e),o=wr(e);return o.add({}).next(a=>{ie(typeof a=="number",49019);const c=new Nf(a,t,r,i),u=function(y,A,R){const x=R.baseMutations.map(L=>zc(y.gt,L)),k=R.mutations.map(L=>zc(y.gt,L));return{userId:A,batchId:R.batchId,localWriteTimeMs:R.localWriteTime.toMillis(),baseMutations:x,mutations:k}}(this.serializer,this.userId,c),h=[];let p=new Ue((m,y)=>de(m.canonicalString(),y.canonicalString()));for(const m of i){const y=WI(this.userId,m.key.path,a);p=p.add(m.key.path.popLast()),h.push(o.put(u)),h.push(s.put(y,LD))}return p.forEach(m=>{h.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Zn[a]=c.keys()}),C.waitFor(h).next(()=>c)})}lookupMutationBatch(e,t){return wr(e).get(t).next(r=>r?(ie(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),vi(this.serializer,r)):null)}Xn(e,t){return this.Zn[t]?C.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Zn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return wr(e).X({index:wi,range:i},(o,a,c)=>{a.userId===this.userId&&(ie(a.batchId>=r,47524,{er:r}),s=vi(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Si;return wr(e).X({index:wi,range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Si],[this.userId,Number.POSITIVE_INFINITY]);return wr(e).j(wi,t).next(r=>r.map(i=>vi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ec(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return ls(e).X({range:i},(o,a,c)=>{const[u,h,p]=o,m=Dn(h);if(u===this.userId&&t.path.isEqual(m))return wr(e).get(p).next(y=>{if(!y)throw te(61480,{tr:o,batchId:p});ie(y.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:y.userId,batchId:p}),s.push(vi(this.serializer,y))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ue(de);const i=[];return t.forEach(s=>{const o=ec(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=ls(e).X({range:a},(u,h,p)=>{const[m,y,A]=u,R=Dn(y);m===this.userId&&s.path.isEqual(R)?r=r.add(A):p.done()});i.push(c)}),C.waitFor(i).next(()=>this.nr(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=ec(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ue(de);return ls(e).X({range:o},(c,u,h)=>{const[p,m,y]=c,A=Dn(m);p===this.userId&&r.isPrefixOf(A)?A.length===i&&(a=a.add(y)):h.done()}).next(()=>this.nr(e,a))}nr(e,t){const r=[],i=[];return t.forEach(s=>{i.push(wr(e).get(s).next(o=>{if(o===null)throw te(35274,{batchId:s});ie(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(vi(this.serializer,o))}))}),C.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return iT(e.ce,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.rr(t.batchId)}),C.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return C.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ls(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Dn(s[1]);i.push(c)}else a.done()}).next(()=>{ie(i.length===0,56720,{ir:i.map(s=>s.canonicalString())})})})}containsKey(e,t){return sT(e,this.userId,t)}sr(e){return oT(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Si,lastStreamToken:""})}}function sT(n,e,t){const r=ec(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ls(n).X({range:s,Z:!0},(a,c,u)=>{const[h,p,m]=a;h===e&&p===i&&(o=!0),u.done()}).next(()=>o)}function wr(n){return mt(n,_n)}function ls(n){return mt(n,ks)}function oT(n){return mt(n,ya)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Fi(0)}static ur(){return new Fi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next(t=>{const r=new Fi(t.highestTargetId);return t.highestTargetId=r.next(),this.lr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.cr(e).next(t=>ae.fromTimestamp(new Le(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.cr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.cr(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.lr(e,i)))}addTargetData(e,t){return this.hr(e,t).next(()=>this.cr(e).next(r=>(r.targetCount+=1,this.Pr(t,r),this.lr(e,r))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ts(e).delete(t.targetId)).next(()=>this.cr(e)).next(r=>(ie(r.targetCount>0,8065),r.targetCount-=1,this.lr(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return ts(e).X((o,a)=>{const c=Mo(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>C.waitFor(s)).next(()=>i)}forEachTarget(e,t){return ts(e).X((r,i)=>{const s=Mo(i);t(s)})}cr(e){return x_(e).get(Uc).next(t=>(ie(t!==null,2888),t))}lr(e,t){return x_(e).put(Uc,t)}hr(e,t){return ts(e).put(ZE(this.serializer,t))}Pr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.cr(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Oi(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ts(e).X({range:i,index:XI},(o,a,c)=>{const u=Mo(a);Ka(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=kr(e);return t.forEach(o=>{const a=Mt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),C.waitFor(i)}removeMatchingKeys(e,t,r){const i=kr(e);return C.forEach(t,s=>{const o=Mt(s.path);return C.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=kr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=kr(e);let s=be();return i.X({range:r,Z:!0},(o,a,c)=>{const u=Dn(o[1]),h=new Y(u);s=s.add(h)}).next(()=>s)}containsKey(e,t){const r=Mt(t.path),i=IDBKeyRange.bound([r],[UI(r)],!1,!0);let s=0;return kr(e).X({index:bf,Z:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}Et(e,t){return ts(e).get(t).next(r=>r?Mo(r):null)}}function ts(n){return mt(n,Ns)}function x_(n){return mt(n,Ri)}function kr(n){return mt(n,Os)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="LruGarbageCollector",aT=1048576;function k_([n,e],[t,r]){const i=de(n,t);return i===0?de(e,r):i}class oV{constructor(e){this.Tr=e,this.buffer=new Ue(k_),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();k_(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){B(V_,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Jr(t)?B(V_,"Ignoring IndexedDB error during garbage collection: ",t):await Yr(t)}await this.Rr(3e5)})}}class aV{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Gt.ue);const r=new oV(t);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(D_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),D_):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,t))).next(p=>(s=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),is()<=Ae.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function cT(n,e){return new aV(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,t){this.db=e,this.garbageCollector=cT(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,(r,i)=>t(i))}addReference(e,t,r){return Vl(e,r)}removeReference(e,t,r){return Vl(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Vl(e,t)}Sr(e,t){return function(i,s){let o=!1;return oT(i).ee(a=>sT(i,a,s).next(c=>(c&&(o=!0),C.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.wr(e,(o,a)=>{if(a<=t){const c=this.Sr(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ae.min()),kr(e).delete(function(p){return[0,Mt(p.path)]}(o))))});i.push(c)}}).next(()=>C.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Vl(e,t)}wr(e,t){const r=kr(e);let i,s=Gt.ue;return r.X({index:bf},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Gt.ue&&t(new Y(Dn(i)),s),s=u,i=c):s=Gt.ue}).next(()=>{s!==Gt.ue&&t(new Y(Dn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Vl(n,e){return kr(n).put(function(r,i){return{targetId:0,path:Mt(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(){this.changes=new mr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return di(e).put(r)}removeEntry(e,t,r){return di(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Kc(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.br(e,r)))}getEntry(e,t){let r=Ze.newInvalidDocument(t);return di(e).X({index:tc,range:IDBKeyRange.only(So(t))},(i,s)=>{r=this.Dr(t,s)}).next(()=>r)}vr(e,t){let r={size:0,document:Ze.newInvalidDocument(t)};return di(e).X({index:tc,range:IDBKeyRange.only(So(t))},(i,s)=>{r={document:this.Dr(t,s),size:Hc(s)}}).next(()=>r)}getEntries(e,t){let r=rn();return this.Cr(e,t,(i,s)=>{const o=this.Dr(i,s);r=r.insert(i,o)}).next(()=>r)}Fr(e,t){let r=rn(),i=new ze(Y.comparator);return this.Cr(e,t,(s,o)=>{const a=this.Dr(s,o);r=r.insert(s,a),i=i.insert(s,Hc(o))}).next(()=>({documents:r,Mr:i}))}Cr(e,t,r){if(t.isEmpty())return C.resolve();let i=new Ue(M_);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(So(i.first()),So(i.last())),o=i.getIterator();let a=o.getNext();return di(e).X({index:tc,range:s},(c,u,h)=>{const p=Y.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&M_(a,p)<0;)r(a,null),a=o.getNext();a&&a.isEqual(p)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?h.G(So(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Kc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return di(e).j(IDBKeyRange.bound(a,c,!0)).next(u=>{s?.incrementDocumentReadCount(u.length);let h=rn();for(const p of u){const m=this.Dr(Y.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(Ha(t,m)||i.has(m.key))&&(h=h.insert(m.key,m))}return h})}getAllFromCollectionGroup(e,t,r,i){let s=rn();const o=O_(t,r),a=O_(t,on.max());return di(e).X({index:QI,range:IDBKeyRange.bound(o,a,!0)},(c,u,h)=>{const p=this.Dr(Y.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(p.key,p),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new uV(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return N_(e).get(ld).next(t=>(ie(!!t,20021),t))}br(e,t){return N_(e).put(ld,t)}Dr(e,t){if(t){const r=Qx(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(ae.min())))return r}return Ze.newInvalidDocument(e)}}function hT(n){return new cV(n)}class uV extends uT{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new mr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new Ue((s,o)=>de(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Nr.get(s);if(t.push(this.Or.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=__(this.Or.serializer,o);i=i.add(s.path.popLast());const u=Hc(c);r+=u-a.size,t.push(this.Or.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=__(this.Or.serializer,o.convertToNoDocument(ae.min()));t.push(this.Or.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Or.updateMetadata(e,r)),C.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next(r=>(this.Nr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Or.Fr(e,t).next(({documents:r,Mr:i})=>(i.forEach((s,o)=>{this.Nr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function N_(n){return mt(n,va)}function di(n){return mt(n,Fc)}function So(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function O_(n,e){const t=e.documentKey.path.toArray();return[n,Kc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function M_(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=de(t[s],r[s]),i)return i;return i=de(t.length,r.length),i||(i=de(t[t.length-2],r[r.length-2]),i||de(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&sa(r.mutation,i,Ht.empty(),Le.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,t,r=be()){const i=xn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=No();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=xn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,be()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=rn();const o=ia(),a=function(){return ia()}();return t.forEach((c,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof gr)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),sa(h.mutation,u,h.mutation.getFieldMask(),Le.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var p;return a.set(u,new hV(h,(p=o.get(u))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,t){const r=ia();let i=new ze((o,a)=>o-a),s=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let h=r.get(c)||Ht.empty();h=a.applyToLocalView(u,h),r.set(c,h);const p=(i.get(a.batchId)||be()).add(c);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,p=PE();h.forEach(m=>{if(!s.has(m)){const y=OE(t.get(m),r.get(m));y!==null&&p.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):TE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):C.resolve(xn());let a=Vs,c=s;return o.next(u=>C.forEach(u,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?C.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,be())).next(h=>({batchId:a,changes:RE(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(r=>{let i=No();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=No();return this.indexManager.getCollectionParents(e,s).next(a=>C.forEach(a,c=>{const u=function(p,m){return new eo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ze.newInvalidDocument(h)))});let a=No();return o.forEach((c,u)=>{const h=s.get(c);h!==void 0&&sa(h.mutation,u,Ht.empty(),Le.now()),Ha(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return C.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:qt(i.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:eT(i.bundledQuery),readTime:qt(i.readTime)}}(t)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(){this.overlays=new ze(Y.comparator),this.kr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=xn();return C.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.wt(e,t,s)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const i=xn(),s=t.length+1,o=new Y(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ze((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=xn(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=xn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return C.resolve(a)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Mf(t,r));let s=this.kr.get(t);s===void 0&&(s=be(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.qr=new Ue(_t.Qr),this.$r=new Ue(_t.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new _t(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new _t(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new Y(new Ne([])),r=new _t(t,e),i=new _t(t,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Y(new Ne([])),r=new _t(t,e),i=new _t(t,e+1);let s=be();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new _t(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class _t{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Y.comparator(e.key,t.key)||de(e.Hr,t.Hr)}static Ur(e,t){return de(e.Hr,t.Hr)||Y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mV{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ue(_t.Qr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nf(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Yr=this.Yr.add(new _t(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Si:this.er-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new _t(t,0),i=new _t(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const a=this.Zr(o.Hr);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ue(de);return t.forEach(i=>{const s=new _t(i,0),o=new _t(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],a=>{r=r.add(a.Hr)})}),C.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new _t(new Y(s),0);let a=new Ue(de);return this.Yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.Hr)),!0)},o),C.resolve(this.ei(a))}ei(e){const t=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ie(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return C.forEach(t.mutations,i=>{const s=new _t(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new _t(t,0),i=this.Yr.firstAfterOrEqual(r);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(e){this.ni=e,this.docs=function(){return new ze(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(t))}getEntries(e,t){let r=rn();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=rn();const o=t.path,a=new Y(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Tf(qI(h),r)<=0||(i.has(h.key)||Ha(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,t,r,i){te(9500)}ri(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new _V(this)}getSize(e){return C.resolve(this.size)}}class _V extends uT{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e){this.persistence=e,this.ii=new mr(t=>Oi(t),Ka),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.si=0,this.oi=new $f,this.targetCount=0,this._i=Fi.ar()}forEachTarget(e,t){return this.ii.forEach((r,i)=>t(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),C.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Fi(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.hr(t),C.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ii.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t){this.ai={},this.overlays={},this.ui=new Gt(0),this.ci=!1,this.ci=!0,this.li=new pV,this.referenceDelegate=e(this),this.hi=new yV(this),this.indexManager=new rV,this.remoteDocumentCache=function(i){return new gV(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new JE(t),this.Ti=new dV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fV,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new mV(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const i=new vV(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return C.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class vV extends KI{constructor(e){super(),this.currentSequenceNumber=e}}class Pu{constructor(e){this.persistence=e,this.Ai=new $f,this.Ri=null}static Vi(e){return new Pu(e)}get mi(){if(this.Ri)return this.Ri;throw te(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.mi,r=>{const i=Y.fromPath(r);return this.fi(e,i).next(s=>{s||t.removeEntry(i,ae.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return C.or([()=>C.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Wc{constructor(e,t){this.persistence=e,this.gi=new mr(r=>Mt(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=cT(this,t)}static Vi(e,t){return new Wc(e,t)}Ii(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return C.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?C.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,t).next(a=>{a||(r++,s.removeEntry(o,ae.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),C.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=rc(e.data.value)),t}Sr(e,t,r){return C.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(e){this.serializer=e}q(e,t,r,i){const s=new gu("createOrUpgrade",t);r<1&&i>=1&&(function(c){c.createObjectStore(za)}(e),function(c){c.createObjectStore(ya,{keyPath:MD}),c.createObjectStore(_n,{keyPath:Hg,autoIncrement:!0}).createIndex(wi,Wg,{unique:!0}),c.createObjectStore(ks)}(e),L_(e),function(c){c.createObjectStore(_i)}(e));let o=C.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore(Os),c.deleteObjectStore(Ns),c.deleteObjectStore(Ri)}(e),L_(e)),o=o.next(()=>function(c){const u=c.store(Ri),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ae.min().toTimestamp(),targetCount:0};return u.put(Uc,h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store(_n).j().next(p=>{c.deleteObjectStore(_n),c.createObjectStore(_n,{keyPath:Hg,autoIncrement:!0}).createIndex(wi,Wg,{unique:!0});const m=u.store(_n),y=p.map(A=>m.put(A));return C.waitFor(y)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore(Ms,{keyPath:KD})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.pi(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore(va)}(e),this.yi(s)))),r<7&&i>=7&&(o=o.next(()=>this.wi(s))),r<8&&i>=8&&(o=o.next(()=>this.Si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.bi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore(yu,{keyPath:GD})})(e),function(c){c.createObjectStore(vu,{keyPath:HD})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore(Iu,{keyPath:ex});u.createIndex(ud,tx,{unique:!1}),u.createIndex(ZI,nx,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore(Fc,{keyPath:FD});u.createIndex(tc,UD),u.createIndex(QI,BD)}(e)).next(()=>this.Di(e,s)).next(()=>e.deleteObjectStore(_i))),r<14&&i>=14&&(o=o.next(()=>this.Ci(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore(Af,{keyPath:WD,autoIncrement:!0}).createIndex(cd,QD,{unique:!1}),c.createObjectStore(ea,{keyPath:XD}).createIndex(YI,YD,{unique:!1}),c.createObjectStore(ta,{keyPath:JD}).createIndex(JI,ZD,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore(ea).clear()}).next(()=>{t.objectStore(ta).clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(c){c.createObjectStore(Sf,{keyPath:rx})})(e)})),r<18&&i>=18&&Wv()&&(o=o.next(()=>{t.objectStore(ea).clear()}).next(()=>{t.objectStore(ta).clear()})),o}yi(e){let t=0;return e.store(_i).X((r,i)=>{t+=Hc(i)}).next(()=>{const r={byteSize:t};return e.store(va).put(ld,r)})}pi(e){const t=e.store(ya),r=e.store(_n);return t.j().next(i=>C.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,Si],[s.userId,s.lastAcknowledgedBatchId]);return r.j(wi,o).next(a=>C.forEach(a,c=>{ie(c.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const u=vi(this.serializer,c);return iT(e,s.userId,u).next(()=>{})}))}))}wi(e){const t=e.store(Os),r=e.store(_i);return e.store(Ri).get(Uc).next(i=>{const s=[];return r.X((o,a)=>{const c=new Ne(o),u=function(p){return[0,Mt(p)]}(c);s.push(t.get(u).next(h=>h?C.resolve():(p=>t.put({targetId:0,path:Mt(p),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>C.waitFor(s))})}Si(e,t){e.createObjectStore(Ia,{keyPath:zD});const r=t.store(Ia),i=new Bf,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Mt(c)})}};return t.store(_i).X({Z:!0},(o,a)=>{const c=new Ne(o);return s(c.popLast())}).next(()=>t.store(ks).X({Z:!0},([o,a,c],u)=>{const h=Dn(a);return s(h.popLast())}))}bi(e){const t=e.store(Ns);return t.X((r,i)=>{const s=Mo(i),o=ZE(this.serializer,s);return t.put(o)})}Di(e,t){const r=t.store(_i),i=[];return r.X((s,o)=>{const a=t.store(Fc),c=function(p){return p.document?new Y(Ne.fromString(p.document.name).popFirst(5)):p.noDocument?Y.fromSegments(p.noDocument.path):p.unknownDocument?Y.fromSegments(p.unknownDocument.path):te(36783)}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>C.waitFor(i))}Ci(e,t){const r=t.store(_n),i=hT(this.serializer),s=new jf(Pu.Vi,this.serializer.gt);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let h=(u=a.get(c.userId))!==null&&u!==void 0?u:be();vi(this.serializer,c).keys().forEach(p=>h=h.add(p)),a.set(c.userId,h)}),C.forEach(a,(c,u)=>{const h=new Dt(u),p=Su.yt(this.serializer,h),m=s.getIndexManager(h),y=Ru.yt(h,this.serializer,m,s.referenceDelegate);return new dT(i,y,p,m).recalculateAndSaveOverlaysForDocumentKeys(new hd(t,Gt.ue),c).next()})})}}function L_(n){n.createObjectStore(Os,{keyPath:jD}).createIndex(bf,qD,{unique:!0}),n.createObjectStore(Ns,{keyPath:"targetId"}).createIndex(XI,$D,{unique:!0}),n.createObjectStore(Ri)}const br="IndexedDbPersistence",Sh=18e5,Rh=5e3,Ph="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",EV="main";class qf{constructor(e,t,r,i,s,o,a,c,u,h,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Fi=s,this.window=o,this.document=a,this.Mi=u,this.xi=h,this.Oi=p,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=m=>Promise.resolve(),!qf.C())throw new G(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new lV(this,i),this.Qi=t+EV,this.serializer=new JE(c),this.$i=new $r(this.Qi,this.Oi,new IV(this.serializer)),this.li=new Yx,this.hi=new sV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=hT(this.serializer),this.Ti=new Xx,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,h===!1&&tt(br,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new G(O.FAILED_PRECONDITION,Ph);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.hi.getHighestSequenceNumber(e))}).then(e=>{this.ui=new Gt(e,this.Mi)}).then(()=>{this.ci=!0}).catch(e=>(this.$i&&this.$i.close(),Promise.reject(e)))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget(async()=>{this.started&&await this.Ki()}))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>kl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ji(e).next(t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)))})}).next(()=>this.Hi(e)).next(t=>this.isPrimary&&!t?this.Yi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(Jr(e))return B(br,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return B(br,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable(()=>this.qi(e)),this.isPrimary=e})}Ji(e){return Ro(e).get(Xi).next(t=>C.resolve(this.Xi(t)))}es(e){return kl(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,Sh)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=mt(t,Ms);return r.j().next(i=>{const s=this.rs(i,Sh),o=i.filter(a=>s.indexOf(a)===-1);return C.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ki().then(()=>this.ts()).then(()=>this.zi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?C.resolve(!0):Ro(e).get(Xi).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Rh)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new G(O.FAILED_PRECONDITION,Ph);return!1}}return!(!this.networkEnabled||!this.inForeground)||kl(e).j().next(r=>this.rs(r,Rh).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&B(br,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[za,Ms],e=>{const t=new hd(e,Gt.ue);return this.Yi(t).next(()=>this.es(t))}),this.$i.close(),this.hs()}rs(e,t){return e.filter(r=>this.ns(r.updateTimeMs,t)&&!this._s(r.clientId))}Ps(){return this.runTransaction("getActiveClients","readonly",e=>kl(e).j().next(t=>this.rs(t,Sh).map(r=>r.clientId)))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return Ru.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new iV(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return Su.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,r){B(br,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===18?ox:c===17?rE:c===16?sx:c===15?Rf:c===14?nE:c===13?tE:c===12?ix:c===11?eE:void te(60245)}(this.Oi);let o;return this.$i.runTransaction(e,i,s,a=>(o=new hd(a,this.ui?this.ui.next():Gt.ue),t==="readwrite-primary"?this.Ji(o).next(c=>!!c||this.Hi(o)).next(c=>{if(!c)throw tt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)),new G(O.FAILED_PRECONDITION,zI);return r(o)}).next(c=>this.Zi(o).next(()=>c)):this.Ts(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ts(e){return Ro(e).get(Xi).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Rh)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new G(O.FAILED_PRECONDITION,Ph)})}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ro(e).put(Xi,t)}static C(){return $r.C()}Yi(e){const t=Ro(e);return t.get(Xi).next(r=>this.Xi(r)?(B(br,"Releasing primary lease."),t.delete(Xi)):C.resolve())}ns(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(tt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki()))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();const t=/(?:Version|Mobile)\/1[456]/;Hv()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const r=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return B(br,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return tt(br,"Failed to get zombied client id.",r),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){tt("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ro(n){return mt(n,za)}function kl(n){return mt(n,Ms)}function fT(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=be(),i=be();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zf(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Hv()?8:GI(pt())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ps(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new TV;return this.ws(e,t,o).next(a=>{if(s.result=a,this.Rs)return this.Ss(e,t,o,a.size)})}).next(()=>s.result)}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(is()<=Ae.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",ss(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(is()<=Ae.DEBUG&&B("QueryEngine","Query:",ss(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(is()<=Ae.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",ss(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(t))):C.resolve())}ps(e,t){if(a_(t))return C.resolve(null);let r=sn(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=yd(t,null,"F"),r=sn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=be(...s);return this.gs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.bs(t,a);return this.Ds(t,u,o,c.readTime)?this.ps(e,yd(t,null,"F")):this.vs(e,u,t,c)}))})))}ys(e,t,r,i){return a_(t)||i.isEqual(ae.min())?C.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(t,s);return this.Ds(t,o,r,i)?C.resolve(null):(is()<=Ae.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ss(t)),this.vs(e,o,t,jI(i,Vs)).next(a=>a))})}bs(e,t){let r=new Ue(AE(e));return t.forEach((i,s)=>{Ha(e,s)&&(r=r.add(s))}),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return is()<=Ae.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",ss(t)),this.gs.getDocumentsMatchingQuery(e,t,on.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="LocalStore",wV=3e8;class bV{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new ze(de),this.Ms=new mr(s=>Oi(s),Ka),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dT(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function mT(n,e,t,r){return new bV(n,e,t,r)}async function gT(n,e){const t=ne(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=be();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Bs:u,removedBatchIds:o,addedBatchIds:a}))})})}function AV(n,e){const t=ne(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const p=u.batch,m=p.keys();let y=C.resolve();return m.forEach(A=>{y=y.next(()=>h.getEntry(c,A)).next(R=>{const x=u.docVersions.get(A);ie(x!==null,48541),R.version.compareTo(x)<0&&(p.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),h.addEntry(R)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(c,p))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=be();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function _T(n){const e=ne(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function SV(n,e){const t=ne(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const a=[];e.targetChanges.forEach((h,p)=>{const m=i.get(p);if(!m)return;a.push(t.hi.removeMatchingKeys(s,h.removedDocuments,p).next(()=>t.hi.addMatchingKeys(s,h.addedDocuments,p)));let y=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(nt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),i=i.insert(p,y),function(R,x,k){return R.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=wV?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,y,h)&&a.push(t.hi.updateTargetData(s,y))});let c=rn(),u=be();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(RV(s,o,e.documentUpdates).next(h=>{c=h.Ls,u=h.ks})),!r.isEqual(ae.min())){const h=t.hi.getLastRemoteSnapshotVersion(s).next(p=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Fs=i,s))}function RV(n,e,t){let r=be(),i=be();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=rn();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):B(Kf,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ls:o,ks:i}})}function PV(n,e){const t=ne(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Si),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Qc(n,e){const t=ne(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.hi.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):t.hi.allocateTargetId(r).next(o=>(i=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function Ks(n,e,t){const r=ne(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Jr(o))throw o;B(Kf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Sd(n,e,t){const r=ne(n);let i=ae.min(),s=be();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const p=ne(c),m=p.Ms.get(h);return m!==void 0?C.resolve(p.Fs.get(m)):p.hi.getTargetData(u,h)}(r,o,sn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:ae.min(),t?s:be())).next(a=>(IT(r,bE(e),a),{documents:a,qs:s})))}function yT(n,e){const t=ne(n),r=ne(t.hi),i=t.Fs.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.Et(s,e).next(o=>o?o.target:null))}function vT(n,e){const t=ne(n),r=t.xs.get(e)||ae.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Os.getAllFromCollectionGroup(i,e,jI(r,Vs),Number.MAX_SAFE_INTEGER)).then(i=>(IT(t,e,i),i))}function IT(n,e,t){let r=n.xs.get(e)||ae.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.xs.set(e,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="firestore_clients";function F_(n,e){return`${ET}_${n}_${e}`}const TT="firestore_mutations";function U_(n,e,t){let r=`${TT}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const wT="firestore_targets";function Ch(n,e){return`${wT}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn="SharedClientState";class Xc{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Ks(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new G(i.error.code,i.error.message))),o?new Xc(e,t,i.state,s):(tt(Cn,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class oa{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ks(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new G(r.error.code,r.error.message))),s?new oa(e,r.state,i):(tt(Cn,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Yc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Vf();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=HI(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Yc(e,s):(tt(Cn,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Gf{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Gf(t.clientId,t.onlineState):(tt(Cn,`Failed to parse online state: ${e}`),null)}}class Rd{constructor(){this.activeTargetIds=Vf()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dh{constructor(e,t,r,i,s){this.window=e,this.Fi=t,this.persistenceKey=r,this.js=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new ze(de),this.started=!1,this.Zs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=F_(this.persistenceKey,this.js),this.eo=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new Rd),this.no=new RegExp(`^${ET}_${o}_([^_]*)$`),this.ro=new RegExp(`^${TT}_${o}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${wT}_${o}_(\\d+)$`),this.so=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.oo=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ps();for(const r of e){if(r===this.js)continue;const i=this.getItem(F_(this.persistenceKey,r));if(i){const s=Yc.Ks(r,i);s&&(this.Ys=this.Ys.insert(s.clientId,s))}}this._o();const t=this.storage.getItem(this.so);if(t){const r=this.ao(t);r&&this.uo(r)}for(const r of this.Zs)this.Hs(r);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,r){this.lo(e,t,r),this.ho(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Ch(this.persistenceKey,e));if(i){const s=oa.Ks(e,i);s&&(r=s.state)}}return t&&this.Po.Gs(e),this._o(),r}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ch(this.persistenceKey,e))}updateQueryState(e,t,r){this.To(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.ho(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return B(Cn,"READ",e,t),t}setItem(e,t){B(Cn,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){B(Cn,"REMOVE",e),this.storage.removeItem(e)}Hs(e){const t=e;if(t.storageArea===this.storage){if(B(Cn,"EVENT",t.key,t.newValue),t.key===this.Xs)return void tt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.no.test(t.key)){if(t.newValue==null){const r=this.Ao(t.key);return this.Ro(r,null)}{const r=this.Vo(t.key,t.newValue);if(r)return this.Ro(r.clientId,r)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const r=this.mo(t.key,t.newValue);if(r)return this.fo(r)}}else if(this.io.test(t.key)){if(t.newValue!==null){const r=this.po(t.key,t.newValue);if(r)return this.yo(r)}}else if(t.key===this.so){if(t.newValue!==null){const r=this.ao(t.newValue);if(r)return this.uo(r)}}else if(t.key===this.eo){const r=function(s){let o=Gt.ue;if(s!=null)try{const a=JSON.parse(s);ie(typeof a=="number",30636,{wo:s}),o=a}catch(a){tt(Cn,"Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Gt.ue&&this.sequenceNumberHandler(r)}else if(t.key===this.oo){const r=this.So(t.newValue);await Promise.all(r.map(i=>this.syncEngine.bo(i)))}}}else this.Zs.push(t)})}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,r){const i=new Xc(this.currentUser,e,t,r),s=U_(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ws())}ho(e){const t=U_(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){const t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,r){const i=Ch(this.persistenceKey,e),s=new oa(e,t,r);this.setItem(i,s.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){const t=this.no.exec(e);return t?t[1]:null}Vo(e,t){const r=this.Ao(e);return Yc.Ks(r,t)}mo(e,t){const r=this.ro.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Xc.Ks(new Dt(s),i,t)}po(e,t){const r=this.io.exec(e),i=Number(r[1]);return oa.Ks(i,t)}ao(e){return Gf.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);B(Cn,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){const r=t?this.Ys.insert(e,t):this.Ys.remove(e),i=this.co(this.Ys),s=this.co(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Co(o,a).then(()=>{this.Ys=r})}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=Vf();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class bT{constructor(){this.Fo=new Rd,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Rd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="ConnectivityMonitor";class $_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){B(B_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){B(B_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl=null;function Pd(){return Nl===null?Nl=function(){return 268435456+Math.round(2147483648*Math.random())}():Nl++,"0x"+Nl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="RestConnection",DV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xV{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Bc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const o=Pd(),a=this.Go(e,t.toUriEncodedString());B(xh,`Sending RPC '${e}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,i,s);const{host:u}=new URL(a),h=Xs(u);return this.jo(e,a,c,r,h).then(p=>(B(xh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Gr(xh,`RPC '${e}' ${o} failed with error: `,p,"url: ",a,"request:",r),p})}Jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,t){const r=DV[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class kV extends xV{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){const o=Pd();return new Promise((a,c)=>{const u=new VI;u.setWithCredentials(!0),u.listenOnce(kI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Jl.NO_ERROR:const p=u.getResponseJson();B(Ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case Jl.TIMEOUT:B(Ct,`RPC '${e}' ${o} timed out`),c(new G(O.DEADLINE_EXCEEDED,"Request time out"));break;case Jl.HTTP_ERROR:const m=u.getStatus();if(B(Ct,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const A=y?.error;if(A&&A.status&&A.message){const R=function(k){const L=k.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(L)>=0?L:O.UNKNOWN}(A.status);c(new G(R,A.message))}else c(new G(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new G(O.UNAVAILABLE,"Connection failed."));break;default:te(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{B(Ct,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(i);B(Ct,`RPC '${e}' ${o} sending request:`,i),u.send(t,"POST",h,r,15)})}P_(e,t,r){const i=Pd(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=MI(),a=OI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=s.join("");B(Ct,`Creating RPC '${e}' stream ${i}: ${h}`,c);const p=o.createWebChannel(h,c);this.T_(p);let m=!1,y=!1;const A=new VV({Ho:x=>{y?B(Ct,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(B(Ct,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),B(Ct,`RPC '${e}' stream ${i} sending:`,x),p.send(x))},Yo:()=>p.close()}),R=(x,k,L)=>{x.listen(k,M=>{try{L(M)}catch(F){setTimeout(()=>{throw F},0)}})};return R(p,ko.EventType.OPEN,()=>{y||(B(Ct,`RPC '${e}' stream ${i} transport opened.`),A.s_())}),R(p,ko.EventType.CLOSE,()=>{y||(y=!0,B(Ct,`RPC '${e}' stream ${i} transport closed`),A.__(),this.I_(p))}),R(p,ko.EventType.ERROR,x=>{y||(y=!0,Gr(Ct,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),A.__(new G(O.UNAVAILABLE,"The operation could not be completed")))}),R(p,ko.EventType.MESSAGE,x=>{var k;if(!y){const L=x.data[0];ie(!!L,16349);const M=L,F=M?.error||((k=M[0])===null||k===void 0?void 0:k.error);if(F){B(Ct,`RPC '${e}' stream ${i} received error:`,F);const ee=F.status;let K=function(T){const E=it[T];if(E!==void 0)return FE(E)}(ee),v=F.message;K===void 0&&(K=O.INTERNAL,v="Unknown error status: "+ee+" with message "+F.message),y=!0,A.__(new G(K,v)),p.close()}else B(Ct,`RPC '${e}' stream ${i} received:`,L),A.a_(L)}}),R(a,NI.STAT_EVENT,x=>{x.stat===sd.PROXY?B(Ct,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===sd.NOPROXY&&B(Ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.o_()},0),A}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(){return typeof window<"u"?window:null}function lc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n){return new Ux(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="PersistentStream";class RT{constructor(e,t,r,i,s,o,a,c){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new ST(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(tt(t.toString()),tt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===t&&this.W_(r,i)},r=>{e(()=>{const i=new G(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return B(j_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(B(j_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NV extends RT{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=jx(this.serializer,e),r=function(s){if(!("targetChange"in s))return ae.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?qt(o.readTime):ae.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Ed(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=$c(c)?{documents:GE(s,c)}:{query:HE(s,c).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$E(s,o.resumeToken);const u=vd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=zs(s,o.snapshotVersion.toTimestamp());const u=vd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=zx(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Ed(this.serializer),t.removeTarget=e,this.k_(t)}}class OV extends RT{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=qx(e.writeResults,e.commitTime),r=qt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Ed(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>zc(this.serializer,r))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{}class LV extends MV{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new G(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Id(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(O.UNKNOWN,s.toString())})}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Jo(e,Id(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(O.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class FV{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(tt(t),this._a=!1):B("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="RemoteStore";class UV{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{$i(this)&&(B(Ui,"Restarting streams for network reachability change."),await async function(c){const u=ne(c);u.Ia.add(4),await Ya(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Du(u)}(this))})}),this.Aa=new FV(r,i)}}async function Du(n){if($i(n))for(const e of n.da)await e(!0)}async function Ya(n){for(const e of n.da)await e(!1)}function xu(n,e){const t=ne(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Qf(t)?Wf(t):ro(t).x_()&&Hf(t,e))}function Gs(n,e){const t=ne(n),r=ro(t);t.Ta.delete(e),r.x_()&&PT(t,e),t.Ta.size===0&&(r.x_()?r.B_():$i(t)&&t.Aa.set("Unknown"))}function Hf(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ro(n).H_(e)}function PT(n,e){n.Ra.$e(e),ro(n).Y_(e)}function Wf(n){n.Ra=new Ox({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ro(n).start(),n.Aa.aa()}function Qf(n){return $i(n)&&!ro(n).M_()&&n.Ta.size>0}function $i(n){return ne(n).Ia.size===0}function CT(n){n.Ra=void 0}async function BV(n){n.Aa.set("Online")}async function $V(n){n.Ta.forEach((e,t)=>{Hf(n,e)})}async function jV(n,e){CT(n),Qf(n)?(n.Aa.la(e),Wf(n)):n.Aa.set("Unknown")}async function qV(n,e,t){if(n.Aa.set("Online"),e instanceof BE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Ta.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ta.delete(a),i.Ra.removeTarget(a))}(n,e)}catch(r){B(Ui,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jc(n,r)}else if(e instanceof oc?n.Ra.Ye(e):e instanceof UE?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ae.min()))try{const r=await _T(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.Ra.Pt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.Ta.get(u);h&&s.Ta.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=s.Ta.get(c);if(!h)return;s.Ta.set(c,h.withResumeToken(nt.EMPTY_BYTE_STRING,h.snapshotVersion)),PT(s,c);const p=new Zn(h.target,c,u,h.sequenceNumber);Hf(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){B(Ui,"Failed to raise snapshot:",r),await Jc(n,r)}}async function Jc(n,e,t){if(!Jr(e))throw e;n.Ia.add(1),await Ya(n),n.Aa.set("Offline"),t||(t=()=>_T(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B(Ui,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Du(n)})}function DT(n,e){return e().catch(t=>Jc(n,t,e))}async function no(n){const e=ne(n),t=Qr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Si;for(;zV(e);)try{const i=await PV(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,KV(e,i)}catch(i){await Jc(e,i)}xT(e)&&VT(e)}function zV(n){return $i(n)&&n.Pa.length<10}function KV(n,e){n.Pa.push(e);const t=Qr(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function xT(n){return $i(n)&&!Qr(n).M_()&&n.Pa.length>0}function VT(n){Qr(n).start()}async function GV(n){Qr(n).na()}async function HV(n){const e=Qr(n);for(const t of n.Pa)e.X_(t.mutations)}async function WV(n,e,t){const r=n.Pa.shift(),i=Of.from(r,e,t);await DT(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await no(n)}async function QV(n,e){e&&Qr(n).Z_&&await async function(r,i){if(function(o){return kx(o)&&o!==O.ABORTED}(i.code)){const s=r.Pa.shift();Qr(r).N_(),await DT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await no(r)}}(n,e),xT(n)&&VT(n)}async function q_(n,e){const t=ne(n);t.asyncQueue.verifyOperationInProgress(),B(Ui,"RemoteStore received new credentials");const r=$i(t);t.Ia.add(3),await Ya(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Du(t)}async function Cd(n,e){const t=ne(n);e?(t.Ia.delete(2),await Du(t)):e||(t.Ia.add(2),await Ya(t),t.Aa.set("Unknown"))}function ro(n){return n.Va||(n.Va=function(t,r,i){const s=ne(t);return s.ia(),new NV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:BV.bind(null,n),e_:$V.bind(null,n),n_:jV.bind(null,n),J_:qV.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),Qf(n)?Wf(n):n.Aa.set("Unknown")):(await n.Va.stop(),CT(n))})),n.Va}function Qr(n){return n.ma||(n.ma=function(t,r,i){const s=ne(t);return s.ia(),new OV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:GV.bind(null,n),n_:QV.bind(null,n),ea:HV.bind(null,n),ta:WV.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await no(n)):(await n.ma.stop(),n.Pa.length>0&&(B(Ui,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Xf(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yf(n,e){if(tt("AsyncQueue",`${e}: ${n}`),Jr(n))return new G(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{static emptySet(e){return new ws(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=No(),this.sortedSet=new ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.fa=new ze(Y.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):te(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class Hs{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Hs(e,t,ws.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class YV{constructor(){this.queries=K_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=ne(t),s=i.queries;i.queries=K_(),s.forEach((o,a)=>{for(const c of a.wa)c.onError(r)})})(this,new G(O.ABORTED,"Firestore shutting down"))}}function K_(){return new mr(n=>wE(n),wu)}async function kT(n,e){const t=ne(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new XV,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=Yf(o,`Initialization of query '${ss(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Jf(t)}async function NT(n,e){const t=ne(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function JV(n,e){const t=ne(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.wa)a.Ca(i)&&(r=!0);o.ya=i}}r&&Jf(t)}function ZV(n,e,t){const r=ne(n),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(t);r.queries.delete(e)}function Jf(n){n.Da.forEach(e=>{e.next()})}var Dd,G_;(G_=Dd||(Dd={})).Fa="default",G_.Cache="cache";class OT{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Dd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e){this.key=e}}class LT{constructor(e){this.key=e}}class ek{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=be(),this.mutatedKeys=be(),this.Xa=AE(e),this.eu=new ws(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new z_,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const m=i.get(h),y=Ha(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),R=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let x=!1;m&&y?m.data.isEqual(y.data)?A!==R&&(r.track({type:3,doc:y}),x=!0):this.iu(m,y)||(r.track({type:2,doc:y}),x=!0,(c&&this.Xa(y,c)>0||u&&this.Xa(y,u)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),x=!0):m&&!y&&(r.track({type:1,doc:m}),x=!0,(c||u)&&(a=!0)),x&&(y?(o=o.add(y),s=R?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{eu:o,ru:r,Ds:a,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((h,p)=>function(y,A){const R=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{At:x})}};return R(y)-R(A)}(h.type,p.type)||this.Xa(h.doc,p.doc)),this.su(r),i=i!=null&&i;const a=t&&!i?this.ou():[],c=this.Za.size===0&&this.current&&!i?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new Hs(this.query,e.eu,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new z_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=be(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new LT(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new MT(r))}),t}uu(e){this.Ha=e.qs,this.Za=be();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Hs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const io="SyncEngine";class tk{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class nk{constructor(e){this.key=e,this.lu=!1}}class rk{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new mr(a=>wE(a),wu),this.Tu=new Map,this.Iu=new Set,this.du=new ze(Y.comparator),this.Eu=new Map,this.Au=new $f,this.Ru={},this.Vu=new Map,this.mu=Fi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function ik(n,e,t=!0){const r=Vu(n);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await FT(r,e,t,!0),i}async function sk(n,e){const t=Vu(n);await FT(t,e,!0,!1)}async function FT(n,e,t,r){const i=await Qc(n.localStore,sn(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await Zf(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&xu(n.remoteStore,i),a}async function Zf(n,e,t,r,i){n.gu=(p,m,y)=>async function(R,x,k,L){let M=x.view.nu(k);M.Ds&&(M=await Sd(R.localStore,x.query,!1).then(({documents:v})=>x.view.nu(v,M)));const F=L&&L.targetChanges.get(x.targetId),ee=L&&L.targetMismatches.get(x.targetId)!=null,K=x.view.applyChanges(M,R.isPrimaryClient,F,ee);return xd(R,x.targetId,K._u),K.snapshot}(n,p,m,y);const s=await Sd(n.localStore,e,!0),o=new ek(e,s.qs),a=o.nu(s.documents),c=Xa.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);xd(n,t,u._u);const h=new tk(e,t,o);return n.Pu.set(e,h),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),u.snapshot}async function ok(n,e,t){const r=ne(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!wu(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ks(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Gs(r.remoteStore,i.targetId),Ws(r,i.targetId)}).catch(Yr)):(Ws(r,i.targetId),await Ks(r.localStore,i.targetId,!0))}async function ak(n,e){const t=ne(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Gs(t.remoteStore,r.targetId))}async function lk(n,e,t){const r=rp(n);try{const i=await function(o,a){const c=ne(o),u=Le.now(),h=a.reduce((y,A)=>y.add(A.key),be());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let A=rn(),R=be();return c.Os.getEntries(y,h).next(x=>{A=x,A.forEach((k,L)=>{L.isValidDocument()||(R=R.add(k))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,A)).next(x=>{p=x;const k=[];for(const L of a){const M=xx(L,p.get(L.key).overlayedDocument);M!=null&&k.push(new gr(L.key,M,fE(M.value.mapValue),ft.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,k,a)}).next(x=>{m=x;const k=x.applyToLocalDocumentSet(p,R);return c.documentOverlayCache.saveOverlays(y,x.batchId,k)})}).then(()=>({batchId:m.batchId,changes:RE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new ze(de)),u=u.insert(a,c),o.Ru[o.currentUser.toKey()]=u}(r,i.batchId,t),await ei(r,i.changes),await no(r.remoteStore)}catch(i){const s=Yf(i,"Failed to persist write");t.reject(s)}}async function UT(n,e){const t=ne(n);try{const r=await SV(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Eu.get(s);o&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?ie(o.lu,14607):i.removedDocuments.size>0&&(ie(o.lu,42227),o.lu=!1))}),await ei(t,r,e)}catch(r){await Yr(r)}}function H_(n,e,t){const r=ne(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=ne(o);c.onlineState=a;let u=!1;c.queries.forEach((h,p)=>{for(const m of p.wa)m.va(a)&&(u=!0)}),u&&Jf(c)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ck(n,e,t){const r=ne(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new ze(Y.comparator);o=o.insert(s,Ze.newNoDocument(s,ae.min()));const a=be().add(s),c=new Qa(ae.min(),new Map,new ze(de),o,a);await UT(r,c),r.du=r.du.remove(s),r.Eu.delete(e),np(r)}else await Ks(r.localStore,e,!1).then(()=>Ws(r,e,t)).catch(Yr)}async function uk(n,e){const t=ne(n),r=e.batch.batchId;try{const i=await AV(t.localStore,e);tp(t,r,null),ep(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ei(t,i)}catch(i){await Yr(i)}}async function hk(n,e,t){const r=ne(n);try{const i=await function(o,a){const c=ne(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(p=>(ie(p!==null,37113),h=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);tp(r,e,t),ep(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ei(r,i)}catch(i){await Yr(i)}}function ep(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function tp(n,e,t){const r=ne(n);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Ws(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||BT(n,r)})}function BT(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Gs(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),np(n))}function xd(n,e,t){for(const r of t)r instanceof MT?(n.Au.addReference(r.key,e),dk(n,r)):r instanceof LT?(B(io,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||BT(n,r.key)):te(19791,{yu:r})}function dk(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(B(io,"New document in limbo: "+t),n.Iu.add(r),np(n))}function np(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Y(Ne.fromString(e)),r=n.mu.next();n.Eu.set(r,new nk(t)),n.du=n.du.insert(t,r),xu(n.remoteStore,new Zn(sn(Ga(t.path)),r,"TargetPurposeLimboResolution",Gt.ue))}}async function ei(n,e,t){const r=ne(n),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((a,c)=>{o.push(r.gu(c,e,t).then(u=>{var h;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(h=t?.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){i.push(u);const p=zf.Es(c.targetId,u);s.push(p)}}))}),await Promise.all(o),r.hu.J_(i),await async function(c,u){const h=ne(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>C.forEach(u,m=>C.forEach(m.Is,y=>h.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>C.forEach(m.ds,y=>h.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!Jr(p))throw p;B(Kf,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=h.Fs.get(m),A=y.snapshotVersion,R=y.withLastLimboFreeSnapshotVersion(A);h.Fs=h.Fs.insert(m,R)}}}(r.localStore,s))}async function fk(n,e){const t=ne(n);if(!t.currentUser.isEqual(e)){B(io,"User change. New user:",e.toKey());const r=await gT(t.localStore,e);t.currentUser=e,function(s,o){s.Vu.forEach(a=>{a.forEach(c=>{c.reject(new G(O.CANCELLED,o))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ei(t,r.Bs)}}function pk(n,e){const t=ne(n),r=t.Eu.get(e);if(r&&r.lu)return be().add(r.key);{let i=be();const s=t.Tu.get(e);if(!s)return i;for(const o of s){const a=t.Pu.get(o);i=i.unionWith(a.view.tu)}return i}}async function mk(n,e){const t=ne(n),r=await Sd(t.localStore,e.query,!0),i=e.view.uu(r);return t.isPrimaryClient&&xd(t,e.targetId,i._u),i}async function gk(n,e){const t=ne(n);return vT(t.localStore,e).then(r=>ei(t,r))}async function _k(n,e,t,r){const i=ne(n),s=await function(a,c){const u=ne(a),h=ne(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",p=>h.Xn(p,c).next(m=>m?u.localDocuments.getDocuments(p,m):C.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await no(i.remoteStore):t==="acknowledged"||t==="rejected"?(tp(i,e,r||null),ep(i,e),function(a,c){ne(ne(a).mutationQueue).rr(c)}(i.localStore,e)):te(6720,"Unknown batchState",{wu:t}),await ei(i,s)):B(io,"Cannot apply mutation batch with id: "+e)}async function yk(n,e){const t=ne(n);if(Vu(t),rp(t),e===!0&&t.fu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await W_(t,r.toArray());t.fu=!0,await Cd(t.remoteStore,!0);for(const s of i)xu(t.remoteStore,s)}else if(e===!1&&t.fu!==!1){const r=[];let i=Promise.resolve();t.Tu.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ws(t,o),Ks(t.localStore,o,!0))),Gs(t.remoteStore,o)}),await i,await W_(t,r),function(o){const a=ne(o);a.Eu.forEach((c,u)=>{Gs(a.remoteStore,u)}),a.Au.jr(),a.Eu=new Map,a.du=new ze(Y.comparator)}(t),t.fu=!1,await Cd(t.remoteStore,!1)}}async function W_(n,e,t){const r=ne(n),i=[],s=[];for(const o of e){let a;const c=r.Tu.get(o);if(c&&c.length!==0){a=await Qc(r.localStore,sn(c[0]));for(const u of c){const h=r.Pu.get(u),p=await mk(r,h);p.snapshot&&s.push(p.snapshot)}}else{const u=await yT(r.localStore,o);a=await Qc(r.localStore,u),await Zf(r,$T(u),o,!1,a.resumeToken)}i.push(a)}return r.hu.J_(s),i}function $T(n){return EE(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function vk(n){return function(t){return ne(ne(t).persistence).Ps()}(ne(n).localStore)}async function Ik(n,e,t,r){const i=ne(n);if(i.fu)return void B(io,"Ignoring unexpected query state notification.");const s=i.Tu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await vT(i.localStore,bE(s[0])),a=Qa.createSynthesizedRemoteEventForCurrentChange(e,t==="current",nt.EMPTY_BYTE_STRING);await ei(i,o,a);break}case"rejected":await Ks(i.localStore,e,!0),Ws(i,e,r);break;default:te(64155,t)}}async function Ek(n,e,t){const r=Vu(n);if(r.fu){for(const i of e){if(r.Tu.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){B(io,"Adding an already active target "+i);continue}const s=await yT(r.localStore,i),o=await Qc(r.localStore,s);await Zf(r,$T(s),o.targetId,!1,o.resumeToken),xu(r.remoteStore,o)}for(const i of t)r.Tu.has(i)&&await Ks(r.localStore,i,!1).then(()=>{Gs(r.remoteStore,i),Ws(r,i)}).catch(Yr)}}function Vu(n){const e=ne(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=UT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ck.bind(null,e),e.hu.J_=JV.bind(null,e.eventManager),e.hu.pu=ZV.bind(null,e.eventManager),e}function rp(n){const e=ne(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hk.bind(null,e),e}class Ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cu(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return mT(this.persistence,new pT,e.initialUser,this.serializer)}Du(e){return new jf(Pu.Vi,this.serializer)}bu(e){return new bT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ra.provider={build:()=>new Ra};class Tk extends Ra{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ie(this.persistence.referenceDelegate instanceof Wc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lT(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new jf(r=>Wc.Vi(r,t),this.serializer)}}class jT extends Ra{constructor(e,t,r){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await rp(this.Mu.syncEngine),await no(this.Mu.remoteStore),await this.persistence.ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return mT(this.persistence,new pT,e.initialUser,this.serializer)}Cu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new lT(r,e.asyncQueue,t)}Fu(e,t){const r=new ND(t,this.persistence);return new kD(e.asyncQueue,r)}Du(e){const t=fT(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new qf(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,AT(),lc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new bT}}class wk extends jT{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Mu.syncEngine;this.sharedClientState instanceof Dh&&(this.sharedClientState.syncEngine={Do:_k.bind(null,t),vo:Ik.bind(null,t),Co:Ek.bind(null,t),Ps:vk.bind(null,t),bo:gk.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji(async r=>{await yk(this.Mu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}bu(e){const t=AT();if(!Dh.C(t))throw new G(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=fT(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Dh(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Pa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>H_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fk.bind(null,this.syncEngine),await Cd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YV}()}createDatastore(e){const t=Cu(e.databaseInfo.databaseId),r=function(s){return new kV(s)}(e.databaseInfo);return function(s,o,a,c){return new LV(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new UV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>H_(this.syncEngine,t,0),function(){return $_.C()?new $_:new CV}())}createSyncEngine(e,t){return function(i,s,o,a,c,u,h){const p=new rk(i,s,o,a,c,u);return h&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=ne(i);B(Ui,"RemoteStore shutting down."),s.Ia.add(5),await Ya(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Pa.provider={build:()=>new Pa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):tt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="FirestoreClient";class bk{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Dt.UNAUTHENTICATED,this.clientId=Ef.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B(Xr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(Xr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Yf(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vh(n,e){n.asyncQueue.verifyOperationInProgress(),B(Xr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await gT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{Gr("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{B("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{Gr("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=e}async function Q_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ak(n);B(Xr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>q_(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>q_(e.remoteStore,i)),n._onlineComponents=e}async function Ak(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B(Xr,"Using user provided OfflineComponentProvider");try{await Vh(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Gr("Error using user provided cache. Falling back to memory cache: "+t),await Vh(n,new Ra)}}else B(Xr,"Using default OfflineComponentProvider"),await Vh(n,new Tk(void 0));return n._offlineComponents}async function zT(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B(Xr,"Using user provided OnlineComponentProvider"),await Q_(n,n._uninitializedComponentsProvider._online)):(B(Xr,"Using default OnlineComponentProvider"),await Q_(n,new Pa))),n._onlineComponents}function Sk(n){return zT(n).then(e=>e.syncEngine)}async function Vd(n){const e=await zT(n),t=e.eventManager;return t.onListen=ik.bind(null,e.syncEngine),t.onUnlisten=ok.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ak.bind(null,e.syncEngine),t}function Rk(n,e,t={}){const r=new rr;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const h=new qT({next:m=>{h.Ou(),o.enqueueAndForget(()=>NT(s,p));const y=m.docs.has(a);!y&&m.fromCache?u.reject(new G(O.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&c&&c.source==="server"?u.reject(new G(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new OT(Ga(a.path),h,{includeMetadataChanges:!0,ka:!0});return kT(s,p)}(await Vd(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk="firestore.googleapis.com",Y_=!0;class J_{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pk,this.ssl=Y_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Y_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aT)throw new G(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=KT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ip{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new J_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new J_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TD;switch(r.type){case"firstParty":return new AD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=X_.get(t);r&&(B("ComponentProvider","Removing Datastore"),X_.delete(t),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ji(this.firestore,e,this._query)}}class et{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}toJSON(){return{type:et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(qa(t,et._jsonSchema))return new et(e,r||null,new Y(Ne.fromString(t.referencePath)))}}et._jsonSchemaVersion="firestore/documentReference/1.0",et._jsonSchema={type:at("string",et._jsonSchemaVersion),referencePath:at("string")};class jr extends ji{constructor(e,t,r){super(e,t,Ga(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new Y(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function Z_(n,e,...t){if(n=ut(n),BI("collection","path",e),n instanceof ip){const r=Ne.fromString(e,...t);return jg(r),new jr(n,null,r)}{if(!(n instanceof et||n instanceof jr))throw new G(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return jg(r),new jr(n.firestore,null,r)}}function An(n,e,...t){if(n=ut(n),arguments.length===1&&(e=Ef.newId()),BI("doc","path",e),n instanceof ip){const r=Ne.fromString(e,...t);return $g(r),new et(n,null,new Y(r))}{if(!(n instanceof et||n instanceof jr))throw new G(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return $g(r),new et(n.firestore,n instanceof jr?n.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="AsyncQueue";class ty{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ST(this,"async_queue_retry"),this.oc=()=>{const r=lc();r&&B(ey,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=lc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=lc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new rr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Jr(e))throw e;B(ey,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,tt("INTERNAL UNHANDLED ERROR: ",ny(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=Xf.createAndSchedule(this,e,t,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&te(47125,{hc:ny(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function ny(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class hr extends ip{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new ty,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ty(e),this._firestoreClient=void 0,await e}}}function Ck(n,e,t){t||(t=Bc);const r=lf(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(Di(s,e))return i;throw new G(O.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new G(O.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aT)throw new G(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Xs(e.host)&&Kv(e.host),r.initialize({options:e,instanceIdentifier:t})}function ku(n){if(n._terminated)throw new G(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Dk(n),n._firestoreClient}function Dk(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,u,h){return new lx(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,KT(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new bk(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const c=a?._online.build();return{_offline:a?._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new un(nt.fromBase64String(e))}catch(t){throw new G(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new un(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:un._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qa(e,un._jsonSchema))return un.fromBase64String(e.bytes)}}un._jsonSchemaVersion="firestore/bytes/1.0",un._jsonSchema={type:at("string",un._jsonSchemaVersion),bytes:at("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:On._jsonSchemaVersion}}static fromJSON(e){if(qa(e,On._jsonSchema))return new On(e.latitude,e.longitude)}}On._jsonSchemaVersion="firestore/geoPoint/1.0",On._jsonSchema={type:at("string",On._jsonSchemaVersion),latitude:at("number"),longitude:at("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qa(e,Mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Mn(e.vectorValues);throw new G(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mn._jsonSchemaVersion="firestore/vectorValue/1.0",Mn._jsonSchema={type:at("string",Mn._jsonSchemaVersion),vectorValues:at("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=/^__.*__$/;class Vk{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,t,this.fieldTransforms):new to(e,this.data,t,this.fieldTransforms)}}class GT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new gr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function HT(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{Ec:n})}}class sp{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new sp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Zc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(HT(this.Ec)&&xk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class kk{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Cu(e)}Dc(e,t,r,i=!1){return new sp({Ec:e,methodName:t,bc:r,path:Xe.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Za(n){const e=n._freezeSettings(),t=Cu(n._databaseId);return new kk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function op(n,e,t,r,i,s={}){const o=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);lp("Data must be an object, but it was:",o,r);const a=XT(r,o);let c,u;if(s.merge)c=new Ht(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const m=kd(e,p,t);if(!o.contains(m))throw new G(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);JT(h,m)||h.push(m)}c=new Ht(h),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new Vk(new Nt(a),c,u)}class Ou extends Nu{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ou}}class ap extends Nu{_toFieldTransform(e){return new NE(e.path,new $s)}isEqual(e){return e instanceof ap}}function WT(n,e,t,r){const i=n.Dc(1,e,t);lp("Data must be an object, but it was:",i,r);const s=[],o=Nt.empty();Zr(r,(c,u)=>{const h=cp(e,c,t);u=ut(u);const p=i.gc(h);if(u instanceof Ou)s.push(h);else{const m=el(u,p);m!=null&&(s.push(h),o.set(h,m))}});const a=new Ht(s);return new GT(o,a,i.fieldTransforms)}function QT(n,e,t,r,i,s){const o=n.Dc(1,e,t),a=[kd(e,r,t)],c=[i];if(s.length%2!=0)throw new G(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(kd(e,s[m])),c.push(s[m+1]);const u=[],h=Nt.empty();for(let m=a.length-1;m>=0;--m)if(!JT(u,a[m])){const y=a[m];let A=c[m];A=ut(A);const R=o.gc(y);if(A instanceof Ou)u.push(y);else{const x=el(A,R);x!=null&&(u.push(y),h.set(y,x))}}const p=new Ht(u);return new GT(h,p,o.fieldTransforms)}function Nk(n,e,t,r=!1){return el(t,n.Dc(r?4:3,e))}function el(n,e){if(YT(n=ut(n)))return lp("Unsupported field value:",e,n),XT(n,e);if(n instanceof Nu)return function(r,i){if(!HT(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=el(a,i.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ax(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:zs(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zs(i.serializer,s)}}if(r instanceof On)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof un)return{bytesValue:$E(i.serializer,r._byteString)};if(r instanceof et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ff(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Mn)return function(o,a){return{mapValue:{fields:{[Cf]:{stringValue:Df},[Ls]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.wc("VectorValues must only contain numeric values.");return kf(a.serializer,u)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${mu(r)}`)}(n,e)}function XT(n,e){const t={};return iE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zr(n,(r,i)=>{const s=el(i,e.Vc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function YT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Le||n instanceof On||n instanceof un||n instanceof et||n instanceof Nu||n instanceof Mn)}function lp(n,e,t){if(!YT(t)||!$I(t)){const r=mu(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function kd(n,e,t){if((e=ut(e))instanceof Ja)return e._internalPath;if(typeof e=="string")return cp(n,e);throw Zc("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ok=new RegExp("[~\\*/\\[\\]]");function cp(n,e,t){if(e.search(Ok)>=0)throw Zc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ja(...e.split("."))._internalPath}catch{throw Zc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zc(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new G(O.INVALID_ARGUMENT,a+n+c)}function JT(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Mk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(up("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Mk extends ZT{data(){return super.data()}}function up(n,e){return typeof e=="string"?cp(n,e):e instanceof Ja?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hp{}class ew extends hp{}function Fk(n,e,...t){let r=[];e instanceof hp&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof fp).length,a=s.filter(c=>c instanceof dp).length;if(o>1||o>0&&a>0)throw new G(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class dp extends ew{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new dp(e,t,r)}_apply(e){const t=this._parse(e);return tw(e._query,t),new ji(e.firestore,e.converter,_d(e._query,t))}_parse(e){const t=Za(e.firestore);return function(s,o,a,c,u,h,p){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new G(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){sy(p,h);const A=[];for(const R of p)A.push(iy(c,s,R));m={arrayValue:{values:A}}}else m=iy(c,s,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||sy(p,h),m=Nk(a,o,p,h==="in"||h==="not-in");return Se.create(u,h,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class fp extends hp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fp(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Fe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)tw(o,c),o=_d(o,c)}(e._query,t),new ji(e.firestore,e.converter,_d(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pp extends ew{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new pp(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new G(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Aa(s,o)}(e._query,this._field,this._direction);return new ji(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new eo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Uk(n,e="asc"){const t=e,r=up("orderBy",n);return pp._create(r,t)}function iy(n,e,t){if(typeof(t=ut(t))=="string"){if(t==="")throw new G(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!TE(e)&&t.indexOf("/")!==-1)throw new G(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ne.fromString(t));if(!Y.isDocumentKey(r))throw new G(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wa(n,new Y(r))}if(t instanceof et)return wa(n,t._key);throw new G(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mu(t)}.`)}function sy(n,e){if(!Array.isArray(n)||n.length===0)throw new G(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tw(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new G(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Bk{convertValue(e,t="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Zr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Ls].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>We(o.doubleValue));return new Mn(s)}convertGeoPoint(e){return new On(We(e.latitude),We(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Eu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ea(e));default:return null}}convertTimestamp(e){const t=cr(e);return new Le(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ne.fromString(e);ie(YE(r),9688,{name:e});const i=new Ni(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(t)||tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Lo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ci extends ZT{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new cc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(up("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ci._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ci._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ci._jsonSchema={type:at("string",Ci._jsonSchemaVersion),bundleSource:at("string","DocumentSnapshot"),bundleName:at("string"),bundle:at("string")};class cc extends Ci{data(e={}){return super.data(e)}}class bs{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Lo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new cc(this._firestore,this._userDataWriter,r.key,r,new Lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new cc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Lo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new cc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Lo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:$k(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ef.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $k(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(n){n=dn(n,et);const e=dn(n.firestore,hr);return Rk(ku(e),n._key).then(t=>rw(e,n,t))}bs._jsonSchemaVersion="firestore/querySnapshot/1.0",bs._jsonSchema={type:at("string",bs._jsonSchemaVersion),bundleSource:at("string","QuerySnapshot"),bundleName:at("string"),bundle:at("string")};class nw extends Bk{constructor(e){super(),this.firestore=e}convertBytes(e){return new un(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,t)}}function oy(n,e,t){n=dn(n,et);const r=dn(n.firestore,hr),i=mp(n.converter,e,t);return tl(r,[op(Za(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ft.none())])}function kh(n,e,t,...r){n=dn(n,et);const i=dn(n.firestore,hr),s=Za(i);let o;return o=typeof(e=ut(e))=="string"||e instanceof Ja?QT(s,"updateDoc",n._key,e,t,r):WT(s,"updateDoc",n._key,e),tl(i,[o.toMutation(n._key,ft.exists(!0))])}function qk(n){return tl(dn(n.firestore,hr),[new Wa(n._key,ft.none())])}function zk(n,e){const t=dn(n.firestore,hr),r=An(n),i=mp(n.converter,e);return tl(t,[op(Za(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,ft.exists(!1))]).then(()=>r)}function Kk(n,...e){var t,r,i;n=ut(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||ry(e[o])||(s=e[o++]);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(ry(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,u,h;if(n instanceof et)u=dn(n.firestore,hr),h=Ga(n._key.path),c={next:p=>{e[o]&&e[o](rw(u,n,p))},error:e[o+1],complete:e[o+2]};else{const p=dn(n,ji);u=dn(p.firestore,hr),h=p._query;const m=new nw(u);c={next:y=>{e[o]&&e[o](new bs(u,m,p,y))},error:e[o+1],complete:e[o+2]},Lk(n._query)}return function(m,y,A,R){const x=new qT(R),k=new OT(y,x,A);return m.asyncQueue.enqueueAndForget(async()=>kT(await Vd(m),k)),()=>{x.Ou(),m.asyncQueue.enqueueAndForget(async()=>NT(await Vd(m),k))}}(ku(u),h,a,c)}function tl(n,e){return function(r,i){const s=new rr;return r.asyncQueue.enqueueAndForget(async()=>lk(await Sk(r),i,s)),s.promise}(ku(n),e)}function rw(n,e,t){const r=t.docs.get(e._key),i=new nw(n);return new Ci(n,i,e._key,r,new Lo(t.hasPendingWrites,t.fromCache),e.converter)}class Gk{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Xk(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function Hk(n){return new Gk(n)}class Wk{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Pa.provider,this._offlineComponentProvider={build:t=>new jT(t,e?.cacheSizeBytes,this.forceOwnership)}}}class Qk{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Pa.provider,this._offlineComponentProvider={build:t=>new wk(t,e?.cacheSizeBytes)}}}function Xk(n){return new Wk(void 0)}function Yk(){return new Qk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Za(e)}set(e,t,r){this._verifyNotCommitted();const i=Nh(e,this._firestore),s=mp(i.converter,t,r),o=op(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ft.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Nh(e,this._firestore);let o;return o=typeof(t=ut(t))=="string"||t instanceof Ja?QT(this._dataReader,"WriteBatch.update",s._key,t,r,i):WT(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,ft.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Nh(e,this._firestore);return this._mutations=this._mutations.concat(new Wa(t._key,ft.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Nh(n,e){if((n=ut(n)).firestore!==e)throw new G(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Ol(){return new ap("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n){return ku(n=dn(n,hr)),new Jk(n,e=>tl(n,e))}(function(e,t=!0){(function(i){Zs=i})(Ys),Cs(new xi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new hr(new wD(r.getProvider("auth-internal")),new SD(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new G(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ur(Mg,Lg,e),Ur(Mg,Lg,"esm2017")})();const Zk={apiKey:"AIzaSyAvv7h4YGKySe1paEWBNQr0xdhCXOhDGJs",authDomain:"gch-monitoring.firebaseapp.com",projectId:"gch-monitoring",storageBucket:"gch-monitoring.firebasestorage.app",messagingSenderId:"205898511244",appId:"1:205898511244:web:3618063c3158fe85085ca9"},iw=Jv(Zk),gp=_D(iw),Qt=Ck(iw,{localCache:Hk({tabManager:Yk()})}),sw=Ge(null),ow=Ge(!1),hs=Ge(""),Nd=Ge(!1);let ly=!1;function eN(){ly||(ly=!0,sC(gp,n=>{sw.value=n,ow.value=!0}))}async function tN(){hs.value="",Nd.value=!0;try{const n=new Xn;await SC(gp,n)}catch(n){if(n?.code==="auth/popup-closed-by-user")return;n?.code==="auth/unauthorized-domain"?hs.value="This domain is not authorized in Firebase Authentication. Add it under Authorized domains.":n?.code==="auth/popup-blocked"?hs.value="Sign-in popup was blocked by your browser. Allow popups and try again.":hs.value=n?.message||"Sign-in failed. Please try again."}finally{Nd.value=!1}}async function nN(){hs.value="",await oC(gp)}function rN(){return eN(),{user:sw,authReady:ow,authError:hs,signingIn:Nd,signIn:tN,signOut:nN}}const Ml="/gchMonitoring/",iN=[{id:"ba",name:"Blue Archive",server:"Global",iconUrl:`${Ml}icons/ba.png`,resetHour:4,resetMinute:0,utcOffsetMin:540,remindBeforeMin:120,remindersEnabled:!0,order:0},{id:"zzz",name:"Zenless Zone Zero",server:"Asia",iconUrl:`${Ml}icons/zzz.png`,resetHour:4,resetMinute:0,utcOffsetMin:480,remindBeforeMin:120,remindersEnabled:!0,order:1},{id:"ak",name:"Arknights",server:"EN",iconUrl:`${Ml}icons/ak.png`,resetHour:4,resetMinute:0,utcOffsetMin:-420,remindBeforeMin:120,remindersEnabled:!0,order:2},{id:"gfl2",name:"Girls Frontline 2",server:"Darkwinter",iconUrl:`${Ml}icons/gfl2.png`,resetHour:5,resetMinute:0,utcOffsetMin:-240,remindBeforeMin:120,remindersEnabled:!0,order:3}];function sN(n){const e=Ge([]),t=Ge(!0),r=Ge(!1),i=Ge(!1),s=Ge("");let o=null;const a=new Set,c=new Set;function u(R,x){for(const k of x)if(!c.has(k.id)&&typeof k.iconUrl=="string"&&k.iconUrl.endsWith("/icons/ba.svg")){c.add(k.id);const L=k.iconUrl.replace(/\/icons\/ba\.svg$/,"/icons/ba.png");kh(An(Qt,"users",R,"games",k.id),{iconUrl:L}).catch(()=>{})}}async function h(R){if(a.has(R))return;a.add(R);const x=An(Qt,"users",R),k=await jk(x);if(k.exists()&&k.data()?.seededAt)return;const L=ay(Qt);for(const M of iN){const{id:F,...ee}=M;L.set(An(Qt,"users",R,"games",F),{...ee,lastDoneAt:null,lastRemindedFor:null})}L.set(x,{seededAt:Ol()},{merge:!0}),await L.commit()}_s(()=>n.value?.uid??null,R=>{if(o&&(o(),o=null),!R){e.value=[],t.value=!1,r.value=!1,i.value=!1,s.value="";return}t.value=!0,s.value="";const x=Fk(Z_(Qt,"users",R,"games"),Uk("order","asc"));o=Kk(x,{includeMetadataChanges:!0},k=>{e.value=k.docs.map(L=>({id:L.id,...L.data()})),r.value=k.metadata.hasPendingWrites,i.value=k.metadata.fromCache,t.value=!1,k.empty&&!k.metadata.fromCache?h(R).catch(L=>{s.value=L?.message||"Could not seed default games."}):u(R,e.value)},k=>{t.value=!1,s.value=k?.message||"Failed to sync games."})},{immediate:!0});async function p(R,x=new Date){const k=n.value?.uid;if(!k||!R?.id)return;const L=vs(R,x)?null:Ol();await kh(An(Qt,"users",k,"games",R.id),{lastDoneAt:L})}async function m(R,x){const k=n.value?.uid;if(!k)return;const L={name:x.name.trim(),server:x.server.trim(),iconUrl:x.iconUrl.trim(),resetHour:Number(x.resetHour),resetMinute:Number(x.resetMinute),utcOffsetMin:Number(x.utcOffsetMin),remindBeforeMin:Number(x.remindBeforeMin),remindersEnabled:!!x.remindersEnabled};if(R)await kh(An(Qt,"users",k,"games",R),L);else{await oy(An(Qt,"users",k),{seededAt:Ol()},{merge:!0});const M=e.value.reduce((F,ee)=>Math.max(F,ee.order??0),-1);await zk(Z_(Qt,"users",k,"games"),{...L,order:M+1,lastDoneAt:null,lastRemindedFor:null})}}async function y(R){const x=n.value?.uid;!x||!R||(await oy(An(Qt,"users",x),{seededAt:Ol()},{merge:!0}),await qk(An(Qt,"users",x,"games",R)))}async function A(R){const x=n.value?.uid;if(!x)return;const k=ay(Qt);let L=!1;R.forEach((M,F)=>{M.order!==F&&(k.update(An(Qt,"users",x,"games",M.id),{order:F}),L=!0)}),L&&await k.commit()}return{games:e,loading:t,syncing:r,offline:i,error:s,toggleDone:p,saveGame:m,deleteGame:y,reorderGames:A}}const oN={key:0,class:"boot-screen"},aN={class:"container dashboard-main"},lN={key:0,class:"banner-error",role:"alert"},cN={key:1,class:"empty-state"},uN={key:2,class:"empty-state"},hN={key:4,role:"list",class:"game-grid"},dN={__name:"App",setup(n){const{user:e,authReady:t,authError:r,signingIn:i,signIn:s,signOut:o}=rN(),{games:a,loading:c,syncing:u,offline:h,error:p,toggleDone:m,saveGame:y,deleteGame:A,reorderGames:R}=sN(e),{now:x}=xv(),k=Ge("manual"),L=Ge(null),M=Ge(!1),F=Ge(""),ee=st(()=>a.value.filter(I=>vs(I,x.value)).length),K=st(()=>k.value==="manual"?a.value:[...a.value].sort((I,re)=>{const he=vs(I,x.value),ye=vs(re,x.value);return he!==ye?he?1:-1:Pc(I,x.value)-Pc(re,x.value)})),v=st({get:()=>a.value,set:I=>{a.value=I,R(I).catch(re=>{F.value=re?.message||"Failed to save new order."})}});async function _(I){F.value="";try{await m(I,x.value)}catch(re){F.value=re?.message||"Could not update game status."}}function T(){L.value?.openForCreate()}function E(I){L.value?.openForEdit(I)}async function b({id:I,data:re,done:he,fail:ye}){M.value=!0;try{await y(I,re),he()}catch(ce){ye(ce?.message||"Failed to save game.")}finally{M.value=!1}}async function P({id:I,done:re,fail:he}){M.value=!0;try{await A(I),re()}catch(ye){he(ye?.message||"Failed to delete game.")}finally{M.value=!1}}return(I,re)=>Ee(t)?Ee(e)?(Te(),Re(jt,{key:2},[Ot(DS,{"sort-mode":k.value,"onUpdate:sortMode":re[0]||(re[0]=he=>k.value=he),user:Ee(e),syncing:Ee(u),offline:Ee(h),"done-count":ee.value,"total-count":Ee(a).length,onSignOut:Ee(o),onAddGame:T},null,8,["sort-mode","user","syncing","offline","done-count","total-count","onSignOut"]),U("main",aN,[Ee(p)||F.value?(Te(),Re("p",lN,Me(Ee(p)||F.value),1)):er("",!0),Ee(c)?(Te(),Re("p",cN,"Syncing your games…")):Ee(a).length===0?(Te(),Re("div",uN,[re[3]||(re[3]=U("p",null,"No games tracked yet.",-1)),U("button",{type:"button",class:"btn btn-primary",onClick:T}," Add your first game ")])):k.value==="manual"?(Te(),Co(Ee(WA),{key:3,modelValue:v.value,"onUpdate:modelValue":re[1]||(re[1]=he=>v.value=he),tag:"ul",role:"list",class:"game-grid",handle:".drag-handle",animation:180,"ghost-class":"drag-ghost"},{default:Ly(()=>[(Te(!0),Re(jt,null,gc(v.value,he=>(Te(),Co(og,{key:he.id,game:he,now:Ee(x),draggable:!0,onToggle:_,onEdit:E},null,8,["game","now"]))),128))]),_:1},8,["modelValue"])):(Te(),Re("ul",hN,[(Te(!0),Re(jt,null,gc(K.value,he=>(Te(),Co(og,{key:he.id,game:he,now:Ee(x),draggable:!1,onToggle:_,onEdit:E},null,8,["game","now"]))),128))]))]),Ot(PR,{ref_key:"editorRef",ref:L,saving:M.value,onSave:b,onDelete:P},null,8,["saving"])],64)):(Te(),Co(LR,{key:1,"signing-in":Ee(i),error:Ee(r),onSignIn:Ee(s)},null,8,["signing-in","error","onSignIn"])):(Te(),Re("div",oN,re[2]||(re[2]=[U("p",null,"Loading…",-1)])))}},fN=La(dN,[["__scopeId","data-v-bd53196e"]]);eA(fN).mount("#app");
