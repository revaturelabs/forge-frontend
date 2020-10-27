import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotfolioServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8200/service";

  getPortfolioById(portfolioId: number): Observable<any[]>{
    return this.http.get<any[]>(this.url + "/getPortfolioByID/" + portfolioId)
  }

  updatePortfolioById(portfolio: any){
    return this.http.put(this.url + "/updatePortfolio", portfolio)
  }
}
