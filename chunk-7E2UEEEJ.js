import{a as R}from"./chunk-DPC7HAZD.js";import{a as V}from"./chunk-SZOWSD7S.js";import{a as $}from"./chunk-LPZWD7QJ.js";import"./chunk-56Y42CFZ.js";import{d as N,e as O,f as M,m as P}from"./chunk-4NJHKZKE.js";import"./chunk-XJQRYUSR.js";import{e as B}from"./chunk-IACLDSZE.js";import{c as F,h as j,x as A}from"./chunk-J2EGX742.js";import{$a as _,Ka as n,La as f,W as I,Ya as d,ab as C,bb as L,cb as a,db as t,ea as D,eb as r,fa as k,hb as T,ib as h,jb as S,ob as l,pb as E,qb as i,vb as w,xb as y}from"./chunk-PQVSAWMG.js";import{d as b}from"./chunk-4CLCTAJ7.js";var J=g=>({"d-none":g});function K(g,s){if(g&1){let c=T();a(0,"div",58)(1,"div",26)(2,"div",19)(3,"label",20),l(4),t(),r(5,"app-img-uploader",42),t()(),a(6,"div",26)(7,"div",19)(8,"label",20),l(9),t(),r(10,"input",96),t()(),a(11,"div",26)(12,"div",19)(13,"label",20),l(14),t(),r(15,"input",96),t()(),a(16,"div",18)(17,"div",19)(18,"label",20),l(19),t(),r(20,"input",96),t()(),a(21,"button",97),h("click",function(){let m=D(c).$index,e=S();return k(e.removeItem("timeline.posts",m))}),l(22,"X"),t()()}if(g&2){let c=s.$implicit,o=s.$index,m=S();n(4),i("Image (",m.lang.lang,")"),n(),d("image",c.image)("name","timeline[posts]["+o+"][image]"),n(4),i("Title (",m.lang.lang,")"),n(),d("name","timeline[posts]["+o+"][title]")("value",c.title),n(4),i("SubTitle (",m.lang.lang,")"),n(),d("name","timeline[posts]["+o+"][subtitle]")("value",c.subtitle),n(4),i("Description (",m.lang.lang,")"),n(),d("name","timeline[posts]["+o+"][description]")("value",c.description)}}var x=(()=>{let s=class s{constructor(o,m,e){this.notification=o,this.lang=m,this.service=e,this.formLoader=!1,this.data={}}ngOnInit(){this.getRecord()}getRecord(){this.formLoader=!0,this.service.find("oportunidades").subscribe({next:o=>{this.data=o.data.oportunidades?JSON.parse(o.data.oportunidades):{},this.formLoader=!1},error:o=>{this.formLoader=!1}})}onSubmit(o){return b(this,null,function*(){this.formLoader=!0;let m=o.target,e=new FormData(m),v={};e.forEach((u,p)=>{v[p]=u}),e.append("name","oportunidades"),this.service.update(e).subscribe({next:u=>{this.getRecord(),this.notification.success(u.message)},error:u=>{let p=u.error;p?p.errors?this.notification.error(Object.values(p.errors)[0]):this.notification.error(p.message):this.notification.error("Something Went Wrong")}})})}add_new(o,m){return b(this,null,function*(){let e=o.split("."),v=this.data;for(let p=0;p<e.length-1;p++)v=v[e[p]];let u=e[e.length-1];Array.isArray(v[u])||(v[u]=[]),v[u].push(m)})}removeItem(o,m){return b(this,null,function*(){let e=o.split("."),v=this.data;for(let p=0;p<e.length-1;p++)v=v[e[p]];let u=e[e.length-1];Array.isArray(v[u])?v[u].splice(m,1):console.error(`Target ${u} is not an array.`)})}};s.\u0275fac=function(m){return new(m||s)(f(A),f(B),f(R))},s.\u0275cmp=I({type:s,selectors:[["app-admin-settings-oportunidades"]],standalone:!0,features:[w],decls:463,vars:146,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[3,"ngSubmit"],[1,"text-center",3,"ngClass"],[1,"row",3,"ngClass"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[1,"row","pt-3"],[1,"col-md-12"],[1,"form-group"],[1,"form-label"],["name","head[title]",1,"form-control",3,"value"],["name","head[description]",1,"form-control"],["name","head[title1]",1,"form-control",3,"value"],["name","head[description1]",1,"form-control"],["name","head[longdes1]",3,"Defaultvalue"],[1,"col-md-6"],["name","head[button1]",1,"form-control",3,"value"],["name","head[link1]",1,"form-control",3,"value"],["name","head[title2]",1,"form-control",3,"value"],["name","head[description2]",1,"form-control"],["name","head[longdes2]",3,"Defaultvalue"],["name","head[button2]",1,"form-control",3,"value"],["name","head[link2]",1,"form-control",3,"value"],["name","head[shortdescription]",1,"form-control"],["name","head[title3]",1,"form-control",3,"value"],["name","head[description3]",1,"form-control"],["name","head[longdes3]",3,"Defaultvalue"],["name","head[button3]",1,"form-control",3,"value"],["name","head[link3]",1,"form-control",3,"value"],[1,"row"],["name","challenge[title]",1,"form-control",3,"value"],[3,"image","name"],["name","challenge[subtitle1]",1,"form-control",3,"value"],["name","challenge[subtitle2]",1,"form-control",3,"value"],["name","challenge[description]",3,"Defaultvalue"],["name","terminos[title]",1,"form-control",3,"value"],["name","terminos[subtitle]",1,"form-control",3,"value"],["name","terminos[description]",1,"form-control"],["name","terminos[subtitle1]",1,"form-control",3,"value"],[1,"col-md-4"],["name","terminos[title1]",1,"form-control",3,"value"],["name","terminos[link1]",1,"form-control",3,"value"],["name","terminos[title2]",1,"form-control",3,"value"],["name","terminos[link2]",1,"form-control",3,"value"],["name","terminos[title3]",1,"form-control",3,"value"],["name","terminos[link3]",1,"form-control",3,"value"],["name","timeline[title]",1,"form-control",3,"value"],[1,"row","mb-4","px-3","py-3","border","box-seprator"],[1,"row","pb-2"],[1,"col-12","text-center"],["type","button",1,"btn","btn-success","text-white",3,"click"],["name","estructura[title]",1,"form-control",3,"value"],["name","estructura[description]",3,"Defaultvalue"],["name","jurado[title]",1,"form-control",3,"value"],["name","jurado[description]",3,"Defaultvalue"],["name","premios[title]",1,"form-control",3,"value"],["name","premios[description]",3,"Defaultvalue"],["name","monetarios[title]",1,"form-control",3,"value"],["name","monetarios[title1]",1,"form-control",3,"value"],["name","monetarios[subtitle1]",1,"form-control",3,"value"],["name","monetarios[title2]",1,"form-control",3,"value"],["name","monetarios[subtitle2]",1,"form-control",3,"value"],["name","monetarios[title3]",1,"form-control",3,"value"],["name","monetarios[subtitle3]",1,"form-control",3,"value"],["name","adicionales[title]",1,"form-control",3,"value"],["name","adicionales[description1]",3,"Defaultvalue"],["name","adicionales[description2]",3,"Defaultvalue"],["name","adicionales[description3]",3,"Defaultvalue"],["name","adicionales[description4]",3,"Defaultvalue"],["name","normativas[title]",1,"form-control",3,"value"],["name","normativas[description]",3,"Defaultvalue"],["name","enviar[title]",1,"form-control",3,"value"],["name","enviar[description]",3,"Defaultvalue"],["name","rosters[title]",1,"form-control",3,"value"],["name","rosters[button]",1,"form-control",3,"value"],["name","rosters[link]",1,"form-control",3,"value"],["name","dudas[title]",1,"form-control",3,"value"],["name","dudas[description]",1,"form-control",3,"value"],["name","dudas[button1]",1,"form-control",3,"value"],["name","dudas[link1]",1,"form-control",3,"value"],["name","dudas[button2]",1,"form-control",3,"value"],["name","dudas[link2]",1,"form-control",3,"value"],[1,"row","pb-5"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white"],[1,"form-control",3,"name","value"],["type","button",1,"delete_btn","btn","btn-danger",3,"click"]],template:function(m,e){m&1&&(a(0,"div",0)(1,"div",1)(2,"h4",2),l(3,"Oportunidades"),t()(),a(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),l(9,"Admin"),t()(),a(10,"li",8),l(11,"Oportunidades"),t()()()()(),a(12,"form",9),h("ngSubmit",function(u){return e.onSubmit(u)}),a(13,"p",10),l(14,"Loading"),t(),a(15,"div",11)(16,"div",12)(17,"div",13)(18,"div",14)(19,"h4",15),l(20,"Main Heading"),t()(),a(21,"div",16)(22,"div",17)(23,"div",18)(24,"div",19)(25,"label",20),l(26),t(),r(27,"input",21),t()(),a(28,"div",18)(29,"div",19)(30,"label",20),l(31),t(),a(32,"textarea",22),l(33),t()()(),a(34,"div",18)(35,"div",19)(36,"label",20),l(37),t(),r(38,"input",23),t()(),a(39,"div",18)(40,"div",19)(41,"label",20),l(42),t(),a(43,"textarea",24),l(44),t()()(),a(45,"div",18)(46,"div",19)(47,"label",20),l(48),t(),r(49,"app-my-editor",25),t()(),a(50,"div",26)(51,"div",19)(52,"label",20),l(53),t(),r(54,"input",27),t()(),a(55,"div",26)(56,"div",19)(57,"label",20),l(58),t(),r(59,"input",28),t()(),a(60,"div",18)(61,"div",19)(62,"label",20),l(63),t(),r(64,"input",29),t()(),a(65,"div",18)(66,"div",19)(67,"label",20),l(68),t(),a(69,"textarea",30),l(70),t()()(),a(71,"div",18)(72,"div",19)(73,"label",20),l(74),t(),r(75,"app-my-editor",31),t()(),a(76,"div",26)(77,"div",19)(78,"label",20),l(79),t(),r(80,"input",32),t()(),a(81,"div",26)(82,"div",19)(83,"label",20),l(84),t(),r(85,"input",33),t()(),a(86,"div",18)(87,"div",19)(88,"label",20),l(89),t(),a(90,"textarea",34),l(91),t()()(),a(92,"div",18)(93,"div",19)(94,"label",20),l(95),t(),r(96,"input",35),t()(),a(97,"div",18)(98,"div",19)(99,"label",20),l(100),t(),a(101,"textarea",36),l(102),t()()(),a(103,"div",18)(104,"div",19)(105,"label",20),l(106),t(),r(107,"app-my-editor",37),t()(),a(108,"div",26)(109,"div",19)(110,"label",20),l(111),t(),r(112,"input",38),t()(),a(113,"div",26)(114,"div",19)(115,"label",20),l(116),t(),r(117,"input",39),t()()()()()(),a(118,"div",12)(119,"div",13)(120,"div",14)(121,"h4",15),l(122,"CLAD-BID: Desaf\xEDo D+: Comparte casos de estudio impactantes y s\xE9 parte de esta revoluci\xF3n en la administraci\xF3n p\xFAblica"),t()(),a(123,"div",16)(124,"div",40)(125,"div",18)(126,"div",19)(127,"label",20),l(128),t(),r(129,"input",41),t()(),a(130,"div",18)(131,"div",19)(132,"label",20),l(133),t(),r(134,"app-img-uploader",42),t()(),a(135,"div",18)(136,"div",19)(137,"label",20),l(138),t(),r(139,"input",43),t()(),a(140,"div",18)(141,"div",19)(142,"label",20),l(143),t(),r(144,"input",44),t()(),a(145,"div",18)(146,"div",19)(147,"label",20),l(148),t(),r(149,"app-my-editor",45),t()()()()()(),a(150,"div",12)(151,"div",13)(152,"div",14)(153,"h4",15),l(154,"T\xE9rminos y condiciones"),t()(),a(155,"div",16)(156,"div",17)(157,"div",18)(158,"div",19)(159,"label",20),l(160),t(),r(161,"input",46),t()(),a(162,"div",18)(163,"div",19)(164,"label",20),l(165),t(),r(166,"input",47),t()(),a(167,"div",18)(168,"div",19)(169,"label",20),l(170),t(),a(171,"textarea",48),l(172),t()()(),a(173,"div",18)(174,"div",19)(175,"label",20),l(176),t(),r(177,"input",49),t()(),a(178,"div",50)(179,"div",19)(180,"label",20),l(181),t(),r(182,"app-img-uploader",42),t()(),a(183,"div",50)(184,"div",19)(185,"label",20),l(186),t(),r(187,"input",51),t()(),a(188,"div",50)(189,"div",19)(190,"label",20),l(191),t(),r(192,"input",52),t()(),a(193,"div",50)(194,"div",19)(195,"label",20),l(196),t(),r(197,"app-img-uploader",42),t()(),a(198,"div",50)(199,"div",19)(200,"label",20),l(201),t(),r(202,"input",53),t()(),a(203,"div",50)(204,"div",19)(205,"label",20),l(206),t(),r(207,"input",54),t()(),a(208,"div",50)(209,"div",19)(210,"label",20),l(211),t(),r(212,"app-img-uploader",42),t()(),a(213,"div",50)(214,"div",19)(215,"label",20),l(216),t(),r(217,"input",55),t()(),a(218,"div",50)(219,"div",19)(220,"label",20),l(221),t(),r(222,"input",56),t()()()()()(),a(223,"div",12)(224,"div",13)(225,"div",14)(226,"h4",15),l(227,"L\xEDnea de tiempo"),t()(),a(228,"div",16)(229,"div",17)(230,"div",18)(231,"div",19)(232,"label",20),l(233),t(),r(234,"input",57),t()()(),C(235,K,23,12,"div",58,_),a(237,"div",59)(238,"div",60)(239,"button",61),h("click",function(){return e.add_new("timeline.posts",{title:"",image:"",description:"",subtitle:""})}),l(240,"+"),t()()()()()(),a(241,"div",12)(242,"div",13)(243,"div",14)(244,"h4",15),l(245,"Estructura de los Casos de Estudio"),t()(),a(246,"div",16)(247,"div",40)(248,"div",18)(249,"div",19)(250,"label",20),l(251),t(),r(252,"input",62),t()(),a(253,"div",18)(254,"div",19)(255,"label",20),l(256),t(),r(257,"app-my-editor",63),t()()()()()(),a(258,"div",12)(259,"div",13)(260,"div",14)(261,"h4",15),l(262,"Jurado"),t()(),a(263,"div",16)(264,"div",40)(265,"div",18)(266,"div",19)(267,"label",20),l(268),t(),r(269,"input",64),t()(),a(270,"div",18)(271,"div",19)(272,"label",20),l(273),t(),r(274,"app-my-editor",65),t()()()()()(),a(275,"div",12)(276,"div",13)(277,"div",14)(278,"h4",15),l(279,"Premios para el Concurso de Estudios de Casos del BID y el CLAD "),t()(),a(280,"div",16)(281,"div",40)(282,"div",18)(283,"div",19)(284,"label",20),l(285),t(),r(286,"input",66),t()(),a(287,"div",18)(288,"div",19)(289,"label",20),l(290),t(),r(291,"app-my-editor",67),t()()()()()(),a(292,"div",12)(293,"div",13)(294,"div",14)(295,"h4",15),l(296,"Premios Monetarios:"),t()(),a(297,"div",16)(298,"div",40)(299,"div",18)(300,"div",19)(301,"label",20),l(302),t(),r(303,"input",68),t()(),a(304,"div",26)(305,"div",19)(306,"label",20),l(307),t(),r(308,"input",69),t()(),a(309,"div",26)(310,"div",19)(311,"label",20),l(312),t(),r(313,"input",70),t()(),a(314,"div",26)(315,"div",19)(316,"label",20),l(317),t(),r(318,"input",71),t()(),a(319,"div",26)(320,"div",19)(321,"label",20),l(322),t(),r(323,"input",72),t()(),a(324,"div",26)(325,"div",19)(326,"label",20),l(327),t(),r(328,"input",73),t()(),a(329,"div",26)(330,"div",19)(331,"label",20),l(332),t(),r(333,"input",74),t()()()()()(),a(334,"div",12)(335,"div",13)(336,"div",14)(337,"h4",15),l(338,"Premios Adicionales:"),t()(),a(339,"div",16)(340,"div",40)(341,"div",18)(342,"div",19)(343,"label",20),l(344),t(),r(345,"input",75),t()(),a(346,"div",18)(347,"div",19)(348,"label",20),l(349),t(),r(350,"app-my-editor",76),t()(),a(351,"div",18)(352,"div",19)(353,"label",20),l(354),t(),r(355,"app-my-editor",77),t()(),a(356,"div",18)(357,"div",19)(358,"label",20),l(359),t(),r(360,"app-my-editor",78),t()(),a(361,"div",18)(362,"div",19)(363,"label",20),l(364),t(),r(365,"app-my-editor",79),t()()()()()(),a(366,"div",12)(367,"div",13)(368,"div",14)(369,"h4",15),l(370,"Normativas de presentaci\xF3n de los trabajos "),t()(),a(371,"div",16)(372,"div",40)(373,"div",18)(374,"div",19)(375,"label",20),l(376),t(),r(377,"input",80),t()(),a(378,"div",18)(379,"div",19)(380,"label",20),l(381),t(),r(382,"app-my-editor",81),t()()()()()(),a(383,"div",12)(384,"div",13)(385,"div",14)(386,"h4",15),l(387,"Enviar Propuesta"),t()(),a(388,"div",16)(389,"div",40)(390,"div",18)(391,"div",19)(392,"label",20),l(393),t(),r(394,"input",82),t()(),a(395,"div",18)(396,"div",19)(397,"label",20),l(398),t(),r(399,"app-my-editor",83),t()()()()()(),a(400,"div",12)(401,"div",13)(402,"div",14)(403,"h4",15),l(404,"Rosters de Consultores"),t()(),a(405,"div",16)(406,"div",40)(407,"div",18)(408,"div",19)(409,"label",20),l(410),t(),r(411,"input",84),t()(),a(412,"div",18)(413,"div",19)(414,"label",20),l(415),t(),r(416,"input",85),t()(),a(417,"div",18)(418,"div",19)(419,"label",20),l(420),t(),r(421,"input",86),t()()()()()(),a(422,"div",12)(423,"div",13)(424,"div",14)(425,"h4",15),l(426,"Dudas - Contacto"),t()(),a(427,"div",16)(428,"div",40)(429,"div",18)(430,"div",19)(431,"label",20),l(432),t(),r(433,"input",87),t()(),a(434,"div",18)(435,"div",19)(436,"label",20),l(437),t(),r(438,"input",88),t()(),a(439,"div",26)(440,"div",19)(441,"label",20),l(442),t(),r(443,"input",89),t()(),a(444,"div",26)(445,"div",19)(446,"label",20),l(447),t(),r(448,"input",90),t()(),a(449,"div",26)(450,"div",19)(451,"label",20),l(452),t(),r(453,"input",91),t()(),a(454,"div",26)(455,"div",19)(456,"label",20),l(457),t(),r(458,"input",92),t()()()()()()(),a(459,"div",93)(460,"div",94)(461,"button",95),l(462,"Submit"),t()()()()),m&2&&(n(13),d("ngClass",y(142,J,!e.formLoader)),n(2),d("ngClass",y(144,J,e.formLoader)),n(11),i("Main Title (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.head==null?null:e.data.head.title),n(4),i("Description (",e.lang.lang,")"),n(2),E(e.data==null||e.data.head==null?null:e.data.head.description),n(4),i("Vacantes Profesionales (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.head==null?null:e.data.head.title1),n(4),i("Description(",e.lang.lang,")"),n(2),E(e.data==null||e.data.head==null?null:e.data.head.description1),n(4),i("Full Detail (",e.lang.lang,")"),n(),d("Defaultvalue",e.data==null||e.data.head==null?null:e.data.head.longdes1),n(4),i("Button (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.head==null?null:e.data.head.button1),n(4),i("Link (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.head==null?null:e.data.head.link1),n(4),i("Pasant\xEDas (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.head==null?null:e.data.head.title2),n(4),i("Description(",e.lang.lang,")"),n(2),E(e.data==null||e.data.head==null?null:e.data.head.description2),n(4),i("Full Detail (",e.lang.lang,")"),n(),d("Defaultvalue",e.data==null||e.data.head==null?null:e.data.head.longdes2),n(4),i("Button (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.head==null?null:e.data.head.button2),n(4),i("Link (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.head==null?null:e.data.head.link2),n(4),i("Short Description(",e.lang.lang,")"),n(2),E(e.data==null||e.data.head==null?null:e.data.head.shortdescription),n(4),i("Compras - Licitaciones (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.head==null?null:e.data.head.title3),n(4),i("Description(",e.lang.lang,")"),n(2),E(e.data==null||e.data.head==null?null:e.data.head.description3),n(4),i("Full Detail (",e.lang.lang,")"),n(),d("Defaultvalue",e.data==null||e.data.head==null?null:e.data.head.longdes3),n(4),i("Button (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.head==null?null:e.data.head.button3),n(4),i("Link (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.head==null?null:e.data.head.link3),n(11),i("Title (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.challenge==null?null:e.data.challenge.title),n(4),i("Image (",e.lang.lang,")"),n(),d("image",e.data==null||e.data.challenge==null?null:e.data.challenge.image)("name","challenge[image]"),n(4),i("SubTitle (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.challenge==null?null:e.data.challenge.subtitle1),n(4),i("SubTitle (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.challenge==null?null:e.data.challenge.subtitle2),n(4),i("Description (",e.lang.lang,")"),n(),d("Defaultvalue",e.data==null||e.data.challenge==null?null:e.data.challenge.description),n(11),i("T\xE9rminos y condiciones (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.terminos==null?null:e.data.terminos.title),n(4),i("Participantes (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.terminos==null?null:e.data.terminos.subtitle),n(4),i("Description (",e.lang.lang,")"),n(2),E(e.data==null||e.data.terminos==null?null:e.data.terminos.description),n(4),i("Idiomas (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.terminos==null?null:e.data.terminos.subtitle1),n(4),i("Icon 1 (",e.lang.lang,")"),n(),d("image",e.data==null||e.data.terminos==null?null:e.data.terminos.image1)("name","terminos[image1]"),n(4),i("Description 1 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.terminos==null?null:e.data.terminos.title1),n(4),i("Link 1 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.terminos==null?null:e.data.terminos.link1),n(4),i("Icon 2 (",e.lang.lang,")"),n(),d("image",e.data==null||e.data.terminos==null?null:e.data.terminos.image2)("name","terminos[image2]"),n(4),i("Description 2 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.terminos==null?null:e.data.terminos.title2),n(4),i("Link 2 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.terminos==null?null:e.data.terminos.link2),n(4),i("Icon 3 (",e.lang.lang,")"),n(),d("image",e.data==null||e.data.terminos==null?null:e.data.terminos.image3)("name","terminos[image3]"),n(4),i("Description 3 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.terminos==null?null:e.data.terminos.title3),n(4),i("Link 3 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.terminos==null?null:e.data.terminos.link2),n(11),i("L\xEDnea de tiempo (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.timeline==null?null:e.data.timeline.title),n(),L(e.data==null||e.data.timeline==null?null:e.data.timeline.posts),n(16),i("Estructura de los Casos de Estudio (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.estructura==null?null:e.data.estructura.title),n(4),i("Description (",e.lang.lang,")"),n(),d("Defaultvalue",e.data==null||e.data.estructura==null?null:e.data.estructura.description),n(11),i("Jurado (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.jurado==null?null:e.data.jurado.title),n(4),i("Description (",e.lang.lang,")"),n(),d("Defaultvalue",e.data==null||e.data.jurado==null?null:e.data.jurado.description),n(11),i("Title (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.premios==null?null:e.data.premios.title),n(4),i("Description (",e.lang.lang,")"),n(),d("Defaultvalue",e.data==null||e.data.premios==null?null:e.data.premios.description),n(11),i("Title (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.monetarios==null?null:e.data.monetarios.title),n(4),i("Title 1 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.monetarios==null?null:e.data.monetarios.title1),n(4),i("Description 1 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.monetarios==null?null:e.data.monetarios.subtitle1),n(4),i("Title 2 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.monetarios==null?null:e.data.monetarios.title2),n(4),i("Description 2 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.monetarios==null?null:e.data.monetarios.subtitle2),n(4),i("Title 3 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.monetarios==null?null:e.data.monetarios.title3),n(4),i("Description 3 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.monetarios==null?null:e.data.monetarios.subtitle3),n(11),i("Title (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.adicionales==null?null:e.data.adicionales.title),n(4),i("Description 1 (",e.lang.lang,")"),n(),d("Defaultvalue",e.data==null||e.data.adicionales==null?null:e.data.adicionales.description1),n(4),i("Description 2 (",e.lang.lang,")"),n(),d("Defaultvalue",e.data==null||e.data.adicionales==null?null:e.data.adicionales.description2),n(4),i("Description 3 (",e.lang.lang,")"),n(),d("Defaultvalue",e.data==null||e.data.adicionales==null?null:e.data.adicionales.description3),n(4),i("Description 4(",e.lang.lang,")"),n(),d("Defaultvalue",e.data==null||e.data.adicionales==null?null:e.data.adicionales.description4),n(11),i("Normativas de presentaci\xF3n de los trabajos (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.normativas==null?null:e.data.normativas.title),n(4),i("Description (",e.lang.lang,")"),n(),d("Defaultvalue",e.data==null||e.data.normativas==null?null:e.data.normativas.description),n(11),i("Enviar Propuesta (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.enviar==null?null:e.data.enviar.title),n(4),i("Description (",e.lang.lang,")"),n(),d("Defaultvalue",e.data==null||e.data.enviar==null?null:e.data.enviar.description),n(11),i("Title (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.rosters==null?null:e.data.rosters.title),n(4),i("Button (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.rosters==null?null:e.data.rosters.button),n(4),i("Link (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.rosters==null?null:e.data.rosters.link),n(11),i("Title (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.dudas==null?null:e.data.dudas.title),n(4),i("Description (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.dudas==null?null:e.data.dudas.description),n(4),i("Button 1 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.dudas==null?null:e.data.dudas.button1),n(4),i("Link 1 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.dudas==null?null:e.data.dudas.link1),n(4),i("Button 2 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.dudas==null?null:e.data.dudas.button2),n(4),i("Link 2 (",e.lang.lang,")"),n(),d("value",e.data==null||e.data.dudas==null?null:e.data.dudas.link2))},dependencies:[j,F,P,M,N,O,$,V],encapsulation:2});let g=s;return g})();export{x as SettingOportunidadesComponent};
