import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../../../../services/auth/authservice.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthserviceService, private router: Router) { }

  ngOnInit() {
  }
  accountApproval():boolean {
    if(localStorage.getItem('token')) {
      return true;
    }
    else {
      return false;
    }
  }
  signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    this.router.navigate([''])
  }
  goToProfile(){
    console.log('profile login');
    this.auth.goToProfile();
   
  }
}
