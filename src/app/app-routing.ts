import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from "./components/pages/landing-page/landing-page.component"

const routes: Routes = [

    { path: '', component: LandingPageComponent}


]
@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
    
})
export class AppRoutingModule {

}