import{Ab as G,Ba as I,Bb as j,Db as V,Eb as R,Ha as _,Ja as l,Ka as h,Lb as O,Ta as E,Ua as T,Va as m,Vd as W,Wa as A,Xa as N,ba as d,bg as q,cb as z,cc as P,cg as B,da as S,ea as v,ha as g,hb as u,ia as C,ib as f,jb as w,je as b,ke as p,la as y,nb as D,oa as x,q as c,qb as M,sb as o,ud as Q,zb as F}from"./chunk-OB24VCRC.js";var H=["textEl"];function U(e,i){if(e&1&&w(0,"span",0),e&2){let r=o();m("nzType",r.nzIcon)}}function L(e,i){if(e&1){let r=D();u(0,"img",3),M("error",function(n){g(r);let t=o();return C(t.imgError(n))}),f()}if(e&2){let r=o();m("src",r.nzSrc,_),T("srcset",r.nzSrcSet)("alt",r.nzAlt)}}function X(e,i){if(e&1&&(u(0,"span",4,5),V(2),f()),e&2){let r=o();l(2),R(r.nzText)}}var Z="avatar",$=(()=>{let i=class i{constructor(a,n,t){this.nzConfigService=a,this.elementRef=n,this.cdr=t,this._nzModuleName=Z,this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new d,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(a){this.nzError.emit(a),a.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.calcStringSize())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.calcStringSize()}ngAfterViewInit(){this.calcStringSize()}calcStringSize(){if(!this.hasText||!this.textEl)return;let a=this.textEl.nativeElement,n=a.offsetWidth,t=this.el.getBoundingClientRect?.().width??0,s=this.nzGap*2<t?this.nzGap*2:8,k=t-s<n?(t-s)/n:1;a.style.transform=`scale(${k}) translateX(-50%)`,a.style.lineHeight=this.customSize||""}setSizeStyle(){typeof this.nzSize=="number"?this.customSize=`${this.nzSize}px`:this.customSize=null,this.cdr.markForCheck()}};i.\u0275fac=function(n){return new(n||i)(h(b),h(y),h(P))},i.\u0275cmp=S({type:i,selectors:[["nz-avatar"]],viewQuery:function(n,t){if(n&1&&F(H,5),n&2){let s;G(s=j())&&(t.textEl=s.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(n,t){n&2&&(A("width",t.customSize)("height",t.customSize)("line-height",t.customSize)("font-size",t.hasIcon&&t.customSize?t.nzSize/2:null,"px"),N("ant-avatar-lg",t.nzSize==="large")("ant-avatar-sm",t.nzSize==="small")("ant-avatar-square",t.nzShape==="square")("ant-avatar-circle",t.nzShape==="circle")("ant-avatar-icon",t.nzIcon)("ant-avatar-image",t.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],standalone:!0,features:[I,O],decls:3,vars:3,consts:[["nz-icon","",3,"nzType"],[3,"src"],["class","ant-avatar-string"],[3,"src","error"],[1,"ant-avatar-string"],["textEl",""]],template:function(n,t){n&1&&E(0,U,1,1,"span",0)(1,L,1,3,"img",1)(2,X,3,1,"span",2),n&2&&(z(0,t.nzIcon&&t.hasIcon?0:-1),l(),z(1,t.nzSrc&&t.hasSrc?1:-1),l(),z(2,t.nzText&&t.hasText?2:-1))},dependencies:[B,q,Q],encapsulation:2,changeDetection:0});let e=i;return c([p()],e.prototype,"nzShape",void 0),c([p()],e.prototype,"nzSize",void 0),c([p(),W()],e.prototype,"nzGap",void 0),e})();var ft=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=v({type:i}),i.\u0275inj=x({imports:[$]});let e=i;return e})();export{$ as a,ft as b};
