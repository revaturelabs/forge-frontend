import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../models/portfolio';
import { Education } from '../models/education';
import { IndustryEquivalency } from '../models/industryEquivalency';
import { AboutMe } from '../models/aboutMe';


@Injectable({
  providedIn: 'root'
})
export class PotfolioServiceService {

  constructor(private http: HttpClient) { }
  private getUserByEmailUrl = "http://localhost:8200/service/getUserByEmail/";
  url = "http://localhost:8200/service";
  updateUrl = "http://localhost:8200/update";

  aboutMeDescription:string;
  currPortfolio: Object;
  
  //this service can be consolidate later

  //bugfix adding create porfolio function 
   //new method 
   createPortfolio(id: number) : Observable<Portfolio> {
    return this.http.post<Portfolio>(this.url + "/createPortfolio/" + `${id}`,  {withCredentials: true});
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
    let portfolioId = localStorage.getItem('portId');
    return this.http.put(`${this.url}/service/updatePortfolio`, portfolio);
  }

  updateUserInfoById(portfolio: Portfolio){
    return this.http.put(this.url + "service/updatePortfolio", portfolio);
  }

  getAboutMeById(portfolioItemId: number): Observable<AboutMe>{
    return this.http.get<AboutMe>(`${this.updateUrl}/getaboutMe/${portfolioItemId}`);
  }

updateAboutMeById(portfolioId: number, portfolioItems: Object){
  return this.http.put(`${this.updateUrl}/updateAboutMe/${portfolioId}`, portfolioItems);
}
  getEducationById(portfolioItemId: number): Observable<Education>{
    return this.http.get<Education>(`${this.url}/update/getPortfolioItemsById` + portfolioItemId);
  }
//education to portfolio
  updateEducationById(education: Education): Observable<Education>{
    let portfolioId = localStorage.getItem('portId');
    console.log(portfolioId);
    console.log(education);
    return this.http.post<Education>(`${this.url}/service/createEducationItem/${portfolioId}`, education);
  }

  getIndustryEquivalencyById(portfolioId: number): Observable<IndustryEquivalency>{
    return this.http.get<IndustryEquivalency>(`${this.url}/update/getPortfolioItemsById/${portfolioId}`);
  }

  updateIndustryEquivalencyById(industryEquivalency: IndustryEquivalency): Observable<IndustryEquivalency>{
    let portfolioId = localStorage.getItem('portId');
    return this.http.post<IndustryEquivalency>(`${this.url}/service/createIndustryItem/${portfolioId}`, industryEquivalency);
  }

  getProjectById(portfolioId: number): Observable<Object>{
    return this.http.get<Object>(this.url + "/update/getPortfolioItemsById?id=" + portfolioId);
  }

  updateProjectById(portfolioItems: Object){
    return this.http.put(this.url + "/update/updatePortfolioItems", portfolioItems);
  }

  getCriteriaById(criteriaId : number){
    return this.http.get<any>(this.url +"service/criteria/" + criteriaId);
  }

}
