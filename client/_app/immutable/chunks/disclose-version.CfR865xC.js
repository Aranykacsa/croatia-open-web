import{s as d}from"./runtime.CwLLRO5E.js";function T(n){console.warn("hydration_mismatch")}const D=1,O=2,P=4,w=8,g=16,H=64,L=1,b=2,x=4,M=8,v=1,I=2,p="[",h="[!",A="]",S={},U=Symbol();let o=!1;function Y(n){o=n}let r;function _(n){return r=n}function C(){if(r===null)throw T(),S;return r=r.nextSibling}function B(n){o&&(r=n)}function F(){for(var n=0,e=r;;){if(e.nodeType===8){var t=e.data;if(t===A){if(n===0)return e;n-=1}else(t===p||t===h)&&(n+=1)}var s=e.nextSibling;e.remove(),e=s}}var f;function V(){if(f===void 0){f=window;var n=Element.prototype;n.__click=void 0,n.__className="",n.__attributes=null,n.__e=void 0,Text.prototype.__t=void 0}}function u(){return document.createTextNode("")}function k(n){if(!o)return n.firstChild;var e=r.firstChild;return e===null&&(e=r.appendChild(u())),_(e),e}function Z(n,e){if(!o){var t=n.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}return r}function j(n,e=!1){if(!o)return n.nextSibling;var t=r.nextSibling,s=t.nodeType;if(e&&s!==3){var a=u();return t==null||t.before(a),_(a),a}return _(t),t}function q(n){n.textContent=""}function R(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function i(n,e){var t;(t=d).nodes??(t.nodes={start:n,end:e})}function z(n,e){var t=(e&v)!==0,s=(e&I)!==0,a,l=!n.startsWith("<!>");return()=>{if(o)return i(r,null),r;a||(a=R(l?n:"<!>"+n),t||(a=a.firstChild));var c=s?document.importNode(a,!0):a.cloneNode(!0);if(t){var m=c.firstChild,E=c.lastChild;i(m,E)}else i(c,c);return c}}function G(){if(!o){var n=u();return i(n,n),n}var e=r;return e.nodeType!==3&&(e.before(e=u()),_(e)),i(e,e),e}function K(){if(o)return i(r,null),r;var n=document.createDocumentFragment(),e=document.createComment(""),t=u();return n.append(e,t),i(e,t),n}function Q(n,e){if(o){d.nodes.end=r,C();return}n!==null&&n.before(e)}const N="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(N);export{P as A,L as B,b as C,M as D,w as E,G as F,S as H,x as P,U,r as a,C as b,T as c,i as d,R as e,h as f,Y as g,o as h,Z as i,k as j,j as k,Q as l,B as m,K as n,u as o,p,A as q,F as r,_ as s,z as t,V as u,q as v,D as w,O as x,H as y,g as z};
