import { Component, OnInit } from '@angular/core';
import { DataService} from '../../../../services/dataService/data.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {
  key = "id";
  reverse = false;
  pPending = 1;
  pProcessing = 1;
  pCompleted = 1;
  data1 = [];
  data = [{ id: 1, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", totalPrice: "500" },
  { id: 2, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", totalPrice: "500" },
  { id: 3, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", totalPrice: "500" },
  { id: 4, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", totalPrice: "500" },
  { id: 5, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", totalPrice: "500" },
  { id: 6, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", totalPrice: "500" },
  { id: 7, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", totalPrice: "500" },
  { id: 8, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", totalPrice: "500" },
  { id: 9, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", totalPrice: "500" },
  { id: 10, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", totalPrice: "500" },
  { id: 11, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", totalPrice: "500" },
  { id: 12, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", totalPrice: "500" }
  ];
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
      this.data1 = orders;
      console.log(this.data1);
    });
  }
}
