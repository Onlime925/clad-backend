import{a as P}from"./chunk-4KMK4U6T.js";import{c as T,h as w,v as O}from"./chunk-J2EGX742.js";import{$a as k,Fa as u,Ka as a,La as y,W as h,Wa as _,Ya as p,_a as f,ab as I,bb as U,cb as m,db as l,ea as C,eb as d,fa as v,hb as b,ib as c,jb as g,ka as x,ob as s,qb as E,rb as M,vb as S}from"./chunk-PQVSAWMG.js";function V(e,t){e&1&&(m(0,"li"),s(1,"Loading..."),l())}function z(e,t){if(e&1){let o=b();m(0,"li",7),c("click",function(){let r=C(o).$implicit,i=g(3);return v(i.select(r))}),d(1,"img",8),m(2,"span"),s(3),l()()}if(e&2){let o=t.$implicit;a(),p("src",o.link,u),a(2),M("",o.name.slice(0,10),".",o.extension,"")}}function D(e,t){if(e&1&&I(0,z,4,3,"li",null,k),e&2){let o=g(2);U(o.files)}}function $(e,t){if(e&1&&(m(0,"ul"),_(1,V,2,0,"li")(2,D,2,0),l()),e&2){let o=g();a(),f(o.loading?1:2)}}var K=(()=>{let t=class t{constructor(n){this.service=n,this.apiUrl=O.apiUrl,this.files=[],this.loading=!1,this.image="",this.name="",this.imgHanle=new x}hanldeChange(n){n.target.value.length>0?(this.loading=!0,this.service.list({search:n.target.value}).subscribe({next:r=>{this.files=r.data.data,this.loading=!1}})):(this.files=[],this.loading=!1)}select(n){this.image=n.path,this.imgHanle.emit({path:n.path,name:this.name})}remove(){this.image="",this.imgHanle.emit("")}};t.\u0275fac=function(r){return new(r||t)(y(P))},t.\u0275cmp=h({type:t,selectors:[["app-img-uploader"]],inputs:{image:"image",name:"name"},outputs:{imgHanle:"imgHanle"},standalone:!0,features:[S],decls:10,vars:8,consts:[[1,"img_uploader"],[3,"ngClass"],[2,"width","100%","border","1px solid #e9ecef"],["width","50px","height","35px",3,"src"],["type","button",1,"btn","btn-danger",3,"click"],["type","hidden",3,"value","name"],[1,"form-control",3,"keyup","ngClass","value"],[3,"click"],["height","50px",2,"width","50px",3,"src"]],template:function(r,i){r&1&&(m(0,"div",0)(1,"div",1)(2,"div",2),d(3,"img",3),s(4),l(),m(5,"button",4),c("click",function(){return i.remove()}),s(6,"X"),l(),d(7,"input",5),l(),m(8,"input",6),c("keyup",function(H){return i.hanldeChange(H)}),l(),_(9,$,3,1,"ul"),l()),r&2&&(a(),p("ngClass",i.image?"d-flex":"d-none"),a(2),p("src",i.apiUrl+"/"+i.image,u),a(),E(" ",i.image," "),a(3),p("value",i.image)("name",i.name),a(),p("ngClass",i.image?"d-none":"d-block")("value",i.image),a(),f(i.image?-1:9))},dependencies:[w,T],styles:[".img_uploader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-right:5px}.img_uploader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.img_uploader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:#f5eded5c;border:1px solid #e9ecef;cursor:pointer;padding:5px 10px;margin:10px 0}"]});let e=t;return e})();export{K as a};
