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
  key = "owner_id";
  reverse = false;
  showShopRequest = true;
  p= 1;
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
    this.dataS.downgradeShop(owner_id).subscribe((result)=>{
      this.auth.setToken(result.token);
      if(result.result){
        console.log('staus given');
        this.getShops();
      }
      else {
        console.log('status not given');
      }
    });
  }
  giveStatus(owner_id){
    this.dataS.upgradeShop(owner_id).subscribe((result)=>{
      this.auth.setToken(result.token);
      if(result.result){
        console.log('staus given');
        this.getShops();
      }
      else {
        console.log('status not given');
      }
    });
  }
  sort(key){
    if (this.key === key) {
      this.reverse = !this.reverse;
    }
    else {
      this.reverse = false;
    }
    this.key = key;
  }
}
