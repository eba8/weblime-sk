import{S as o,i as l,s as c,e as d,t as f,c as h,a as m,h as u,d as i,g as _,H as p,j as g,n as r}from"../chunks/index-457e8868.js";function x(n){let t,s;return{c(){t=d("h1"),s=f(n[0])},l(e){t=h(e,"H1",{});var a=m(t);s=u(a,n[0]),a.forEach(i)},m(e,a){_(e,t,a),p(t,s)},p(e,[a]){a&1&&g(s,e[0])},i:r,o:r,d(e){e&&i(t)}}}function H({error:n,status:t}){return{props:{title:`${t}: ${n.message}`}}}function v(n,t,s){let{title:e}=t;return n.$$set=a=>{"title"in a&&s(0,e=a.title)},[e]}class S extends o{constructor(t){super(),l(this,t,v,x,c,{title:0})}}export{S as default,H as load};
