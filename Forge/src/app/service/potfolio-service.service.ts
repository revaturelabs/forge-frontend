import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../models/portfolio';
import { Education } from '../models/education';
import { AboutMe } from '../models/aboutMe';


@Injectable({
  providedIn: 'root'
})
export class PotfolioServiceService {

  constructor(private http: HttpClient) { }
  private getUserByEmailUrl = "http://localhost:8200/service/getUserByEmail/";
  url = "http://localhost:8200/service";
  updateUrl = "http://localhost:8200";

  aboutMeDescription:string;
  currPortfolio: Object;
  
  //this service can be consolidate later

  //bugfix adding create porfolio function 
   //new method 
   createPortfolio(id: number) : Observable<Portfolio> {
    return this.http.post<Portfolio>(this.url + "/createPortfolio/" + `${id}`,  {withCredentials: true});
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.url}/getUserById/${id}`);

  }
  
  getUserInfoById(portfolioId: number): Observable<any[]>{
    return this.http.get<any[]>(this.url + "service/getUser?id=" + portfolioId)
  }
  
  getPortfolioById(portfolioId: number): Observable<Portfolio>{ 
    return this.http.get<Portfolio>(`${this.url}/getPortfolioByID/${portfolioId}`);
  }
  //no email anymore getUserById now
  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(this.getUserByEmailUrl + email);
  }

  updatePortfolio(portfolio: Portfolio){
    return this.http.put(this.updateUrl + "/service/updatePortfolio", portfolio);
  }

  updateUserInfoById(portfolio: Portfolio){
    return this.http.put(this.url + "service/updatePortfolio", portfolio);
  }

  getAboutMeById(portfolioItemId: number): Observable <any>{
    console.log('in getAboutMeById in the potfolio service this is the item id '+ portfolioItemId);
    return this.http.get<any>(`${this.updateUrl}/update/getaboutMe/${portfolioItemId}`);
  }

  updateAboutMeById(portfolioId: number, portfolioItems: Object){
    return this.http.put(`${this.updateUrl}/update/updatePortfolioItems/${portfolioId}`, portfolioItems);
  }
  
  getEducationById(portfolioItemId: number): Observable<Object>{
    return this.http.get<Object>(this.url + "/update/getPortfolioItemsById?id=" + portfolioItemId);
  }

  updateEducationById(portfolioItems: Object){
    return this.http.put(this.url + "/update/updatePortfolioItems", portfolioItems);
  }

  getIndustryEquivalencyById(portfolioId: number): Observable<Object>{
    return this.http.get<Object>(this.url + "/update/getPortfolioItemsById?id=" + portfolioId);
  }

  updateIndustryEquivalencyById(portfolioItems: Object){
    return this.http.put(this.url + "/update/updatePortfolioItems", portfolioItems);
  }

  getProjectById(portfolioId: number): Observable<Object>{
    return this.http.get<Object>(this.url + "/update/getPortfolioItemsById?id=" + portfolioId);
  }

  updateProjectById(portfolioItems: Object){
    return this.http.put(this.url + "/update/updatePortfolioItems", portfolioItems);
  }

  

}
