import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../../services/dataService/data.service';
import { AuthserviceService} from '../../../../services/auth/authservice.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(private dataS: DataService, private auth: AuthserviceService) {
    this.getShops();
   }

  ngOnInit() {
  }

  getShops() {
    this.dataS.getShopRequests().subscribe((shops)=>{
      this.auth.setToken(shops.token);
      console.log(shops.shopRequests);
    })
  }

}
