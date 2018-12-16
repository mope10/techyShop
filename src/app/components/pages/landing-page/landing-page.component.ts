import { Component, OnInit } from '@angular/core';
import {orderCreating,DataService} from '../../../../services/dataService/data.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  data =[];
  parentMessage = "All";
  category;
  constructor(private dataS: DataService) {
    this.getItems();

   }

  ngOnInit() {
    this.dataS.currentMessage.subscribe(message => this.category = message)
  }
  getItems(){
    this.dataS.getItems().subscribe((items)=>{
      this.data = items;
    })
  }
  categoryChange(category) {
    this.dataS.changeMessage(category)
  }
  

}
