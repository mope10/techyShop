import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ConditionalExpr } from '@angular/compiler';
=======
import {NgxPaginationModule} from 'ngx-pagination'
>>>>>>> 34e6afc296003eaa26cfab238648e32d547d255f

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
<<<<<<< HEAD
  category = "All";
=======
  data = [
    {  
      id:"1", 
      name:"HTC", 
      src:"https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg", 
      detail:"FHD 6' Display",
      price: "5000"
    },
    {
      id:"2",
      name:"HTC",
      src:"https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg", 
      detail:"FHD 6' Display", 
      price: "5000"
    },
    {
      id:"3",
      name:"HTC",
      src:"https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg", 
      detail:"FHD 6' Display", 
      price: "5000"
    },
    {
      id:"4", 
      name:"HTC", 
      src:"https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg", 
      detail:"FHD 6' Display", 
      price: "5000"
    },
    {
      id:"5", 
      name:"HTC", 
      src:"https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg", 
      detail:"FHD 6' Display", 
      price: "5000"
    },
    {
      id:"6", 
      name:"HTC", 
      src:"https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg", 
      detail:"FHD 6' Display", 
      price: "5000"
    },
    {
      id:"7", 
      name:"HTC", 
      src:"https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg", 
      detail:"FHD 6's Display", 
      price: "5000"
    }
  ];
>>>>>>> 34e6afc296003eaa26cfab238648e32d547d255f
  constructor() { }

  ngOnInit() {
    
  }
  search(query) {
    this.category = query;
    console.log(query);
  }
}
