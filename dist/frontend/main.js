(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access/access.module": [
		"./src/app/access/access.module.ts",
		"default~access-access-module~chat-chat-module~table-table-module",
		"access-access-module"
	],
	"./chat/chat.module": [
		"./src/app/chat/chat.module.ts",
		"default~access-access-module~chat-chat-module~table-table-module",
		"chat-chat-module"
	],
	"./table/table.module": [
		"./src/app/table/table.module.ts",
		"default~access-access-module~chat-chat-module~table-table-module",
		"table-table-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/access/services/access.service.ts":
/*!***************************************************!*\
  !*** ./src/app/access/services/access.service.ts ***!
  \***************************************************/
/*! exports provided: AccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessService", function() { return AccessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_chat_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/chat/services/socket.service */ "./src/app/chat/services/socket.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var AccessService = /** @class */ (function () {
    function AccessService(http, router, chatSocketService) {
        this.http = http;
        this.router = router;
        this.chatSocketService = chatSocketService;
        this.userIsLogged = false;
        this.updateLoggedUserSub = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    AccessService.prototype.onLogin = function (userName) {
        var _this = this;
        var user = {
            userName: userName,
        };
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userUrl, user).subscribe(function (loggedUser) {
            _this.userIsLogged = true;
            _this.loggedUser = loggedUser;
            _this.updateLoggedUserSub.next(_this.loggedUser);
            _this.chatSocketService.establishWebSocketConation(loggedUser._id);
            _this.router.navigate(["/chat"]);
        });
    };
    AccessService.prototype.checkIfLoggedIn = function () {
        return this.userIsLogged;
    };
    AccessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_chat_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["ChatSocketService"]])
    ], AccessService);
    return AccessService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");




var routes = [
    {
        path: "",
        loadChildren: "./access/access.module#AccessModule",
    },
    {
        path: "table",
        loadChildren: "./table/table.module#TableModule",
    },
    {
        canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        path: "chat",
        loadChildren: "./chat/chat.module#ChatModule",
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'chat-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ],
            providers: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/services/messages.service.ts":
/*!***************************************************!*\
  !*** ./src/app/chat/services/messages.service.ts ***!
  \***************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var MessagesService = /** @class */ (function () {
    function MessagesService(http) {
        this.http = http;
        this.chatMessageUpdateSub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    MessagesService.prototype.onSendNewMessage = function (message) {
        var _this = this;
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].messages, message).subscribe(function (msg) {
            _this.chatMessageUpdateSub.next(msg);
        });
    };
    MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "./src/app/chat/services/socket.service.ts":
/*!*************************************************!*\
  !*** ./src/app/chat/services/socket.service.ts ***!
  \*************************************************/
/*! exports provided: ChatSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSocketService", function() { return ChatSocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages.service */ "./src/app/chat/services/messages.service.ts");





var ChatSocketService = /** @class */ (function () {
    function ChatSocketService(messageService) {
        this.messageService = messageService;
    }
    ChatSocketService.prototype.establishWebSocketConation = function (userId) {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wsUrl);
        this.socket.emit("userid", userId);
        this.initSocketEvents();
    };
    ChatSocketService.prototype.initSocketEvents = function () {
        var _this = this;
        this.socket.on("newmsg", function (msg) {
            _this.messageService.chatMessageUpdateSub.next(msg);
        });
    };
    ChatSocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]])
    ], ChatSocketService);
    return ChatSocketService;
}());



/***/ }),

/***/ "./src/app/core/components/nav-bar/nav-bar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/core/components/nav-bar/nav-bar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <div class=\"navbar-left\">\n    <div class=\"nav-logo\"></div>\n\n    <ul class=\"menu-item\">\n      <li [routerLink]=\"['./chat']\" routerLinkActive=\"active\" route href=\"\">\n        Chat\n      </li>\n      <li [routerLink]=\"['./table']\" routerLinkActive=\"active\" href=\"\">\n        Table\n      </li>\n    </ul>\n  </div>\n  <div *ngIf=\"currentUser\" class=\"navbar-right\">\n    Hello! <strong>{{ currentUser.userName }}</strong>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/components/nav-bar/nav-bar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/core/components/nav-bar/nav-bar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  display: flex;\n  height: 50px;\n  background-color: #eff3f2;\n  color: #394249;\n  align-items: center; }\n  .navbar .navbar-left {\n    font-size: 13px;\n    display: flex; }\n  .navbar .navbar-left .nav-logo {\n      margin: 5px 50px 0px 5px; }\n  .navbar .navbar-left .nav-logo img {\n        width: 80px; }\n  .navbar .navbar-right {\n    margin-left: auto;\n    margin-right: 50px; }\n  .menu-item {\n  margin: 5px;\n  list-style-type: none;\n  text-transform: uppercase;\n  display: flex; }\n  .menu-item li {\n    margin: 0 15px 0 15px;\n    display: inline-block;\n    transition: 0.2s color;\n    outline-color: transparent; }\n  .menu-item li:hover {\n      cursor: pointer;\n      color: #b0b6b8; }\n  .router-link-active {\n  background-color: #b0b6b8; }\n  li:active,\nli:focus {\n  outline: 0;\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ29ycm9tYW5vdnNreS9kZXZlbG9wbWVudC9jaGF0QXBwL2NoYXQtZnJvbnRlbmQvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2lnb3Jyb21hbm92c2t5L2RldmVsb3BtZW50L2NoYXRBcHAvY2hhdC1mcm9udGVuZC9zcmMvc3R5bGVzL3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWE7RUFDYixhQ1NpQjtFRFJqQiwwQkNDb0M7RURBcEMsZUNMbUI7RURNbkIsb0JBQW1CLEVBaUJwQjtFQXRCRDtJQVFJLGdCQUFlO0lBQ2YsY0FBYSxFQU9kO0VBaEJIO01BV00seUJBQXdCLEVBSXpCO0VBZkw7UUFhUSxZQUFXLEVBQ1o7RUFkUDtJQW1CSSxrQkFBaUI7SUFDakIsbUJBQWtCLEVBQ25CO0VBR0g7RUFDRSxZQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLDBCQUF5QjtFQUN6QixjQUFhLEVBWWQ7RUFoQkQ7SUFPSSxzQkFBcUI7SUFDckIsc0JBQXFCO0lBQ3JCLHVCQUFzQjtJQUN0QiwyQkFBMEIsRUFLM0I7RUFmSDtNQVlNLGdCQUFlO01BQ2YsZUNuQ2MsRURvQ2Y7RUFHTDtFQUNFLDBCQ3hDa0IsRUR5Q25CO0VBRUQ7O0VBRUUsV0FBVTtFQUNWLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcnMuc2Nzc1wiO1xuXG4ubmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAkbmF2YmFySGVpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1tb3JlLWxpZ2h0ZXI7XG4gIGNvbG9yOiAkZ3JheS1kYXJrZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLm5hdmJhci1sZWZ0IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAubmF2LWxvZ28ge1xuICAgICAgbWFyZ2luOiA1cHggNTBweCAwcHggNXB4O1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci1yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB9XG59XG5cbi5tZW51LWl0ZW0ge1xuICBtYXJnaW46IDVweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGxpIHtcbiAgICBtYXJnaW46IDAgMTVweCAwIDE1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuMnMgY29sb3I7XG4gICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogJGdyYXktbGlnaHQ7XG4gICAgfVxuICB9XG59XG4ucm91dGVyLWxpbmstYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktbGlnaHQ7XG59XG5cbmxpOmFjdGl2ZSxcbmxpOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuIiwiJGJsYWNrOiAjMDAwO1xuJGdyYXktZGFya2VyOiAjMzk0MjQ5O1xuJGdyYXktZGFyazogIzQzNGM1MztcbiRncmF5OiAjNmQ3NTc5O1xuJGdyYXktbGlnaHQ6ICNiMGI2Yjg7XG4kZ3JheS1saWdodGVyOiAjZDVkOWQ4O1xuJGdyYXktbW9yZS1saWdodGVyOiByZ2IoMjM5LCAyNDMsIDI0Mik7XG5cbiRnb29nbGVCbHVlOiAjNDg2ZmU5O1xuJGdvb2dsZUJsdWVMaWdodGVyOiAjNDg2ZmU5O1xuJGdvb2dsZUdyZXk6ICNmMmYzZjU7XG5cbi8vIFNpemUgaGVscGVyc1xuJG5hdmJhckhlaWdodDogNTBweDtcblxuJGJtZC1zaGFkb3ctdW1icmEtb3BhY2l0eTogMC4yICFkZWZhdWx0O1xuJGJtZC1zaGFkb3ctcGVudW1icmEtb3BhY2l0eTogMC4xNCAhZGVmYXVsdDtcbiRibWQtc2hhZG93LWFtYmllbnQtb3BhY2l0eTogMC4xMiAhZGVmYXVsdDtcbiRzaGFkb3ctMmRwOiAwIDJweCAycHggMCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctcGVudW1icmEtb3BhY2l0eSksXG4gIDAgM3B4IDFweCAtMnB4IHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy11bWJyYS1vcGFjaXR5KSxcbiAgMCAxcHggNXB4IDAgcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LWFtYmllbnQtb3BhY2l0eSk7XG4kc2hhZG93LTRkcDogMCA0cHggNXB4IDAgcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAwIDFweCAxMHB4IDAgcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LWFtYmllbnQtb3BhY2l0eSksXG4gIDAgMnB4IDRweCAtMXB4IHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy11bWJyYS1vcGFjaXR5KTtcbiRzaGFkb3ctNmRwOiAwIDZweCAxMHB4IDAgcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAwIDFweCAxOHB4IDAgcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LWFtYmllbnQtb3BhY2l0eSksXG4gIDAgM3B4IDVweCAtMXB4IHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy11bWJyYS1vcGFjaXR5KTtcbiRzaGFkb3ctOGRwOiAwIDhweCAxMHB4IDFweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctcGVudW1icmEtb3BhY2l0eSksXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1hbWJpZW50LW9wYWNpdHkpLFxuICAwIDVweCA1cHggLTNweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctdW1icmEtb3BhY2l0eSk7XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/components/nav-bar/nav-bar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/components/nav-bar/nav-bar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_access_services_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/access/services/access.service */ "./src/app/access/services/access.service.ts");



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(accessService) {
        this.accessService = accessService;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accessSub = this.accessService.updateLoggedUserSub.subscribe(function (user) {
            _this.currentUser = user;
        });
    };
    NavBarComponent.prototype.ngOnDestroy = function () { };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-nav-bar",
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/core/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/core/components/nav-bar/nav-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_access_services_access_service__WEBPACK_IMPORTED_MODULE_2__["AccessService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/core/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            declarations: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"]],
            exports: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/shared/services/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_access_services_access_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/access/services/access.service */ "./src/app/access/services/access.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isLogged = this.authService.checkIfLoggedIn();
        if (!isLogged) {
            this.router.navigate(["/"]);
        }
        return isLogged;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_access_services_access_service__WEBPACK_IMPORTED_MODULE_3__["AccessService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var webSocketPrefix = "ws://";
var baseUrl = "/api";
// export const baseUrl = "http://localhost:8000/api";
var environment = {
    production: false,
    baseUrl: baseUrl,
    userUrl: baseUrl + "/user",
    conversationsUrl: baseUrl + "/conversations",
    messages: baseUrl + "/messages",
    wsUrl: "ws://",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/igorromanovsky/development/chatApp/chat-frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map