import{a as O}from"./chunk-D3JRENP7.js";import"./chunk-LG62RP5S.js";import{g as P,q as M,s as v}from"./chunk-CTDPX7HU.js";import{$a as f,Aa as r,Ba as s,Oa as p,Ra as x,Sa as u,Ta as w,Ua as a,Va as o,W as g,Wa as _,eb as d,fb as l,kb as C,ra as m,va as b}from"./chunk-BBJBHRII.js";import"./chunk-4CLCTAJ7.js";function y(n,e){if(n&1&&(a(0,"div",5)(1,"div",6)(2,"div",7),_(3,"img",8),o(),a(4,"div",9)(5,"div",10)(6,"div",11)(7,"p",12),d(8),o()(),a(9,"div",13)(10,"a",14),d(11),o()()()()()()),n&2){let c=e.$implicit,t=f();r(3),p("src",t.apiUrl+"/"+c.thumbnail,b),r(5),l(c.title),r(2),p("routerLink","/webinar/"+c.slug),r(),l(c.button)}}var T=(()=>{let e=class e{constructor(t,i){this.service=t,this.platformId=i,this.posts=[],this.apiUrl=v.apiUrl,P(this.platformId)&&this.loadPosts()}loadPosts(){this.service.get_posts({type:"webinar",order_by:"created_at",sort_by:"desc"}).subscribe(t=>{this.posts=t.data.data})}};e.\u0275fac=function(i){return new(i||e)(s(O),s(m))},e.\u0275cmp=g({type:e,selectors:[["app-externalcourses"]],standalone:!0,features:[C],decls:9,vars:0,consts:[[1,"noticias-header",2,"background-color","#C1C4E8"],[1,"my_container"],[1,"py-5","heading-1","text-violeta","text-center","text-lg-start"],[1,"escuela-webinars"],[1,"row","my-4"],[1,"col-md-6","mb-3"],[1,"webinar-card","h-100"],[1,"card-img"],["width","100%",3,"src"],[1,"webinar-card-text"],[1,"row","align-items-center"],[1,"col-sm-7","text"],[1,"body-1","text-lg-start","text-azul-indigo"],[1,"col-sm-5","text-center"],[1,"button-1",3,"routerLink"]],template:function(i,h){i&1&&(a(0,"div",0)(1,"div",1)(2,"h1",2),d(3,"Webinars "),o()()(),a(4,"section",3)(5,"div",1)(6,"div",4),u(7,y,12,4,"div",5,x),o()()()),i&2&&(r(7),w(h.posts))},dependencies:[M],styles:[".main-section[_ngcontent-%COMP%]{background-color:#c1c3e9;padding-top:70px;padding-bottom:20px}.escuela-webinars[_ngcontent-%COMP%]{padding:60px 0}.escuela-webinars[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:20px}.escuela-webinars[_ngcontent-%COMP%]   .webinar-card[_ngcontent-%COMP%]{border-radius:32px;background-color:#fff;overflow:hidden;padding-bottom:20px;background-color:#594ee6}.escuela-webinars[_ngcontent-%COMP%]   .webinar-card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.escuela-webinars[_ngcontent-%COMP%]   .webinar-card[_ngcontent-%COMP%]   .webinar-card-text[_ngcontent-%COMP%]{margin-top:20px}.escuela-webinars[_ngcontent-%COMP%]   .webinar-card[_ngcontent-%COMP%]   .webinar-card-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{padding:20px 35px}.escuela-webinars[_ngcontent-%COMP%]   .webinar-card[_ngcontent-%COMP%]   .webinar-card-text[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:600;color:#fff;margin:0}.escuela-webinars[_ngcontent-%COMP%]   .webinar-card[_ngcontent-%COMP%]   .webinar-card-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;padding:14px 40px;background-color:#8ae6de;border-radius:50px;color:#594ee6;font-size:17px;font-family:Figtree;white-space:nowrap}.escuela-webinars[_ngcontent-%COMP%]   .webinar-btn[_ngcontent-%COMP%]{padding:12px 40px;background-color:#8ae6de;color:#594ee6;font-weight:900;font-size:19px;border-radius:50px;font-weight:700;margin-top:20px;display:inline-block;font-family:Red Hat Display}"]});let n=e;return n})();export{T as WebinarsComponent};
