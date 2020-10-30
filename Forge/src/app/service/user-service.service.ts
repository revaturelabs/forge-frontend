import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserHome } from 'src/app/user-home/userModel';
import { Portfolio } from 'src/app/portfolio/portfolioModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private id: number = 0;

  /*PLEASE NOTE HARDCODED USER ID !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
  private getPortfoliosUrl: string = "http://localhost:8200/service/getPortfolio/?id=";
  
  constructor(private http: HttpClient) {}

  getPortfolios(): Observable<Portfolio[]>{
    //console.log(this.id);
    return this.http.get<Portfolio[]>(this.getPortfoliosUrl + this.id);
  }

  setId(id: number): void {
    this.id = id;
  }
}
