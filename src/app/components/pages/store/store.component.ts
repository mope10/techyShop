import { Component, OnInit } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';
import { NgxPaginationModule } from 'ngx-pagination'
import {DataService} from '../../../../services/dataService/data.service'
import {Router} from '@angular/router' 
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  category = "All";
  categorySearch = "";
  data;
  name = "";
  price = 0;
  detail = "";
  src = "";
  brand = "";

  constructor(private dataS: DataService,private router : Router) { 
    this.getItems();
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

  setItemView(id,brand,name,price,image,detail){
    console.log(id,brand,name,price,image,detail);
    this.brand = brand;
    this.name  = name;
    this.price = price;
    this.src   = image;
    this.detail= detail;
  }
  
}
