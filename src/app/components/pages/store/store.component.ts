import { Component, OnInit } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';
import { NgxPaginationModule } from 'ngx-pagination'
import {DataService} from '../../../../services/dataService/data.service'
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
  owner = "";
  name = "";
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
    console.log("in button function");
    this.orderApproval = !this.auth.isauthenticated();
    console.log('this is the button function',this.orderApproval);
  }
  order(){
    console.log(localStorage.getItem("userId"));
    console.log(this.item_id);
  }
  
}
