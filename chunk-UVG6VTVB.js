import{a as u}from"./chunk-6DKBZJ63.js";import{e as d}from"./chunk-3IEMDY3T.js";import{Qa as a,Ra as p,Sa as h,Za as c,bb as l,cb as m,v as s,y as r}from"./chunk-UFGFQ7NC.js";var U=(()=>{let e=class e{constructor(i,t,n,g,f){this.http=i,this.router=t,this.appService=n,this.adminService=g,this.language=f,this.apiUrl=l.apiUrl,this.data=[]}list(i){let t=new p;for(let n in i)i.hasOwnProperty(n)&&(t=t.set(n,i[n]));return t=t.set("lang",this.language.lang),this.http.get(`${this.apiUrl}/api/admin/posts/${i.type}`,{params:t,headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}edit(i){let t=`${this.apiUrl}/api/admin/posts/${i}?lang=${this.language.lang}`;return this.http.get(t,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}update(i){let t=`${this.apiUrl}/api/admin/posts/${i.id}?lang=${this.language.lang}`,n=i;return this.http.put(t,n,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}delete(i){let t=`${this.apiUrl}/api/admin/posts/${i}`;return this.http.delete(t,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}};e.\u0275fac=function(t){return new(t||e)(r(h),r(c),r(m),r(u),r(d))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{U as a};
