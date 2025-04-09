import{a as y}from"./chunk-Y7BJZE3W.js";import"./chunk-7H5UCHC4.js";import{a as f}from"./chunk-V37MTAIH.js";import{$ as u,L as w,O as g,Pa as T,Q as z,S as n,T as b,X as x,Y as v,aa as P,ba as M,ca as h,da as r,ea as o,fa as m,ka as p,pa as l,qa as c,ra as S,wa as _,z as C}from"./chunk-J2G6KBBC.js";import"./chunk-4CLCTAJ7.js";var F=(()=>{let a=class a{constructor(s){this.service=s,this.apiUrl=f.apiUrl}};a.\u0275fac=function(d){return new(d||a)(b(y))},a.\u0275cmp=C({type:a,selectors:[["app-website-about-banner"]],standalone:!0,features:[_],decls:11,vars:3,consts:[[1,"banner-section"],[1,"d-flex","w-100","align-items-center"],[1,"image-section"],[3,"src"],[1,"text-section"],[1,"",2,"max-width","90%","margin","auto"]],template:function(d,t){d&1&&(r(0,"section",0)(1,"div")(2,"div",1)(3,"div",2),m(4,"img",3),o(),r(5,"div",4)(6,"div",5)(7,"h3"),l(8),o(),r(9,"p"),l(10),o()()()()()()),d&2&&(n(4),v("src",t.apiUrl+"/"+(t.service.page==null||t.service.page.banner==null?null:t.service.page.banner.image),g),n(4),c(t.service.page==null||t.service.page.banner==null?null:t.service.page.banner.title),n(2),c(t.service.page==null||t.service.page.banner==null?null:t.service.page.banner.description))},styles:[".banner-section[_ngcontent-%COMP%]{background-color:#041e42;color:#fff}.image-section[_ngcontent-%COMP%], .text-section[_ngcontent-%COMP%]{width:50%}.banner-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.banner-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;color:#c1c4e8;font-weight:500;padding-bottom:10px}.banner-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:30px;color:#c1c4e8;text-align:justify}@media (max-width: 1600px){.banner-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:34px}.banner-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}}@media (max-width: 992px){.image-section[_ngcontent-%COMP%]{display:none!important}.text-section[_ngcontent-%COMP%]{width:100%}.text-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center;max-width:90%;margin:auto;padding:33px 0}.banner-section[_ngcontent-%COMP%]{background:url(/assets/web/about_banner.png)}.banner-section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background:#000000c9}}"]});let i=a;return i})();var j=(()=>{let a=class a{constructor(s){this.service=s,this.apiUrl=f.apiUrl,this.greenCountries=["Canada","United States","Turkey","Greece","Italy","Slovenia","Austria","Hungary","Slovakia","Czech Republic","Germany","Poland","France","Belgium","Netherlands","Denmark","Sweden","Norway","Finland","Estonia","United Kingdom","Ireland","New Zealand","Australia","Guyana","Suriname"],this.selectedCountries=["Mexico","Colombia","Ecuador","Peru","Bolivia","Chile","Dominican Republi","Venez","Brazil","Parag","Uruguay","Argentina","Andorra","Spain","Portugal","Equatorial Guine","Angola"],this.countryYears={Mexico:1821,Colombia:1810,Ecuador:1830,Peru:1821,Bolivia:1825,Chile:1818,"Dominican Republi":1844,Venez:1811,Brazil:1822,Parag:1811,Uruguay:1828,Argentina:1816,Andorra:1278,Spain:1492,Portugal:1139,"Equatorial Guinea":1968,Angola:1975}}ngAfterViewInit(){let s=document.getElementById("mouseBox"),d=document.getElementById("svgMap");d.addEventListener("load",()=>{d.contentDocument?.querySelectorAll("path")?.forEach(E=>{let D=E.getAttribute("title");E.style.fill="#D3D6F2",this.greenCountries.includes(D)&&(E.style.fill="#8ae6de"),this.selectedCountries.includes(D)&&(E.addEventListener("mouseover",O=>{E.style.fill="#1f11cb",s.style.left=`${O.clientX}px`,s.style.top=`${O.clientY}px`,s.style.display="block",s.innerHTML=`<img style="width:60px" src="./assets/countries/${D}.png" />
              <p style="text-align:center;color:black;margin-bottom:0px;font-size:15px;font-weight: 400;position:relative;top:-11px;">${D}</p><p style="text-align:center;color:black;margin-bottom:0px;position:relative;top:-31px;">(${this.countryYears[D]})</p>`}),E.addEventListener("mouseout",O=>{E.style.fill="#594ee6"}),E.style.fill="#594ee6")})})}};a.\u0275fac=function(d){return new(d||a)(b(y))},a.\u0275cmp=C({type:a,selectors:[["app-website-about-map"]],standalone:!0,features:[_],decls:34,vars:8,consts:[[1,"country-section","pt-5"],[1,"my_container"],[1,""],[1,"heading-1","text-violeta","text-pr","text-center","text-lg-start","pb-2"],[1,"body-1","text-azul-indigo","text-center","text-lg-justify"],[1,"map-frame",2,"position","relative","width","100%","height","400px","overflow","auto"],["type","image/svg+xml","data",z`./assets/world.svg`,"id","svgMap","width","100%","height","auto",1,"map"],["id","mouseBox"],[1,"container-fluid","pb-3","country-counter"],[1,"row","w-100"],[1,"col-md-4","text-center"],[1,"counter-text"],[1,"counter-country-text","text-center"],[1,"color-icon",2,"color","#594EE6","background-color","#594EE6"],[1,"color-icon",2,"color","#EC589F","background-color","#EC589F"],[1,"color-icon",2,"color","#8AE6DE","background-color","#8AE6DE"]],template:function(d,t){d&1&&(r(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3",3),l(4),o(),r(5,"p",4),l(6),o(),r(7,"div",5),m(8,"object",6),r(9,"div",7),l(10,"Box"),o()()(),r(11,"div",8)(12,"div",9)(13,"div",10)(14,"p",11),l(15),o(),r(16,"p",12)(17,"span",13),l(18,"0"),o(),l(19),o()(),r(20,"div",10)(21,"p",11),l(22),o(),r(23,"p",12)(24,"span",14),l(25,"0"),o(),l(26),o()(),r(27,"div",10)(28,"p",11),l(29),o(),r(30,"p",12)(31,"span",15),l(32,"0"),o(),l(33),o()()()()()()),d&2&&(n(4),c(t.service.page==null||t.service.page.map==null?null:t.service.page.map.title),n(2),c(t.service.page==null||t.service.page.map==null?null:t.service.page.map.description),n(9),c(t.service.page==null||t.service.page.map==null?null:t.service.page.map.counter1),n(4),S(" ",t.service.page==null||t.service.page.map==null?null:t.service.page.map.text1,""),n(3),c(t.service.page==null||t.service.page.map==null?null:t.service.page.map.counter2),n(4),S(" ",t.service.page==null||t.service.page.map==null?null:t.service.page.map.text2,""),n(3),c(t.service.page==null||t.service.page.map==null?null:t.service.page.map.counter3),n(4),S(" ",t.service.page==null||t.service.page.map==null?null:t.service.page.map.text3,""))},styles:["object[_ngcontent-%COMP%]{width:1200px;height:800px}#mouseBox[_ngcontent-%COMP%]{position:absolute;display:none;width:130px;height:117px;background:#fff;border:1px solid black;color:#fff;text-align:center;line-height:40px;border-radius:5px;pointer-events:none}#mouseBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0!important;color:#000}.container[_ngcontent-%COMP%]{max-width:1150px}.country-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.color-icon[_ngcontent-%COMP%]{padding:0 6px;border-radius:54px;font-size:19px}.country-section[_ngcontent-%COMP%]   .counter-text[_ngcontent-%COMP%]{color:#594ee6;text-align:center;font-size:45px;font-family:Red Hat Display;font-weight:600;margin-bottom:0}.country-section[_ngcontent-%COMP%]   .counter-country-text[_ngcontent-%COMP%]{font-family:Red Hat Display;font-size:23px;font-weight:700}"]});let i=a;return i})();function B(i,a){if(i&1&&(r(0,"span",13),m(1,"img",14),r(2,"span"),l(3),o()()),i&2){let e=p().$implicit,s=p(2);n(),v("src",s.apiUrl+"/"+e.flag,g),n(2),c(e.name)}}function $(i,a){if(i&1&&(r(0,"div",5)(1,"div",6)(2,"div",7),m(3,"img",8),o(),r(4,"div",9)(5,"p",10),l(6),o()(),r(7,"div",11)(8,"p",12),l(9),o(),x(10,B,4,2,"span",13),o()()()),i&2){let e=a.$implicit,s=p(2);n(3),v("src",s.apiUrl+"/"+e.image,g),n(3),c(e.title),n(3),c(e.description),n(),u(e.flag?10:-1)}}function L(i,a){if(i&1&&M(0,$,11,4,"div",5,P),i&2){let e=p();h(e.service.page==null||e.service.page.nuestramesadirectiva==null?null:e.service.page.nuestramesadirectiva.posts)}}var U=(()=>{let a=class a{constructor(s){this.service=s,this.apiUrl=f.apiUrl}};a.\u0275fac=function(d){return new(d||a)(b(y))},a.\u0275cmp=C({type:a,selectors:[["app-website-about-directors"]],standalone:!0,features:[_],decls:11,vars:4,consts:[[1,"my_container"],[1,"heading-1","text-azul-indigo","text-center","text-lg-start"],[1,"body-1","text-azul-indigo","text-center","text-lg-justify"],[1,"directros-list"],[1,"heading-2","text-azul-indigo","py-2","text-center","text-lg-start"],[1,"box","my-3"],[1,"row"],[1,"text-center","text-lg-start","col-md-6","col-lg-2"],[1,"dir_img",3,"src"],[1,"text-center","text-lg-start","col-md-6","col-lg-5","px-3","align-self-center"],[1,"heading-3","text-azul-indigo"],[1,"text-center","text-lg-start","col-12","col-lg-5","px-3","align-self-center"],[1,"body-2","detail"],[1,"badge"],[1,"country-icon",3,"src"]],template:function(d,t){d&1&&(r(0,"section")(1,"div",0)(2,"div")(3,"h3",1),l(4),o(),r(5,"p",2),l(6),o()(),r(7,"div",3)(8,"h4",4),l(9),o(),x(10,L,2,0),o()()()),d&2&&(n(4),c(t.service.page==null||t.service.page.nuestramesadirectiva==null?null:t.service.page.nuestramesadirectiva.title),n(2),c(t.service.page==null||t.service.page.nuestramesadirectiva==null?null:t.service.page.nuestramesadirectiva.description),n(3),c(t.service.page==null||t.service.page.nuestramesadirectiva==null?null:t.service.page.nuestramesadirectiva.subtitle),n(),u(!(t.service.page==null||t.service.page.nuestramesadirectiva==null)&&t.service.page.nuestramesadirectiva.posts?10:-1))},styles:["section[_ngcontent-%COMP%]{background-color:#c1c4e8}.directros-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{background-color:#ddd;padding:29px 34px}.directros-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{color:#646b76}.directros-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .dir_img[_ngcontent-%COMP%]{width:100%}.badge[_ngcontent-%COMP%]{font-weight:400;line-height:normal;background:#c1c4e8;border-radius:26px;padding:10px 12px}.country-icon[_ngcontent-%COMP%]{width:25px}.badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font-size:15px;padding:0 4px;font-weight:600}"]});let i=a;return i})();function q(i,a){if(i&1&&(r(0,"div",3)(1,"div",4)(2,"div",5),m(3,"img",6),o(),r(4,"div",7)(5,"p",8),l(6),o()(),r(7,"div",9)(8,"p",10),l(9),o()()()()),i&2){let e=a.$implicit,s=p(2);n(3),v("src",s.apiUrl+"/"+e.image,g),n(3),c(e.title),n(3),c(e.description)}}function V(i,a){if(i&1&&M(0,q,10,3,"div",3,P),i&2){let e=p();h(e.service.page==null||e.service.page.nuestroequipo==null?null:e.service.page.nuestroequipo.posts)}}var k=(()=>{let a=class a{constructor(s){this.service=s,this.apiUrl=f.apiUrl,this.data=[{id:1,name:"Director General",detail:"Pedro Flores",image:"./assets/web/teams/1.png"},{id:2,name:"Director de Programas",detail:"Alejandro Milanesi",image:"./assets/web/teams/2.png"},{id:3,name:"Director de Asuntos Internacionales",detail:"Alexander L\xF3pez",image:"./assets/web/teams/3.png"}]}};a.\u0275fac=function(d){return new(d||a)(b(y))},a.\u0275cmp=C({type:a,selectors:[["app-wesbite-about-team"]],standalone:!0,features:[_],decls:6,vars:2,consts:[[1,"my_container"],[1,"directros-list"],[1,"heading-2","text-azul-indigo","py-2","text-center","text-lg-start"],[1,"box","my-3"],[1,"row"],[1,"text-center","text-lg-start","col-md-6","col-lg-2"],[1,"dir_img",3,"src"],[1,"text-center","text-lg-start","col-md-6","col-lg-5","px-3","align-self-center"],[1,"heading-3","text-azul-indigo","name"],[1,"text-center","text-lg-start","col-12","col-lg-5","px-3","align-self-center"],[1,"body-2","detail"]],template:function(d,t){d&1&&(r(0,"section")(1,"div",0)(2,"div",1)(3,"h4",2),l(4),o(),x(5,V,2,0),o()()()),d&2&&(n(4),c(t.service.page==null||t.service.page.nuestroequipo==null?null:t.service.page.nuestroequipo.title),n(),u(!(t.service.page==null||t.service.page.nuestroequipo==null)&&t.service.page.nuestroequipo.posts?5:-1))},styles:["section[_ngcontent-%COMP%]{background-color:#c1c4e8}.directros-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{background-color:#ddd;padding:29px 34px}.directros-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{color:#646b76}.directros-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .dir_img[_ngcontent-%COMP%]{width:100%}.badge[_ngcontent-%COMP%]{font-weight:400;line-height:normal;background:#c1c4e8;border-radius:26px;padding:10px 12px}.country-icon[_ngcontent-%COMP%]{width:25px}.badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font-size:15px;padding:0 4px;font-weight:600}"]});let i=a;return i})();function H(i,a){if(i&1&&(r(0,"div",5)(1,"div",6)(2,"div",7),m(3,"img",8),o(),r(4,"div",9)(5,"p",10),l(6),o(),r(7,"p",11),l(8),o()()()()),i&2){let e=a.$implicit,s=p(2);n(3),v("src",s.apiUrl+"/"+e.image,g),n(3),c(e.title),n(2),c(e.description)}}function J(i,a){if(i&1&&M(0,H,9,3,"div",5,P),i&2){let e=p();h(e.service.page==null||e.service.page.nuestroconsejo==null?null:e.service.page.nuestroconsejo.posts)}}var G=(()=>{let a=class a{constructor(s){this.service=s,this.apiUrl=f.apiUrl,this.data=[{id:2,name:"Abel Carreira",detail:"Es miembro del Consejo de Administraci\xF3n del Instituto Nacional de Administraci\xF3n, I.P. (INA, I. P.), en Portugal. Es licenciado en Psicolog\xEDa y m\xE1ster en Psicolog\xEDa Social y Organizativa por la Universidad de Lisboa. En su carrera de m\xE1s de 35 a\xF1os, ha ocupado diversos cargos profesionales en el mundo acad\xE9mico y en los sectores p\xFAblico y privado, en \xE1reas relacionadas con el liderazgo, la innovaci\xF3n, el desarrollo y la transformaci\xF3n organizativa, la gesti\xF3n del capital humano y la capacitaci\xF3n y formaci\xF3n.",image:"./assets/web/council/2.png"},{id:3,name:"Mar\xEDa del Carmen Pardo",detail:"Profesora investigadora del Centro de Estudios Internacionales de El Colegio de M\xE9xico (1981 2014) y autora del primer plan de estudios del programa de licenciatura en Pol\xEDtica y Administraci\xF3n P\xFAblica en esa instituci\xF3n. Profesora del Programa de Estudios Interdisciplinarios del El Colegio de M\xE9xico (abril 2014 a la fecha) y profesora invitada al Instituto de Investigaci\xF3n en Pol\xEDtica P\xFAblica y Gobierno UDG (enero 2023 a la fecha). Investigadora Em\xE9rita del Sistema Nacional de Investigadores (2022). Miembro de la Junta de Gobierno del Colegio de Sonora (2023). Doctora en Historia por la Universidad Iberoamericana. Estudios de doctorado en la Universidad de Paris II. Autora de libros, art\xEDculos, cap\xEDtulos de libros, comentarios, y rese\xF1as sobre temas relativos a modernizaci\xF3n administrativa, descentralizaci\xF3n, federalizaci\xF3n educativa, servicio civil de carrera, profesionalizaci\xF3n, gobierno local y \xF3rganos aut\xF3nomos.",image:"./assets/web/council/3.png"},{id:4,name:"Salvador Parrado",detail:"Es profesor de Ciencia Pol\xEDtica de la Universidad Nacional de Educaci\xF3n a Distancia, Madrid. Ha sido investigador visitante en universidades de Alemania, Chile, M\xE9xico, Reino Unido y Turqu\xEDa. Fue editor asociado de Public Administration y es codirector de Governance International desde 2002. Investiga sobre gesti\xF3n p\xFAblica, pol\xEDticas regulatorias, servicio civil y gobernanza p\xFAblica desde una perspectiva comparada.",image:"./assets/web/council/4.png"},{id:5,name:"Alketa Peci",detail:"Professora titular da EBAPE/FGV. Membro do Committee of Experts on Public Administration, United Nations (2021 2025). Editora Chefe da Revista de Administra\xE7\xE3o P\xFAblica e Co Editora da Regulation&Governance. Membro do Conselho Consultivo da ENAP (BR) e do Conselho Estrat\xE9gico da Escola de Administra\xE7\xE3o Publica da Republica do Kosovo. Foi presidente da Associa\xE7\xE3o Nacional de P\xF3s gradua\xE7\xE3o e Pesquisa em Administra\xE7\xE3o (ANPAD) no tri\xEAnio 2021 2023. Seus interesses de pesquisa se situam na interface da administra\xE7\xE3o p\xFAblica e teoria organizacional, com particular interesse nas \xE1reas de regula\xE7\xE3o e institui\xE7\xF5es regulat\xF3rias, e rela\xE7\xF5es estado mercado terceiro setor. Coordenou e integrou mais de 20 projetos de pesquisa que contaram com fundos de financiamentos externos. Publicou dezenas de artigos em revistas como Public Administration Review, Public Management Review, Governance, Regulation & Governance, assim como livros e cap\xEDtulos de livros internacionais e nacionais.",image:"./assets/web/council/5.png"},{id:6,name:"Cristian Pliscoff",detail:"Doctor en Administraci\xF3n P\xFAblica, Universidad de Southern California; Mag\xEDster en Administraci\xF3n y Pol\xEDticas P\xFAblicas, London School of Economics and Political Science; Mag\xEDster Ciencia Pol\xEDtica, Universidad de Chile. Administrador P\xFAblico Universidad de Chile. Fundador y ex presidente de la Red Interamericana de Educaci\xF3n en Administraci\xF3n P\xFAblica (Inpae) (2016-2018). Ha ejercido distintas funciones acad\xE9micas tanto en pre como en posgrado en materias de gesti\xF3n p\xFAblica en Chile y Am\xE9rica Latina. Consultor nacional e internacional en temas de modernizaci\xF3n del Estado, gesti\xF3n de personas en el Estado, as\xED como tambi\xE9n en procesos de acreditaci\xF3n acad\xE9mica de programas de pre y posgrado en administraci\xF3n y pol\xEDticas p\xFAblicas. Es profesional experto del Sistema de Alta Direcci\xF3n P\xFAblica de la Direcci\xF3n Nacional de Servicio Civil del Ministerio de Hacienda. Ha sido editor asociado de la revista Public Administration (2021 2023), y miembro de los comit\xE9s editoriales de las revistas: Asian Journal of Public Administration y Gobernar.",image:"./assets/web/council/6.png"}]}};a.\u0275fac=function(d){return new(d||a)(b(y))},a.\u0275cmp=C({type:a,selectors:[["app-website-about-council"]],standalone:!0,features:[_],decls:22,vars:8,consts:[[1,"my_container"],[1,"heading-1","text-center","text-lg-start"],[1,"body-1","text-center","text-lg-justify"],[1,"directros-list"],[1,"heading-2","text-azul-indigo","py-2","text-center","text-lg-start"],[1,"box","my-3"],[1,"row"],[1,"text-center","col-md-3"],[1,"dir_img",3,"src"],[1,"text-center","text-lg-start","col-md-9","align-self-center"],[1,"heading-3","text-azul-indigo","name"],[1,"body-2","detail","text-center","text-lg-justify"]],template:function(d,t){d&1&&(r(0,"section")(1,"div",0)(2,"div")(3,"h3",1),l(4),o(),r(5,"p",2),l(6),o()(),r(7,"div",3)(8,"h3",4),l(9),o(),r(10,"div",5)(11,"div",6)(12,"div",7),m(13,"img",8),o(),r(14,"div",9)(15,"p",10),l(16),o(),r(17,"p",11),l(18),o()()()(),r(19,"h4",4),l(20),o(),x(21,J,2,0),o()()()),d&2&&(n(4),c(t.service.page==null||t.service.page.nuestroconsejo==null?null:t.service.page.nuestroconsejo.title),n(2),c(t.service.page==null||t.service.page.nuestroconsejo==null?null:t.service.page.nuestroconsejo.description),n(3),c(t.service.page==null||t.service.page.nuestroconsejo==null?null:t.service.page.nuestroconsejo.presidente),n(4),v("src",t.apiUrl+"/"+(t.service.page==null||t.service.page.nuestroconsejo==null?null:t.service.page.nuestroconsejo.presidenteimg),g),n(3),c(t.service.page==null||t.service.page.nuestroconsejo==null?null:t.service.page.nuestroconsejo.presidentetitle),n(2),c(t.service.page==null||t.service.page.nuestroconsejo==null?null:t.service.page.nuestroconsejo.presidentedes),n(2),c(t.service.page==null||t.service.page.nuestroconsejo==null?null:t.service.page.nuestroconsejo.miembros),n(),u(!(t.service.page==null||t.service.page.nuestroconsejo==null)&&t.service.page.nuestroconsejo.posts?21:-1))},styles:["section[_ngcontent-%COMP%]{background-color:#c1c4e8}.directros-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{background-color:#ededed;padding:29px 34px}.directros-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{color:#646b76}.directros-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .dir_img[_ngcontent-%COMP%]{width:150px}.badge[_ngcontent-%COMP%]{font-weight:400;line-height:normal;background:#c1c4e8;border-radius:26px;padding:10px 12px}.country-icon[_ngcontent-%COMP%]{width:25px}.badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font-size:15px;padding:0 4px;font-weight:600}"]});let i=a;return i})();function W(i,a){if(i&1&&(r(0,"div",3)(1,"p",4),l(2),o()()),i&2){let e=a.$implicit;n(2),c(e.title)}}function Y(i,a){if(i&1&&M(0,W,3,1,"div",3,P),i&2){let e=p();h(e.service.page==null||e.service.page.miembrosanteriores==null?null:e.service.page.miembrosanteriores.posts)}}var R=(()=>{let a=class a{constructor(s){this.service=s,this.apiUrl=f.apiUrl}};a.\u0275fac=function(d){return new(d||a)(b(y))},a.\u0275cmp=C({type:a,selectors:[["app-website-about-previous-member"]],standalone:!0,features:[_],decls:6,vars:2,consts:[[1,"my_container"],[1,"heading-2","text-azul-indigo","pb-4","text-center","text-lg-start"],[1,"row","boxes"],[1,"col-md-6"],[1,"heading-3","text-azul-indigo"]],template:function(d,t){d&1&&(r(0,"section")(1,"div",0)(2,"h4",1),l(3),o(),r(4,"div",2),x(5,Y,2,0),o()()()),d&2&&(n(3),c(t.service.page==null||t.service.page.miembrosanteriores==null?null:t.service.page.miembrosanteriores.title),n(2),u(!(t.service.page==null||t.service.page.miembrosanteriores==null)&&t.service.page.miembrosanteriores.posts?5:-1))},styles:["section[_ngcontent-%COMP%]{background-color:#c1c4e8}.boxes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#ddd;padding:6px 34px;border-radius:15px}"]});let i=a;return i})();function K(i,a){if(i&1&&(r(0,"p",13),l(1),o()),i&2){let e=p().$implicit;n(),c(e.title1)}}function Z(i,a){if(i&1&&(r(0,"p",13),l(1),o()),i&2){let e=p().$implicit;n(),c(e.title2)}}function X(i,a){if(i&1&&(r(0,"p",13),l(1),o()),i&2){let e=p().$implicit;n(),c(e.title3)}}function Q(i,a){if(i&1&&(r(0,"p",15),l(1),o()),i&2){let e=p().$implicit;n(),c(e.description1)}}function ee(i,a){if(i&1&&(r(0,"p",15),l(1),o()),i&2){let e=p().$implicit;n(),c(e.description2)}}function te(i,a){if(i&1&&(r(0,"p",15),l(1),o()),i&2){let e=p().$implicit;n(),c(e.description3)}}function ie(i,a){if(i&1&&(r(0,"div",7)(1,"div",8)(2,"div",9),m(3,"img",10),r(4,"p",11),l(5),o()(),r(6,"div",12),x(7,K,2,1,"p",13)(8,Z,2,1,"p",13)(9,X,2,1,"p",13),o(),r(10,"div",14),x(11,Q,2,1,"p",15)(12,ee,2,1,"p",15)(13,te,2,1,"p",15),o()()()),i&2){let e=a.$implicit,s=p(2);n(3),v("src",s.apiUrl+"/"+e.image,g),n(2),c(e.title),n(2),u(e.title1?7:-1),n(),u(e.title2?8:-1),n(),u(e.title3?9:-1),n(2),u(e.description1?11:-1),n(),u(e.description2?12:-1),n(),u(e.description3?13:-1)}}function ne(i,a){if(i&1&&M(0,ie,14,8,"div",7,P),i&2){let e=p();h(e.service.page==null||e.service.page.nuestroconsejodirectivo==null?null:e.service.page.nuestroconsejodirectivo.posts)}}function ae(i,a){if(i&1&&(r(0,"p",13),l(1),o()),i&2){let e=p().$implicit;n(),c(e.title1)}}function oe(i,a){if(i&1&&(r(0,"p",13),l(1),o()),i&2){let e=p().$implicit;n(),c(e.title2)}}function re(i,a){if(i&1&&(r(0,"p",13),l(1),o()),i&2){let e=p().$implicit;n(),c(e.title3)}}function le(i,a){if(i&1&&(r(0,"p",15),l(1),o()),i&2){let e=p().$implicit;n(),c(e.description1)}}function ce(i,a){if(i&1&&(r(0,"p",15),l(1),o()),i&2){let e=p().$implicit;n(),c(e.description2)}}function se(i,a){if(i&1&&(r(0,"p",15),l(1),o()),i&2){let e=p().$implicit;n(),c(e.description3)}}function de(i,a){if(i&1&&(r(0,"div",16)(1,"div",8)(2,"div",9),m(3,"img",10),r(4,"p",17),l(5),o()(),r(6,"div",12),x(7,ae,2,1,"p",13)(8,oe,2,1,"p",13)(9,re,2,1,"p",13),o(),r(10,"div",14),x(11,le,2,1,"p",15)(12,ce,2,1,"p",15)(13,se,2,1,"p",15),o()()()),i&2){let e=a.$implicit,s=p(2);n(3),v("src",s.apiUrl+"/"+e.image,g),n(2),c(e.title),n(2),u(e.title1?7:-1),n(),u(e.title2?8:-1),n(),u(e.title3?9:-1),n(2),u(e.description1?11:-1),n(),u(e.description2?12:-1),n(),u(e.description3?13:-1)}}function pe(i,a){if(i&1&&M(0,de,14,8,"div",16,P),i&2){let e=p();h(e.service.page==null||e.service.page.nuestroconsejodirectivo==null?null:e.service.page.nuestroconsejodirectivo.miembroobservador)}}var N=(()=>{let a=class a{constructor(s){this.service=s,this.apiUrl=f.apiUrl,this.data=[{id:1,title1:"D. Roberto Salcedo Aquino (Titular)",title2:"D. Jaime Arturo Larraz\xE1bal Esc\xE1rraga (Alterno)",detail1:"Secretario de la Secretar\xEDa de la Funci\xF3n P\xFAblica",detail2:"Titular de la Unidad de Pol\xEDtica de Recursos Humanos de la Administraci\xF3n P\xFAblica Federal Secretar\xEDa de la Funci\xF3n P\xFAblica",image:"./assets/web/countyIcons/mexico.png",country:"M\xE9xico"},{id:2,title1:"D. Guillermo Steve Valvivieso Payva\xA0(Titular)",title2:"D\xAA. Geraldine Elia Denise Mouchard Infantes (Alterno)",detail1:"Presidente Ejecutivo de la Autoridad Nacional del Servicio Civil \u2013 SERVIR",detail2:"Secretaria de Gesti\xF3n P\xFAblica de la Presidencia del Consejo de Ministros",image:"./assets/web/countyIcons/peru.png",country:"Per\xFA"},{id:3,title1:"D. Ricardo Jos\xE9 Men\xE9ndez Prieto (Titular)",title2:"D . Wilmara Esther Lugo Morgado (Alterna)",title3:"D. Jos\xE9 Gerardo Avenda\xF1o Rumbos (Alterno)",detail1:"Ministro del Poder Popular de Planificaci\xF3n",detail2:"Viceministra de Planificaci\xF3n Social e Institucional del Ministerio del Poder Popular de Planificaci\xF3n",detail3:"Viceministro de Planificaci\xF3n Estrat\xE9gica y Pol\xEDtica del Ministerio del Poder Popular de Planificaci\xF3n",image:"./assets/web/countyIcons/venezuela.png",country:"Venezuela"},{id:4,title1:"D. Sigmund Freund (Titular)",title2:"D . Grey Josefina Pe\xF1a Cabral (Alterna)",detail1:"Ministro de Administraci\xF3n P\xFAblica (MAP)",detail2:"Viceministro de Reforma y Modernizaci\xF3n de la Administraci\xF3n P\xFAblica del Ministerio de Administraci\xF3n P\xFAblica (MAP)",image:"./assets/web/countyIcons/republica-dominicana.png",country:"Rep\xFAblica Dominicana"},{id:5,title1:"D. \xC1lvaro Elizalde Soto (Titular)",title2:"D. Felipe Melo Rivara (Alterno)",detail1:"Ministro Secretar\xEDa General de la Presidencia",detail2:"Director Nacional del Servicio Civil",image:"./assets/web/countyIcons/chile.png",country:"Chile"},{id:6,title1:"D. Marcelo Alejandro Montenegro G\xF3mez \u2013 Garc\xEDa (Titular)",title2:"D. Zen\xF3n Pedro Mamani Ticona (Alterno)",detail1:"Ministro de Econom\xEDa y Finanzas P\xFAblicas",detail2:"Viceministro de Presupuesto y Contabilidad Fiscal",detail3:"Ministerio de Econom\xEDa\xA0y Finanzas P\xFAblicas",image:"./assets/web/countyIcons/bolivia.png",country:"Bolivia"},{id:7,title1:"(Titular)",title2:"(Alterno)",detail1:"Jefe del Gabinete de Ministros",detail2:"Secretaria de Gesti\xF3n y Empleo P\xFAblico de Jefatura de Gabinete de Ministros",image:"./assets/web/countyIcons/argentina.png",country:"Argentina"},{id:8,title1:"D. C\xE9sar Augusto Manrique Soacha (Titular)",title2:"D. Jes\xFAs Hernando Amado Abril (Alterno)",detail1:"Director General del Departamento Administrativo de la Funci\xF3n P\xFAblica",detail2:"Subdirector del Departamento Administrativo de la Funci\xF3n P\xFAblica",image:"./assets/web/countyIcons/colombia.png",country:"Colombia"},{id:9,title1:"D\xAA. Lorena Moya (Titular)",title2:"(Alterno)",detail1:"Subsecretaria de Gobierno Abierto de la Presidencia de la Rep\xFAblica",detail2:"Subsecretario de Administraci\xF3n P\xFAblica",image:"./assets/web/countyIcons/ecuador.png",country:"Ecuador"},{id:10,title1:"D. Russel Garay Bautista\xA0\xA0(Titular)",detail1:"Secretario Ejecutivo de la Administraci\xF3n Nacional del Servicio Civil",image:"./assets/web/countyIcons/honduras.png",country:"Honduras"},{id:11,title1:"D.\xA0Eduardo Antonio Vel\xE1squez Carrera\xA0(Titular)",title2:"D\xAA.\xA0Ruth Elisabeth \xC1valos Casta\xF1eda\xA0(Alterna)",detail1:"Presidente de la Junta Directiva del Instituto Nacional de Administraci\xF3n P\xFAblica (INAP)",detail2:"Gerente del Instituto Nacional de Administraci\xF3n P\xFAblica (INAP)",image:"./assets/web/countyIcons/guatemala.png",country:"Guatemala"},{id:12,title1:"D. Felipe E. Chapman (Titular)",title2:"D\xAA.\xA0Ivette E. Mart\xEDnez S. (Alterna)",detail1:"Ministro de Econom\xEDa y Finanzas",detail2:"Secretaria General del Ministerio de Econom\xEDa y Finanzas",image:"./assets/web/countyIcons/panama.png",country:"Panam\xE1"},{id:13,title1:"D. Jos\xE9 Adri\xE1n Chavarr\xEDa Montenegro\xA0(Titular)",detail1:"Secretario de Administraci\xF3n Financiera del Ministerio de Hacienda y Cr\xE9dito P\xFAblico",detail2:"Secretaria General del Ministerio de Econom\xEDa y Finanzas",image:"./assets/web/countyIcons/nicaragua.png",country:"Nicaragua"},{id:14,title1:"Costa Rica",title2:"D\xAA. Laura Fern\xE1ndez Delgado (Titular)",title3:"D. Francisco Chang Vargas (Alterno)",detail1:"Ministra de Planificaci\xF3n Nacional y Pol\xEDtica Econ\xF3mica",detail2:"Director General de Servicio Civil",image:"./assets/web/countyIcons/costarica.png",country:"Costa Rica"},{id:15,title1:"D. Jos\xE9 Luis Escriv\xE1 Belmonte (Titular)",title2:"D\xAA. Clara Mapelli Marchena (Alterna)",title3:"D\xAA. Consuelo S\xE1nchez Naranjo (Alterna)",detail1:"Ministro para la Transformaci\xF3n Digital y de la Funci\xF3n P\xFAblica",detail2:"Secretaria de Estado de Funci\xF3n P\xFAblica",detail3:"Directora del Instituto Nacional de Administraci\xF3n P\xFAblica de Espa\xF1a",image:"./assets/web/countyIcons/espana.png",country:"espa\xF1a"},{id:16,title1:"D. Ariel S\xE1nchez (Titular)",title2:"(Alterno)",detail1:"Director de la Oficina Nacional del Servicio Civil de la Presidencia de la Rep\xFAblica",detail2:"Subdirector de la Oficina Nacional del Servicio Civil de la Presidencia de la Rep\xFAblica",image:"./assets/web/countyIcons/uruguay.png",country:"Uruguay"},{id:17,title1:"D\xAA. Esther Dweck (Titular)",title2:"D\xAA. Bet\xE2nia Peixoto Lemos (Alterna)",detail1:"Ministra da Gest\xE3o e da Inova\xE7\xE3o em Servi\xE7os P\xFAblicos",detail2:"Presidenta da Escola Nacional de Administra\xE7\xE3o P\xFAblica",image:"./assets/web/countyIcons/brasil.png",country:"Brasil"},{id:18,title1:"D. Gerardo Montenegro Mor\xE1n (Titular)",title2:"D\xAA. Clara Mariela Columbi\xE9 Santana (Alterna)",detail1:"Director de la Direcci\xF3n de Preparaci\xF3n y Superaci\xF3n de Cuadros",detail2:"Directora de Organizaci\xF3n, Planificaci\xF3n y Control",image:"./assets/web/countyIcons/cuba.png",country:"Cuba"},{id:19,title1:"D. F\xE9lix Augusto Antonio Ulloa Garay (Titular)",title2:"D\xAA.\xA0Claudia De Larin (Alterno)",detail1:"Vicepresidente de la Rep\xFAblica y Director de la Escuela Superior de Innovaci\xF3n en la Administraci\xF3n P\xFAblica (ESIAP)",detail2:"Directora Ejecutiva de la Escuela Superior de Innovaci\xF3n en la Administraci\xF3n P\xFAblica (ESIAP)",image:"./assets/web/countyIcons/el-salvador.png",country:"El Salvador"},{id:20,title1:"D. Carlos Fern\xE1ndez Valdovinos (Titular)",title2:"D\xAA. Andrea Mercedes Picaso (Alterna)",detail1:"Ministro de Econom\xEDa y Finanzas de la Rep\xFAblica",detail2:"Viceministra de Capital Humano y Gesti\xF3n Organizacional del Ministerio de Econom\xEDa y Finanzas de la Rep\xFAblica",image:"./assets/web/countyIcons/paraguay.png",country:"Paraguay"},{id:21,title1:"D. Ant\xF3nio Leit\xE3o Amaro (Titular)",title2:"D\xAA. Luisa Neto\xA0(Alterna)",detail1:"Ministro da Presid\xEAncia",detail2:"Presidente do Conselho Diretivo doInstituto Nacional de Administra\xE7ao, I.P.",image:"./assets/web/countyIcons/portugal.png",country:"Portugal"},{id:22,title1:"D\xAA. Trini Mar\xEDn Gonz\xE1lez\xA0(Titular)",detail1:"Ministra de Asuntos Sociales y Funci\xF3n P\xFAblica",image:"./assets/web/countyIcons/andorra.png",country:"Andorra"},{id:23,title1:"D\xAA. Am\xE9lia Augusto Varela (Titular)",title2:"D\xAA. Sandra Cristina Dos Reis Rodrigues Alves\xA0(Alterna)",detail1:"Secret\xE1ria de Estado da Administra\xE7\xE3o P\xFAblica do Ministerio da Administra\xE7\xE3o P\xFAblica, Trabalho e Seguran\xE7a Social \u2013 MAPTSS",detail2:"Presidente do Conselho de Administra\xE7\xE3o da Escola Nacional de Administra\xE7\xE3o e Pol\xEDticas P\xFAblicas, \u2013 ENAPP",image:"./assets/web/countyIcons/angola.png",country:"Angola"}]}};a.\u0275fac=function(d){return new(d||a)(b(y))},a.\u0275cmp=C({type:a,selectors:[["app-website-about-director-country"]],standalone:!0,features:[_],decls:15,vars:6,consts:[[1,"my_container"],[1,"pb-3"],[1,"heading-1","text-azul-indigo","text-center","text-lg-start"],[1,"body-1","text-azul-indigo","text-center","text-lg-justify"],[1,"directros-list"],[1,"heading-2","py-2","text-center","text-lg-start"],[1,"heading-2","text-azul-indigo","py-2","text-center","text-lg-start"],[1,"box","my-5"],[1,"row"],[1,"align-self-center","text-center","col-md-6","col-lg-2"],[1,"dir_img",3,"src"],[1,"heading-3","text-azul-indigo","pt-2","name","mb-0"],[1,"text-center","text-lg-start","col-md-6","col-lg-5","px-3","align-self-center"],[1,"heading-3","text-azul-indigo","subname"],[1,"text-center","text-lg-start","col-12","col-lg-5","px-3","align-self-center"],[1,"body-2","text-azul-indigo","detail"],[1,"box","my-3"],[1,"heading-3","text-azul-indigo","pt-2","name"]],template:function(d,t){d&1&&(r(0,"section")(1,"div",0)(2,"div",1)(3,"h3",2),l(4),o(),r(5,"p",3),l(6),o()(),r(7,"div",4)(8,"h4",5),l(9),o(),x(10,ne,2,0),o(),r(11,"div",4)(12,"h4",6),l(13),o(),x(14,pe,2,0),o()()()),d&2&&(n(4),c(t.service.page==null||t.service.page.nuestroconsejodirectivo==null?null:t.service.page.nuestroconsejodirectivo.title),n(2),S(" ",t.service.page==null||t.service.page.nuestroconsejodirectivo==null?null:t.service.page.nuestroconsejodirectivo.description," "),n(3),c(t.service.page==null||t.service.page.nuestroconsejodirectivo==null?null:t.service.page.nuestroconsejodirectivo.subtitle),n(),u(!(t.service.page==null||t.service.page.nuestroconsejodirectivo==null)&&t.service.page.nuestroconsejodirectivo.posts?10:-1),n(3),c(t.service.page==null||t.service.page.nuestroconsejodirectivo==null?null:t.service.page.nuestroconsejodirectivo.subtitle2),n(),u(!(t.service.page==null||t.service.page.nuestroconsejodirectivo==null)&&t.service.page.nuestroconsejodirectivo.miembroobservador?14:-1))},styles:["section[_ngcontent-%COMP%]{background-color:#ace3df}.directros-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{background-color:#ddd;padding:20px 50px}.directros-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{color:#646b76}.directros-list[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .dir_img[_ngcontent-%COMP%]{width:113px;padding:18px;background:#c1c4e8;border-radius:152px!important}.badge[_ngcontent-%COMP%]{font-weight:400;line-height:normal;background:#c1c4e8;border-radius:26px;padding:10px 12px}.country-icon[_ngcontent-%COMP%]{width:25px}.badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font-size:15px;padding:0 4px;font-weight:600}"]});let i=a;return i})();function ue(i,a){if(i&1&&(m(0,"app-website-about-banner"),r(1,"section",0)(2,"div",1)(3,"p",2),l(4),o()()(),r(5,"section",3)(6,"div",4)(7,"h3",5),l(8),o(),r(9,"p",6),l(10),o()()(),r(11,"section",7)(12,"div",8)(13,"div",9)(14,"h3",10),l(15),o(),r(16,"p",11),l(17),o(),r(18,"div",12)(19,"a",13),m(20,"img",14),r(21,"span"),l(22),o()(),m(23,"br"),r(24,"a",13),m(25,"img",14),r(26,"span"),l(27),o()()()()(),r(28,"div",15)(29,"div",16),m(30,"img",17),o()()(),m(31,"app-website-about-map"),r(32,"section",18)(33,"div",4)(34,"h3",19),l(35),o(),r(36,"p",20),l(37),o()()(),m(38,"app-website-about-directors")(39,"app-wesbite-about-team")(40,"app-website-about-director-country")(41,"app-website-about-council")(42,"app-website-about-previous-member")),i&2){let e=p();n(4),c(e.service.page==null||e.service.page.about==null?null:e.service.page.about.top),n(4),c(e.service.page==null||e.service.page.about==null?null:e.service.page.about.title),n(2),c(e.service.page==null||e.service.page.about==null?null:e.service.page.about.description),n(5),c(e.service.page==null||e.service.page.mission==null?null:e.service.page.mission.title),n(2),c(e.service.page==null||e.service.page.mission==null?null:e.service.page.mission.description),n(2),v("href",e.service.page==null||e.service.page.mission==null?null:e.service.page.mission.button_1_link,g),n(),v("src",e.apiUrl+"/"+(e.service.page==null||e.service.page.mission==null?null:e.service.page.mission.button_1_image),g),n(2),c(e.service.page==null||e.service.page.mission==null?null:e.service.page.mission.button_1_text),n(2),v("href",e.service.page==null||e.service.page.mission==null?null:e.service.page.mission.button_2_link,g),n(),v("src",e.apiUrl+"/"+(e.service.page==null||e.service.page.mission==null?null:e.service.page.mission.button_2_image),g),n(2),c(e.service.page==null||e.service.page.mission==null?null:e.service.page.mission.button_2_text),n(3),v("src",e.apiUrl+"/"+(e.service.page==null||e.service.page.mission==null?null:e.service.page.mission.image),g),n(5),c(e.service.page==null||e.service.page.gobernanza==null?null:e.service.page.gobernanza.title),n(2),S(" ",e.service.page==null||e.service.page.gobernanza==null?null:e.service.page.gobernanza.description," ")}}var Ne=(()=>{let a=class a{constructor(s,d){this.service=s,this.platformId=d,this.apiUrl=f.apiUrl,T(this.platformId)&&s.setPage("about")}};a.\u0275fac=function(d){return new(d||a)(b(y),b(w))},a.\u0275cmp=C({type:a,selectors:[["app-about"]],standalone:!0,features:[_],decls:1,vars:1,consts:[[1,"hero-section"],[1,"p-5","text-center"],[1,"heading-2","text-azul-indigo","p-0","m-0"],[1,"creation-section","py-sm-5"],[1,"my_container"],[1,"heading-1","text-violeta","py-3","text-center","text-lg-start"],[1,"body-1","text-azul-indigo","text-center","text-lg-justify",2,"white-space","break-spaces"],[1,"mission-section","d-flex"],[1,"mission-left"],[1,""],[1,"heading-1","text-violeta","text-pr","py-sm-3","text-center","text-lg-start"],[1,"body-1","text-azul-indigo","text-center","text-lg-justify",2,"text-align","justify"],[1,"text-center","text-lg-start"],[3,"href"],[3,"src"],[1,"mission-right"],[1,"text-center","text-lg-end"],[1,"banner_img",3,"src"],[1,"gobernanza-section"],[1,"heading-1","text-azul-indigo","text-center","text-lg-start"],[1,"body-1","text-azul-indigo","text-center","text-lg-justify"]],template:function(d,t){d&1&&x(0,ue,43,14),d&2&&u(t.service.page!=null&&t.service.page.about?0:-1)},dependencies:[F,j,U,k,G,R,N],styles:[".hero-section[_ngcontent-%COMP%]{background:#c1c4e8}.hero-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:49px}.mission-section[_ngcontent-%COMP%]   .mission-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:500px}.mission-section[_ngcontent-%COMP%]{align-items:center;max-width:1600px;margin:auto}.mission-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#594ee6;border-color:#594ee6;padding:7px;border-radius:40px;margin:5px 0;display:inline-block}.mission-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-family:Figtree;padding:12px;font-size:16px}.mission-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px}.mission-left[_ngcontent-%COMP%]{padding-right:28px}@media (max-width: 1600px){.mission-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px}.mission-section[_ngcontent-%COMP%]   .mission-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:500px}.mission-left[_ngcontent-%COMP%]{padding-left:136px;padding-right:28px}}@media (max-width: 992px){.mission-left[_ngcontent-%COMP%]{padding:0 10px}.mission-section[_ngcontent-%COMP%]{display:block!important}.mission-right[_ngcontent-%COMP%]   .banner_img[_ngcontent-%COMP%]{width:100%!important;max-width:50%!important}}.gobernanza-section[_ngcontent-%COMP%]{background:#d9d9d9}"]});let i=a;return i})();export{Ne as AboutComponent};
