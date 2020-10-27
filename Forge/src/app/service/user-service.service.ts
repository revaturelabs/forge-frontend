import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserHome } from 'src/app/user-home/userModel';
import { Portfolio } from 'src/app/portfolio/portfolioModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private getPortfoliosUrl: string = "http://localhost:8200/service/getAllPortfolios";

  constructor(private http: HttpClient) { 

  }
  getPortfolios(): Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>(this.getPortfoliosUrl);
  }

}
