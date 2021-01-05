import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PotfolioServiceService } from './potfolio-service.service';
import { Criteria } from '../models/criteria';

describe('PotfolioServiceService', () => {
  let service: PotfolioServiceService;
  let portfolio;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [PotfolioServiceService]
    });
    service = TestBed.inject(PotfolioServiceService);
    httpMock = TestBed.inject(HttpTestingController);
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
  })
  it('should return criteria by id ', () => {
    const criteriaId = 1;
    const dummyValue : Criteria = {id: 1,criteriaName:'education',criteriaValue: 1};

    service.getCriteriaById(criteriaId).subscribe(criteria1 => {
      expect(dummyValue).toEqual(criteria1);

    })
    const request = httpMock.expectOne(`${service.url}service/criteria/${criteriaId}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyValue);
  });

  it('should use PotfolioServiceService', () => {
    service = TestBed.inject(PotfolioServiceService);
    expect(service.getPortfolioById(1)).toBe('real value');
  });

  });
