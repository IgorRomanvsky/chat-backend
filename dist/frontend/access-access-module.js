(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-access-module"],{

/***/ "./src/app/access/access-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/access/access-routing.module.ts ***!
  \*************************************************/
/*! exports provided: AccessRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRoutes", function() { return AccessRoutes; });
/* harmony import */ var _pages_access_page_access_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/access-page/access-page.component */ "./src/app/access/pages/access-page/access-page.component.ts");

var AccessRoutes = [
    {
        path: "",
        component: _pages_access_page_access_page_component__WEBPACK_IMPORTED_MODULE_0__["AccessPageComponent"],
    },
];


/***/ }),

/***/ "./src/app/access/access.module.ts":
/*!*****************************************!*\
  !*** ./src/app/access/access.module.ts ***!
  \*****************************************/
/*! exports provided: AccessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessModule", function() { return AccessModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_access_page_access_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/access-page/access-page.component */ "./src/app/access/pages/access-page/access-page.component.ts");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "./src/app/access/components/login-form/login-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _access_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./access-routing.module */ "./src/app/access/access-routing.module.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _components_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/instructions/instructions.component */ "./src/app/access/components/instructions/instructions.component.ts");










var AccessModule = /** @class */ (function () {
    function AccessModule() {
    }
    AccessModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_access_routing_module__WEBPACK_IMPORTED_MODULE_6__["AccessRoutes"]),
            ],
            declarations: [
                _pages_access_page_access_page_component__WEBPACK_IMPORTED_MODULE_2__["AccessPageComponent"],
                _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"],
                _components_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_9__["InstructionsComponent"],
            ],
            exports: [_pages_access_page_access_page_component__WEBPACK_IMPORTED_MODULE_2__["AccessPageComponent"], _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"]],
        })
    ], AccessModule);
    return AccessModule;
}());



/***/ }),

/***/ "./src/app/access/components/instructions/instructions.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/access/components/instructions/instructions.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"instruction-container\">\n  <div class=\"header\"><h2>About the App</h2></div>\n  <ul class=\"list\">\n    <li>The entry to the chat is only with user name</li>\n    <li>\n      If the username that you entered is already exists you will enter as the\n      existing user\n    </li>\n    <li>\n      If the user name that you entered is not exists a new user will be created\n    </li>\n    <li>The backend source code get be found here</li>\n    <li>The front end code can be found here</li>\n  </ul>\n</div> -->\n"

/***/ }),

/***/ "./src/app/access/components/instructions/instructions.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/access/components/instructions/instructions.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".instruction-container .list {\n  list-style-type: circle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ29ycm9tYW5vdnNreS9kZXZlbG9wbWVudC9jaGF0QXBwL2NoYXQtZnJvbnRlbmQvc3JjL2FwcC9hY2Nlc3MvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvaW5zdHJ1Y3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0ksd0JBQXVCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYWNjZXNzL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL2luc3RydWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnN0cnVjdGlvbi1jb250YWluZXIge1xuICAuaGVhZGVyIHtcbiAgfVxuXG4gIC5saXN0IHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/access/components/instructions/instructions.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/access/components/instructions/instructions.component.ts ***!
  \**************************************************************************/
/*! exports provided: InstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsComponent", function() { return InstructionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InstructionsComponent = /** @class */ (function () {
    function InstructionsComponent() {
    }
    InstructionsComponent.prototype.ngOnInit = function () {
    };
    InstructionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-instructions',
            template: __webpack_require__(/*! ./instructions.component.html */ "./src/app/access/components/instructions/instructions.component.html"),
            styles: [__webpack_require__(/*! ./instructions.component.scss */ "./src/app/access/components/instructions/instructions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InstructionsComponent);
    return InstructionsComponent;
}());



/***/ }),

/***/ "./src/app/access/components/login-form/login-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/access/components/login-form/login-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <form [formGroup]=\"logInForm\" (ngSubmit)=\"onFormSubmit()\">\n    <div class=\"form-header\">\n      Welcome!\n    </div>\n\n    <div class=\"inputs-box\">\n      <div class=\"single-form-input\">\n        <i class=\"fas fa-user\"></i>\n        <mat-form-field class=\"form-field\">\n          <mat-label>Enter username</mat-label>\n          <input formControlName=\"userName\" matInput />\n        </mat-form-field>\n        <button class=\"brand-btn\" mat-raised-button>Login</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/access/components/login-form/login-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/access/components/login-form/login-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  background-color: #fff;\n  position: absolute;\n  width: 350px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2); }\n  .form-container .form-header {\n    text-transform: uppercase;\n    text-align: center;\n    color: #fff;\n    background-color: #486fe9;\n    height: 35px;\n    line-height: 35px;\n    width: 100%;\n    font-size: 15px; }\n  .form-container .inputs-box {\n    margin: 20px;\n    height: 100%;\n    display: flex;\n    justify-content: center; }\n  .form-container .form-field {\n    width: 200px;\n    margin: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ29ycm9tYW5vdnNreS9kZXZlbG9wbWVudC9jaGF0QXBwL2NoYXQtZnJvbnRlbmQvc3JjL2FwcC9hY2Nlc3MvY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaWdvcnJvbWFub3Zza3kvZGV2ZWxvcG1lbnQvY2hhdEFwcC9jaGF0LWZyb250ZW5kL3NyYy9zdHlsZXMvdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osU0FBUTtFQUNSLFVBQVM7RUFDVCxpQ0FBZ0M7RUFDaEMsa0hDVFUsRURpQ1g7RUEvQkQ7SUFVSSwwQkFBeUI7SUFDekIsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCwwQkNQZ0I7SURRaEIsYUFBWTtJQUNaLGtCQUFpQjtJQUNqQixZQUFXO0lBQ1gsZ0JBQWUsRUFDaEI7RUFsQkg7SUFxQkksYUFBWTtJQUNaLGFBQVk7SUFDWixjQUFhO0lBQ2Isd0JBQXVCLEVBQ3hCO0VBekJIO0lBNEJJLGFBQVk7SUFDWixlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9hY2Nlc3MvY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcnMuc2Nzc1wiO1xuXG4uZm9ybS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzNTBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctNmRwO1xuXG4gIC5mb3JtLWhlYWRlciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdvb2dsZUJsdWU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gIC5pbnB1dHMtYm94IHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG59XG4iLCIkYmxhY2s6ICMwMDA7XG4kZ3JheS1kYXJrZXI6ICMzOTQyNDk7XG4kZ3JheS1kYXJrOiAjNDM0YzUzO1xuJGdyYXk6ICM2ZDc1Nzk7XG4kZ3JheS1saWdodDogI2IwYjZiODtcbiRncmF5LWxpZ2h0ZXI6ICNkNWQ5ZDg7XG4kZ3JheS1tb3JlLWxpZ2h0ZXI6IHJnYigyMzksIDI0MywgMjQyKTtcblxuJGdvb2dsZUJsdWU6ICM0ODZmZTk7XG4kZ29vZ2xlQmx1ZUxpZ2h0ZXI6ICM0ODZmZTk7XG4kZ29vZ2xlR3JleTogI2YyZjNmNTtcblxuLy8gU2l6ZSBoZWxwZXJzXG4kbmF2YmFySGVpZ2h0OiA1MHB4O1xuXG4kYm1kLXNoYWRvdy11bWJyYS1vcGFjaXR5OiAwLjIgIWRlZmF1bHQ7XG4kYm1kLXNoYWRvdy1wZW51bWJyYS1vcGFjaXR5OiAwLjE0ICFkZWZhdWx0O1xuJGJtZC1zaGFkb3ctYW1iaWVudC1vcGFjaXR5OiAwLjEyICFkZWZhdWx0O1xuJHNoYWRvdy0yZHA6IDAgMnB4IDJweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1wZW51bWJyYS1vcGFjaXR5KSxcbiAgMCAzcHggMXB4IC0ycHggcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXVtYnJhLW9wYWNpdHkpLFxuICAwIDFweCA1cHggMCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctYW1iaWVudC1vcGFjaXR5KTtcbiRzaGFkb3ctNGRwOiAwIDRweCA1cHggMCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctcGVudW1icmEtb3BhY2l0eSksXG4gIDAgMXB4IDEwcHggMCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctYW1iaWVudC1vcGFjaXR5KSxcbiAgMCAycHggNHB4IC0xcHggcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXVtYnJhLW9wYWNpdHkpO1xuJHNoYWRvdy02ZHA6IDAgNnB4IDEwcHggMCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctcGVudW1icmEtb3BhY2l0eSksXG4gIDAgMXB4IDE4cHggMCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctYW1iaWVudC1vcGFjaXR5KSxcbiAgMCAzcHggNXB4IC0xcHggcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXVtYnJhLW9wYWNpdHkpO1xuJHNoYWRvdy04ZHA6IDAgOHB4IDEwcHggMXB4IHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1wZW51bWJyYS1vcGFjaXR5KSxcbiAgMCAzcHggMTRweCAycHggcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LWFtYmllbnQtb3BhY2l0eSksXG4gIDAgNXB4IDVweCAtM3B4IHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy11bWJyYS1vcGFjaXR5KTtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/access/components/login-form/login-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/access/components/login-form/login-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_access_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/access.service */ "./src/app/access/services/access.service.ts");




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(accessService, fb) {
        this.accessService = accessService;
        this.fb = fb;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.creatForm();
    };
    LoginFormComponent.prototype.creatForm = function () {
        this.logInForm = this.fb.group({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    LoginFormComponent.prototype.onFormSubmit = function () {
        if (this.logInForm.invalid) {
            return;
        }
        var username = this.logInForm.get("userName").value;
        this.accessService.onLogin(username);
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login-form",
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/access/components/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/access/components/login-form/login-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_access_service__WEBPACK_IMPORTED_MODULE_3__["AccessService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/access/pages/access-page/access-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/access/pages/access-page/access-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-form></app-login-form>\n<app-instructions></app-instructions>\n"

/***/ }),

/***/ "./src/app/access/pages/access-page/access-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/access/pages/access-page/access-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzcy9wYWdlcy9hY2Nlc3MtcGFnZS9hY2Nlc3MtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/access/pages/access-page/access-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/access/pages/access-page/access-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: AccessPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessPageComponent", function() { return AccessPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccessPageComponent = /** @class */ (function () {
    function AccessPageComponent() {
    }
    AccessPageComponent.prototype.ngOnInit = function () { };
    AccessPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-access-page",
            template: __webpack_require__(/*! ./access-page.component.html */ "./src/app/access/pages/access-page/access-page.component.html"),
            styles: [__webpack_require__(/*! ./access-page.component.scss */ "./src/app/access/pages/access-page/access-page.component.scss")]
        })
    ], AccessPageComponent);
    return AccessPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=access-access-module.js.map