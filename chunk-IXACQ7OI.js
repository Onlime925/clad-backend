import{a as z}from"./chunk-MPPSUGRM.js";import{a as S}from"./chunk-HQ7V5JS5.js";import{c as j,d as U,e as Y}from"./chunk-3IEMDY3T.js";import{$ as u,Aa as m,Ba as g,F as B,G as F,Ja as N,L as H,N as D,O as T,Oa as W,Pa as w,S as r,T as C,X as x,Y as _,_a as A,aa as P,ba as M,bb as I,ca as O,da as l,ea as c,fa as f,ia as L,ja as v,ka as d,pa as p,qa as s,ra as k,wa as y,ya as R,z as b}from"./chunk-UFGFQ7NC.js";import"./chunk-4CLCTAJ7.js";function Z(e,i){if(e&1&&(f(0,"div",5),m(1,"safeHtml")),e&2){let t=d();_("innerHTML",g(1,1,t.service.page==null||t.service.page.head==null?null:t.service.page.head.description),D)}}var J=(()=>{let i=class i{constructor(a){this.service=a}};i.\u0275fac=function(o){return new(o||i)(C(S))},i.\u0275cmp=b({type:i,selectors:[["app-doc-header"]],standalone:!0,features:[y],decls:8,vars:2,consts:[[1,"mb-5","doc-section"],[1,"doc-header"],[1,"my_container"],[1,"heading-1","text-azul-indigo","text-center","text-lg-start"],[1,"doc-text"],[1,"doc-text-container","body-1","text-azul-indigo","text-center","text-lg-justify",3,"innerHTML"]],template:function(o,n){o&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3),p(4),c()()(),l(5,"div",4)(6,"div",2),x(7,Z,2,3,"div",5),c()()()),o&2&&(r(4),s(n.service.page==null||n.service.page.head==null?null:n.service.page.head.title),r(3),u(!(n.service.page==null||n.service.page.head==null)&&n.service.page.head.description?7:-1))},dependencies:[z],styles:[".doc-section[_ngcontent-%COMP%]   .doc-header[_ngcontent-%COMP%]{padding:30px 0;background-color:#ace3df}.doc-section[_ngcontent-%COMP%]   .doc-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:52px}.doc-section[_ngcontent-%COMP%]   .doc-text[_ngcontent-%COMP%]{background-color:#c1c4e8}.doc-section[_ngcontent-%COMP%]   .doc-text[_ngcontent-%COMP%]   .doc-text-container[_ngcontent-%COMP%]{padding:20px 0}@media (max-width: 992px){.doc-section[_ngcontent-%COMP%]   .doc-header[_ngcontent-%COMP%]{text-align:center!important}}"]});let e=i;return e})();function ee(e,i){if(e&1&&(f(0,"div",6),m(1,"safeHtml")),e&2){let t=d();_("innerHTML",g(1,1,t.service.page==null||t.service.page.head==null?null:t.service.page.head.description2),D)}}var q=(()=>{let i=class i{constructor(a){this.service=a,this.apiUrl=I.apiUrl}};i.\u0275fac=function(o){return new(o||i)(C(S))},i.\u0275cmp=b({type:i,selectors:[["app-doc-banner"]],standalone:!0,features:[y],decls:7,vars:2,consts:[[1,"doc-banner-wrap"],[1,"my_container"],[1,"doc-banner"],["href","https://revista.clad.org/ryd","target","_blank","rel","noopener noreferrer"],["width","100%","alt","revista",3,"src"],[1,"doc-banner-container","doc-banner-text"],[1,"body-1","text-azul-indigo","mb-4","text-center","text-lg-justify",3,"innerHTML"]],template:function(o,n){o&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"a",3),f(4,"img",4),c()(),l(5,"div",5),x(6,ee,2,3,"div",6),c()()()),o&2&&(r(4),_("src",n.apiUrl+"/"+(n.service.page==null||n.service.page.head==null?null:n.service.page.head.image),T),r(2),u(!(n.service.page==null||n.service.page.head==null)&&n.service.page.head.description2?6:-1))},dependencies:[z],styles:[".doc-banner[_ngcontent-%COMP%]{padding:39px 0}.doc-banner-container[_ngcontent-%COMP%]{padding:23px 0}.doc-banner-wrap[_ngcontent-%COMP%]   .doc-banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:700}"]});let e=i;return e})();var ie=e=>({active:e});function oe(e,i){e&1&&(l(0,"a",11)(1,"div",14)(2,"p",15),p(3),m(4,"translate"),c()()()),e&2&&(r(3),s(g(4,1,"Loading..")))}function ae(e,i){if(e&1&&(l(0,"a",16)(1,"div",14),f(2,"img",17),l(3,"p",15),p(4),c()()()),e&2){let t=i.$implicit,a=d(3);_("routerLink","/destacados/"+t.slug),r(2),_("src",a.apiUrl+"/"+t.thumbnail,T),r(2),s(t.title)}}function re(e,i){if(e&1&&M(0,ae,5,3,"a",16,P),e&2){let t=d(2);O(t.data)}}function ce(e,i){e&1&&(l(0,"a",11)(1,"div",14)(2,"p",15),p(3),m(4,"translate"),c()()()),e&2&&(r(3),s(g(4,1,"Not Found")))}function le(e,i){if(e&1&&x(0,ce,5,3,"a",11),e&2){let t=d(2);u(t.filters.search!=""?0:-1)}}function pe(e,i){if(e&1&&x(0,re,2,0)(1,le,1,1),e&2){let t=d();u(t.data.length!=0&&t.filters.search!=""?0:1)}}function de(e,i){if(e&1){let t=L();l(0,"li")(1,"a",18),v("click",function(){let o=B(t).$implicit,n=d();return F(n.setCat(o.id))}),p(2),c()()}if(e&2){let t=i.$implicit,a=d();r(),_("ngClass",R(2,ie,a.filters.category==t.id)),r(),s(t.title)}}var K=(()=>{let i=class i{constructor(a,o,n){this.service=a,this.language=o,this.platformId=n,this.apiUrl=I.apiUrl,this.categories=[],this.searching=!1,this.data=[],this.filters={search:"",category:"",order_by:"created_at",sort_by:"desc",type:"post",limit:10},w(this.platformId)&&this.service.get_categories().subscribe(h=>{this.categories=h.data.data})}setCat(a){this.filters.category==a?(this.filters.category="",this.submitSearch()):(this.filters.category=a,this.submitSearch())}setS(a){let o=a.target;this.filters.search=o.value,this.submitSearch()}submitSearch(){this.searching=!0,this.filters.search==""?(this.data=[],this.searching=!1):this.service.get_posts(this.filters).subscribe(a=>{this.data=a.data.data,this.searching=!1})}};i.\u0275fac=function(o){return new(o||i)(C(S),C(Y),C(H))},i.\u0275cmp=b({type:i,selectors:[["app-doc-explorer"]],standalone:!0,features:[y],decls:19,vars:4,consts:[[1,"doc-explore-section"],[1,"my_container"],[1,"doc-container"],[1,"heading-1","text-violeta","pb-3"],[1,"input-wrap"],[1,"form-group"],["type","text",1,"form-control",3,"input","placeholder"],[3,"click"],["aria-hidden","true",1,"fa","fa-search"],[1,"input-container"],[1,"serch-dropdown","d-flex","flex-column"],[1,"input-container-search-Item"],[1,"d-none","explore-tabs"],[1,"list-unstyled","d-flex","align-items-center","justify-content-center","flex-wrap","gap-2"],[1,"d-flex","align-items-center"],[1,"m-0","px-2",2,"font-size","21px","color","rgba(4, 30, 66, 1)"],[1,"input-container-search-Item",3,"routerLink"],[1,"img-fluid",2,"width","60px",3,"src"],[3,"click","ngClass"]],template:function(o,n){o&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),p(4,"Explora publicaciones, archivos, noticias del CLADoc "),c(),l(5,"div",4)(6,"div",5)(7,"input",6),m(8,"translate"),v("input",function(E){return n.setS(E)}),c(),l(9,"button",7),v("click",function(){return n.submitSearch()}),f(10,"i",8),c()()(),l(11,"div",9)(12,"div",10),x(13,oe,5,3,"a",11)(14,pe,2,1),c()(),l(15,"div",12)(16,"ul",13),M(17,de,3,4,"li",null,P),c()()()()()),o&2&&(r(7),_("placeholder",g(8,2,"Buscar")),r(6),u(n.searching?13:14),r(4),O(n.categories))},dependencies:[W,N,U,j,A],styles:[".serch-dropdown[_ngcontent-%COMP%]{width:100%;max-width:975px;background-color:#d3d5f6;padding:3px;margin-top:9px;margin-bottom:18px}.input-container-search-Item[_ngcontent-%COMP%]{margin:0;border:1px solid #9496ad;padding:8px 10px}.input-container-search-Item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:21px;color:#041e42}.doc-explore-section[_ngcontent-%COMP%]{background-color:#d3d5f6;text-align:center}.doc-explore-section[_ngcontent-%COMP%]   .doc-container[_ngcontent-%COMP%]{padding:83px 0}.input-wrap[_ngcontent-%COMP%]{position:relative}.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:70px;border-radius:100px;border:2px solid #594EE6;background-color:#d3d5f6;outline:none;font-size:24px;padding:20px}.input-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;width:50px;height:50px;border-radius:50%;background-color:#594ee6;color:#fff;font-size:22px;padding-top:5px;box-sizing:border-box;position:absolute;right:25px;top:50%;transform:translateY(-50%);cursor:pointer;display:flex;align-items:center;justify-content:center}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]{margin-top:50px}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex!important}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px 30px;gap:10px;border-radius:40px;border:2px 0px 0px 0px;opacity:0px;border:1px solid #594EE6;font-size:16px;color:#594ee6;display:inline-block;font-family:Figtree}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:is(.active){color:#fff;background-color:#594ee6}@media (max-width: 992px){.doc-explore-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:35px}.doc-explore-section[_ngcontent-%COMP%]   .doc-container[_ngcontent-%COMP%]{padding:83px 10px}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]{margin-top:50px}}@media (max-width: 575px){.doc-explore-section[_ngcontent-%COMP%]   .doc-container[_ngcontent-%COMP%]{padding:20px 10px}.doc-explore-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;text-align:center}.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:50px;font-size:20px;border-width:1px}.input-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;width:40px;height:40px;border-radius:50%;background-color:#594ee6;color:#fff;font-size:18px;padding-top:2px;box-sizing:border-box;position:absolute;right:15px;top:50%;transform:translateY(-50%);cursor:pointer;display:flex;align-items:center;justify-content:center}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]{margin-top:30px}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:4px 15px;border-radius:20px;font-size:14px}}"]});let e=i;return e})();var se=e=>({active:e});function me(e,i){if(e&1&&(l(0,"option"),p(1),c()),e&2){let t=i.$implicit;r(),s(t)}}function ge(e,i){if(e&1&&(l(0,"option"),p(1),c()),e&2){let t=i.$implicit;r(),s(t)}}function _e(e,i){if(e&1&&(l(0,"option"),p(1),c()),e&2){let t=i.$implicit;r(),s(t)}}function ue(e,i){if(e&1&&(l(0,"option"),p(1),c()),e&2){let t=i.$implicit;r(),s(t)}}function xe(e,i){e&1&&(l(0,"div",14)(1,"div",17)(2,"div",18)(3,"div",19)(4,"h2",20),p(5),m(6,"translate"),c()()()()()),e&2&&(r(5),s(g(6,1,"Loading..")))}function fe(e,i){if(e&1&&f(0,"img",23),e&2){let t=d().$implicit,a=d(3);_("src",a.apiUrl+"/"+t.thumbnail,T)("alt",t.thumbnail_prev)}}function Ce(e,i){if(e&1){let t=L();l(0,"a",39),v("click",function(){B(t);let o=d().$implicit,n=d(3);return F(n.views(o.id))}),p(1),m(2,"translate"),c()}if(e&2){let t=d().$implicit,a=d(3);_("href",a.apiUrl+"/api/web/file/"+t.pdf.split("uploads/").pop(),T),r(),s(g(2,2,"Descargar archivo"))}}function ve(e,i){if(e&1){let t=L();l(0,"div",14)(1,"div",17)(2,"div",21)(3,"div",22),x(4,fe,1,2,"img",23),c()(),l(5,"div",24)(6,"div",25)(7,"h2",20),p(8),c(),l(9,"h6",26),p(10),c(),l(11,"div",17)(12,"div",27)(13,"p",28)(14,"strong",26),p(15),m(16,"translate"),c(),p(17),c()(),l(18,"div",27)(19,"p",28)(20,"strong",26),p(21),m(22,"translate"),c(),p(23),l(24,"strong"),p(25),m(26,"translate"),c(),p(27),c()()(),l(28,"p",29),p(29),c(),l(30,"div",17)(31,"div",30)(32,"div",31)(33,"a",32),v("click",function(){let o=B(t).$implicit,n=d(3);return F(n.views(o.id))}),p(34),m(35,"translate"),c(),x(36,Ce,3,4,"a",33),c()(),l(37,"div",30)(38,"div",34)(39,"div",35),f(40,"i",36),l(41,"span",37),p(42),c()(),l(43,"div",35)(44,"i",38),v("click",function(){let o=B(t).$implicit,n=d(3);return F(n.likes(o.id))}),c(),l(45,"span",37),p(46),c()()()()()()()()()}if(e&2){let t,a,o=i.$implicit,n=d(3);r(4),u(o.thumbnail?4:-1),r(4),s(o.title),r(2),s(o.date),r(5),k("",g(16,15,"Tema")," :"),r(2),k(" ",o.topic," "),r(4),k("",g(22,17,"Pais"),":"),r(2),k(" ",o.country," | "),r(2),k("",g(26,19,"Idioma"),":"),r(2),k(" ",o.language," "),r(2),s(o.short_description),r(4),_("href",n.apiUrl+"/"+o.pdf,T),r(),s(g(35,21,"Ver online")),r(2),u(o.pdf?36:-1),r(6),s((t=o.views)!==null&&t!==void 0?t:0),r(4),s((a=o.like)!==null&&a!==void 0?a:0)}}function he(e,i){if(e&1&&M(0,ve,47,23,"div",14,P),e&2){let t=d(2);O(t.posts)}}function be(e,i){if(e&1&&x(0,he,2,0),e&2){let t=d();u(t.posts?0:-1)}}function Pe(e,i){if(e&1){let t=L();l(0,"button",40),v("click",function(){let o=B(t).$implicit,n=d();return F(n.Page(o.title))}),p(1),c()}if(e&2){let t=i.$implicit,a=d();_("ngClass",R(2,se,a.options.page==t.title)),r(),s(t.title)}}var Q=(()=>{let i=class i{constructor(a,o,n){this.service=a,this.llanguage=o,this.platformId=n,this.paginations=[],this.apiUrl=I.apiUrl,this.posts=[],this.loading=!1,this.country=[],this.language=[],this.years=[],this.topics=[],this.options={limit:4,search:"",year:"",topic:"",country:"",language:"",order_by:"created_at",sort_by:"desc",page:1},w(this.platformId)&&(this.loadPosts(),this.service.get_document_filters().subscribe(h=>{this.country=h.data.country,this.topics=h.data.topics,this.language=h.data.languages,this.years=h.data.years}))}loadPosts(){this.loading=!0,this.paginations=[],this.service.get_document(this.options).subscribe(a=>{this.posts=a.data.data,this.loading=!1;let o=Math.ceil(a.data.total/this.options.limit);for(let n=1;n<o;n++)this.paginations.push({title:n})})}Page(a){this.options.page=a,this.loadPosts()}setSearch(a){let o=a.target;this.options.page=1,this.options.search=o.value,this.loadPosts()}setYear(a){let o=a.target;this.options.page=1,this.options.year=o.value,this.loadPosts()}setCountry(a){let o=a.target;this.options.page=1,this.options.country=o.value,this.loadPosts()}setTopic(a){let o=a.target;this.options.page=1,this.options.topic=o.value,this.loadPosts()}setLanguage(a){let o=a.target;this.options.page=1,this.options.language=o.value,this.loadPosts()}views(a){if(w(this.platformId)){let o=JSON.parse(localStorage.getItem("views")||"{}");if(o[a])return;this.service.views(a).subscribe(n=>{o[a]=!0,localStorage.setItem("views",JSON.stringify(o)),this.loadPosts()})}}likes(a){if(w(this.platformId)){let o=JSON.parse(localStorage.getItem("likes")||"{}");if(o[a])return;this.service.like(a).subscribe(n=>{o[a]=!0,localStorage.setItem("likes",JSON.stringify(o)),this.loadPosts()})}}};i.\u0275fac=function(o){return new(o||i)(C(S),C(Y),C(H))},i.\u0275cmp=b({type:i,selectors:[["app-doc-declare"]],standalone:!0,features:[y],decls:48,vars:19,consts:[[1,"py-5","text-white","text-center","bg-azul-indigo","declaration"],[1,"my_container"],[1,"declaration-container"],[1,"heading-1","mb-5","text-violeta-claro"],[1,"input-wrap"],[1,"form-group"],["type","text",1,"form-control",3,"input","placeholder"],[3,"click"],["aria-hidden","true",1,"fa","fa-search"],[1,"mt-5","declaration-tabs"],[1,"d-flex","list-unstyled","d-flex","align-items-center","justify-content-center","flex-wrap","gap-2"],[1,"select-dropdown",3,"change"],["value",""],[1,"py-5","card-container"],[1,"card-banner","mb-5"],[1,"paginations","mt-5"],[1,"btn","btn-primary",3,"ngClass"],[1,"row"],[1,"col-12"],[1,"card-banner-text","text-center"],[1,"heading-2","text-violeta"],[1,"col-12","col-lg-3"],[1,"card-banner-img"],["width","100%",3,"src","alt"],[1,"col-12","col-lg-9"],[1,"card-banner-text","text-start"],[1,"heading-3"],[1,"col-sm-6"],[1,"body-2"],[1,"body-1","text-azul-indigo","text-justify"],[1,"col-12","col-xl-6"],[1,""],["target","_blank",1,"mx-2","button-1",3,"click","href"],[1,"mx-2","button-1",3,"href"],[1,"d-flex","justify-content-end"],[1,"heading-2","mx-3","text-white"],["aria-hidden","true",1,"fa","fa-eye","mx-1"],[1,"heading-3","text-violeta","fw-normal"],["aria-hidden","true",1,"fa","fa-heart","mx-1",3,"click"],[1,"mx-2","button-1",3,"click","href"],[1,"btn","btn-primary",3,"click","ngClass"]],template:function(o,n){o&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),p(4),m(5,"translate"),c(),l(6,"div",4)(7,"div",5)(8,"input",6),m(9,"translate"),v("input",function(E){return n.setSearch(E)}),c(),l(10,"button",7),v("click",function(){return n.loadPosts()}),f(11,"i",8),c()()(),l(12,"div",9)(13,"ul",10)(14,"li")(15,"select",11),v("change",function(E){return n.setYear(E)}),l(16,"option",12),p(17),m(18,"translate"),c(),M(19,me,2,1,"option",null,P),c()(),l(21,"li")(22,"select",11),v("change",function(E){return n.setTopic(E)}),l(23,"option",12),p(24),m(25,"translate"),c(),M(26,ge,2,1,"option",null,P),c()(),l(28,"li")(29,"select",11),v("change",function(E){return n.setCountry(E)}),l(30,"option",12),p(31),m(32,"translate"),c(),M(33,_e,2,1,"option",null,P),c()(),l(35,"li")(36,"select",11),v("change",function(E){return n.setLanguage(E)}),l(37,"option",12),p(38),m(39,"translate"),c(),M(40,ue,2,1,"option",null,P),c()()()()(),l(42,"div",13),x(43,xe,7,3,"div",14)(44,be,1,1),l(45,"div",15),M(46,Pe,2,4,"button",16,P),c()()()()),o&2&&(r(4),s(g(5,7,"Declaraciones y Consensos")),r(4),_("placeholder",g(9,9,"T\xEDtulo")),r(9),k(" ",g(18,11,"A\xF1o")," "),r(2),O(n.years),r(5),k(" ",g(25,13,"Tema")," "),r(2),O(n.topics),r(5),k(" ",g(32,15,"Pa\xEDs")," "),r(2),O(n.country),r(5),k(" ",g(39,17,"Language")," "),r(2),O(n.language),r(3),u(n.loading?43:44),r(3),O(n.paginations))},dependencies:[U,j,W,N],styles:[".paginations[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap}.paginations[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px 6px;background-color:#c1c4e8;border:#C1C4E8}.paginations[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#594ee6;border:#594ee6;color:#fff}.serch-dropdown[_ngcontent-%COMP%]{width:100%;max-width:975px;background-color:#fff;padding:3px;margin-top:9px;margin-bottom:18px}.input-container-search-Item[_ngcontent-%COMP%]{margin:0;border:1px solid lightgray;padding:8px 10px}.input-container-search-Item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:21px;color:#041e42}.select-dropdown[_ngcontent-%COMP%]{background:#594ee6;border:none;text-align:center;color:#dcdef0;padding:6px 53px;border-radius:22px;max-width:219px}.select-dropdown[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{background:#fff;color:#000;text-align:left}.input-wrap[_ngcontent-%COMP%]{position:relative}.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:70px;border-radius:100px;border:2px solid #594EE6;background-color:#d3d5f6;outline:none;font-size:24px;padding:20px}.input-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;width:50px;height:50px;border-radius:50%;background-color:#594ee6;color:#fff;font-size:22px;padding-top:5px;box-sizing:border-box;position:absolute;right:25px;top:50%;transform:translateY(-50%);cursor:pointer;display:flex;align-items:center;justify-content:center}.declaration[_ngcontent-%COMP%]   .declaration-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#dcdef0;font-weight:300;border-color:#594ee6!important;font-size:16px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]{color:#041e42;background-color:#c1c4e8;border-radius:37px;padding:25px;border:3px solid #594EE6;margin:auto}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]{display:flex!important}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:45px;color:#fff;margin-right:15px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;display:inline-block;color:#594ee6}.button-1[_ngcontent-%COMP%]{font-size:18px;padding:2px 26px}@media (max-width: 992px){.declaration-container[_ngcontent-%COMP%]{padding:0}.declaration[_ngcontent-%COMP%]   .declaration-tabs[_ngcontent-%COMP%]{margin:50px 0}.card-container[_ngcontent-%COMP%]{padding:20px 0}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]{color:#041e42;background-color:#c1c4e8;border-radius:37px;border:2px;padding:25px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]{margin-top:30px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .card-banner-btns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;padding:4px 20px;color:#fff;border:1px solid #594EE6;background-color:#594ee6;border-radius:50px;font-size:16px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:22px;color:#fff;margin-right:8px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;display:inline-block}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-img[_ngcontent-%COMP%]{max-width:300px;margin:auto}}@media (max-width: 575px){.declaration[_ngcontent-%COMP%]{background-color:#041e42;padding:30px 10px}.declaration[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;text-align:center}.declaration[_ngcontent-%COMP%]   .declaration-tabs[_ngcontent-%COMP%]{margin:30px 0}.declaration[_ngcontent-%COMP%]   .declaration-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#594ee6;padding:4px 20px;border-radius:40px;font-size:14px;color:#fff;font-family:Figtree;display:inline-block}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]{border-radius:15px;border:1px;padding:15px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-family:Red Hat Display;text-align:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:16px;text-align:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;text-align:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .card-banner-btns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;padding:4px 20px;margin-bottom:5px;color:#fff;border:1px solid #594EE6;background-color:#594ee6;border-radius:50px;font-size:14px;font-family:Red Hat Display}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;display:inline-block}}"]});let e=i;return e})();function Me(e,i){if(e&1&&(f(0,"p",5),m(1,"safeHtml")),e&2){let t=d();_("innerHTML",g(1,1,t.service.page==null||t.service.page.doc==null?null:t.service.page.doc.description),D)}}function Oe(e,i){if(e&1&&(f(0,"p",5),m(1,"safeHtml")),e&2){let t=d();_("innerHTML",g(1,1,t.service.page==null||t.service.page.doc==null?null:t.service.page.doc.description2),D)}}function ye(e,i){if(e&1&&(f(0,"div",5),m(1,"safeHtml")),e&2){let t=d().$implicit;_("innerHTML",g(1,1,t.description),D)}}function Se(e,i){if(e&1&&(l(0,"div",8)(1,"h4",9),p(2),c(),x(3,ye,2,3,"div",5),c()),e&2){let t=i.$implicit;r(2),s(t.title),r(),u(t.description?3:-1)}}function Ee(e,i){if(e&1&&M(0,Se,4,2,"div",8,P),e&2){let t=d();O(t.service.page==null||t.service.page.doc==null?null:t.service.page.doc.posts)}}var X=(()=>{let i=class i{constructor(a){this.service=a,this.apiUrl=I.apiUrl}};i.\u0275fac=function(o){return new(o||i)(C(S))},i.\u0275cmp=b({type:i,selectors:[["app-doc-repository"]],standalone:!0,features:[y],decls:12,vars:5,consts:[[1,"clad-section"],[1,"my_container"],[1,"clad-section-container"],[1,"pt-4","clad-section-text"],[1,"heading-1","text-violeta","text-center","text-lg-start"],[1,"body-1","text-azul-indigo","text-center","text-lg-justify",3,"innerHTML"],[1,"text-bar"],[1,"heading-1"],[1,"clad-card"],[1,"heading-2","text-azul-indigo","text-center","text-lg-start"]],template:function(o,n){o&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),p(5),c(),x(6,Me,2,3,"p",5),l(7,"div",6)(8,"h4",7),p(9),c()(),x(10,Oe,2,3,"p",5)(11,Ee,2,0),c()()()()),o&2&&(r(5),s(n.service.page==null||n.service.page.doc==null?null:n.service.page.doc.title),r(),u(!(n.service.page==null||n.service.page.doc==null)&&n.service.page.doc.description?6:-1),r(3),s(n.service.page==null||n.service.page.doc==null?null:n.service.page.doc.title2),r(),u(!(n.service.page==null||n.service.page.doc==null)&&n.service.page.doc.description2?10:-1),r(),u(!(n.service.page==null||n.service.page.doc==null)&&n.service.page.doc.posts?11:-1))},dependencies:[z],styles:[".clad-section[_ngcontent-%COMP%]   .clad-section-text[_ngcontent-%COMP%]   .text-bar[_ngcontent-%COMP%]{color:#fff;background-color:#041e42;border-radius:15px;padding:16px 20px;margin:24px 0}.clad-section[_ngcontent-%COMP%]   .clad-section-text[_ngcontent-%COMP%]   .clad-card[_ngcontent-%COMP%]{background-color:#d9d9d9;padding:28px 30px;border-radius:10px;margin-bottom:20px}.clad-section[_ngcontent-%COMP%]   .clad-section-text[_ngcontent-%COMP%]   .clad-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding-bottom:10px}"]});let e=i;return e})();function De(e,i){if(e&1&&(f(0,"div",4),m(1,"safeHtml")),e&2){let t=d();_("innerHTML",g(1,1,t.service.page==null||t.service.page.documents==null?null:t.service.page.documents.description1),D)}}function ke(e,i){if(e&1&&(f(0,"div",4),m(1,"safeHtml")),e&2){let t=d();_("innerHTML",g(1,1,t.service.page==null||t.service.page.documents==null?null:t.service.page.documents.description2),D)}}function Te(e,i){if(e&1&&(l(0,"a",9),p(1),m(2,"translate"),c()),e&2){let t=d(2);_("href",t.service.page==null||t.service.page.documents==null?null:t.service.page.documents.link2,T),r(),s(g(2,2,"En breve"))}}function Ie(e,i){if(e&1&&(l(0,"a",6),p(1),m(2,"translate"),c()),e&2){let t=d(2);_("routerLink",t.service.page==null||t.service.page.documents==null?null:t.service.page.documents.link2),r(),s(g(2,2,"En breve"))}}function we(e,i){if(e&1&&x(0,Te,3,4,"a",9)(1,Ie,3,4,"a",6),e&2){let t=d();u(t.service.page.documents.link2.startsWith("http")?0:1)}}var ft=(()=>{let i=class i{constructor(a,o){this.service=a,this.platformId=o,this.apiUrl=I.apiUrl,w(this.platformId)&&a.setPage("publication")}};i.\u0275fac=function(o){return new(o||i)(C(S),C(H))},i.\u0275cmp=b({type:i,selectors:[["app-publications"]],standalone:!0,features:[y],decls:21,vars:9,consts:[["ngSkipHydration",""],[1,"py-5","bg-violeta","about-section",2,"background-color","#C1C4E8"],[1,"my_container","text-center","text-lg-start"],[1,"heading-1","text-violeta"],[1,"body-1","text-azul-indigo","text-center","text-lg-justify",3,"innerHTML"],[1,"text-center","text-lg-start"],[1,"button-1",3,"routerLink"],[1,"py-5","bg-azul-aguamarina-claro","doc-official"],[1,"heading-1"],[1,"button-1",3,"href"]],template:function(o,n){o&1&&(f(0,"app-doc-header")(1,"app-doc-banner")(2,"app-doc-explorer")(3,"app-doc-declare",0)(4,"app-doc-repository",0),l(5,"section",1)(6,"div",2)(7,"h2",3),p(8),c(),x(9,De,2,3,"div",4),l(10,"div",5)(11,"a",6),p(12),m(13,"translate"),c()()()(),l(14,"section",7)(15,"div",2)(16,"h2",8),p(17),c(),x(18,ke,2,3,"div",4),l(19,"div",5),x(20,we,2,1),c()()()),o&2&&(r(8),s(n.service.page==null||n.service.page.documents==null?null:n.service.page.documents.title1),r(),u(!(n.service.page==null||n.service.page.documents==null)&&n.service.page.documents.description1?9:-1),r(2),_("routerLink","/concursodemonografias"),r(),s(g(13,7,"Ver m\xE1s")),r(5),s(n.service.page==null||n.service.page.documents==null?null:n.service.page.documents.title2),r(),u(!(n.service.page==null||n.service.page.documents==null)&&n.service.page.documents.description2?18:-1),r(2),u(!(n.service.page==null||n.service.page.documents==null)&&n.service.page.documents.link2?20:-1))},dependencies:[U,j,z,A,J,q,K,Q,X],styles:["body[_ngcontent-%COMP%]{background-color:#fff}"]});let e=i;return e})();export{ft as PublicationsComponent};
