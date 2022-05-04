"use strict";(self.webpackChunksw_app=self.webpackChunksw_app||[]).push([[526],{3526:($,c,a)=>{a.r(c),a.d(c,{PlanetsModule:()=>C});var s=a(9808),r=a(9387),t=a(5e3),p=a(1135),d=a(4351),u=a(515),h=a(262),v=a(2843),g=a(4766),f=a(520);let Z=(()=>{class n{constructor(e){this.http=e,this.planetIdSubject=new p.X(0),this.planetId$=this.planetIdSubject.asObservable(),this.planet$=this.planetId$.pipe((0,d.b)(o=>0!=o?this.http.get(`${g.J}/planets/${o}`):u.E),(0,h.K)(this.handleError))}setPlanetId(e){0!=e&&this.planetIdSubject.next(e)}handleError(e){let o;return o=e.error instanceof ErrorEvent?`An error occurred: ${e.error.message}`:`Backend returned code ${e.status}: ${e.message}`,console.error(e),(0,v._)(()=>o)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(f.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var m=a(9650),P=a(4834),U=a(773),T=a(7423);function I(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"mat-list"),t.TgZ(4,"mat-list-item"),t._uU(5),t.qZA(),t._UZ(6,"mat-divider"),t.TgZ(7,"mat-list-item"),t._uU(8),t.qZA(),t._UZ(9,"mat-divider"),t.TgZ(10,"mat-list-item"),t._uU(11),t.qZA(),t._UZ(12,"mat-divider"),t.TgZ(13,"mat-list-item"),t._uU(14),t.qZA(),t._UZ(15,"mat-divider"),t.TgZ(16,"mat-list-item"),t._uU(17),t.qZA(),t._UZ(18,"mat-divider"),t.TgZ(19,"mat-list-item"),t._uU(20),t.qZA(),t._UZ(21,"mat-divider"),t._UZ(22,"mat-divider"),t.TgZ(23,"mat-list-item"),t._uU(24),t.qZA(),t._UZ(25,"mat-divider"),t._UZ(26,"mat-divider"),t.TgZ(27,"mat-list-item"),t._uU(28),t.qZA(),t.qZA(),t.BQk()),2&n){const e=i.ngIf;t.xp6(2),t.Oqu(e.name),t.xp6(3),t.hij("Diameter: ",e.diameter,""),t.xp6(3),t.hij("Rotation period: ",e.rotation_period,""),t.xp6(3),t.hij("Orbital period: ",e.orbital_period,""),t.xp6(3),t.hij("Gravity: ",e.gravity,""),t.xp6(3),t.hij("Population: ",e.population,""),t.xp6(3),t.hij("Climate: ",e.climate,""),t.xp6(4),t.hij("Terrain: ",e.terrain,""),t.xp6(4),t.hij("Surface water: ",e.surface_water,"")}}function A(n,i){1&n&&t._UZ(0,"mat-spinner")}const j=[{path:":id",component:(()=>{class n{constructor(e,o,l){this.planetsService=e,this.route=o,this.location=l,this.planetId=0,this.planet$=this.planetsService.planet$}ngOnInit(){this.route.params.subscribe(e=>this.planetId=+e.id),this.planetsService.setPlanetId(this.planetId)}back(){this.location.back()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Z),t.Y36(r.gz),t.Y36(s.Ye))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-planet-details"]],decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["loading",""],["mat-raised-button","","color","accent",3,"click"]],template:function(e,o){if(1&e&&(t.YNc(0,I,29,9,"ng-container",0),t.ALo(1,"async"),t.YNc(2,A,1,0,"ng-template",null,1,t.W1O),t.TgZ(4,"button",2),t.NdJ("click",function(){return o.back()}),t._uU(5,"Back"),t.qZA()),2&e){const l=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,o.planet$))("ngIfElse",l)}},directives:[s.O5,m.i$,m.Tg,P.d,U.Ou,T.lW],pipes:[s.Ov],styles:[""]}),n})()},{path:"",redirectTo:"/films"}];let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.Bz.forChild(j)],r.Bz]}),n})();var S=a(9921);let C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.ez,y,S.h]]}),n})()}}]);