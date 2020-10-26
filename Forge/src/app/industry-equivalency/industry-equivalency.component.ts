
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-industry-equivalency',
  templateUrl: './industry-equivalency.component.html',
  styleUrls: ['./industry-equivalency.component.css']
})
export class IndustryEquivalencyComponent implements OnInit {
  @Input() inputIndustryEquivalency: []; // decorate the property with @Input()

  skill: string;
  experience: number;

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

  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartLabels: Label[] = ['Java','HTML','SQL'];

  barChartData: ChartDataSets[] = [
    { data: [14,12,10], label: 'Months Experience' }
  ];

  addLabel(){
    if (this.skill != undefined && this.experience != undefined && this.skill != "" && this.experience != 0){
      let data = this.barChartData[0].data;
      this.barChartLabels.push(this.skill);
      data.push(this.experience);
    }
  }

  subtractLabel(){
    let data = this.barChartData[0].data;
    this.barChartLabels.pop();
    data.pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    if(this.inputIndustryEquivalency != undefined){
      console.log(this.inputIndustryEquivalency);
      this.barChartData[0].data =this.inputIndustryEquivalency.map(item => {
            return item['months'];
      });

      this.barChartLabels = this.inputIndustryEquivalency.map(item => {
        return item['technology'];
      });
    }
  }

  save(){
    let data = this.barChartData[0].data;
    let industryEq = [];

    for  (var i = 0; i < data.length; i++){
      let obj = {"months": data[i], "technology": this.barChartLabels[i]};
      industryEq.push(obj);
    }

    //Call service
    console.log('Call service not implemented');
  }
}
