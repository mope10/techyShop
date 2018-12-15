import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../../services/dataService/data.service';
import { AuthserviceService} from '../../../../services/auth/authservice.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  data = [];
  showShopRequest = true;
  constructor(private dataS: DataService, private auth: AuthserviceService) {
    this.getShops();
   }

  ngOnInit() {
  }

  getShops() {
    this.dataS.getShopRequests().subscribe((shops)=>{
      this.auth.setToken(shops.token);
      this.data =shops.shopRequests;
      console.log(shops.shopRequests);
    })
  }
  showShops(){
    this.showShopRequest = false;
    console.log(this.showShopRequest);
  }

  showRequests(){
    this.showShopRequest = true;
    console.log(this.showShopRequest);
  }
  takeStatus(owner_id){
    console.log(owner_id);
  }
  giveStatus(owner_id){
    console.log(owner_id);
  }
}
