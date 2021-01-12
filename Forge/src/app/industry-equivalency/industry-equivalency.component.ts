
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { IndustryEquivalency } from '../models/industryEquivalency';
import { Portfolio } from '../models/portfolio';

@Component({
  selector: 'app-industry-equivalency',
  templateUrl: './industry-equivalency.component.html',
  styleUrls: ['./industry-equivalency.component.css']
})
export class IndustryEquivalencyComponent implements OnInit {
  @Input() inputIndustryEquivalency: []; // decorate the property with @Input()
  @Output() addindustryEq = new EventEmitter<any>();

  //technology: string;
  skill: string;
  //months: number
  experience: number;
  equivalency: IndustryEquivalency;
  portfolio: Portfolio;

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
//this.equivalency.technology was this.skill && this.equivalency.months was this.experience
  addLabel(){
    if (this.equivalency.technology != undefined && this.equivalency.months != undefined && this.equivalency.technology != "" && this.equivalency.months != 0){
      let data = this.barChartData[0].data;
      this.barChartLabels.push(this.equivalency.technology);
      let obj = {"months": this.experience, "technology": this.equivalency.technology};
      this.portfolio.portfolioSections.push(obj);
      data.push(this.equivalency.months);
    }
  }

  subtractLabel(){
    let data = this.barChartData[0].data;
    this.barChartLabels.pop();
    data.pop();
    this.portfolio.portfolioSections.pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    if(this.inputIndustryEquivalency != undefined){
      //console.log(this.inputIndustryEquivalency);
      this.barChartData[0].data =this.inputIndustryEquivalency.map(item => {
            return item['months'];
      });

      this.barChartLabels = this.inputIndustryEquivalency.map(item => {
        return item['technology'];
      });

      this.portfolio.portfolioSections = this.inputIndustryEquivalency;
      //console.log(this.equivalency);
    }
  }

  save(){
    // let data = this.barChartData[0].data;
    // let industryEq = [];

    // for  (var i = 0; i < data.length; i++){
    //   let obj = {"months": data[i], "technology": this.barChartLabels[i]};
    //   industryEq.push(obj);
    // }
    
    // //Call service
    // console.log('Call service not implemented');
    // console.log(industryEq);
    // console.log(this.equivalency);
    this.addindustryEq.emit(this.equivalency);
  }

  getData(){
    return this.equivalency;
  }
}
