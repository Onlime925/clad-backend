import{c as f,f as c}from"./chunk-7KITBK3L.js";import{Na as u,Ta as m,Ua as d,W as l,ca as o,db as g,eb as h,ja as r,jb as p,za as s}from"./chunk-R3V5JELH.js";var O=(()=>{let i=class i{constructor(){this.id="",this.Defaultvalue="",this.value="",this.name="",this.editorChange=new r;let e=new Date;this.id="editor-"+e.getTime()+Math.floor(Math.random()*1e3)}ngAfterViewInit(){let e=tinymce.get(this.name);e||(tinymce.init({selector:"."+this.id,height:300,plugins:"advlist autolink link image lists charmap print preview hr anchor pagebreak",toolbar:"undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",setup:t=>{t.on("Change KeyUp",()=>{this.value=t.getContent(),this.editorChange.emit(this.value)})}}),console.log("register",this.name,e))}ngOnChanges(e){if(e.Defaultvalue&&e.Defaultvalue.currentValue){let t=tinymce.get(this.name);console.log(this.name,t),t&&(t.setContent(e.Defaultvalue.currentValue),this.value=e.Defaultvalue.currentValue)}}ngOnDestroy(){let e=tinymce.get(this.name);e&&e.remove()}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=l({type:i,selectors:[["app-my-editor"]],inputs:{Defaultvalue:"Defaultvalue",value:"value",name:"name"},outputs:{editorChange:"editorChange"},standalone:!0,features:[o,p],decls:2,vars:3,consts:[[3,"name","ngClass"]],template:function(t,a){t&1&&(m(0,"textarea",0),g(1),d()),t&2&&(u("name",a.name)("ngClass",a.id),s(),h(a.value))},dependencies:[c,f]});let n=i;return n})();export{O as a};
