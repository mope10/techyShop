import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { AuthserviceService} from '../../../../services/auth/authservice.service';
import { DataService} from "../../../../services/dataService/data.service"
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.scss']
})
export class AccountHeaderComponent implements OnInit {
  firstName = "";
  lastName  = "";
  status    = "";
  constructor(private router: Router, private auth: AuthserviceService,private data: DataService) {
    this.getUser();
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
  getUser() {
    this.data.getUserData().subscribe((data)=>{
      if(data.user != null){
      this.firstName = data.user.firstName;
      this.lastName  = data.user.lastName;
      this.status    = data.user.accountType;
    }});
    
  }
}
