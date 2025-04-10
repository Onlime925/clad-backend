import{a as A}from"./chunk-4GYF56SC.js";import"./chunk-5WZG23BL.js";import"./chunk-M7CLMUIA.js";import"./chunk-XPEQJFWN.js";import{a as W}from"./chunk-HYVPPTMC.js";import{a as N,b as c,c as j,d as M,f as U,g as T,h as D,l as G,m as V,n as q}from"./chunk-AMHWS7FZ.js";import"./chunk-6DKBZJ63.js";import{a as L}from"./chunk-HQ7V5JS5.js";import{e as _}from"./chunk-3IEMDY3T.js";import{Ja as E,La as F,Oa as w,S as n,T as d,X as p,Y as l,da as r,db as I,ea as t,fa as v,ja as x,ka as u,pa as o,ra as g,wa as y,ya as h,z as C}from"./chunk-UFGFQ7NC.js";import{d as b}from"./chunk-4CLCTAJ7.js";var O=i=>({"d-none":i});function H(i,m){if(i&1&&(r(0,"div",27),o(1),t()),i&2){let s=u();n(),g(" ",s.myFormService.getErrorMessage(s.form.controls.name)," ")}}function P(i,m){if(i&1&&(r(0,"div",27),o(1),t()),i&2){let s=u();n(),g(" ",s.myFormService.getErrorMessage(s.form.controls.email)," ")}}function R(i,m){if(i&1&&(r(0,"div",27),o(1),t()),i&2){let s=u();n(),g(" ",s.myFormService.getErrorMessage(s.form.controls.password)," ")}}var ae=(()=>{let m=class m{constructor(f,a,e,S,k,B){this.fb=f,this.notification=a,this.myFormService=e,this.service=S,this.websiteService=k,this.lang=B,this.formLoader=!0,this.form=this.fb.group({name:["",[c.required,c.maxLength(100)]],email:["",[c.required,c.maxLength(100)]],password:["",[c.required,c.maxLength(300)]]}),this.myFormService.setForm(this.form)}ngOnInit(){this.formLoader=!1}onSubmit(){return b(this,null,function*(){if(this.form.valid){let f=this.form.value;this.formLoader=!0,this.service.store(f).subscribe({next:a=>{this.notification.success(a.message),this.form.reset(),this.formLoader=!1},error:a=>{let e=a.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})}else this.form.markAllAsTouched(),this.formLoader=!1,this.notification.error("Validation Failed")})}};m.\u0275fac=function(a){return new(a||m)(d(G),d(I),d(A),d(W),d(L),d(_))},m.\u0275cmp=C({type:m,selectors:[["app-admin-user-create"]],standalone:!0,features:[y],decls:44,vars:11,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"text-center",3,"ngClass"],[1,"row","pt-3",3,"ngClass"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["formControlName","name","placeholder","Name",1,"form-control"],["class","text-danger",4,"ngIf"],["formControlName","email","placeholder","Email",1,"form-control"],["type","password","formControlName","password","placeholder","password",1,"form-control"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white",3,"disabled"],[1,"text-danger"]],template:function(a,e){a&1&&(r(0,"div",0)(1,"div",1)(2,"h4",2),o(3,"Create User"),t()(),r(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),o(9,"Home"),t()(),r(10,"li",8),o(11,"Users"),t()()()()(),r(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),o(17,"Create User Form"),t()(),r(18,"div",14)(19,"form",15),x("ngSubmit",function(){return e.onSubmit()}),r(20,"p",16),o(21,"Loader"),t(),r(22,"div",17)(23,"div",18)(24,"div",19)(25,"label",20),o(26,"Name"),t(),v(27,"input",21),p(28,H,2,1,"div",22),t()(),r(29,"div",18)(30,"div",19)(31,"label",20),o(32,"Email"),t(),v(33,"input",23),p(34,P,2,1,"div",22),t()(),r(35,"div",18)(36,"div",19)(37,"label",20),o(38,"Password"),t(),v(39,"input",24),p(40,R,2,1,"div",22),t()(),r(41,"div",25)(42,"button",26),o(43,"Submit"),t()()()()()()()()),a&2&&(n(19),l("formGroup",e.form),n(),l("ngClass",h(7,O,!e.formLoader)),n(2),l("ngClass",h(9,O,e.formLoader)),n(6),l("ngIf",e.form.controls.name.invalid&&(e.form.controls.name.dirty||e.form.controls.name.touched)),n(6),l("ngIf",e.form.controls.email.invalid&&(e.form.controls.email.dirty||e.form.controls.email.touched)),n(6),l("ngIf",e.form.controls.password.invalid&&(e.form.controls.password.dirty||e.form.controls.password.touched)),n(2),l("disabled",e.formLoader))},dependencies:[w,E,F,q,U,N,j,M,T,D,V],encapsulation:2});let i=m;return i})();export{ae as UserCreateComponent};
