import { identifierName } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { Router } from '@angular/router';
import { AdminServiceService } from '../service/admin-service.service';


@Component({
  selector: 'app-admin-port-view',
  templateUrl: './admin-port-view.component.html',
  styleUrls: ['./admin-port-view.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class AdminPortViewComponent implements OnInit {
  /*
  *where the feedback string is going
  *and current portfolio variable
  */
  feedbackInfo: string= '';
  currentPortfolio: Object;
 
  constructor(private router: Router, private adminService: AdminServiceService) {
    let url: string = this.router.url;
    let splitURL: string[] = url.split('/');
    this.setCurrentPortfolio(splitURL[splitURL.length - 1]); 
  }

  // sets to be called everytime
  ngOnInit(): void {
 
  }

// puts the feedback string with the accept button
 approveOrDeny(status: string){
   this.currentPortfolio['status'] = status;
   let user;
   this.adminService.getUserByEmail(this.currentPortfolio['belongsTo']).subscribe(
     (data) => {
       user = data;
       this.currentPortfolio['myUser'] = user;
       var emailToSend = {
        "userFirstName": user['firstName'],
        "userEmail": user['email'],
        "portfolioStatus": this.currentPortfolio['status'],
        "feedBack": this.feedbackInfo,
        "portfolioId": this.currentPortfolio['id']
      }

      console.log("Updated portfolio information: " + JSON.stringify(this.currentPortfolio));
      this.adminService.updatePortfolio(this.currentPortfolio).subscribe(
        (data) => console.log(data)
      );
      
      //console.log("Email object to send: " + JSON.stringify(emailToSend));
      //console.log("Portfolio belongs to: " + this.currentPortfolio['belongsTo']);
   
      this.adminService.sendEmail(emailToSend).subscribe();

      }
   );
   

   
   
 }

 setCurrentPortfolio(portfolioID): string {
    this.adminService.getPortfolioByID(portfolioID).subscribe( (data) =>
      {
        this.currentPortfolio = data;  
        //console.log(this.currentPortfolio);
      })
    return null; 
 }
 
}