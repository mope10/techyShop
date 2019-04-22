var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { SideNavComponent } from './components/ui/side-nav/side-nav.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { StoreComponent } from './components/pages/store/store.component';
import { AccountHeaderComponent } from './components/ui/account-header/account-header.component';
import { AdminHomeComponent } from './components/admin-dashboard/admin-home/admin-home.component';
import { AdminOrdersComponent } from './components/admin-dashboard/admin-orders/admin-orders.component';
import { AdminInventoryComponent } from './components/admin-dashboard/admin-inventory/admin-inventory.component';
import { AdminSettingsComponent } from './components/admin-dashboard/admin-settings/admin-settings.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                LandingPageComponent,
                HeaderComponent,
                SideNavComponent,
                FooterComponent,
                LoginComponent,
                RegisterComponent,
                AboutUsComponent,
                StoreComponent,
                AccountHeaderComponent,
                AdminHomeComponent,
                AdminOrdersComponent,
                AdminInventoryComponent,
                AdminSettingsComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map