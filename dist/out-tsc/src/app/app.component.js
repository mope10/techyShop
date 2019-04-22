var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Location } from '@angular/common';
var AppComponent = /** @class */ (function () {
    function AppComponent(location) {
        this.location = location;
        this.title = 'Tech Shop';
        this.accountWrapper = "";
    }
    AppComponent.prototype.footerApproval = function () {
        if (this.location.path() === "" ||
            this.location.path() === "/aboutUs" ||
            this.location.path() === "/store") {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.headerApproval = function () {
        if (this.location.path() === "" ||
            this.location.path() === "/aboutUs" ||
            this.location.path() === "/store" ||
            this.location.path() === "/login" ||
            this.location.path() === "/register") {
            this.accountWrapper = "";
            return true;
        }
        else {
            this.accountWrapper = "account-wrapper";
            return false;
        }
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        __metadata("design:paramtypes", [Location])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map