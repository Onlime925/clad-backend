import{a as N}from"./chunk-MK54LRIP.js";import"./chunk-PU3EZWRI.js";import"./chunk-2TWX2W2S.js";import{d as A,e as D,f as R,m as j}from"./chunk-WZFY3SQ3.js";import"./chunk-EEEZARLR.js";import{e as L}from"./chunk-6RDEU4NF.js";import{g as _,w}from"./chunk-ZRN54QQN.js";import{Ka as m,La as g,W as x,Wa as S,Ya as h,_a as y,cb as d,db as o,eb as v,ib as E,jb as C,ob as s,pb as b,qb as u,ub as I}from"./chunk-UYLSR7O4.js";import{d as f}from"./chunk-4CLCTAJ7.js";function T(c,p){c&1&&(d(0,"p",10),s(1,"Loading"),o())}function F(c,p){if(c&1&&(d(0,"div",11)(1,"div",15)(2,"div",16)(3,"div",17)(4,"h4",18),s(5,"Main Heading"),o()(),d(6,"div",19)(7,"div",20)(8,"div",21)(9,"div",22)(10,"label",23),s(11),o(),v(12,"input",24),o()(),d(13,"div",21)(14,"div",22)(15,"label",23),s(16),o(),d(17,"textarea",25),s(18),o()()(),d(19,"div",21)(20,"div",22)(21,"label",23),s(22),o(),v(23,"input",26),o()(),d(24,"div",21)(25,"div",22)(26,"label",23),s(27),o(),d(28,"textarea",27),s(29),o()()()()()()()()),c&2){let n=C();m(11),u("Title (",n.lang.lang,")"),m(),h("value",n.data==null||n.data.head==null?null:n.data.head.title),m(4),u("Description (",n.lang.lang,")"),m(2),b(n.data==null||n.data.head==null?null:n.data.head.description),m(4),u("Estudios de caso (",n.lang.lang,")"),m(),h("value",n.data==null||n.data.head==null?null:n.data.head.title2),m(4),u("Description (",n.lang.lang,")"),m(2),b(n.data==null||n.data.head==null?null:n.data.head.description2)}}var U=(()=>{let p=class p{constructor(a,r,e){this.notification=a,this.lang=r,this.service=e,this.formLoader=!1,this.data={},this.init={menubar:!0,plugins:"lists link image table code help wordcount",setup:t=>{t.on("change",()=>{})}}}ngOnInit(){this.getRecord()}getRecord(){this.formLoader=!0,this.service.find("repository").subscribe({next:a=>{this.data=a.data.repository?JSON.parse(a.data.repository):{},this.formLoader=!1},error:a=>{this.formLoader=!1}})}onSubmit(a){return f(this,null,function*(){let r=a.target,e=new FormData(r),t={};e.forEach((i,l)=>{t[l]=i}),e.append("name","repository"),this.service.update(e).subscribe({next:i=>{this.getRecord(),this.notification.success(i.message)},error:i=>{let l=i.error;l?l.errors?this.notification.error(Object.values(l.errors)[0]):this.notification.error(l.message):this.notification.error("Something Went Wrong")}})})}add_new(a,r){return f(this,null,function*(){let e=a.split("."),t=this.data;for(let l=0;l<e.length-1;l++)t=t[e[l]];let i=e[e.length-1];Array.isArray(t[i])||(t[i]=[]),t[i].push(r)})}removeItem(a,r){return f(this,null,function*(){let e=a.split("."),t=this.data;for(let l=0;l<e.length-1;l++)t=t[e[l]];let i=e[e.length-1];Array.isArray(t[i])?t[i].splice(r,1):console.error(`Target ${i} is not an array.`)})}handleEvent(a,r){let e=a.editor,t=e.getElement();t.setAttribute("name",r);let i=e.getContent();t.value=i}};p.\u0275fac=function(r){return new(r||p)(g(w),g(L),g(N))},p.\u0275cmp=x({type:p,selectors:[["app-admin-settings-repository"]],standalone:!0,features:[I],decls:19,vars:1,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[3,"ngSubmit"],[1,"text-center"],[1,"row"],[1,"row","pb-5"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[1,"row","pt-3"],[1,"col-md-12"],[1,"form-group"],[1,"form-label"],["name","head[title]",1,"form-control",3,"value"],["name","head[description]",1,"form-control"],["name","head[title2]",1,"form-control",3,"value"],["name","head[description2]",1,"form-control"]],template:function(r,e){r&1&&(d(0,"div",0)(1,"div",1)(2,"h4",2),s(3,"CLADoc: Repositorio de Publicaciones "),o()(),d(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),s(9,"Admin"),o()(),d(10,"li",8),s(11,"CLADoc: Repositorio de Publicaciones "),o()()()()(),d(12,"form",9),E("ngSubmit",function(i){return e.onSubmit(i)}),S(13,T,2,0,"p",10)(14,F,30,8,"div",11),d(15,"div",12)(16,"div",13)(17,"button",14),s(18,"Submit"),o()()()()),r&2&&(m(13),y(e.formLoader?13:14))},dependencies:[_,j,R,A,D],encapsulation:2});let c=p;return c})();export{U as SettingRepositoryComponent};
