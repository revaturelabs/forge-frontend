import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PotfolioServiceService } from './potfolio-service.service';

describe('PotfolioServiceService', () => {
  let service: PotfolioServiceService;
  let portfolio;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ PotfolioServiceService ]
    });
    service = TestBed.inject(PotfolioServiceService);
  });

  beforeEach(() => {
    portfolio = { 
      id: 1,
      status: "pending",
      userId: 1,
      portfolioSection: {
        title: "Education",
        priority: 1,
        items: {
          
        }
      }
    }
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use PotfolioServiceService', () => {
    service = TestBed.inject(PotfolioServiceService);
    expect(service.getPortfolioById(1)).toBe('real value');
  });

});
