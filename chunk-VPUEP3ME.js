import{a as N}from"./chunk-3U2FLW46.js";import"./chunk-5EBI5SRX.js";import"./chunk-ZQOR2YH6.js";import{c as j,f as F,q as P,r as V,t as U,v as M}from"./chunk-KH3O32EG.js";import{$a as L,Fa as b,Ka as c,La as _,W as w,Wa as x,Ya as u,_a as f,ab as E,bb as y,cb as e,db as t,ea as v,eb as h,fa as C,hb as k,ib as S,jb as s,ob as n,pb as p,qb as g,sb as D,ub as T,wb as I}from"./chunk-D2L33MOK.js";import"./chunk-4CLCTAJ7.js";var $=(o,d)=>d.id,A=o=>({active:o});function W(o,d){o&1&&(e(0,"td",24),n(1,"Loading"),t())}function z(o,d){if(o&1){let l=k();e(0,"tr")(1,"td",23),n(2),t(),e(3,"td"),h(4,"img",27),t(),e(5,"td"),n(6),t(),e(7,"td"),n(8),t(),e(9,"td"),n(10),t(),e(11,"td")(12,"a",28),n(13,"Pdf"),t()(),e(14,"td"),n(15),t(),e(16,"td"),n(17),t(),e(18,"td"),n(19),t(),e(20,"td",29)(21,"div",30)(22,"a",31),h(23,"i",32),t(),e(24,"a",33),S("click",function(){let i=v(l).$implicit,a=s(3);return C(a.onDelete(i.id))}),h(25,"i",34),t()()()()}if(o&2){let l,r,i=d.$implicit,a=s(3);c(2),p(i.id),c(2),u("src",a.apiUrl+"/"+i.thumbnail,b),c(2),p(i.title),c(2),p(i.country),c(2),p(i.topic),c(2),u("href",a.apiUrl+"/"+i.pdf,b),c(3),g(" ",(l=i.like)!==null&&l!==void 0?l:0,""),c(2),g(" ",(r=i.views)!==null&&r!==void 0?r:0,""),c(2),g(" ",i.date,""),c(3),u("routerLink","/admin/document/edit/"+i.id)}}function R(o,d){if(o&1&&E(0,z,26,10,"tr",null,$),o&2){let l=s(2);y(l.dataSource==null?null:l.dataSource.data)}}function B(o,d){if(o&1&&x(0,R,2,0),o&2){let l=s();f(l.dataSource!=null&&l.dataSource.data?0:-1)}}function H(o,d){if(o&1){let l=k();e(0,"li",35)(1,"button",36),S("click",function(){let i=v(l).$implicit,a=s(2);return C(a.handlePage(i))}),n(2),t()()}if(o&2){let l=d.$implicit,r=s(2);c(),u("ngClass",I(2,A,l==r.options.page)),c(),p(l)}}function q(o,d){if(o&1&&E(0,H,3,4,"li",35,L),o&2){let l=s();y(l.dataSource==null?null:l.dataSource.links)}}var ne=(()=>{let d=class d{constructor(r,i,a){this.service=r,this.notification=i,this.router=a,this.apiUrl=U.apiUrl,this.loader=!1,this.dataSource={},this.options={type:"document",page:1,limit:10}}ngOnInit(){this.getList()}getList(){this.loader=!0,this.service.list(this.options).subscribe({next:r=>{this.dataSource=r.data,this.loader=!1},error:r=>{this.notification.error("Something Went Wrong"),this.loader=!1}})}handleSearch(r){let i=r.target;this.options.search=i.value,this.getList()}handlePage(r){this.options.page=r,this.getList()}onDelete(r){this.loader=!0,this.service.delete(r).subscribe({next:i=>{this.notification.success(i.message),this.getList()},error:i=>{let a=i.error;a?a.errors?this.notification.error(Object.values(a.errors)[0]):this.notification.error(a.message):this.notification.error("Something Went Wrong"),this.loader=!1}})}};d.\u0275fac=function(i){return new(i||d)(_(N),_(M),_(P))},d.\u0275cmp=w({type:d,selectors:[["app-document-list"]],standalone:!0,features:[T],decls:57,vars:5,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info","d-flex","justify-content-between","justify-content-center","align-items-center"],[1,"mb-0","text-white"],["routerLink","/admin/document/create",1,"btn","btn-primary"],[1,"card-body","p-4"],[1,"d-flex","justify-content-between","pb-3"],[1,"text-end"],[1,"d-flex","justify-content-center","align-items-center"],["id","search","placeholder","Search",1,"form-control",3,"keypress"],[1,"table-responsive"],[1,"table","border","table-striped"],[1,"text-nowrap","text-truncate"],[1,"text-center"],["colspan","5",1,"text-center"],["id","example23_paginate",1,"dataTables_paginate","paging_simple_numbers","pt-3"],[1,"pagination",2,"justify-content","center"],[2,"width","50px","height","50px",3,"src"],["target","_blank",3,"href"],[1,"text-center","text-nowrap"],[1,"bt-group"],["title","Edit",1,"me-2","btn","btn-info","text-white",3,"routerLink"],[1,"icon","mdi","mdi-grease-pencil"],["title","Delete",1,"btn","btn-danger","text-white",3,"click"],[1,"icon","mdi","mdi-delete"],[1,"paginate_button","page-item"],[1,"page-link",3,"click","ngClass"]],template:function(i,a){if(i&1&&(e(0,"div",0)(1,"div",1)(2,"h4",2),n(3,"All Document"),t()(),e(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),n(9,"Home"),t()(),e(10,"li",8),n(11,"Document"),t()()()()(),e(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),n(17,"All Document List"),t(),e(18,"a",14),n(19,"Add New"),t()(),e(20,"div",15)(21,"div",16)(22,"div",17)(23,"p"),n(24),t()(),e(25,"div",18)(26,"input",19),S("keypress",function(O){return a.handleSearch(O)}),t()()(),e(27,"div",20)(28,"table",21)(29,"thead",22)(30,"tr")(31,"th",23),n(32,"#"),t(),e(33,"th",23),n(34,"Image"),t(),e(35,"th",23),n(36,"Title"),t(),e(37,"th",23),n(38,"Country"),t(),e(39,"th",23),n(40,"Topic"),t(),e(41,"th",23),n(42,"PDF"),t(),e(43,"th",23),n(44,"Like"),t(),e(45,"th",23),n(46,"Views"),t(),e(47,"th",23),n(48,"Date"),t(),e(49,"th",23),n(50,"Action"),t()()(),e(51,"tbody",22),x(52,W,2,0,"td",24)(53,B,1,1),t()(),e(54,"div",25)(55,"ul",26),x(56,q,2,0),t()()()()()()()),i&2){let m;c(24),D("Showing ",(m=a.dataSource==null?null:a.dataSource.from)!==null&&m!==void 0?m:0," to ",(m=a.dataSource==null?null:a.dataSource.to)!==null&&m!==void 0?m:0," of ",(m=a.dataSource==null?null:a.dataSource.total)!==null&&m!==void 0?m:0," entries"),c(28),f(a.loader?52:53),c(4),f(a.dataSource.links?56:-1)}},dependencies:[V,F,j],styles:[`.paginate_button[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{
    background-color: #03a9f3;
    color: white;
  }`]});let o=d;return o})();export{ne as DocumentListComponent};
