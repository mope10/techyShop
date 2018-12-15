import { Component, OnInit } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';
import { NgxPaginationModule } from 'ngx-pagination'
import {orderCreating,DataService} from '../../../../services/dataService/data.service'
import {Router} from '@angular/router'
import {AuthserviceService} from '../../../../services/auth/authservice.service'; 
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  category = "All";
  categorySearch = "";
  data;
  owner = 0;
  name = "";
  message = "";
  price = 0;
  orderApproval = false;
  detail = "";
  src = "";
  item_id = 0;
  brand = "";

  constructor(private dataS: DataService,private router : Router, private auth: AuthserviceService) { 
    this.getItems();
    this.orderButtonCheck();
  }

  ngOnInit() {

  }
  search(query) {
    if (query == "All")
      this.categorySearch = "";
    else
      this.categorySearch = query;
    console.log(query);
    this.category = query;
  }
  p = 1;

  getItems(){
    this.dataS.getItems().subscribe((items)=>{
      this.data = items;
    })
  }

  setItemView(owner,id,brand,name,price,image,detail){
    console.log(owner,id,brand,name,price,image,detail);
    this.item_id= id;
    this.owner = owner;
    this.brand = brand;
    this.name  = name;
    this.price = price;
    this.src   = image;
    this.detail= detail;
  }

  orderButtonCheck(){
    this.orderApproval = !this.auth.isauthenticated();
  }
  order(){
    var order: orderCreating =  {
      owner_id        : this.owner,
      item_id       : this.item_id,
    };
    this.dataS.createOrder(order).subscribe((e)=>{
      console.log(e);
      this.auth.setToken(e.token);
      if(e.message){
        this.message = "Your order was placed successfully"
      }
      else {
        this.message = "There was some problem, please try later"
      }
    });
  }
  
}
