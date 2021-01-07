import { Component, OnInit } from '@angular/core';
import { Criteria } from '../models/criteria';
import { AdminServiceService } from '../service/admin-service.service';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-admin-criteria',
  templateUrl: './admin-criteria.component.html',
  styleUrls: ['./admin-criteria.component.css']
})
export class AdminCriteriaComponent implements OnInit {
  criteria: Criteria = new Criteria();
    step = 0;
     
    addCriteria(id: number, criteriaValue: number, criteriaName: string) {
      this.nextStep();
      console.log(criteriaValue);
      this.criteria.id=id;
      this.criteria.criteriaValue=criteriaValue;
      this.criteria.criteriaName=criteriaName;
      console.log(this.criteria.criteriaValue);
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
  
  constructor(private adminService : AdminServiceService, ) { }

  ngOnInit(): void {
  }

}
