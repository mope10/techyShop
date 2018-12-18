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
  MyFilter;
  data = [];
  spinner = false;

  constructor(private dataS: DataService, private auth: AuthserviceService) {
    this.spinner = true;
    this.getUserOrders().then(function(value) {
      console.log("i am already here");
    });


   }
   spinnerChange() {
    this.spinner = false;
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
    return new Promise(resolve => {
      this.dataS.getUserOrders().subscribe((orders) => {
        console.log(orders)
        this.auth.setToken(orders.token);
        this.data = orders.orders
        console.log(orders.orders);
        resolve(this.spinner = false);
      });
    });
  }

}
