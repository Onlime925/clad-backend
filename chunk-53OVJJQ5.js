import{a as V}from"./chunk-Y2ZOMBQX.js";import"./chunk-HCY5TO24.js";import"./chunk-IW3LY66T.js";import{c as U,h as k,s as j,t as I,x as F}from"./chunk-565UEWQH.js";import{$a as L,Ka as c,La as f,W as E,Wa as _,Ya as h,_a as m,ab as g,bb as S,cb as o,db as n,ea as u,eb as b,fa as x,hb as C,ib as v,jb as s,ob as l,pb as p,sb as w,ub as T,wb as y}from"./chunk-B5DXUUC7.js";import"./chunk-4CLCTAJ7.js";var D=(e,a)=>a.id,N=e=>({active:e});function $(e,a){e&1&&(o(0,"a",14),l(1,"Add New"),n())}function M(e,a){e&1&&(o(0,"td",24),l(1,"Loading"),n())}function O(e,a){if(e&1&&(o(0,"a",28),b(1,"i",30),n()),e&2){let t=s().$implicit;h("routerLink","/admin/users/edit/"+t.id)}}function A(e,a){if(e&1){let t=C();o(0,"a",31),v("click",function(){u(t);let r=s().$implicit,d=s(4);return x(d.onDelete(r.id))}),b(1,"i",32),n()}}function P(e,a){if(e&1&&(o(0,"tr")(1,"td",23),l(2),n(),o(3,"td"),l(4),n(),o(5,"td"),l(6),n(),o(7,"td"),l(8),n(),o(9,"td",26)(10,"div",27),_(11,O,2,1,"a",28)(12,A,2,0,"a",29),n()()()),e&2){let t=a.$implicit,i=s(4);c(2),p(t.id),c(2),p(t.name),c(2),p(t.email),c(2),p(t.date),c(3),m(i.service.adminService.p.includes("users.edit")?11:-1),c(),m(i.service.adminService.p.includes("users.delete")?12:-1)}}function W(e,a){if(e&1&&g(0,P,13,6,"tr",null,D),e&2){let t=s(3);S(t.dataSource==null?null:t.dataSource.data)}}function R(e,a){if(e&1&&_(0,W,2,0),e&2){let t=s(2);m(t.dataSource!=null&&t.dataSource.data?0:-1)}}function B(e,a){if(e&1){let t=C();o(0,"li",34)(1,"button",35),v("click",function(){let r=u(t).$implicit,d=s(4);return x(d.handlePage(r))}),l(2),n()()}if(e&2){let t=a.$implicit,i=s(4);c(),h("ngClass",y(2,N,t==i.options.page)),c(),p(t)}}function H(e,a){if(e&1&&g(0,B,3,4,"li",34,L),e&2){let t=s(3);S(t.dataSource==null?null:t.dataSource.links)}}function q(e,a){if(e&1&&(o(0,"div",25)(1,"ul",33),_(2,H,2,0),n()()),e&2){let t=s(2);c(2),m(t.dataSource.links?2:-1)}}function z(e,a){if(e&1){let t=C();o(0,"div",16)(1,"div",17)(2,"p"),l(3),n()(),o(4,"div",18)(5,"input",19),v("input",function(r){u(t);let d=s();return x(d.handleSearch(r))}),n()()(),o(6,"div",20)(7,"table",21)(8,"thead",22)(9,"tr")(10,"th",23),l(11,"#"),n(),o(12,"th",23),l(13,"Name"),n(),o(14,"th",23),l(15,"Email"),n(),o(16,"th",23),l(17,"Date"),n(),o(18,"th",23),l(19,"Action"),n()()(),o(20,"tbody",22),_(21,M,2,0,"td",24)(22,R,1,1),n()(),_(23,q,3,1,"div",25),n()}if(e&2){let t,i=s();c(3),w("Showing ",(t=i.dataSource==null?null:i.dataSource.from)!==null&&t!==void 0?t:0," to ",(t=i.dataSource==null?null:i.dataSource.to)!==null&&t!==void 0?t:0," of ",(t=i.dataSource==null?null:i.dataSource.total)!==null&&t!==void 0?t:0," entries"),c(18),m(i.loader?21:22),c(2),m(i.service.adminService.p.includes("users.list")?23:-1)}}var ie=(()=>{let a=class a{constructor(i,r,d){this.service=i,this.notification=r,this.router=d,this.loader=!1,this.dataSource={},this.options={page:1,limit:10}}ngOnInit(){this.getList()}getList(){this.loader=!0,this.service.list(this.options).subscribe({next:i=>{this.dataSource=i.data,this.loader=!1},error:i=>{this.notification.error("Something Went Wrong"),this.loader=!1}})}handleSearch(i){let r=i.target;this.options.search=r.value,this.getList()}handlePage(i){this.options.page=i,this.getList()}onDelete(i){this.loader=!0,this.service.delete(i).subscribe({next:r=>{this.notification.success(r.message),this.getList()},error:r=>{let d=r.error;d?d.errors?this.notification.error(Object.values(d.errors)[0]):this.notification.error(d.message):this.notification.error("Something Went Wrong"),this.loader=!1}})}};a.\u0275fac=function(r){return new(r||a)(f(V),f(F),f(j))},a.\u0275cmp=E({type:a,selectors:[["app-slider-list"]],standalone:!0,features:[T],decls:21,vars:2,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info","d-flex","justify-content-between","justify-content-center","align-items-center"],[1,"mb-0","text-white"],["routerLink","/admin/users/create",1,"btn","btn-primary"],[1,"card-body","p-4"],[1,"d-flex","justify-content-between","pb-3"],[1,"text-end"],[1,"d-flex","justify-content-center","align-items-center"],["id","search","placeholder","Search",1,"form-control",3,"input"],[1,"table-responsive"],[1,"table","border","table-striped"],[1,"text-nowrap","text-truncate"],[1,"text-center"],["colspan","5",1,"text-center"],["id","example23_paginate",1,"dataTables_paginate","paging_simple_numbers","pt-3"],[1,"text-center","text-nowrap"],[1,"bt-group"],["title","Edit",1,"me-2","btn","btn-info","text-white",3,"routerLink"],["title","Delete",1,"btn","btn-danger","text-white"],[1,"icon","mdi","mdi-grease-pencil"],["title","Delete",1,"btn","btn-danger","text-white",3,"click"],[1,"icon","mdi","mdi-delete"],[1,"pagination",2,"justify-content","center"],[1,"paginate_button","page-item"],[1,"page-link",3,"click","ngClass"]],template:function(r,d){r&1&&(o(0,"div",0)(1,"div",1)(2,"h4",2),l(3,"All Users"),n()(),o(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),l(9,"Home"),n()(),o(10,"li",8),l(11,"Users"),n()()()()(),o(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),l(17,"All Users List"),n(),_(18,$,2,0,"a",14),n(),o(19,"div",15),_(20,z,24,5),n()()()()),r&2&&(c(18),m(d.service.adminService.p.includes("users.create")?18:-1),c(2),m(d.service.adminService.p.includes("users.list")?20:-1))},dependencies:[I,k,U],styles:[`.paginate_button[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{
    background-color: #03a9f3;
    color: white;
  }`]});let e=a;return e})();export{ie as UserListComponent};
