import{a as W}from"./chunk-NLTDDBAE.js";import{a as R}from"./chunk-NC6KBWMU.js";import{a as O}from"./chunk-U7QCRB7A.js";import"./chunk-KHNFE2OV.js";import{a as N,b as c,c as j,d as D,f as H,g as V,h as w,l as A,m as G,n as q}from"./chunk-SJ7ZZS3O.js";import{a as B}from"./chunk-3U2FLW46.js";import"./chunk-5EBI5SRX.js";import{e as M}from"./chunk-ZQOR2YH6.js";import{c as I,d as F,f as L,q as P,v as T}from"./chunk-KH3O32EG.js";import{Ka as i,La as h,W as y,Wa as v,Ya as m,cb as r,db as t,eb as S,ib as C,jb as u,ob as a,qb as l,ub as E,wb as b}from"./chunk-D2L33MOK.js";import{d as x}from"./chunk-4CLCTAJ7.js";var k=n=>({"d-none":n});function U(n,d){if(n&1&&(r(0,"div",31),a(1),t()),n&2){let o=u();i(),l(" ",o.myFormService.getErrorMessage(o.form.controls.title)," ")}}function z(n,d){if(n&1&&(r(0,"div",31),a(1),t()),n&2){let o=u();i(),l(" ",o.myFormService.getErrorMessage(o.form.controls.pdf)," ")}}function J(n,d){if(n&1&&(r(0,"div",31),a(1),t()),n&2){let o=u();i(),l(" ",o.myFormService.getErrorMessage(o.form.controls.author)," ")}}function K(n,d){if(n&1&&(r(0,"div",31),a(1),t()),n&2){let o=u();i(),l(" ",o.myFormService.getErrorMessage(o.form.controls.creater)," ")}}function Q(n,d){if(n&1&&(r(0,"div",31),a(1),t()),n&2){let o=u();i(),l(" ",o.myFormService.getErrorMessage(o.form.controls.thumbnail)," ")}}function X(n,d){if(n&1&&(r(0,"div",31),a(1),t()),n&2){let o=u();i(),l(" ",o.myFormService.getErrorMessage(o.form.controls.banner)," ")}}function Y(n,d){if(n&1&&(r(0,"div",31),a(1),t()),n&2){let o=u();i(),l(" ",o.myFormService.getErrorMessage(o.form.controls.short_description)," ")}}function Z(n,d){if(n&1&&(r(0,"div",31),a(1),t()),n&2){let o=u();i(),l(" ",o.myFormService.getErrorMessage(o.form.controls.long_description)," ")}}var ce=(()=>{let d=class d{constructor(_,p,e,f,s,g){this.fb=_,this.notification=p,this.myFormService=e,this.service=f,this.router=s,this.lang=g,this.formLoader=!0,this.form=this.fb.group({title:["",[c.required,c.maxLength(100)]],pdf:["",[c.maxLength(100)]],author:["",[c.maxLength(100)]],creater:["",[c.maxLength(100)]],topic:["",[c.maxLength(100)]],thumbnail:["",c.required],banner:["",[c.maxLength(100)]],short_description:["",[c.maxLength(500)]],long_description:["",[c.maxLength(1e4)]]})}ngOnInit(){this.formLoader=!1}onSubmit(){return x(this,null,function*(){if(this.form.valid){let _=this.form.value;_.type="pdf",this.formLoader=!0,this.service.update(_).subscribe({next:p=>{this.formLoader=!1,this.notification.success(p.message),this.form.reset(),this.formLoader=!1,this.router.navigate(["/admin/pdf/list"])},error:p=>{let e=p.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})}else this.form.markAllAsTouched(),this.formLoader=!1,this.notification.error("Validation Failed")})}};d.\u0275fac=function(p){return new(p||d)(h(A),h(T),h(W),h(B),h(P),h(M))},d.\u0275cmp=y({type:d,selectors:[["app-pdf-create"]],standalone:!0,features:[E],decls:74,vars:27,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"text-center",3,"ngClass"],[1,"row","pt-3",3,"ngClass"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["formControlName","title","placeholder","Title",1,"form-control"],["class","text-danger",4,"ngIf"],[3,"imgHanle","image"],["formControlName","author","placeholder","Author",1,"form-control"],["formControlName","creater","placeholder","Creater",1,"form-control"],[1,"col-md-12"],["formControlName","short_description","placeholder","Short Description",1,"form-control"],["value","",3,"editorChange"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white",3,"disabled"],[1,"text-danger"]],template:function(p,e){if(p&1&&(r(0,"div",0)(1,"div",1)(2,"h4",2),a(3,"Create Pdf"),t()(),r(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),a(9,"Home"),t()(),r(10,"li",8),a(11,"Pdf"),t()()()()(),r(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),a(17,"Create Pdf Form"),t()(),r(18,"div",14)(19,"form",15),C("ngSubmit",function(){return e.onSubmit()}),r(20,"p",16),a(21,"Loader"),t(),r(22,"div",17)(23,"div",18)(24,"div",19)(25,"label",20),a(26),t(),S(27,"input",21),v(28,U,2,1,"div",22),t()(),r(29,"div",18)(30,"div",19)(31,"label",20),a(32),t(),r(33,"app-img-uploader",23),C("imgHanle",function(s){return e.form.controls.pdf.patchValue(s.path)}),t(),v(34,z,2,1,"div",22),t()(),r(35,"div",18)(36,"div",19)(37,"label",20),a(38),t(),S(39,"input",24),v(40,J,2,1,"div",22),t()(),r(41,"div",18)(42,"div",19)(43,"label",20),a(44),t(),S(45,"input",25),v(46,K,2,1,"div",22),t()(),r(47,"div",18)(48,"div",19)(49,"label",20),a(50),t(),r(51,"app-img-uploader",23),C("imgHanle",function(s){let g;return(g=e.form.get("thumbnail"))==null?null:g.patchValue(s.path)}),t(),v(52,Q,2,1,"div",22),t()(),r(53,"div",18)(54,"div",19)(55,"label",20),a(56),t(),r(57,"app-img-uploader",23),C("imgHanle",function(s){return e.form.controls.banner.patchValue(s.path)}),t(),v(58,X,2,1,"div",22),t()(),r(59,"div",26)(60,"div",19)(61,"label",20),a(62),t(),S(63,"input",27),v(64,Y,2,1,"div",22),t()(),r(65,"div",26)(66,"div",19)(67,"label",20),a(68),t(),r(69,"app-my-editor",28),C("editorChange",function(s){let g;return(g=e.form.get("long_description"))==null?null:g.patchValue(s)}),t(),v(70,Z,2,1,"div",22),t()(),r(71,"div",29)(72,"button",30),a(73,"Submit"),t()()()()()()()()),p&2){let f,s;i(19),m("formGroup",e.form),i(),m("ngClass",b(23,k,!e.formLoader)),i(2),m("ngClass",b(25,k,e.formLoader)),i(4),l("Title (",e.lang.lang,")"),i(2),m("ngIf",e.form.controls.title.invalid&&(e.form.controls.title.dirty||e.form.controls.title.touched)),i(4),l("PDF (",e.lang.lang,")"),i(),m("image",(f=e.form.controls.pdf.value)!==null&&f!==void 0?f:""),i(),m("ngIf",e.form.controls.pdf.invalid&&(e.form.controls.pdf.dirty||e.form.controls.pdf.touched)),i(4),l("Author (",e.lang.lang,")"),i(2),m("ngIf",e.form.controls.author.invalid&&(e.form.controls.author.dirty||e.form.controls.author.touched)),i(4),l("Creater (",e.lang.lang,")"),i(2),m("ngIf",e.form.controls.creater.invalid&&(e.form.controls.creater.dirty||e.form.controls.creater.touched)),i(4),l("Thumbnail (",e.lang.lang,")"),i(),m("image",""),i(),m("ngIf",e.form.controls.thumbnail.invalid&&(e.form.controls.thumbnail.dirty||e.form.controls.thumbnail.touched)),i(4),l("Banner (",e.lang.lang,")"),i(),m("image",(s=e.form.controls.banner.value)!==null&&s!==void 0?s:""),i(),m("ngIf",e.form.controls.banner.invalid&&(e.form.controls.banner.dirty||e.form.controls.banner.touched)),i(4),l("Short Description (",e.lang.lang,")"),i(2),m("ngIf",e.form.controls.short_description.invalid&&(e.form.controls.short_description.dirty||e.form.controls.short_description.touched)),i(4),l("Long Description (",e.lang.lang,")"),i(2),m("ngIf",e.form.controls.long_description.invalid&&(e.form.controls.long_description.dirty||e.form.controls.long_description.touched)),i(2),m("disabled",e.formLoader)}},dependencies:[L,I,F,q,H,N,j,D,V,w,G,O,R],encapsulation:2});let n=d;return n})();export{ce as PdfCreateComponent};
