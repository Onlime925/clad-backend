import{a as u}from"./chunk-76JPYSWO.js";import{h as o,i as a,j as l,p,s as c,t as g,u as m}from"./chunk-QLBEZW53.js";import{O as h,T as s}from"./chunk-R3V5JELH.js";var P=(()=>{let r=class r{constructor(t,e,i,f,w){this.http=t,this.router=e,this.appService=i,this.notification=f,this.language=w,this.apiUrl=c.apiUrl,this.is_mobile_nav=!0,this.mobile_menu=!1,this.data={},this.page={}}hanlde_mobile_menu(){this.mobile_menu?this.mobile_menu=!1:this.mobile_menu=!0}list(){let t=`${this.apiUrl}/api/web/settings?lang=${this.language.lang}`;return this.http.get(t)}find(t){let e=`${this.apiUrl}/api/web/settings/${t}?lang=${this.language.lang}`;return this.http.get(e)}get_posts(t){let e=new a({});for(let i in t)t.hasOwnProperty(i)&&(e=e.set(i,t[i]));return e=e.set("lang",this.language.lang),this.http.get(`${this.apiUrl}/api/web/posts`,{params:e,headers:new o({"Cache-Control":"no-cache",Pragma:"no-cache"})})}post_by_year(){let t=`${this.apiUrl}/api/web/posts_by_year?type=post&lang=${this.language.lang}`;return this.http.get(t,{headers:new o({"Cache-Control":"no-cache",Pragma:"no-cache"})})}get_categories(){let t=`${this.apiUrl}/api/web/categories?lang=${this.language.lang}`;return this.http.get(t)}find1(){this.list().subscribe(t=>{let e=t.data;Object.keys(e).forEach(i=>{e[i]=JSON.parse(e[i])??""}),this.data=e})}setPage(t){this.find(t).subscribe({next:e=>{this.page=e.data[t]?JSON.parse(e.data[t]):{}},error:e=>{}})}newsletter_list(t){let e=new a;for(let i in t)t.hasOwnProperty(i)&&(e=e.set(i,t[i]));return this.http.get(`${this.apiUrl}/api/web/newsletter_list`,{params:e})}newsletter_add(t){let e=new a;for(let i in t)t.hasOwnProperty(i)&&(e=e.set(i,t[i]));return this.http.get(`${this.apiUrl}/api/web/newsletter_add`,{params:e})}newsletter_remove(t){let e=new a;for(let i in t)t.hasOwnProperty(i)&&(e=e.set(i,t[i]));return this.http.get(`${this.apiUrl}/api/web/newsletter_remove`,{params:e})}};r.\u0275fac=function(e){return new(e||r)(s(l),s(p),s(g),s(m),s(u))},r.\u0275prov=h({token:r,factory:r.\u0275fac,providedIn:"root"});let n=r;return n})();export{P as a};