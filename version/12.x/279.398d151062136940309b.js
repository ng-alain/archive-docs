"use strict";(self.webpackChunkdelon=self.webpackChunkdelon||[]).push([[279],{2279:(oo,p,r)=>{r.r(p),r.d(p,{FormPagesModule:()=>W});var Z=r(3423),o=r(7716),u=r(665),c=r(8583),N=r(2759),D=r(4395);const g=new o.OlP("NU_MONACO_EDITOR_CONFIG");let _,C=!1,v=(()=>{class n{constructor(t,e,i,a){this.el=t,this.doc=i,this.ngZone=a,this._resize$=null,this._disabled=!1,this.height="200px",this.delay=0,this.event=new o.vpe,this._config=Object.assign({baseUrl:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min"},e),this.options=this._config.defaultOptions}set disabled(t){this._disabled="string"==typeof t||t,this.setDisabled()}set options(t){this._options=Object.assign(Object.assign({},this._config.defaultOptions),t)}get options(){return this._options}initMonaco(t,e){}notifyEvent(t,e){this.ngZone.run(()=>this.event.emit(Object.assign({type:t,editor:this._editor},e)))}setDisabled(){return this._editor&&this._editor.updateOptions({readOnly:this._disabled}),this}init(){C?_.then(()=>this.initMonaco(this.options,!0)):(C=!0,_=new Promise((t,e)=>{const i=window;if(null==i)return void t();if(i.monaco)return void t();const a=this._config.baseUrl,d=()=>{i.require.config({paths:{vs:`${a}/vs`}}),"function"==typeof this._config.monacoPreLoad&&this._config.monacoPreLoad(),i.require(["vs/editor/editor.main"],()=>{"function"==typeof this._config.monacoLoad&&this._config.monacoLoad(i.monaco),this.initMonaco(this.options,!0),t()},()=>{e("Unable to load editor/editor.main module, please check your network environment.")})};if(i.require)d();else{const l=this.doc.createElement("script");l.type="text/javascript",l.src=`${a}/vs/loader.js`,l.onload=d,l.onerror=()=>e(`Unable to load ${l.src}, please check your network environment.`),this.doc.getElementsByTagName("head")[0].appendChild(l)}}).catch(t=>this.notifyEvent("load-error",{error:t})))}cleanResize(){return this._resize$&&this._resize$.unsubscribe(),this}registerResize(){return this.cleanResize(),this._resize$=(0,N.R)(window,"resize").pipe((0,D.b)(100)).subscribe(()=>{this._editor.layout(),this.notifyEvent("resize")}),this}updateOptions(){!this._editor||this.ngZone.runOutsideAngular(()=>{this._editor.dispose(),this.initMonaco(this._options,!1)})}ngAfterViewInit(){this.ngZone.runOutsideAngular(()=>setTimeout(()=>this.init(),+this.delay))}ngOnChanges(t){const e=Object.keys(t);1===e.length&&"disabled"===e[0]||this.updateOptions()}ngOnDestroy(){this.cleanResize(),this._editor&&(this._editor.dispose(),this._editor=void 0)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.SBq),o.Y36(g),o.Y36(c.K0),o.Y36(o.R0b))},n.\u0275cmp=o.Xpm({type:n,selectors:[["nu-monaco-base"]],inputs:{height:"height",delay:"delay",options:"options",disabled:"disabled"},outputs:{event:"event"},features:[o.TTD],decls:0,vars:0,template:function(t,e){},encapsulation:2}),n})(),z=(()=>{class n extends v{constructor(){super(...arguments),this._value="",this.onChange=t=>{},this.onTouched=()=>{}}get editor(){return this._editor}initMonaco(t,e){const i=!!this.model;if(i){const d=monaco.editor.getModel(this.model.uri||"");if(d)t.model=d,t.model.setValue(this._value);else{const{value:l,language:m,uri:f}=this.model;t.model=monaco.editor.createModel(l||this._value,m,f)}}t.readOnly=this._disabled;const a=this._editor=monaco.editor.create(this.el.nativeElement,t);i||a.setValue(this._value),a.onDidChangeModelContent(()=>{const d=a.getValue();this.ngZone.run(()=>{this._value=d,this.onChange(d)})}),a.onDidBlurEditorWidget(()=>this.onTouched()),this.registerResize(),a.getAction("editor.action.formatDocument").run().then(()=>this.notifyEvent(e?"init":"re-init"))}writeValue(t){this._value=t||"",this._editor&&this._editor.setValue(this._value)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this.setDisabled()}}return n.\u0275fac=function(){let s;return function(e){return(s||(s=o.n5z(n)))(e||n)}}(),n.\u0275cmp=o.Xpm({type:n,selectors:[["nu-monaco-editor"]],hostVars:4,hostBindings:function(t,e){2&t&&o.Udp("display","block")("height",e.height)},inputs:{model:"model"},exportAs:["nuMonacoEditor"],features:[o._Bn([{provide:u.JU,useExisting:(0,o.Gpc)(()=>n),multi:!0}]),o.qOj],decls:0,vars:0,template:function(t,e){},encapsulation:2,changeDetection:0}),n})(),S=(()=>{class n{static forRoot(t){return{ngModule:n,providers:[{provide:g,useValue:t}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[c.ez]]}),n})();var V=r(7465),J=r(1337),A=r(9765),x=r(6782),M=r(9643),B=r(766),Q=r(496),U=r(1807),$=r(8058),y=r(6704),T=r(269),h=r(1398),E=r(4453),j=r(4514),L=r(9374),R=r(7420),Y=r(7828),b=r(4828),w=r(4927),G=r(2567);const I=["schemaEditor"],P=["formCodeEditor"],k=["uiEditor"];function H(n,s){if(1&n&&o._UZ(0,"nz-option",24),2&n){const t=s.$implicit;o.Q6J("nzValue",t.name)("nzLabel",t.title)}}function q(n,s){if(1&n){const t=o.EpF();o.TgZ(0,"div",1),o.TgZ(1,"sf",25),o.NdJ("formSubmit",function(i){return o.CHM(t),o.oxw().submit(i)})("formChange",function(i){return o.CHM(t),o.oxw().change(i)})("formValueChange",function(i){return o.CHM(t),o.oxw().valueChange(i)})("formError",function(i){return o.CHM(t),o.oxw().error(i)}),o.qZA(),o.qZA()}if(2&n){const t=o.oxw();o.Q6J("nzSpan",t.expand?12:24),o.xp6(1),o.Q6J("schema",t.schemaData)("formData",t.formData)("ui",t.uiSchema)("layout",t.layout)}}const K=[{path:"",component:V.S,children:[{path:"validator/:lang",component:(()=>{class n{constructor(t,e,i,a,d,l){this.i18n=t,this.codeSrv=e,this.http=i,this.msg=a,this.appService=d,this.cdr=l,this.destroy$=new A.xQ,this.files=[{name:"basic",title:"\u57fa\u672c"},{name:"conditional",title:"\u6761\u4ef6"},{name:"sort",title:"\u987a\u5e8f"},{name:"validation",title:"\u81ea\u5b9a\u4e49\u6821\u9a8c"},{name:"fixed",title:"\u4e0d\u89c4\u5219\u5e03\u5c40"}],this.layout="horizontal",this.expand=!0,this.editorOptions={language:"json",theme:"vs"},this.name=this.files[0].name,this.title=this.files[0].title,this.appService.theme$.pipe((0,x.R)(this.destroy$)).subscribe(f=>{this.editorOptions={language:"json",theme:"dark"===f?"vs-dark":"vs"}})}ngOnInit(){this.getSchema()}refreshLayout(t){setTimeout(()=>{this[t].editor.layout()},100)}getSchema(){const t=this.files.find(e=>e.name===this.name);if(t){if(this.name=t.name,this.title=t.title,t.cache)return this.schema=t.cache,void this.run();this.http.get(`./assets/schema/${t.name}.json`,null,{responseType:"text"}).subscribe(e=>{t.cache=e,this.schema=t.cache,this.run()})}}run(){this.schemaData=JSON.parse(this.schema||"{}"),this.formData=JSON.parse(this.formCode||"{}"),this.uiSchema=JSON.parse(this.uiCode||"{}"),this.cdr.detectChanges()}openOnStackBlitz(){const t={schema:this.schema,layout:this.layout,formData:this.formCode||"{}",ui:this.uiCode||"{}"},e="\nimport { Component } from '@angular/core';\nimport { SFSchema } from '@delon/form';\nimport { NzMessageService } from 'ng-zorro-antd/message';\n\n@Component({\n  selector: 'demo',\n  template: `\n  <sf [schema]=\"schema\" [formData]=\"formData\" [ui]=\"ui\" [layout]=\"layout\"\n      (formSubmit)=\"submit($event)\"\n      (formChange)=\"change($event)\"\n      (formError)=\"error($event)\"></sf>\n    `\n})\nexport class DemoComponent {\n  schema = {schema};\n  formData = {formData};\n  ui = {ui};\n  layout = '{layout}';\n\n  constructor(private msg: NzMessageService) { }\n\n  submit(value: any) {\n    this.msg.success(JSON.stringify(value));\n  }\n\n  change(value: any) {\n    console.log('formChange', value);\n  }\n\n  error(value: any) {\n    console.log('formError', value);\n  }\n}".replace(/\{(\w+)\}/g,(i,a)=>(t[a]||"").trim());this.codeSrv.openOnStackBlitz(e)}onCopy(){(0,B.J)(this.schema).then(()=>this.msg.success(this.i18n.fanyi("app.demo.copied")))}submit(t){this.msg.success(JSON.stringify(t))}change(t){console.log("formChange",t)}valueChange(t){console.log("formChange",t)}error(t){console.log("formError",t)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(M.Oi),o.Y36(Q.$),o.Y36(M.lP),o.Y36($.dD),o.Y36(U.z),o.Y36(o.sBO))},n.\u0275cmp=o.Xpm({type:n,selectors:[["form-validator"]],viewQuery:function(t,e){if(1&t&&(o.Gf(I,5),o.Gf(P,5),o.Gf(k,5)),2&t){let i;o.iGM(i=o.CRH())&&(e.schemaEditor=i.first),o.iGM(i=o.CRH())&&(e.formCodeEditor=i.first),o.iGM(i=o.CRH())&&(e.uiEditor=i.first)}},decls:34,vars:23,consts:[["nz-row","",1,"border-bottom-1","pb-sm","mb-md"],["nz-col","",3,"nzSpan"],[3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[1,"ml-sm",3,"ngModel","ngModelChange"],["nz-radio-button","","nzValue","horizontal"],["nz-radio-button","","nzValue","vertical"],["nz-radio-button","","nzValue","inline"],["nz-col","",1,"text-right",3,"nzSpan"],["nz-tooltip","","nz-button","",3,"nzTooltipTitle","click"],["nz-icon","",3,"nzType"],["nz-tooltip","","nz-button","",1,"ml-sm",3,"nzTooltipTitle","click"],["nz-icon","","nzType","form"],["nz-icon","","nzType","copy"],["nz-row","",1,"border-bottom-1","pb-sm","mb-md",3,"nzGutter"],["nz-col","",3,"nzSpan","hidden"],["nzTitle","Schema",3,"nzClick"],["height","500px",3,"ngModel","options","ngModelChange"],["schemaEditor",""],["nzTitle","Form Data",3,"nzClick"],["formCodeEditor",""],["nzTitle","UI Schema",3,"nzClick"],["uiEditor",""],["nz-col","",3,"nzSpan",4,"ngIf"],[3,"nzValue","nzLabel"],[3,"schema","formData","ui","layout","formSubmit","formChange","formValueChange","formError"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"nz-select",2),o.NdJ("ngModelChange",function(a){return e.name=a})("ngModelChange",function(){return e.getSchema()}),o.YNc(3,H,1,2,"nz-option",3),o.qZA(),o.TgZ(4,"nz-radio-group",4),o.NdJ("ngModelChange",function(a){return e.layout=a}),o.TgZ(5,"label",5),o._uU(6,"\u6c34\u5e73"),o.qZA(),o.TgZ(7,"label",6),o._uU(8,"\u5782\u76f4"),o.qZA(),o.TgZ(9,"label",7),o._uU(10,"\u884c\u5185"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"div",8),o.TgZ(12,"nz-button-group"),o.TgZ(13,"button",9),o.NdJ("click",function(){return e.expand=!e.expand}),o._UZ(14,"i",10),o.qZA(),o.TgZ(15,"button",11),o.NdJ("click",function(){return e.openOnStackBlitz()}),o.ALo(16,"i18n"),o._UZ(17,"i",12),o.qZA(),o.TgZ(18,"button",11),o.NdJ("click",function(){return e.onCopy()}),o.ALo(19,"i18n"),o._UZ(20,"i",13),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(21,"div",14),o.TgZ(22,"div",15),o.TgZ(23,"nz-tabset"),o.TgZ(24,"nz-tab",16),o.NdJ("nzClick",function(){return e.refreshLayout("schemaEditor")}),o.TgZ(25,"nu-monaco-editor",17,18),o.NdJ("ngModelChange",function(a){return e.schema=a})("ngModelChange",function(){return e.run()}),o.qZA(),o.qZA(),o.TgZ(27,"nz-tab",19),o.NdJ("nzClick",function(){return e.refreshLayout("formCodeEditor")}),o.TgZ(28,"nu-monaco-editor",17,20),o.NdJ("ngModelChange",function(a){return e.formCode=a})("ngModelChange",function(){return e.run()}),o.qZA(),o.qZA(),o.TgZ(30,"nz-tab",21),o.NdJ("nzClick",function(){return e.refreshLayout("uiEditor")}),o.TgZ(31,"nu-monaco-editor",17,22),o.NdJ("ngModelChange",function(a){return e.uiCode=a})("ngModelChange",function(){return e.run()}),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.YNc(33,q,2,5,"div",23),o.qZA()),2&t&&(o.xp6(1),o.Q6J("nzSpan",18),o.xp6(1),o.Q6J("ngModel",e.name),o.xp6(1),o.Q6J("ngForOf",e.files),o.xp6(1),o.Q6J("ngModel",e.layout),o.xp6(7),o.Q6J("nzSpan",6),o.xp6(2),o.Q6J("nzTooltipTitle",e.expand?"Hide Code":"Show Code"),o.xp6(1),o.MGl("nzType","vertical-",e.expand?"right":"left",""),o.xp6(1),o.Q6J("nzTooltipTitle",o.lcZ(16,19,"app.demo.stackblitz")),o.xp6(3),o.Q6J("nzTooltipTitle",o.lcZ(19,21,"app.demo.copy")),o.xp6(3),o.Q6J("nzGutter",24),o.xp6(1),o.Q6J("nzSpan",12)("hidden",!e.expand),o.xp6(3),o.Q6J("ngModel",e.schema)("options",e.editorOptions),o.xp6(3),o.Q6J("ngModel",e.formCode)("options",e.editorOptions),o.xp6(3),o.Q6J("ngModel",e.uiCode)("options",e.editorOptions),o.xp6(2),o.Q6J("ngIf",e.schemaData))},directives:[y.SK,y.t3,T.Vq,u.JJ,u.On,c.sg,h.Dg,h.Of,h.Bq,E.fY,j.w,E.ix,L.dQ,R.SY,Y.Ls,b.xH,b.xw,z,c.O5,T.Ip,w.k],pipes:[G.C],encapsulation:2,changeDetection:0}),n})(),data:{titleI18n:"app.header.menu.form.validator"}}]}];let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[J.m,S.forRoot({defaultOptions:{scrollBeyondLastLine:!1}}),Z.Bz.forChild(K)]]}),n})()}}]);