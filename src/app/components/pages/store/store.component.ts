import { Component, OnInit } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';
import { NgxPaginationModule } from 'ngx-pagination'
import {DataService} from '../../../../services/dataService/data.service'
 
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  category = "All";
  categorySearch = "";
  data;
/*   data = [
    {
      id: "1",
      name: "HTC",
      src: "https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg",
      detail: "FHD 6' Display",
      price: "5000"
    },
    {
      id: "2",
      name: "HTC",
      src: "https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg",
      detail: "FHD 6' Display",
      price: "5000"
    },
    {
      id: "3",
      name: "HTC",
      src: "https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg",
      detail: "FHD 6' Display",
      price: "5000"
    },
    {
      id: "4",
      name: "HTC",
      src: "https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg",
      detail: "FHD 6' Display",
      price: "5000"
    },
    {
      id: "5",
      name: "HTC",
      src: "https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg",
      detail: "FHD 6' Display",
      price: "5000"
    },
    {
      id: "6",
      name: "HTC",
      src: "https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg",
      detail: "FHD 6' Display",
      price: "5000"
    },
    {
      id: "7",
      name: "HTC",
      src: "https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg",
      detail: "FHD 6's Display",
      price: "5000"
    }
  ]; */
  constructor(private dataS: DataService) { 
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
    console.log("here2");
    this.dataS.getItems().subscribe((items)=>{
      console.log(items);
      console.log("here");
      this.data = items;
      console.log(this.data);
    })
  }
}
