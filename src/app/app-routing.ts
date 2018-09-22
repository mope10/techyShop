import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages
import {LandingPageComponent} from "./components/pages/landing-page/landing-page.component";
import { AboutUsComponent} from "./components/pages/about-us/about-us.component";
import { StoreComponent} from "./components/pages/store/store.component";

//Authentication
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
const routes: Routes = [
    
    //pages
    { path: '', component: LandingPageComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'aboutUs', component: AboutUsComponent},
    { path: 'store', component: StoreComponent}

]
@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
    
})
export class AppRoutingModule {

}