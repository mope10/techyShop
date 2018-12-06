import { Injectable } from '@angular/core';
import {AuthserviceService} from '../auth/authservice.service';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authservice: AuthserviceService,private router: Router) { }
  canActivate() {
    if (this.authservice.isauthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
