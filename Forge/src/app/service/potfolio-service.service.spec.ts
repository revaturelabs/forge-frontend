import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PotfolioServiceService } from './potfolio-service.service';
import { Criteria } from '../models/criteria';
import { Portfolio } from '../models/portfolio';
import { of } from 'rxjs';

describe('PotfolioServiceService', () => {
  let service: PotfolioServiceService;
  // let dummyPortfolio;
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

  beforeEach(() => {
   httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
   service = new PotfolioServiceService(httpClientSpy as any);
  })

  it('should return portfolio by id', () => {
   const expectedPortfolio = {
      id: 1,
      status: "pending",
      userId: 1,
      portfolioSection: [
        {
          title: "Education",
          priority: 1,
          items: [{
            id: 1,
            university: "Something",
            graduation: "1999",
            major: "Clowning",
            minor: "",
            degree: "Masters"
          },
          {
            id: 2,
            university: "SMU",
            graduation: "2232",
            major: "Tech",
            minor: "",
            degree: "Masters"
          }
          ]
        }
      ]
    }
    httpClientSpy.get.and.returnValue(of(expectedPortfolio));
    service.getPortfolioById(-1).subscribe( portfolio => expect(portfolio).toEqual(expectedPortfolio, 'expectedPortfolio'),
    fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    // service = TestBed.inject(PotfolioServiceService);
    // expect(service.getPortfolioById(1)).toBe(dummyPortfolio);
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
