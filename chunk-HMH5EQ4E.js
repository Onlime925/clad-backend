import{a as V}from"./chunk-KNK3ANK6.js";import"./chunk-ZNQGM4JM.js";import{c as j,f as I,p as L,u as F}from"./chunk-FDMMK7UD.js";import{$a as m,Aa as d,Ba as u,Ma as _,Oa as w,Qa as f,Ra as E,Sa as v,Ta as S,Ua as n,Va as r,Wa as y,X as b,Za as C,_a as h,ea as x,eb as s,fa as g,fb as p,ib as k,kb as N,mb as T}from"./chunk-2AQWV6M7.js";import"./chunk-4CLCTAJ7.js";var M=(e,o)=>o.id,W=e=>({active:e});function $(e,o){e&1&&(n(0,"td",23),s(1,"Loading"),r())}function A(e,o){if(e&1){let i=C();n(0,"tr")(1,"td",22),s(2),r(),n(3,"td",22),s(4),r(),n(5,"td",22),s(6),r(),n(7,"td",26)(8,"div",27)(9,"a",28),h("click",function(){let l=x(i).$implicit,t=m(3);return g(t.onDelete(l.id))}),y(10,"i",29),r()()()()}if(e&2){let i=o.$implicit;d(2),p(i.id),d(2),p(i.name),d(2),p(i.email)}}function O(e,o){if(e&1&&v(0,A,11,3,"tr",null,M),e&2){let i=m(2);S(i.dataSource==null?null:i.dataSource.data)}}function P(e,o){if(e&1&&_(0,O,2,0),e&2){let i=m();f(i.dataSource!=null&&i.dataSource.data?0:-1)}}function R(e,o){if(e&1){let i=C();n(0,"li",30)(1,"button",31),h("click",function(){let l=x(i).$implicit,t=m(2);return g(t.handlePage(l))}),s(2),r()()}if(e&2){let i=o.$implicit,a=m(2);d(),w("ngClass",T(2,W,i==a.options.page)),d(),p(i)}}function B(e,o){if(e&1&&v(0,R,3,4,"li",30,E),e&2){let i=m();S(i.dataSource==null?null:i.dataSource.links)}}var Q=(()=>{let o=class o{constructor(a,l,t){this.service=a,this.notification=l,this.router=t,this.loader=!1,this.dataSource={},this.options={search:"",page:1,limit:10},this.getList()}ngOnInit(){this.getList()}ngAfterViewInit(){this.getList()}getList(){this.loader=!0,this.service.newsletter_list(this.options).subscribe({next:a=>{this.dataSource=a.data,this.loader=!1},error:a=>{this.notification.error("Something Went Wrong"),this.loader=!1}})}handleSearch(a){let l=a.target;this.options.search=l.value,this.getList()}handlePage(a){this.options.page=a,this.getList()}onDelete(a){this.loader=!0,this.service.newsletter_remove({id:a}).subscribe({next:l=>{this.notification.success(l.message),this.getList()},error:l=>{let t=l.error;t?t.errors?this.notification.error(Object.values(t.errors)[0]):this.notification.error(t.message):this.notification.error("Something Went Wrong"),this.loader=!1}})}};o.\u0275fac=function(l){return new(l||o)(u(V),u(F),u(L))},o.\u0275cmp=b({type:o,selectors:[["app-newsletters"]],standalone:!0,features:[N],decls:43,vars:5,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info","d-flex","justify-content-between","justify-content-center","align-items-center"],[1,"mb-0","text-white"],[1,"card-body","p-4"],[1,"d-flex","justify-content-between","pb-3"],[1,"text-end"],[1,"d-flex","justify-content-center","align-items-center"],["id","search","placeholder","Search",1,"form-control",3,"keypress"],[1,"table-responsive"],[1,"table","border","table-striped"],[1,"text-nowrap","text-truncate"],[1,"text-center"],["colspan","5",1,"text-center"],["id","example23_paginate",1,"dataTables_paginate","paging_simple_numbers","pt-3"],[1,"pagination",2,"justify-content","center"],[1,"text-center","text-nowrap"],[1,"bt-group"],["title","Delete",1,"btn","btn-danger","text-white",3,"click"],[1,"icon","mdi","mdi-delete"],[1,"paginate_button","page-item"],[1,"page-link",3,"click","ngClass"]],template:function(l,t){if(l&1&&(n(0,"div",0)(1,"div",1)(2,"h4",2),s(3,"All Newsletters"),r()(),n(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),s(9,"Home"),r()(),n(10,"li",8),s(11,"Newsletters"),r()()()()(),n(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"h4",13),s(17,"All Newsletters List"),r()(),n(18,"div",14)(19,"div",15)(20,"div",16)(21,"p"),s(22),r()(),n(23,"div",17)(24,"input",18),h("keypress",function(D){return t.handleSearch(D)}),r()()(),n(25,"div",19)(26,"table",20)(27,"thead",21)(28,"tr")(29,"th",22),s(30,"#"),r(),n(31,"th",22),s(32,"Name"),r(),n(33,"th",22),s(34,"Email"),r(),n(35,"th",22),s(36,"Action"),r()()(),n(37,"tbody",21),_(38,$,2,0,"td",23)(39,P,1,1),r()(),n(40,"div",24)(41,"ul",25),_(42,B,2,0),r()()()()()()()),l&2){let c;d(22),k("Showing ",(c=t.dataSource==null?null:t.dataSource.from)!==null&&c!==void 0?c:0," to ",(c=t.dataSource==null?null:t.dataSource.to)!==null&&c!==void 0?c:0," of ",(c=t.dataSource==null?null:t.dataSource.total)!==null&&c!==void 0?c:0," entries"),d(16),f(t.loader?38:39),d(4),f(t.dataSource.links?42:-1)}},dependencies:[I,j],styles:[`.paginate_button[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{
      background-color: #03a9f3;
      color: white;
    }`]});let e=o;return e})();export{Q as NewslettersComponent};
