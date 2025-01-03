import{a as B,b as p,c as b,d as x,f as L,g as P,h as S,l as _,n as k}from"./chunk-ERSYQFF2.js";import{a as A}from"./chunk-EVSWH7AD.js";import{d as y,f as D,p as E,u as w}from"./chunk-QLBEZW53.js";import{Aa as U,La as F,Na as m,Ta as n,Ua as f,Va as d,W as C,Za as h,_a as g,db as l,fb as u,jb as v,za as a}from"./chunk-R3V5JELH.js";import"./chunk-4CLCTAJ7.js";function J(i,r){if(i&1&&(n(0,"div",14),l(1),f()),i&2){let c=g();a(),u(" ",c.getErrorMessage("email")," ")}}function M(i,r){if(i&1&&(n(0,"div",14),l(1),f()),i&2){let c=g();a(),u(" ",c.getErrorMessage("password")," ")}}var q=(()=>{let r=class r{constructor(e,o,t,s){this.service=e,this.fb=o,this.router=t,this.notification=s,this.formLoader=!1,this.myForm=this.fb.group({email:["admin@example.com",[p.required,p.email]],password:["12345678",[p.required,p.min(6)]]})}ngOnInit(){this.service.auth&&this.router.navigate(["/admin/dashboard"])}formSubmit(){if(this.formLoader=!0,this.myForm.valid){let{email:e,password:o}=this.myForm.value;this.service.login(e,o).subscribe({next:t=>{this.formLoader=!1,this.notification.success(t.message),this.myForm.reset(),localStorage.setItem("token",t.data.token),this.service.setAuth(),this.router.navigate(["/admin/dashboard"])},error:t=>{let s=t.error;s?s.errors?this.notification.error(Object.values(s.errors)[0]):this.notification.error(s.message):this.notification.error("Something Went Wrong"),this.formLoader=!1}})}else this.formLoader=!1,this.notification.error("Validation Failed")}getErrorMessage(e){let o=this.myForm.get(e);if(o?.hasError("required"))return`${e.charAt(0).toUpperCase()+e.slice(1)} is required.`;if(o?.hasError("minlength")){let t=o.getError("minlength").requiredLength;return`${e.charAt(0).toUpperCase()+e.slice(1)} must be at least ${t} characters long.`}return o?.hasError("email")?"Please enter a valid email address.":o?.hasError("invalid")?`${e.charAt(0).toUpperCase()+e.slice(1)} is Invalid.`:null}};r.\u0275fac=function(o){return new(o||r)(U(A),U(_),U(E),U(w))},r.\u0275cmp=C({type:r,selectors:[["app-admin-login"]],standalone:!0,features:[v],decls:19,vars:4,consts:[["id","wrapper"],[1,"login-register",2,"background-image","url(../assets/images/background/login-register.jpg)"],[1,"login-box","card"],[1,"card-body"],[1,"form-horizontal","form-material",3,"ngSubmit","formGroup"],[1,"text-center","m-b-20"],[1,"form-group"],[1,"col-xs-12"],["formControlName","email","placeholder","Email",1,"form-control"],["class","text-danger",4,"ngIf"],["formControlName","password","type","password","placeholder","Password",1,"form-control"],[1,"form-group","text-center"],[1,"col-xs-12","p-b-20"],["type","submit",1,"btn","w-100","btn-lg","btn-info","btn-rounded","text-white",3,"disabled"],[1,"text-danger"]],template:function(o,t){o&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4),h("ngSubmit",function(){return t.formSubmit()}),n(5,"h3",5),l(6,"Sign In"),f(),n(7,"div",6)(8,"div",7),d(9,"input",8),F(10,J,2,1,"div",9),f()(),n(11,"div",6)(12,"div",7),d(13,"input",10),F(14,M,2,1,"div",9),f()(),n(15,"div",11)(16,"div",12)(17,"button",13),l(18,"Log In"),f()()()()()()()()),o&2&&(a(4),m("formGroup",t.myForm),a(6),m("ngIf",t.myForm.controls.email.invalid&&(t.myForm.controls.email.dirty||t.myForm.controls.email.touched)),a(4),m("ngIf",t.myForm.controls.password.invalid&&(t.myForm.controls.password.dirty||t.myForm.controls.password.touched)),a(3),m("disabled",t.formLoader))},dependencies:[k,L,B,b,x,P,S,D,y],styles:['@font-face{font-family:Poppins;font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDz8Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJfecg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:600;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.login-register[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;background-position:center center;height:100%;width:100%;padding:5% 0}.login-box[_ngcontent-%COMP%]{width:400px;margin:0 auto}.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{width:100%;left:0;right:0}.login-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{display:block;margin-bottom:30px}#recoverform[_ngcontent-%COMP%]{display:none}.login-sidebar[_ngcontent-%COMP%]{padding:0;margin-top:0}.login-sidebar[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]{right:0;position:absolute;height:100%}']});let i=r;return i})();export{q as LoginComponent};
