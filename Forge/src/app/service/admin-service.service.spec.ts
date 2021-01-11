import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminServiceService } from './admin-service.service';
import { Criteria } from '../models/criteria';



describe('AdminServiceService', () => {
  let service: AdminServiceService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
     
    });
    service = TestBed.inject(AdminServiceService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
