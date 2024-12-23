import{a as P}from"./chunk-GN7VLED3.js";import"./chunk-XCC24VLG.js";import{a as I}from"./chunk-OA5BMNMG.js";import{e as q,f as G,g as H,n as O,o as j}from"./chunk-OO4EHEJG.js";import{a as T}from"./chunk-ZNQGM4JM.js";import"./chunk-E4T5XHJF.js";import{c as E,e as B,f as M,u as k}from"./chunk-FDMMK7UD.js";import{$a as c,Aa as d,Ba as _,Ma as h,Oa as u,Qa as g,Ra as V,Sa as N,Ta as D,Ua as a,Va as i,Wa as f,X as S,Za as x,_a as p,ab as R,bb as $,cb as A,ea as v,eb as r,fa as C,fb as F,ib as Q,ka as W,kb as y,lb as z,mb as w,va as b}from"./chunk-2AQWV6M7.js";import{d as U}from"./chunk-4CLCTAJ7.js";var ie=l=>({show:l}),ne=()=>({display:"block"}),le=()=>({"padding-left":"0px"});function oe(l,s){l&1&&(a(0,"p",9),r(1,"Loading"),i())}function ae(l,s){if(l&1){let n=x();a(0,"button",21),p("click",function(){v(n);let t=c(3);return C(t.clearFile())}),r(1,"x"),i()}}function re(l,s){if(l&1){let n=x();a(0,"div",12)(1,"div",13)(2,"label",14),r(3,"Image"),i(),a(4,"div",18)(5,"input",19,0),p("change",function(t){v(n);let e=c(2);return C(e.onFileSelected(t))}),i(),h(7,ae,2,0,"button",20),i()()()}if(l&2){let n=c(2);d(7),g(n.selectedFile?7:-1)}}function se(l,s){if(l&1&&(a(0,"div",22)(1,"div",23)(2,"label",14),r(3,"File Preview"),i(),a(4,"div",24),f(5,"img",25),i()()(),a(6,"div",22)(7,"div",13)(8,"label",14),r(9,"File Name"),i(),f(10,"input",26),i(),a(11,"div",13)(12,"label",14),r(13,"File Size"),i(),f(14,"input",26),i(),a(15,"div",13)(16,"label",14),r(17,"File Type"),i(),f(18,"input",26),i(),a(19,"div",13)(20,"label",14),r(21,"File Extension"),i(),f(22,"input",26),i()()),l&2){let n=c(2);d(5),u("src",n.file.url,b),d(5),u("value",n.file==null?null:n.file.name),d(4),u("value",n.file==null?null:n.file.size),d(4),u("value",n.file==null?null:n.file.type),d(4),u("value",n.file==null?null:n.file.extension)}}function de(l,s){if(l&1){let n=x();a(0,"div",10),h(1,re,8,1,"div",12),a(2,"div",12)(3,"div",13)(4,"label",14),r(5,"File Name"),i(),a(6,"input",15),p("input",function(t){v(n);let e=c();return C(e.setFileName(t.target.value))}),i()()(),h(7,se,23,5),a(8,"div",16)(9,"button",17),r(10),i()()()}if(l&2){let n=c();d(),g(n.is_edit?-1:1),d(5),u("value",n.filename),d(),g(n.file.url?7:-1),d(3),F(n.is_edit?"Update":"Upload")}}function me(l,s){l&1&&f(0,"div",11)}var L=(()=>{let s=class s{constructor(o,t,e,m){this.notification=o,this.myFormService=t,this.lang=e,this.service=m,this.getFiles=new W,this.loader=!1,this.modal=!1,this.is_edit=!1,this.file={},this.selectedFile=null,this.filename=""}handleModal(){this.modal=!this.modal,this.modal==!1&&(this.is_edit=!1,this.clearFile())}clearFile(){this.loader=!0,this.selectedFile=null,this.filename=null,this.file={},this.loader=!1}onFileSelected(o){let t=o.target;if(t.files&&t.files.length>0){this.selectedFile=t.files[0];let e=new FileReader;e.onload=m=>{t.value="",this.file={name:this.selectedFile?.name,size:this.selectedFile?.size,type:this.selectedFile?.type,extension:this.selectedFile?.name?.split(".")?.pop(),url:e.result},this.setFileName(this.file.name)},e.readAsDataURL(this.selectedFile)}}setFileName(o){this.filename=o}onSubmit(){return U(this,null,function*(){if(!this.is_edit)if(this.selectedFile){let o=new FormData;o.append("filename",this.filename),o.append("file",this.selectedFile,this.selectedFile.name),this.loader=!0,this.service.create(o).subscribe({next:t=>{this.notification.success(t.message),this.loader=!1,this.selectedFile=null,this.filename=null,this.file={},this.modal=!1,this.getFiles.emit()},error:t=>{let e=t.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.loader=!1}})}else this.notification.error("File Not Found");if(this.is_edit){let o={id:this.file.id,name:this.filename};this.service.update(o).subscribe({next:t=>{this.notification.success(t.message),this.loader=!1,this.selectedFile=null,this.filename=null,this.file={},this.modal=!1,this.getFiles.emit()},error:t=>{let e=t.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.loader=!1}})}})}};s.\u0275fac=function(t){return new(t||s)(_(k),_(P),_(T),_(I))},s.\u0275cmp=S({type:s,selectors:[["app-file-modal"]],outputs:{getFiles:"getFiles"},standalone:!0,features:[y],decls:12,vars:8,consts:[["inputfield",""],["tabindex","-1","aria-labelledby","myLargeModalLabel","aria-modal","true","role","dialog",1,"modal","bs-example-modal-lg",3,"ngClass","ngStyle"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header"],["id","myLargeModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],["enctype","multipart/form-data",3,"ngSubmit"],[1,"text-center"],[1,"row"],[1,"modal-backdrop","show"],[1,"col-md-12"],[1,"form-group"],[1,"form-label"],[1,"form-control",3,"input","value"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white"],[1,"d-flex"],["placeholder","Image","type","file",1,"form-control",3,"change"],[1,"btn","btn-danger"],[1,"btn","btn-danger",3,"click"],[1,"col-md-6"],[1,"col-md-12","pb-3"],[1,"img_holder"],[1,"w-100",3,"src"],["readonly","",1,"form-control",3,"value"]],template:function(t,e){t&1&&(a(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h4",5),r(5,"Filemanager"),i(),a(6,"button",6),p("click",function(){return e.handleModal()}),i()(),a(7,"div",7)(8,"form",8),p("ngSubmit",function(){return e.onSubmit()}),h(9,oe,2,0,"p",9)(10,de,11,4,"div",10),i()()()()(),h(11,me,1,0,"div",11)),t&2&&(u("ngClass",w(4,ie,e.modal))("ngStyle",e.modal?z(6,ne):z(7,le)),d(9),g(e.loader?9:10),d(2),g(e.modal?11:-1))},dependencies:[M,E,B,j,H,q,O,G],encapsulation:2});let l=s;return l})();var ce=l=>({active:l});function pe(l,s){l&1&&(a(0,"p",21),r(1,"Loading"),i())}function ue(l,s){if(l&1){let n=x();a(0,"tr")(1,"td",21),r(2),i(),a(3,"td",21),f(4,"img",27),i(),a(5,"td",21)(6,"a",28),r(7),i()(),a(8,"td",21),r(9),i(),a(10,"td",21)(11,"div",29)(12,"a",30),p("click",function(){let t=v(n).$implicit,e=c(3);return C(e.onEdit(t))}),f(13,"i",31),i(),a(14,"a",32),p("click",function(){let t=v(n).$implicit,e=c(3);return C(e.delete(t.id))}),f(15,"i",33),i()()()()}if(l&2){let n=s.$implicit;d(2),F(n.id),d(2),u("src",n.link,b),d(2),u("href",n.link,b),d(),F(n.name),d(2),F(n.extension)}}function fe(l,s){if(l&1&&N(0,ue,16,5,"tr",null,V),l&2){let n=c(2);D(n.dataSource.data)}}function _e(l,s){if(l&1){let n=x();a(0,"li",34)(1,"button",35),p("click",function(){let t=v(n).$implicit,e=c(3);return C(e.handlePage(t))}),r(2),i()()}if(l&2){let n=s.$implicit,o=c(3);d(),u("ngClass",w(2,ce,n==o.options.page)),d(),F(n)}}function he(l,s){if(l&1&&N(0,_e,3,4,"li",34,V),l&2){let n=c(2);D(n.dataSource==null?null:n.dataSource.links)}}function ge(l,s){if(l&1&&(a(0,"div",22)(1,"table",23)(2,"thead",24)(3,"tr")(4,"th",21),r(5,"#"),i(),a(6,"th",21),r(7,"Image"),i(),a(8,"th",21),r(9,"Title"),i(),a(10,"th",21),r(11,"Extension"),i(),a(12,"th",21),r(13,"Action"),i()()(),a(14,"tbody",24),h(15,fe,2,0),i()(),a(16,"div",25)(17,"ul",26),h(18,he,2,0),i()()()),l&2){let n=c();d(15),g(n.dataSource?15:-1),d(3),g(n.dataSource.links?18:-1)}}var Te=(()=>{let s=class s{constructor(o,t,e,m){this.notification=o,this.myFormService=t,this.lang=e,this.service=m,this.search="",this.fileDropdown=!1,this.loader=!1,this.files=[],this.dataSource={},this.options={type:"",page:1,limit:10,search:""}}ngOnInit(){this.getFiles()}handleSearch(o){let t=o.target.value;this.options.search=t,this.getFiles()}getFiles(){this.loader=!0,this.service.list(this.options).subscribe({next:o=>{this.dataSource=o.data,this.loader=!1},error:o=>{this.loader=!1}})}handlePage(o){this.options.page=o,this.getFiles()}handle_fileDropdown(){this.fileDropdown=!this.fileDropdown}delete(o){this.service.delete(o).subscribe({next:t=>{this.notification.success(t.message),this.loader=!1,this.getFiles()},error:t=>{let e=t.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong"),this.loader=!1}})}onEdit(o){this.FileModalComponent.modal=!0,this.FileModalComponent.is_edit=!0,this.FileModalComponent.filename=o.name,this.FileModalComponent.file={name:o.name,size:o.size,extension:o.extension,type:o.type,url:o.link,id:o.id}}};s.\u0275fac=function(t){return new(t||s)(_(k),_(P),_(T),_(I))},s.\u0275cmp=S({type:s,selectors:[["app-filemanager"]],viewQuery:function(t,e){if(t&1&&R(L,5),t&2){let m;$(m=A())&&(e.FileModalComponent=m.first)}},standalone:!0,features:[y],decls:30,vars:4,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[3,"getFiles"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info","d-flex","justify-content-between","justify-content-center","align-items-center"],[1,"mb-0","text-white"],[1,"btn","btn-primary",3,"click"],[1,"card-body","p-4"],[1,"d-flex","justify-content-between","pb-3"],[1,"text-end"],[1,"d-flex","justify-content-center","align-items-center"],["id","search","placeholder","Search",1,"form-control",3,"keypress"],[1,"text-center"],[1,"table-responsive"],[1,"table","border","table-striped"],[1,"text-nowrap","text-truncate"],["id","example23_paginate",1,"dataTables_paginate","paging_simple_numbers","pt-3"],[1,"pagination",2,"justify-content","center"],[2,"width","50px","height","50px",3,"src"],["target","_blank",3,"href"],[1,"bt-group"],["title","Edit",1,"btn","btn-info","text-white",3,"click"],[1,"icon","mdi","mdi-grease-pencil"],["title","Delete",1,"btn","btn-danger","text-white",3,"click"],[1,"icon","mdi","mdi-delete"],[1,"paginate_button","page-item"],[1,"page-link",3,"click","ngClass"]],template:function(t,e){if(t&1&&(a(0,"div",0)(1,"div",1)(2,"h4",2),r(3,"Filemanager"),i()(),a(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),r(9,"Admin"),i()(),a(10,"li",8),r(11,"Filemanager"),i()()()()(),a(12,"app-file-modal",9),p("getFiles",function(){return e.getFiles()}),i(),a(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"h4",14),r(18,"Filemanager"),i(),a(19,"a",15),p("click",function(){return e.FileModalComponent.modal=!0}),r(20,"Add New"),i()(),a(21,"div",16)(22,"div",17)(23,"div",18)(24,"p"),r(25),i()(),a(26,"div",19)(27,"input",20),p("keypress",function(J){return e.handleSearch(J)}),i()()(),h(28,pe,2,0,"p",21)(29,ge,19,2,"div",22),i()()()()),t&2){let m;d(25),Q("Showing ",(m=e.dataSource==null?null:e.dataSource.from)!==null&&m!==void 0?m:0," to ",(m=e.dataSource==null?null:e.dataSource.to)!==null&&m!==void 0?m:0," of ",(m=e.dataSource==null?null:e.dataSource.total)!==null&&m!==void 0?m:0," entries"),d(3),g(e.loader==!0?28:29)}},dependencies:[M,E,j,O,L],styles:[".img_holder[_ngcontent-%COMP%]{height:200px;width:200px}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{right:0}.el-overlay-1[_ngcontent-%COMP%]{position:relative}.el-overlay-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:250px}.el-overlay[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;overflow:hidden;top:0;left:0;opacity:0;background-color:#000000b3;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.el-overlay[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#fff;list-style:none;height:100%;display:flex;align-items:center;justify-content:center;padding:0;margin:0}.el-overlay[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.el-card-avatar[_ngcontent-%COMP%]:hover   .el-overlay[_ngcontent-%COMP%]{opacity:1}",`.paginate_button[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{
      background-color: #03a9f3;
      color: white;
    }`]});let l=s;return l})();export{Te as FilemanagerComponent};