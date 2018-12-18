import { Component, OnInit } from '@angular/core';
import {orderCreating,DataService} from '../../../../services/dataService/data.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  spinner; //load spinner
  data =[];
  parentMessage = "All";
  category;
  constructor(private dataS: DataService) {
    this.spinner = true; //spinner enabled
    this.getItems();

   }

  ngOnInit() {
    this.dataS.currentMessage.subscribe(message => this.category = message)
  }
  getItems(){
    return new Promise(resolve => {
      this.dataS.getItems().subscribe((items)=>{
      this.data = items;
      resolve(this.spinner = false)
    });
  });
  }
  categoryChange(category) {
    this.dataS.changeMessage(category)
  }
  

}
