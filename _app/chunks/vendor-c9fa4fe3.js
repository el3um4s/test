function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function i(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o,r,c,u){const s=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(s){const r=f(n,e,o,u);t.p(r,s)}}function l(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function g(){return $(" ")}function m(){return $("")}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function y(t){return Array.from(t.childNodes)}function _(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const c=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)o.removeAttribute(c[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):p(n)}function x(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return $(n)}function w(t){return x(t," ")}function k(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let v;function E(t){v=t}function j(){if(!v)throw new Error("Function called outside component initialization");return v}function A(t){j().$$.on_mount.push(t)}function N(t){j().$$.after_update.push(t)}function O(t,n){j().$$.context.set(t,n)}const S=[],C=[],T=[],q=[],z=Promise.resolve();let B=!1;function F(t){T.push(t)}let M=!1;const D=new Set;function G(){if(!M){M=!0;do{for(let t=0;t<S.length;t+=1){const n=S[t];E(n),H(n.$$)}for(E(null),S.length=0;C.length;)C.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];D.has(n)||(D.add(n),n())}T.length=0}while(S.length);for(;q.length;)q.pop()();B=!1,M=!1,D.clear()}}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(F)}}const P=new Set;let I;function J(){I={r:0,c:[],p:I}}function K(){I.r||r(I.c),I=I.p}function L(t,n){t&&t.i&&(P.delete(t),t.i(n))}function Q(t,n,e,o){if(t&&t.o){if(P.has(t))return;P.add(t),I.c.push((()=>{P.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function R(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],s=n[c];if(s){for(const t in u)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[c]=s}else for(const t in u)r[t]=1}for(const u in o)u in e||(e[u]=void 0);return e}function U(t){return"object"==typeof t&&null!==t?t:{}}function V(t){t&&t.c()}function W(t,n){t&&t.l(n)}function X(t,n,o,u){const{fragment:s,on_mount:i,on_destroy:f,after_update:a}=t.$$;s&&s.m(n,o),u||F((()=>{const n=i.map(e).filter(c);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(F)}function Y(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Z(t,n){-1===t.$$.dirty[0]&&(S.push(t),B||(B=!0,z.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function tt(n,e,c,u,s,i,f=[-1]){const a=v;E(n);const l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let d=!1;if(l.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&s(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&Z(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!u&&u(l.ctx),e.target){if(e.hydrate){const t=y(e.target);l.fragment&&l.fragment.l(t),t.forEach(h)}else l.fragment&&l.fragment.c();e.intro&&L(n.$$.fragment),X(n,e.target,e.anchor,e.customElement),G()}E(a)}class nt{$destroy(){Y(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=[];function ot(n,e=t){let o;const r=[];function c(t){if(u(n,t)&&(n=t,o)){const t=!et.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),et.push(t,n)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(u,s=t){const i=[u,s];return r.push(i),1===r.length&&(o=e(c)||t),u(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{n as A,J as B,ot as C,i as D,a as E,l as F,t as G,s as H,nt as S,y as a,b,_ as c,h as d,p as e,d as f,x as g,k as h,tt as i,V as j,g as k,m as l,W as m,w as n,X as o,R as p,U as q,Q as r,u as s,$ as t,K as u,L as v,Y as w,O as x,N as y,A as z};
