import { Component, DebugElement, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-industry-equivalency',
  templateUrl: './industry-equivalency.component.html',
  styleUrls: ['./industry-equivalency.component.css']
})
export class IndustryEquivalencyComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
    scales : {
      yAxes: [{
         ticks: {
            min: 0
          }
      }]
    }
  };
  barChartLabels: Label[] = ['Java','HTML','SQL'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [14,12,10], label: 'Months Experience' }
  ];

  addLabel(){
    let data = this.barChartData[0].data;
    this.barChartLabels.push("Skill");
    data.push(0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
