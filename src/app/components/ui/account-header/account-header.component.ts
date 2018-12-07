import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { AuthserviceService} from '../../../../services/auth/authservice.service';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.scss']
})
export class AccountHeaderComponent implements OnInit {

  constructor(private router: Router, private auth: AuthserviceService) {

   }

  ngOnInit() {
  }
  signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    this.router.navigate([''])
  }
  goToProfile() {
    this.auth.goToProfile();
   
  }
}
