import{_ as t,a as n,b as e,c as a,i as c,s as r,d as o,S as i,z as u,o as s,e as f,t as l,O as d,j as h,p as m,f as v,g as p,h as g,k as D,l as E,m as w,q as b,r as $,u as T,v as y,w as A,x as R,y as S,P as x,N as L,A as O,n as _,B as M,C,D as B,E as H,F as N,G as k}from"./client.6d30e9e1.js";import{c as I,_ as P,h as U,a as F,L as V}from"./createOctokit.65da9c12.js";function j(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(a){var o=n(this).constructor;c=Reflect.construct(r,arguments,o)}else c=r.apply(this,arguments);return e(this,c)}}function G(t,n,e){var a=t.slice();return a[9]=n[e],a}function q(t){var n,e,a,c,r,o=t[4].title+"",i=("closed"===t[4].state?t[4].metadata.start?u.i18n.incidentCompleted:u.i18n.incidentFixed:t[4].metadata.start?u.i18n.incidentScheduled:u.i18n.incidentOngoing)+"";return{c:function(){n=l(o),e=s(),a=f("span"),c=l(i),this.h()},l:function(t){n=g(t,o),e=m(t),a=v(t,"SPAN",{class:!0});var r=p(a);c=g(r,i),r.forEach(h),this.h()},h:function(){D(a,"class",r=L("tag ".concat(t[4].state))+" svelte-4o16l6")},m:function(t,r){E(t,n,r),E(t,e,r),E(t,a,r),w(a,c)},p:function(t,e){16&e&&o!==(o=t[4].title+"")&&O(n,o),16&e&&i!==(i=("closed"===t[4].state?t[4].metadata.start?u.i18n.incidentCompleted:u.i18n.incidentFixed:t[4].metadata.start?u.i18n.incidentScheduled:u.i18n.incidentOngoing)+"")&&O(c,i),16&e&&r!==(r=L("tag ".concat(t[4].state))+" svelte-4o16l6")&&D(a,"class",r)},d:function(t){t&&h(n),t&&h(e),t&&h(a)}}}function z(t){var n,e=u.i18n.incidentDetails+"";return{c:function(){n=l(e)},l:function(t){n=g(t,e)},m:function(t,e){E(t,n,e)},p:_,d:function(t){t&&h(n)}}}function J(t){var n,e,a,c,r,o,i,d,b,$,T,y,A,R,S,x,L=u.i18n.incidentSubscribe+"",O=u.i18n.incidentViewOnGitHub+"";function B(t,n){return t[4].metadata.start?W:Q}var H=B(t),N=H(t);function k(t,n){return t[4].metadata.start&&t[4].metadata.end?Y:t[4].closed_at?X:void 0}for(var I=k(t),P=I&&I(t),U=t[3],F=[],V=0;V<U.length;V+=1)F[V]=Z(G(t,U,V));return{c:function(){n=f("div"),e=f("dl"),N.c(),a=M(),P&&P.c(),c=s(),r=f("div"),o=f("p"),i=f("a"),d=l(L),$=s(),T=f("p"),y=f("a"),A=l(O),S=s();for(var t=0;t<F.length;t+=1)F[t].c();x=M(),this.h()},l:function(t){n=v(t,"DIV",{class:!0});var u=p(n);e=v(u,"DL",{});var s=p(e);N.l(s),a=M(),P&&P.l(s),s.forEach(h),c=m(u),r=v(u,"DIV",{class:!0});var f=p(r);o=v(f,"P",{class:!0});var l=p(o);i=v(l,"A",{href:!0});var D=p(i);d=g(D,L),D.forEach(h),l.forEach(h),$=m(f),T=v(f,"P",{class:!0});var E=p(T);y=v(E,"A",{href:!0});var w=p(y);A=g(w,O),w.forEach(h),E.forEach(h),f.forEach(h),u.forEach(h),S=m(t);for(var b=0;b<F.length;b+=1)F[b].l(t);x=M(),this.h()},h:function(){D(i,"href",b="https://github.com/".concat(u.owner,"/").concat(u.repo,"/issues/").concat(t[0])),D(o,"class","svelte-4o16l6"),D(y,"href",R="https://github.com/".concat(u.owner,"/").concat(u.repo,"/issues/").concat(t[0])),D(T,"class","svelte-4o16l6"),D(r,"class","r svelte-4o16l6"),D(n,"class","f")},m:function(t,u){E(t,n,u),w(n,e),N.m(e,null),w(e,a),P&&P.m(e,null),w(n,c),w(n,r),w(r,o),w(o,i),w(i,d),w(r,$),w(r,T),w(T,y),w(y,A),E(t,S,u);for(var s=0;s<F.length;s+=1)F[s].m(t,u);E(t,x,u)},p:function(t,n){if(H===(H=B(t))&&N?N.p(t,n):(N.d(1),(N=H(t))&&(N.c(),N.m(e,a))),I===(I=k(t))&&P?P.p(t,n):(P&&P.d(1),(P=I&&I(t))&&(P.c(),P.m(e,null))),1&n&&b!==(b="https://github.com/".concat(u.owner,"/").concat(u.repo,"/issues/").concat(t[0]))&&D(i,"href",b),1&n&&R!==(R="https://github.com/".concat(u.owner,"/").concat(u.repo,"/issues/").concat(t[0]))&&D(y,"href",R),40&n){var c;for(U=t[3],c=0;c<U.length;c+=1){var r=G(t,U,c);F[c]?F[c].p(r,n):(F[c]=Z(r),F[c].c(),F[c].m(x.parentNode,x))}for(;c<F.length;c+=1)F[c].d(1);F.length=U.length}},i:_,o:_,d:function(t){t&&h(n),N.d(),P&&P.d(),t&&h(S),C(F,t),t&&h(x)}}}function K(t){var n,e;return n=new V({}),{c:function(){B(n.$$.fragment)},l:function(t){H(n.$$.fragment,t)},m:function(t,a){N(n,t,a),e=!0},p:_,i:function(t){e||(A(n.$$.fragment,t),e=!0)},o:function(t){T(n.$$.fragment,t),e=!1},d:function(t){k(n,t)}}}function Q(t){var n,e,a,c,r=u.i18n.incidentOpenedAt+"",o=new Date(t[4].created_at).toLocaleString()+"";return{c:function(){n=f("dt"),e=l(r),a=f("dd"),c=l(o)},l:function(t){n=v(t,"DT",{});var i=p(n);e=g(i,r),i.forEach(h),a=v(t,"DD",{});var u=p(a);c=g(u,o),u.forEach(h)},m:function(t,r){E(t,n,r),w(n,e),E(t,a,r),w(a,c)},p:function(t,n){16&n&&o!==(o=new Date(t[4].created_at).toLocaleString()+"")&&O(c,o)},d:function(t){t&&h(n),t&&h(a)}}}function W(t){var n,e,a,c,r,o=(new Date(t[4].metadata.start).getTime()<(new Date).getTime()?u.i18n.startedAt:u.i18n.startsAt)+"",i=new Date(t[4].metadata.start).toLocaleString()+"";return{c:function(){n=f("dt"),e=l(o),a=s(),c=f("dd"),r=l(i)},l:function(t){n=v(t,"DT",{});var u=p(n);e=g(u,o),a=m(u),u.forEach(h),c=v(t,"DD",{});var s=p(c);r=g(s,i),s.forEach(h)},m:function(t,o){E(t,n,o),w(n,e),w(n,a),E(t,c,o),w(c,r)},p:function(t,n){16&n&&o!==(o=(new Date(t[4].metadata.start).getTime()<(new Date).getTime()?u.i18n.startedAt:u.i18n.startsAt)+"")&&O(e,o),16&n&&i!==(i=new Date(t[4].metadata.start).toLocaleString()+"")&&O(r,i)},d:function(t){t&&h(n),t&&h(c)}}}function X(t){var n,e,a,c,r=u.i18n.incidentClosedAt+"",o=new Date(t[4].closed_at).toLocaleString()+"";return{c:function(){n=f("dt"),e=l(r),a=f("dd"),c=l(o)},l:function(t){n=v(t,"DT",{});var i=p(n);e=g(i,r),i.forEach(h),a=v(t,"DD",{});var u=p(a);c=g(u,o),u.forEach(h)},m:function(t,r){E(t,n,r),w(n,e),E(t,a,r),w(a,c)},p:function(t,n){16&n&&o!==(o=new Date(t[4].closed_at).toLocaleString()+"")&&O(c,o)},d:function(t){t&&h(n),t&&h(a)}}}function Y(t){var n,e,a,c,r=u.i18n.duration+"",o=u.i18n.durationMin.replace(/\$DURATION/g,Math.floor((new Date(t[4].metadata.end).getTime()-new Date(t[4].metadata.start).getTime())/6e4))+"";return{c:function(){n=f("dt"),e=l(r),a=f("dd"),c=l(o)},l:function(t){n=v(t,"DT",{});var i=p(n);e=g(i,r),i.forEach(h),a=v(t,"DD",{});var u=p(a);c=g(u,o),u.forEach(h)},m:function(t,r){E(t,n,r),w(n,e),E(t,a,r),w(a,c)},p:function(t,n){16&n&&o!==(o=u.i18n.durationMin.replace(/\$DURATION/g,Math.floor((new Date(t[4].metadata.end).getTime()-new Date(t[4].metadata.start).getTime())/6e4))+"")&&O(c,o)},d:function(t){t&&h(n),t&&h(a)}}}function Z(t){var n,e,a,c,r,o=t[5](t[9].body)+"",i=u.i18n.incidentCommentSummary.replace(/\$DATE/,"<a href=".concat(t[9].html_url,">").concat(new Date(t[9].created_at).toLocaleString(),"</a>")).replace(/\$AUTHOR/,"<a href=".concat(t[9].user.html_url,">@").concat(t[9].user.login,"</a>"))+"";return{c:function(){n=f("article"),e=f("p"),a=s(),c=f("div"),r=s(),this.h()},l:function(t){n=v(t,"ARTICLE",{});var o=p(n);e=v(o,"P",{class:!0}),p(e).forEach(h),a=m(o),c=v(o,"DIV",{}),p(c).forEach(h),r=m(o),o.forEach(h),this.h()},h:function(){D(e,"class","svelte-4o16l6")},m:function(t,u){E(t,n,u),w(n,e),e.innerHTML=o,w(n,a),w(n,c),c.innerHTML=i,w(n,r)},p:function(t,n){8&n&&o!==(o=t[5](t[9].body)+"")&&(e.innerHTML=o),8&n&&i!==(i=u.i18n.incidentCommentSummary.replace(/\$DATE/,"<a href=".concat(t[9].html_url,">").concat(new Date(t[9].created_at).toLocaleString(),"</a>")).replace(/\$AUTHOR/,"<a href=".concat(t[9].user.html_url,">@").concat(t[9].user.login,"</a>"))+"")&&(c.innerHTML=i)},d:function(t){t&&h(n)}}}function tt(t){var n,e,a,c,r,o,i,R,S,x,L,O,_=u.i18n.incidentBack+"";function M(t,n){return t[2]?z:q}document.title=n=u.i18n.incidentTitle.replace("$NUMBER",t[0]);var C=M(t),B=C(t),H=[K,J],N=[];function k(t,n){return t[1]?0:1}return o=k(t),i=N[o]=H[o](t),{c:function(){e=s(),a=f("h2"),B.c(),c=s(),r=f("section"),i.c(),R=s(),S=f("footer"),x=f("a"),L=l(_),this.h()},l:function(t){d('[data-svelte="svelte-slinv8"]',document.head).forEach(h),e=m(t),a=v(t,"H2",{class:!0});var n=p(a);B.l(n),n.forEach(h),c=m(t),r=v(t,"SECTION",{});var o=p(r);i.l(o),o.forEach(h),R=m(t),S=v(t,"FOOTER",{class:!0});var u=p(S);x=v(u,"A",{href:!0});var s=p(x);L=g(s,_),s.forEach(h),u.forEach(h),this.h()},h:function(){D(a,"class","svelte-4o16l6"),D(x,"href",u.path),D(S,"class","svelte-4o16l6")},m:function(t,n){E(t,e,n),E(t,a,n),B.m(a,null),E(t,c,n),E(t,r,n),N[o].m(r,null),E(t,R,n),E(t,S,n),w(S,x),w(x,L),O=!0},p:function(t,e){var c=b(e,1)[0];(!O||1&c)&&n!==(n=u.i18n.incidentTitle.replace("$NUMBER",t[0]))&&(document.title=n),C===(C=M(t))&&B?B.p(t,c):(B.d(1),(B=C(t))&&(B.c(),B.m(a,null)));var s=o;(o=k(t))===s?N[o].p(t,c):($(),T(N[s],1,1,(function(){N[s]=null})),y(),(i=N[o])?i.p(t,c):(i=N[o]=H[o](t)).c(),A(i,1),i.m(r,null))},i:function(t){O||(A(i),O=!0)},o:function(t){T(i),O=!1},d:function(t){t&&h(e),t&&h(a),B.d(),t&&h(c),t&&h(r),N[o].d(),t&&h(R),t&&h(S)}}}function nt(t,n,e){var a=n.number,c=x,r=!0,o=!0,i=I(),s=u.owner,f=u.repo,l=[],d={};return R(P(S.mark((function t(){var n;return S.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=e,t.next=4,F("issue-".concat(s,"-").concat(f,"-").concat(a),(function(){return i.issues.get({owner:s,repo:f,issue_number:a,sort:"created",direction:"desc"})}));case 4:t.t1=d=t.sent.data,(0,t.t0)(4,t.t1),e(4,d.metadata={},d),d.body.includes("\x3c!--")&&(n=d.body.split("\x3c!--")[1].split("--\x3e")[0],n.split("\n").filter((function(t){return t.trim()})).filter((function(t){return t.includes(":")})).forEach((function(t){e(4,d.metadata[t.split(/:(.+)/)[0].trim()]=t.split(/:(.+)/)[1].trim(),d)}))),t.next=13;break;case 10:t.prev=10,t.t2=t.catch(0),U(t.t2);case 13:return e(2,o=!1),t.prev=14,t.t3=e,t.next=18,F("issue-comments-".concat(s,"-").concat(f,"-").concat(a),(function(){return i.issues.listComments({owner:s,repo:f,issue_number:a})}));case 18:t.t4=l=t.sent.data.reverse(),(0,t.t3)(3,t.t4),t.next=25;break;case 22:t.prev=22,t.t5=t.catch(14),U(t.t5);case 25:e(1,r=!1);case 26:case"end":return t.stop()}}),t,null,[[0,10],[14,22]])})))),t.$$set=function(t){"number"in t&&e(0,a=t.number)},[a,r,o,l,d,c]}var et=function(n){t(u,i);var e=j(u);function u(t){var n;return a(this,u),n=e.call(this),c(o(n),t,nt,tt,r,{number:0}),n}return u}();function at(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(a){var o=n(this).constructor;c=Reflect.construct(r,arguments,o)}else c=r.apply(this,arguments);return e(this,c)}}function ct(t){var n,e;return n=new et({props:{number:t[0]}}),{c:function(){B(n.$$.fragment)},l:function(t){H(n.$$.fragment,t)},m:function(t,a){N(n,t,a),e=!0},p:function(t,e){var a={};1&b(e,1)[0]&&(a.number=t[0]),n.$set(a)},i:function(t){e||(A(n.$$.fragment,t),e=!0)},o:function(t){T(n.$$.fragment,t),e=!1},d:function(t){k(n,t)}}}function rt(t){return ot.apply(this,arguments)}function ot(){return(ot=P(S.mark((function t(n){var e;return S.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params.number,t.abrupt("return",{number:e});case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function it(t,n,e){var a=n.number;return t.$$set=function(t){"number"in t&&e(0,a=t.number)},[a]}var ut=function(n){t(u,i);var e=at(u);function u(t){var n;return a(this,u),n=e.call(this),c(o(n),t,it,ct,r,{number:0}),n}return u}();export{ut as default,rt as preload};
