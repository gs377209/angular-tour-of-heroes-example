"use strict";(self.webpackChunkangular_tour_of_heroes_example=self.webpackChunkangular_tour_of_heroes_example||[]).push([[592],{2673:(p,_,a)=>{a.d(_,{g:()=>c,k:()=>h});var i=a(4650),o=a(3238),d=a(2687),r=a(1281);let m=0;const g=(0,o.Id)(class{}),l="mat-badge-content";let h=(()=>{class n extends g{constructor(e,t,u,b,f){super(),this._ngZone=e,this._elementRef=t,this._ariaDescriber=u,this._renderer=b,this._animationMode=f,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=m++,this._isInitialized=!1}get color(){return this._color}set color(e){this._setColor(e),this._color=e}get overlap(){return this._overlap}set overlap(e){this._overlap=(0,r.Ig)(e)}get content(){return this._content}set content(e){this._updateRenderedContent(e)}get description(){return this._description}set description(e){this._updateHostAriaDescription(e)}get hidden(){return this._hidden}set hidden(e){this._hidden=(0,r.Ig)(e)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&this._renderer.destroyNode(this._badgeElement),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_createBadgeElement(){const e=this._renderer.createElement("span"),t="mat-badge-active";return e.setAttribute("id",`mat-badge-content-${this._id}`),e.setAttribute("aria-hidden","true"),e.classList.add(l),"NoopAnimations"===this._animationMode&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){const t=`${e??""}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateHostAriaDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),e&&this._ariaDescriber.describe(this._elementRef.nativeElement,e),this._description=e}_setColor(e){const t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){const e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${l}`);for(const t of Array.from(e))t!==this._badgeElement&&t.remove()}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.R0b),i.Y36(i.SBq),i.Y36(d.$s),i.Y36(i.Qsj),i.Y36(i.QbO,8))},n.\u0275dir=i.lG2({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,t){2&e&&i.ekj("mat-badge-overlap",t.overlap)("mat-badge-above",t.isAbove())("mat-badge-below",!t.isAbove())("mat-badge-before",!t.isAfter())("mat-badge-after",t.isAfter())("mat-badge-small","small"===t.size)("mat-badge-medium","medium"===t.size)("mat-badge-large","large"===t.size)("mat-badge-hidden",t.hidden||!t.content)("mat-badge-disabled",t.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[i.qOj]}),n})(),c=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[d.rt,o.BQ,o.BQ]}),n})()}}]);