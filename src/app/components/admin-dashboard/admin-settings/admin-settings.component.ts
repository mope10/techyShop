import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../../services/dataService/data.service";

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})
export class AdminSettingsComponent implements OnInit {
  firstName = "";
  lastName  = "";
  status    = "";
  address   = "";
  number    = "";
  constructor(private data: DataService) {
    this.getData();
   }
  
  ngOnInit() {
  }

  getData(){
    this.data.getUserData().subscribe((e)=>{
      this.firstName = e.user.firstName;
      this.lastName  = e.user.lastName;
      this.address   = e.user.address;
      this.status    = e.user.accountType;
      this.number    = e.user.phoneNumber;
    });
  }
}
