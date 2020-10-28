import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserHome } from 'src/app/user-home/userModel';
import { Portfolio } from 'src/app/portfolio/portfolioModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  /*PLEASE NOTE HARDCODED USER ID !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
  private getPortfoliosUrl: string = "http://localhost:8200/service/getPortfolio/?id=" + this.id; 

  
  constructor(private http: HttpClient, private id: number) { 
  
  }
  getPortfolios(): Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>(this.getPortfoliosUrl);
  }

}
