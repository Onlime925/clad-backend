import{c as p,f as c}from"./chunk-CTDPX7HU.js";import{Aa as s,Oa as u,Ua as m,Va as d,W as r,da as o,eb as f,fb as g,ka as l,kb as h}from"./chunk-BBJBHRII.js";var b=(()=>{let i=class i{constructor(){this.id="",this.Defaultvalue="",this.value="",this.name="",this.editorChange=new l;let e=new Date;this.id="editor-"+e.getTime()+Math.floor(Math.random()*1e3)}ngAfterViewInit(){tinymce.get(this.name)||tinymce.init({selector:"."+this.id,height:300,plugins:"advlist autolink link image lists charmap print preview hr anchor pagebreak",toolbar:"undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",font_formats:"Arial=arial,helvetica,sans-serif; Times New Roman=times new roman,times; Courier New=courier new,courier; Verdana=verdana,geneva,sans-serif;",setup:t=>{t.on("Change KeyUp",()=>{this.value=t.getContent(),this.editorChange.emit(this.value)})}})}ngOnChanges(e){if(e.Defaultvalue&&e.Defaultvalue.currentValue){let t=tinymce.get(this.name);t&&(t.setContent(e.Defaultvalue.currentValue),this.value=e.Defaultvalue.currentValue)}}ngOnDestroy(){let e=tinymce.get(this.name);e&&e.remove()}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=r({type:i,selectors:[["app-my-editor"]],inputs:{Defaultvalue:"Defaultvalue",value:"value",name:"name"},outputs:{editorChange:"editorChange"},standalone:!0,features:[o,h],decls:2,vars:3,consts:[[3,"name","ngClass"]],template:function(t,a){t&1&&(m(0,"textarea",0),f(1),d()),t&2&&(u("name",a.name)("ngClass",a.id),s(),g(a.value))},dependencies:[c,p]});let n=i;return n})();export{b as a};
