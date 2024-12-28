import{a as Y}from"./chunk-2YU3QBV7.js";import{a as K}from"./chunk-Z556VGWS.js";import"./chunk-237Y6AXG.js";import{a as j}from"./chunk-CPN7TFKP.js";import{a as V,b as d,c as q,d as D,f as w,g as A,h as H,i as O,j as R,k as W,l as k,m as G,n as B}from"./chunk-ZXVW5RIH.js";import{a as U}from"./chunk-3RYKEFPJ.js";import{a as M}from"./chunk-PSOPF4RO.js";import"./chunk-PBIO274A.js";import{c as I,d as F,f as L,n as N,p as P,u as T}from"./chunk-7KITBK3L.js";import{Aa as h,La as v,Na as s,Ta as i,Ua as t,Va as _,W as y,Za as S,_a as g,db as o,fb as l,jb as C,lb as x,za as r}from"./chunk-R3V5JELH.js";import{d as b}from"./chunk-4CLCTAJ7.js";var z=n=>({"d-none":n});function X(n,c){if(n&1&&(i(0,"div",36),o(1),t()),n&2){let a=g();r(),l(" ",a.myFormService.getErrorMessage(a.form.controls.title)," ")}}function Z(n,c){if(n&1&&(i(0,"div",36),o(1),t()),n&2){let a=g();r(),l(" ",a.myFormService.getErrorMessage(a.form.controls.pdf)," ")}}function $(n,c){if(n&1&&(i(0,"div",36),o(1),t()),n&2){let a=g();r(),l(" ",a.myFormService.getErrorMessage(a.form.controls.author)," ")}}function ee(n,c){if(n&1&&(i(0,"div",36),o(1),t()),n&2){let a=g();r(),l(" ",a.myFormService.getErrorMessage(a.form.controls.banner)," ")}}function te(n,c){if(n&1&&(i(0,"div",36),o(1),t()),n&2){let a=g();r(),l(" ",a.myFormService.getErrorMessage(a.form.controls.creater)," ")}}function ie(n,c){if(n&1&&(i(0,"div",36),o(1),t()),n&2){let a=g();r(),l(" ",a.myFormService.getErrorMessage(a.form.controls.status)," ")}}function ne(n,c){if(n&1&&(i(0,"div",36),o(1),t()),n&2){let a=g();r(),l(" ",a.myFormService.getErrorMessage(a.form.controls.featured)," ")}}function re(n,c){if(n&1&&(i(0,"div",36),o(1),t()),n&2){let a=g();r(),l(" ",a.myFormService.getErrorMessage(a.form.controls.thumbnail)," ")}}function oe(n,c){if(n&1&&(i(0,"div",36),o(1),t()),n&2){let a=g();r(),l(" ",a.myFormService.getErrorMessage(a.form.controls.short_description)," ")}}function ae(n,c){if(n&1&&(i(0,"div",36),o(1),t()),n&2){let a=g();r(),l(" ",a.myFormService.getErrorMessage(a.form.controls.long_description)," ")}}var Ee=(()=>{let c=class c{constructor(p,m,e,f,u,E,J,Q){this.fb=p,this.notification=m,this.myFormService=e,this.service=f,this.route=u,this.router=E,this.lang=J,this.websiteService=Q,this.formLoader=!1,this.editId="",this.form=this.fb.group({title:["",[d.required,d.maxLength(100)]],pdf:["",[d.required,d.maxLength(100)]],author:["",[d.required,d.maxLength(100)]],banner:["",[d.required,d.maxLength(100)]],creater:["",[d.required,d.maxLength(100)]],short_description:["",[d.required,d.maxLength(300)]],thumbnail:["",d.required],featured:["",d.required],status:["",d.required],long_description:["",[d.required,d.maxLength(1e4)]]})}ngOnInit(){this.route.paramMap.subscribe(p=>{this.editId=p.get("id"),this.getRecord(this.editId)})}getRecord(p){return b(this,null,function*(){this.formLoader=!0,this.service.list({type:"pdf",id:Number(this.editId),limit:1}).subscribe({next:m=>{let e=m.data.data[0];if(e){this.form.patchValue({title:e.title,pdf:e.pdf,author:e.author,short_description:e.short_description,long_description:e.long_description,thumbnail:e.thumbnail,status:e.status,featured:e.is_featured});let f=tinymce.get("long_description");f&&f.setContent(e.long_description)}this.notification.success(m.message),this.formLoader=!1},error:m=>{let e=m.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})})}onSubmit(){return b(this,null,function*(){if(this.form.valid){let p=this.form.value;p.type="pdf",p.id=this.editId,this.formLoader=!0,this.service.update(p).subscribe({next:m=>{this.formLoader=!1,this.notification.success(m.message),this.getRecord(this.editId),this.formLoader=!1},error:m=>{let e=m.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})}else this.formLoader=!1,this.form.markAllAsTouched(),this.notification.error("Validation Failed")})}ngAfterViewInit(){tinymce.init({selector:"#long_description",height:300,plugins:"advlist autolink link image lists charmap print preview hr anchor pagebreak",toolbar:"undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",setup:p=>{p.on("Change KeyUp",()=>{let m=p.getContent();this.form.get("long_description")?.setValue(m,{emitEvent:!1})})}})}ngOnDestroy(){tinymce.remove("#long_description")}};c.\u0275fac=function(m){return new(m||c)(h(k),h(T),h(Y),h(U),h(N),h(P),h(M),h(j))},c.\u0275cmp=y({type:c,selectors:[["app-pdf-edit"]],standalone:!0,features:[C],decls:98,vars:29,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[1,"text-center",3,"ngClass"],[3,"ngSubmit","ngClass","formGroup"],[1,"row","pt-3"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["formControlName","title","placeholder","Title",1,"form-control"],["class","text-danger",4,"ngIf"],[3,"imgHanle","image"],["formControlName","author","placeholder","Author",1,"form-control"],["formControlName","creater","placeholder","Creater",1,"form-control"],["formControlName","status",1,"form-control"],["value",""],["value","1"],["value","0"],["formControlName","featured",1,"form-control"],[1,"col-md-12"],["formControlName","short_description","placeholder","Short Description",1,"form-control"],["formControlName","long_description","id","long_description"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white",3,"disabled"],[1,"text-danger"]],template:function(m,e){if(m&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),o(3,"Edit Pdf"),t()(),i(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),o(9,"Home"),t()(),i(10,"li",8),o(11,"Pdf"),t()()()()(),i(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),o(17,"Edit Pdf Form"),t()(),i(18,"div",14)(19,"p",15),o(20,"Loader"),t(),i(21,"form",16),S("ngSubmit",function(){return e.onSubmit()}),i(22,"div",17)(23,"div",18)(24,"div",19)(25,"label",20),o(26),t(),_(27,"input",21),v(28,X,2,1,"div",22),t()(),i(29,"div",18)(30,"div",19)(31,"label",20),o(32),t(),i(33,"app-img-uploader",23),S("imgHanle",function(u){return e.form.controls.pdf.patchValue(u.path)}),t(),v(34,Z,2,1,"div",22),t()(),i(35,"div",18)(36,"div",19)(37,"label",20),o(38),t(),_(39,"input",24),v(40,$,2,1,"div",22),t()(),i(41,"div",18)(42,"div",19)(43,"label",20),o(44),t(),i(45,"app-img-uploader",23),S("imgHanle",function(u){return e.form.controls.banner.patchValue(u.path)}),t(),v(46,ee,2,1,"div",22),t()(),i(47,"div",18)(48,"div",19)(49,"label",20),o(50),t(),_(51,"input",25),v(52,te,2,1,"div",22),t()(),i(53,"div",18)(54,"div",19)(55,"label",20),o(56,"Status"),t(),i(57,"select",26)(58,"option",27),o(59,"Select Status"),t(),i(60,"option",28),o(61,"Enable"),t(),i(62,"option",29),o(63,"Disable"),t()(),v(64,ie,2,1,"div",22),t()(),i(65,"div",18)(66,"div",19)(67,"label",20),o(68,"Is Featured"),t(),i(69,"select",30)(70,"option",27),o(71,"Select Featured"),t(),i(72,"option",28),o(73,"Yes"),t(),i(74,"option",29),o(75,"No"),t()(),v(76,ne,2,1,"div",22),t()(),i(77,"div",18)(78,"div",19)(79,"label",20),o(80),t(),i(81,"app-img-uploader",23),S("imgHanle",function(u){return e.form.controls.thumbnail.patchValue(u.path)}),t(),v(82,re,2,1,"div",22),t()(),i(83,"div",31)(84,"div",19)(85,"label",20),o(86),t(),_(87,"input",32),v(88,oe,2,1,"div",22),t()(),i(89,"div",31)(90,"div",19)(91,"label",20),o(92),t(),_(93,"textarea",33),v(94,ae,2,1,"div",22),t()(),i(95,"div",34)(96,"button",35),o(97,"Submit"),t()()()()()()()()),m&2){let f,u,E;r(19),s("ngClass",x(25,z,!e.formLoader)),r(2),s("ngClass",x(27,z,e.formLoader))("formGroup",e.form),r(5),l("Title (",e.lang.lang,")"),r(2),s("ngIf",e.form.controls.title.invalid&&(e.form.controls.title.dirty||e.form.controls.title.touched)),r(4),l("PDF (",e.lang.lang,")"),r(),s("image",(f=e.form.controls.pdf.value)!==null&&f!==void 0?f:""),r(),s("ngIf",e.form.controls.pdf.invalid&&(e.form.controls.pdf.dirty||e.form.controls.pdf.touched)),r(4),l("Author (",e.lang.lang,")"),r(2),s("ngIf",e.form.controls.author.invalid&&(e.form.controls.author.dirty||e.form.controls.author.touched)),r(4),l("Banner (",e.lang.lang,")"),r(),s("image",(u=e.form.controls.banner.value)!==null&&u!==void 0?u:""),r(),s("ngIf",e.form.controls.banner.invalid&&(e.form.controls.banner.dirty||e.form.controls.banner.touched)),r(4),l("Creater (",e.lang.lang,")"),r(2),s("ngIf",e.form.controls.creater.invalid&&(e.form.controls.creater.dirty||e.form.controls.author.touched)),r(12),s("ngIf",e.form.controls.status.invalid&&(e.form.controls.status.dirty||e.form.controls.status.touched)),r(12),s("ngIf",e.form.controls.featured.invalid&&(e.form.controls.featured.dirty||e.form.controls.featured.touched)),r(4),l("Thumbnail (",e.lang.lang,")"),r(),s("image",(E=e.form.controls.thumbnail.value)!==null&&E!==void 0?E:""),r(),s("ngIf",e.form.controls.thumbnail.invalid&&(e.form.controls.thumbnail.dirty||e.form.controls.thumbnail.touched)),r(4),l("Short Description (",e.lang.lang,")"),r(2),s("ngIf",e.form.controls.short_description.invalid&&(e.form.controls.short_description.dirty||e.form.controls.short_description.touched)),r(4),l("Long Description (",e.lang.lang,")"),r(2),s("ngIf",e.form.controls.long_description.invalid&&(e.form.controls.long_description.dirty||e.form.controls.long_description.touched)),r(2),s("disabled",e.formLoader)}},dependencies:[L,I,F,B,w,R,W,V,O,q,D,A,H,G,K],encapsulation:2});let n=c;return n})();export{Ee as PdfEditComponent};
