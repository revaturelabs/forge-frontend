import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotfolioServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8200/";

  getPortfolioById(portfolioId: number): Observable<any[]>{
    console.log('getting portfolio')
    return this.http.get<any[]>(this.url + "service/getPortfolioByID/" + portfolioId)
  }

  // updatePortfolioById(portfolio: any){
  //   return this.http.put(this.url + "service/updatePortfolio", portfolio)
  // }

  getUserInfoById(portfolioId: number): Observable<any[]>{
    return this.http.get<any[]>(this.url + "service/getUser?id=" + portfolioId)
  }

  updateUserInfoById(portfolio: any){
    return this.http.put(this.url + "service/updatePortfolio", portfolio)
  }

  getAboutMeById(portfolioId: number): Observable<any[]>{
    console.log('getting about me info')
    return this.http.get<any[]>(this.url + "update/getaboutMe?id=" + portfolioId)
  }

  updateAboutMeById(portfolio: any){
    return this.http.put(this.url + "update/updateAboutMe", portfolio)
  }
  
  getEducationById(portfolioId: number): Observable<any[]>{
    return this.http.get<any[]>(this.url + "update/geteducation/id?=" + portfolioId)
  }

  updateEducationById(portfolio: any){
    return this.http.put(this.url + "update/education", portfolio)
  }

  getIndustryEquivalencyById(portfolioId: number): Observable<any[]>{
    return this.http.get<any[]>(this.url + "update/getindustryEquivalency/id?=" + portfolioId)
  }

  updateIndustryEquivalencyById(portfolio: any){
    return this.http.put(this.url + "update/industryEquivalency", portfolio)
  }

  getProjectById(portfolioId: number): Observable<any[]>{
    return this.http.get<any[]>(this.url + "update/getProject/id?=" + portfolioId)
  }

  updateProjectById(portfolio: any){
    return this.http.put(this.url + "update/updateproject", portfolio)
  }

}
