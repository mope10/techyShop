import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthserviceService} from '../services/auth/authservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tech Shop';
  accountWrapper="";
  
  constructor(private location: Location,private auth: AuthserviceService) {
    this.auth.removeToken();
  }

  footerApproval(): boolean {

    if (
      this.location.path() === ""          ||
      this.location.path() === "/aboutUs"  ||
      this.location.path() === "/store"
    ) {
      return true;
    }
    else {
      return false;
    }

  }

  headerApproval(): boolean {

    if (
      this.location.path() === ""          ||
      this.location.path() === "/aboutUs"  ||
      this.location.path() === "/store"    ||
      this.location.path() === "/login"    ||
      this.location.path() === "/register"
    ) {
      this.accountWrapper="";
      return true;
    }
    else {
      this.accountWrapper="account-wrapper";
      return false;
    }

  }
 
}
