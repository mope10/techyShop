import { Component, OnInit } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  category = "All";
  constructor() { }

  ngOnInit() {
  }
  search(query) {
    this.category = query;
    console.log(query);
  }
}
