import{a as P}from"./chunk-BAPU3RXT.js";import{a as T,b as A}from"./chunk-SDCQCDQF.js";import{Ab as j,Bb as z,C as u,H as a,Ja as C,L as g,Lb as N,Oa as O,Pa as x,Ta as S,Wa as c,a as d,ba as y,cb as E,cc as D,da as v,ea as _,jb as l,k as m,ld as I,md as L,na as w,oa as b,od as f,q as p,td as M,va as s,zb as $,zc as k}from"./chunk-OB24VCRC.js";var Q=(()=>{let t=class t{get cog(){return this._cog}set cog(e){this._cog=this.cogSrv.merge("chart",{theme:"",echartsLib:"https://cdnjs.cloudflare.com/ajax/libs/echarts/5.1.0/echarts.min.js"},e)}constructor(){this.cogSrv=s(L),this.lazySrv=s(I),this.loading=!1,this.loaded=!1,this.notify$=new m,this.cog={theme:""}}libLoad(){return this.loading?(this.loaded&&this.notify$.next(),this):(this.loading=!0,this.lazySrv.load(this.cog.echartsLib).then(()=>{let e=this.cog.echartsExtensions;return Array.isArray(e)&&e.length>0?this.lazySrv.load(e).then(()=>!0):Promise.resolve(!0)}).then(()=>{this.loaded=!0,this.notify$.next()}),this)}get notify(){return this.notify$.asObservable()}ngOnDestroy(){this.notify$.unsubscribe()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var Z=["container"];function q(o,t){o&1&&l(0,"nz-skeleton")}var n=class n{set width(t){this._width=typeof t=="number"?`${t}px`:`${t}`}set height(t){this._height=typeof t=="number"?`${t}px`:`${t}`}set theme(t){this._theme=t,this._chart&&this.install()}set initOpt(t){this._initOpt=t,this._chart&&this.install()}set option(t){this._option=t,this._chart&&this.setOption(t,!0)}get chart(){return this._chart}constructor(){this.srv=s(Q),this.cdr=s(D),this.ngZone=s(x),this.platform=s(M),this.destroy$=s(O),this._chart=null,this._width="100%",this._height="400px",this.on=[],this.events=new y,this.loaded=!1,this.srv.notify.pipe(f(),a(()=>!this.loaded)).subscribe(()=>this.load()),this.theme=this.srv.cog.echartsTheme}emit(t,i){this.events.emit(d({type:t,chart:this.chart},i))}load(){this.ngZone.run(()=>{this.loaded=!0,this.cdr.detectChanges()}),this.emit("ready"),this.install()}install(){this.destroy();let t=this._chart=window.echarts.init(this.node.nativeElement,this._theme,this._initOpt);return this.emit("init"),this.setOption(this._option),this.on.forEach(i=>{i.query!=null?t.on(i.eventName,i.query,e=>i.handler({event:e,chart:t})):t.on(i.eventName,e=>i.handler({event:e,chart:t}))}),this}destroy(){return this._chart&&(this._chart.dispose(),this.emit("destroy")),this}setOption(t,i=!1,e=!1){return this._chart&&(this._chart.setOption(t,i,e),this.emit("set-option",{option:t})),this}ngOnInit(){this.platform.isBrowser&&(window.echarts?this.load():this.srv.libLoad(),u(window,"resize").pipe(f(this.destroy$),a(()=>!!this._chart),g(200)).subscribe(()=>this._chart.resize()))}ngOnDestroy(){this.on.forEach(t=>this._chart?.off(t.eventName)),this.destroy()}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=v({type:n,selectors:[["chart-echarts"],["","chart-echarts",""]],viewQuery:function(i,e){if(i&1&&$(Z,7),i&2){let r;j(r=z())&&(e.node=r.first)}},hostVars:6,hostBindings:function(i,e){i&2&&c("display","inline-block")("width",e._width)("height",e._height)},inputs:{width:"width",height:"height",theme:"theme",initOpt:"initOpt",option:"option",on:"on"},outputs:{events:"events"},exportAs:["chartECharts"],standalone:!0,features:[N],decls:3,vars:5,consts:[["container",""]],template:function(i,e){i&1&&(S(0,q,1,0,"nz-skeleton"),l(1,"div",null,0)),i&2&&(E(0,e.loaded?-1:0),C(),c("width",e._width)("height",e._height))},dependencies:[T],encapsulation:2,changeDetection:0});var h=n;p([P()],h.prototype,"load",null);var B=[h],ut=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=_({type:t}),t.\u0275inj=b({imports:[k,A,B]});let o=t;return o})();export{h as a,ut as b};
