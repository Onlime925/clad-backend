import{a as L}from"./chunk-UHP7HCMA.js";import{a as B}from"./chunk-UAS2PMYZ.js";import{a as M}from"./chunk-HXH56C36.js";import"./chunk-FLL3NRM6.js";import{c as U,h as D,i as H,t as j,v as h}from"./chunk-GLZSOAJQ.js";import{$a as P,Ea as I,Fa as f,Ka as r,La as C,W as m,Wa as g,Ya as l,_a as u,ab as b,bb as y,cb as d,db as c,ea as S,eb as s,fa as w,hb as F,ib as T,jb as p,ob as _,pb as v,qb as z,ra as k,ub as x,wb as O,yb as E,zb as $}from"./chunk-B5DXUUC7.js";import"./chunk-4CLCTAJ7.js";var V=e=>({active:e});function J(e,t){if(e&1&&(d(0,"a",9),_(1),c()),e&2){let i=p(2).$implicit;l("href",i.link,f),r(),v(i.button)}}function q(e,t){if(e&1&&(d(0,"a",10),_(1),c()),e&2){let i=p(2).$implicit;l("routerLink",i.link),r(),v(i.button)}}function G(e,t){if(e&1&&g(0,J,2,2,"a",9)(1,q,2,2,"a",10),e&2){let i=p().$implicit;u(i.link.startsWith("http://")?0:1)}}function K(e,t){if(e&1&&(d(0,"div",1)(1,"div",4)(2,"div",5)(3,"p"),_(4),c(),d(5,"div",6),g(6,G,2,1),c()(),d(7,"div",7),s(8,"img",8),c()()()),e&2){let i=t.$implicit,o=t.$index,n=p(2);l("ngClass",O(4,V,n.activeI==o)),r(4),v(i.title),r(2),u(i.link?6:-1),r(2),l("src",n.apiUrl+"/"+i.image,f)}}function Q(e,t){if(e&1){let i=F();d(0,"span",11),T("click",function(){let n=S(i).$index,a=p(2);return w(a.changeSlide(n))}),c()}if(e&2){let i=t.$index,o=p(2);l("ngClass",O(1,V,o.activeI==i))}}function X(e,t){if(e&1&&(d(0,"div",0),b(1,K,9,6,"div",1,P),d(3,"div",2),b(4,Q,1,3,"span",3,P),c()()),e&2){let i=p();r(),y(i.data),r(3),y(i.data)}}var W=(()=>{let t=class t{constructor(o){this.service=o,this.data={},this.activeI=0,this.apiUrl=h.apiUrl}changeSlide(o){this.activeI=o}decode(o){return o?JSON.parse(o):[]}};t.\u0275fac=function(n){return new(n||t)(C(M))},t.\u0275cmp=m({type:t,selectors:[["website-slider"]],inputs:{data:"data"},standalone:!0,features:[x],decls:1,vars:1,consts:[[1,"container-fluid","px-1"],[1,"slide_bg",2,"background-image","url('./assets/web/cladimage.png')",3,"ngClass"],[1,"circles"],[1,"circle",3,"ngClass"],[1,"d-flex","justify-content-between","slider"],[1,"align-self-center","slider-left"],[1,"SliderButton"],[1,"slider-right"],[3,"src"],[3,"href"],[3,"routerLink"],[1,"circle",3,"click","ngClass"]],template:function(n,a){n&1&&g(0,X,6,0,"div",0),n&2&&u(a.data?0:-1)},dependencies:[j,D,U],styles:[".slider-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;min-width:756px;min-height:500px}.slide_bg[_ngcontent-%COMP%]{display:none}.slide_bg.active[_ngcontent-%COMP%]{display:block}.slider[_ngcontent-%COMP%]{background:var(--Azul-ndigo, #041E42);min-height:415px}.slider-left[_ngcontent-%COMP%]{padding:50px}.slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:30px;color:#c1c4e8;font-family:Red Hat Display}.slide_image[_ngcontent-%COMP%]{background-size:cover;height:500px;background-repeat:no-repeat;background-position:center center}.SliderButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#594ee6;text-decoration:none;padding:8px 25px;border-radius:20px;color:#fff;font-family:Figtree;font-size:22px}.circles[_ngcontent-%COMP%]{text-align:center;margin-bottom:10px;margin-top:20px}.circle[_ngcontent-%COMP%]{display:inline-block;width:20px;height:20px;margin:0 5px;background-color:#c1c3e9;border-radius:50%;cursor:pointer}.circle.active[_ngcontent-%COMP%]{background-color:#594ee6}@media (max-width: 1200px){.slider-right[_ngcontent-%COMP%]{display:none!important}.slider[_ngcontent-%COMP%]{background-color:#041e42de;min-height:400px!important}}@media (max-width: 576px){.slider[_ngcontent-%COMP%]{min-height:auto!important;padding:20px 0}.slider-left[_ngcontent-%COMP%]{padding:20px 5px}.slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-size:20px}.SliderButton[_ngcontent-%COMP%]{text-align:center}.slider[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:15px;text-align:center}}"]});let e=t;return e})();function Y(e,t){if(e&1&&(s(0,"div",4),E(1,"safeHtml")),e&2){let i=p();l("innerHTML",$(1,1,i.data==null?null:i.data.description),I)}}var A=(()=>{let t=class t{constructor(){this.data={},this.apiUrl=h.apiUrl}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["website-homeabout"]],inputs:{data:"data"},standalone:!0,features:[x],decls:8,vars:3,consts:[[1,"img-section"],[1,"text-center","text-lg-start"],[1,"heading-1","text-azul-indigo"],[1,"main-section","d-flex","w-100","align-items-center"],[1,"text-sec","body-1","text-azul-indigo","text-center","text-lg-justify",2,"white-space","break-spaces",3,"innerHTML"],[1,"img-fluid",3,"src"]],template:function(n,a){n&1&&(d(0,"div",0)(1,"div",1)(2,"h1",2),_(3),c()(),d(4,"div",3),g(5,Y,2,3,"div",4),d(6,"div",1),s(7,"img",5),c()()()),n&2&&(r(3),z("",a.data==null?null:a.data.title," "),r(2),u(a.data!=null&&a.data.description?5:-1),r(2),l("src",a.apiUrl+"/"+(a.data==null?null:a.data.image),f))},dependencies:[B],styles:["p[_ngcontent-%COMP%]{margin-top:20px;text-align:justify}img[_ngcontent-%COMP%]{max-width:500px}.img-section[_ngcontent-%COMP%]{padding-bottom:75px;padding-top:75px}.text-sec[_ngcontent-%COMP%]{padding-right:30px}.img-section[_ngcontent-%COMP%]{max-width:1600px;margin:auto}@media (max-width: 1600px){.img-section[_ngcontent-%COMP%]{padding-left:121px}}@media (max-width: 992px){.main-section[_ngcontent-%COMP%]{display:block!important}.img-section[_ngcontent-%COMP%]{padding-left:10px!important;padding-right:10px!important}img[_ngcontent-%COMP%]{max-width:100%!important}.text-sec[_ngcontent-%COMP%]{padding-right:0}}"]});let e=t;return e})();var ue=(()=>{let t=class t{constructor(o,n){this.service=o,this.platformId=n,H(this.platformId)&&o.setPage("home")}};t.\u0275fac=function(n){return new(n||t)(C(M),C(k))},t.\u0275cmp=m({type:t,selectors:[["app-home"]],standalone:!0,features:[x],decls:3,vars:3,consts:[[3,"data"]],template:function(n,a){n&1&&s(0,"website-slider",0)(1,"website-homeabout",0)(2,"web-feature-post",0),n&2&&(l("data",a.service.page==null?null:a.service.page.sliders),r(),l("data",a.service.page==null?null:a.service.page.about),r(),l("data",a.service.page==null?null:a.service.page.destacados))},dependencies:[W,L,A]});let e=t;return e})();export{ue as HomeComponent};
