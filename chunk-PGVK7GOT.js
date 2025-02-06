import{a as W}from"./chunk-ADNKO6P7.js";import"./chunk-45XQNQLX.js";import{a as P}from"./chunk-MJECYTMO.js";import"./chunk-UTHYR4ZI.js";import{a as M,b as s,c as N,d as j,f as w,g as H,h as V,l as A,m as G,n as q}from"./chunk-CAQNE6RI.js";import{a as O}from"./chunk-6CTX75GI.js";import"./chunk-E2K66LD7.js";import{e as T}from"./chunk-FLL3NRM6.js";import{c as I,e as F,h as D,x as L}from"./chunk-GLZSOAJQ.js";import{Ka as i,La as g,W as b,Wa as f,Ya as m,cb as n,db as t,eb as h,ib as C,jb as u,ob as r,qb as l,ub as E,wb as y}from"./chunk-B5DXUUC7.js";import{d as x}from"./chunk-4CLCTAJ7.js";var k=o=>({"d-none":o});function B(o,d){if(o&1&&(n(0,"div",31),r(1),t()),o&2){let a=u();i(),l(" ",a.myFormService.getErrorMessage(a.form.controls.title)," ")}}function R(o,d){if(o&1&&(n(0,"div",31),r(1),t()),o&2){let a=u();i(),l(" ",a.myFormService.getErrorMessage(a.form.controls.pdf)," ")}}function U(o,d){if(o&1&&(n(0,"div",31),r(1),t()),o&2){let a=u();i(),l(" ",a.myFormService.getErrorMessage(a.form.controls.country)," ")}}function z(o,d){if(o&1&&(n(0,"div",31),r(1),t()),o&2){let a=u();i(),l(" ",a.myFormService.getErrorMessage(a.form.controls.topic)," ")}}function J(o,d){if(o&1&&(n(0,"div",31),r(1),t()),o&2){let a=u();i(),l(" ",a.myFormService.getErrorMessage(a.form.controls.thumbnail)," ")}}function K(o,d){if(o&1&&(n(0,"div",31),r(1),t()),o&2){let a=u();i(),l(" ",a.myFormService.getErrorMessage(a.form.controls.created_at)," ")}}function Q(o,d){if(o&1&&(n(0,"div",31),r(1),t()),o&2){let a=u();i(),l(" ",a.myFormService.getErrorMessage(a.form.controls.short_description)," ")}}var me=(()=>{let d=class d{constructor(v,c,e,p,_){this.fb=v,this.notification=c,this.myFormService=e,this.service=p,this.lang=_,this.formLoader=!0,this.form=this.fb.group({title:["",[s.required,s.maxLength(500)]],pdf:["",[s.maxLength(100)]],country:["",[s.maxLength(100)]],topic:["",[s.maxLength(100)]],short_description:["",[s.maxLength(500)]],thumbnail:["",s.required],created_at:["",s.required]})}ngOnInit(){this.formLoader=!1}onSubmit(){return x(this,null,function*(){if(this.form.valid){let v=this.form.value;v.type="document",this.formLoader=!0,this.service.update(v).subscribe({next:c=>{this.formLoader=!1,this.notification.success(c.message),this.form.reset(),this.formLoader=!1},error:c=>{let e=c.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})}else this.form.markAllAsTouched(),this.formLoader=!1,this.notification.error("Validation Failed")})}};d.\u0275fac=function(c){return new(c||d)(g(A),g(L),g(W),g(O),g(T))},d.\u0275cmp=b({type:d,selectors:[["app-document-create"]],standalone:!0,features:[E],decls:68,vars:24,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"text-center",3,"ngClass"],[1,"row","pt-3",3,"ngClass"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["formControlName","title","placeholder","Title",1,"form-control"],["class","text-danger",4,"ngIf"],[3,"imgHanle","image"],["formControlName","country","placeholder","Country",1,"form-control"],["formControlName","topic","placeholder","Topic",1,"form-control"],["type","date","formControlName","created_at","placeholder","Created at",1,"form-control"],[1,"col-md-12"],["formControlName","short_description","placeholder","Short Description",1,"form-control"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white",3,"disabled"],[1,"text-danger"]],template:function(c,e){if(c&1&&(n(0,"div",0)(1,"div",1)(2,"h4",2),r(3,"Create Document"),t()(),n(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),r(9,"Home"),t()(),n(10,"li",8),r(11,"Documents"),t()()()()(),n(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),r(17,"Create Document Form"),t()(),n(18,"div",14)(19,"form",15),C("ngSubmit",function(){return e.onSubmit()}),n(20,"p",16),r(21,"Loader"),t(),n(22,"div",17)(23,"div",18)(24,"div",19)(25,"label",20),r(26),t(),h(27,"input",21),f(28,B,2,1,"div",22),t()(),n(29,"div",18)(30,"div",19)(31,"label",20),r(32),t(),n(33,"app-img-uploader",23),C("imgHanle",function(_){return e.form.controls.pdf.patchValue(_.path)}),t(),f(34,R,2,1,"div",22),t()(),n(35,"div",18)(36,"div",19)(37,"label",20),r(38),t(),h(39,"input",24),f(40,U,2,1,"div",22),t()(),n(41,"div",18)(42,"div",19)(43,"label",20),r(44),t(),h(45,"input",25),f(46,z,2,1,"div",22),t()(),n(47,"div",18)(48,"div",19)(49,"label",20),r(50),t(),n(51,"app-img-uploader",23),C("imgHanle",function(_){let S;return(S=e.form.get("thumbnail"))==null?null:S.patchValue(_.path)}),t(),f(52,J,2,1,"div",22),t()(),n(53,"div",18)(54,"div",19)(55,"label",20),r(56),t(),h(57,"input",26),f(58,K,2,1,"div",22),t()(),n(59,"div",27)(60,"div",19)(61,"label",20),r(62),t(),h(63,"input",28),f(64,Q,2,1,"div",22),t()(),n(65,"div",29)(66,"button",30),r(67,"Submit"),t()()()()()()()()),c&2){let p;i(19),m("formGroup",e.form),i(),m("ngClass",y(20,k,!e.formLoader)),i(2),m("ngClass",y(22,k,e.formLoader)),i(4),l("Title (",e.lang.lang,")"),i(2),m("ngIf",e.form.controls.title.invalid&&(e.form.controls.title.dirty||e.form.controls.title.touched)),i(4),l("PDF (",e.lang.lang,")"),i(),m("image",(p=e.form.controls.pdf.value)!==null&&p!==void 0?p:""),i(),m("ngIf",e.form.controls.pdf.invalid&&(e.form.controls.pdf.dirty||e.form.controls.pdf.touched)),i(4),l("Country (",e.lang.lang,")"),i(2),m("ngIf",e.form.controls.country.invalid&&(e.form.controls.country.dirty||e.form.controls.country.touched)),i(4),l("Topic (",e.lang.lang,")"),i(2),m("ngIf",e.form.controls.topic.invalid&&(e.form.controls.topic.dirty||e.form.controls.topic.touched)),i(4),l("Thumbnail (",e.lang.lang,")"),i(),m("image",""),i(),m("ngIf",e.form.controls.thumbnail.invalid&&(e.form.controls.thumbnail.dirty||e.form.controls.thumbnail.touched)),i(4),l("Created At (",e.lang.lang,")"),i(2),m("ngIf",e.form.controls.created_at.invalid&&(e.form.controls.created_at.dirty||e.form.controls.created_at.touched)),i(4),l("Short Description (",e.lang.lang,")"),i(2),m("ngIf",e.form.controls.short_description.invalid&&(e.form.controls.short_description.dirty||e.form.controls.short_description.touched)),i(2),m("disabled",e.formLoader)}},dependencies:[D,I,F,q,w,M,N,j,H,V,G,P],encapsulation:2});let o=d;return o})();export{me as DocumentCreateComponent};
