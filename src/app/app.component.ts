import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthserviceService} from '../services/auth/authservice.service'
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tech Shop';
  accountWrapper="";
  
  constructor(private location: Location,private auth: AuthserviceService,private aRouter: ActivatedRoute) {
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
    if(
      this.location.path() === "/login" ||
      this.location.path() === "/register"
    ){
      this.accountWrapper ="stupidMistake";
      return true;
    }
    else if (
      this.location.path() === ""          ||
      this.location.path() === "/aboutUs"  ||
      this.location.path() === "/store"    
      
      
    ) {
      this.accountWrapper="";
      return true;
    }
    else if(!this.auth.isauthenticated()){
      this.accountWrapper = "";

      return true;
    }
    else {
      this.accountWrapper="account-wrapper";
      return false;
    }

  }

  
 
}
