(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{zrcO:function(e,r,t){"use strict";t.r(r),t.d(r,"UsersModule",(function(){return M}));var n=t("3Pt+"),i=t("ofXK"),o=t("tyNb"),c=t("fXoL"),s=function(){function e(){}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c.Eb({type:e,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(e,r){1&e&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Lb(2,"router-outlet"),c.Ob(),c.Ob())},directives:[o.h],encapsulation:2}),e}(),b=t("SxV6"),a=t("J9tS");function u(e,r){1&e&&c.Lb(0,"span",12)}function d(e,r){1&e&&(c.Pb(0,"span"),c.wc(1,"Deletar"),c.Ob())}function f(e,r){if(1&e){var t=c.Qb();c.Pb(0,"tr"),c.Pb(1,"td"),c.wc(2),c.Ob(),c.Pb(3,"td"),c.wc(4),c.Ob(),c.Pb(5,"td"),c.wc(6),c.Ob(),c.Pb(7,"td"),c.wc(8),c.Ob(),c.Pb(9,"td"),c.wc(10),c.Ob(),c.Pb(11,"td",8),c.Pb(12,"a",9),c.wc(13,"Editar"),c.Ob(),c.Pb(14,"button",10),c.Wb("click",(function(){c.mc(t);var e=r.$implicit;return c.Yb().deleteUser(e.id)})),c.vc(15,u,1,0,"span",11),c.vc(16,d,2,0,"span",7),c.Ob(),c.Ob(),c.Ob()}if(2&e){var n=r.$implicit;c.zb(2),c.xc(n.firstName),c.zb(2),c.xc(n.lastName),c.zb(2),c.xc(n.username),c.zb(2),c.xc(n.email),c.zb(2),c.xc(n.cpfcnpj),c.zb(2),c.gc("routerLink","edit/",n.id,""),c.zb(2),c.ec("disabled",n.isDeleting),c.zb(1),c.ec("ngIf",n.isDeleting),c.zb(1),c.ec("ngIf",!n.isDeleting)}}function l(e,r){1&e&&(c.Pb(0,"tr"),c.Pb(1,"td",13),c.Lb(2,"span",14),c.Ob(),c.Ob())}var m=function(){function e(e){this.accountService=e,this.users=null}return e.prototype.ngOnInit=function(){var e=this;this.accountService.getAll().pipe(Object(b.a)()).subscribe((function(r){return e.users=r}))},e.prototype.deleteUser=function(e){var r=this;this.users.find((function(r){return r.id===e})).isDeleting=!0,this.accountService.delete(e).pipe(Object(b.a)()).subscribe((function(){r.users=r.users.filter((function(r){return r.id!==e}))}))},e.\u0275fac=function(r){return new(r||e)(c.Kb(a.a))},e.\u0275cmp=c.Eb({type:e,selectors:[["ng-component"]],decls:20,vars:2,consts:[[1,"mt-4"],["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"table","table-striped","table-responsive"],[1,"thead-dark"],[2,"width","30%"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","mr-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-user",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,r){1&e&&(c.Pb(0,"div",0),c.Pb(1,"a",1),c.wc(2,"Adicionar Usu\xe1rio"),c.Ob(),c.Pb(3,"table",2),c.Pb(4,"thead",3),c.Pb(5,"tr"),c.Pb(6,"th",4),c.wc(7,"Primeiro Nome"),c.Ob(),c.Pb(8,"th",4),c.wc(9,"\xdaltimo Nome"),c.Ob(),c.Pb(10,"th",4),c.wc(11,"Usu\xe1rio"),c.Ob(),c.Pb(12,"th",4),c.wc(13,"Email"),c.Ob(),c.Pb(14,"th",4),c.wc(15,"CPF/CNPJ"),c.Ob(),c.Lb(16,"th",5),c.Ob(),c.Ob(),c.Pb(17,"tbody"),c.vc(18,f,17,9,"tr",6),c.vc(19,l,3,0,"tr",7),c.Ob(),c.Ob(),c.Ob()),2&e&&(c.zb(18),c.ec("ngForOf",r.users),c.zb(1),c.ec("ngIf",!r.users))},directives:[o.f,i.k,i.l],encapsulation:2}),e}();function p(e,r){1&e&&(c.Pb(0,"h1"),c.wc(1,"Adicionar Usu\xe1rio"),c.Ob())}function v(e,r){1&e&&(c.Pb(0,"h1"),c.wc(1,"Editar Usu\xe1rio"),c.Ob())}function h(e,r){1&e&&(c.Pb(0,"div"),c.wc(1,"Primeiro Nome necess\xe1rio"),c.Ob())}function g(e,r){if(1&e&&(c.Pb(0,"div",21),c.vc(1,h,2,0,"div",0),c.Ob()),2&e){var t=c.Yb();c.zb(1),c.ec("ngIf",t.f.firstName.errors.required)}}function P(e,r){1&e&&(c.Pb(0,"div"),c.wc(1,"\xdaltimo Nome necess\xe1rio"),c.Ob())}function O(e,r){if(1&e&&(c.Pb(0,"div",21),c.vc(1,P,2,0,"div",0),c.Ob()),2&e){var t=c.Yb();c.zb(1),c.ec("ngIf",t.f.lastName.errors.required)}}function w(e,r){1&e&&(c.Pb(0,"div"),c.wc(1,"Email necess\xe1rio"),c.Ob())}function z(e,r){if(1&e&&(c.Pb(0,"div",21),c.vc(1,w,2,0,"div",0),c.Ob()),2&e){var t=c.Yb();c.zb(1),c.ec("ngIf",t.f.email.errors.required)}}function C(e,r){1&e&&(c.Pb(0,"div"),c.wc(1,"CPF/CNPJ necess\xe1rio"),c.Ob())}function N(e,r){if(1&e&&(c.Pb(0,"div",21),c.vc(1,C,2,0,"div",0),c.Ob()),2&e){var t=c.Yb();c.zb(1),c.ec("ngIf",t.f.cpfcnpj.errors.required)}}function I(e,r){1&e&&(c.Pb(0,"div"),c.wc(1,"Usu\xe1rio necess\xe1rio"),c.Ob())}function y(e,r){if(1&e&&(c.Pb(0,"div",21),c.vc(1,I,2,0,"div",0),c.Ob()),2&e){var t=c.Yb();c.zb(1),c.ec("ngIf",t.f.username.errors.required)}}function S(e,r){1&e&&(c.Pb(0,"em"),c.wc(1,"(Deixe em branco para manter a mesma senha)"),c.Ob())}function j(e,r){1&e&&(c.Pb(0,"div"),c.wc(1,"Senha necess\xe1ria"),c.Ob())}function L(e,r){1&e&&(c.Pb(0,"div"),c.wc(1,"Senha deve conter ao menos 6 caract\xe9res"),c.Ob())}function k(e,r){if(1&e&&(c.Pb(0,"div",21),c.vc(1,j,2,0,"div",0),c.vc(2,L,2,0,"div",0),c.Ob()),2&e){var t=c.Yb();c.zb(1),c.ec("ngIf",t.f.password.errors.required),c.zb(1),c.ec("ngIf",t.f.password.errors.minlength)}}function U(e,r){1&e&&c.Lb(0,"span",22)}var q=function(e){return{"is-invalid":e}},x=function(){function e(e,r,t,n,i){this.formBuilder=e,this.route=r,this.router=t,this.accountService=n,this.alertService=i,this.loading=!1,this.submitted=!1}return e.prototype.isCPF=function(){return null==this.form.value.cpfcnpj||this.form.value.cpfcnpj.lenth<12},e.prototype.getCpfCnpjMask=function(){return this.isCPF()?"000.000.000-009":"00.000.000/0000-00"},e.prototype.ngOnInit=function(){var e=this;this.id=this.route.snapshot.params.id,this.isAddMode=!this.id;var r=[n.n.minLength(6)];this.isAddMode&&r.push(n.n.required),this.form=this.formBuilder.group({firstName:["",n.n.required],lastName:["",n.n.required],username:["",n.n.required],email:["",n.n.required],cpfcnpj:["",n.n.required],password:["",r]}),this.isAddMode||this.accountService.getById(this.id).pipe(Object(b.a)()).subscribe((function(r){e.f.nome.setValue(r.nome),e.f.email.setValue(r.email),e.f.cpfcnpj.setValue(r.cpf)}))},Object.defineProperty(e.prototype,"f",{get:function(){return this.form.controls},enumerable:!1,configurable:!0}),e.prototype.onSubmit=function(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.isAddMode?this.createUser():this.updateUser())},e.prototype.createUser=function(){var e=this;this.accountService.register(this.form.value).pipe(Object(b.a)()).subscribe((function(r){e.alertService.success("Usu\xe1rio adicionado com sucesso!",{keepAfterRouteChange:!0}),e.router.navigate([".",{relativeTo:e.route}])}),(function(r){e.alertService.error(r),e.loading=!1}))},e.prototype.updateUser=function(){var e=this;this.accountService.update(this.id,this.form.value).pipe(Object(b.a)()).subscribe((function(r){e.alertService.success("Usu\xe1rio alterado com sucesso",{keepAfterRouteChange:!0}),e.router.navigate(["..",{relativeTo:e.route}])}),(function(r){e.alertService.error(r),e.loading=!1}))},e.\u0275fac=function(r){return new(r||e)(c.Kb(n.b),c.Kb(o.a),c.Kb(o.d),c.Kb(a.a),c.Kb(a.b))},e.\u0275cmp=c.Eb({type:e,selectors:[["ng-component"]],decls:43,vars:30,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["for","email"],["type","email","formControlName","email",1,"form-control",3,"ngClass"],["for","cpfcnpj"],["type","text","formControlName","cpfcnpj","placeholder","CPF ou CNPJ",1,"form-control",3,"ngClass"],["for","username"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,r){1&e&&(c.vc(0,p,2,0,"h1",0),c.vc(1,v,2,0,"h1",0),c.Pb(2,"form",1),c.Wb("ngSubmit",(function(){return r.onSubmit()})),c.Pb(3,"div",2),c.Pb(4,"div",3),c.Pb(5,"label",4),c.wc(6,"Primeiro Nome"),c.Ob(),c.Lb(7,"input",5),c.vc(8,g,2,1,"div",6),c.Ob(),c.Pb(9,"div",3),c.Pb(10,"label",7),c.wc(11,"\xdaltimo Nome"),c.Ob(),c.Lb(12,"input",8),c.vc(13,O,2,1,"div",6),c.Ob(),c.Ob(),c.Pb(14,"div",2),c.Pb(15,"div",3),c.Pb(16,"label",9),c.wc(17,"Email"),c.Ob(),c.Lb(18,"input",10),c.vc(19,z,2,1,"div",6),c.Ob(),c.Pb(20,"div",3),c.Pb(21,"label",11),c.wc(22,"CPF/CNPJ"),c.Ob(),c.Lb(23,"input",12),c.vc(24,N,2,1,"div",6),c.Ob(),c.Ob(),c.Pb(25,"div",2),c.Pb(26,"div",3),c.Pb(27,"label",13),c.wc(28,"Usu\xe1rio"),c.Ob(),c.Lb(29,"input",14),c.vc(30,y,2,1,"div",6),c.Ob(),c.Pb(31,"div",3),c.Pb(32,"label",15),c.wc(33," Senha "),c.vc(34,S,2,0,"em",0),c.Ob(),c.Lb(35,"input",16),c.vc(36,k,3,2,"div",6),c.Ob(),c.Ob(),c.Pb(37,"div",17),c.Pb(38,"button",18),c.vc(39,U,1,0,"span",19),c.wc(40," Salvar "),c.Ob(),c.Pb(41,"a",20),c.wc(42,"Cancelar"),c.Ob(),c.Ob(),c.Ob()),2&e&&(c.ec("ngIf",r.isAddMode),c.zb(1),c.ec("ngIf",!r.isAddMode),c.zb(1),c.ec("formGroup",r.form),c.zb(5),c.ec("ngClass",c.hc(18,q,r.submitted&&r.f.firstName.errors)),c.zb(1),c.ec("ngIf",r.submitted&&r.f.firstName.errors),c.zb(4),c.ec("ngClass",c.hc(20,q,r.submitted&&r.f.lastName.errors)),c.zb(1),c.ec("ngIf",r.submitted&&r.f.lastName.errors),c.zb(5),c.ec("ngClass",c.hc(22,q,r.submitted&&r.f.email.errors)),c.zb(1),c.ec("ngIf",r.submitted&&r.f.email.errors),c.zb(4),c.ec("ngClass",c.hc(24,q,r.submitted&&r.f.cpfcnpj.errors)),c.zb(1),c.ec("ngIf",r.submitted&&r.f.cpfcnpj.errors),c.zb(5),c.ec("ngClass",c.hc(26,q,r.submitted&&r.f.username.errors)),c.zb(1),c.ec("ngIf",r.submitted&&r.f.username.errors),c.zb(4),c.ec("ngIf",!r.isAddMode),c.zb(1),c.ec("ngClass",c.hc(28,q,r.submitted&&r.f.password.errors)),c.zb(1),c.ec("ngIf",r.submitted&&r.f.password.errors),c.zb(2),c.ec("disabled",r.loading),c.zb(1),c.ec("ngIf",r.loading))},directives:[i.l,n.p,n.i,n.d,n.a,n.h,n.c,i.j,o.f],encapsulation:2}),e}(),A=[{path:"",component:s,children:[{path:"",component:m},{path:"add",component:x},{path:"edit/:id",component:x}]}],F=function(){function e(){}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(r){return new(r||e)},imports:[[o.g.forChild(A)],o.g]}),e}(),M=function(){function e(){}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(r){return new(r||e)},imports:[[i.c,n.m,F]]}),e}()}}]);