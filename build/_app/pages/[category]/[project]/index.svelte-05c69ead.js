import{S as t,i as e,s as r,e as a,t as s,k as c,c as o,a as n,g as p,d as l,n as i,b as h,f,F as d,h as v,G as u,I as j}from"../../../chunks/vendor-8d04e2cc.js";import{e as g}from"../../../chunks/projects-list-5a7c2291.js";function m(t){let e,r;return{c(){e=a("p"),r=s("project doesn't exist")},l(t){e=o(t,"P",{});var a=n(e);r=p(a,"project doesn't exist"),a.forEach(l)},m(t,a){f(t,e,a),d(e,r)},p:u,d(t){t&&l(e)}}}function y(t){let e,r,h,v,j,g,m,y,E,x,P,k,I,A,D,S,V=t[2][0].category+"",$=t[2][0].project+"",b=t[2][0].title+"",F=t[2][0].description+"";return{c(){e=a("div"),r=a("p"),h=s("category: "),v=s(V),j=c(),g=a("p"),m=s("project: "),y=s($),E=c(),x=a("p"),P=s("title: "),k=s(b),I=c(),A=a("p"),D=s("description: "),S=s(F)},l(t){e=o(t,"DIV",{});var a=n(e);r=o(a,"P",{});var s=n(r);h=p(s,"category: "),v=p(s,V),s.forEach(l),j=i(a),g=o(a,"P",{});var c=n(g);m=p(c,"project: "),y=p(c,$),c.forEach(l),E=i(a),x=o(a,"P",{});var f=n(x);P=p(f,"title: "),k=p(f,b),f.forEach(l),I=i(a),A=o(a,"P",{});var d=n(A);D=p(d,"description: "),S=p(d,F),d.forEach(l),a.forEach(l)},m(t,a){f(t,e,a),d(e,r),d(r,h),d(r,v),d(e,j),d(e,g),d(g,m),d(g,y),d(e,E),d(e,x),d(x,P),d(x,k),d(e,I),d(e,A),d(A,D),d(A,S)},p:u,d(t){t&&l(e)}}}function E(t){let e,r,j,g,E,x,P,k,I,A,D,S;let V=(t[3]?y:m)(t);return{c(){e=a("div"),r=s(t[0]),j=s("/"),g=s(t[1]),E=s("/"),x=a("span"),P=s("index.svelte"),k=c(),V.c(),I=c(),A=a("p"),D=a("a"),S=s("home"),this.h()},l(a){e=o(a,"DIV",{class:!0});var s=n(e);r=p(s,t[0]),j=p(s,"/"),g=p(s,t[1]),E=p(s,"/"),x=o(s,"SPAN",{class:!0});var c=n(x);P=p(c,"index.svelte"),c.forEach(l),k=i(s),V.l(s),s.forEach(l),I=i(a),A=o(a,"P",{});var h=n(A);D=o(h,"A",{href:!0,class:!0});var f=n(D);S=p(f,"home"),f.forEach(l),h.forEach(l),this.h()},h(){h(x,"class","index svelte-12tk0n1"),h(e,"class","slug svelte-12tk0n1"),h(D,"href","../../"),h(D,"class","svelte-12tk0n1")},m(t,a){f(t,e,a),d(e,r),d(e,j),d(e,g),d(e,E),d(e,x),d(x,P),d(e,k),V.m(e,null),f(t,I,a),f(t,A,a),d(A,D),d(D,S)},p(t,[e]){1&e&&v(r,t[0]),2&e&&v(g,t[1]),V.p(t,e)},i:u,o:u,d(t){t&&l(e),V.d(),t&&l(I),t&&l(A)}}}const x=!0;async function P({page:t}){let e="-cat-",r="-proj-";return e=t.params.category,r=t.params.project,{props:{category:e,project:r}}}function k(t,e,r){let a;j(t,g,(t=>r(4,a=t)));let{category:s="-"}=e,{project:c="-"}=e;const o=a.filter((t=>t.category===s&&t.project==c)),n=o.length>=1;return t.$$set=t=>{"category"in t&&r(0,s=t.category),"project"in t&&r(1,c=t.project)},[s,c,o,n]}export default class extends t{constructor(t){super(),e(this,t,k,E,r,{category:0,project:1})}}export{P as load,x as prerender};
