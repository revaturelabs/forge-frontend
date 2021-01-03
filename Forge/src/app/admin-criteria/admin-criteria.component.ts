import { Component, OnInit } from '@angular/core';
import { Criteria } from '../models/criteria';
import { AdminServiceService } from '../service/admin-service.service';



@Component({
  selector: 'app-admin-criteria',
  templateUrl: './admin-criteria.component.html',
  styleUrls: ['./admin-criteria.component.css']
})
export class AdminCriteriaComponent implements OnInit {
    criteria : Criteria;
    step = 0;
    
    addCriteria(value : number, name : string): void{
      this.criteria.criteriaValue = value;
      this.criteria.criteriaName = name;
      this.adminService.updateCriteria(this.criteria);

    }
  
    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
    }
  
  constructor(private adminService : AdminServiceService) { }

  ngOnInit(): void {
  }

}
