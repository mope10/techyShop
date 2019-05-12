import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../../services/dataService/data.service';
import { AuthserviceService} from '../../../../services/auth/authservice.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  spinner; //load spinner
  data = [];
  key = "owner_id";
  reverse = false;
  showShopRequest = true;
  p= 1;
  constructor(private dataS: DataService, private auth: AuthserviceService) {
    this.spinner = true; //spinner enabled
    this.getShops();
   }

  ngOnInit() {
  }

  getShops() {
    return new Promise(resolve => {
    this.dataS.getShopRequests().subscribe((shops)=>{
      this.auth.setToken(shops.token);
      this.data =shops.shopRequests;
      resolve(this.spinner = false);
    })
  });
  }
  showShops(){
    this.showShopRequest = false;
  }

  showRequests(){
    this.showShopRequest = true;
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
        this.getShops();
      }
      else {
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
