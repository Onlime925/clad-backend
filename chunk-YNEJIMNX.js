import{a as u}from"./chunk-TT6UXURR.js";import{e as d}from"./chunk-7H5UCHC4.js";import{a as l,b as m}from"./chunk-V37MTAIH.js";import{Qa as a,Ra as p,Sa as h,Za as c,v as s,y as n}from"./chunk-J2G6KBBC.js";var C=(()=>{let r=class r{constructor(i,t,e,g,f){this.http=i,this.router=t,this.appService=e,this.adminService=g,this.language=f,this.apiUrl=l.apiUrl,this.data=[]}list(i){let t=new p;for(let e in i)i.hasOwnProperty(e)&&(t=t.set(e,i[e]));return t=t.set("lang",this.language.lang),this.http.get(`${this.apiUrl}/api/admin/users/list`,{params:t,headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}store(i){let t=`${this.apiUrl}/api/admin/users/store?lang=${this.language.lang}`,e=i;return this.http.post(t,e,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}update(i){let t=`${this.apiUrl}/api/admin/users/update/${i.id}?lang=${this.language.lang}`,e=i;return this.http.post(t,e,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}delete(i){let t=`${this.apiUrl}/api/admin/users/delete/${i}`;return this.http.get(t,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}};r.\u0275fac=function(t){return new(t||r)(n(h),n(c),n(m),n(u),n(d))},r.\u0275prov=s({token:r,factory:r.\u0275fac,providedIn:"root"});let o=r;return o})();export{C as a};
