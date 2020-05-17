(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.routing.module */ "./src/app/chat/chat.routing.module.ts");
/* harmony import */ var _pages_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/chat-page/chat-page.component */ "./src/app/chat/pages/chat-page/chat-page.component.ts");
/* harmony import */ var _components_messages_layout_input_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/messages-layout/input/input.component */ "./src/app/chat/components/messages-layout/input/input.component.ts");
/* harmony import */ var _components_messages_layout_messages_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/messages-layout/messages-layout.component */ "./src/app/chat/components/messages-layout/messages-layout.component.ts");
/* harmony import */ var _components_messages_layout_message_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/messages-layout/message/message.component */ "./src/app/chat/components/messages-layout/message/message.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/chat/components/users/users.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");













var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_chat_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatRoutes"]),
            ],
            declarations: [
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_11__["UsersComponent"],
                _pages_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_7__["ChatPageComponent"],
                _components_messages_layout_input_input_component__WEBPACK_IMPORTED_MODULE_8__["InputComponent"],
                _components_messages_layout_messages_layout_component__WEBPACK_IMPORTED_MODULE_9__["MessagesLayoutComponent"],
                _components_messages_layout_message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"],
            ],
            exports: [_pages_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_7__["ChatPageComponent"]],
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chat/chat.routing.module.ts ***!
  \*********************************************/
/*! exports provided: ChatRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutes", function() { return ChatRoutes; });
/* harmony import */ var _pages_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/chat-page/chat-page.component */ "./src/app/chat/pages/chat-page/chat-page.component.ts");

var ChatRoutes = [
    {
        path: "",
        component: _pages_chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_0__["ChatPageComponent"],
    },
];


/***/ }),

/***/ "./src/app/chat/components/messages-layout/input/input.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/chat/components/messages-layout/input/input.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-wrapper\">\n  <div class=\"input\">\n    <input [(ngModel)]=\"messageText\" autofocus autocomplete=\"off\" />\n  </div>\n\n  <div (click)=\"onSendNewMessage()\" class=\"input-btn\">\n    <i class=\"fas fa-paper-plane\"></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/components/messages-layout/input/input.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/chat/components/messages-layout/input/input.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-wrapper {\n  display: flex;\n  align-items: center; }\n  .input-wrapper .input {\n    margin: 10px 11px 0 36px;\n    display: flex;\n    align-items: center;\n    width: 80%;\n    height: 40px;\n    border-radius: 15px;\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2); }\n  .input-wrapper .input input {\n      padding-left: 20px;\n      height: 40px;\n      border-radius: 15px;\n      border-width: 0px;\n      border: none;\n      outline: none;\n      font-size: 15px;\n      width: 100%; }\n  .input-wrapper .input-btn {\n    cursor: pointer;\n    color: #486fe9;\n    font-size: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ29ycm9tYW5vdnNreS9kZXZlbG9wbWVudC9jaGF0QXBwL2NoYXQtZnJvbnRlbmQvc3JjL2FwcC9jaGF0L2NvbXBvbmVudHMvbWVzc2FnZXMtbGF5b3V0L2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2lnb3Jyb21hbm92c2t5L2RldmVsb3BtZW50L2NoYXRBcHAvY2hhdC1mcm9udGVuZC9zcmMvc3R5bGVzL3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWE7RUFDYixvQkFBbUIsRUEwQnBCO0VBNUJEO0lBSUkseUJBQXdCO0lBQ3hCLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsV0FBVTtJQUNWLGFBQVk7SUFDWixvQkFBbUI7SUFDbkIsa0hDWlEsRUR1QlQ7RUFyQkg7TUFZTSxtQkFBa0I7TUFDbEIsYUFBWTtNQUNaLG9CQUFtQjtNQUNuQixrQkFBaUI7TUFDakIsYUFBWTtNQUNaLGNBQWE7TUFDYixnQkFBZTtNQUNmLFlBQVcsRUFDWjtFQXBCTDtJQXdCSSxnQkFBZTtJQUNmLGVDbkJnQjtJRG9CaEIsZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NvbXBvbmVudHMvbWVzc2FnZXMtbGF5b3V0L2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJzLnNjc3NcIjtcblxuLmlucHV0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuaW5wdXQge1xuICAgIG1hcmdpbjogMTBweCAxMXB4IDAgMzZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LTZkcDtcbiAgICBpbnB1dCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmlucHV0LWJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAkZ29vZ2xlQmx1ZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbn1cbiIsIiRibGFjazogIzAwMDtcbiRncmF5LWRhcmtlcjogIzM5NDI0OTtcbiRncmF5LWRhcms6ICM0MzRjNTM7XG4kZ3JheTogIzZkNzU3OTtcbiRncmF5LWxpZ2h0OiAjYjBiNmI4O1xuJGdyYXktbGlnaHRlcjogI2Q1ZDlkODtcbiRncmF5LW1vcmUtbGlnaHRlcjogcmdiKDIzOSwgMjQzLCAyNDIpO1xuXG4kZ29vZ2xlQmx1ZTogIzQ4NmZlOTtcbiRnb29nbGVCbHVlTGlnaHRlcjogIzQ4NmZlOTtcbiRnb29nbGVHcmV5OiAjZjJmM2Y1O1xuXG4vLyBTaXplIGhlbHBlcnNcbiRuYXZiYXJIZWlnaHQ6IDUwcHg7XG5cbiRibWQtc2hhZG93LXVtYnJhLW9wYWNpdHk6IDAuMiAhZGVmYXVsdDtcbiRibWQtc2hhZG93LXBlbnVtYnJhLW9wYWNpdHk6IDAuMTQgIWRlZmF1bHQ7XG4kYm1kLXNoYWRvdy1hbWJpZW50LW9wYWNpdHk6IDAuMTIgIWRlZmF1bHQ7XG4kc2hhZG93LTJkcDogMCAycHggMnB4IDAgcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAwIDNweCAxcHggLTJweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctdW1icmEtb3BhY2l0eSksXG4gIDAgMXB4IDVweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1hbWJpZW50LW9wYWNpdHkpO1xuJHNoYWRvdy00ZHA6IDAgNHB4IDVweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1wZW51bWJyYS1vcGFjaXR5KSxcbiAgMCAxcHggMTBweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1hbWJpZW50LW9wYWNpdHkpLFxuICAwIDJweCA0cHggLTFweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctdW1icmEtb3BhY2l0eSk7XG4kc2hhZG93LTZkcDogMCA2cHggMTBweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1wZW51bWJyYS1vcGFjaXR5KSxcbiAgMCAxcHggMThweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1hbWJpZW50LW9wYWNpdHkpLFxuICAwIDNweCA1cHggLTFweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctdW1icmEtb3BhY2l0eSk7XG4kc2hhZG93LThkcDogMCA4cHggMTBweCAxcHggcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAwIDNweCAxNHB4IDJweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctYW1iaWVudC1vcGFjaXR5KSxcbiAgMCA1cHggNXB4IC0zcHggcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXVtYnJhLW9wYWNpdHkpO1xuIl19 */"

/***/ }),

/***/ "./src/app/chat/components/messages-layout/input/input.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/chat/components/messages-layout/input/input.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_chat_services_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/chat/services/messages.service */ "./src/app/chat/services/messages.service.ts");
/* harmony import */ var src_app_access_services_access_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/access/services/access.service */ "./src/app/access/services/access.service.ts");




var InputComponent = /** @class */ (function () {
    function InputComponent(messageService, accessService) {
        this.messageService = messageService;
        this.accessService = accessService;
        this.messageText = "";
    }
    InputComponent.prototype.ngOnInit = function () {
        this.currentUserId = this.accessService.loggedUser._id;
    };
    InputComponent.prototype.onSendNewMessage = function () {
        var message = {
            text: this.messageText,
            sender: this.currentUserId,
            receiver: this.conversationPartner._id,
            conversationId: this.conversationId,
        };
        this.messageService.onSendNewMessage(message);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputComponent.prototype, "conversationPartner", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputComponent.prototype, "conversationId", void 0);
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-input",
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/chat/components/messages-layout/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.scss */ "./src/app/chat/components/messages-layout/input/input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_chat_services_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"],
            src_app_access_services_access_service__WEBPACK_IMPORTED_MODULE_3__["AccessService"]])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/chat/components/messages-layout/message/message.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/chat/components/messages-layout/message/message.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"message-wrapper\">\n  <div *ngFor=\"let message of messages; let i = index\" class=\"message\">\n    <div class=\"message-info\">\n      <div\n        class=\"icon\"\n        [ngClass]=\"{\n          'partner-message-icon': message.sender !== conversationPartner._id\n        }\"\n      >\n        <span *ngIf=\"message.sender === conversationPartner._id\">{{\n          conversationPartner.userName.slice(0, 1)\n        }}</span>\n        <span *ngIf=\"message.sender !== conversationPartner._id\">{{\n          currentUser.userName.slice(0, 1)\n        }}</span>\n      </div>\n      <div\n        [ngClass]=\"{\n          'partner-message-text': message.sender !== conversationPartner._id\n        }\"\n        class=\"text\"\n      >\n        {{ message.text }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/components/messages-layout/message/message.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/chat/components/messages-layout/message/message.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-wrapper .message .message-info {\n  position: relative;\n  display: flex;\n  align-items: center; }\n  .message-wrapper .message .message-info .text {\n    max-width: 200px;\n    background-color: #486fe9;\n    margin: 10px 50px;\n    color: #fff;\n    padding: 10px;\n    border-radius: 20px;\n    display: block;\n    word-wrap: break-word; }\n  .message-wrapper .message .message-info .icon {\n    position: absolute;\n    left: 10px; }\n  .partner-message-text {\n  margin-left: auto !important;\n  margin-right: 60px !important; }\n  .partner-message-icon {\n  left: auto !important;\n  right: 10px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ29ycm9tYW5vdnNreS9kZXZlbG9wbWVudC9jaGF0QXBwL2NoYXQtZnJvbnRlbmQvc3JjL2FwcC9jaGF0L2NvbXBvbmVudHMvbWVzc2FnZXMtbGF5b3V0L21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9pZ29ycm9tYW5vdnNreS9kZXZlbG9wbWVudC9jaGF0QXBwL2NoYXQtZnJvbnRlbmQvc3JjL3N0eWxlcy92YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFHTSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLG9CQUFtQixFQWlCcEI7RUF0Qkw7SUFRUSxpQkFBZ0I7SUFDaEIsMEJDSFk7SURJWixrQkFBaUI7SUFDakIsWUFBVztJQUNYLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsZUFBYztJQUNkLHNCQUFxQixFQUN0QjtFQWhCUDtJQW1CUSxtQkFBa0I7SUFDbEIsV0FBVSxFQUNYO0VBUVA7RUFDRSw2QkFBNEI7RUFDNUIsOEJBQTZCLEVBQzlCO0VBQ0Q7RUFDRSxzQkFBcUI7RUFDckIsdUJBQXNCLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jb21wb25lbnRzL21lc3NhZ2VzLWxheW91dC9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcnMuc2Nzc1wiO1xuXG4ubWVzc2FnZS13cmFwcGVyIHtcbiAgLm1lc3NhZ2Uge1xuICAgIC5tZXNzYWdlLWluZm8ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC50ZXh0IHtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvb2dsZUJsdWU7XG4gICAgICAgIG1hcmdpbjogMTBweCA1MHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgIH1cblxuICAgICAgLmljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi51c2VyLW1lc3NhZ2Uge1xufVxuXG4ucGFydG5lci1tZXNzYWdlLXRleHQge1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cbi5wYXJ0bmVyLW1lc3NhZ2UtaWNvbiB7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cbiIsIiRibGFjazogIzAwMDtcbiRncmF5LWRhcmtlcjogIzM5NDI0OTtcbiRncmF5LWRhcms6ICM0MzRjNTM7XG4kZ3JheTogIzZkNzU3OTtcbiRncmF5LWxpZ2h0OiAjYjBiNmI4O1xuJGdyYXktbGlnaHRlcjogI2Q1ZDlkODtcbiRncmF5LW1vcmUtbGlnaHRlcjogcmdiKDIzOSwgMjQzLCAyNDIpO1xuXG4kZ29vZ2xlQmx1ZTogIzQ4NmZlOTtcbiRnb29nbGVCbHVlTGlnaHRlcjogIzQ4NmZlOTtcbiRnb29nbGVHcmV5OiAjZjJmM2Y1O1xuXG4vLyBTaXplIGhlbHBlcnNcbiRuYXZiYXJIZWlnaHQ6IDUwcHg7XG5cbiRibWQtc2hhZG93LXVtYnJhLW9wYWNpdHk6IDAuMiAhZGVmYXVsdDtcbiRibWQtc2hhZG93LXBlbnVtYnJhLW9wYWNpdHk6IDAuMTQgIWRlZmF1bHQ7XG4kYm1kLXNoYWRvdy1hbWJpZW50LW9wYWNpdHk6IDAuMTIgIWRlZmF1bHQ7XG4kc2hhZG93LTJkcDogMCAycHggMnB4IDAgcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAwIDNweCAxcHggLTJweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctdW1icmEtb3BhY2l0eSksXG4gIDAgMXB4IDVweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1hbWJpZW50LW9wYWNpdHkpO1xuJHNoYWRvdy00ZHA6IDAgNHB4IDVweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1wZW51bWJyYS1vcGFjaXR5KSxcbiAgMCAxcHggMTBweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1hbWJpZW50LW9wYWNpdHkpLFxuICAwIDJweCA0cHggLTFweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctdW1icmEtb3BhY2l0eSk7XG4kc2hhZG93LTZkcDogMCA2cHggMTBweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1wZW51bWJyYS1vcGFjaXR5KSxcbiAgMCAxcHggMThweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1hbWJpZW50LW9wYWNpdHkpLFxuICAwIDNweCA1cHggLTFweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctdW1icmEtb3BhY2l0eSk7XG4kc2hhZG93LThkcDogMCA4cHggMTBweCAxcHggcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAwIDNweCAxNHB4IDJweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctYW1iaWVudC1vcGFjaXR5KSxcbiAgMCA1cHggNXB4IC0zcHggcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXVtYnJhLW9wYWNpdHkpO1xuIl19 */"

/***/ }),

/***/ "./src/app/chat/components/messages-layout/message/message.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/chat/components/messages-layout/message/message.component.ts ***!
  \******************************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_access_services_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/access/services/access.service */ "./src/app/access/services/access.service.ts");



var MessageComponent = /** @class */ (function () {
    function MessageComponent(accessService) {
        this.accessService = accessService;
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.currentUser = this.accessService.loggedUser;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MessageComponent.prototype, "messages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MessageComponent.prototype, "conversationPartner", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-message",
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/chat/components/messages-layout/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/chat/components/messages-layout/message/message.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_access_services_access_service__WEBPACK_IMPORTED_MODULE_2__["AccessService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/chat/components/messages-layout/messages-layout.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/chat/components/messages-layout/messages-layout.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"messages-container\">\n  <div #messageContainer class=\"user-messages\">\n    <app-message\n      [conversationPartner]=\"conversationPartner\"\n      [messages]=\"conversation?.messages\"\n    ></app-message>\n  </div>\n  <div class=\"input-container\">\n    <app-input\n      [conversationId]=\"conversation?._id\"\n      [conversationPartner]=\"conversationPartner\"\n    ></app-input>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/components/messages-layout/messages-layout.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/chat/components/messages-layout/messages-layout.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messages-container .user-messages {\n  height: calc(100vh - 115px);\n  overflow: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ29ycm9tYW5vdnNreS9kZXZlbG9wbWVudC9jaGF0QXBwL2NoYXQtZnJvbnRlbmQvc3JjL2FwcC9jaGF0L2NvbXBvbmVudHMvbWVzc2FnZXMtbGF5b3V0L21lc3NhZ2VzLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLDRCQUEyQjtFQUMzQixpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NvbXBvbmVudHMvbWVzc2FnZXMtbGF5b3V0L21lc3NhZ2VzLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvdmFycy5zY3NzXCI7XG4ubWVzc2FnZXMtY29udGFpbmVyIHtcbiAgLnVzZXItbWVzc2FnZXMge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDExNXB4KTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG5cbiAgLmlucHV0LWNvbnRhaW5lciB7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat/components/messages-layout/messages-layout.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/chat/components/messages-layout/messages-layout.component.ts ***!
  \******************************************************************************/
/*! exports provided: MessagesLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesLayoutComponent", function() { return MessagesLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessagesLayoutComponent = /** @class */ (function () {
    function MessagesLayoutComponent() {
    }
    MessagesLayoutComponent.prototype.ngOnInit = function () { };
    MessagesLayoutComponent.prototype.ngOnChanges = function (change) {
        if (change.conversation) {
            this.scrollToBottom();
        }
    };
    MessagesLayoutComponent.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.messageContainer.nativeElement.scrollTop = _this.messageContainer.nativeElement.scrollHeight;
        }, 10);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("messageContainer"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MessagesLayoutComponent.prototype, "messageContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MessagesLayoutComponent.prototype, "conversationPartner", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MessagesLayoutComponent.prototype, "conversation", void 0);
    MessagesLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-messages-layout",
            template: __webpack_require__(/*! ./messages-layout.component.html */ "./src/app/chat/components/messages-layout/messages-layout.component.html"),
            styles: [__webpack_require__(/*! ./messages-layout.component.scss */ "./src/app/chat/components/messages-layout/messages-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessagesLayoutComponent);
    return MessagesLayoutComponent;
}());



/***/ }),

/***/ "./src/app/chat/components/users/users.component.html":
/*!************************************************************!*\
  !*** ./src/app/chat/components/users/users.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-container\">\n  <div\n    *ngFor=\"let user of users\"\n    (click)=\"onUserSelect(user)\"\n    [ngClass]=\"{ activeUser: user._id === selectedUserIdToChat }\"\n    class=\"user-item\"\n  >\n    <div class=\"icon\"><i class=\"far fa-user\"></i></div>\n    <div class=\"user-name\">{{ user?.userName }}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/components/users/users.component.scss":
/*!************************************************************!*\
  !*** ./src/app/chat/components/users/users.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-container .user-item {\n  cursor: pointer;\n  padding: 10px;\n  border: 1px solid #eee;\n  display: flex;\n  align-items: center; }\n  .user-container .user-item:hover {\n    background-color: #486fe9;\n    color: #fff; }\n  .activeUser {\n  background-color: #486fe9;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ29ycm9tYW5vdnNreS9kZXZlbG9wbWVudC9jaGF0QXBwL2NoYXQtZnJvbnRlbmQvc3JjL2FwcC9jaGF0L2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaWdvcnJvbWFub3Zza3kvZGV2ZWxvcG1lbnQvY2hhdEFwcC9jaGF0LWZyb250ZW5kL3NyYy9zdHlsZXMvdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBRUksZ0JBQWU7RUFDZixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYixvQkFBbUIsRUFLcEI7RUFYSDtJQUpFLDBCQ0trQjtJREpsQixZQUFXLEVBYVI7RUFJTDtFQWxCRSwwQkNLa0I7RURKbEIsWUFBVyxFQW1CWiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvdmFycy5zY3NzXCI7XG5cbkBtaXhpbiBhY3RpdmVVc2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdvb2dsZUJsdWU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udXNlci1jb250YWluZXIge1xuICAudXNlci1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgQGluY2x1ZGUgYWN0aXZlVXNlcjtcbiAgICB9XG4gIH1cbn1cblxuLmFjdGl2ZVVzZXIge1xuICBAaW5jbHVkZSBhY3RpdmVVc2VyO1xufVxuIiwiJGJsYWNrOiAjMDAwO1xuJGdyYXktZGFya2VyOiAjMzk0MjQ5O1xuJGdyYXktZGFyazogIzQzNGM1MztcbiRncmF5OiAjNmQ3NTc5O1xuJGdyYXktbGlnaHQ6ICNiMGI2Yjg7XG4kZ3JheS1saWdodGVyOiAjZDVkOWQ4O1xuJGdyYXktbW9yZS1saWdodGVyOiByZ2IoMjM5LCAyNDMsIDI0Mik7XG5cbiRnb29nbGVCbHVlOiAjNDg2ZmU5O1xuJGdvb2dsZUJsdWVMaWdodGVyOiAjNDg2ZmU5O1xuJGdvb2dsZUdyZXk6ICNmMmYzZjU7XG5cbi8vIFNpemUgaGVscGVyc1xuJG5hdmJhckhlaWdodDogNTBweDtcblxuJGJtZC1zaGFkb3ctdW1icmEtb3BhY2l0eTogMC4yICFkZWZhdWx0O1xuJGJtZC1zaGFkb3ctcGVudW1icmEtb3BhY2l0eTogMC4xNCAhZGVmYXVsdDtcbiRibWQtc2hhZG93LWFtYmllbnQtb3BhY2l0eTogMC4xMiAhZGVmYXVsdDtcbiRzaGFkb3ctMmRwOiAwIDJweCAycHggMCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctcGVudW1icmEtb3BhY2l0eSksXG4gIDAgM3B4IDFweCAtMnB4IHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy11bWJyYS1vcGFjaXR5KSxcbiAgMCAxcHggNXB4IDAgcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LWFtYmllbnQtb3BhY2l0eSk7XG4kc2hhZG93LTRkcDogMCA0cHggNXB4IDAgcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAwIDFweCAxMHB4IDAgcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LWFtYmllbnQtb3BhY2l0eSksXG4gIDAgMnB4IDRweCAtMXB4IHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy11bWJyYS1vcGFjaXR5KTtcbiRzaGFkb3ctNmRwOiAwIDZweCAxMHB4IDAgcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAwIDFweCAxOHB4IDAgcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LWFtYmllbnQtb3BhY2l0eSksXG4gIDAgM3B4IDVweCAtMXB4IHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy11bWJyYS1vcGFjaXR5KTtcbiRzaGFkb3ctOGRwOiAwIDhweCAxMHB4IDFweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctcGVudW1icmEtb3BhY2l0eSksXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1hbWJpZW50LW9wYWNpdHkpLFxuICAwIDVweCA1cHggLTNweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctdW1icmEtb3BhY2l0eSk7XG4iXX0= */"

/***/ }),

/***/ "./src/app/chat/components/users/users.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/chat/components/users/users.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/chat/services/users.service.ts");
/* harmony import */ var _services_conversations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/conversations.service */ "./src/app/chat/services/conversations.service.ts");




var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService, conversationService) {
        this.usersService = usersService;
        this.conversationService = conversationService;
        this.setCurrentConversationPartner = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSub = this.usersService
            .getAllUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.userSub.unsubscribe();
    };
    UsersComponent.prototype.onUserSelect = function (selectedUser) {
        if (this.selectedUserIdToChat === selectedUser._id) {
            return;
        }
        this.setCurrentConversationPartner.next(selectedUser);
        this.selectedUserIdToChat = selectedUser._id;
        this.conversationService.getConversationBetweenTwoUsers(selectedUser._id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UsersComponent.prototype, "setCurrentConversationPartner", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-users",
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/chat/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/chat/components/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersServices"],
            _services_conversations_service__WEBPACK_IMPORTED_MODULE_3__["ConversationService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/chat/pages/chat-page/chat-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/chat/pages/chat-page/chat-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-page-container\">\n  <div class=\"user-container\">\n    <app-users\n      (setCurrentConversationPartner)=\"updateConversationPartner($event)\"\n    ></app-users>\n  </div>\n  <div class=\"message-container\">\n    <app-messages-layout\n      [conversationPartner]=\"conversationPartner\"\n      [conversation]=\"conversation\"\n    ></app-messages-layout>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/pages/chat-page/chat-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/chat/pages/chat-page/chat-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-page-container {\n  display: flex;\n  width: 100%;\n  max-height: calc(100vh - 50px); }\n  .chat-page-container .user-container {\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n    width: 20%;\n    height: calc(100vh - 50px); }\n  .chat-page-container .message-container {\n    width: 80%;\n    height: calc(100vh - 50px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pZ29ycm9tYW5vdnNreS9kZXZlbG9wbWVudC9jaGF0QXBwL2NoYXQtZnJvbnRlbmQvc3JjL2FwcC9jaGF0L3BhZ2VzL2NoYXQtcGFnZS9jaGF0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaWdvcnJvbWFub3Zza3kvZGV2ZWxvcG1lbnQvY2hhdEFwcC9jaGF0LWZyb250ZW5kL3NyYy9zdHlsZXMvdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBYTtFQUNiLFlBQVc7RUFDWCwrQkFBOEIsRUFZL0I7RUFmRDtJQU1JLGdIQ1JRO0lEU1IsV0FBVTtJQUNWLDJCQUEwQixFQUMzQjtFQVRIO0lBWUksV0FBVTtJQUNWLDJCQUEwQixFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvcGFnZXMvY2hhdC1wYWdlL2NoYXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvdmFycy5zY3NzXCI7XG5cbi5jaGF0LXBhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcblxuICAudXNlci1jb250YWluZXIge1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctMmRwO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gIH1cblxuICAubWVzc2FnZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gIH1cbn1cbiIsIiRibGFjazogIzAwMDtcbiRncmF5LWRhcmtlcjogIzM5NDI0OTtcbiRncmF5LWRhcms6ICM0MzRjNTM7XG4kZ3JheTogIzZkNzU3OTtcbiRncmF5LWxpZ2h0OiAjYjBiNmI4O1xuJGdyYXktbGlnaHRlcjogI2Q1ZDlkODtcbiRncmF5LW1vcmUtbGlnaHRlcjogcmdiKDIzOSwgMjQzLCAyNDIpO1xuXG4kZ29vZ2xlQmx1ZTogIzQ4NmZlOTtcbiRnb29nbGVCbHVlTGlnaHRlcjogIzQ4NmZlOTtcbiRnb29nbGVHcmV5OiAjZjJmM2Y1O1xuXG4vLyBTaXplIGhlbHBlcnNcbiRuYXZiYXJIZWlnaHQ6IDUwcHg7XG5cbiRibWQtc2hhZG93LXVtYnJhLW9wYWNpdHk6IDAuMiAhZGVmYXVsdDtcbiRibWQtc2hhZG93LXBlbnVtYnJhLW9wYWNpdHk6IDAuMTQgIWRlZmF1bHQ7XG4kYm1kLXNoYWRvdy1hbWJpZW50LW9wYWNpdHk6IDAuMTIgIWRlZmF1bHQ7XG4kc2hhZG93LTJkcDogMCAycHggMnB4IDAgcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAwIDNweCAxcHggLTJweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctdW1icmEtb3BhY2l0eSksXG4gIDAgMXB4IDVweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1hbWJpZW50LW9wYWNpdHkpO1xuJHNoYWRvdy00ZHA6IDAgNHB4IDVweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1wZW51bWJyYS1vcGFjaXR5KSxcbiAgMCAxcHggMTBweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1hbWJpZW50LW9wYWNpdHkpLFxuICAwIDJweCA0cHggLTFweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctdW1icmEtb3BhY2l0eSk7XG4kc2hhZG93LTZkcDogMCA2cHggMTBweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1wZW51bWJyYS1vcGFjaXR5KSxcbiAgMCAxcHggMThweCAwIHJnYmEoJGJsYWNrLCAkYm1kLXNoYWRvdy1hbWJpZW50LW9wYWNpdHkpLFxuICAwIDNweCA1cHggLTFweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctdW1icmEtb3BhY2l0eSk7XG4kc2hhZG93LThkcDogMCA4cHggMTBweCAxcHggcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXBlbnVtYnJhLW9wYWNpdHkpLFxuICAwIDNweCAxNHB4IDJweCByZ2JhKCRibGFjaywgJGJtZC1zaGFkb3ctYW1iaWVudC1vcGFjaXR5KSxcbiAgMCA1cHggNXB4IC0zcHggcmdiYSgkYmxhY2ssICRibWQtc2hhZG93LXVtYnJhLW9wYWNpdHkpO1xuIl19 */"

/***/ }),

/***/ "./src/app/chat/pages/chat-page/chat-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/chat/pages/chat-page/chat-page.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageComponent", function() { return ChatPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_conversations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/conversations.service */ "./src/app/chat/services/conversations.service.ts");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/messages.service */ "./src/app/chat/services/messages.service.ts");




var ChatPageComponent = /** @class */ (function () {
    function ChatPageComponent(conversationService, messageService) {
        this.conversationService = conversationService;
        this.messageService = messageService;
    }
    ChatPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conversationSub = this.conversationService.updateConversationWithRelevantMessagesSub.subscribe(function (conversation) {
            _this.conversation = conversation;
        });
        this.newMsgSub = this.messageService.chatMessageUpdateSub.subscribe(function (newmsg) {
            if (newmsg.conversationId === _this.conversation._id) {
                _this.checkIfUpdateNewMessage(newmsg);
            }
        });
    };
    ChatPageComponent.prototype.ngOnDestroy = function () {
        this.conversationSub.unsubscribe();
        this.newMsgSub.unsubscribe();
    };
    // trigger change detection
    ChatPageComponent.prototype.checkIfUpdateNewMessage = function (newmsg) {
        var copyOfConversation = Object.assign({}, this.conversation);
        copyOfConversation.messages.push(newmsg);
        this.conversation = copyOfConversation;
    };
    ChatPageComponent.prototype.updateConversationPartner = function (user) {
        this.conversationPartner = user;
    };
    ChatPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-chat-page",
            template: __webpack_require__(/*! ./chat-page.component.html */ "./src/app/chat/pages/chat-page/chat-page.component.html"),
            styles: [__webpack_require__(/*! ./chat-page.component.scss */ "./src/app/chat/pages/chat-page/chat-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_conversations_service__WEBPACK_IMPORTED_MODULE_2__["ConversationService"],
            _services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]])
    ], ChatPageComponent);
    return ChatPageComponent;
}());



/***/ }),

/***/ "./src/app/chat/services/conversations.service.ts":
/*!********************************************************!*\
  !*** ./src/app/chat/services/conversations.service.ts ***!
  \********************************************************/
/*! exports provided: ConversationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationService", function() { return ConversationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_access_services_access_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/access/services/access.service */ "./src/app/access/services/access.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var ConversationService = /** @class */ (function () {
    function ConversationService(http, accessService) {
        this.http = http;
        this.accessService = accessService;
        this.updateConversationWithRelevantMessagesSub = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ConversationService.prototype.getConversationBetweenTwoUsers = function (idOfWantedUserToStartConversation) {
        var _this = this;
        var currentUser = this.accessService.loggedUser;
        // Since were not using a JWT token we need to send also the currentUser id in the header
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("current-user-id", currentUser._id);
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].conversationsUrl + "/" + idOfWantedUserToStartConversation, { headers: headers })
            .subscribe(function (conversation) {
            _this.updateConversationWithRelevantMessagesSub.next(conversation);
        });
    };
    ConversationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_access_services_access_service__WEBPACK_IMPORTED_MODULE_3__["AccessService"]])
    ], ConversationService);
    return ConversationService;
}());



/***/ }),

/***/ "./src/app/chat/services/users.service.ts":
/*!************************************************!*\
  !*** ./src/app/chat/services/users.service.ts ***!
  \************************************************/
/*! exports provided: UsersServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersServices", function() { return UsersServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_access_services_access_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/access/services/access.service */ "./src/app/access/services/access.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UsersServices = /** @class */ (function () {
    function UsersServices(http, accessService) {
        this.http = http;
        this.accessService = accessService;
    }
    UsersServices.prototype.getAllUsers = function () {
        var _this = this;
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].userUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return (res = _this.filterCurrentUserFromListOfUsers(res));
        }));
    };
    UsersServices.prototype.filterCurrentUserFromListOfUsers = function (userList) {
        var currentUser = this.accessService.loggedUser;
        return userList.filter(function (user) { return user._id !== currentUser._id; });
    };
    UsersServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_access_services_access_service__WEBPACK_IMPORTED_MODULE_3__["AccessService"]])
    ], UsersServices);
    return UsersServices;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map