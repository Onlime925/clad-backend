import{a as X}from"./chunk-P6ZXMWCR.js";import{a as Q}from"./chunk-7LM6AL6S.js";import{a as K}from"./chunk-FAODHUA2.js";import"./chunk-NF7X6UKL.js";import{a as R,b as c,c as A,d as O,f as W,g as G,h as H,i as k,j as B,k as U,l as Y,m as $,n as z}from"./chunk-AFWRT4PF.js";import{a as J}from"./chunk-6H5QNEJV.js";import"./chunk-TT6UXURR.js";import{a as q}from"./chunk-Y7BJZE3W.js";import{e as V}from"./chunk-7H5UCHC4.js";import{c as w}from"./chunk-V37MTAIH.js";import{Ja as T,La as M,Oa as j,S as n,T as u,X as g,Xa as D,Y as s,Za as P,aa as C,ba as I,ca as F,da as i,ea as t,fa as b,ja as S,ka as h,pa as r,qa as L,ra as m,wa as N,ya as y,z as x}from"./chunk-J2G6KBBC.js";import{d as E}from"./chunk-4CLCTAJ7.js";var Z=o=>({"d-none":o});function oe(o,l){if(o&1&&(i(0,"div",36),r(1),t()),o&2){let a=h();n(),m(" ",a.myFormService.getErrorMessage(a.form.controls.title)," ")}}function re(o,l){if(o&1&&(i(0,"option",25),r(1),t()),o&2){let a=l.$implicit;s("value",a.id),n(),L(a.title)}}function ne(o,l){if(o&1&&(i(0,"div",36),r(1),t()),o&2){let a=h();n(),m(" ",a.myFormService.getErrorMessage(a.form.controls.category_id)," ")}}function ae(o,l){if(o&1&&(i(0,"div",36),r(1),t()),o&2){let a=h();n(),m(" ",a.myFormService.getErrorMessage(a.form.controls.status)," ")}}function le(o,l){if(o&1&&(i(0,"div",36),r(1),t()),o&2){let a=h();n(),m(" ",a.myFormService.getErrorMessage(a.form.controls.featured)," ")}}function de(o,l){if(o&1&&(i(0,"div",36),r(1),t()),o&2){let a=h();n(),m(" ",a.myFormService.getErrorMessage(a.form.controls.thumbnail)," ")}}function se(o,l){if(o&1&&(i(0,"div",36),r(1),t()),o&2){let a=h();n(),m(" ",a.myFormService.getErrorMessage(a.form.controls.short_description)," ")}}function me(o,l){if(o&1&&(i(0,"div",36),r(1),t()),o&2){let a=h();n(),m(" ",a.myFormService.getErrorMessage(a.form.controls.long_description)," ")}}var Ce=(()=>{let l=class l{constructor(p,d,e,v,f,_,ee,te){this.fb=p,this.notification=d,this.myFormService=e,this.service=v,this.route=f,this.router=_,this.lang=ee,this.websiteService=te,this.default="",this.formLoader=!1,this.editId="",this.categories=[],this.form=this.fb.group({title:["",[c.required,c.maxLength(500)]],category_id:["",[c.required,c.maxLength(100)]],short_description:["",[c.required,c.maxLength(500)]],thumbnail:["",c.required],featured:["",c.required],status:["",c.required],long_description:["",[c.required,c.maxLength(2e4)]]}),this.websiteService.get_categories().subscribe(ie=>{this.categories=ie.data.data})}ngOnInit(){this.route.paramMap.subscribe(p=>{this.editId=p.get("id"),this.getRecord(this.editId)})}getRecord(p){return E(this,null,function*(){this.formLoader=!0,this.service.list({type:"post",id:Number(this.editId),limit:1}).subscribe({next:d=>{let e=d.data.data[0];this.form.patchValue({title:e.title,short_description:e.short_description,long_description:e.long_description,thumbnail:e.thumbnail,status:e.status,featured:e.is_featured,category_id:e.category_id}),this.default=e.long_description,this.notification.success(d.message),this.formLoader=!1},error:d=>{let e=d.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.formLoader=!1,this.router.navigate(["/admin/dashboard"])}})})}onSubmit(){return E(this,null,function*(){if(this.form.valid){let p=this.form.value;p.type="post",p.id=this.editId,this.formLoader=!0,this.service.update(p).subscribe({next:d=>{this.formLoader=!1,this.notification.success(d.message),this.getRecord(this.editId),this.formLoader=!1},error:d=>{let e=d.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})}else this.formLoader=!1,this.form.markAllAsTouched(),this.notification.error("Validation Failed")})}};l.\u0275fac=function(d){return new(d||l)(u(Y),u(w),u(X),u(J),u(D),u(P),u(V),u(q))},l.\u0275cmp=x({type:l,selectors:[["app-post-edit"]],standalone:!0,features:[N],decls:84,vars:22,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[1,"text-center",3,"ngClass"],[3,"ngSubmit","ngClass","formGroup"],[1,"row","pt-3"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["formControlName","title","placeholder","Title",1,"form-control"],["class","text-danger",4,"ngIf"],["formControlName","category_id",1,"form-control"],["value",""],[3,"value"],["formControlName","status",1,"form-control"],["value","1"],["value","0"],["formControlName","featured",1,"form-control"],[3,"imgHanle","image"],[1,"col-md-12"],["formControlName","short_description","placeholder","Short Description",1,"form-control"],["name","long_description",3,"editorChange","Defaultvalue"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white",3,"disabled"],[1,"text-danger"]],template:function(d,e){if(d&1&&(i(0,"div",0)(1,"div",1)(2,"h4",2),r(3,"Edit Destacados"),t()(),i(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),r(9,"Home"),t()(),i(10,"li",8),r(11,"Destacados"),t()()()()(),i(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),r(17,"Edit Destacados Form"),t()(),i(18,"div",14)(19,"p",15),r(20,"Loader"),t(),i(21,"form",16),S("ngSubmit",function(){return e.onSubmit()}),i(22,"div",17)(23,"div",18)(24,"div",19)(25,"label",20),r(26),t(),b(27,"input",21),g(28,oe,2,1,"div",22),t()(),i(29,"div",18)(30,"div",19)(31,"label",20),r(32),t(),i(33,"select",23)(34,"option",24),r(35,"Select Category"),t(),I(36,re,2,2,"option",25,C),t(),g(38,ne,2,1,"div",22),t()(),i(39,"div",18)(40,"div",19)(41,"label",20),r(42,"Status"),t(),i(43,"select",26)(44,"option",24),r(45,"Select Status"),t(),i(46,"option",27),r(47,"Enable"),t(),i(48,"option",28),r(49,"Disable"),t()(),g(50,ae,2,1,"div",22),t()(),i(51,"div",18)(52,"div",19)(53,"label",20),r(54,"Is Featured"),t(),i(55,"select",29)(56,"option",24),r(57,"Select Featured"),t(),i(58,"option",27),r(59,"Yes"),t(),i(60,"option",28),r(61,"No"),t()(),g(62,le,2,1,"div",22),t()(),i(63,"div",18)(64,"div",19)(65,"label",20),r(66),t(),i(67,"app-img-uploader",30),S("imgHanle",function(f){return e.form.controls.thumbnail.patchValue(f.path)}),t(),g(68,de,2,1,"div",22),t()(),i(69,"div",31)(70,"div",19)(71,"label",20),r(72),t(),b(73,"input",32),g(74,se,2,1,"div",22),t()(),i(75,"div",31)(76,"div",19)(77,"label",20),r(78),t(),i(79,"app-my-editor",33),S("editorChange",function(f){let _;return(_=e.form.get("long_description"))==null?null:_.patchValue(f)}),t(),g(80,me,2,1,"div",22),t()(),i(81,"div",34)(82,"button",35),r(83,"Submit"),t()()()()()()()()),d&2){let v,f;n(19),s("ngClass",y(18,Z,!e.formLoader)),n(2),s("ngClass",y(20,Z,e.formLoader))("formGroup",e.form),n(5),m("Title (",e.lang.lang,")"),n(2),s("ngIf",e.form.controls.title.invalid&&(e.form.controls.title.dirty||e.form.controls.title.touched)),n(4),m("Category (",e.lang.lang,")"),n(4),F(e.categories),n(2),s("ngIf",e.form.controls.category_id.invalid&&(e.form.controls.category_id.dirty||e.form.controls.category_id.touched)),n(12),s("ngIf",e.form.controls.status.invalid&&(e.form.controls.status.dirty||e.form.controls.status.touched)),n(12),s("ngIf",e.form.controls.featured.invalid&&(e.form.controls.featured.dirty||e.form.controls.featured.touched)),n(4),m("Thumbnail (",e.lang.lang,")"),n(),s("image",(v=e.form.controls.thumbnail.value)!==null&&v!==void 0?v:""),n(),s("ngIf",e.form.controls.thumbnail.invalid&&(e.form.controls.thumbnail.dirty||e.form.controls.thumbnail.touched)),n(4),m("Short Description (",e.lang.lang,")"),n(2),s("ngIf",e.form.controls.short_description.invalid&&(e.form.controls.short_description.dirty||e.form.controls.short_description.touched)),n(4),m("Long Description (",e.lang.lang,")"),n(),s("Defaultvalue",(f=e.default)!==null&&f!==void 0?f:""),n(),s("ngIf",e.form.controls.long_description.invalid&&(e.form.controls.long_description.dirty||e.form.controls.long_description.touched)),n(2),s("disabled",e.formLoader)}},dependencies:[j,T,M,z,W,B,U,R,k,A,O,G,H,$,K,Q],encapsulation:2});let o=l;return o})();export{Ce as PostEditComponent};
