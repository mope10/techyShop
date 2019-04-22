var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent() {
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        CanvasJS.addColorSet("graph", [
            "#B05C02",
            "#DE7403",
            "#FC8A10",
            "#FC9C36",
            "#FDB363",
            "#FECE9A",
            "#793F02",
        ]);
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: false,
            theme: "light2",
            colorSet: "graph",
            title: {
                text: "Products Sold According to Category"
            },
            axisY: {
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
        var chart2 = new CanvasJS.Chart("PieChart", {
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
                    dataPoints: [
                        { y: 4181563, indexLabel: "Pending" },
                        { y: 2175498, indexLabel: "Processing" },
                        { y: 3125844, indexLabel: "Delivered" }
                    ]
                }
            ]
        });
        chart2.render();
        var chart3 = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Earthquakes - per month"
            },
            data: [
                {
                    type: "line",
                    dataPoints: [
                        { x: new Date(2012, 08, 1), y: 450 },
                        { x: new Date(2012, 08, 1), y: 414 },
                        { x: new Date(2012, 08, 1), y: 520 },
                        { x: new Date(2012, 08, 1), y: 460 },
                        { x: new Date(2012, 08, 1), y: 450 },
                        { x: new Date(2012, 08, 1), y: 500 },
                        { x: new Date(2012, 08, 1), y: 480 },
                        { x: new Date(2012, 08, 1), y: 480 },
                        { x: new Date(2012, 08, 1), y: 410 },
                        { x: new Date(2012, 09, 1), y: 500 },
                        { x: new Date(2012, 10, 1), y: 480 },
                        { x: new Date(2012, 11, 1), y: 510 }
                    ]
                }
            ]
        });
        chart3.render();
    };
    AdminHomeComponent = __decorate([
        Component({
            selector: 'app-admin-home',
            templateUrl: './admin-home.component.html',
            styleUrls: ['./admin-home.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());
export { AdminHomeComponent };
//# sourceMappingURL=admin-home.component.js.map