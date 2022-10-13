"use strict";(self.webpackChunkangular_tour_of_heroes_example=self.webpackChunkangular_tour_of_heroes_example||[]).push([[50],{2050:(k,m,a)=>{a.r(m),a.d(m,{AnimationsModule:()=>b});var d=a(6895),l=a(4859),c=a(3546),p=a(6338),r=a(9132),t=a(4650);const u=function(){return{exact:!0}};let C=(()=>{class o{constructor(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-animations"]],decls:10,vars:6,consts:[["mat-list-item","","routerLink","./open-close","routerLinkActive","selected","ariaCurrentWhenActive","page",3,"routerLinkActiveOptions"],["mat-list-item","","routerLink","./insert-remove","routerLinkActive","selected","ariaCurrentWhenActive","page",3,"routerLinkActiveOptions"],["mat-list-item","","routerLink","./status-slider","routerLinkActive","selected","ariaCurrentWhenActive","page",3,"routerLinkActiveOptions"]],template:function(n,s){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Animations"),t.qZA(),t.TgZ(2,"mat-nav-list")(3,"a",0),t._uU(4,"Open/Close"),t.qZA(),t.TgZ(5,"a",1),t._uU(6,"Insert/Remove"),t.qZA(),t.TgZ(7,"a",2),t._uU(8,"Status Slider"),t.qZA()(),t._UZ(9,"router-outlet")),2&n&&(t.xp6(3),t.Q6J("routerLinkActiveOptions",t.DdM(3,u)),t.xp6(2),t.Q6J("routerLinkActiveOptions",t.DdM(4,u)),t.xp6(2),t.Q6J("routerLinkActiveOptions",t.DdM(5,u)))},dependencies:[p.Hk,p.Tg,r.lC,r.yS,r.Od],styles:[".selected[_ngcontent-%COMP%]{color:#69f0ae}mat-nav-list[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap}mat-nav-list[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{width:auto}"]}),o})();var e=a(7340);function v(o,i){1&o&&(t.TgZ(0,"mat-card",2)(1,"mat-card-content")(2,"p"),t._uU(3,"The box is inserted"),t.qZA()()()),2&o&&t.Q6J("@myInsertRemoveTrigger",void 0)}let f=(()=>{class o{constructor(){this.isShown=!0}toggle(){this.isShown=!this.isShown}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-insert-remove"]],decls:5,vars:1,consts:[["mat-raised-button","","color","primary","type","button",3,"click"],["class","insert-remove-container",4,"ngIf"],[1,"insert-remove-container"]],template:function(n,s){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Insert/Remove"),t.qZA(),t.TgZ(2,"button",0),t.NdJ("click",function(){return s.toggle()}),t._uU(3," Toggle Insert/Remove\n"),t.qZA(),t.YNc(4,v,4,1,"mat-card",1)),2&n&&(t.xp6(4),t.Q6J("ngIf",s.isShown))},dependencies:[d.O5,c.a8,c.dn,l.lW],styles:[".insert-remove-container[_ngcontent-%COMP%]{margin-top:1rem}"],data:{animation:[(0,e.X$)("myInsertRemoveTrigger",[(0,e.eR)(":enter",[(0,e.oB)({opacity:0}),(0,e.jt)("100ms",(0,e.oB)({opacity:1}))]),(0,e.eR)(":leave",[(0,e.jt)("100ms",(0,e.oB)({opacity:0}))])])]}}),o})();var h=a(4e3);const A=[{path:"",component:C,title:"Animations",data:{animation:"animations"},children:[{path:"open-close",component:(()=>{class o{constructor(){this.isOpen=!0}toggle(){this.isOpen=!this.isOpen}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-open-close"]],decls:7,vars:2,consts:[["mat-raised-button","","color","primary","type","button",3,"click"],[1,"open-close-container"]],template:function(n,s){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Open/Close"),t.qZA(),t.TgZ(2,"button",0),t.NdJ("click",function(){return s.toggle()}),t._uU(3," Toggle Open/Close\n"),t.qZA(),t.TgZ(4,"div",1)(5,"p"),t._uU(6),t.qZA()()),2&n&&(t.xp6(4),t.Q6J("@openClose",s.isOpen?"open":"closed"),t.xp6(2),t.hij("The box is now ",s.isOpen?"Open":"Closed","!"))},dependencies:[l.lW],styles:["[_nghost-%COMP%]{display:block;margin-top:1rem}.open-close-container[_ngcontent-%COMP%]{margin-top:1em;padding:20px 20px 0;color:#000;font-weight:700;font-size:20px;border:1px solid #ddd}"],data:{animation:[(0,e.X$)("openClose",[(0,e.SB)("open",(0,e.oB)({height:"200px",opacity:1,backgroundColor:"yellow"})),(0,e.SB)("closed",(0,e.oB)({height:"100px",opacity:.8,backgroundColor:"blue"})),(0,e.eR)("open => closed",[(0,e._7)(h.II,{params:{height:0,opacity:1,backgroundColor:"red",time:"1s"}})]),(0,e.eR)("closed => open",[(0,e.jt)("0.5s")]),(0,e.eR)("* => closed",[(0,e.jt)("1s")]),(0,e.eR)("* => open",[(0,e.jt)("0.5s")]),(0,e.eR)("open <=> closed",[(0,e.jt)("0.5s")]),(0,e.eR)("* => open",[(0,e.jt)("1s",(0,e.oB)({opacity:"*"}))]),(0,e.eR)("* => *",[(0,e.jt)("1s")])])]}}),o})(),title:"Open/Close Animation",data:{animation:"openClose"}},{path:"insert-remove",component:f,title:"Insert/Remove Animation",data:{animation:"insertRemove"}},{path:"status-slider",component:(()=>{class o{constructor(){this.status="inactive"}toggle(){this.status="active"===this.status?"inactive":"active"}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-status-slider"]],decls:4,vars:2,consts:[["mat-raised-button","","color","primary","type","button",3,"click"],[1,"box"]],template:function(n,s){1&n&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return s.toggle()}),t._uU(1," Toggle Status\n"),t.qZA(),t.TgZ(2,"div",1),t._uU(3),t.qZA()),2&n&&(t.xp6(2),t.Q6J("@slideStatus",s.status),t.xp6(1),t.hij(" ","active"===s.status?"Active":"Inactive","\n"))},dependencies:[l.lW],styles:["[_nghost-%COMP%]{display:block}.box[_ngcontent-%COMP%]{display:block;width:300px;height:300px;margin-top:1rem;color:#fff;font-size:50px;line-height:300px;text-align:center;border:5px solid black}"],data:{animation:[(0,e.X$)("slideStatus",[(0,e.SB)("inactive",(0,e.oB)({backgroundColor:"blue"})),(0,e.SB)("active",(0,e.oB)({backgroundColor:"#754600"})),(0,e.eR)("* => active",[(0,e.jt)("2s",(0,e.F4)([(0,e.oB)({backgroundColor:"blue",offset:0}),(0,e.oB)({backgroundColor:"red",offset:.8}),(0,e.oB)({backgroundColor:"#754600",offset:1})]))]),(0,e.eR)("* => inactive",[(0,e.jt)("2s",(0,e.F4)([(0,e.oB)({backgroundColor:"#754600",offset:0}),(0,e.oB)({backgroundColor:"red",offset:.2}),(0,e.oB)({backgroundColor:"blue",offset:1})]))]),(0,e.eR)("* => active",[(0,e.jt)("2s",(0,e.F4)([(0,e.oB)({backgroundColor:"blue"}),(0,e.oB)({backgroundColor:"red"}),(0,e.oB)({backgroundColor:"orange"})]))])])]}}),o})(),title:"Status Slider Animation",data:{animation:"statusSlider"}}]}];let y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[r.Bz.forChild(A),r.Bz]}),o})(),b=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,c.QW,l.ot,p.ie,y]}),o})()}}]);