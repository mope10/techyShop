import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../../services/dataService/data.service';

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
  constructor(private dataS: DataService) { 
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
      this.data = orders;
      console.log(this.data);
    });
  }
  changeStatus(status){
    this.OrderStatusCurrent = status;
  }
}
