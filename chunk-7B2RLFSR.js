import{a as P}from"./chunk-P6ZXMWCR.js";import{a as O}from"./chunk-NF7X6UKL.js";import{d as G,e as H,f as J,m as V,n as I}from"./chunk-AFWRT4PF.js";import"./chunk-TT6UXURR.js";import{e as k}from"./chunk-7H5UCHC4.js";import{a as q,c as T}from"./chunk-V37MTAIH.js";import{$ as m,F as h,G as C,I as $,Ja as E,Ma as B,O as S,Oa as M,S as s,T as x,X as p,Y as u,aa as j,ba as N,ca as D,da as o,ea as n,fa as f,ia as v,ja as _,ka as c,la as R,ma as A,na as Q,pa as d,qa as F,ta as W,wa as y,xa as z,ya as w,z as b}from"./chunk-J2G6KBBC.js";import{d as U}from"./chunk-4CLCTAJ7.js";var ie=i=>({show:i}),ne=()=>({display:"block"}),le=()=>({"padding-left":"0px"});function oe(i,r){i&1&&(o(0,"p",9),d(1,"Loading"),n())}function ae(i,r){if(i&1){let e=v();o(0,"button",21),_("click",function(){h(e);let l=c(3);return C(l.clearFile())}),d(1,"x"),n()}}function re(i,r){if(i&1){let e=v();o(0,"div",12)(1,"div",13)(2,"label",14),d(3,"Image"),n(),o(4,"div",18)(5,"input",19,0),_("change",function(l){h(e);let a=c(2);return C(a.onFileSelected(l))}),n(),p(7,ae,2,0,"button",20),n()()()}if(i&2){let e=c(2);s(7),m(e.selectedFile?7:-1)}}function de(i,r){if(i&1&&(o(0,"div",22)(1,"div",23)(2,"label",14),d(3,"File Preview"),n(),o(4,"div",24),f(5,"img",25),n()()(),o(6,"div",22)(7,"div",13)(8,"label",14),d(9,"File Name"),n(),f(10,"input",26),n(),o(11,"div",13)(12,"label",14),d(13,"File Size"),n(),f(14,"input",26),n(),o(15,"div",13)(16,"label",14),d(17,"File Type"),n(),f(18,"input",26),n(),o(19,"div",13)(20,"label",14),d(21,"File Extension"),n(),f(22,"input",26),n()()),i&2){let e=c(2);s(5),u("src",e.file.url,S),s(5),u("value",e.file==null?null:e.file.old),s(4),u("value",e.file==null?null:e.file.size),s(4),u("value",e.file==null?null:e.file.type),s(4),u("value",e.file==null?null:e.file.extension)}}function se(i,r){if(i&1){let e=v();o(0,"div",10),p(1,re,8,1,"div",12),o(2,"div",12)(3,"div",13)(4,"label",14),d(5,"File Name"),n(),o(6,"input",15),_("input",function(l){h(e);let a=c();return C(a.setFileName(l.target.value))}),n()()(),p(7,de,23,5),o(8,"div",16)(9,"button",17),d(10),n()()()}if(i&2){let e=c();s(),m(e.is_edit?-1:1),s(5),u("value",e.filename),s(),m(e.file.url?7:-1),s(3),F(e.is_edit?"Update":"Upload")}}function ce(i,r){i&1&&f(0,"div",11)}var L=(()=>{let r=class r{constructor(t,l,a,g){this.notification=t,this.myFormService=l,this.lang=a,this.service=g,this.getFiles=new $,this.loader=!1,this.modal=!1,this.is_edit=!1,this.file={},this.selectedFile=null,this.filename=""}handleModal(){this.modal=!this.modal,this.modal==!1&&(this.is_edit=!1,this.clearFile())}clearFile(){this.loader=!0,this.selectedFile=null,this.filename=null,this.file={},this.loader=!1}onFileSelected(t){let l=t.target;if(l.files&&l.files.length>0){this.selectedFile=l.files[0];let a=new FileReader;a.onload=g=>{l.value="",this.file={name:this.toSlug(this.selectedFile?.name.split(".")[0]),old:this.selectedFile?.name,size:this.selectedFile?.size,type:this.selectedFile?.type,extension:this.selectedFile?.name?.split(".")?.pop(),url:a.result},this.setFileName(this.file.name)},a.readAsDataURL(this.selectedFile)}}setFileName(t){this.filename=t}onSubmit(){return U(this,null,function*(){if(!this.isValidSlug(this.filename)){this.notification.warning("File Name Is Invalid");return}if(this.selectedFile){let t=new FormData;t.append("filename",this.filename),t.append("file",this.selectedFile,this.selectedFile.name),this.loader=!0,this.service.create(t).subscribe({next:l=>{this.notification.success(l.message),this.loader=!1,this.selectedFile=null,this.filename=null,this.file={},this.modal=!1,this.getFiles.emit()},error:l=>{let a=l.error;a?a.errors?this.notification.error(Object.values(a.errors)[0]):this.notification.error(a.message):this.notification.error("Something Went Wrong"),this.loader=!1}})}else this.notification.error("File Not Found")})}toSlug(t){return t.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").trim()}isValidSlug(t){return/^[a-z0-9-_]+$/.test(t)&&t.length>0}};r.\u0275fac=function(l){return new(l||r)(x(T),x(P),x(k),x(O))},r.\u0275cmp=b({type:r,selectors:[["app-file-modal"]],outputs:{getFiles:"getFiles"},standalone:!0,features:[y],decls:12,vars:8,consts:[["inputfield",""],["tabindex","-1","aria-labelledby","myLargeModalLabel","aria-modal","true","role","dialog",1,"modal","bs-example-modal-lg",3,"ngClass","ngStyle"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header"],["id","myLargeModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],["enctype","multipart/form-data",3,"ngSubmit"],[1,"text-center"],[1,"row"],[1,"modal-backdrop","show"],[1,"col-md-12"],[1,"form-group"],[1,"form-label"],[1,"form-control",3,"input","value"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white"],[1,"d-flex"],["placeholder","Image","type","file",1,"form-control",3,"change"],[1,"btn","btn-danger"],[1,"btn","btn-danger",3,"click"],[1,"col-md-6"],[1,"col-md-12","pb-3"],[1,"img_holder"],[1,"w-100",3,"src"],["readonly","",1,"form-control",3,"value"]],template:function(l,a){l&1&&(o(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h4",5),d(5,"Filemanager"),n(),o(6,"button",6),_("click",function(){return a.handleModal()}),n()(),o(7,"div",7)(8,"form",8),_("ngSubmit",function(){return a.onSubmit()}),p(9,oe,2,0,"p",9)(10,se,11,4,"div",10),n()()()()(),p(11,ce,1,0,"div",11)),l&2&&(u("ngClass",w(4,ie,a.modal))("ngStyle",a.modal?z(6,ne):z(7,le)),s(9),m(a.loader?9:10),s(2),m(a.modal?11:-1))},dependencies:[M,E,B,I,J,G,V,H],encapsulation:2});let i=r;return i})();var me=i=>({active:i});function pe(i,r){if(i&1){let e=v();o(0,"a",17),_("click",function(){h(e);let l=c();return C(l.FileModalComponent.modal=!0)}),d(1,"Add New"),n()}}function _e(i,r){i&1&&(o(0,"p",22),d(1,"Loading"),n())}function ue(i,r){if(i&1&&f(0,"img",29),i&2){let e=c().$implicit,t=c(4);u("src",t.apiUrl+"/"+e.path,S)}}function fe(i,r){i&1&&d(0," No Preview ")}function ge(i,r){if(i&1){let e=v();o(0,"a",33),_("click",function(){h(e);let l=c().$implicit,a=c(4);return C(a.onEdit(l))}),f(1,"i",34),n()}}function he(i,r){if(i&1){let e=v();o(0,"a",35),_("click",function(){h(e);let l=c().$implicit,a=c(4);return C(a.delete(l.id))}),f(1,"i",36),n()}}function Ce(i,r){if(i&1&&(o(0,"tr")(1,"td",22),d(2),n(),o(3,"td",22)(4,"a",28),p(5,ue,1,1,"img",29)(6,fe,1,0),n()(),o(7,"td",22)(8,"a"),d(9),n()(),o(10,"td",22)(11,"a"),d(12),n()(),o(13,"td",22)(14,"a"),d(15),n()(),o(16,"td",22)(17,"div",30),p(18,ge,2,0,"a",31)(19,he,2,0,"a",32),n()()()),i&2){let e=r.$implicit,t=c(4);s(2),F(e.id),s(2),u("href",t.apiUrl+"/"+e.path,S),s(),m(e.extension=="jpg"||e.extension=="png"||e.extension=="jpeg"?5:6),s(4),F(e.name),s(3),F(e.newname),s(3),F(e.date),s(3),m(t.service.adminService.p.includes("filemanger.edit")?18:-1),s(),m(t.service.adminService.p.includes("filemanager.delete")?19:-1)}}function xe(i,r){if(i&1&&N(0,Ce,20,8,"tr",null,j),i&2){let e=c(3);D(e.dataSource.data)}}function ve(i,r){if(i&1){let e=v();o(0,"li",37)(1,"button",38),_("click",function(){let l=h(e).$implicit,a=c(4);return C(a.handlePage(l))}),d(2),n()()}if(i&2){let e=r.$implicit,t=c(4);s(),u("ngClass",w(2,me,e==t.options.page)),s(),F(e)}}function Fe(i,r){if(i&1&&N(0,ve,3,4,"li",37,j),i&2){let e=c(3);D(e.dataSource==null?null:e.dataSource.links)}}function Se(i,r){if(i&1&&(o(0,"div",23)(1,"table",24)(2,"thead",25)(3,"tr")(4,"th",22),d(5,"#"),n(),o(6,"th",22),d(7,"Image"),n(),o(8,"th",22),d(9,"Title"),n(),o(10,"th",22),d(11,"Old"),n(),o(12,"th",22),d(13,"Date"),n(),o(14,"th",22),d(15,"Action"),n()()(),o(16,"tbody",25),p(17,xe,2,0),n()(),o(18,"div",26)(19,"ul",27),p(20,Fe,2,0),n()()()),i&2){let e=c(2);s(17),m(e.dataSource?17:-1),s(3),m(e.dataSource.links?20:-1)}}function be(i,r){if(i&1){let e=v();o(0,"div",18)(1,"div",19)(2,"p"),d(3),n()(),o(4,"div",20)(5,"input",21),_("keypress",function(l){h(e);let a=c();return C(a.handleSearch(l))}),n()()(),p(6,_e,2,0,"p",22)(7,Se,21,2,"div",23)}if(i&2){let e,t=c();s(3),W("Showing ",(e=t.dataSource==null?null:t.dataSource.from)!==null&&e!==void 0?e:0," to ",(e=t.dataSource==null?null:t.dataSource.to)!==null&&e!==void 0?e:0," of ",(e=t.dataSource==null?null:t.dataSource.total)!==null&&e!==void 0?e:0," entries"),s(3),m(t.loader==!0?6:7)}}var De=(()=>{let r=class r{constructor(t,l,a,g){this.notification=t,this.myFormService=l,this.lang=a,this.service=g,this.apiUrl=q.apiUrl,this.search="",this.fileDropdown=!1,this.loader=!1,this.files=[],this.dataSource={},this.options={type:"",page:1,limit:10,search:""}}ngOnInit(){this.getFiles()}handleSearch(t){let l=t.target.value;this.options.search=l,this.getFiles()}getFiles(){this.loader=!0,this.service.list(this.options).subscribe({next:t=>{this.dataSource=t.data,this.loader=!1},error:t=>{this.loader=!1}})}handlePage(t){this.options.page=t,this.getFiles()}handle_fileDropdown(){this.fileDropdown=!this.fileDropdown}delete(t){this.service.delete(t).subscribe({next:l=>{this.notification.success(l.message),this.loader=!1,this.getFiles()},error:l=>{let a=l.error;a?a.errors?this.notification.error(Object.values(a.errors)[0]):this.notification.error(a.message):this.notification.error("Something Went Wrong"),this.loader=!1}})}onEdit(t){this.FileModalComponent.modal=!0,this.FileModalComponent.is_edit=!0,this.FileModalComponent.filename=t.name,this.FileModalComponent.file={name:t.name,size:t.size,extension:t.extension,type:t.type,url:t.link,id:t.id}}};r.\u0275fac=function(l){return new(l||r)(x(T),x(P),x(k),x(O))},r.\u0275cmp=b({type:r,selectors:[["app-filemanager"]],viewQuery:function(l,a){if(l&1&&R(L,5),l&2){let g;A(g=Q())&&(a.FileModalComponent=g.first)}},standalone:!0,features:[y],decls:22,vars:2,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[3,"getFiles"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info","d-flex","justify-content-between","justify-content-center","align-items-center"],[1,"mb-0","text-white"],[1,"btn","btn-primary"],[1,"card-body","p-4"],[1,"btn","btn-primary",3,"click"],[1,"d-flex","justify-content-between","pb-3"],[1,"text-end"],[1,"d-flex","justify-content-center","align-items-center"],["id","search","placeholder","Search",1,"form-control",3,"keypress"],[1,"text-center"],[1,"table-responsive"],[1,"table","border","table-striped"],[1,"text-nowrap","text-truncate"],["id","example23_paginate",1,"dataTables_paginate","paging_simple_numbers","pt-3"],[1,"pagination",2,"justify-content","center"],["target","_blank",3,"href"],[2,"width","50px","height","50px",3,"src"],[1,"bt-group"],["title","Edit",1,"btn","btn-info","text-white"],["title","Delete",1,"btn","btn-danger","text-white"],["title","Edit",1,"btn","btn-info","text-white",3,"click"],[1,"icon","mdi","mdi-grease-pencil"],["title","Delete",1,"btn","btn-danger","text-white",3,"click"],[1,"icon","mdi","mdi-delete"],[1,"paginate_button","page-item"],[1,"page-link",3,"click","ngClass"]],template:function(l,a){l&1&&(o(0,"div",0)(1,"div",1)(2,"h4",2),d(3,"Filemanager"),n()(),o(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),d(9,"Admin"),n()(),o(10,"li",8),d(11,"Filemanager"),n()()()()(),o(12,"app-file-modal",9),_("getFiles",function(){return a.getFiles()}),n(),o(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"h4",14),d(18,"Filemanager"),n(),p(19,pe,2,0,"a",15),n(),o(20,"div",16),p(21,be,8,4),n()()()()),l&2&&(s(19),m(a.service.adminService.p.includes("filemanager.add")?19:-1),s(2),m(a.service.adminService.p.includes("filemanager.list")?21:-1))},dependencies:[M,E,I,V,L],styles:[".pagination[_ngcontent-%COMP%]{flex-wrap:wrap}.img_holder[_ngcontent-%COMP%]{height:200px;width:200px}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{right:0}.el-overlay-1[_ngcontent-%COMP%]{position:relative}.el-overlay-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:250px}.el-overlay[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;overflow:hidden;top:0;left:0;opacity:0;background-color:#000000b3;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.el-overlay[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#fff;list-style:none;height:100%;display:flex;align-items:center;justify-content:center;padding:0;margin:0}.el-overlay[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.el-card-avatar[_ngcontent-%COMP%]:hover   .el-overlay[_ngcontent-%COMP%]{opacity:1}",`.paginate_button[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{
      background-color: #03a9f3;
      color: white;
    }`]});let i=r;return i})();export{De as FilemanagerComponent};
