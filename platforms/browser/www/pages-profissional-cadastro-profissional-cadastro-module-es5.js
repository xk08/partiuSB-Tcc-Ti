(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profissional-cadastro-profissional-cadastro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-cadastro/profissional-cadastro.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-cadastro/profissional-cadastro.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Personalize seu assistente</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\n    <ion-row justify-content-center>\n      <!-- Deixa responsivo -->\n      <ion-col\n        size-sm=\"8\"\n        size-md=\"12\"\n        size-lg=\"3\"\n        size-xl=\"3\"\n      >\n        <!-- Responsável pelo logo -->\n        <h1 text-center>\n          <ion-icon\n            name=\"done-all\"\n            color=\"primary\"\n            class=\"icon-7em\"\n          ></ion-icon>\n        </h1>\n        <form #form=\"ngForm\">\n\n          <!-- NOME -->\n          <ion-item>\n            <ion-icon\n              name=\"person\"\n              color=\"primary\"\n              slot=\"start\"\n            ></ion-icon>\n            <ion-input\n              type=\"text\"\n              name=\"nome\"\n              placeholder=\"Seu nome\"\n              autofocus=\"true\"\n              [(ngModel)]='todoUser.nome'\n              required\n            ></ion-input>\n          </ion-item>\n\n          <!-- PROFISSÃO -->\n\n          <ion-item>\n            <ion-icon\n              name=\"person-add\"\n              color=\"primary\"\n              slot=\"start\"\n            ></ion-icon>\n            <ion-input\n              type=\"text\"\n              name=\"profissao\"\n              placeholder=\"Sua profissão\"\n              autofocus=\"true\"\n              [(ngModel)]='todoUser.profissao'\n              required\n            ></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon\n              name=\"person-add\"\n              color=\"primary\"\n              slot=\"start\"\n            ></ion-icon>\n            <ion-input\n              type=\"text\"\n              name=\"codigoProfissao\"\n              placeholder=\"Código de sua profissão\"\n              autofocus=\"true\"\n              [(ngModel)]='todoUser.codigoProfissao'\n              required\n            ></ion-input>\n          </ion-item>\n\n          <!-- EMAIL -->\n\n          <ion-item>\n            <ion-icon\n              name=\"mail\"\n              color=\"primary\"\n              slot=\"start\"\n            ></ion-icon>\n            <ion-input\n              type=\"email\"\n              name=\"email\"\n              placeholder=\"Seu e-mail\"\n              inputmode=\"email\"\n              autofocus=\"true\"\n              [(ngModel)]='todoUser.email'\n              required\n            ></ion-input>\n          </ion-item>\n\n          <!-- SENHA -->\n\n          <ion-item>\n            <ion-icon\n              name=\"lock\"\n              color=\"primary\"\n              slot=\"start\"\n            ></ion-icon>\n            <ion-input\n              type=\"password\"\n              name=\"password\"\n              placeholder=\"Sua senha\"\n              [(ngModel)]='todoUser.senha'\n              required\n            ></ion-input>\n          </ion-item>\n\n          <!-- BOTÃO DE CADASTRO -->\n\n          <ion-button\n            expand=\"block\"\n            type=\"submit\"\n            class=\"login-button\"\n            [disabled]=\"!form.form.valid\"\n            (click)=\"concluiCadastro()\"\n            color='dark'\n          >\n            Colaborar\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profissional-cadastro/profissional-cadastro.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profissional-cadastro/profissional-cadastro.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProfissionalCadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalCadastroPageModule", function() { return ProfissionalCadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profissional_cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profissional-cadastro.page */ "./src/app/pages/profissional-cadastro/profissional-cadastro.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _profissional_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalCadastroPage"]
    }
];
var ProfissionalCadastroPageModule = /** @class */ (function () {
    function ProfissionalCadastroPageModule() {
    }
    ProfissionalCadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_profissional_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalCadastroPage"]]
        })
    ], ProfissionalCadastroPageModule);
    return ProfissionalCadastroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profissional-cadastro/profissional-cadastro.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profissional-cadastro/profissional-cadastro.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zpc3Npb25hbC1jYWRhc3Ryby9wcm9maXNzaW9uYWwtY2FkYXN0cm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profissional-cadastro/profissional-cadastro.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profissional-cadastro/profissional-cadastro.page.ts ***!
  \***************************************************************************/
/*! exports provided: ProfissionalCadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalCadastroPage", function() { return ProfissionalCadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuarioCadastro/usuario-cadastro.service */ "./src/app/services/usuarioCadastro/usuario-cadastro.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var ProfissionalCadastroPage = /** @class */ (function () {
    function ProfissionalCadastroPage(afAuth, usuarioService, loadingController, // Substituir depois pelo overlayService (que é genérico)
    navCtrl) {
        this.afAuth = afAuth;
        this.usuarioService = usuarioService;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        //REFERÊNCIA A CLASS USUARIO
        this.todoUser = {
            nome: '',
            dataNasc: '',
            foto: '',
            profissao: '',
            codigoProfissao: '',
            isAtivo: true,
            email: '',
            senha: '',
            isAdmin: false,
            isProfissional: false
        };
    }
    ProfissionalCadastroPage.prototype.ngOnInit = function () { };
    //FUNÇÃO PARA CADASTRAR NOVO USUARIO
    ProfissionalCadastroPage.prototype.concluiCadastro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            //Trocar pelo overlay
                            message: 'Salvando dados...'
                        })];
                    case 1:
                        loading = _a.sent();
                        //PASSA OS DADOS PARA CADASTRAR O USUARIO E SEU ENDEREÇO ENQUANTO ISSO EXIBE UM LOADING
                        this.uidUser = this.usuarioService.addUsuarioTodo(this.todoUser).then(function () {
                            loading.dismiss();
                        });
                        //APÓS DADOS CADASTRADOS, ENVIA O USUARIO PARA O INICIO DA APLICAÇÃO
                        this.navCtrl.navigateBack('login');
                        console.log('Usuário Profissional foi cadastrado com sucesso !');
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfissionalCadastroPage.ctorParameters = function () { return [
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioCadastroService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ProfissionalCadastroPage.prototype, "form", void 0);
    ProfissionalCadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profissional-cadastro',
            template: __webpack_require__(/*! raw-loader!./profissional-cadastro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-cadastro/profissional-cadastro.page.html"),
            styles: [__webpack_require__(/*! ./profissional-cadastro.page.scss */ "./src/app/pages/profissional-cadastro/profissional-cadastro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioCadastroService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], ProfissionalCadastroPage);
    return ProfissionalCadastroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profissional-cadastro-profissional-cadastro-module-es5.js.map