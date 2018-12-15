import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../../services/dataService/data.service'
import { AuthserviceService} from '../../../../services/auth/authservice.service'

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {
  key = "id";
  reverse = false;
  p = 1;
  data = [];

  constructor(private dataS: DataService, private auth: AuthserviceService) {
    this.getUserOrders(); 
   }

  ngOnInit() {
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
  getUserOrders() {
    this.dataS.getUserOrders().subscribe((orders)=>{
      console.log(orders)
      this.auth.setToken(orders.token);
      console.log(orders.orders);
    })
  }

}
