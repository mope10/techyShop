import { Component, OnInit } from '@angular/core';
import { orderDelete, orderUpdate, DataService, order } from '../../../../services/dataService/data.service';
import { AuthserviceService } from '../../../../services/auth/authservice.service';
import * as CanvasJS from './canvasjs.min';
@Component({
	selector: 'app-admin-home',
	templateUrl: './admin-home.component.html',
	styleUrls: ['./admin-home.component.scss']
})

export class AdminHomeComponent implements OnInit {
	data = [];
	spinner; spinner2; 
	dataCategory;
	dataStatus;
	constructor(private dataS: DataService, private auth: AuthserviceService) {

	}

	ngOnInit() {
		this.spinner = true;
		this.spinner2 = true;
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

		this.getItems().then(function (data) {
			let chart = new CanvasJS.Chart("chartContainer", {
				animationEnabled: true,
				exportEnabled: false,
				theme: "light2",
				colorSet: "graph",
				title: {
					text: "Products Sold According to Category"
				},
				axisY: {
					valueFormatString: "#,#,#0",
					interlacedColor: "#FFFFEE" //try properties h	ere
				},
				axisX: {
					prefix: "",
					labelFontSize: 15,
				},
				data: [{
					type: "column",
					showInLegend: true,
					legendMarkerColor: "grey",
					dataPoints: data
				}]
			});
			chart.render();

			var chart3 = new CanvasJS.Chart("lineChart",
				{

					title: {
						text: "Number of Users"
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
								{ x: new Date("February 14, 2016"), y: 480 },
								{ x: new Date("February 15, 2016"), y: 510 }
							]
						}
					]
				});
			chart3.render();
		});
		this.getOrders().then(function(data){
			console.log("order", data)
			var chart2 = new CanvasJS.Chart("PieChart",
			{
				colorSet: "graph",
				animationEnabled: true,
				title: {
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
						dataPoints: data
					}
				]
			});
		chart2.render();
		})

	}
	getItems() {
		return new Promise(resolve => {
			console.log("here")
			this.dataS.getItems().subscribe((items) => {
				this.data = items;
				console.log(items)
				resolve(this.getDatacategory())
			});
		});
	}
	getOrders() {
		return new Promise(resolve => {
			this.dataS.getOrder().subscribe((orders) => {
				//console.log(orders.order);
				this.auth.setToken(orders.token);
				this.data = orders.orders;
				console.log('this orders: ', this.data);
				resolve(this.getDatastatus())
			});
		});
	}
	getDatastatus() {
		return new Promise(resolve => {
			let pending = 0;
			let processing = 0;
			let completed = 0;


			for (let entry of this.data) {
				if (entry.orderStatus == "Pending")
					pending++;
				else if (entry.orderStatus == "processing")
					processing++;
				else if (entry.orderStatus == "completed")
					completed++;
			}
			this.dataStatus = [
				{ y: pending, indexLabel: "Pending" },
				{ y: processing, indexLabel: "Processing" },
				{ y: completed, indexLabel: "Delivered" }
			]
			resolve(this.dataStatus);
			resolve(this.spinner2 = false);
		});
	}
	getDatacategory() {
		return new Promise(resolve => {
			let laptop = 0;
			let mobile = 0;
			let accessories = 0;
			let gaming = 0;
			let display = 0;
			let speaker = 0;
			console.log(this.data);

			for (let entry of this.data) {
				if (entry.category == "Laptop")
					laptop++;
				else if (entry.category == "Mobile")
					mobile++;
				else if (entry.category == "Accessories")
					accessories++;
				else if (entry.category == "Gaming")
					gaming++;
				else if (entry.category == "Display")
					display++;
				else if (entry.category == "Speaker")
					speaker++;
			}
			this.dataCategory = [
				{ y: laptop, label: "Laptop" },
				{ y: mobile, label: "Mobile" },
				{ y: accessories, label: "Accessories" },
				{ y: gaming, label: "Gaming" },
				{ y: display, label: "Display" },
				{ y: speaker, label: "Speaker" }
			];
			resolve(this.dataCategory);
			resolve(this.spinner = false);
		});
	}

}
