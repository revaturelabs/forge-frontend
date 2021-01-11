import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../models/portfolio';
import { Education } from '../models/education';


@Injectable({
  providedIn: 'root'
})
export class PotfolioServiceService {

  constructor(private http: HttpClient) { }
  private getUserByEmailUrl = "http://localhost:8200/service/getUserByEmail/";
  url = "http://localhost:8200";

  aboutMeDescription:string;
  currPortfolio: Object;
  
  //this service can be consolidate later

  //bugfix adding create porfolio function 
   //new method 
   createPortfolio(portfolio: Portfolio, id: number) : Observable<Portfolio> {
    return this.http.post<Portfolio>(`${this.url}/service/createPortfolio/${id}`, portfolio, {withCredentials: true});
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.url}/service/getUserById/${id}`);

  }
  
  getUserInfoById(portfolioId: number): Observable<any[]>{
    return this.http.get<any[]>(this.url + "service/getUser?id=" + portfolioId)
  }
  
  getPortfolioById(portfolioId: number): Observable<Portfolio>{ 
    return this.http.get<Portfolio>(`${this.url}/service/getPortfolioByID/${portfolioId}`);
  }
  //no email anymore getUserById now
  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(this.getUserByEmailUrl + email);
  }

  updatePortfolio(portfolio: Portfolio){
    return this.http.put(this.url + "service/updatePortfolio", portfolio);
  }

  updateUserInfoById(portfolio: Portfolio){
    return this.http.put(this.url + "service/updatePortfolio", portfolio);
  }

  getAboutMeById(portfolioItemId: number): Observable<Object>{
    return this.http.get<Object>(this.url + "update/getPortfolioItemsById?id=" + portfolioItemId);
  }

  updateAboutMeById(portfolioItems: Object){
    return this.http.post(this.url + "update/updatePortfolioItems", portfolioItems);
  }
  
  getEducationById(portfolioItemId: number): Observable<Education>{
    return this.http.get<Education>(`${this.url}/update/getPortfolioItemsById` + portfolioItemId);
  }

  updateEducationById(education: Education){
    let portfolioId = localStorage.getItem('portId');
    console.log(portfolioId);
    return this.http.post(`${this.url}/service/createEducationItem/${portfolioId}`, education);
  }

  getIndustryEquivalencyById(portfolioId: number): Observable<Object>{
    return this.http.get<Object>(this.url + "update/getPortfolioItemsById?id=" + portfolioId);
  }

  updateIndustryEquivalencyById(portfolioItems: Object){
    return this.http.put(this.url + "update/updatePortfolioItems", portfolioItems);
  }

  getProjectById(portfolioId: number): Observable<Object>{
    return this.http.get<Object>(this.url + "update/getPortfolioItemsById?id=" + portfolioId);
  }

  updateProjectById(portfolioItems: Object){
    return this.http.put(this.url + "update/updatePortfolioItems", portfolioItems);
  }

  getCriteriaById(criteriaId : number){
    return this.http.get<any>(this.url +"service/criteria/" + criteriaId);
  }

}
