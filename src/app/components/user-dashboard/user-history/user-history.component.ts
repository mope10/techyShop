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
  data = [{ id: 1, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", datePurchased: new Date(2018,4,19), totalPrice: "500" },
  { id: 2, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", datePurchased: new Date(2018,4,19), totalPrice: "500" },
  { id: 3, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", datePurchased: new Date(2018,4,19), totalPrice: "500" },
  { id: 4, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", datePurchased: new Date(2018,4,19), totalPrice: "500" },
  { id: 5, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", datePurchased: new Date(2018,4,15), totalPrice: "500" },
  { id: 6, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", datePurchased: new Date(2018,4,19), totalPrice: "500" },
  { id: 7, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", datePurchased: new Date(2018,3,12), totalPrice: "500" },
  { id: 8, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", datePurchased: new Date(2018,2, 9), totalPrice: "500" },
  { id: 9, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", datePurchased: new Date(2018,2,19), totalPrice: "500" },
  { id: 10, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", datePurchased: new Date(2018,4,29), totalPrice: "500" },
  { id: 11, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", datePurchased: new Date(2018,2,19), totalPrice: "500" },
  { id: 12, orderNo: "#343", productName: "Laptop-Dell inspiron", amount: "4", address: "Address", datePurchased: new Date(2018,1,19), totalPrice: "500" }
];

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
      // this.auth.setToken(orders.token);
      console.log(orders.order);
    })
  }

}
