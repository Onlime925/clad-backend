import{a as K}from"./chunk-4GYF56SC.js";import{a as J}from"./chunk-5WZG23BL.js";import{a as z}from"./chunk-M7CLMUIA.js";import"./chunk-XPEQJFWN.js";import{a as q,b as s,c as V,d as A,f as G,g as H,h as O,i as W,j as k,k as B,l as R,m as U,n as Y}from"./chunk-AMHWS7FZ.js";import{a as $}from"./chunk-UVG6VTVB.js";import"./chunk-6DKBZJ63.js";import{a as w}from"./chunk-HQ7V5JS5.js";import{e as j}from"./chunk-3IEMDY3T.js";import{Ja as N,La as M,Oa as P,S as n,T as u,X as p,Y as m,aa as I,ba as F,ca as T,da as i,db as D,ea as t,fa as C,ja as S,ka as f,pa as r,qa as x,ra as d,wa as L,ya as y,z as E}from"./chunk-UFGFQ7NC.js";import{d as b}from"./chunk-4CLCTAJ7.js";var Q=o=>({"d-none":o});function Z(o,l){if(o&1&&(i(0,"div",36),r(1),t()),o&2){let a=f();n(),d(" ",a.myFormService.getErrorMessage(a.form.controls.title)," ")}}function ee(o,l){if(o&1&&(i(0,"option",25),r(1),t()),o&2){let a=l.$implicit;m("value",a.id),n(),x(a.title)}}function te(o,l){if(o&1&&(i(0,"div",36),r(1),t()),o&2){let a=f();n(),d(" ",a.myFormService.getErrorMessage(a.form.controls.category_id)," ")}}function ie(o,l){if(o&1&&(i(0,"div",36),r(1),t()),o&2){let a=f();n(),d(" ",a.myFormService.getErrorMessage(a.form.controls.status)," ")}}function oe(o,l){if(o&1&&(i(0,"div",36),r(1),t()),o&2){let a=f();n(),d(" ",a.myFormService.getErrorMessage(a.form.controls.featured)," ")}}function re(o,l){if(o&1&&(i(0,"div",36),r(1),t()),o&2){let a=f();n(),d(" ",a.myFormService.getErrorMessage(a.form.controls.thumbnail)," ")}}function ne(o,l){if(o&1&&(i(0,"div",36),r(1),t()),o&2){let a=f();n(),d(" ",a.myFormService.getErrorMessage(a.form.controls.short_description)," ")}}function ae(o,l){if(o&1&&(i(0,"div",36),r(1),t()),o&2){let a=f();n(),x(a.myFormService.getErrorMessage(a.form.controls.long_description))}}var Se=(()=>{let l=class l{constructor(g,c,e,_,h,v){this.fb=g,this.notification=c,this.myFormService=e,this.service=_,this.websiteService=h,this.lang=v,this.formLoader=!0,this.form=this.fb.group({title:["",[s.required,s.maxLength(500)]],category_id:["",[s.required,s.maxLength(100)]],short_description:["",[s.required,s.maxLength(500)]],thumbnail:["",s.required],featured:["",s.required],status:["",s.required],long_description:["",[s.required,s.maxLength(2e4)]]}),this.myFormService.setForm(this.form),this.websiteService.get_categories().subscribe(X=>{this.categories=X.data.data})}ngOnInit(){this.formLoader=!1}onSubmit(){return b(this,null,function*(){if(this.form.valid){let g=this.form.value;g.type="post",this.formLoader=!0,this.service.update(g).subscribe({next:c=>{this.notification.success(c.message),this.form.reset(),this.formLoader=!1},error:c=>{let e=c.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})}else this.form.markAllAsTouched(),this.formLoader=!1,this.notification.error("Validation Failed")})}};l.\u0275fac=function(c){return new(c||l)(u(R),u(D),u(K),u($),u(w),u(j))},l.\u0275cmp=E({type:l,selectors:[["app-slider-create"]],standalone:!0,features:[L],decls:84,vars:21,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"text-center",3,"ngClass"],[1,"row","pt-3",3,"ngClass"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["formControlName","title","placeholder","Title",1,"form-control"],["class","text-danger",4,"ngIf"],["formControlName","category_id",1,"form-control"],["value",""],[3,"value"],["formControlName","status",1,"form-control"],["value","1"],["value","0"],["formControlName","featured",1,"form-control"],[3,"imgHanle","image"],[1,"col-md-12"],["formControlName","short_description","placeholder","Short Description",1,"form-control"],["value","",3,"editorChange"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white",3,"disabled"],[1,"text-danger"]],template:function(c,e){c&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),r(3,"Create Destacados"),t()(),i(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),r(9,"Home"),t()(),i(10,"li",8),r(11,"Destacados"),t()()()()(),i(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),r(17,"Create Destacados Form"),t()(),i(18,"div",14)(19,"form",15),S("ngSubmit",function(){return e.onSubmit()}),i(20,"p",16),r(21,"Loader"),t(),i(22,"div",17)(23,"div",18)(24,"div",19)(25,"label",20),r(26),t(),C(27,"input",21),p(28,Z,2,1,"div",22),t()(),i(29,"div",18)(30,"div",19)(31,"label",20),r(32),t(),i(33,"select",23)(34,"option",24),r(35,"Select Category"),t(),F(36,ee,2,2,"option",25,I),t(),p(38,te,2,1,"div",22),t()(),i(39,"div",18)(40,"div",19)(41,"label",20),r(42,"Status"),t(),i(43,"select",26)(44,"option",24),r(45,"Select Status"),t(),i(46,"option",27),r(47,"Enable"),t(),i(48,"option",28),r(49,"Disable"),t()(),p(50,ie,2,1,"div",22),t()(),i(51,"div",18)(52,"div",19)(53,"label",20),r(54,"Is Featured"),t(),i(55,"select",29)(56,"option",24),r(57,"Select Featured"),t(),i(58,"option",27),r(59,"Yes"),t(),i(60,"option",28),r(61,"No"),t()(),p(62,oe,2,1,"div",22),t()(),i(63,"div",18)(64,"div",19)(65,"label",20),r(66),t(),i(67,"app-img-uploader",30),S("imgHanle",function(h){let v;return(v=e.form.get("thumbnail"))==null?null:v.patchValue(h.path)}),t(),p(68,re,2,1,"div",22),t()(),i(69,"div",31)(70,"div",19)(71,"label",20),r(72),t(),C(73,"input",32),p(74,ne,2,1,"div",22),t()(),i(75,"div",31)(76,"div",19)(77,"label",20),r(78),t(),i(79,"app-my-editor",33),S("editorChange",function(h){let v;return(v=e.form.get("long_description"))==null?null:v.patchValue(h)}),t(),p(80,ae,2,1,"div",22),t()(),i(81,"div",34)(82,"button",35),r(83,"Submit"),t()()()()()()()()),c&2&&(n(19),m("formGroup",e.form),n(),m("ngClass",y(17,Q,!e.formLoader)),n(2),m("ngClass",y(19,Q,e.formLoader)),n(4),d("Title (",e.lang.lang,")"),n(2),m("ngIf",e.form.controls.title.invalid&&(e.form.controls.title.dirty||e.form.controls.title.touched)),n(4),d("Category (",e.lang.lang,")"),n(4),T(e.categories),n(2),m("ngIf",e.form.controls.category_id.invalid&&(e.form.controls.category_id.dirty||e.form.controls.category_id.touched)),n(12),m("ngIf",e.form.controls.status.invalid&&(e.form.controls.status.dirty||e.form.controls.status.touched)),n(12),m("ngIf",e.form.controls.featured.invalid&&(e.form.controls.featured.dirty||e.form.controls.featured.touched)),n(4),d("Thumbnail (",e.lang.lang,")"),n(),m("image",""),n(),m("ngIf",e.form.controls.thumbnail.invalid&&(e.form.controls.thumbnail.dirty||e.form.controls.thumbnail.touched)),n(4),d("Short Description (",e.lang.lang,")"),n(2),m("ngIf",e.form.controls.short_description.invalid&&(e.form.controls.short_description.dirty||e.form.controls.short_description.touched)),n(4),d("Long Description (",e.lang.lang,")"),n(2),m("ngIf",e.form.controls.long_description.invalid&&(e.form.controls.long_description.dirty||e.form.controls.long_description.touched)),n(2),m("disabled",e.formLoader))},dependencies:[P,N,M,Y,G,k,B,q,W,V,A,H,O,U,z,J],encapsulation:2});let o=l;return o})();export{Se as PostCreateComponent};
