import{a as k}from"./chunk-UAS2PMYZ.js";import{a as P}from"./chunk-HXH56C36.js";import{c as W,d as A,e as Y}from"./chunk-FLL3NRM6.js";import{c as $,h as V,i as B,t as q,v as T}from"./chunk-GLZSOAJQ.js";import{$a as y,Ea as b,Fa as O,Ka as o,La as C,W as h,Wa as f,Ya as u,_a as _,ab as S,bb as E,cb as c,db as l,ea as j,eb as x,fa as L,hb as U,ib as D,jb as s,ob as p,pb as d,qb as w,ra as z,sb as N,ub as M,wb as R,yb as g,zb as m}from"./chunk-B5DXUUC7.js";import"./chunk-4CLCTAJ7.js";function Z(e,n){if(e&1&&(x(0,"div",5),g(1,"safeHtml")),e&2){let i=s();u("innerHTML",m(1,1,i.service.page==null||i.service.page.head==null?null:i.service.page.head.description),b)}}var G=(()=>{let n=class n{constructor(r){this.service=r}};n.\u0275fac=function(a){return new(a||n)(C(P))},n.\u0275cmp=h({type:n,selectors:[["app-doc-header"]],standalone:!0,features:[M],decls:8,vars:2,consts:[[1,"mb-5","doc-section"],[1,"doc-header"],[1,"my_container"],[1,"heading-1","text-azul-indigo","text-center","text-lg-start"],[1,"doc-text"],[1,"doc-text-container","body-1","text-azul-indigo","text-center","text-lg-justify",3,"innerHTML"]],template:function(a,t){a&1&&(c(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3),p(4),l()()(),c(5,"div",4)(6,"div",2),f(7,Z,2,3,"div",5),l()()()),a&2&&(o(4),d(t.service.page==null||t.service.page.head==null?null:t.service.page.head.title),o(3),_(!(t.service.page==null||t.service.page.head==null)&&t.service.page.head.description?7:-1))},dependencies:[k],styles:[".doc-section[_ngcontent-%COMP%]   .doc-header[_ngcontent-%COMP%]{padding:30px 0;background-color:#ace3df}.doc-section[_ngcontent-%COMP%]   .doc-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:52px}.doc-section[_ngcontent-%COMP%]   .doc-text[_ngcontent-%COMP%]{background-color:#c1c4e8}.doc-section[_ngcontent-%COMP%]   .doc-text[_ngcontent-%COMP%]   .doc-text-container[_ngcontent-%COMP%]{padding:20px 0}@media (max-width: 992px){.doc-section[_ngcontent-%COMP%]   .doc-header[_ngcontent-%COMP%]{text-align:center!important}}"]});let e=n;return e})();function ee(e,n){if(e&1&&(x(0,"div",6),g(1,"safeHtml")),e&2){let i=s();u("innerHTML",m(1,1,i.service.page==null||i.service.page.head==null?null:i.service.page.head.description2),b)}}var J=(()=>{let n=class n{constructor(r){this.service=r,this.apiUrl=T.apiUrl}};n.\u0275fac=function(a){return new(a||n)(C(P))},n.\u0275cmp=h({type:n,selectors:[["app-doc-banner"]],standalone:!0,features:[M],decls:7,vars:2,consts:[[1,"doc-banner-wrap"],[1,"my_container"],[1,"doc-banner"],["href","https://revista.clad.org/ryd","target","_blank","rel","noopener noreferrer"],["width","100%","alt","revista",3,"src"],[1,"doc-banner-container","doc-banner-text"],[1,"body-1","text-azul-indigo","mb-4","text-center","text-lg-justify",3,"innerHTML"]],template:function(a,t){a&1&&(c(0,"section",0)(1,"div",1)(2,"div",2)(3,"a",3),x(4,"img",4),l()(),c(5,"div",5),f(6,ee,2,3,"div",6),l()()()),a&2&&(o(4),u("src",t.apiUrl+"/"+(t.service.page==null||t.service.page.head==null?null:t.service.page.head.image),O),o(2),_(!(t.service.page==null||t.service.page.head==null)&&t.service.page.head.description2?6:-1))},dependencies:[k],styles:[".doc-banner[_ngcontent-%COMP%]{padding:39px 0}.doc-banner-container[_ngcontent-%COMP%]{padding:23px 0}.doc-banner-wrap[_ngcontent-%COMP%]   .doc-banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:700}"]});let e=n;return e})();var oe=e=>({active:e});function ae(e,n){e&1&&(c(0,"a",11)(1,"div",14)(2,"p",15),p(3),g(4,"translate"),l()()()),e&2&&(o(3),d(m(4,1,"Loading..")))}function re(e,n){if(e&1&&(c(0,"a",16)(1,"div",14),x(2,"img",17),c(3,"p",15),p(4),l()()()),e&2){let i=n.$implicit,r=s(3);u("routerLink","/destacados/"+i.slug),o(2),u("src",r.apiUrl+"/"+i.thumbnail,O),o(2),d(i.title)}}function ce(e,n){if(e&1&&S(0,re,5,3,"a",16,y),e&2){let i=s(2);E(i.data)}}function le(e,n){e&1&&(c(0,"a",11)(1,"div",14)(2,"p",15),p(3),g(4,"translate"),l()()()),e&2&&(o(3),d(m(4,1,"Not Found")))}function pe(e,n){if(e&1&&f(0,le,5,3,"a",11),e&2){let i=s(2);_(i.filters.search!=""?0:-1)}}function de(e,n){if(e&1&&f(0,ce,2,0)(1,pe,1,1),e&2){let i=s();_(i.data.length!=0&&i.filters.search!=""?0:1)}}function se(e,n){if(e&1){let i=U();c(0,"li")(1,"a",18),D("click",function(){let a=j(i).$implicit,t=s();return L(t.setCat(a.id))}),p(2),l()()}if(e&2){let i=n.$implicit,r=s();o(),u("ngClass",R(2,oe,r.filters.category==i.id)),o(),d(i.title)}}var K=(()=>{let n=class n{constructor(r,a,t){this.service=r,this.language=a,this.platformId=t,this.apiUrl=T.apiUrl,this.categories=[],this.searching=!1,this.data=[],this.filters={search:"",category:"",order_by:"created_at",sort_by:"desc",type:"post",limit:10},B(this.platformId)&&this.service.get_categories().subscribe(v=>{this.categories=v.data.data})}setCat(r){this.filters.category==r?(this.filters.category="",this.submitSearch()):(this.filters.category=r,this.submitSearch())}setS(r){let a=r.target;this.filters.search=a.value,this.submitSearch()}submitSearch(){this.searching=!0,this.filters.search==""?(this.data=[],this.searching=!1):this.service.get_posts(this.filters).subscribe(r=>{this.data=r.data.data,this.searching=!1})}};n.\u0275fac=function(a){return new(a||n)(C(P),C(Y),C(z))},n.\u0275cmp=h({type:n,selectors:[["app-doc-explorer"]],standalone:!0,features:[M],decls:19,vars:4,consts:[[1,"doc-explore-section"],[1,"my_container"],[1,"doc-container"],[1,"heading-1","text-violeta","pb-3"],[1,"input-wrap"],[1,"form-group"],["type","text",1,"form-control",3,"input","placeholder"],[3,"click"],["aria-hidden","true",1,"fa","fa-search"],[1,"input-container"],[1,"serch-dropdown","d-flex","flex-column"],[1,"input-container-search-Item"],[1,"explore-tabs"],[1,"list-unstyled","d-flex","align-items-center","justify-content-center","flex-wrap","gap-2"],[1,"d-flex","align-items-center"],[1,"m-0","px-2",2,"font-size","21px","color","rgba(4, 30, 66, 1)"],[1,"input-container-search-Item",3,"routerLink"],[1,"img-fluid",2,"width","60px",3,"src"],[3,"click","ngClass"]],template:function(a,t){a&1&&(c(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),p(4,"Explora publicaciones, archivos, noticias del CLADoc "),l(),c(5,"div",4)(6,"div",5)(7,"input",6),g(8,"translate"),D("input",function(I){return t.setS(I)}),l(),c(9,"button",7),D("click",function(){return t.submitSearch()}),x(10,"i",8),l()()(),c(11,"div",9)(12,"div",10),f(13,ae,5,3,"a",11)(14,de,2,1),l()(),c(15,"div",12)(16,"ul",13),S(17,se,3,4,"li",null,y),l()()()()()),a&2&&(o(7),u("placeholder",m(8,2,"Buscar")),o(6),_(t.searching?13:14),o(4),E(t.categories))},dependencies:[V,$,A,W,q],styles:[".serch-dropdown[_ngcontent-%COMP%]{width:100%;max-width:975px;background-color:#d3d5f6;padding:3px;margin-top:9px;margin-bottom:18px}.input-container-search-Item[_ngcontent-%COMP%]{margin:0;border:1px solid #9496ad;padding:8px 10px}.input-container-search-Item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:21px;color:#041e42}.doc-explore-section[_ngcontent-%COMP%]{background-color:#d3d5f6;text-align:center}.doc-explore-section[_ngcontent-%COMP%]   .doc-container[_ngcontent-%COMP%]{padding:83px 0}.input-wrap[_ngcontent-%COMP%]{position:relative}.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:70px;border-radius:100px;border:2px solid #594EE6;background-color:#d3d5f6;outline:none;font-size:24px;padding:20px}.input-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;width:50px;height:50px;border-radius:50%;background-color:#594ee6;color:#fff;font-size:22px;padding-top:5px;box-sizing:border-box;position:absolute;right:25px;top:50%;transform:translateY(-50%);cursor:pointer;display:flex;align-items:center;justify-content:center}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]{margin-top:50px}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex!important}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px 30px;gap:10px;border-radius:40px;border:2px 0px 0px 0px;opacity:0px;border:1px solid #594EE6;font-size:16px;color:#594ee6;display:inline-block;font-family:Figtree}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:is(.active){color:#fff;background-color:#594ee6}@media (max-width: 992px){.doc-explore-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:35px}.doc-explore-section[_ngcontent-%COMP%]   .doc-container[_ngcontent-%COMP%]{padding:83px 10px}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]{margin-top:50px}}@media (max-width: 575px){.doc-explore-section[_ngcontent-%COMP%]   .doc-container[_ngcontent-%COMP%]{padding:20px 10px}.doc-explore-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;text-align:center}.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:50px;font-size:20px;border-width:1px}.input-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;width:40px;height:40px;border-radius:50%;background-color:#594ee6;color:#fff;font-size:18px;padding-top:2px;box-sizing:border-box;position:absolute;right:15px;top:50%;transform:translateY(-50%);cursor:pointer;display:flex;align-items:center;justify-content:center}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]{margin-top:30px}.doc-explore-section[_ngcontent-%COMP%]   .explore-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:4px 15px;border-radius:20px;font-size:14px}}"]});let e=n;return e})();var ge=e=>({active:e});function me(e,n){if(e&1&&(c(0,"option"),p(1),l()),e&2){let i=n.$implicit;o(),d(i)}}function ue(e,n){if(e&1&&(c(0,"option"),p(1),l()),e&2){let i=n.$implicit;o(),d(i)}}function xe(e,n){if(e&1&&(c(0,"option"),p(1),l()),e&2){let i=n.$implicit;o(),d(i)}}function _e(e,n){e&1&&(c(0,"div",14)(1,"div",17)(2,"div",18)(3,"div",19)(4,"h2",20),p(5),g(6,"translate"),l()()()()()),e&2&&(o(5),d(m(6,1,"Loading..")))}function fe(e,n){if(e&1&&x(0,"img",23),e&2){let i=s().$implicit,r=s(3);u("src",r.apiUrl+"/"+i.thumbnail,O)("alt",i.thumbnail_prev)}}function Ce(e,n){if(e&1&&(c(0,"div",14)(1,"div",17)(2,"div",21)(3,"div",22),f(4,fe,1,2,"img",23),l()(),c(5,"div",24)(6,"div",25)(7,"h2",20),p(8),l(),c(9,"h6",26),p(10),l(),c(11,"div",17)(12,"div",27)(13,"p",28)(14,"strong",26),p(15),g(16,"translate"),l(),p(17),l()(),c(18,"div",27)(19,"p",28)(20,"strong",26),p(21),g(22,"translate"),l(),p(23),c(24,"strong"),p(25),g(26,"translate"),l(),p(27),l()()(),c(28,"p",29),p(29),l(),c(30,"div",17)(31,"div",30)(32,"div",31)(33,"a",32),p(34),g(35,"translate"),l(),c(36,"a",33),p(37),g(38,"translate"),l()()(),c(39,"div",30)(40,"div",34)(41,"div",35),x(42,"i",36),c(43,"span",37),p(44),l()(),c(45,"div",35),x(46,"i",38),c(47,"span",37),p(48),l()()()()()()()()()),e&2){let i,r,a=n.$implicit,t=s(3);o(4),_(a.thumbnail?4:-1),o(4),d(a.title),o(2),d(a.date),o(5),w("",m(16,18,"Tema")," :"),o(2),w(" ",a.topic," "),o(4),w("",m(22,20,"Pais"),":"),o(2),w(" ",a.country," | "),o(2),w("",m(26,22,"Idioma"),":"),o(2),N(" ",t.language.lang=="en"?"English":""," ",t.language.lang=="es"?"Spanish":""," ",t.language.lang=="pt"?"Portugal":""," "),o(2),d(a.short_description),o(4),u("href",t.apiUrl+"/"+a.pdf,O),o(),d(m(35,24,"Ver online")),o(2),u("href",t.apiUrl+"/"+a.pdf,O),o(),d(m(38,26,"Descargar archivo")),o(7),d((i=a.views)!==null&&i!==void 0?i:0),o(4),d((r=a.like)!==null&&r!==void 0?r:0)}}function ve(e,n){if(e&1&&S(0,Ce,49,28,"div",14,y),e&2){let i=s(2);E(i.posts)}}function he(e,n){if(e&1&&f(0,ve,2,0),e&2){let i=s();_(i.posts?0:-1)}}function Me(e,n){if(e&1){let i=U();c(0,"button",39),D("click",function(){let a=j(i).$implicit,t=s();return L(t.Page(a.title))}),p(1),l()}if(e&2){let i=n.$implicit,r=s();u("ngClass",R(2,ge,r.options.page==i.title)),o(),d(i.title)}}var Q=(()=>{let n=class n{constructor(r,a,t){this.service=r,this.language=a,this.platformId=t,this.paginations=[],this.apiUrl=T.apiUrl,this.posts=[],this.loading=!1,this.country=[],this.years=[],this.topics=[],this.options={limit:2,search:"",year:"",topic:"",country:"",page:1},B(this.platformId)&&(this.loadPosts(),this.service.get_document_filters().subscribe(v=>{this.country=v.data.country,this.topics=v.data.topics,this.years=v.data.years}))}loadPosts(){this.loading=!0,this.paginations=[],this.service.get_document(this.options).subscribe(r=>{this.posts=r.data.data,this.loading=!1;let a=Math.ceil(r.data.total/this.options.limit);for(let t=1;t<a;t++)this.paginations.push({title:t})})}Page(r){this.options.page=r,this.loadPosts()}setSearch(r){let a=r.target;this.options.search=a.value,this.loadPosts()}setYear(r){let a=r.target;this.options.year=a.value,this.loadPosts()}setCountry(r){let a=r.target;this.options.country=a.value,this.loadPosts()}setTopic(r){let a=r.target;this.options.topic=a.value,this.loadPosts()}};n.\u0275fac=function(a){return new(a||n)(C(P),C(Y),C(z))},n.\u0275cmp=h({type:n,selectors:[["app-doc-declare"]],standalone:!0,features:[M],decls:41,vars:16,consts:[[1,"py-5","text-white","text-center","bg-azul-indigo","declaration"],[1,"my_container"],[1,"declaration-container"],[1,"heading-1","mb-5","text-violeta-claro"],[1,"input-wrap"],[1,"form-group"],["type","text",1,"form-control",3,"input","placeholder"],[3,"click"],["aria-hidden","true",1,"fa","fa-search"],[1,"mt-5","declaration-tabs"],[1,"d-flex","list-unstyled","d-flex","align-items-center","justify-content-center","flex-wrap","gap-2"],[1,"select-dropdown",3,"change"],["value",""],[1,"py-5","card-container"],[1,"card-banner","mb-5"],[1,"paginations","mt-5"],[1,"btn","btn-primary",3,"ngClass"],[1,"row"],[1,"col-12"],[1,"card-banner-text","text-center"],[1,"heading-2","text-violeta"],[1,"col-12","col-lg-3"],[1,"card-banner-img"],["width","100%",3,"src","alt"],[1,"col-12","col-lg-9"],[1,"card-banner-text","text-start"],[1,"heading-3"],[1,"col-sm-6"],[1,"body-2"],[1,"body-1","text-azul-indigo","text-justify"],[1,"col-12","col-xl-6"],[1,""],["target","_blank",1,"mx-2","button-1",3,"href"],["download","archivo.pdf",1,"mx-2","button-1",3,"href"],[1,"d-flex","justify-content-end"],[1,"heading-2","mx-3","text-white"],["aria-hidden","true",1,"fa","fa-eye","mx-1"],[1,"heading-3","text-violeta","fw-normal"],["aria-hidden","true",1,"fa","fa-heart","mx-1"],[1,"btn","btn-primary",3,"click","ngClass"]],template:function(a,t){a&1&&(c(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),p(4),g(5,"translate"),l(),c(6,"div",4)(7,"div",5)(8,"input",6),g(9,"translate"),D("input",function(I){return t.setSearch(I)}),l(),c(10,"button",7),D("click",function(){return t.loadPosts()}),x(11,"i",8),l()()(),c(12,"div",9)(13,"ul",10)(14,"li")(15,"select",11),D("change",function(I){return t.setYear(I)}),c(16,"option",12),p(17),g(18,"translate"),l(),S(19,me,2,1,"option",null,y),l()(),c(21,"li")(22,"select",11),D("change",function(I){return t.setTopic(I)}),c(23,"option",12),p(24),g(25,"translate"),l(),S(26,ue,2,1,"option",null,y),l()(),c(28,"li")(29,"select",11),D("change",function(I){return t.setCountry(I)}),c(30,"option",12),p(31),g(32,"translate"),l(),S(33,xe,2,1,"option",null,y),l()()()()(),c(35,"div",13),f(36,_e,7,3,"div",14)(37,he,1,1),c(38,"div",15),S(39,Me,2,4,"button",16,y),l()()()()),a&2&&(o(4),d(m(5,6,"Declaraciones y Consensos")),o(4),u("placeholder",m(9,8,"T\xEDtulo")),o(9),w("Select ",m(18,10,"A\xF1o")," "),o(2),E(t.years),o(5),w("Select ",m(25,12,"Tema")," "),o(2),E(t.topics),o(5),w("Select ",m(32,14,"Pa\xEDs")," "),o(2),E(t.country),o(3),_(t.loading?36:37),o(3),E(t.paginations))},dependencies:[A,W,V,$],styles:[".paginations[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap}.paginations[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px 6px;background-color:#c1c4e8;border:#C1C4E8}.paginations[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#594ee6;border:#594ee6;color:#fff}.serch-dropdown[_ngcontent-%COMP%]{width:100%;max-width:975px;background-color:#fff;padding:3px;margin-top:9px;margin-bottom:18px}.input-container-search-Item[_ngcontent-%COMP%]{margin:0;border:1px solid lightgray;padding:8px 10px}.input-container-search-Item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:21px;color:#041e42}.select-dropdown[_ngcontent-%COMP%]{background:#594ee6;border:none;text-align:center;color:#dcdef0;padding:6px 53px;border-radius:22px;max-width:346px}.select-dropdown[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{background:#fff;color:#000;text-align:left}.input-wrap[_ngcontent-%COMP%]{position:relative}.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:70px;border-radius:100px;border:2px solid #594EE6;background-color:#d3d5f6;outline:none;font-size:24px;padding:20px}.input-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{all:unset;width:50px;height:50px;border-radius:50%;background-color:#594ee6;color:#fff;font-size:22px;padding-top:5px;box-sizing:border-box;position:absolute;right:25px;top:50%;transform:translateY(-50%);cursor:pointer;display:flex;align-items:center;justify-content:center}.declaration[_ngcontent-%COMP%]   .declaration-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#dcdef0;font-weight:300;border-color:#594ee6!important;font-size:16px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]{color:#041e42;background-color:#c1c4e8;border-radius:37px;padding:25px;border:3px solid #594EE6;margin:auto}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]{display:flex!important}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:45px;color:#fff;margin-right:15px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;display:inline-block;color:#594ee6}.button-1[_ngcontent-%COMP%]{font-size:18px;padding:2px 26px}@media (max-width: 992px){.declaration-container[_ngcontent-%COMP%]{padding:0}.declaration[_ngcontent-%COMP%]   .declaration-tabs[_ngcontent-%COMP%]{margin:50px 0}.card-container[_ngcontent-%COMP%]{padding:20px 0}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]{color:#041e42;background-color:#c1c4e8;border-radius:37px;border:2px;padding:25px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]{margin-top:30px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .card-banner-btns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;padding:4px 20px;color:#fff;border:1px solid #594EE6;background-color:#594ee6;border-radius:50px;font-size:16px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:22px;color:#fff;margin-right:8px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;display:inline-block}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-img[_ngcontent-%COMP%]{max-width:300px;margin:auto}}@media (max-width: 575px){.declaration[_ngcontent-%COMP%]{background-color:#041e42;padding:30px 10px}.declaration[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;text-align:center}.declaration[_ngcontent-%COMP%]   .declaration-tabs[_ngcontent-%COMP%]{margin:30px 0}.declaration[_ngcontent-%COMP%]   .declaration-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#594ee6;padding:4px 20px;border-radius:40px;font-size:14px;color:#fff;font-family:Figtree;display:inline-block}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]{border-radius:15px;border:1px;padding:15px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-family:Red Hat Display;text-align:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:16px;text-align:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;text-align:center}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .card-banner-btns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;padding:4px 20px;margin-bottom:5px;color:#fff;border:1px solid #594EE6;background-color:#594ee6;border-radius:50px;font-size:14px;font-family:Red Hat Display}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.declaration[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .card-banner-text[_ngcontent-%COMP%]   .banner-counter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;display:inline-block}}"]});let e=n;return e})();function Pe(e,n){if(e&1&&(x(0,"p",5),g(1,"safeHtml")),e&2){let i=s();u("innerHTML",m(1,1,i.service.page==null||i.service.page.doc==null?null:i.service.page.doc.description),b)}}function be(e,n){if(e&1&&(x(0,"p",5),g(1,"safeHtml")),e&2){let i=s();u("innerHTML",m(1,1,i.service.page==null||i.service.page.doc==null?null:i.service.page.doc.description2),b)}}function Oe(e,n){if(e&1&&(x(0,"div",5),g(1,"safeHtml")),e&2){let i=s().$implicit;u("innerHTML",m(1,1,i.description),b)}}function ye(e,n){if(e&1&&(c(0,"div",8)(1,"h4",9),p(2),l(),f(3,Oe,2,3,"div",5),l()),e&2){let i=n.$implicit;o(2),d(i.title),o(),_(i.description?3:-1)}}function Se(e,n){if(e&1&&S(0,ye,4,2,"div",8,y),e&2){let i=s();E(i.service.page==null||i.service.page.doc==null?null:i.service.page.doc.posts)}}var X=(()=>{let n=class n{constructor(r){this.service=r,this.apiUrl=T.apiUrl}};n.\u0275fac=function(a){return new(a||n)(C(P))},n.\u0275cmp=h({type:n,selectors:[["app-doc-repository"]],standalone:!0,features:[M],decls:12,vars:5,consts:[[1,"clad-section"],[1,"my_container"],[1,"clad-section-container"],[1,"pt-4","clad-section-text"],[1,"heading-1","text-violeta","text-center","text-lg-start"],[1,"body-1","text-azul-indigo","text-center","text-lg-justify",3,"innerHTML"],[1,"text-bar"],[1,"heading-1"],[1,"clad-card"],[1,"heading-2","text-azul-indigo","text-center","text-lg-start"]],template:function(a,t){a&1&&(c(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),p(5),l(),f(6,Pe,2,3,"p",5),c(7,"div",6)(8,"h4",7),p(9),l()(),f(10,be,2,3,"p",5)(11,Se,2,0),l()()()()),a&2&&(o(5),d(t.service.page==null||t.service.page.doc==null?null:t.service.page.doc.title),o(),_(!(t.service.page==null||t.service.page.doc==null)&&t.service.page.doc.description?6:-1),o(3),d(t.service.page==null||t.service.page.doc==null?null:t.service.page.doc.title2),o(),_(!(t.service.page==null||t.service.page.doc==null)&&t.service.page.doc.description2?10:-1),o(),_(!(t.service.page==null||t.service.page.doc==null)&&t.service.page.doc.posts?11:-1))},dependencies:[k],styles:[".clad-section[_ngcontent-%COMP%]   .clad-section-text[_ngcontent-%COMP%]   .text-bar[_ngcontent-%COMP%]{color:#fff;background-color:#041e42;border-radius:15px;padding:16px 20px;margin:24px 0}.clad-section[_ngcontent-%COMP%]   .clad-section-text[_ngcontent-%COMP%]   .clad-card[_ngcontent-%COMP%]{background-color:#d9d9d9;padding:28px 30px;border-radius:10px;margin-bottom:20px}.clad-section[_ngcontent-%COMP%]   .clad-section-text[_ngcontent-%COMP%]   .clad-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding-bottom:10px}"]});let e=n;return e})();function Ee(e,n){if(e&1&&(x(0,"div",4),g(1,"safeHtml")),e&2){let i=s();u("innerHTML",m(1,1,i.service.page==null||i.service.page.documents==null?null:i.service.page.documents.description1),b)}}function De(e,n){if(e&1&&(x(0,"div",4),g(1,"safeHtml")),e&2){let i=s();u("innerHTML",m(1,1,i.service.page==null||i.service.page.documents==null?null:i.service.page.documents.description2),b)}}var st=(()=>{let n=class n{constructor(r,a){this.service=r,this.platformId=a,this.apiUrl=T.apiUrl,B(this.platformId)&&r.setPage("publication")}};n.\u0275fac=function(a){return new(a||n)(C(P),C(z))},n.\u0275cmp=h({type:n,selectors:[["app-publications"]],standalone:!0,features:[M],decls:21,vars:6,consts:[["ngSkipHydration",""],[1,"py-5","bg-violeta","about-section",2,"background-color","#C1C4E8"],[1,"my_container","text-center","text-lg-start"],[1,"heading-1","text-violeta"],[1,"body-1","text-azul-indigo","text-center","text-lg-justify",3,"innerHTML"],[1,"text-center","text-lg-start"],[1,"button-1",3,"href"],[1,"py-5","bg-azul-aguamarina-claro","doc-official"],[1,"heading-1"]],template:function(a,t){a&1&&(x(0,"app-doc-header")(1,"app-doc-banner")(2,"app-doc-explorer")(3,"app-doc-declare",0)(4,"app-doc-repository",0),c(5,"section",1)(6,"div",2)(7,"h2",3),p(8),l(),f(9,Ee,2,3,"div",4),c(10,"div",5)(11,"a",6),p(12,"Ver m\xE1s"),l()()()(),c(13,"section",7)(14,"div",2)(15,"h2",8),p(16),l(),f(17,De,2,3,"div",4),c(18,"div",5)(19,"a",6),p(20,"Ver m\xE1s"),l()()()()),a&2&&(o(8),d(t.service.page==null||t.service.page.documents==null?null:t.service.page.documents.title1),o(),_(!(t.service.page==null||t.service.page.documents==null)&&t.service.page.documents.description1?9:-1),o(2),u("href",t.service.page==null||t.service.page.documents==null?null:t.service.page.documents.link1,O),o(5),d(t.service.page==null||t.service.page.documents==null?null:t.service.page.documents.title2),o(),_(!(t.service.page==null||t.service.page.documents==null)&&t.service.page.documents.description2?17:-1),o(2),u("href",t.service.page==null||t.service.page.documents==null?null:t.service.page.documents.link2,O))},dependencies:[k,G,J,K,Q,X],styles:["body[_ngcontent-%COMP%]{background-color:#fff}"]});let e=n;return e})();export{st as PublicationsComponent};
