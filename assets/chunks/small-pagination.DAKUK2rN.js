import{p as P,r as l,q as r,o as p,c as S,y as t,a as n,_ as v,t as U,M as j,v as C,X as _}from"./framework.DcRevfCx.js";const T=P({__name:"auto-hide-pagination",setup(c){const s=l(!1);return(o,g)=>{const m=r("el-switch"),b=r("el-pagination");return p(),S("div",null,[t(m,{modelValue:s.value,"onUpdate:modelValue":g[0]||(g[0]=f=>s.value=f)},null,8,["modelValue"]),n("hr",{class:"my-4"}),t(b,{"hide-on-single-page":s.value,total:5,layout:"prev, pager, next"},null,8,["hide-on-single-page"])])}}}),K=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),M={};function w(c,s){const o=r("el-pagination");return p(),U(o,{background:"",layout:"prev, pager, next",total:1e3})}const B=v(M,[["render",w]]),L=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),N={};function E(c,s){const o=r("el-pagination");return p(),S(j,null,[n("div",{class:"example-pagination-block"},[n("div",{class:"example-demonstration"},"When you have few pages"),t(o,{layout:"prev, pager, next",total:50})]),n("div",{class:"example-pagination-block"},[n("div",{class:"example-demonstration"},"When you have more than 7 pages"),t(o,{layout:"prev, pager, next",total:1e3})])],64)}const I=v(N,[["render",E],["__scopeId","data-v-78be8653"]]),Q=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),W=P({__name:"more-elements",setup(c){const s=l(5),o=l(5),g=l(5),m=l(4),b=l(100),f=l(100),O=l(100),u=l("default"),i=l(!1),d=l(!1),z=x=>{console.log(`${x} items per page`)},y=x=>{console.log(`current page: ${x}`)};return(x,e)=>{const V=r("el-radio-button"),$=r("el-radio-group"),h=r("el-switch"),k=r("el-pagination");return p(),S(j,null,[n("div",{class:"flex items-center mb-4"},[t($,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=a=>u.value=a),class:"mr-4"},{default:C(()=>[t(V,{value:"default"},{default:C(()=>[_("default")]),_:1}),t(V,{value:"large"},{default:C(()=>[_("large")]),_:1}),t(V,{value:"small"},{default:C(()=>[_("small")]),_:1})]),_:1},8,["modelValue"]),n("div",null,[_(" background: "),t(h,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=a=>i.value=a),class:"ml-2"},null,8,["modelValue"])]),n("div",{class:"ml-4"},[_(" disabled: "),t(h,{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=a=>d.value=a),class:"ml-2"},null,8,["modelValue"])])]),n("hr",{class:"my-4"}),n("div",{class:"demo-pagination-block"},[n("div",{class:"demonstration"},"Total item count"),t(k,{"current-page":s.value,"onUpdate:current-page":e[3]||(e[3]=a=>s.value=a),"page-size":100,size:u.value,disabled:d.value,background:i.value,layout:"total, prev, pager, next",total:1e3,onSizeChange:z,onCurrentChange:y},null,8,["current-page","size","disabled","background"])]),n("div",{class:"demo-pagination-block"},[n("div",{class:"demonstration"},"Change page size"),t(k,{"current-page":o.value,"onUpdate:current-page":e[4]||(e[4]=a=>o.value=a),"page-size":b.value,"onUpdate:page-size":e[5]||(e[5]=a=>b.value=a),"page-sizes":[100,200,300,400],size:u.value,disabled:d.value,background:i.value,layout:"sizes, prev, pager, next",total:1e3,onSizeChange:z,onCurrentChange:y},null,8,["current-page","page-size","size","disabled","background"])]),n("div",{class:"demo-pagination-block"},[n("div",{class:"demonstration"},"Jump to"),t(k,{"current-page":g.value,"onUpdate:current-page":e[6]||(e[6]=a=>g.value=a),"page-size":f.value,"onUpdate:page-size":e[7]||(e[7]=a=>f.value=a),size:u.value,disabled:d.value,background:i.value,layout:"prev, pager, next, jumper",total:1e3,onSizeChange:z,onCurrentChange:y},null,8,["current-page","page-size","size","disabled","background"])]),n("div",{class:"demo-pagination-block"},[n("div",{class:"demonstration"},"All combined"),t(k,{"current-page":m.value,"onUpdate:current-page":e[8]||(e[8]=a=>m.value=a),"page-size":O.value,"onUpdate:page-size":e[9]||(e[9]=a=>O.value=a),"page-sizes":[100,200,300,400],size:u.value,disabled:d.value,background:i.value,layout:"total, sizes, prev, pager, next, jumper",total:400,onSizeChange:z,onCurrentChange:y},null,8,["current-page","page-size","size","disabled","background"])])],64)}}}),q=v(W,[["__scopeId","data-v-f14f0d8a"]]),R=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),A={};function F(c,s){const o=r("el-pagination");return p(),U(o,{"page-size":20,"pager-count":11,layout:"prev, pager, next",total:1e3})}const J=v(A,[["render",F]]),Y=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),X={};function D(c,s){const o=r("el-pagination");return p(),S(j,null,[t(o,{size:"small",layout:"prev, pager, next",total:50}),t(o,{size:"small",background:"",layout:"prev, pager, next",total:50,class:"mt-4"})],64)}const G=v(X,[["render",D]]),Z=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{K as _,L as a,Q as b,R as c,Y as d,Z as e};
