function _defineProperties(e,i){for(var r=0;r<i.length;r++){var t=i[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,i,r){return i&&_defineProperties(e.prototype,i),r&&_defineProperties(e,r),e}function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{zrcO:function(e,i,r){"use strict";r.r(i),r.d(i,"UsersModule",(function(){return x}));var t,n=r("3Pt+"),s=r("ofXK"),b=r("tyNb"),o=r("fXoL"),c=((t=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Eb({type:t,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(e,i){1&e&&(o.Nb(0,"div",0),o.Nb(1,"div",1),o.Lb(2,"router-outlet"),o.Mb(),o.Mb())},directives:[b.g],encapsulation:2}),t),a=r("SxV6"),u=r("J9tS");function f(e,i){1&e&&o.Lb(0,"span",11)}function l(e,i){1&e&&(o.Nb(0,"span"),o.ic(1,"Deletar"),o.Mb())}function d(e,i){if(1&e){var r=o.Ob();o.Nb(0,"tr"),o.Nb(1,"td"),o.ic(2),o.Mb(),o.Nb(3,"td"),o.ic(4),o.Mb(),o.Nb(5,"td"),o.ic(6),o.Mb(),o.Nb(7,"td"),o.ic(8),o.Mb(),o.Nb(9,"td"),o.ic(10),o.Mb(),o.Nb(11,"td",7),o.Nb(12,"a",8),o.ic(13,"Editar"),o.Mb(),o.Nb(14,"button",9),o.Vb("click",(function(){o.dc(r);var e=i.$implicit;return o.Xb().deleteUser(e.id)})),o.hc(15,f,1,0,"span",10),o.hc(16,l,2,0,"span",6),o.Mb(),o.Mb(),o.Mb()}if(2&e){var t=i.$implicit;o.zb(2),o.jc(t.firstName),o.zb(2),o.jc(t.lastName),o.zb(2),o.jc(t.username),o.zb(2),o.jc(t.email),o.zb(2),o.jc(t.cpfcnpj),o.zb(2),o.Zb("routerLink","edit/",t.id,""),o.zb(2),o.Yb("disabled",t.isDeleting),o.zb(1),o.Yb("ngIf",t.isDeleting),o.zb(1),o.Yb("ngIf",!t.isDeleting)}}function m(e,i){1&e&&(o.Nb(0,"tr"),o.Nb(1,"td",12),o.Lb(2,"span",13),o.Mb(),o.Mb())}var p,h=((p=function(){function e(i){_classCallCheck(this,e),this.accountService=i,this.users=null}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.accountService.getAll().pipe(Object(a.a)()).subscribe((function(i){return e.users=i}))}},{key:"deleteUser",value:function(e){var i=this;this.users.find((function(i){return i.id===e})).isDeleting=!0,this.accountService.delete(e).pipe(Object(a.a)()).subscribe((function(){i.users=i.users.filter((function(i){return i.id!==e}))}))}}]),e}()).\u0275fac=function(e){return new(e||p)(o.Kb(u.a))},p.\u0275cmp=o.Eb({type:p,selectors:[["ng-component"]],decls:21,vars:2,consts:[["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"table","table-striped","table-responsive"],[1,"thead-dark"],[2,"width","30%"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","mr-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-user",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,i){1&e&&(o.Nb(0,"h1"),o.ic(1,"Usu\xe1rios"),o.Mb(),o.Nb(2,"a",0),o.ic(3,"Adicionar Usu\xe1rio"),o.Mb(),o.Nb(4,"table",1),o.Nb(5,"thead",2),o.Nb(6,"tr"),o.Nb(7,"th",3),o.ic(8,"Primeiro Nome"),o.Mb(),o.Nb(9,"th",3),o.ic(10,"\xdaltimo Nome"),o.Mb(),o.Nb(11,"th",3),o.ic(12,"Usu\xe1rio"),o.Mb(),o.Nb(13,"th",3),o.ic(14,"Email"),o.Mb(),o.Nb(15,"th",3),o.ic(16,"CPF/CNPJ"),o.Mb(),o.Lb(17,"th",4),o.Mb(),o.Mb(),o.Nb(18,"tbody"),o.hc(19,d,17,9,"tr",5),o.hc(20,m,3,0,"tr",6),o.Mb(),o.Mb()),2&e&&(o.zb(19),o.Yb("ngForOf",i.users),o.zb(1),o.Yb("ngIf",!i.users))},directives:[b.e,s.i,s.j],encapsulation:2}),p);function v(e,i){1&e&&(o.Nb(0,"h1"),o.ic(1,"Adicionar Usu\xe1rio"),o.Mb())}function N(e,i){1&e&&(o.Nb(0,"h1"),o.ic(1,"Editar Usu\xe1rio"),o.Mb())}function g(e,i){1&e&&(o.Nb(0,"div"),o.ic(1,"Primeiro Nome necess\xe1rio"),o.Mb())}function M(e,i){if(1&e&&(o.Nb(0,"div",21),o.hc(1,g,2,0,"div",0),o.Mb()),2&e){var r=o.Xb();o.zb(1),o.Yb("ngIf",r.f.firstName.errors.required)}}function C(e,i){1&e&&(o.Nb(0,"div"),o.ic(1,"\xdaltimo Nome necess\xe1rio"),o.Mb())}function z(e,i){if(1&e&&(o.Nb(0,"div",21),o.hc(1,C,2,0,"div",0),o.Mb()),2&e){var r=o.Xb();o.zb(1),o.Yb("ngIf",r.f.lastName.errors.required)}}function k(e,i){1&e&&(o.Nb(0,"div"),o.ic(1,"Email necess\xe1rio"),o.Mb())}function y(e,i){if(1&e&&(o.Nb(0,"div",21),o.hc(1,k,2,0,"div",0),o.Mb()),2&e){var r=o.Xb();o.zb(1),o.Yb("ngIf",r.f.email.errors.required)}}function I(e,i){1&e&&(o.Nb(0,"div"),o.ic(1,"CPF/CNPJ necess\xe1rio"),o.Mb())}function Y(e,i){if(1&e&&(o.Nb(0,"div",21),o.hc(1,I,2,0,"div",0),o.Mb()),2&e){var r=o.Xb();o.zb(1),o.Yb("ngIf",r.f.cpfcnpj.errors.required)}}function j(e,i){1&e&&(o.Nb(0,"div"),o.ic(1,"Usu\xe1rio necess\xe1rio"),o.Mb())}function w(e,i){if(1&e&&(o.Nb(0,"div",21),o.hc(1,j,2,0,"div",0),o.Mb()),2&e){var r=o.Xb();o.zb(1),o.Yb("ngIf",r.f.username.errors.required)}}function S(e,i){1&e&&(o.Nb(0,"em"),o.ic(1,"(Deixe em branco para manter a mesma senha)"),o.Mb())}function P(e,i){1&e&&(o.Nb(0,"div"),o.ic(1,"Senha necess\xe1ria"),o.Mb())}function L(e,i){1&e&&(o.Nb(0,"div"),o.ic(1,"Senha deve conter ao menos 6 caract\xe9res"),o.Mb())}function U(e,i){if(1&e&&(o.Nb(0,"div",21),o.hc(1,P,2,0,"div",0),o.hc(2,L,2,0,"div",0),o.Mb()),2&e){var r=o.Xb();o.zb(1),o.Yb("ngIf",r.f.password.errors.required),o.zb(1),o.Yb("ngIf",r.f.password.errors.minlength)}}function q(e,i){1&e&&o.Lb(0,"span",22)}var A,O,_,E=function(e){return{"is-invalid":e}},F=((A=function(){function e(i,r,t,n,s){_classCallCheck(this,e),this.formBuilder=i,this.route=r,this.router=t,this.accountService=n,this.alertService=s,this.loading=!1,this.submitted=!1}return _createClass(e,[{key:"isCPF",value:function(){return null==this.form.value.cpfcnpj||this.form.value.cpfcnpj.lenth<12}},{key:"getCpfCnpjMask",value:function(){return this.isCPF()?"000.000.000-009":"00.000.000/0000-00"}},{key:"ngOnInit",value:function(){var e=this;this.id=this.route.snapshot.params.id,this.isAddMode=!this.id;var i=[n.l.minLength(6)];this.isAddMode&&i.push(n.l.required),this.form=this.formBuilder.group({firstName:["",n.l.required],lastName:["",n.l.required],username:["",n.l.required],email:["",n.l.required],cpfcnpj:["",n.l.required],password:["",i]}),this.isAddMode||this.accountService.getById(this.id).pipe(Object(a.a)()).subscribe((function(i){e.f.firstName.setValue(i.firstName),e.f.lastName.setValue(i.lastName),e.f.username.setValue(i.username),e.f.email.setValue(i.email),e.f.cpfcnpj.setValue(i.cpfcnpj)}))}},{key:"onSubmit",value:function(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.isAddMode?this.createUser():this.updateUser())}},{key:"createUser",value:function(){var e=this;this.accountService.register(this.form.value).pipe(Object(a.a)()).subscribe((function(i){e.alertService.success("Usu\xe1rio adicionado com sucesso!",{keepAfterRouteChange:!0}),e.router.navigate([".",{relativeTo:e.route}])}),(function(i){e.alertService.error(i),e.loading=!1}))}},{key:"updateUser",value:function(){var e=this;this.accountService.update(this.id,this.form.value).pipe(Object(a.a)()).subscribe((function(i){e.alertService.success("Usu\xe1rio alterado com sucesso",{keepAfterRouteChange:!0}),e.router.navigate(["..",{relativeTo:e.route}])}),(function(i){e.alertService.error(i),e.loading=!1}))}},{key:"f",get:function(){return this.form.controls}}]),e}()).\u0275fac=function(e){return new(e||A)(o.Kb(n.b),o.Kb(b.a),o.Kb(b.c),o.Kb(u.a),o.Kb(u.b))},A.\u0275cmp=o.Eb({type:A,selectors:[["ng-component"]],decls:43,vars:30,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["for","email"],["type","email","formControlName","email",1,"form-control",3,"ngClass"],["for","cpfcnpj"],["type","text","formControlName","cpfcnpj","placeholder","CPF ou CNPJ",1,"form-control",3,"ngClass"],["for","username"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,i){1&e&&(o.hc(0,v,2,0,"h1",0),o.hc(1,N,2,0,"h1",0),o.Nb(2,"form",1),o.Vb("ngSubmit",(function(){return i.onSubmit()})),o.Nb(3,"div",2),o.Nb(4,"div",3),o.Nb(5,"label",4),o.ic(6,"Primeiro Nome"),o.Mb(),o.Lb(7,"input",5),o.hc(8,M,2,1,"div",6),o.Mb(),o.Nb(9,"div",3),o.Nb(10,"label",7),o.ic(11,"\xdaltimo Nome"),o.Mb(),o.Lb(12,"input",8),o.hc(13,z,2,1,"div",6),o.Mb(),o.Mb(),o.Nb(14,"div",2),o.Nb(15,"div",3),o.Nb(16,"label",9),o.ic(17,"Email"),o.Mb(),o.Lb(18,"input",10),o.hc(19,y,2,1,"div",6),o.Mb(),o.Nb(20,"div",3),o.Nb(21,"label",11),o.ic(22,"CPF/CNPJ"),o.Mb(),o.Lb(23,"input",12),o.hc(24,Y,2,1,"div",6),o.Mb(),o.Mb(),o.Nb(25,"div",2),o.Nb(26,"div",3),o.Nb(27,"label",13),o.ic(28,"Usu\xe1rio"),o.Mb(),o.Lb(29,"input",14),o.hc(30,w,2,1,"div",6),o.Mb(),o.Nb(31,"div",3),o.Nb(32,"label",15),o.ic(33," Senha "),o.hc(34,S,2,0,"em",0),o.Mb(),o.Lb(35,"input",16),o.hc(36,U,3,2,"div",6),o.Mb(),o.Mb(),o.Nb(37,"div",17),o.Nb(38,"button",18),o.hc(39,q,1,0,"span",19),o.ic(40," Salvar "),o.Mb(),o.Nb(41,"a",20),o.ic(42,"Cancelar"),o.Mb(),o.Mb(),o.Mb()),2&e&&(o.Yb("ngIf",i.isAddMode),o.zb(1),o.Yb("ngIf",!i.isAddMode),o.zb(1),o.Yb("formGroup",i.form),o.zb(5),o.Yb("ngClass",o.bc(18,E,i.submitted&&i.f.firstName.errors)),o.zb(1),o.Yb("ngIf",i.submitted&&i.f.firstName.errors),o.zb(4),o.Yb("ngClass",o.bc(20,E,i.submitted&&i.f.lastName.errors)),o.zb(1),o.Yb("ngIf",i.submitted&&i.f.lastName.errors),o.zb(5),o.Yb("ngClass",o.bc(22,E,i.submitted&&i.f.email.errors)),o.zb(1),o.Yb("ngIf",i.submitted&&i.f.email.errors),o.zb(4),o.Yb("ngClass",o.bc(24,E,i.submitted&&i.f.cpfcnpj.errors)),o.zb(1),o.Yb("ngIf",i.submitted&&i.f.cpfcnpj.errors),o.zb(5),o.Yb("ngClass",o.bc(26,E,i.submitted&&i.f.username.errors)),o.zb(1),o.Yb("ngIf",i.submitted&&i.f.username.errors),o.zb(4),o.Yb("ngIf",!i.isAddMode),o.zb(1),o.Yb("ngClass",o.bc(28,E,i.submitted&&i.f.password.errors)),o.zb(1),o.Yb("ngIf",i.submitted&&i.f.password.errors),o.zb(2),o.Yb("disabled",i.loading),o.zb(1),o.Yb("ngIf",i.loading))},directives:[s.j,n.m,n.i,n.d,n.a,n.h,n.c,s.h,b.e],encapsulation:2}),A),X=[{path:"",component:c,children:[{path:"",component:h},{path:"add",component:F},{path:"edit/:id",component:F}]}],V=((_=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ib({type:_}),_.\u0275inj=o.Hb({factory:function(e){return new(e||_)},imports:[[b.f.forChild(X)],b.f]}),_),x=((O=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ib({type:O}),O.\u0275inj=o.Hb({factory:function(e){return new(e||O)},imports:[[s.b,n.k,V]]}),O)}}]);