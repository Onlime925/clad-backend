import{a as O}from"./chunk-EVETBQJ6.js";import{a as V}from"./chunk-7LM6AL6S.js";import{a as R}from"./chunk-FAODHUA2.js";import"./chunk-NF7X6UKL.js";import{d as A,e as M,f as $,m as P}from"./chunk-AFWRT4PF.js";import"./chunk-TT6UXURR.js";import{e as N}from"./chunk-7H5UCHC4.js";import{c as j}from"./chunk-V37MTAIH.js";import{F as _,G as D,Ja as L,Oa as F,S as n,T as b,Y as l,aa as I,ba as C,ca as w,da as i,ea as t,fa as d,ia as k,ja as h,ka as y,pa as a,ra as o,wa as T,ya as E,z as S}from"./chunk-J2G6KBBC.js";import{d as f}from"./chunk-4CLCTAJ7.js";var x=v=>({"d-none":v});function K(v,c){if(v&1){let g=k();i(0,"div",32)(1,"div",18)(2,"div",19)(3,"label",20),a(4),t(),d(5,"input",44),t()(),i(6,"div",18)(7,"div",19)(8,"label",20),a(9),t(),d(10,"app-my-editor",45),t()(),i(11,"button",46),h("click",function(){let m=_(g).$index,e=y();return D(e.removeItem("doc.posts",m))}),a(12,"X"),t()()}if(v&2){let g=c.$implicit,r=c.$index,m=y();n(4),o("Title (",m.lang.lang,")"),n(),l("name","doc[posts]["+r+"][title]")("value",g.title),n(4),o("Description (",m.lang.lang,")"),n(),l("name","doc[posts]["+r+"][description]")("value",g.description)}}var Y=(()=>{let c=class c{constructor(r,m,e){this.notification=r,this.lang=m,this.service=e,this.formLoader=!1,this.data={}}ngOnInit(){this.getRecord()}getRecord(){this.formLoader=!0,this.service.find("publication").subscribe({next:r=>{this.data=r.data.publication?JSON.parse(r.data.publication):{},this.formLoader=!1},error:r=>{this.formLoader=!1}})}onSubmit(r){return f(this,null,function*(){this.formLoader=!0;let m=r.target,e=new FormData(m),s={};e.forEach((u,p)=>{s[p]=u}),e.append("name","publication"),this.service.update(e).subscribe({next:u=>{this.getRecord(),this.notification.success(u.message)},error:u=>{let p=u.error;p?p.errors?this.notification.error(Object.values(p.errors)[0]):this.notification.error(p.message):this.notification.error("Something Went Wrong")}})})}add_new(r,m){return f(this,null,function*(){let e=r.split("."),s=this.data;for(let p=0;p<e.length-1;p++)s=s[e[p]];let u=e[e.length-1];Array.isArray(s[u])||(s[u]=[]),s[u].push(m)})}removeItem(r,m){return f(this,null,function*(){let e=r.split("."),s=this.data;for(let p=0;p<e.length-1;p++)s=s[e[p]];let u=e[e.length-1];Array.isArray(s[u])?s[u].splice(m,1):console.error(`Target ${u} is not an array.`)})}};c.\u0275fac=function(m){return new(m||c)(b(j),b(N),b(O))},c.\u0275cmp=S({type:c,selectors:[["app-admin-settings-publication"]],standalone:!0,features:[T],decls:123,vars:37,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[3,"ngSubmit"],[1,"text-center",3,"ngClass"],[1,"row",3,"ngClass"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[1,"row","pt-3"],[1,"col-md-12"],[1,"form-group"],[1,"form-label"],["name","head[title]",1,"form-control",3,"value"],["name","head[description]",3,"Defaultvalue"],[3,"image","name"],["name","head[description2]",3,"Defaultvalue"],["name","doc[title]",1,"form-control",3,"value"],["name","doc[description]",3,"Defaultvalue"],["name","doc[title2]",1,"form-control",3,"value"],["name","doc[description2]",3,"Defaultvalue"],[1,"row","pb-2"],[1,"col-12","text-center"],["type","button",1,"btn","btn-success","text-white",3,"click"],[1,"row","mb-4","px-3","py-3","border","box-seprator"],[1,"col-md-6"],["name","documents[title1]",1,"form-control",3,"value"],["name","documents[link1]",1,"form-control",3,"value"],["name","documents[description1]",3,"Defaultvalue"],["name","documents[detail1]",3,"Defaultvalue"],["name","documents[title2]",1,"form-control",3,"value"],["name","documents[link2]",1,"form-control",3,"value"],["name","documents[description2]",3,"Defaultvalue"],[1,"row","pb-5"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white"],[1,"form-control",3,"name","value"],[3,"name","value"],["type","button",1,"delete_btn","btn","btn-danger",3,"click"]],template:function(m,e){m&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),a(3,"Investigaci\xF3n y documentos"),t()(),i(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),a(9,"Admin"),t()(),i(10,"li",8),a(11,"Investigaci\xF3n y documentos"),t()()()()(),i(12,"form",9),h("ngSubmit",function(u){return e.onSubmit(u)}),i(13,"p",10),a(14,"Loading"),t(),i(15,"div",11)(16,"div",12)(17,"div",13)(18,"div",14)(19,"h4",15),a(20,"Main Heading"),t()(),i(21,"div",16)(22,"div",17)(23,"div",18)(24,"div",19)(25,"label",20),a(26),t(),d(27,"input",21),t()(),i(28,"div",18)(29,"div",19)(30,"label",20),a(31),t(),d(32,"app-my-editor",22),t()(),i(33,"div",18)(34,"div",19)(35,"label",20),a(36),t(),d(37,"app-img-uploader",23),t()(),i(38,"div",18)(39,"div",19)(40,"label",20),a(41),t(),d(42,"app-my-editor",24),t()()()()()(),i(43,"div",12)(44,"div",13)(45,"div",14)(46,"h4",15),a(47,"CLADoc: Repositorio de Publicaciones"),t()(),i(48,"div",16)(49,"div",17)(50,"div",18)(51,"div",19)(52,"label",20),a(53),t(),d(54,"input",25),t()(),i(55,"div",18)(56,"div",19)(57,"label",20),a(58),t(),d(59,"app-my-editor",26),t()(),i(60,"div",18)(61,"div",19)(62,"label",20),a(63),t(),d(64,"input",27),t()(),i(65,"div",18)(66,"div",19)(67,"label",20),a(68),t(),d(69,"app-my-editor",28),t()()(),i(70,"div",29)(71,"div",30)(72,"button",31),h("click",function(){return e.add_new("doc.posts",{title:"",description:""})}),a(73,"+"),t()()(),C(74,K,13,6,"div",32,I),t()()(),i(76,"div",12)(77,"div",13)(78,"div",14)(79,"h4",15),a(80,"Detalles de documentos"),t()(),i(81,"div",16)(82,"div",17)(83,"div",33)(84,"div",19)(85,"label",20),a(86),t(),d(87,"input",34),t()(),i(88,"div",33)(89,"div",19)(90,"label",20),a(91),t(),d(92,"input",35),t()(),i(93,"div",18)(94,"div",19)(95,"label",20),a(96),t(),d(97,"app-my-editor",36),t()(),i(98,"div",18)(99,"div",19)(100,"label",20),a(101),t(),d(102,"app-my-editor",37),t()()(),i(103,"div",17)(104,"div",33)(105,"div",19)(106,"label",20),a(107),t(),d(108,"input",38),t()(),i(109,"div",33)(110,"div",19)(111,"label",20),a(112),t(),d(113,"input",39),t()(),i(114,"div",18)(115,"div",19)(116,"label",20),a(117),t(),d(118,"app-my-editor",40),t()()()()()()(),i(119,"div",41)(120,"div",42)(121,"button",43),a(122,"Submit"),t()()()()),m&2&&(n(13),l("ngClass",E(33,x,!e.formLoader)),n(2),l("ngClass",E(35,x,e.formLoader)),n(11),o("Title (",e.lang.lang,")"),n(),l("value",e.data==null||e.data.head==null?null:e.data.head.title),n(4),o("Description (",e.lang.lang,")"),n(),l("Defaultvalue",e.data==null||e.data.head==null?null:e.data.head.description),n(4),o("Image (",e.lang.lang,")"),n(),l("image",e.data==null||e.data.head==null?null:e.data.head.image)("name","head[image]"),n(4),o("Description (",e.lang.lang,")"),n(),l("Defaultvalue",e.data==null||e.data.head==null?null:e.data.head.description2),n(11),o("Title (",e.lang.lang,")"),n(),l("value",e.data==null||e.data.doc==null?null:e.data.doc.title),n(4),o("Description (",e.lang.lang,")"),n(),l("Defaultvalue",e.data==null||e.data.doc==null?null:e.data.doc.description),n(4),o("Title (",e.lang.lang,")"),n(),l("value",e.data==null||e.data.doc==null?null:e.data.doc.title2),n(4),o("Description (",e.lang.lang,")"),n(),l("Defaultvalue",e.data==null||e.data.doc==null?null:e.data.doc.description2),n(5),w(e.data==null||e.data.doc==null?null:e.data.doc.posts),n(12),o("Title (",e.lang.lang,")"),n(),l("value",e.data==null||e.data.documents==null?null:e.data.documents.title1),n(4),o("Link (",e.lang.lang,")"),n(),l("value",e.data==null||e.data.documents==null?null:e.data.documents.link1),n(4),o("Description (",e.lang.lang,")"),n(),l("Defaultvalue",e.data==null||e.data.documents==null?null:e.data.documents.description1),n(4),o("Detail (",e.lang.lang,")"),n(),l("Defaultvalue",e.data==null||e.data.documents==null?null:e.data.documents.detail1),n(5),o("Title (",e.lang.lang,")"),n(),l("value",e.data==null||e.data.documents==null?null:e.data.documents.title2),n(4),o("Link (",e.lang.lang,")"),n(),l("value",e.data==null||e.data.documents==null?null:e.data.documents.link2),n(4),o("Description (",e.lang.lang,")"),n(),l("Defaultvalue",e.data==null||e.data.documents==null?null:e.data.documents.description2))},dependencies:[F,L,P,$,A,M,R,V],encapsulation:2});let v=c;return v})();export{Y as SettingPublicationComponent};
