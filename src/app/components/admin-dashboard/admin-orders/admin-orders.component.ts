import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../../services/dataService/data.service';
import { AuthserviceService} from '../../../../services/auth/authservice.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {
  OrderStatusCurrent = "pending";
  key = "id";
  reverse = false;
  pPending = 1;
  pProcessing = 1;
  pCompleted = 1;
  data = [];
  constructor(private dataS: DataService,private auth : AuthserviceService) { 
    this.getOrders();
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

  getOrders(){
    this.dataS.getOrder().subscribe((orders)=>{
      //console.log(orders.order);
      this.auth.setToken(orders.token);
      this.data = orders.order;
      console.log(this.data);
    });
  }
  changeStatus(status){
    this.OrderStatusCurrent = status;
  }
}
