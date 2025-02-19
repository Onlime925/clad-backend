import{c as g,h as f}from"./chunk-J2EGX742.js";import{Ka as s,W as l,Ya as d,cb as p,da as r,db as c,ka as o,ob as m,pb as u,vb as h}from"./chunk-PQVSAWMG.js";var T=(()=>{let a=class a{constructor(){this.id="",this.Defaultvalue="",this.value="",this.name="",this.editorChange=new o;let e=new Date;this.id="editor-"+e.getTime()+Math.floor(Math.random()*1e3)}ngAfterViewInit(){tinymce.get(this.name)||tinymce.init({selector:"."+this.id,height:300,plugins:"advlist autolink link image lists charmap print preview hr anchor pagebreak code textcolor colorpicker table image media emoticons wordcount fullscreen template",toolbar:"undo redo | bold italic | fontselect fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | image | media | emoticons | wordcount | fullscreen | template",font_formats:"Figtree=Figtree, sans-serif; Red Hat Display=Red Hat Display, Arial=arial,helvetica,sans-serif; Times New Roman=times new roman,times; Courier New=courier new,courier; Verdana=verdana,geneva,sans-serif;",templates:[{title:"Two Column Layout",description:"A two-column layout with text on the left and an image on the right.",content:`
                  <div style="display: flex;">
                    <div style="flex: 1; padding: 10px;">
                      <p>This is the left column.</p>
                    </div>
                    <div style="flex: 1; padding: 10px;">
                      <img src="https://via.placeholder.com/150" alt="Placeholder Image" />
                    </div>
                  </div>
                `},{title:"Header and Paragraph",description:"A simple header with a paragraph.",content:`
                  <h2>Header</h2>
                  <p>This is a paragraph below the header.</p>
                `},{title:"Table Template",description:"A pre-defined table template.",content:`
                  <table style="width: 100%; border: 1px solid #ccc; border-collapse: collapse;">
                    <tr>
                      <th style="border: 1px solid #ccc; padding: 8px;">Header 1</th>
                      <th style="border: 1px solid #ccc; padding: 8px;">Header 2</th>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ccc; padding: 8px;">Data 1</td>
                      <td style="border: 1px solid #ccc; padding: 8px;">Data 2</td>
                    </tr>
                  </table>
                `}],setup:t=>{t.on("Change KeyUp",()=>{this.value=t.getContent(),this.editorChange.emit(this.value)})}})}ngOnChanges(e){if(e.Defaultvalue&&e.Defaultvalue.currentValue){let t=tinymce.get(this.name);t&&(t.setContent(e.Defaultvalue.currentValue),this.value=e.Defaultvalue.currentValue)}}ngOnDestroy(){let e=tinymce.get(this.name);e&&e.remove()}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=l({type:a,selectors:[["app-my-editor"]],inputs:{Defaultvalue:"Defaultvalue",value:"value",name:"name"},outputs:{editorChange:"editorChange"},standalone:!0,features:[r,h],decls:2,vars:3,consts:[[3,"name","ngClass"]],template:function(t,n){t&1&&(p(0,"textarea",0),m(1),c()),t&2&&(d("name",n.name)("ngClass",n.id),s(),u(n.value))},dependencies:[f,g]});let i=a;return i})();export{T as a};
