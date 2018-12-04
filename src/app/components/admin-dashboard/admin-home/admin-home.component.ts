import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
    exportEnabled: false,
    theme: "dark2",
		title: {
			text: "Products Sold According to Category"
		},
		data: [{
      type: "column",
      showInLegend: true,
      legendMarkerColor: "grey",
      legendText: "testing = Testing in Gray",
			dataPoints: [
				{ y: 71, label: "Laptop" },
				{ y: 55, label: "Mobile" },
				{ y: 50, label: "Accessories" },
				{ y: 65, label: "Gaming" },
				{ y: 95, label: "Display" },
				{ y: 68, label: "Speaker" }
			]
		}]
	});
		
	chart.render();
    }

}
