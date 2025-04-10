import{a as J}from"./chunk-4GYF56SC.js";import{a as z}from"./chunk-5WZG23BL.js";import{a as Y}from"./chunk-M7CLMUIA.js";import"./chunk-XPEQJFWN.js";import{a as D,b as s,c as k,d as V,f as w,g as R,h as A,i as O,j as W,k as G,l as H,m as B,n as U}from"./chunk-AMHWS7FZ.js";import{a as P}from"./chunk-UVG6VTVB.js";import"./chunk-6DKBZJ63.js";import{a as j}from"./chunk-HQ7V5JS5.js";import{e as q}from"./chunk-3IEMDY3T.js";import{Ja as I,La as F,Oa as L,S as o,T as _,X as u,Xa as T,Y as m,Za as M,da as i,db as N,ea as t,fa as E,ja as S,ka as p,pa as r,ra as a,wa as y,ya as x,z as b}from"./chunk-UFGFQ7NC.js";import{d as C}from"./chunk-4CLCTAJ7.js";var K=n=>({"d-none":n});function Z(n,d){if(n&1&&(i(0,"div",43),r(1),t()),n&2){let l=p();o(),a(" ",l.myFormService.getErrorMessage(l.form.controls.title)," ")}}function $(n,d){if(n&1&&(i(0,"div",43),r(1),t()),n&2){let l=p();o(),a(" ",l.myFormService.getErrorMessage(l.form.controls.subtitle)," ")}}function ee(n,d){if(n&1&&(i(0,"div",43),r(1),t()),n&2){let l=p();o(),a(" ",l.myFormService.getErrorMessage(l.form.controls.creater)," ")}}function te(n,d){if(n&1&&(i(0,"div",43),r(1),t()),n&2){let l=p();o(),a(" ",l.myFormService.getErrorMessage(l.form.controls.author)," ")}}function ie(n,d){if(n&1&&(i(0,"div",43),r(1),t()),n&2){let l=p();o(),a(" ",l.myFormService.getErrorMessage(l.form.controls.dctype)," ")}}function ne(n,d){if(n&1&&(i(0,"div",43),r(1),t()),n&2){let l=p();o(),a(" ",l.myFormService.getErrorMessage(l.form.controls.status)," ")}}function oe(n,d){if(n&1&&(i(0,"div",43),r(1),t()),n&2){let l=p();o(),a(" ",l.myFormService.getErrorMessage(l.form.controls.featured)," ")}}function re(n,d){if(n&1&&(i(0,"div",43),r(1),t()),n&2){let l=p();o(),a(" ",l.myFormService.getErrorMessage(l.form.controls.thumbnail)," ")}}function le(n,d){if(n&1&&(i(0,"div",43),r(1),t()),n&2){let l=p();o(),a(" ",l.myFormService.getErrorMessage(l.form.controls.button)," ")}}function ae(n,d){if(n&1&&(i(0,"div",43),r(1),t()),n&2){let l=p();o(),a(" ",l.myFormService.getErrorMessage(l.form.controls.link)," ")}}function me(n,d){if(n&1&&(i(0,"div",43),r(1),t()),n&2){let l=p();o(),a(" ",l.myFormService.getErrorMessage(l.form.controls.short_description)," ")}}function de(n,d){if(n&1&&(i(0,"div",43),r(1),t()),n&2){let l=p();o(),a(" ",l.myFormService.getErrorMessage(l.form.controls.long_description)," ")}}function se(n,d){if(n&1&&(i(0,"div",43),r(1),t()),n&2){let l=p();o(),a("",l.myFormService.getErrorMessage(l.form.controls.requirements)," ")}}var ye=(()=>{let d=class d{constructor(g,c,e,h,f,v,Q,X){this.fb=g,this.notification=c,this.myFormService=e,this.service=h,this.route=f,this.router=v,this.lang=Q,this.websiteService=X,this.default="",this.requirements="",this.formLoader=!1,this.editId="",this.form=this.fb.group({title:["",[s.required,s.maxLength(200)]],subtitle:["",[s.maxLength(100)]],creater:["",[s.maxLength(100)]],author:["",[s.maxLength(100)]],thumbnail:["",s.required],featured:["",s.required],status:["",s.required],button:["",[s.maxLength(500)]],dctype:["",[s.required,s.maxLength(500)]],link:["",[s.maxLength(500)]],short_description:["",[s.maxLength(500)]],long_description:["",[s.maxLength(1e4)]],requirements:["",[s.maxLength(1e4)]]})}ngOnInit(){this.route.paramMap.subscribe(g=>{this.editId=g.get("id"),this.getRecord(this.editId)})}getRecord(g){return C(this,null,function*(){this.formLoader=!0,this.service.list({type:"course",id:Number(this.editId),limit:1}).subscribe({next:c=>{let e=c.data.data[0];e&&(this.form.patchValue({title:e.title,subtitle:e.subtitle,creater:e.creater,author:e.author,thumbnail:e.thumbnail,status:e.status,featured:e.is_featured,button:e.button,link:e.link,dctype:e.dctype,short_description:e.short_description,long_description:e.long_description,requirements:e.requirements}),this.default=e.long_description,this.requirements=e.requirements),this.notification.success(c.message),this.formLoader=!1},error:c=>{let e=c.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})})}onSubmit(){return C(this,null,function*(){if(this.form.valid){let g=this.form.value;g.type="course",g.id=this.editId,this.formLoader=!0,this.service.update(g).subscribe({next:c=>{this.formLoader=!1,this.notification.success(c.message),this.getRecord(this.editId),this.formLoader=!1},error:c=>{let e=c.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})}else this.formLoader=!1,this.form.markAllAsTouched(),this.notification.error("Validation Failed")})}};d.\u0275fac=function(c){return new(c||d)(_(H),_(N),_(J),_(P),_(T),_(M),_(q),_(j))},d.\u0275cmp=b({type:d,selectors:[["app-course-edit"]],standalone:!0,features:[y],decls:122,vars:34,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[1,"text-center",3,"ngClass"],[3,"ngSubmit","ngClass","formGroup"],[1,"row","pt-3"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["formControlName","title","placeholder","Title",1,"form-control"],["class","text-danger",4,"ngIf"],["formControlName","subtitle","placeholder","Subtitle",1,"form-control"],["formControlName","creater","placeholder","Until",1,"form-control"],["formControlName","author","placeholder","Cost",1,"form-control"],["formControlName","dctype",1,"form-control"],["value",""],["value","external course"],["value","clad course"],["formControlName","status",1,"form-control"],["value","1"],["value","0"],["formControlName","featured",1,"form-control"],[3,"imgHanle","image"],["formControlName","button","placeholder","Button",1,"form-control"],["formControlName","link","placeholder","Link",1,"form-control"],[1,"col-md-12"],["formControlName","short_description","placeholder","Short Description",1,"form-control"],["name","long_description",3,"editorChange","Defaultvalue"],["name","requirements",3,"editorChange","Defaultvalue"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white",3,"disabled"],[1,"text-danger"]],template:function(c,e){if(c&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),r(3,"Edit Course"),t()(),i(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),r(9,"Home"),t()(),i(10,"li",8),r(11,"Courses"),t()()()()(),i(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),r(17,"Edit Course Form"),t()(),i(18,"div",14)(19,"p",15),r(20,"Loader"),t(),i(21,"form",16),S("ngSubmit",function(){return e.onSubmit()}),i(22,"div",17)(23,"div",18)(24,"div",19)(25,"label",20),r(26),t(),E(27,"input",21),u(28,Z,2,1,"div",22),t()(),i(29,"div",18)(30,"div",19)(31,"label",20),r(32),t(),E(33,"input",23),u(34,$,2,1,"div",22),t()(),i(35,"div",18)(36,"div",19)(37,"label",20),r(38),t(),E(39,"input",24),u(40,ee,2,1,"div",22),t()(),i(41,"div",18)(42,"div",19)(43,"label",20),r(44),t(),E(45,"input",25),u(46,te,2,1,"div",22),t()(),i(47,"div",18)(48,"div",19)(49,"label",20),r(50,"Type"),t(),i(51,"select",26)(52,"option",27),r(53,"Select Type"),t(),i(54,"option",28),r(55,"External Course"),t(),i(56,"option",29),r(57,"Clad Course"),t()(),u(58,ie,2,1,"div",22),t()(),i(59,"div",18)(60,"div",19)(61,"label",20),r(62,"Status"),t(),i(63,"select",30)(64,"option",27),r(65,"Select Status"),t(),i(66,"option",31),r(67,"Enable"),t(),i(68,"option",32),r(69,"Disable"),t()(),u(70,ne,2,1,"div",22),t()(),i(71,"div",18)(72,"div",19)(73,"label",20),r(74,"Is Featured"),t(),i(75,"select",33)(76,"option",27),r(77,"Select Featured"),t(),i(78,"option",31),r(79,"Yes"),t(),i(80,"option",32),r(81,"No"),t()(),u(82,oe,2,1,"div",22),t()(),i(83,"div",18)(84,"div",19)(85,"label",20),r(86),t(),i(87,"app-img-uploader",34),S("imgHanle",function(f){return e.form.controls.thumbnail.patchValue(f.path)}),t(),u(88,re,2,1,"div",22),t()(),i(89,"div",18)(90,"div",19)(91,"label",20),r(92),t(),E(93,"input",35),u(94,le,2,1,"div",22),t()(),i(95,"div",18)(96,"div",19)(97,"label",20),r(98),t(),E(99,"input",36),u(100,ae,2,1,"div",22),t()(),i(101,"div",37)(102,"div",19)(103,"label",20),r(104),t(),E(105,"input",38),u(106,me,2,1,"div",22),t()(),i(107,"div",37)(108,"div",19)(109,"label",20),r(110),t(),i(111,"app-my-editor",39),S("editorChange",function(f){let v;return(v=e.form.get("long_description"))==null?null:v.patchValue(f)}),t(),u(112,de,2,1,"div",22),t()(),i(113,"div",37)(114,"div",19)(115,"label",20),r(116),t(),i(117,"app-my-editor",40),S("editorChange",function(f){let v;return(v=e.form.get("requirements"))==null?null:v.patchValue(f)}),t(),u(118,se,2,1,"div",22),t()(),i(119,"div",41)(120,"button",42),r(121,"Submit"),t()()()()()()()()),c&2){let h,f,v;o(19),m("ngClass",x(30,K,!e.formLoader)),o(2),m("ngClass",x(32,K,e.formLoader))("formGroup",e.form),o(5),a("Title (",e.lang.lang,")"),o(2),m("ngIf",e.form.controls.title.invalid&&(e.form.controls.title.dirty||e.form.controls.title.touched)),o(4),a("Subtitle (",e.lang.lang,")"),o(2),m("ngIf",e.form.controls.subtitle.invalid&&(e.form.controls.subtitle.dirty||e.form.controls.subtitle.touched)),o(4),a("Until (",e.lang.lang,")"),o(2),m("ngIf",e.form.controls.creater.invalid&&(e.form.controls.creater.dirty||e.form.controls.creater.touched)),o(4),a("Cost (",e.lang.lang,")"),o(2),m("ngIf",e.form.controls.author.invalid&&(e.form.controls.author.dirty||e.form.controls.author.touched)),o(12),m("ngIf",e.form.controls.dctype.invalid&&(e.form.controls.dctype.dirty||e.form.controls.dctype.touched)),o(12),m("ngIf",e.form.controls.status.invalid&&(e.form.controls.status.dirty||e.form.controls.status.touched)),o(12),m("ngIf",e.form.controls.featured.invalid&&(e.form.controls.featured.dirty||e.form.controls.featured.touched)),o(4),a("Thumbnail (",e.lang.lang,")"),o(),m("image",(h=e.form.controls.thumbnail.value)!==null&&h!==void 0?h:""),o(),m("ngIf",e.form.controls.thumbnail.invalid&&(e.form.controls.thumbnail.dirty||e.form.controls.thumbnail.touched)),o(4),a("Button (",e.lang.lang,")"),o(2),m("ngIf",e.form.controls.button.invalid&&(e.form.controls.button.dirty||e.form.controls.button.touched)),o(4),a("Link (",e.lang.lang,")"),o(2),m("ngIf",e.form.controls.link.invalid&&(e.form.controls.link.dirty||e.form.controls.link.touched)),o(4),a("Short Description (",e.lang.lang,")"),o(2),m("ngIf",e.form.controls.short_description.invalid&&(e.form.controls.short_description.dirty||e.form.controls.short_description.touched)),o(4),a("Long Description (",e.lang.lang,")"),o(),m("Defaultvalue",(f=e.default)!==null&&f!==void 0?f:""),o(),m("ngIf",e.form.controls.long_description.invalid&&(e.form.controls.long_description.dirty||e.form.controls.long_description.touched)),o(4),a("Requisitos (",e.lang.lang,")"),o(),m("Defaultvalue",(v=e.requirements)!==null&&v!==void 0?v:""),o(),m("ngIf",e.form.controls.requirements.invalid&&(e.form.controls.requirements.dirty||e.form.controls.requirements.touched)),o(2),m("disabled",e.formLoader)}},dependencies:[L,I,F,U,w,W,G,D,O,k,V,R,A,B,Y,z],encapsulation:2});let n=d;return n})();export{ye as CourseEditComponent};
