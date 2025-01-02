import{a as J}from"./chunk-DHL23GS7.js";import{a as K}from"./chunk-2YU3QBV7.js";import{a as z}from"./chunk-Z556VGWS.js";import"./chunk-237Y6AXG.js";import{a as D}from"./chunk-CPN7TFKP.js";import{a as V,b as s,c as H,d as w,f as A,g as q,h as R,i as O,j as W,k as G,l as B,m as k,n as U}from"./chunk-ZXVW5RIH.js";import{a as Y}from"./chunk-3RYKEFPJ.js";import{a as j}from"./chunk-PSOPF4RO.js";import"./chunk-PBIO274A.js";import{c as F,d as T,f as L,n as P,p as M,u as N}from"./chunk-7KITBK3L.js";import{Aa as h,La as p,Na as d,Ta as i,Ua as t,Va as E,W as C,Za as S,_a as f,db as r,fb as l,jb as I,lb as b,za as o}from"./chunk-R3V5JELH.js";import{d as x}from"./chunk-4CLCTAJ7.js";var Q=n=>({"d-none":n});function Z(n,m){if(n&1&&(i(0,"div",41),r(1),t()),n&2){let a=f();o(),l(" ",a.myFormService.getErrorMessage(a.form.controls.title)," ")}}function $(n,m){if(n&1&&(i(0,"div",41),r(1),t()),n&2){let a=f();o(),l(" ",a.myFormService.getErrorMessage(a.form.controls.pdf)," ")}}function ee(n,m){if(n&1&&(i(0,"div",41),r(1),t()),n&2){let a=f();o(),l(" ",a.myFormService.getErrorMessage(a.form.controls.author)," ")}}function te(n,m){if(n&1&&(i(0,"div",41),r(1),t()),n&2){let a=f();o(),l(" ",a.myFormService.getErrorMessage(a.form.controls.banner)," ")}}function ie(n,m){if(n&1&&(i(0,"div",41),r(1),t()),n&2){let a=f();o(),l(" ",a.myFormService.getErrorMessage(a.form.controls.creater)," ")}}function ne(n,m){if(n&1&&(i(0,"div",41),r(1),t()),n&2){let a=f();o(),l(" ",a.myFormService.getErrorMessage(a.form.controls.country)," ")}}function oe(n,m){if(n&1&&(i(0,"div",41),r(1),t()),n&2){let a=f();o(),l(" ",a.myFormService.getErrorMessage(a.form.controls.topic)," ")}}function re(n,m){if(n&1&&(i(0,"div",41),r(1),t()),n&2){let a=f();o(),l(" ",a.myFormService.getErrorMessage(a.form.controls.dctype)," ")}}function ae(n,m){if(n&1&&(i(0,"div",41),r(1),t()),n&2){let a=f();o(),l(" ",a.myFormService.getErrorMessage(a.form.controls.status)," ")}}function le(n,m){if(n&1&&(i(0,"div",41),r(1),t()),n&2){let a=f();o(),l(" ",a.myFormService.getErrorMessage(a.form.controls.featured)," ")}}function de(n,m){if(n&1&&(i(0,"div",41),r(1),t()),n&2){let a=f();o(),l(" ",a.myFormService.getErrorMessage(a.form.controls.thumbnail)," ")}}function me(n,m){if(n&1&&(i(0,"div",41),r(1),t()),n&2){let a=f();o(),l(" ",a.myFormService.getErrorMessage(a.form.controls.short_description)," ")}}function se(n,m){if(n&1&&(i(0,"div",41),r(1),t()),n&2){let a=f();o(),l(" ",a.myFormService.getErrorMessage(a.form.controls.long_description)," ")}}var Ce=(()=>{let m=class m{constructor(v,c,e,g,u,_,y,X){this.fb=v,this.notification=c,this.myFormService=e,this.service=g,this.route=u,this.router=_,this.lang=y,this.websiteService=X,this.default="",this.formLoader=!1,this.editId="",this.form=this.fb.group({title:["",[s.required,s.maxLength(100)]],pdf:["",[s.required,s.maxLength(100)]],author:["",[s.maxLength(100)]],banner:["",[s.maxLength(100)]],creater:["",[s.maxLength(100)]],country:["",[s.maxLength(100)]],topic:["",[s.maxLength(100)]],short_description:["",[s.maxLength(500)]],thumbnail:["",s.required],featured:["",s.required],status:["",s.required],dctype:["",s.required],long_description:["",[s.maxLength(1e4)]]})}ngOnInit(){this.route.paramMap.subscribe(v=>{this.editId=v.get("id"),this.getRecord(this.editId)})}getRecord(v){return x(this,null,function*(){this.formLoader=!0,this.service.list({type:"pdf",id:Number(this.editId),limit:1}).subscribe({next:c=>{let e=c.data.data[0];e&&(this.form.patchValue({title:e.title,pdf:e.pdf,author:e.author,creater:e.creater,country:e.country,topic:e.topic,short_description:e.short_description,long_description:e.long_description,thumbnail:e.thumbnail,banner:e.banner,status:e.status,dctype:e.dctype,featured:e.is_featured}),this.default=e.long_description),this.notification.success(c.message),this.formLoader=!1},error:c=>{let e=c.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})})}onSubmit(){return x(this,null,function*(){if(this.form.valid){let v=this.form.value;v.type="pdf",v.id=this.editId,this.formLoader=!0,this.service.update(v).subscribe({next:c=>{this.formLoader=!1,this.notification.success(c.message),this.getRecord(this.editId),this.formLoader=!1},error:c=>{let e=c.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})}else this.formLoader=!1,this.form.markAllAsTouched(),this.notification.error("Validation Failed")})}};m.\u0275fac=function(c){return new(c||m)(h(B),h(N),h(K),h(Y),h(P),h(M),h(j),h(D))},m.\u0275cmp=C({type:m,selectors:[["app-pdf-edit"]],standalone:!0,features:[I],decls:122,vars:35,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[1,"text-center",3,"ngClass"],[3,"ngSubmit","ngClass","formGroup"],[1,"row","pt-3"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["formControlName","title","placeholder","Title",1,"form-control"],["class","text-danger",4,"ngIf"],[3,"imgHanle","image"],["formControlName","author","placeholder","Author",1,"form-control"],["formControlName","creater","placeholder","Creater",1,"form-control"],["formControlName","country","placeholder","Country",1,"form-control"],["formControlName","topic","placeholder","Topic",1,"form-control"],["formControlName","dctype",1,"form-control"],["value",""],["value","pdf"],["value","document"],["formControlName","status",1,"form-control"],["value","1"],["value","0"],["formControlName","featured",1,"form-control"],[1,"col-md-12"],["formControlName","short_description","placeholder","Short Description",1,"form-control"],["name","long_description",3,"editorChange","Defaultvalue"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white",3,"disabled"],[1,"text-danger"]],template:function(c,e){if(c&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),r(3,"Edit Pdf"),t()(),i(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),r(9,"Home"),t()(),i(10,"li",8),r(11,"Pdf"),t()()()()(),i(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),r(17,"Edit Pdf Form"),t()(),i(18,"div",14)(19,"p",15),r(20,"Loader"),t(),i(21,"form",16),S("ngSubmit",function(){return e.onSubmit()}),i(22,"div",17)(23,"div",18)(24,"div",19)(25,"label",20),r(26),t(),E(27,"input",21),p(28,Z,2,1,"div",22),t()(),i(29,"div",18)(30,"div",19)(31,"label",20),r(32),t(),i(33,"app-img-uploader",23),S("imgHanle",function(u){return e.form.controls.pdf.patchValue(u.path)}),t(),p(34,$,2,1,"div",22),t()(),i(35,"div",18)(36,"div",19)(37,"label",20),r(38),t(),E(39,"input",24),p(40,ee,2,1,"div",22),t()(),i(41,"div",18)(42,"div",19)(43,"label",20),r(44),t(),i(45,"app-img-uploader",23),S("imgHanle",function(u){return e.form.controls.banner.patchValue(u.path)}),t(),p(46,te,2,1,"div",22),t()(),i(47,"div",18)(48,"div",19)(49,"label",20),r(50),t(),E(51,"input",25),p(52,ie,2,1,"div",22),t()(),i(53,"div",18)(54,"div",19)(55,"label",20),r(56),t(),E(57,"input",26),p(58,ne,2,1,"div",22),t()(),i(59,"div",18)(60,"div",19)(61,"label",20),r(62),t(),E(63,"input",27),p(64,oe,2,1,"div",22),t()(),i(65,"div",18)(66,"div",19)(67,"label",20),r(68,"Type"),t(),i(69,"select",28)(70,"option",29),r(71,"Select Type"),t(),i(72,"option",30),r(73,"Pdf"),t(),i(74,"option",31),r(75,"Document"),t()(),p(76,re,2,1,"div",22),t()(),i(77,"div",18)(78,"div",19)(79,"label",20),r(80,"Status"),t(),i(81,"select",32)(82,"option",29),r(83,"Select Status"),t(),i(84,"option",33),r(85,"Enable"),t(),i(86,"option",34),r(87,"Disable"),t()(),p(88,ae,2,1,"div",22),t()(),i(89,"div",18)(90,"div",19)(91,"label",20),r(92,"Is Featured"),t(),i(93,"select",35)(94,"option",29),r(95,"Select Featured"),t(),i(96,"option",33),r(97,"Yes"),t(),i(98,"option",34),r(99,"No"),t()(),p(100,le,2,1,"div",22),t()(),i(101,"div",18)(102,"div",19)(103,"label",20),r(104),t(),i(105,"app-img-uploader",23),S("imgHanle",function(u){return e.form.controls.thumbnail.patchValue(u.path)}),t(),p(106,de,2,1,"div",22),t()(),i(107,"div",36)(108,"div",19)(109,"label",20),r(110),t(),E(111,"input",37),p(112,me,2,1,"div",22),t()(),i(113,"div",36)(114,"div",19)(115,"label",20),r(116),t(),i(117,"app-my-editor",38),S("editorChange",function(u){let _;return(_=e.form.get("long_description"))==null?null:_.patchValue(u)}),t(),p(118,se,2,1,"div",22),t()(),i(119,"div",39)(120,"button",40),r(121,"Submit"),t()()()()()()()()),c&2){let g,u,_,y;o(19),d("ngClass",b(31,Q,!e.formLoader)),o(2),d("ngClass",b(33,Q,e.formLoader))("formGroup",e.form),o(5),l("Title (",e.lang.lang,")"),o(2),d("ngIf",e.form.controls.title.invalid&&(e.form.controls.title.dirty||e.form.controls.title.touched)),o(4),l("PDF (",e.lang.lang,")"),o(),d("image",(g=e.form.controls.pdf.value)!==null&&g!==void 0?g:""),o(),d("ngIf",e.form.controls.pdf.invalid&&(e.form.controls.pdf.dirty||e.form.controls.pdf.touched)),o(4),l("Author (",e.lang.lang,")"),o(2),d("ngIf",e.form.controls.author.invalid&&(e.form.controls.author.dirty||e.form.controls.author.touched)),o(4),l("Banner (",e.lang.lang,")"),o(),d("image",(u=e.form.controls.banner.value)!==null&&u!==void 0?u:""),o(),d("ngIf",e.form.controls.banner.invalid&&(e.form.controls.banner.dirty||e.form.controls.banner.touched)),o(4),l("Creater (",e.lang.lang,")"),o(2),d("ngIf",e.form.controls.creater.invalid&&(e.form.controls.creater.dirty||e.form.controls.author.touched)),o(4),l("Country (",e.lang.lang,")"),o(2),d("ngIf",e.form.controls.country.invalid&&(e.form.controls.country.dirty||e.form.controls.country.touched)),o(4),l("Topic (",e.lang.lang,")"),o(2),d("ngIf",e.form.controls.topic.invalid&&(e.form.controls.topic.dirty||e.form.controls.topic.touched)),o(12),d("ngIf",e.form.controls.dctype.invalid&&(e.form.controls.dctype.dirty||e.form.controls.dctype.touched)),o(12),d("ngIf",e.form.controls.status.invalid&&(e.form.controls.status.dirty||e.form.controls.status.touched)),o(12),d("ngIf",e.form.controls.featured.invalid&&(e.form.controls.featured.dirty||e.form.controls.featured.touched)),o(4),l("Thumbnail (",e.lang.lang,")"),o(),d("image",(_=e.form.controls.thumbnail.value)!==null&&_!==void 0?_:""),o(),d("ngIf",e.form.controls.thumbnail.invalid&&(e.form.controls.thumbnail.dirty||e.form.controls.thumbnail.touched)),o(4),l("Short Description (",e.lang.lang,")"),o(2),d("ngIf",e.form.controls.short_description.invalid&&(e.form.controls.short_description.dirty||e.form.controls.short_description.touched)),o(4),l("Long Description (",e.lang.lang,")"),o(),d("Defaultvalue",(y=e.default)!==null&&y!==void 0?y:""),o(),d("ngIf",e.form.controls.long_description.invalid&&(e.form.controls.long_description.dirty||e.form.controls.long_description.touched)),o(2),d("disabled",e.formLoader)}},dependencies:[L,F,T,U,A,W,G,V,O,H,w,q,R,k,z,J],encapsulation:2});let n=m;return n})();export{Ce as PdfEditComponent};
