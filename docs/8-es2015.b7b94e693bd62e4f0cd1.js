(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{CXQP:function(t,e,n){"use strict";n.r(e),n.d(e,"ShoppingListModule",(function(){return g}));var i=n("fXoL"),s=n("ozzT"),o=n("9rNa"),r=n("3Pt+"),c=n("ofXK");const b=["f"];function d(t,e){if(1&t){const t=i.Nb();i.Mb(0,"button",13),i.Ub("click",(function(){return i.cc(t),i.Wb().onDelete()})),i.gc(1," Delete "),i.Lb()}}let u=(()=>{class t{constructor(t){this.slService=t,this.editMode=!1}ngOnInit(){this.subscription=this.slService.startedEditing.subscribe(t=>{this.editedItemIndex=t,this.editMode=!0,this.editedItem=this.slService.getIngredient(t),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmit(t){const e=t.value,n=new o.a(e.name,e.amount);this.editMode?this.slService.updateIngredient(this.editedItemIndex,n):this.slService.addIngredient(n),this.editMode=!1,t.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.slService.deleteIngredient(this.editedItemIndex),this.onClear()}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(s.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){var n;1&t&&i.kc(b,!0),2&t&&i.ac(n=i.Vb())&&(e.slForm=n.first)},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,e){if(1&t){const t=i.Nb();i.Mb(0,"div",0),i.Mb(1,"div",1),i.Mb(2,"form",2,3),i.Ub("ngSubmit",(function(){i.cc(t);const n=i.bc(3);return e.onSubmit(n)})),i.Mb(4,"div",0),i.Mb(5,"div",4),i.Mb(6,"label",5),i.gc(7,"Name"),i.Lb(),i.Kb(8,"input",6),i.Lb(),i.Mb(9,"div",7),i.Mb(10,"label",8),i.gc(11,"Amount"),i.Lb(),i.Kb(12,"input",9),i.Lb(),i.Lb(),i.Mb(13,"div",0),i.Mb(14,"div",1),i.Mb(15,"button",10),i.gc(16),i.Lb(),i.fc(17,d,2,0,"button",11),i.Mb(18,"button",12),i.Ub("click",(function(){return e.onClear()})),i.gc(19," Clear "),i.Lb(),i.Lb(),i.Lb(),i.Lb(),i.Lb(),i.Lb()}if(2&t){const t=i.bc(3);i.zb(15),i.Xb("disabled",!t.valid),i.zb(1),i.ic(" ",e.editMode?"Update":"Add"," "),i.zb(1),i.Xb("ngIf",e.editMode)}},directives:[r.u,r.m,r.n,r.a,r.l,r.o,r.s,r.p,r.q,c.i],styles:[""]}),t})();function l(t,e){if(1&t){const t=i.Nb();i.Mb(0,"a",4),i.Ub("click",(function(){i.cc(t);const n=e.index;return i.Wb().onEditItem(n)})),i.gc(1),i.Lb()}if(2&t){const t=e.$implicit;i.zb(1),i.jc(" ",t.name," (",t.amount,") ")}}let a=(()=>{class t{constructor(t){this.slService=t}ngOnInit(){this.ingredients=this.slService.getIngredients(),this.isChangeSub=this.slService.ingredientsChanged.subscribe(t=>{this.ingredients=t})}onEditItem(t){this.slService.startedEditing.next(t)}ngOnDestroy(){this.isChangeSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(s.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(i.Mb(0,"div",0),i.Mb(1,"div",1),i.Kb(2,"app-shopping-edit"),i.Kb(3,"hr"),i.Mb(4,"ul",2),i.fc(5,l,2,2,"a",3),i.Lb(),i.Lb(),i.Lb()),2&t&&(i.zb(5),i.Xb("ngForOf",e.ingredients))},directives:[u,c.h],styles:[""]}),t})();var m=n("tyNb"),p=n("PCNd");let g=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[r.j,m.f.forChild([{path:"",component:a}]),p.a]]}),t})()}}]);