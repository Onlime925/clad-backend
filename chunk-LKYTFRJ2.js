import{a as z}from"./chunk-UAS2PMYZ.js";import{a as M}from"./chunk-LRBKMYX4.js";import{c as N,d as W,e as A}from"./chunk-FLL3NRM6.js";import{c as $,h as R,i as T,t as J,v as k}from"./chunk-GLZSOAJQ.js";import{$a as S,Ea as O,Fa as y,Ka as r,La as C,W as P,Wa as f,Ya as u,_a as _,ab as E,bb as D,cb as l,db as c,ea as F,eb as x,fa as B,hb as j,ib as v,jb as d,ob as p,pb as s,qb as I,ra as H,sb as Y,ub as b,wb as V,yb as g,zb as m}from"./chunk-B5DXUUC7.js";import"./chunk-4CLCTAJ7.js";function Z(e,i){if(e&1&&(x(0,"div",5),g(1,"safeHtml")),e&2){let o=d();u("innerHTML",m(1,1,o.service.page==null||o.service.page.head==null?null:o.service.page.head.description),O)}}var q=(()=>{let i=class i{constructor(a){this.service=a}};i.\u0275fac=function(n){return new(n||i)(C(M))},i.\u0275cmp=P({type:i,selectors:[["app-doc-header"]],standalone:!0,features:[b],decls:8,vars:2,consts:[[1,"mb-5","doc-section"],[1,"doc-header"],[1,"my_container"],[1,"heading-1","text-azul-indigo","text-center","text-lg-start"],[1,"doc-text"],[1,"doc-text-container","body-1","text-azul-indigo","text-center","text-lg-justify",3,"innerHTML"]],template:function(n,t){n&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3),p(4),c()()(),l(5,"div",4)(6,"div",2),f(7,Z,2,3,"div",5),c()()()),n&2&&(r(4),s(t.service.page==null||t.service.page.head==null?null:t.service.page.head.title),r(3),_(!(t.service.page==null||t.service.page.head==null)&&t.service.page.head.description?7:-1))},dependencies:[z],styles:[".doc-section[_ngcontent-%COMP%]   .doc-header[_ngcontent-%COMP%]{padding:30px 0;background-color:#ace3df}.doc-section[_ngcontent-%COMP%]   .doc-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:52px}.doc-section[_ngcontent-%COMP%]   .doc-text[_ngcontent-%COMP%]{background-color:#c1c4e8}.doc-section[_ngcontent-%COMP%]   .doc-text[_ngcontent-%COMP%]   .doc-text-container[_ngcontent-%COMP%]{padding:20px 0}@media (max-width: 992px){.doc-section[_ngcontent-%COMP%]   .doc-header[_ngcontent-%COMP%]{text-align:center!important}}"]});let e=i;return e})();function ee(e,i){if(e&1&&(x(0,"div",6),g(1,"safeHtml")),e&2){let o=d();u("innerHTML",m(1,1,o.service.page==null||o.service.page.head==null?null:o.service.page.head.description2),O)}}var G=(()=>{let i=class i{constructor(a){this.service=a,this.apiUrl=k.apiUrl}};i.\u0275fac=function(n){return new(n||i)(C(M))},i.\u0275cmp=P({type:i,selectors:[["app-doc-banner"]],standalone:!0,features:[b],decls:7,vars:2,consts:[[1,"doc-banner-wrap"],[1,"my_container"],[1,"doc-banner"],["href","https://revista.clad.org/ryd","target","_blank","rel","noopener noreferrer"],["width","100%","alt","revista",3,"src"],[1,"doc-banner-container","doc-banner-text"],[1,"body-1","text-azul-indigo","mb-4","text-center","text-lg-justify",3,"innerHTML"]],template:function(n,t){n&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"a",3),x(4,"img",4),c()(),l(5,"div",5),f(6,ee,2,3,"div",6),c()()()),n&2&&(r(4),u("src",t.apiUrl+"/"+(t.service.page==null||t.service.page.head==null?null:t.service.page.head.image),y),r(2),_(!(t.service.page==null||t.service.page.head==null)&&t.service.page.head.description2?6:-1))},dependencies:[z],styles:[".doc-banner[_ngcontent-%COMP%]{padding:39px 0}.doc-banner-container[_ngcontent-%COMP%]{padding:23px 0}.doc-banner-wrap[_ngcontent-%COMP%]   .doc-banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:700}"]});let e=i;return e})();var oe=e=>({active:e});function ae(e,i){e&1&&(l(0,"a",11)(1,"div",14)(2,"p",15),p(3),g(4,"translate"),c()()()),e&2&&(r(3),s(m(4,1,"Loading..")))}function re(e,i){if(e&1&&(l(0,"a",16)(1,"div",14),x(2,"img",17),l(3,"p",15),p(4),c()()()),e&2){let o=i.$implicit,a=d(3);u("routerLink","/destacados/"+o.slug),r(2),u("src",a.apiUrl+"/"+o.thumbnail,y),r(2),s(o.title)}}function ce(e,i){if(e&1&&E(0,re,5,3,"a",16,S),e&2){let o=d(2);D(o.data)}}function le(e,i){e&1&&(l(0,"a",11)(1,"div",14)(2,"p",15),p(3),g(4,"translate"),c()()()),e&2&&(r(3),s(m(4,1,"Not Found")))}function pe(e,i){if(e&1&&f(0,le,5,3,"a",11),e&2){let o=d(2);_(o.filters.search!=""?0:-1)}}function de(e,i){if(e&1&&f(0,ce,2,0)(1,pe,1,1),e&2){let o=d();_(o.data.length!=0&&o.filters.search!=""?0:1)}}function se(e,i){if(e&1){let o=j();l(0,"li")(1,"a",18),v("click",function(){let n=F(o).$implicit,t=d();return B(t.setCat(n.id))}),p(2),c()()}if(e&2){let o=i.$implicit,a=d();r(),u("ngClass",V(2,oe,a.filters.category==o.id)),r(),s(o.title)}}var K=(()=>{let i=class i{constructor(a,n,t){this.service=a,this.language=n,this.platformId=t,this.apiUrl=k.apiUrl,this.categories=[],this.searching=!1,this.data=[],this.filters={search:"",category:"",order_by:"created_at",sort_by:"desc",type:"post",limit:10},T(this.platformId)&&this.service.get_categories().subscribe(h=>{this.categories=h.data.data})}setCat(a){this.filters.category==a?(this.filters.category="",this.submitSearch()):(this.filters.category=a,this.submitSearch())}setS(a){let n=a.target;this.filters.search=n.value,this.submitSearch()}submitSearch(){this.searching=!0,this.filters.search==""?(this.data=[],this.searching=!1):this.service.get_posts(this.filters).subscribe(a=>{this.data=a.data.data,this.searching=!1})}};i.\u0275fac=function(n){return new(n||i)(C(M),C(A),C(H))},i.\u0275cmp=P({type:i,selectors:[["app-doc-explorer"]],standalone:!0,features:[b],decls:19,vars:4,consts:[[1,"doc-explore-section"],[1,"my_container"],[1,"doc-container"],[1,"heading-1","text-violeta","pb-3"],[1,"input-wrap"],[1,"form-group"],["type","text",1,"form-control",3,"input","placeholder"],[3,"click"],["aria-hidden","true",1,"fa","fa-search"],[1,"input-container"],[1,"serch-dropdown","d-flex","flex-column"],[1,"input-container-search-Item"],[1,"explore-tabs"],[1,"list-unstyled","d-flex","align-items-center","justify-content-center","flex-wrap","gap-2"],[1,"d-flex","align-items-center"],[1,"m-0","px-2",2,"font-size","21px","color","rgba(4, 30, 66, 1)"],[1,"input-container-search-Item",3,"routerLink"],[1,"img-fluid",2,"width","60px",3,"src"],[3,"click","ngClass"]],template:function(n,t){n&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),p(4,"Explora publicaciones, archivos, noticias del CLADoc "),c(),l(5,"div",4)(6,"div",5)(7,"input",6),g(8,"translate"),v("input",function(w){return t.setS(w)}),c(),l(9,"button",7),v("click",function(){return t.submitSearch()}),x(10,"i",8),c()()(),l(11,"div",9)(12,"div",10),f(13,ae,5,3,"a",11)(14,de,2,1),c()(),l(15,"div",12)(16,"ul",13),E(17,se,3,4,"li",null,S),c()()()()()),n&2&&(r(7),u("placeholder",m(8,2,"Buscar")),r(6),_(t.searching?13:14),r(4),D(t.categories))},dependencies:[R,$,W,N,J],styles:[".serch-dropdown[_ngcontent-%COMP%]{width:100%;max-width:975px;background-color:#d3d5f6;padding:3px;margin-top:9px;margin-bottom:18px}.input-container-search-Item[_ngcontent-%COMP%]{margin:0;border:1px solid #9496ad;padding:8px 10px}.input-container-search-Item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:21px;color:#041e42}.doc-explore-section[_ngcontent-%COMP%]{background-color:#d3d5f6;text-align:center}.doc-explore-section[_ngcontent-%COMP%]   .doc-container[_ngcontent-%COMP%]{padding:83px 0}.input-wrap[_ngcontent-%COMP%]{position:relative}.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:70px;border-radius:100px;border:2px solid #594EE6;background-color:#d3d5f6;outline:none;font-size:24px;padding:20px}.input-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;width:50px;height:50px;border-radius:50%;background-color:#594ee6;color:#fff;font-size:22px;padding-top:5px;box-sizing:border-box;position:absolute;right:25px;top:50%;transform:translateY(-50%);cursor:pointer;display:flex;align-items:center;justify-content:center}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]{margin-top:50px}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex!important}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px 30px;gap:10px;border-radius:40px;border:2px 0px 0px 0px;opacity:0px;border:1px solid #594EE6;font-size:16px;color:#594ee6;display:inline-block;font-family:Figtree}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:is(.active){color:#fff;background-color:#594ee6}@media (max-width: 992px){.doc-explore-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:35px}.doc-explore-section[_ngcontent-%COMP%]   .doc-container[_ngcontent-%COMP%]{padding:83px 10px}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]{margin-top:50px}}@media (max-width: 575px){.doc-explore-section[_ngcontent-%COMP%]   .doc-container[_ngcontent-%COMP%]{padding:20px 10px}.doc-explore-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;text-align:center}.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:50px;font-size:20px;border-width:1px}.input-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;width:40px;height:40px;border-radius:50%;background-color:#594ee6;color:#fff;font-size:18px;padding-top:2px;box-sizing:border-box;position:absolute;right:15px;top:50%;transform:translateY(-50%);cursor:pointer;display:flex;align-items:center;justify-content:center}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]{margin-top:30px}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:4px 15px;border-radius:20px;font-size:14px}}"]});let e=i;return e})();var ge=e=>({active:e});function me(e,i){if(e&1&&(l(0,"option"),p(1),c()),e&2){let o=i.$implicit;r(),s(o)}}function ue(e,i){if(e&1&&(l(0,"option"),p(1),c()),e&2){let o=i.$implicit;r(),s(o)}}function _e(e,i){if(e&1&&(l(0,"option"),p(1),c()),e&2){let o=i.$implicit;r(),s(o)}}function xe(e,i){e&1&&(l(0,"div",14)(1,"div",17)(2,"div",18)(3,"div",19)(4,"h2",20),p(5),g(6,"translate"),c()()()()()),e&2&&(r(5),s(m(6,1,"Loading..")))}function fe(e,i){if(e&1&&x(0,"img",23),e&2){let o=d().$implicit,a=d(3);u("src",a.apiUrl+"/"+o.thumbnail,y)("alt",o.thumbnail_prev)}}function Ce(e,i){if(e&1){let o=j();l(0,"div",14)(1,"div",17)(2,"div",21)(3,"div",22),f(4,fe,1,2,"img",23),c()(),l(5,"div",24)(6,"div",25)(7,"h2",20),p(8),c(),l(9,"h6",26),p(10),c(),l(11,"div",17)(12,"div",27)(13,"p",28)(14,"strong",26),p(15),g(16,"translate"),c(),p(17),c()(),l(18,"div",27)(19,"p",28)(20,"strong",26),p(21),g(22,"translate"),c(),p(23),l(24,"strong"),p(25),g(26,"translate"),c(),p(27),c()()(),l(28,"p",29),p(29),c(),l(30,"div",17)(31,"div",30)(32,"div",31)(33,"a",32),v("click",function(){let n=F(o).$implicit,t=d(3);return B(t.views(n.id))}),p(34),g(35,"translate"),c(),l(36,"a",33),v("click",function(){let n=F(o).$implicit,t=d(3);return B(t.views(n.id))}),p(37),g(38,"translate"),c()()(),l(39,"div",30)(40,"div",34)(41,"div",35),x(42,"i",36),l(43,"span",37),p(44),c()(),l(45,"div",35)(46,"i",38),v("click",function(){let n=F(o).$implicit,t=d(3);return B(t.likes(n.id))}),c(),l(47,"span",37),p(48),c()()()()()()()()()}if(e&2){let o,a,n=i.$implicit,t=d(3);r(4),_(n.thumbnail?4:-1),r(4),s(n.title),r(2),s(n.date),r(5),I("",m(16,18,"Tema")," :"),r(2),I(" ",n.topic," "),r(4),I("",m(22,20,"Pais"),":"),r(2),I(" ",n.country," | "),r(2),I("",m(26,22,"Idioma"),":"),r(2),Y(" ",t.language.lang=="en"?"English":""," ",t.language.lang=="es"?"Spanish":""," ",t.language.lang=="pt"?"Portugal":""," "),r(2),s(n.short_description),r(4),u("href",t.apiUrl+"/"+n.pdf,y),r(),s(m(35,24,"Ver online")),r(2),u("href",t.apiUrl+"/api/web/file/"+n.id+"?lang="+t.language.lang,y),r(),s(m(38,26,"Descargar archivo")),r(7),s((o=n.views)!==null&&o!==void 0?o:0),r(4),s((a=n.like)!==null&&a!==void 0?a:0)}}function ve(e,i){if(e&1&&E(0,Ce,49,28,"div",14,S),e&2){let o=d(2);D(o.posts)}}function he(e,i){if(e&1&&f(0,ve,2,0),e&2){let o=d();_(o.posts?0:-1)}}function Pe(e,i){if(e&1){let o=j();l(0,"button",39),v("click",function(){let n=F(o).$implicit,t=d();return B(t.Page(n.title))}),p(1),c()}if(e&2){let o=i.$implicit,a=d();u("ngClass",V(2,ge,a.options.page==o.title)),r(),s(o.title)}}var Q=(()=>{let i=class i{constructor(a,n,t){this.service=a,this.language=n,this.platformId=t,this.paginations=[],this.apiUrl=k.apiUrl,this.posts=[],this.loading=!1,this.country=[],this.years=[],this.topics=[],this.options={limit:2,search:"",year:"",topic:"",country:"",page:1},T(this.platformId)&&(this.loadPosts(),this.service.get_document_filters().subscribe(h=>{this.country=h.data.country,this.topics=h.data.topics,this.years=h.data.years}))}loadPosts(){this.loading=!0,this.paginations=[],this.service.get_document(this.options).subscribe(a=>{this.posts=a.data.data,this.loading=!1;let n=Math.ceil(a.data.total/this.options.limit);for(let t=1;t<n;t++)this.paginations.push({title:t})})}Page(a){this.options.page=a,this.loadPosts()}setSearch(a){let n=a.target;this.options.page=1,this.options.search=n.value,this.loadPosts()}setYear(a){let n=a.target;this.options.page=1,this.options.year=n.value,this.loadPosts()}setCountry(a){let n=a.target;this.options.page=1,this.options.country=n.value,this.loadPosts()}setTopic(a){let n=a.target;this.options.page=1,this.options.topic=n.value,this.loadPosts()}views(a){if(T(this.platformId)){let n=JSON.parse(localStorage.getItem("views")||"{}");if(n[a])return;this.service.views(a).subscribe(t=>{n[a]=!0,localStorage.setItem("views",JSON.stringify(n)),this.loadPosts()})}}likes(a){if(T(this.platformId)){let n=JSON.parse(localStorage.getItem("likes")||"{}");if(n[a])return;this.service.like(a).subscribe(t=>{n[a]=!0,localStorage.setItem("likes",JSON.stringify(n)),this.loadPosts()})}}};i.\u0275fac=function(n){return new(n||i)(C(M),C(A),C(H))},i.\u0275cmp=P({type:i,selectors:[["app-doc-declare"]],standalone:!0,features:[b],decls:41,vars:16,consts:[[1,"py-5","text-white","text-center","bg-azul-indigo","declaration"],[1,"my_container"],[1,"declaration-container"],[1,"heading-1","mb-5","text-violeta-claro"],[1,"input-wrap"],[1,"form-group"],["type","text",1,"form-control",3,"input","placeholder"],[3,"click"],["aria-hidden","true",1,"fa","fa-search"],[1,"mt-5","declaration-tabs"],[1,"d-flex","list-unstyled","d-flex","align-items-center","justify-content-center","flex-wrap","gap-2"],[1,"select-dropdown",3,"change"],["value",""],[1,"py-5","card-container"],[1,"card-banner","mb-5"],[1,"paginations","mt-5"],[1,"btn","btn-primary",3,"ngClass"],[1,"row"],[1,"col-12"],[1,"card-banner-text","text-center"],[1,"heading-2","text-violeta"],[1,"col-12","col-lg-3"],[1,"card-banner-img"],["width","100%",3,"src","alt"],[1,"col-12","col-lg-9"],[1,"card-banner-text","text-start"],[1,"heading-3"],[1,"col-sm-6"],[1,"body-2"],[1,"body-1","text-azul-indigo","text-justify"],[1,"col-12","col-xl-6"],[1,""],["target","_blank",1,"mx-2","button-1",3,"click","href"],[1,"mx-2","button-1",3,"click","href"],[1,"d-flex","justify-content-end"],[1,"heading-2","mx-3","text-white"],["aria-hidden","true",1,"fa","fa-eye","mx-1"],[1,"heading-3","text-violeta","fw-normal"],["aria-hidden","true",1,"fa","fa-heart","mx-1",3,"click"],[1,"btn","btn-primary",3,"click","ngClass"]],template:function(n,t){n&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),p(4),g(5,"translate"),c(),l(6,"div",4)(7,"div",5)(8,"input",6),g(9,"translate"),v("input",function(w){return t.setSearch(w)}),c(),l(10,"button",7),v("click",function(){return t.loadPosts()}),x(11,"i",8),c()()(),l(12,"div",9)(13,"ul",10)(14,"li")(15,"select",11),v("change",function(w){return t.setYear(w)}),l(16,"option",12),p(17),g(18,"translate"),c(),E(19,me,2,1,"option",null,S),c()(),l(21,"li")(22,"select",11),v("change",function(w){return t.setTopic(w)}),l(23,"option",12),p(24),g(25,"translate"),c(),E(26,ue,2,1,"option",null,S),c()(),l(28,"li")(29,"select",11),v("change",function(w){return t.setCountry(w)}),l(30,"option",12),p(31),g(32,"translate"),c(),E(33,_e,2,1,"option",null,S),c()()()()(),l(35,"div",13),f(36,xe,7,3,"div",14)(37,he,1,1),l(38,"div",15),E(39,Pe,2,4,"button",16,S),c()()()()),n&2&&(r(4),s(m(5,6,"Declaraciones y Consensos")),r(4),u("placeholder",m(9,8,"T\xEDtulo")),r(9),I("Select ",m(18,10,"A\xF1o")," "),r(2),D(t.years),r(5),I("Select ",m(25,12,"Tema")," "),r(2),D(t.topics),r(5),I("Select ",m(32,14,"Pa\xEDs")," "),r(2),D(t.country),r(3),_(t.loading?36:37),r(3),D(t.paginations))},dependencies:[W,N,R,$],styles:[".paginations[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap}.paginations[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px 6px;background-color:#c1c4e8;border:#C1C4E8}.paginations[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#594ee6;border:#594ee6;color:#fff}.serch-dropdown[_ngcontent-%COMP%]{width:100%;max-width:975px;background-color:#fff;padding:3px;margin-top:9px;margin-bottom:18px}.input-container-search-Item[_ngcontent-%COMP%]{margin:0;border:1px solid lightgray;padding:8px 10px}.input-container-search-Item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:21px;color:#041e42}.select-dropdown[_ngcontent-%COMP%]{background:#594ee6;border:none;text-align:center;color:#dcdef0;padding:6px 53px;border-radius:22px;max-width:346px}.select-dropdown[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{background:#fff;color:#000;text-align:left}.input-wrap[_ngcontent-%COMP%]{position:relative}.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:70px;border-radius:100px;border:2px solid #594EE6;background-color:#d3d5f6;outline:none;font-size:24px;padding:20px}.input-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;width:50px;height:50px;border-radius:50%;background-color:#594ee6;color:#fff;font-size:22px;padding-top:5px;box-sizing:border-box;position:absolute;right:25px;top:50%;transform:translateY(-50%);cursor:pointer;display:flex;align-items:center;justify-content:center}.declaration[_ngcontent-%COMP%]   .declaration-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#dcdef0;font-weight:300;border-color:#594ee6!important;font-size:16px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]{color:#041e42;background-color:#c1c4e8;border-radius:37px;padding:25px;border:3px solid #594EE6;margin:auto}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]{display:flex!important}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:45px;color:#fff;margin-right:15px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;display:inline-block;color:#594ee6}.button-1[_ngcontent-%COMP%]{font-size:18px;padding:2px 26px}@media (max-width: 992px){.declaration-container[_ngcontent-%COMP%]{padding:0}.declaration[_ngcontent-%COMP%]   .declaration-tabs[_ngcontent-%COMP%]{margin:50px 0}.card-container[_ngcontent-%COMP%]{padding:20px 0}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]{color:#041e42;background-color:#c1c4e8;border-radius:37px;border:2px;padding:25px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]{margin-top:30px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .card-banner-btns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;padding:4px 20px;color:#fff;border:1px solid #594EE6;background-color:#594ee6;border-radius:50px;font-size:16px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:22px;color:#fff;margin-right:8px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;display:inline-block}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-img[_ngcontent-%COMP%]{max-width:300px;margin:auto}}@media (max-width: 575px){.declaration[_ngcontent-%COMP%]{background-color:#041e42;padding:30px 10px}.declaration[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;text-align:center}.declaration[_ngcontent-%COMP%]   .declaration-tabs[_ngcontent-%COMP%]{margin:30px 0}.declaration[_ngcontent-%COMP%]   .declaration-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#594ee6;padding:4px 20px;border-radius:40px;font-size:14px;color:#fff;font-family:Figtree;display:inline-block}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]{border-radius:15px;border:1px;padding:15px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-family:Red Hat Display;text-align:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:16px;text-align:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;text-align:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .card-banner-btns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;padding:4px 20px;margin-bottom:5px;color:#fff;border:1px solid #594EE6;background-color:#594ee6;border-radius:50px;font-size:14px;font-family:Red Hat Display}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;display:inline-block}}"]});let e=i;return e})();function be(e,i){if(e&1&&(x(0,"p",5),g(1,"safeHtml")),e&2){let o=d();u("innerHTML",m(1,1,o.service.page==null||o.service.page.doc==null?null:o.service.page.doc.description),O)}}function Me(e,i){if(e&1&&(x(0,"p",5),g(1,"safeHtml")),e&2){let o=d();u("innerHTML",m(1,1,o.service.page==null||o.service.page.doc==null?null:o.service.page.doc.description2),O)}}function Oe(e,i){if(e&1&&(x(0,"div",5),g(1,"safeHtml")),e&2){let o=d().$implicit;u("innerHTML",m(1,1,o.description),O)}}function ye(e,i){if(e&1&&(l(0,"div",8)(1,"h4",9),p(2),c(),f(3,Oe,2,3,"div",5),c()),e&2){let o=i.$implicit;r(2),s(o.title),r(),_(o.description?3:-1)}}function Se(e,i){if(e&1&&E(0,ye,4,2,"div",8,S),e&2){let o=d();D(o.service.page==null||o.service.page.doc==null?null:o.service.page.doc.posts)}}var X=(()=>{let i=class i{constructor(a){this.service=a,this.apiUrl=k.apiUrl}};i.\u0275fac=function(n){return new(n||i)(C(M))},i.\u0275cmp=P({type:i,selectors:[["app-doc-repository"]],standalone:!0,features:[b],decls:12,vars:5,consts:[[1,"clad-section"],[1,"my_container"],[1,"clad-section-container"],[1,"pt-4","clad-section-text"],[1,"heading-1","text-violeta","text-center","text-lg-start"],[1,"body-1","text-azul-indigo","text-center","text-lg-justify",3,"innerHTML"],[1,"text-bar"],[1,"heading-1"],[1,"clad-card"],[1,"heading-2","text-azul-indigo","text-center","text-lg-start"]],template:function(n,t){n&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),p(5),c(),f(6,be,2,3,"p",5),l(7,"div",6)(8,"h4",7),p(9),c()(),f(10,Me,2,3,"p",5)(11,Se,2,0),c()()()()),n&2&&(r(5),s(t.service.page==null||t.service.page.doc==null?null:t.service.page.doc.title),r(),_(!(t.service.page==null||t.service.page.doc==null)&&t.service.page.doc.description?6:-1),r(3),s(t.service.page==null||t.service.page.doc==null?null:t.service.page.doc.title2),r(),_(!(t.service.page==null||t.service.page.doc==null)&&t.service.page.doc.description2?10:-1),r(),_(!(t.service.page==null||t.service.page.doc==null)&&t.service.page.doc.posts?11:-1))},dependencies:[z],styles:[".clad-section[_ngcontent-%COMP%]   .clad-section-text[_ngcontent-%COMP%]   .text-bar[_ngcontent-%COMP%]{color:#fff;background-color:#041e42;border-radius:15px;padding:16px 20px;margin:24px 0}.clad-section[_ngcontent-%COMP%]   .clad-section-text[_ngcontent-%COMP%]   .clad-card[_ngcontent-%COMP%]{background-color:#d9d9d9;padding:28px 30px;border-radius:10px;margin-bottom:20px}.clad-section[_ngcontent-%COMP%]   .clad-section-text[_ngcontent-%COMP%]   .clad-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding-bottom:10px}"]});let e=i;return e})();function Ee(e,i){if(e&1&&(x(0,"div",4),g(1,"safeHtml")),e&2){let o=d();u("innerHTML",m(1,1,o.service.page==null||o.service.page.documents==null?null:o.service.page.documents.description1),O)}}function De(e,i){if(e&1&&(x(0,"div",4),g(1,"safeHtml")),e&2){let o=d();u("innerHTML",m(1,1,o.service.page==null||o.service.page.documents==null?null:o.service.page.documents.description2),O)}}var st=(()=>{let i=class i{constructor(a,n){this.service=a,this.platformId=n,this.apiUrl=k.apiUrl,T(this.platformId)&&a.setPage("publication")}};i.\u0275fac=function(n){return new(n||i)(C(M),C(H))},i.\u0275cmp=P({type:i,selectors:[["app-publications"]],standalone:!0,features:[b],decls:21,vars:6,consts:[["ngSkipHydration",""],[1,"py-5","bg-violeta","about-section",2,"background-color","#C1C4E8"],[1,"my_container","text-center","text-lg-start"],[1,"heading-1","text-violeta"],[1,"body-1","text-azul-indigo","text-center","text-lg-justify",3,"innerHTML"],[1,"text-center","text-lg-start"],[1,"button-1",3,"href"],[1,"py-5","bg-azul-aguamarina-claro","doc-official"],[1,"heading-1"]],template:function(n,t){n&1&&(x(0,"app-doc-header")(1,"app-doc-banner")(2,"app-doc-explorer")(3,"app-doc-declare",0)(4,"app-doc-repository",0),l(5,"section",1)(6,"div",2)(7,"h2",3),p(8),c(),f(9,Ee,2,3,"div",4),l(10,"div",5)(11,"a",6),p(12,"Ver m\xE1s"),c()()()(),l(13,"section",7)(14,"div",2)(15,"h2",8),p(16),c(),f(17,De,2,3,"div",4),l(18,"div",5)(19,"a",6),p(20,"Ver m\xE1s"),c()()()()),n&2&&(r(8),s(t.service.page==null||t.service.page.documents==null?null:t.service.page.documents.title1),r(),_(!(t.service.page==null||t.service.page.documents==null)&&t.service.page.documents.description1?9:-1),r(2),u("href",t.service.page==null||t.service.page.documents==null?null:t.service.page.documents.link1,y),r(5),s(t.service.page==null||t.service.page.documents==null?null:t.service.page.documents.title2),r(),_(!(t.service.page==null||t.service.page.documents==null)&&t.service.page.documents.description2?17:-1),r(2),u("href",t.service.page==null||t.service.page.documents==null?null:t.service.page.documents.link2,y))},dependencies:[z,q,G,K,Q,X],styles:["body[_ngcontent-%COMP%]{background-color:#fff}"]});let e=i;return e})();export{st as PublicationsComponent};
