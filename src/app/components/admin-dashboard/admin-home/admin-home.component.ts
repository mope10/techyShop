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
		CanvasJS.addColorSet("graph",
			[//colorSet Array
			"#B05C02",
			"#DE7403",
			"#FC8A10",
			"#FC9C36",
			"#FDB363",
			"#FECE9A",
			"#793F02",
		 ]); 

		let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
    exportEnabled: false,
		theme: "light2",
		colorSet: "graph",
		title: {
			text: "Products Sold According to Category"
		},
		axisY:{
			valueFormatString: "$#,#,#0", 
			interlacedColor: "#FFFFEE" //try properties here
		},
		axisX: {
			prefix: "Sales in ",
			labelFontSize: 15,
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
	var chart2 = new CanvasJS.Chart("PieChart",
	{
		colorSet: "graph",
		animationEnabled: true,
		title:{
			text: "All Orders"
		},
		legend: {
			maxWidth: 350,
			itemWidth: 120
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			legendText: "{indexLabel}",
			toolTipContent: "{indexLabel} - #percent %",
			dataPoints: [
				{ y: 4181563, indexLabel: "Pending" },
				{ y: 2175498, indexLabel: "Processing" },
				{ y: 3125844, indexLabel: "Delivered" }
			]
		}
		]
	});
	chart2.render();
	var chart3 = new CanvasJS.Chart("lineChart",
    {

      title:{
      text: "Earthquakes - per month"
      },
       data: [
      {
        type: "line",

        dataPoints: [
        { x: new Date("February 4, 2016"), y: 450 },
        { x: new Date("February 5, 2016"), y: 414 },
        { x: new Date("February 6, 2016"), y: 520 },
        { x: new Date("February 7, 2016"), y: 460 },
        { x: new Date("February 8, 2016"), y: 450 },
        { x: new Date("February 9, 2016"), y: 500 },
        { x: new Date("February 10, 2016"), y: 480 },
        { x: new Date("February 11, 2016"), y: 480 },
        { x: new Date("February 12, 2016"), y: 410 },
        { x: new Date("February 13, 2016"), y: 500 },
        { x: new Date("February 4, 2016"), y: 480 },
        { x: new Date("February 4, 2016"), y: 510 }
        ]
      }
      ]
    });

    chart3.render();
  }
}
