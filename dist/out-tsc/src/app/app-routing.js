var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//Pages
import { LandingPageComponent } from "./components/pages/landing-page/landing-page.component";
import { AboutUsComponent } from "./components/pages/about-us/about-us.component";
import { StoreComponent } from "./components/pages/store/store.component";
//Authentication
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
//Admin-dsahboard
import { AdminHomeComponent } from "./components/admin-dashboard/admin-home/admin-home.component";
import { AdminOrdersComponent } from "./components/admin-dashboard/admin-orders/admin-orders.component";
import { AdminInventoryComponent } from "./components/admin-dashboard/admin-inventory/admin-inventory.component";
import { AdminSettingsComponent } from "./components/admin-dashboard/admin-settings/admin-settings.component";
var routes = [
    //pages
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'aboutUs', component: AboutUsComponent },
    { path: 'store', component: StoreComponent },
    //Buyer Panel
    { path: 'admin', children: [
            { path: 'home', component: AdminHomeComponent },
            { path: 'orders', component: AdminOrdersComponent },
            { path: 'inventory', component: AdminInventoryComponent },
            { path: 'settings', component: AdminSettingsComponent }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.js.map