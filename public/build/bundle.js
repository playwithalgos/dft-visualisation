var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function a(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function g(){return h(" ")}function p(){return h("")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let m;function x(t){m=t}const $=[],v=[];let b=[];const w=[],k=Promise.resolve();let _=!1;function E(t){b.push(t)}const M=new Set;let N=0;function q(){if(0!==N)return;const t=m;do{try{for(;N<$.length;){const t=$[N];N++,x(t),A(t.$$)}}catch(t){throw $.length=0,N=0,t}for(x(null),$.length=0,N=0;v.length;)v.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];M.has(e)||(M.add(e),e())}b.length=0}while($.length);for(;w.length;)w.pop()();_=!1,M.clear(),x(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const C=new Set;function O(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];b.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),b=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(t,e){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,k.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(r,l,i,u,f,a,h,g=[-1]){const p=m;x(r);const d=r.$$={fragment:null,ctx:[],props:a,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(p?p.$$.context:[])),callbacks:n(),dirty:g,skip_bound:!1,root:l.target||p.$$.root};h&&h(d.root);let y=!1;if(d.ctx=i?i(r,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return d.ctx&&f(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),y&&j(r,t)),e})):[],d.update(),y=!0,o(d.before_update),d.fragment=!!u&&u(d.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);d.fragment&&d.fragment.l(t),t.forEach(s)}else d.fragment&&d.fragment.c();l.intro&&(($=r.$$.fragment)&&$.i&&(C.delete($),$.i(v))),function(t,n,r,l){const{fragment:i,after_update:s}=t.$$;i&&i.m(n,r),l||E((()=>{const n=t.$$.on_mount.map(e).filter(c);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(E)}(r,l.target,l.anchor,l.customElement),q()}var $,v;x(p)}class S{$destroy(){O(this,1),this.$destroy=t}$on(e,n){if(!c(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function F(t,e,n){const o=t.slice();return o[24]=e[n],o[25]=e,o[26]=n,o}function I(t,e,n){const o=t.slice();return o[24]=e[n],o[26]=n,o}function P(t,e,n){const o=t.slice();return o[28]=e[n],o[30]=n,o}function L(t,e,n){const o=t.slice();return o[24]=e[n],o[26]=n,o}function T(t){let e,n,o,c,r,l,u,f,h,g,p,d,m,x,$,v,b;return{c(){e=a("circle"),c=a("circle"),h=a("circle"),m=a("line"),y(e,"cx",n=t[9](t[1],t[2],t[5],t[26])[0]),y(e,"cy",o=t[9](t[1],t[2],t[5],t[26])[1]),y(e,"class","point svelte-ginfpe"),y(e,"fill",t[6](t[26])),y(e,"fill-opacity","0.2"),y(c,"cx",r=t[9](t[1],t[2],t[5],t[26])[0]),y(c,"cy",l=t[9](t[1],t[2],t[5],t[26])[1]),y(c,"r",u=J(t[24])),y(c,"class","wheel svelte-ginfpe"),y(c,"opacity",f=t[0]==t[26]?1:.2),y(c,"fill",t[6](t[26])),y(h,"cx",g=t[9](t[1],t[2],t[5],t[26])[0]),y(h,"cy",p=t[9](t[1],t[2],t[5],t[26])[1]),y(h,"r",d=J(t[24])),y(h,"stroke-opacity","0.01"),y(h,"stroke",t[6](t[26])),y(h,"fill","none"),y(h,"class","svelte-ginfpe"),y(m,"x1",x=t[9](t[1],t[2],t[5],t[26])[0]),y(m,"y1",$=t[9](t[1],t[2],t[5],t[26])[1]),y(m,"x2",v=t[9](t[1],t[2],t[5],t[26]+1)[0]),y(m,"y2",b=t[9](t[1],t[2],t[5],t[26]+1)[1]),y(m,"stroke-opacity","1"),y(m,"stroke",t[6](t[26])),y(m,"class","svelte-ginfpe")},m(t,n){i(t,e,n),i(t,c,n),i(t,h,n),i(t,m,n)},p(t,i){38&i[0]&&n!==(n=t[9](t[1],t[2],t[5],t[26])[0])&&y(e,"cx",n),38&i[0]&&o!==(o=t[9](t[1],t[2],t[5],t[26])[1])&&y(e,"cy",o),38&i[0]&&r!==(r=t[9](t[1],t[2],t[5],t[26])[0])&&y(c,"cx",r),38&i[0]&&l!==(l=t[9](t[1],t[2],t[5],t[26])[1])&&y(c,"cy",l),2&i[0]&&u!==(u=J(t[24]))&&y(c,"r",u),1&i[0]&&f!==(f=t[0]==t[26]?1:.2)&&y(c,"opacity",f),38&i[0]&&g!==(g=t[9](t[1],t[2],t[5],t[26])[0])&&y(h,"cx",g),38&i[0]&&p!==(p=t[9](t[1],t[2],t[5],t[26])[1])&&y(h,"cy",p),2&i[0]&&d!==(d=J(t[24]))&&y(h,"r",d),38&i[0]&&x!==(x=t[9](t[1],t[2],t[5],t[26])[0])&&y(m,"x1",x),38&i[0]&&$!==($=t[9](t[1],t[2],t[5],t[26])[1])&&y(m,"y1",$),38&i[0]&&v!==(v=t[9](t[1],t[2],t[5],t[26]+1)[0])&&y(m,"x2",v),38&i[0]&&b!==(b=t[9](t[1],t[2],t[5],t[26]+1)[1])&&y(m,"y2",b)},d(t){t&&s(e),t&&s(c),t&&s(h),t&&s(m)}}}function V(t){let e,n=t[2][t[26]]&&T(t);return{c(){n&&n.c(),e=p()},m(t,o){n&&n.m(t,o),i(t,e,o)},p(t,o){t[2][t[26]]?n?n.p(t,o):(n=T(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&s(e)}}}function z(t){let e,n,o,c;return{c(){e=a("circle"),y(e,"cx",n=t[9](t[1],t[2],t[30]/H)[0]),y(e,"cy",o=t[9](t[1],t[2],t[30]/H)[1]),y(e,"class","point svelte-ginfpe"),y(e,"fill-opacity","0.9"),y(e,"fill",c=0==t[4].length?"white":"gray")},m(t,n){i(t,e,n)},p(t,r){6&r[0]&&n!==(n=t[9](t[1],t[2],t[30]/H)[0])&&y(e,"cx",n),6&r[0]&&o!==(o=t[9](t[1],t[2],t[30]/H)[1])&&y(e,"cy",o),16&r[0]&&c!==(c=0==t[4].length?"white":"gray")&&y(e,"fill",c)},d(t){t&&s(e)}}}function D(t){let e,n,o;return{c(){e=a("circle"),y(e,"cx",n=t[24][0]),y(e,"cy",o=t[24][1]),y(e,"class","point svelte-ginfpe"),y(e,"fill","white")},m(t,n){i(t,e,n)},p(t,c){16&c[0]&&n!==(n=t[24][0])&&y(e,"cx",n),16&c[0]&&o!==(o=t[24][1])&&y(e,"cy",o)},d(t){t&&s(e)}}}function G(t){let e,n,c,r,u,p,m,x,$,v,b,w,k,_,E,M,N,q,A,C,O,j,B,S;function F(){return t[13](t[26])}function I(){t[14].call(j,t[26])}function P(){return t[15](t[26])}function L(){return t[16](t[26])}function T(...e){return t[17](t[26],...e)}function V(){return t[18](t[26])}return{c(){e=f("span"),n=a("svg"),c=a("circle"),r=a("circle"),p=a("line"),$=a("line"),w=a("text"),k=h(t[26]),A=g(),C=f("br"),O=g(),j=f("input"),y(c,"cx",0),y(c,"cy",0),y(c,"r",.5),y(c,"fill",t[6](t[26])),y(c,"fill-opacity","1"),y(c,"class","svelte-ginfpe"),y(r,"cx",0),y(r,"cy",0),y(r,"r",u=J(t[24])),y(r,"fill",t[6](t[26])),y(r,"class","wheel svelte-ginfpe"),y(p,"x1",0),y(p,"y1",0),y(p,"x2",m=t[24][0]),y(p,"y2",x=t[24][1]),y(p,"stroke-opacity","1"),y(p,"stroke","white"),y(p,"class","svelte-ginfpe"),y($,"x1",0),y($,"y1",0),y($,"x2",v=t[8](t[1],t[2],t[5],t[26])[0]),y($,"y2",b=t[8](t[1],t[2],t[5],t[26])[1]),y($,"stroke-opacity","0.8"),y($,"stroke",t[6](t[26])),y($,"class","svelte-ginfpe"),y(w,"stroke",_=t[2][t[26]]?"lightgray":"white"),y(w,"font-size","3"),y(w,"text-anchor","middle"),y(w,"class","svelte-ginfpe"),y(n,"class","frequencySVG svelte-ginfpe"),y(n,"style",E=t[2][t[26]]?"none":"filter: grayscale(1)"),y(n,"width",M=K(t[24])),y(n,"height",N=K(t[24])),y(n,"viewBox",q=`${-Q(t[24])} ${-Q(t[24])} ${2*Q(t[24])} ${2*Q(t[24])}`),y(j,"id","inputCheckbox"+t[26]),y(j,"type","checkbox"),y(j,"class","svelte-ginfpe"),y(e,"class","frequency svelte-ginfpe")},m(o,s){i(o,e,s),l(e,n),l(n,c),l(n,r),l(n,p),l(n,$),l(n,w),l(w,k),l(e,A),l(e,C),l(e,O),l(e,j),j.checked=t[2][t[26]],B||(S=[d(n,"click",F),d(j,"change",I),d(j,"mousedown",P),d(j,"mouseleave",L),d(j,"mousemove",T),d(e,"mouseenter",V),d(e,"mouseleave",t[19])],B=!0)},p(e,o){t=e,2&o[0]&&u!==(u=J(t[24]))&&y(r,"r",u),2&o[0]&&m!==(m=t[24][0])&&y(p,"x2",m),2&o[0]&&x!==(x=t[24][1])&&y(p,"y2",x),38&o[0]&&v!==(v=t[8](t[1],t[2],t[5],t[26])[0])&&y($,"x2",v),38&o[0]&&b!==(b=t[8](t[1],t[2],t[5],t[26])[1])&&y($,"y2",b),4&o[0]&&_!==(_=t[2][t[26]]?"lightgray":"white")&&y(w,"stroke",_),4&o[0]&&E!==(E=t[2][t[26]]?"none":"filter: grayscale(1)")&&y(n,"style",E),2&o[0]&&M!==(M=K(t[24]))&&y(n,"width",M),2&o[0]&&N!==(N=K(t[24]))&&y(n,"height",N),2&o[0]&&q!==(q=`${-Q(t[24])} ${-Q(t[24])} ${2*Q(t[24])} ${2*Q(t[24])}`)&&y(n,"viewBox",q),4&o[0]&&(j.checked=t[2][t[26]])},d(t){t&&s(e),B=!1,o(S)}}}function X(t){let e,n=J(t[24])>0,o=n&&G(t);return{c(){o&&o.c(),e=p()},m(t,n){o&&o.m(t,n),i(t,e,n)},p(t,c){2&c[0]&&(n=J(t[24])>0),n?o?o.p(t,c):(o=G(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},d(t){o&&o.d(t),t&&s(e)}}}function Y(e){let n,c,r,m,x,$,v,b,w,k,_,E,M,N,q,A,C,O,j,B,S,T=e[1],G=[];for(let t=0;t<T.length;t+=1)G[t]=V(L(e,T,t));let Y={length:H*e[1].length},J=[];for(let t=0;t<Y.length;t+=1)J[t]=z(P(e,Y,t));let K=e[4],Q=[];for(let t=0;t<K.length;t+=1)Q[t]=D(I(e,K,t));let R=e[1],U=[];for(let t=0;t<R.length;t+=1)U[t]=X(F(e,R,t));return{c(){n=f("h1"),n.textContent="Discrete Fourier Transform Visualisation",c=g(),r=f("span"),r.textContent="(draw below a closed curve)",m=g(),x=f("br"),$=g(),v=a("svg");for(let t=0;t<G.length;t+=1)G[t].c();b=a("circle");for(let t=0;t<J.length;t+=1)J[t].c();_=p();for(let t=0;t<Q.length;t+=1)Q[t].c();E=a("circle"),M=g(),N=f("br"),q=h("\n\n\nFrequencies:\n");for(let t=0;t<U.length;t+=1)U[t].c();A=g(),C=f("br"),O=g(),j=f("span"),j.textContent="(click to disable/enable some frequencies)",y(n,"class","svelte-ginfpe"),y(r,"class","help svelte-ginfpe"),y(b,"cx",w=e[9](e[1],e[2],e[5])[0]),y(b,"cy",k=e[9](e[1],e[2],e[5])[1]),y(b,"class","currentPoint svelte-ginfpe"),y(E,"cx",0),y(E,"cy",0),y(E,"class","point svelte-ginfpe"),y(E,"fill","white"),y(E,"stroke","red"),y(v,"id","main"),y(v,"width","480px"),y(v,"height","480px"),y(v,"viewBox","-32 -32 64 64"),y(v,"class","svelte-ginfpe"),y(j,"class","help svelte-ginfpe")},m(t,o){i(t,n,o),i(t,c,o),i(t,r,o),i(t,m,o),i(t,x,o),i(t,$,o),i(t,v,o);for(let t=0;t<G.length;t+=1)G[t]&&G[t].m(v,null);l(v,b);for(let t=0;t<J.length;t+=1)J[t]&&J[t].m(v,null);l(v,_);for(let t=0;t<Q.length;t+=1)Q[t]&&Q[t].m(v,null);l(v,E),i(t,M,o),i(t,N,o),i(t,q,o);for(let e=0;e<U.length;e+=1)U[e]&&U[e].m(t,o);i(t,A,o),i(t,C,o),i(t,O,o),i(t,j,o),B||(S=[d(v,"mousedown",e[10]),d(v,"mousemove",e[11]),d(v,"mouseup",e[12])],B=!0)},p(t,e){if(615&e[0]){let n;for(T=t[1],n=0;n<T.length;n+=1){const o=L(t,T,n);G[n]?G[n].p(o,e):(G[n]=V(o),G[n].c(),G[n].m(v,b))}for(;n<G.length;n+=1)G[n].d(1);G.length=T.length}if(38&e[0]&&w!==(w=t[9](t[1],t[2],t[5])[0])&&y(b,"cx",w),38&e[0]&&k!==(k=t[9](t[1],t[2],t[5])[1])&&y(b,"cy",k),534&e[0]){let n;for(Y={length:H*t[1].length},n=0;n<Y.length;n+=1){const o=P(t,Y,n);J[n]?J[n].p(o,e):(J[n]=z(o),J[n].c(),J[n].m(v,_))}for(;n<J.length;n+=1)J[n].d(1);J.length=Y.length}if(16&e[0]){let n;for(K=t[4],n=0;n<K.length;n+=1){const o=I(t,K,n);Q[n]?Q[n].p(o,e):(Q[n]=D(o),Q[n].c(),Q[n].m(v,E))}for(;n<Q.length;n+=1)Q[n].d(1);Q.length=K.length}if(367&e[0]){let n;for(R=t[1],n=0;n<R.length;n+=1){const o=F(t,R,n);U[n]?U[n].p(o,e):(U[n]=X(o),U[n].c(),U[n].m(A.parentNode,A))}for(;n<U.length;n+=1)U[n].d(1);U.length=R.length}},i:t,o:t,d(t){t&&s(n),t&&s(c),t&&s(r),t&&s(m),t&&s(x),t&&s($),t&&s(v),u(G,t),u(J,t),u(Q,t),t&&s(M),t&&s(N),t&&s(q),u(U,t),t&&s(A),t&&s(C),t&&s(O),t&&s(j),B=!1,o(S)}}}const H=32;function J(t){return Math.sqrt(t[0]**2+t[1]**2)}function K(t){return Math.max(24,8*J(t))}function Q(t){return Math.max(24,8*J(t))/8}function R(t,e,n){const o=Math.cos,c=Math.sin,r=Math.PI;let l,i=[[0,3],[6,0],[0,-5],[2,0],[2,1],[0,3],[0,1],[0,1],...Array(100).fill([0,0])],s=Array(200).fill(!0),u={},f=[],a=["brown","red","orange","yellow","lightgreen","green","cyan","blue","purple"];function h(t,e,n){const l=[],i=t.length;for(let s=0;s<i;s++){const u=[0,0];for(let n=0;n<i;n++)u[0]+=t[n][0]*o(2*e*r*n*s/i)-t[n][1]*c(2*e*r*n*s/i),u[1]+=t[n][0]*c(2*e*r*n*s/i)+t[n][1]*o(2*e*r*n*s/i);l.push([u[0]*n,u[1]*n])}return l}function g(t,e,n,l){const i=t.length,s=e[l]?t[l][0]:0,u=e[l]?t[l][1]:0,f=l<i/2?2*r*l*n/i:-2*r*(i-l)*n/i;return[s*o(f)-u*c(f),s*c(f)+u*o(f)]}let p=0;setInterval((()=>{n(5,p+=.01*i.length)}),50);return[l,i,s,u,f,p,function(t){return a[t%a.length]},h,g,function(t,e,n,o){const c=[0,0],r=t.length;null==o&&(o=r);for(let r=0;r<o;r++){const o=g(t,e,n,r);c[0]+=o[0],c[1]+=o[1]}return c},()=>{n(4,f=[]),n(1,i=[]),n(2,s=[]),n(3,u={})},t=>{if(Object.keys(u).length>0)return;if(0==t.buttons)return;const e={x:64*(t.offsetX-240)/480,y:64*(t.offsetY-240)/480};f.push([e.x,e.y]),n(1,i=h(f,-1,1/f.length)),n(2,s=Array(f.length).fill(!0));const o=Math.max(...i.map((t=>J(t))));for(let t=0;t<i.length;t++)J(i[t])<o/50&&n(1,i[t]=[0,0],i);n(4,f)},()=>n(4,f=[]),t=>{const e=prompt("Enter x,y for the frequency n° i to become x+yi:",i[t]);n(1,i[t]=e.split(",").map((t=>parseFloat(t))),i),0==i[t].length?n(1,i[t]=[0,0],i):i[t].push(0)},function(t){s[t]=this.checked,n(2,s)},t=>{n(3,u={}),n(3,u[t]=!0,u)},t=>{1==Object.keys(u).length&&n(2,s[t]=!s[t],s)},(t,e)=>{console.log(e.buttons),e.buttons>0&&!u[t]?(n(3,u[t]=!0,u),n(2,s[t]=!s[t],s),document.getElementById("inputCheckbox"+t).checked=s[t],console.log("miaou")):n(3,u={})},t=>{n(0,l=t)},()=>{n(0,l=void 0)}]}return new class extends S{constructor(t){super(),B(this,t,R,Y,r,{},null,[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
