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
import { FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from '../../../../services/auth/authservice.service';
import { Router } from '@angular/router';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.validityStatement = "";
        this.validity = false;
        this.createForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.savePassword = function (password, rePassword) {
        this.password = password;
        if (rePassword) {
            if (this.password === rePassword) {
                this.validityStatement = "fa fa-check";
                this.validity = true;
            }
            else {
                this.validityStatement = "fa fa-times";
                this.validity = false;
            }
        }
    };
    RegisterComponent.prototype.comparePassword = function (password) {
        if (password) {
            if (this.password === password) {
                this.validity = true;
                this.validityStatement = "fa fa-check";
            }
            else {
                this.validity = false;
                this.validityStatement = "fa fa-times";
            }
        }
    };
    RegisterComponent.prototype.createForm = function () {
        this.registrationForm = this.fb.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', [Validators.required, Validators.minLength(11)]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            rePassword: ['', [Validators.required]],
            address: ['', [Validators.required]]
        });
    };
    RegisterComponent.prototype.registerUser = function (firstName, lastName, password, emailAddress, phoneNumber, address) {
        var _this = this;
        this.User = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            email: emailAddress,
            number: phoneNumber,
            address: address
        };
        console.log(this.User);
        this.auth.createUser(this.User).subscribe(function (value) { return console.log(value); }, function (err) { return console.log(err); }, function () { return _this.router.navigate(['/', 'login']); });
    };
    RegisterComponent = __decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder, AuthserviceService, Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map