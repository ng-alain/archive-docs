"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[967],{9967:(ae,F,l)=>{l.r(F),l.d(F,{DevTestModule:()=>oe});var d=l(52787),f=l(97582),u=l(96814),y=l(71993),S=l(32181),j=l(53263),h=l(74648),t=l(65879);const q=["host"];function K(n,o){1&n&&t.Hsn(0)}const V=["*"];let N=(()=>{class n{constructor(){this.hidden="none",this.direction="right"}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["layout-default-header-item"]],viewQuery:function(i,a){if(1&i&&t.Gf(q,7),2&i){let s;t.iGM(s=t.CRH())&&(a.host=s.first)}},inputs:{hidden:"hidden",direction:"direction"},ngContentSelectors:V,decls:2,vars:0,consts:[["host",""]],template:function(i,a){1&i&&(t.F$t(),t.YNc(0,K,1,0,"ng-template",null,0,t.W1O))},encapsulation:2})}return n})();var Z=l(43460),x=l(980),X=l(65619);const k={logoExpanded:"./assets/logo-full.svg",logoCollapsed:"./assets/logo.svg",logoLink:"/",showHeaderCollapse:!0,showSiderCollapse:!1,hideAside:!1,hideHeader:!1};let A=(()=>{class n{get options(){return this._options}get options$(){return this._options$.asObservable()}get collapsedIcon(){const e=this.settings.layout.collapsed;let i=e?"unfold":"fold";return"rtl"===this.settings.layout.direction&&(i=e?"fold":"unfold"),`menu-${i}`}constructor(e){this.settings=e,this._options$=new X.X(k),this._options=k}notify(){this._options$.next(this._options)}setOptions(e){this._options={...k,...e},this.notify()}toggleCollapsed(e){this.settings.setLayout("collapsed",e??!this.settings.layout.collapsed),this.notify()}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(x.gb))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var b=l(90551),W=l(8471),tt=l(6593),et=l(49388),J=l(96109),O=l(33640);function nt(n,o){if(1&n&&t._UZ(0,"i",11),2&n){const e=t.oxw(2).$implicit;t.Q6J("nzType",e.value)("nzTheme",e.theme)("nzSpin",e.spin)("nzTwotoneColor",e.twoToneColor)("nzIconfont",e.iconfont)("nzRotate",e.rotate)}}function it(n,o){if(1&n&&t._UZ(0,"i",12),2&n){const e=t.oxw(2).$implicit;t.Q6J("nzIconfont",e.iconfont)}}function ot(n,o){if(1&n&&t._UZ(0,"img",13),2&n){const e=t.oxw(2).$implicit;t.Q6J("src",e.value,t.LSH)}}function at(n,o){if(1&n&&t._UZ(0,"span",14),2&n){const e=t.oxw(2).$implicit;t.Q6J("innerHTML",e.value,t.oJD)}}function st(n,o){if(1&n&&t._UZ(0,"i"),2&n){const e=t.oxw(2).$implicit;t.Gre("sidebar-nav__item-icon ",e.value,"")}}function lt(n,o){if(1&n&&(t.ynx(0,5),t.YNc(1,nt,1,6,"i",6),t.YNc(2,it,1,1,"i",7),t.YNc(3,ot,1,1,"img",8),t.YNc(4,at,1,1,"span",9),t.YNc(5,st,1,3,"i",10),t.BQk()),2&n){const e=t.oxw().$implicit;t.Q6J("ngSwitch",e.type),t.xp6(1),t.Q6J("ngSwitchCase","icon"),t.xp6(1),t.Q6J("ngSwitchCase","iconfont"),t.xp6(1),t.Q6J("ngSwitchCase","img"),t.xp6(1),t.Q6J("ngSwitchCase","svg")}}function ct(n,o){1&n&&t.YNc(0,lt,6,5,"ng-container",4),2&n&&t.Q6J("ngIf",o.$implicit)}function rt(n,o){}const D=function(n){return{$implicit:n}};function ut(n,o){if(1&n&&(t.ynx(0),t.YNc(1,rt,0,0,"ng-template",25),t.BQk()),2&n){const e=t.oxw(4).$implicit;t.oxw(2);const i=t.MAs(1);t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(2,D,e.icon))}}function dt(n,o){}function pt(n,o){if(1&n&&(t.TgZ(0,"span",26),t.YNc(1,dt,0,0,"ng-template",25),t.qZA()),2&n){const e=t.oxw(4).$implicit;t.oxw(2);const i=t.MAs(1);t.Q6J("nzTooltipTitle",e.text),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(3,D,e.icon))}}function _t(n,o){if(1&n&&(t.ynx(0),t.YNc(1,ut,2,4,"ng-container",22),t.YNc(2,pt,2,5,"span",24),t.BQk()),2&n){const e=t.oxw(5);t.xp6(1),t.Q6J("ngIf",!e.collapsed),t.xp6(1),t.Q6J("ngIf",e.collapsed)}}const gt=function(n){return{"sidebar-nav__item-disabled":n}};function mt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"a",21),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2).$implicit,s=t.oxw(2);return t.KtG(s.to(a))})("mouseenter",function(){t.CHM(e);const a=t.oxw(4);return t.KtG(a.closeSubMenu())}),t.YNc(1,_t,3,2,"ng-container",22),t._UZ(2,"span",23),t.qZA()}if(2&n){const e=t.oxw(2).$implicit;t.Q6J("ngClass",t.VKq(5,gt,e.disabled)),t.uIk("data-id",e._id),t.xp6(1),t.Q6J("ngIf",e._needIcon),t.xp6(1),t.Q6J("innerHTML",e._text,t.oJD),t.uIk("title",e.text)}}function ft(n,o){}function ht(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"a",27),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2).$implicit,s=t.oxw(2);return t.KtG(s.toggleOpen(a))})("mouseenter",function(a){t.CHM(e);const s=t.oxw(2).$implicit,c=t.oxw(2);return t.KtG(c.showSubMenu(a,s))}),t.YNc(1,ft,0,0,"ng-template",25),t._UZ(2,"span",23)(3,"i",28),t.qZA()}if(2&n){const e=t.oxw(2).$implicit;t.oxw(2);const i=t.MAs(1);t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(4,D,e.icon)),t.xp6(1),t.Q6J("innerHTML",e._text,t.oJD),t.uIk("title",e.text)}}function vt(n,o){if(1&n&&t._UZ(0,"nz-badge",29),2&n){const e=t.oxw(2).$implicit;t.Q6J("nzCount",e.badge)("nzDot",e.badgeDot)("nzOverflowCount",9)}}function yt(n,o){}function xt(n,o){if(1&n&&(t.TgZ(0,"ul"),t.YNc(1,yt,0,0,"ng-template",25),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.oxw(2);const i=t.MAs(3);t.Gre("sidebar-nav sidebar-nav__sub sidebar-nav__depth",e._depth,""),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(5,D,e.children))}}function Ct(n,o){if(1&n&&(t.TgZ(0,"li",16),t.YNc(1,mt,3,7,"a",17),t.YNc(2,ht,4,6,"a",18),t.YNc(3,vt,1,3,"nz-badge",19),t.YNc(4,xt,2,7,"ul",20),t.qZA()),2&n){const e=t.oxw().$implicit;t.ekj("sidebar-nav__selected",e._selected)("sidebar-nav__open",e.open),t.xp6(1),t.Q6J("ngIf",0===e.children.length),t.xp6(1),t.Q6J("ngIf",e.children.length>0),t.xp6(1),t.Q6J("ngIf",e.badge),t.xp6(1),t.Q6J("ngIf",e.children.length>0)}}function Tt(n,o){if(1&n&&(t.ynx(0),t.YNc(1,Ct,5,8,"li",15),t.BQk()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf",!0!==e._hidden)}}function Lt(n,o){1&n&&t.YNc(0,Tt,2,1,"ng-container",3),2&n&&t.Q6J("ngForOf",o.$implicit)}function bt(n,o){if(1&n&&(t.TgZ(0,"li",31),t._UZ(1,"span",32),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("innerHTML",e._text,t.oJD)}}function Dt(n,o){}function Nt(n,o){if(1&n&&(t.ynx(0),t.YNc(1,bt,2,1,"li",30),t.YNc(2,Dt,0,0,"ng-template",25),t.BQk()),2&n){const e=o.$implicit;t.oxw();const i=t.MAs(3);t.xp6(1),t.Q6J("ngIf",e.group),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(3,D,e.children))}}const z="sidebar-nav__floating-show",H="sidebar-nav__floating";class _{set openStrictly(o){this.menuSrv.openStrictly=o}get collapsed(){return this.settings.layout.collapsed}constructor(o,e,i,a,s,c,r,v,L,m){this.menuSrv=o,this.settings=e,this.router=i,this.render=a,this.cdr=s,this.ngZone=c,this.sanitizer=r,this.doc=v,this.win=L,this.directionality=m,this.destroy$=(0,t.f3M)(t.ktI),this.dir="ltr",this.list=[],this.disabledAcl=!1,this.autoCloseUnderPad=!0,this.recursivePath=!0,this.maxLevelIcon=3,this.select=new t.vpe}getLinkNode(o){return"A"!==(o="A"===o.nodeName?o:o.parentNode).nodeName?null:o}floatingClickHandle(o){o.stopPropagation();const e=this.getLinkNode(o.target);if(null==e)return!1;const i=+e.dataset.id;if(isNaN(i))return!1;let a;return this.menuSrv.visit(this.list,s=>{!a&&s._id===i&&(a=s)}),this.to(a),this.hideAll(),o.preventDefault(),!1}clearFloating(){this.floatingEl&&(this.floatingEl.removeEventListener("click",this.floatingClickHandle.bind(this)),this.floatingEl.hasOwnProperty("remove")?this.floatingEl.remove():this.floatingEl.parentNode&&this.floatingEl.parentNode.removeChild(this.floatingEl))}genFloating(){this.clearFloating(),this.floatingEl=this.render.createElement("div"),this.floatingEl.classList.add(`${H}-container`),this.floatingEl.addEventListener("click",this.floatingClickHandle.bind(this),!1),this.bodyEl.appendChild(this.floatingEl)}genSubNode(o,e){const i=`_sidebar-nav-${e._id}`,s=(e.badge?o.nextElementSibling.nextElementSibling:o.nextElementSibling).cloneNode(!0);return s.id=i,s.classList.add(H),s.addEventListener("mouseleave",()=>{s.classList.remove(z)},!1),this.floatingEl.appendChild(s),s}hideAll(){const o=this.floatingEl.querySelectorAll(`.${H}`);for(let e=0;e<o.length;e++)o[e].classList.remove(z)}calPos(o,e){const i=o.getBoundingClientRect(),a=Math.max(this.doc.documentElement.scrollTop,this.bodyEl.scrollTop),s=Math.max(this.doc.documentElement.clientHeight,this.bodyEl.clientHeight);let r=-5;s<i.top+e.clientHeight&&(r=i.top+e.clientHeight-s+5),e.style.top=i.top+a-r+"px","rtl"===this.dir?e.style.right=`${i.width+5}px`:e.style.left=`${i.right+5}px`}showSubMenu(o,e){if(!0!==this.collapsed)return;o.preventDefault();const i=o.target;this.genFloating();const a=this.genSubNode(i,e);this.hideAll(),a.classList.add(z),this.calPos(i,a)}to(o){if(this.select.emit(o),!o.disabled){if(o.externalLink)return void("_blank"===o.target?this.win.open(o.externalLink):this.win.location.href=o.externalLink);this.ngZone.run(()=>this.router.navigateByUrl(o.link))}}toggleOpen(o){this.menuSrv.toggleOpen(o)}_click(){this.isPad&&this.collapsed&&(this.openAside(!1),this.hideAll())}closeSubMenu(){this.collapsed&&this.hideAll()}openByUrl(o){const{menuSrv:e,recursivePath:i}=this;this.menuSrv.open(e.find({url:o,recursive:i}))}ngOnInit(){const{doc:o,router:e,menuSrv:i,settings:a,cdr:s}=this;this.bodyEl=o.querySelector("body"),i.change.pipe((0,y.sL)(this.destroy$)).subscribe(c=>{i.visit(c,(r,v,L)=>{r._text=this.sanitizer.bypassSecurityTrustHtml(r.text),r._needIcon=L<=this.maxLevelIcon&&!!r.icon,r._aclResult||(this.disabledAcl?r.disabled=!0:r._hidden=!0);const m=r.icon;m&&"svg"===m.type&&"string"==typeof m.value&&(m.value=this.sanitizer.bypassSecurityTrustHtml(m.value))}),this.fixHide(c),this.list=c.filter(r=>!0!==r._hidden),s.detectChanges()}),e.events.pipe((0,y.sL)(this.destroy$)).subscribe(c=>{c instanceof d.m2&&(this.openByUrl(c.urlAfterRedirects),this.underPad(),this.cdr.detectChanges())}),a.notify.pipe((0,y.sL)(this.destroy$),(0,S.h)(c=>"layout"===c.type&&"collapsed"===c.name)).subscribe(()=>this.clearFloating()),this.underPad(),this.dir=this.directionality.value,this.directionality.change?.pipe((0,y.sL)(this.destroy$)).subscribe(c=>{this.dir=c,this.cdr.detectChanges()}),this.openByUrl(e.url),this.ngZone.runOutsideAngular(()=>this.genFloating())}fixHide(o){const e=i=>{for(const a of i)a.children&&a.children.length>0&&(e(a.children),a._hidden||(a._hidden=a.children.every(s=>s._hidden)))};e(o)}ngOnDestroy(){this.clearFloating()}get isPad(){return this.doc.defaultView.innerWidth<768}underPad(){this.autoCloseUnderPad&&this.isPad&&!this.collapsed&&setTimeout(()=>this.openAside(!0))}openAside(o){this.settings.setLayout("collapsed",o)}static#t=this.\u0275fac=function(e){return new(e||_)(t.Y36(x.hl),t.Y36(x.gb),t.Y36(d.F0),t.Y36(t.Qsj),t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(tt.H7),t.Y36(u.K0),t.Y36(W.m),t.Y36(et.Is,8))};static#e=this.\u0275cmp=t.Xpm({type:_,selectors:[["layout-default-nav"]],hostVars:2,hostBindings:function(e,i){1&e&&t.NdJ("click",function(){return i._click()})("click",function(){return i.closeSubMenu()},!1,t.evT),2&e&&t.ekj("d-block",!0)},inputs:{disabledAcl:"disabledAcl",autoCloseUnderPad:"autoCloseUnderPad",recursivePath:"recursivePath",openStrictly:"openStrictly",maxLevelIcon:"maxLevelIcon"},outputs:{select:"select"},decls:6,vars:1,consts:[["icon",""],["tree",""],[1,"sidebar-nav"],[4,"ngFor","ngForOf"],[3,"ngSwitch",4,"ngIf"],[3,"ngSwitch"],["class","sidebar-nav__item-icon","nz-icon","",3,"nzType","nzTheme","nzSpin","nzTwotoneColor","nzIconfont","nzRotate",4,"ngSwitchCase"],["class","sidebar-nav__item-icon","nz-icon","",3,"nzIconfont",4,"ngSwitchCase"],["class","sidebar-nav__item-icon sidebar-nav__item-img",3,"src",4,"ngSwitchCase"],["class","sidebar-nav__item-icon sidebar-nav__item-svg",3,"innerHTML",4,"ngSwitchCase"],[3,"class",4,"ngSwitchDefault"],["nz-icon","",1,"sidebar-nav__item-icon",3,"nzType","nzTheme","nzSpin","nzTwotoneColor","nzIconfont","nzRotate"],["nz-icon","",1,"sidebar-nav__item-icon",3,"nzIconfont"],[1,"sidebar-nav__item-icon","sidebar-nav__item-img",3,"src"],[1,"sidebar-nav__item-icon","sidebar-nav__item-svg",3,"innerHTML"],["class","sidebar-nav__item",3,"sidebar-nav__selected","sidebar-nav__open",4,"ngIf"],[1,"sidebar-nav__item"],["class","sidebar-nav__item-link",3,"ngClass","click","mouseenter",4,"ngIf"],["class","sidebar-nav__item-link",3,"click","mouseenter",4,"ngIf"],["nzStandalone","",3,"nzCount","nzDot","nzOverflowCount",4,"ngIf"],[3,"class",4,"ngIf"],[1,"sidebar-nav__item-link",3,"ngClass","click","mouseenter"],[4,"ngIf"],[1,"sidebar-nav__item-text",3,"innerHTML"],["nz-tooltip","","nzTooltipPlacement","right",3,"nzTooltipTitle",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["nz-tooltip","","nzTooltipPlacement","right",3,"nzTooltipTitle"],[1,"sidebar-nav__item-link",3,"click","mouseenter"],[1,"sidebar-nav__sub-arrow"],["nzStandalone","",3,"nzCount","nzDot","nzOverflowCount"],["class","sidebar-nav__item sidebar-nav__group-title",4,"ngIf"],[1,"sidebar-nav__item","sidebar-nav__group-title"],[3,"innerHTML"]],template:function(e,i){1&e&&(t.YNc(0,ct,1,1,"ng-template",null,0,t.W1O),t.YNc(2,Lt,1,1,"ng-template",null,1,t.W1O),t.TgZ(4,"ul",2),t.YNc(5,Nt,3,5,"ng-container",3),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngForOf",i.list))},dependencies:[u.mk,u.sg,u.O5,u.tP,u.RF,u.n9,u.ED,J.SY,b.Ls,O.x7],encapsulation:2,changeDetection:0})}function Zt(n,o){1&n&&t.GkF(0)}function kt(n,o){if(1&n&&(t.TgZ(0,"li"),t.YNc(1,Zt,1,0,"ng-container",9),t.qZA()),2&n){const e=o.$implicit;t.ekj("hidden-mobile","mobile"===e.hidden)("hidden-pc","pc"===e.hidden),t.xp6(1),t.Q6J("ngTemplateOutlet",e.host)}}function At(n,o){1&n&&t.YNc(0,kt,2,5,"li",8),2&n&&t.Q6J("ngForOf",o.$implicit)}function zt(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"a",10),t._UZ(2,"img",11)(3,"img",12),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("routerLink",e.opt.logoLink),t.xp6(1),t.uIk("src",e.opt.logoExpanded,t.LSH)("alt",e.app.name),t.xp6(1),t.uIk("src",e.opt.logoCollapsed,t.LSH)("alt",e.app.name)}}function Ht(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"li")(1,"div",13),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.toggleCollapsed())}),t._UZ(2,"span",14),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("nzType",e.collapsedIcon)}}function wt(n,o){}function It(n,o){1&n&&t.GkF(0)}function Ft(n,o){if(1&n&&(t.TgZ(0,"div",15),t.YNc(1,It,1,0,"ng-container",9),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",e.middle[0].host)}}function St(n,o){}(0,f.gn)([(0,h.yF)()],_.prototype,"disabledAcl",void 0),(0,f.gn)([(0,h.yF)()],_.prototype,"autoCloseUnderPad",void 0),(0,f.gn)([(0,h.yF)()],_.prototype,"recursivePath",void 0),(0,f.gn)([(0,h.yF)()],_.prototype,"openStrictly",null),(0,f.gn)([(0,h.Rn)()],_.prototype,"maxLevelIcon",void 0),(0,f.gn)([(0,h.EA)()],_.prototype,"showSubMenu",null);const E=function(n){return{$implicit:n}};let Y=(()=>{class n{get opt(){return this.srv.options}get app(){return this.settings.app}get collapsed(){return this.settings.layout.collapsed}get collapsedIcon(){return this.srv.collapsedIcon}constructor(e,i,a){this.srv=e,this.settings=i,this.cdr=a,this.destroy$=(0,t.f3M)(t.ktI),this.left=[],this.middle=[],this.right=[]}refresh(){const e=this.items.toArray();this.left=e.filter(i=>"left"===i.direction),this.middle=e.filter(i=>"middle"===i.direction),this.right=e.filter(i=>"right"===i.direction),this.cdr.detectChanges()}ngAfterViewInit(){this.items.changes.pipe((0,y.sL)(this.destroy$)).subscribe(()=>this.refresh()),this.srv.options$.pipe((0,y.sL)(this.destroy$)).subscribe(()=>this.cdr.detectChanges()),this.refresh()}toggleCollapsed(){this.srv.toggleCollapsed()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(A),t.Y36(x.gb),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["layout-default-header"]],hostVars:2,hostBindings:function(i,a){2&i&&t.ekj("alain-default__header",!0)},inputs:{items:"items"},decls:11,vars:14,consts:[["render",""],[1,"alain-default__header-logo"],[4,"ngIf","ngIfElse"],[1,"alain-default__nav-wrap"],[1,"alain-default__nav"],[4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","alain-default__nav alain-default__nav-middle",4,"ngIf"],[3,"hidden-mobile","hidden-pc",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],[1,"alain-default__header-logo-link",3,"routerLink"],[1,"alain-default__header-logo-expanded"],[1,"alain-default__header-logo-collapsed"],[1,"alain-default__nav-item","alain-default__nav-item--collapse",3,"click"],["nz-icon","",3,"nzType"],[1,"alain-default__nav","alain-default__nav-middle"]],template:function(i,a){if(1&i&&(t.YNc(0,At,1,1,"ng-template",null,0,t.W1O),t.TgZ(2,"div",1),t.YNc(3,zt,4,5,"ng-container",2),t.qZA(),t.TgZ(4,"div",3)(5,"ul",4),t.YNc(6,Ht,3,1,"li",5),t.YNc(7,wt,0,0,"ng-template",6),t.qZA(),t.YNc(8,Ft,2,1,"div",7),t.TgZ(9,"ul",4),t.YNc(10,St,0,0,"ng-template",6),t.qZA()()),2&i){const s=t.MAs(1);t.xp6(2),t.Udp("width",a.opt.logoFixWidth,"px"),t.xp6(1),t.Q6J("ngIf",!a.opt.logo)("ngIfElse",a.opt.logo),t.xp6(3),t.Q6J("ngIf",!a.opt.hideAside&&a.opt.showHeaderCollapse),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(10,E,a.left)),t.xp6(1),t.Q6J("ngIf",a.middle.length>0),t.xp6(2),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(12,E,a.right))}},dependencies:[u.sg,u.O5,u.tP,d.rH,b.Ls],encapsulation:2,changeDetection:0})}return n})();function Jt(n,o){1&n&&t._UZ(0,"div",5)}function Ot(n,o){if(1&n&&t._UZ(0,"layout-default-header",6),2&n){const e=t.oxw();t.Q6J("items",e.headerItems)}}function Et(n,o){1&n&&t.GkF(0)}function Yt(n,o){1&n&&t.GkF(0)}function Qt(n,o){1&n&&t._UZ(0,"layout-default-nav")}function Mt(n,o){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",14),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(3);return t.KtG(a.toggleCollapsed())}),t._UZ(2,"span",15),t.qZA(),t.BQk()}if(2&n){const e=t.oxw(3);t.xp6(2),t.Q6J("nzType",e.collapsedIcon)}}function Ut(n,o){if(1&n&&(t.TgZ(0,"div",12),t.YNc(1,Mt,3,1,"ng-container",13),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null===e.asideBottom)("ngIfElse",e.asideBottom)}}function $t(n,o){if(1&n&&(t.TgZ(0,"div",7)(1,"div",8)(2,"div",9),t.YNc(3,Et,1,0,"ng-container",4),t.YNc(4,Yt,1,0,"ng-container",4),t.YNc(5,Qt,1,0,"layout-default-nav",10),t.qZA(),t.YNc(6,Ut,2,2,"div",11),t.qZA()()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngTemplateOutlet",e.asideUser),t.xp6(1),t.Q6J("ngTemplateOutlet",e.nav),t.xp6(1),t.Q6J("ngIf",!e.nav),t.xp6(1),t.Q6J("ngIf",e.opt.showSiderCollapse)}}function Bt(n,o){1&n&&t.GkF(0)}const Pt=["*"];class C{get opt(){return this.srv.options}set options(o){this.srv.setOptions(o)}get showFetching(){return this.fetchingStrictly?this.fetching:this.isFetching}get collapsed(){return this.settings.layout.collapsed}get collapsedIcon(){return this.srv.collapsedIcon}toggleCollapsed(){this.srv.toggleCollapsed()}constructor(o,e,i,a,s,c,r){this.msgSrv=e,this.settings=i,this.el=a,this.renderer=s,this.doc=c,this.srv=r,this.asideUser=null,this.asideBottom=null,this.nav=null,this.content=null,this.fetchingStrictly=!1,this.fetching=!1,this.isFetching=!1,o.events.pipe((0,y.sL)(),(0,S.h)(()=>!this.fetchingStrictly)).subscribe(v=>this.processEv(v)),this.srv.options$.pipe((0,y.sL)()).subscribe(()=>this.setClass()),this.settings.notify.pipe((0,y.sL)()).subscribe(()=>this.setClass())}processEv(o){if(!this.isFetching&&o instanceof d.xV&&(this.isFetching=!0),o instanceof d.Q3||o instanceof d.gk){this.isFetching=!1;const e=null===this.customError?null:this.customError??`Could not load ${o.url} route`;e&&o instanceof d.Q3&&this.msgSrv.error(e,{nzDuration:3e3})}else(o instanceof d.m2||o instanceof d.GH)&&this.isFetching&&setTimeout(()=>{this.isFetching=!1},100)}setClass(){const{el:o,doc:e,renderer:i,settings:a}=this,s=a.layout;(0,j.C)(o.nativeElement,i,{"alain-default":!0,"alain-default__fixed":s.fixed,"alain-default__collapsed":s.collapsed,"alain-default__hide-aside":this.opt.hideAside,"alain-default__hide-header":this.opt.hideHeader}),e.body.classList[s.colorWeak?"add":"remove"]("color-weak")}static#t=this.\u0275fac=function(e){return new(e||C)(t.Y36(d.F0),t.Y36(Z.dD),t.Y36(x.gb),t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(u.K0),t.Y36(A))};static#e=this.\u0275cmp=t.Xpm({type:C,selectors:[["layout-default"]],contentQueries:function(e,i,a){if(1&e&&t.Suo(a,N,4),2&e){let s;t.iGM(s=t.CRH())&&(i.headerItems=s)}},inputs:{options:"options",asideUser:"asideUser",asideBottom:"asideBottom",nav:"nav",content:"content",customError:"customError",fetchingStrictly:"fetchingStrictly",fetching:"fetching"},exportAs:["layoutDefault"],ngContentSelectors:Pt,decls:6,vars:4,consts:[["class","alain-default__progress-bar",4,"ngIf"],[3,"items",4,"ngIf"],["class","alain-default__aside",4,"ngIf"],[1,"alain-default__content"],[4,"ngTemplateOutlet"],[1,"alain-default__progress-bar"],[3,"items"],[1,"alain-default__aside"],[1,"alain-default__aside-wrap"],[1,"alain-default__aside-inner"],[4,"ngIf"],["class","alain-default__aside-link",4,"ngIf"],[1,"alain-default__aside-link"],[4,"ngIf","ngIfElse"],[1,"alain-default__aside-link-collapsed",3,"click"],["nz-icon","",3,"nzType"]],template:function(e,i){1&e&&(t.F$t(),t.YNc(0,Jt,1,0,"div",0),t.YNc(1,Ot,1,1,"layout-default-header",1),t.YNc(2,$t,7,4,"div",2),t.TgZ(3,"section",3),t.YNc(4,Bt,1,0,"ng-container",4),t.Hsn(5),t.qZA()),2&e&&(t.Q6J("ngIf",i.showFetching),t.xp6(1),t.Q6J("ngIf",!i.opt.hideHeader),t.xp6(1),t.Q6J("ngIf",!i.opt.hideAside),t.xp6(2),t.Q6J("ngTemplateOutlet",i.content))},dependencies:[u.O5,u.tP,b.Ls,_,Y],encapsulation:2})}(0,f.gn)([(0,h.yF)()],C.prototype,"fetchingStrictly",void 0),(0,f.gn)([(0,h.yF)()],C.prototype,"fetching",void 0);var Q=l(96928),w=l(62787);const Gt=["*"];class T{constructor(){this.selected=!1,this.disabled=!1}static#t=this.\u0275fac=function(e){return new(e||T)};static#e=this.\u0275cmp=t.Xpm({type:T,selectors:[["layout-default-top-menu-item"]],hostVars:8,hostBindings:function(e,i){2&e&&t.ekj("alain-default__nav-item",!0)("alain-default__top-menu-item",!0)("alain-default__top-menu-item-selected",i.selected)("alain-default__top-menu-item-disabled",i.disabled)},inputs:{selected:"selected",disabled:"disabled"},ngContentSelectors:Gt,decls:1,vars:0,template:function(e,i){1&e&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0})}(0,f.gn)([(0,h.yF)()],T.prototype,"selected",void 0),(0,f.gn)([(0,h.yF)()],T.prototype,"disabled",void 0);let jt=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[u.ez,d.Bz,J.cg,b.PV,Q.Rt,w.b1,Z.gR,O.mS]})}return n})(),M=(()=>{class n{_n(){console.log("n")}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-demo"]],decls:0,vars:0,template:function(i,a){},encapsulation:2})}return n})();var U=l(18750),qt=l(42840),$=l(70855),Kt=l(41958);let B=(()=>{class n{constructor(e){this.srv=e}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(A))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["dev-home"]],decls:22,vars:4,consts:[[3,"autoBreadcrumb"],[1,"mb-md"],["nz-button","",3,"click"]],template:function(i,a){1&i&&(t._UZ(0,"page-header",0),t._uU(1," home "),t.TgZ(2,"div",1),t._uU(3),t.ALo(4,"json"),t.qZA(),t.TgZ(5,"div",1)(6,"button",2),t.NdJ("click",function(){return a.srv.toggleCollapsed()}),t._uU(7,"\u5207\u6362\u6298\u53e0"),t.qZA(),t.TgZ(8,"button",2),t.NdJ("click",function(){return a.srv.setOptions({hideHeader:!0})}),t._uU(9,"\u9690\u85cf\u9876\u90e8"),t.qZA(),t.TgZ(10,"button",2),t.NdJ("click",function(){return a.srv.setOptions({hideAside:!0})}),t._uU(11,"\u9690\u85cf\u4fa7\u8fb9\u680f"),t.qZA(),t.TgZ(12,"button",2),t.NdJ("click",function(){return a.srv.setOptions({hideHeader:!0,hideAside:!0})}),t._uU(13,"\u9690\u85cf\u9876\u90e8\u4e0e\u4fa7\u8fb9\u680f"),t.qZA(),t.TgZ(14,"button",2),t.NdJ("click",function(){return a.srv.setOptions({showHeaderCollapse:!0})}),t._uU(15,"\u663e\u793a\u9876\u90e8\u6298\u53e0\u5f00\u5173"),t.qZA(),t.TgZ(16,"button",2),t.NdJ("click",function(){return a.srv.setOptions({showSiderCollapse:!0})}),t._uU(17,"\u663e\u793a\u4fa7\u8fb9\u680f\u5e95\u90e8\u6298\u53e0\u5f00\u5173"),t.qZA(),t.TgZ(18,"button",2),t.NdJ("click",function(){return a.srv.setOptions({showHeaderCollapse:!0,showSiderCollapse:!0})}),t._uU(19,"\u663e\u793a\u9876\u90e8\u4e0e\u4fa7\u8fb9\u680f\u5e95\u90e8\u6298\u53e0\u5f00\u5173"),t.qZA(),t.TgZ(20,"button",2),t.NdJ("click",function(){return a.srv.setOptions({})}),t._uU(21,"\u6062\u590d\u9ed8\u8ba4"),t.qZA()()),2&i&&(t.Q6J("autoBreadcrumb",!1),t.xp6(3),t.hij(" options: ",t.lcZ(4,2,a.srv.options)," "))},dependencies:[U.q,qt.ix,$.w,Kt.dQ,u.Ts],encapsulation:2})}return n})();var p=l(14715),P=l(64115),Vt=l(31229),Xt=l(52500),R=l(73460);function Wt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"layout-default-top-menu-item",12),t.NdJ("click",function(){const s=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.changeMenu(s.key))}),t._UZ(1,"i",3),t._uU(2),t.qZA()}if(2&n){const e=o.$implicit;t.Q6J("selected",e.selected)("disabled",e.disabled),t.xp6(2),t.hij(" ",e.label," ")}}function te(n,o){if(1&n&&(t.TgZ(0,"div",13),t._UZ(1,"nz-avatar",14),t.TgZ(2,"div",15)(3,"strong"),t._uU(4),t.qZA(),t.TgZ(5,"p",16),t._uU(6),t.qZA()()(),t.TgZ(7,"nz-dropdown-menu",null,17)(9,"ul",18)(10,"li",19),t._uU(11),t.qZA(),t.TgZ(12,"li",20),t._uU(13),t.qZA()()()),2&n){const e=t.MAs(8),i=t.oxw();t.Q6J("nzDropdownMenu",e),t.xp6(1),t.Q6J("nzSrc",i.user.avatar),t.xp6(3),t.Oqu(i.user.name),t.xp6(2),t.Oqu(i.user.email),t.xp6(5),t.Oqu("menu.account.center"),t.xp6(2),t.Oqu("menu.account.settings")}}const ee=[p.LBP,p._ry,p.rHg,p.M4u,p.rk5,p.SFb,p.OeK,p.nZ9,p.zdJ,p.ECR,p.ItN,p.RU0,p.u8X,p.s4U,p.yhW];let G=(()=>{class n{get user(){return this.settings.user}constructor(e,i,a,s,c,r,v){this.menuSrv=i,this.settings=a,this.msgSrv=s,this.router=c,this.i18n=r,this.rtl=v,this.options={logoExpanded:"./assets/logo-full.svg",logoCollapsed:"./assets/logo.svg",hideHeader:!1,showHeaderCollapse:!1,showSiderCollapse:!0},this.lang="zh-CN",this.topMenus=[{key:"",label:"Default",selected:!0},{key:"bus",label:"Bus",selected:!1},{key:"disabled",label:"Disabbled",disabled:!0}],this.menus=[{text:"test",group:!0,children:[{text:"Dashboard-DISABLED",link:"/dev/home",icon:"anticon anticon-dashboard",i18n:"app.header.menu.home",badge:5},{text:"\u6d4b\u8bd5view1-id",link:"/dev/view/1",icon:"anticon anticon-appstore"},{text:"\u6d4b\u8bd5view2-id",link:"/dev/view/2",icon:"anticon anticon-appstore"},{text:"lazy\u6d4b\u8bd51",link:"/dev/lazy/p1",icon:"anticon anticon-appstore"},{text:"lazy\u6d4b\u8bd52",link:"/dev/lazy/p2",icon:"anticon anticon-appstore"},{text:"lazy\u6d4b\u8bd5view1-id",link:"/dev/lazy/1/view",icon:"anticon anticon-appstore"},{text:"lazy\u6d4b\u8bd5view2-id",link:"/dev/lazy/2/view",icon:"anticon anticon-appstore"},{text:"Level1",link:"#",icon:"anticon anticon-appstore",children:[{text:"Level2",link:"#",children:[{text:"Level3A",link:"/dev/l1"},{text:"Level3B-DISABLED",link:"/dev/l1",disabled:!0}]},{text:"Level2-DISABLED",link:"/dev/l2",disabled:!0}]},{text:"ABC",icon:"anticon anticon-appstore",children:[{text:"Reuse Tab1",link:"/dev/l1",i18n:"app.header.menu.docs"},{text:"Reuse Tab2",link:"/dev/l2"},{text:"Reuse Tab3",link:"/dev/l3"},{text:"Reuse Tab4",link:"/dev/l4"},{text:"Reuse Tab5",link:"/dev/l5"},{text:"Reuse Tab6",link:"/dev/l6"},{text:"Reuse Tab7",link:"/dev/l7"},{text:"Ellipsis",link:"/dev/l8"}]},{text:"LIST",icon:"anticon anticon-appstore",children:[{text:"list",link:"/dev/list"},{text:"list/item",link:"/dev/list/item"}]}]}],this.customContextMenu=[{id:"custom1",title:"\u81ea\u5b9a\u4e491",fn:(L,m)=>{console.log("\u81ea\u5b9a\u4e491",L,m)}},{id:"custom2",title:"\u81ea\u5b9a\u4e492",disabled:()=>!0,fn:(L,m)=>{console.log("\u81ea\u5b9a\u4e492",L,m)}}],e.addIcon(...ee)}changeMenu(e){this.menuSrv.add(""===e?(0,P.p$)(this.menus):[{text:"test",group:!0,children:[{text:`TYPE - ${e}`,link:"/dev/view/1",icon:"anticon anticon-appstore"}]}]);for(let i of this.topMenus)i.selected=i.key===e;this.loadFirstValidMenu()}toggleCollapsedSideabar(){this.settings.setLayout("collapsed",!this.settings.layout.collapsed)}toggleLang(){this.lang="zh-CN"===this.lang?"en-US":"zh-CN",this.i18n.use(this.lang)}ngOnInit(){this.menuSrv.add((0,P.p$)(this.menus))}loadFirstValidMenu(){let e;this.menuSrv.visit(this.menuSrv.menus,i=>{null==e&&!0!==i.hide&&null!=i.link&&i.link.length>0&&(e=i)}),null!=e&&this.router.navigateByUrl(e.link)}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(b.H5),t.Y36(x.hl),t.Y36(x.gb),t.Y36(Z.dD),t.Y36(d.F0),t.Y36(x.Oi),t.Y36(x.aP))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["dev-layout"]],hostVars:2,hostBindings:function(i,a){2&i&&t.ekj("alain-default",!0)},decls:19,vars:8,consts:[[3,"options","asideUser"],["direction","left"],["href","//github.com/ng-alain/ng-alain","target","_blank",1,"alain-default__nav-item"],["nz-icon","","nzType","github"],["direction","middle"],[3,"selected","disabled","click",4,"ngFor","ngForOf"],["direction","right"],[1,"alain-default__nav-item",3,"click"],["asideUserTpl",""],[3,"mode","customContextMenu"],["reuseTab",""],[3,"activate","attach"],[3,"selected","disabled","click"],["nz-dropdown","","nzTrigger","click",1,"alain-default__aside-user",3,"nzDropdownMenu"],[1,"alain-default__aside-user-avatar",3,"nzSrc"],[1,"alain-default__aside-user-info"],[1,"mb0"],["userMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","","routerLink","/pro/account/center"],["nz-menu-item","","routerLink","/pro/account/settings"]],template:function(i,a){if(1&i){const s=t.EpF();t.TgZ(0,"layout-default",0)(1,"layout-default-header-item",1)(2,"a",2),t._UZ(3,"i",3),t.qZA()(),t.TgZ(4,"layout-default-header-item",4),t.YNc(5,Wt,3,3,"layout-default-top-menu-item",5),t.qZA(),t.TgZ(6,"layout-default-header-item",6)(7,"a",7),t.NdJ("click",function(){return a.rtl.toggle()}),t._uU(8),t.ALo(9,"uppercase"),t.qZA()(),t.TgZ(10,"layout-default-header-item",6)(11,"a",2),t._uU(12," githbu "),t.qZA()(),t.YNc(13,te,14,6,"ng-template",null,8,t.W1O),t._UZ(15,"reuse-tab",9,10),t.TgZ(17,"router-outlet",11),t.NdJ("activate",function(r){t.CHM(s);const v=t.MAs(16);return t.KtG(v.activate(r))})("attach",function(r){t.CHM(s);const v=t.MAs(16);return t.KtG(v.activate(r))}),t.qZA()(),t._UZ(18,"setting-drawer")}if(2&i){const s=t.MAs(14);t.Q6J("options",a.options)("asideUser",s),t.xp6(5),t.Q6J("ngForOf",a.topMenus),t.xp6(3),t.Oqu(t.lcZ(9,6,a.rtl.nextDir)),t.xp6(7),t.Q6J("mode",2)("customContextMenu",a.customContextMenu)}},dependencies:[u.sg,d.lC,d.rH,Vt.g,Xt.w,$.w,R.wO,R.u9,w.cm,w.RR,b.Ls,Q.Dz,C,N,T,u.gd],encapsulation:2})}return n})();var I=l(89207);let g=(()=>{class n{constructor(e){this.route=e,this.first=(0,I.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=(0,I.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("ngoninit"),this.route.params.subscribe(e=>this.id=+e.id)}_onReuseInit(){this.now=(0,I.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.id)}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(d.gz))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["dev-page"]],decls:10,vars:12,template:function(i,a){1&i&&(t._UZ(0,"page-header"),t.TgZ(1,"p"),t._uU(2),t.ALo(3,"json"),t.ALo(4,"json"),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.ALo(7,"json"),t.qZA(),t._uU(8),t.ALo(9,"json")),2&i&&(t.xp6(2),t.AsE("first: ",t.lcZ(3,4,a.first),"\uff0cnow: ",t.lcZ(4,6,a.now),""),t.xp6(4),t.hij("id: ",t.lcZ(7,8,a.id),""),t.xp6(2),t.hij(" page: ",t.lcZ(9,10,a.route.url)," "))},dependencies:[U.q,u.Ts],encapsulation:2})}return n})();var ne=l(89359);const ie=[{path:"demo",component:M},{path:"",component:G,children:[{path:"home",component:B},{path:"l1",component:g},{path:"l2",component:g},{path:"l3",component:g},{path:"l4",component:g},{path:"l5",component:g},{path:"l6",component:g},{path:"l7",component:g},{path:"l8",component:g},{path:"login",component:g},{path:"view/:id",component:g},{path:"lazy",loadChildren:()=>l.e(440).then(l.bind(l,71440)).then(n=>n.DevLazyModule)},{path:"list",loadChildren:()=>l.e(324).then(l.bind(l,72324)).then(n=>n.DevListModule)}]}];let oe=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[ne.m,d.Bz.forChild(ie),jt]})}return n})()}}]);