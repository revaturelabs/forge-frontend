import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PotfolioServiceService } from './potfolio-service.service';
import { Criteria } from '../models/criteria';
import { Portfolio } from '../models/portfolio';
import { of } from 'rxjs';

describe('PotfolioServiceService', () => {
  let service: PotfolioServiceService;
  let portfolio: Portfolio;
  let httpMock: HttpTestingController;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PotfolioServiceService]
    });
    service = TestBed.inject(PotfolioServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should return portfolio by id', () => {
    const expectedId = 1;
    const expectedPortfolio = {
      id: 1,
      status: "pending",
      userId: 1,
      portfolioSection: [
        {
          portfolioItemId: 1,
          portfolioId: 1,
          priority: 1,
          title: "Education",
          items: [{
            id: 1,
            university: "Something",
            graduation: "1999",
            major: "Clowning",
            minor: "",
            degree: "Masters",
            portfolioItemsId: 1
          },
          {
            id: 2,
            university: "SMU",
            graduation: "2232",
            major: "Tech",
            minor: "",
            degree: "Masters",
            portfolioItemsId: 2
          }
          ]
        }
      ]
    }
    service.getPortfolioById(expectedId).subscribe(portfolio => {
      console.log("the portfolio"); 
      console.log(portfolio);
      expect(expectedId).toEqual(portfolio.id);
    })
    const request = httpMock.expectOne(`${service.url}service/getPortfolioByID/${expectedId}`);
    console.log(request);
    expect(request.request.method).toBe('GET');
    request.flush(expectedPortfolio);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  it('should return criteria by id ', () => {
    const criteriaId = 1;
    const dummyValue: Criteria = { id: 1, criteriaName: 'education', criteriaValue: 1 };

    service.getCriteriaById(criteriaId).subscribe(criteria1 => {
      expect(dummyValue).toEqual(criteria1);

    })
    const request = httpMock.expectOne(`${service.url}service/criteria/${criteriaId}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyValue);
  });

});
