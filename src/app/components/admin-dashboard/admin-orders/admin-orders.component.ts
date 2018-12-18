import { Component, OnInit } from '@angular/core';
import { orderDelete,orderUpdate,DataService, order} from '../../../../services/dataService/data.service';
import { AuthserviceService} from '../../../../services/auth/authservice.service';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {
  spinner; //load spinner
  OrderStatusCurrent = "pending";
  key = "id";
  reverse = false;
  pPending = 1;
  pProcessing = 1;
  pCompleted = 1;
  MyFilter;
  data = [];
  constructor(private dataS: DataService,private auth : AuthserviceService) {
    this.spinner = true; //spinner enabled
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
    return new Promise(resolve => {
    this.dataS.getOrder().subscribe((orders)=>{
      //console.log(orders.order);
      this.auth.setToken(orders.token);
      this.data = orders.orders;
      console.log('this orders: ',this.data);
      resolve(this.spinner = false);
    });
    });
  }
  changeStatus(status){
    this.OrderStatusCurrent = status;
  }
  updateStatus(id,status){
    var updatedOrder: orderUpdate = {
      orderStatus: status,
      order_id         : id
    }
    this.dataS.changeOrderStatus(updatedOrder).subscribe((e)=>{
      this.auth.setToken(e.token);
      this.getOrders();
    });
    console.log(id,status);
  }
  DeleteOrder(id,productId){
    console.log(id);
    var orderDelete: orderDelete = {
      order_id: id,
      item_id: productId
    }
    this.dataS.deleteOrder(orderDelete).subscribe((e)=>{
      console.log('subscribed')
      this.auth.setToken(e.token);
      this.getOrders();
    });
  }
}
