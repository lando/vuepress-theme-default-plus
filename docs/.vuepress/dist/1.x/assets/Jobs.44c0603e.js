import{_ as l,f as p,u as n,o,c as a,F as u,g as h,h as m,i as v,a as e,t as c,p as b,j as f}from"./app.4e88acea.js";const g=t=>(b("data-v-bed5030c"),t=t(),f(),t),y={key:0,class:"jobs"},k=g(()=>e("span",{class:"header"},"Jobs",-1)),x=["href"],J={class:"job-image"},I=["src","alt"],S={class:"job-info"},j={class:"job-title"},B={class:"job-aux"},D={__name:"Jobs",setup(t){const r=v(),{jobs:_}=r.value,d=p(()=>_.length>0);return(F,N)=>n(d)?(o(),a("div",y,[k,(o(!0),a(u,null,h(n(_),(s,i)=>(o(),a("div",{key:i,class:"job"},[e("a",{href:s.link,target:"_blank",rel:"noopener noreferrer"},[e("div",J,[e("img",{src:s.logo,alt:s.company},null,8,I)]),e("div",S,[e("div",j,c(s.title),1),e("div",B,c(s.company)+" - "+c(s.aux),1)])],8,x)]))),128))])):m("v-if",!0)}},w=l(D,[["__scopeId","data-v-bed5030c"],["__file","Jobs.vue"]]);export{w as default};