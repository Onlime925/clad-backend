import{a as $}from"./chunk-7DRPONDI.js";import{a as h}from"./chunk-Z5EVKGU4.js";import"./chunk-76JPYSWO.js";import{c as D,f as E,g as U,q as j,s as v}from"./chunk-QLBEZW53.js";import{Aa as u,La as _,Na as d,Pa as C,Qa as M,Ra as P,Sa as b,Ta as c,Ua as l,Va as s,W as m,Ya as F,Za as T,_a as p,da as w,db as x,ea as S,eb as O,fb as z,jb as g,lb as y,qa as k,ta as I,ua as f,za as r}from"./chunk-R3V5JELH.js";import"./chunk-4CLCTAJ7.js";var H=t=>({active:t});function A(t,e){if(t&1&&(c(0,"div",1)(1,"div",4)(2,"div",5)(3,"p"),x(4),l(),c(5,"div",6)(6,"a",7),x(7),l()()(),c(8,"div",8),s(9,"img",9),l()()()),t&2){let a=e.$implicit,i=e.$index,n=p(2);d("ngClass",y(4,H,n.activeI==i)),r(4),O(a.title),r(3),O(a.button),r(2),d("src",n.apiUrl+"/"+a.image,f)}}function N(t,e){if(t&1){let a=F();c(0,"span",10),T("click",function(){let n=w(a).$index,o=p(2);return S(o.changeSlide(n))}),l()}if(t&2){let a=e.$index,i=p(2);d("ngClass",y(1,H,i.activeI==a))}}function W(t,e){if(t&1&&(c(0,"div",0),P(1,A,10,6,"div",1,M),c(3,"div",2),P(4,N,1,3,"span",3,M),l()()),t&2){let a=p();r(),b(a.data),r(3),b(a.data)}}var L=(()=>{let e=class e{constructor(i){this.service=i,this.data={},this.activeI=0,this.apiUrl=v.apiUrl}changeSlide(i){this.activeI=i}decode(i){return i?JSON.parse(i):[]}};e.\u0275fac=function(n){return new(n||e)(u(h))},e.\u0275cmp=m({type:e,selectors:[["website-slider"]],inputs:{data:"data"},standalone:!0,features:[g],decls:1,vars:1,consts:[[1,"container-fluid","px-1"],[1,"slide_bg",2,"background-image","url('./assets/web/cladimage.png')",3,"ngClass"],[1,"circles"],[1,"circle",3,"ngClass"],[1,"d-flex","justify-content-between","slider"],[1,"align-self-center","slider-left"],[1,"SliderButton"],["routerLink","item.link"],[1,"slider-right"],[3,"src"],[1,"circle",3,"click","ngClass"]],template:function(n,o){n&1&&_(0,W,6,0,"div",0),n&2&&C(o.data?0:-1)},dependencies:[j,E,D],styles:[".slider-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;min-width:756px;min-height:500px}.slide_bg[_ngcontent-%COMP%]{display:none}.slide_bg.active[_ngcontent-%COMP%]{display:block}.slider[_ngcontent-%COMP%]{background:var(--Azul-ndigo, #041E42);min-height:415px}.slider-left[_ngcontent-%COMP%]{padding:50px}.slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:30px;color:#c1c4e8;font-family:Red Hat Display}.slide_image[_ngcontent-%COMP%]{background-size:cover;height:500px;background-repeat:no-repeat;background-position:center center}.SliderButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#594ee6;text-decoration:none;padding:8px 25px;border-radius:20px;color:#fff;font-family:Figtree;font-size:22px}.circles[_ngcontent-%COMP%]{text-align:center;margin-bottom:10px;margin-top:20px}.circle[_ngcontent-%COMP%]{display:inline-block;width:20px;height:20px;margin:0 5px;background-color:#c1c3e9;border-radius:50%;cursor:pointer}.circle.active[_ngcontent-%COMP%]{background-color:#594ee6}@media (max-width: 1200px){.slider-right[_ngcontent-%COMP%]{display:none!important}.slider[_ngcontent-%COMP%]{background-color:#041e42de;min-height:400px!important}}@media (max-width: 576px){.slider[_ngcontent-%COMP%]{min-height:auto!important;padding:20px 0}.slider-left[_ngcontent-%COMP%]{padding:20px 5px}.slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-size:20px}.SliderButton[_ngcontent-%COMP%]{text-align:center}.slider[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:15px;text-align:center}}"]});let t=e;return t})();function J(t,e){if(t&1&&s(0,"div",4),t&2){let a=p();d("innerHTML",a.data==null?null:a.data.description,I)}}var R=(()=>{let e=class e{constructor(){this.data={},this.apiUrl=v.apiUrl}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["website-homeabout"]],inputs:{data:"data"},standalone:!0,features:[g],decls:8,vars:3,consts:[[1,"img-section"],[1,"text-center","text-lg-start"],[1,"heading-1","text-azul-indigo"],[1,"main-section","d-flex","w-100","align-items-center"],[1,"text-sec","body-1","text-azul-indigo","text-center","text-lg-justify",2,"white-space","break-spaces",3,"innerHTML"],[1,"img-fluid",3,"src"]],template:function(n,o){n&1&&(c(0,"div",0)(1,"div",1)(2,"h1",2),x(3),l()(),c(4,"div",3),_(5,J,1,1,"div",4),c(6,"div",1),s(7,"img",5),l()()()),n&2&&(r(3),z("",o.data==null?null:o.data.title," "),r(2),C(o.data!=null&&o.data.description?5:-1),r(2),d("src",o.apiUrl+"/"+(o.data==null?null:o.data.image),f))},styles:["p[_ngcontent-%COMP%]{margin-top:20px;text-align:justify}img[_ngcontent-%COMP%]{max-width:500px}.img-section[_ngcontent-%COMP%]{padding-bottom:75px;padding-top:75px}.text-sec[_ngcontent-%COMP%]{padding-right:30px}.img-section[_ngcontent-%COMP%]{max-width:1600px;margin:auto}@media (max-width: 1600px){.img-section[_ngcontent-%COMP%]{padding-left:121px}}@media (max-width: 992px){.main-section[_ngcontent-%COMP%]{display:block!important}.img-section[_ngcontent-%COMP%]{padding-left:10px!important;padding-right:10px!important}img[_ngcontent-%COMP%]{max-width:100%!important}.text-sec[_ngcontent-%COMP%]{padding-right:0}}"]});let t=e;return t})();var de=(()=>{let e=class e{constructor(i,n){this.service=i,this.platformId=n,U(this.platformId)&&i.setPage("home")}};e.\u0275fac=function(n){return new(n||e)(u(h),u(k))},e.\u0275cmp=m({type:e,selectors:[["app-home"]],standalone:!0,features:[g],decls:3,vars:3,consts:[[3,"data"]],template:function(n,o){n&1&&s(0,"website-slider",0)(1,"website-homeabout",0)(2,"web-feature-post",0),n&2&&(d("data",o.service.page==null?null:o.service.page.sliders),r(),d("data",o.service.page==null?null:o.service.page.about),r(),d("data",o.service.page==null?null:o.service.page.destacados))},dependencies:[L,$,R]});let t=e;return t})();export{de as HomeComponent};
