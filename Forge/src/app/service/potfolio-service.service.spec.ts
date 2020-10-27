import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PotfolioServiceService } from './potfolio-service.service';

describe('PotfolioServiceService', () => {
  let service: PotfolioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(PotfolioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
