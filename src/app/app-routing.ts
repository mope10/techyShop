import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/authguard/auth-guard.service'

//Pages
import {LandingPageComponent} from "./components/pages/landing-page/landing-page.component";
import { AboutUsComponent} from "./components/pages/about-us/about-us.component";
import { StoreComponent} from "./components/pages/store/store.component";

//Authentication
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";

//Admin-dsahboard
import { AdminHomeComponent} from "./components/admin-dashboard/admin-home/admin-home.component"; 
import { AdminOrdersComponent} from "./components/admin-dashboard/admin-orders/admin-orders.component";
import { AdminInventoryComponent} from "./components/admin-dashboard/admin-inventory/admin-inventory.component";
import {AdminSettingsComponent} from "./components/admin-dashboard/admin-settings/admin-settings.component"
 
//user-dashboard
import { UserHistoryComponent} from "./components/user-dashboard/user-history/user-history.component";
import { UserProductsComponent} from "./components/user-dashboard/user-products/user-products.component";
import { UserSettingsComponent} from "./components/user-dashboard/user-settings/user-settings.component";
const routes: Routes = [
    
    //pages
    { path: '', component: LandingPageComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'aboutUs', component: AboutUsComponent},
    { path: 'store', component: StoreComponent},

    //Admin Panel

    { path: 'admin',canActivate:[AuthGuardService],children:[
        { path: 'home', component: AdminHomeComponent, canActivate: [AuthGuardService]},
        { path: 'orders', component: AdminOrdersComponent, canActivate: [AuthGuardService]},
        { path: 'inventory', component: AdminInventoryComponent, canActivate: [AuthGuardService]},
        { path: 'settings', component: AdminSettingsComponent, canActivate: [AuthGuardService]}
    ]},
    {
        path: 'user', canActivate:[AuthGuardService],children:[
            { path: 'history' , component: UserHistoryComponent, canActivate: [AuthGuardService]},
            { path: 'products', component: UserProductsComponent, canActivate: [AuthGuardService]},
            { path: 'settings', component: UserSettingsComponent, canActivate: [AuthGuardService]}
        ]
    }



]
@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
    
})
export class AppRoutingModule {

}