import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../models/portfolio';
import { PortfolioItems } from '../models/portfolio-items';

@Injectable({
  providedIn: 'root'
})
export class PotfolioServiceService {

  constructor(private http: HttpClient) { }
  private getUserByEmailUrl = "http://localhost:8200/service/getUserByEmail/";
   url = "http://localhost:8200/";

  aboutMeDescription:string;
  currPortfolio: Object;

  // createPortfolioServ():Observable<any[]>{
  //   //console.log("creating portfolio in service");
  //   let userId = localStorage.getItem('token');
  //   //console.log(userId);
  //   //make POST
  //   return this.http.get<any>(this.url + "service/createPortfolio?userId="+ userId);
  // }
  
  //bugfix adding create porfolio function 
   //new method 
   //changed portfolio: Object to portfolio: Portfolio & Observable<Portfolio> & post<Portfolio>
   createPortfolio(portfolio: Portfolio, id: number) : Observable<Portfolio> {
    return this.http.post<Portfolio>(this.url + "service/createPortfolio/" + `${id}`, portfolio, {withCredentials: true});
  }
  
  getUserById(userId: number): Observable<any[]>{
    return this.http.get<any[]>(this.url + "service/getUser?id=" + userId);
  }
  //check later
  getPortfolioById(portfolioId: number): Observable<Portfolio>{ //changed Observable<Object> to Observable<any> then to Observable<Portfolio>
    //console.log('getting portfolio')
     //changed /getPortfolioByID/ to /getPortfolioById?id=
    return this.http.get<Portfolio>(this.url + "service/getPortfolioByID?id=" + portfolioId);
  }
  //no email anymore
  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(this.getUserByEmailUrl + email);
  }

  //changed portfolio: any to portfolio: Portfolio
  updatePortfolio(portfolio: Portfolio){
    //console.log(portfolio)
    return this.http.put(this.url + "service/updatePortfolio", portfolio);
  }

  updateUserInfoById(portfolio: Portfolio){
    return this.http.put(this.url + "service/updatePortfolio", portfolio);
  }

  getAboutMeById(portfolioItemId: number): Observable<PortfolioItems>{
    //console.log('getting about me info')

    return this.http.get<PortfolioItems>(this.url + "update/getaboutMe?id=" + portfolioItemId);

  }

  updateAboutMeById(portfolioItemId: number){
    return this.http.put(this.url + "update/aboutMe", portfolioItemId);
  }
  
  getEducationById(portfolioItemId: number): Observable<PortfolioItems>{
    // changed update/geteducation/id?= to "update/geteducation?id=
    return this.http.get<PortfolioItems>(this.url + "update/geteducation?id=" + portfolioItemId);
  }

  updateEducationById(portfolioItems: PortfolioItems){
    return this.http.put(this.url + "update/education", portfolioItems);
  }

  getIndustryEquivalencyById(portfolioId: number): Observable<PortfolioItems>{
  //changed update/getindustryEquivalency/id?= to update/getindustryEquivalency?id=
    return this.http.get<PortfolioItems>(this.url + "update/getindustryEquivalency?id=" + portfolioId);
  }

  updateIndustryEquivalencyById(portfolioItems: PortfolioItems){
    return this.http.put(this.url + "update/industryEquivalency", portfolioItems);
  }

  getProjectById(portfolioId: number): Observable<PortfolioItems>{
 // changed update/getProject/id?= to update/getProject?id=
    return this.http.get<PortfolioItems>(this.url + "update/getProject?id=" + portfolioId);
  }

  updateProjectById(portfolioItems: PortfolioItems){
    return this.http.put(this.url + "update/updateproject", portfolioItems);
  }

  //save
  getCriteriaById(criteriaId : number){
    return this.http.get<any>(this.url +"service/criteria/" + criteriaId);

  }

}
