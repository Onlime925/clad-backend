import{a as M}from"./chunk-2CEFICMH.js";import"./chunk-EVSWH7AD.js";import"./chunk-76JPYSWO.js";import{c as j,f as D,p as F,q as N,u as V}from"./chunk-QLBEZW53.js";import{Aa as u,La as _,Na as f,Pa as x,Qa as k,Ra as b,Sa as C,Ta as e,Ua as t,Va as h,W as w,Ya as E,Za as g,_a as m,da as S,db as a,ea as v,eb as y,fb as p,hb as T,jb as I,lb as P,ua as L,za as d}from"./chunk-R3V5JELH.js";import"./chunk-4CLCTAJ7.js";var $=(n,r)=>r.id,A=n=>({active:n});function W(n,r){n&1&&(e(0,"td",24),a(1,"Loading"),t())}function R(n,r){if(n&1){let i=E();e(0,"tr")(1,"td",23),a(2),t(),e(3,"td"),h(4,"img",27),t(),e(5,"td"),a(6),t(),e(7,"td"),a(8),t(),e(9,"td"),a(10),t(),e(11,"td"),a(12),t(),e(13,"td"),a(14),t(),e(15,"td",28)(16,"div",29)(17,"a",30),h(18,"i",31),t(),e(19,"a",32),g("click",function(){let s=S(i).$implicit,o=m(3);return v(o.onDelete(s.id))}),h(20,"i",33),t()()()()}if(n&2){let i=r.$implicit;d(2),y(i.id),d(2),f("src",i.thumbnail_prev,L),d(2),p(" ",i.category," "),d(2),p(" ",i.title," "),d(2),p(" ",i.date," "),d(2),p(" ",i.is_featured?"Yes":"No"," "),d(2),p(" ",i.status?"Enable":"Disable"," "),d(3),f("routerLink","/admin/posts/edit/"+i.id)}}function z(n,r){if(n&1&&b(0,R,21,8,"tr",null,$),n&2){let i=m(2);C(i.dataSource==null?null:i.dataSource.data)}}function B(n,r){if(n&1&&_(0,z,2,0),n&2){let i=m();x(i.dataSource!=null&&i.dataSource.data?0:-1)}}function H(n,r){if(n&1){let i=E();e(0,"li",34)(1,"button",35),g("click",function(){let s=S(i).$implicit,o=m(2);return v(o.handlePage(s))}),a(2),t()()}if(n&2){let i=r.$implicit,l=m(2);d(),f("ngClass",P(2,A,i==l.options.page)),d(),y(i)}}function U(n,r){if(n&1&&b(0,H,3,4,"li",34,k),n&2){let i=m();C(i.dataSource==null?null:i.dataSource.links)}}var te=(()=>{let r=class r{constructor(l,s,o){this.service=l,this.notification=s,this.router=o,this.loader=!1,this.dataSource={},this.options={type:"post",page:1,limit:10}}ngOnInit(){this.getList()}getList(){this.loader=!0,this.service.list(this.options).subscribe({next:l=>{this.dataSource=l.data,this.loader=!1},error:l=>{this.notification.error("Something Went Wrong"),this.loader=!1}})}handleSearch(l){let s=l.target;this.options.search=s.value,this.getList()}handlePage(l){this.options.page=l,this.getList()}onDelete(l){this.loader=!0,this.service.delete(l).subscribe({next:s=>{this.notification.success(s.message),this.getList()},error:s=>{let o=s.error;o?o.errors?this.notification.error(Object.values(o.errors)[0]):this.notification.error(o.message):this.notification.error("Something Went Wrong"),this.loader=!1}})}};r.\u0275fac=function(s){return new(s||r)(u(M),u(V),u(F))},r.\u0275cmp=w({type:r,selectors:[["app-slider-list"]],standalone:!0,features:[I],decls:53,vars:5,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info","d-flex","justify-content-between","justify-content-center","align-items-center"],[1,"mb-0","text-white"],["routerLink","/admin/posts/create",1,"btn","btn-primary"],[1,"card-body","p-4"],[1,"d-flex","justify-content-between","pb-3"],[1,"text-end"],[1,"d-flex","justify-content-center","align-items-center"],["id","search","placeholder","Search",1,"form-control",3,"keypress"],[1,"table-responsive"],[1,"table","border","table-striped"],[1,"text-nowrap","text-truncate"],[1,"text-center"],["colspan","5",1,"text-center"],["id","example23_paginate",1,"dataTables_paginate","paging_simple_numbers","pt-3"],[1,"pagination",2,"justify-content","center"],[2,"width","50px","height","50px",3,"src"],[1,"text-center","text-nowrap"],[1,"bt-group"],["title","Edit",1,"me-2","btn","btn-info","text-white",3,"routerLink"],[1,"icon","mdi","mdi-grease-pencil"],["title","Delete",1,"btn","btn-danger","text-white",3,"click"],[1,"icon","mdi","mdi-delete"],[1,"paginate_button","page-item"],[1,"page-link",3,"click","ngClass"]],template:function(s,o){if(s&1&&(e(0,"div",0)(1,"div",1)(2,"h4",2),a(3,"All Destacados"),t()(),e(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),a(9,"Home"),t()(),e(10,"li",8),a(11,"Destacados"),t()()()()(),e(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),a(17,"All Destacados List"),t(),e(18,"a",14),a(19,"Add New"),t()(),e(20,"div",15)(21,"div",16)(22,"div",17)(23,"p"),a(24),t()(),e(25,"div",18)(26,"input",19),g("keypress",function(O){return o.handleSearch(O)}),t()()(),e(27,"div",20)(28,"table",21)(29,"thead",22)(30,"tr")(31,"th",23),a(32,"#"),t(),e(33,"th",23),a(34,"Image"),t(),e(35,"th",23),a(36,"Category"),t(),e(37,"th",23),a(38,"Title"),t(),e(39,"th",23),a(40,"Date"),t(),e(41,"th",23),a(42,"Featured"),t(),e(43,"th",23),a(44,"Status"),t(),e(45,"th",23),a(46,"Action"),t()()(),e(47,"tbody",22),_(48,W,2,0,"td",24)(49,B,1,1),t()(),e(50,"div",25)(51,"ul",26),_(52,U,2,0),t()()()()()()()),s&2){let c;d(24),T("Showing ",(c=o.dataSource==null?null:o.dataSource.from)!==null&&c!==void 0?c:0," to ",(c=o.dataSource==null?null:o.dataSource.to)!==null&&c!==void 0?c:0," of ",(c=o.dataSource==null?null:o.dataSource.total)!==null&&c!==void 0?c:0," entries"),d(24),x(o.loader?48:49),d(4),x(o.dataSource.links?52:-1)}},dependencies:[N,D,j],styles:[`.paginate_button[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{
    background-color: #03a9f3;
    color: white;
  }`]});let n=r;return n})();export{te as PostListComponent};