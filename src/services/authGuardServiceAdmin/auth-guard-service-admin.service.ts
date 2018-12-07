
import { Injectable } from '@angular/core';
import {AuthserviceService} from '../auth/authservice.service';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceAdminService  {

  constructor(private authservice: AuthserviceService,private router: Router) { }
  canActivate() {
    var condition = this.authservice.getAccountType();
    if (this.authservice.isauthenticated() && condition == 'admin') {
      return true;
    } 
    else {
      if(this.authservice.isToken()) {
        this.router.navigate(['']);
      }
      else {
        this.router.navigate(['login']);

      }
      return false;
    }
  }
}
