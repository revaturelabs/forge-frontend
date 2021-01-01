import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../models/portfolio';
import { AuthService } from '../service/auth-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';
import { User } from 'src/app/models/user'; 
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { Observable} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  portfolios: Portfolio[] = [];
  portfolio: Portfolio= new Portfolio();
  //1/1 bugfix team 
  user: User;
  submitted = false;
  id: number;

  constructor(private authService:AuthService, private userService: UserServiceService, 
    private PortfolioService: PotfolioServiceService, private route: Router ) { }

  ngOnInit(): void {

    this.authService.infoRequest().subscribe(
      data=>{/*console.log(data)*/;
        this.userService.setId(data.userId);

        this.userService.getPortfolios().subscribe(data =>
          {for(let element of data){
            this.portfolios.push(element);
          }
        });
    });
  }

  createPortfolio(){
    console.log("in create porfolio");
    //add getUser function 12/31 
    console.log(localStorage.getItem('token'));
    this.user = new User();
    this.id = Number(localStorage.getItem('token')); //turns cookie into number and id = cookie
    console.log(this.id);
    this.userService.getUser(this.id).subscribe(data => { //id is 1 when it gets here and prints all data
      console.log(this.id) //prints correct id number
      console.log(data) //prints whole user table
      
      this.user = data; 
      console.log(data);
  
    this.PortfolioService.createPortfolio(this.portfolio).subscribe( //throws error 
      data => {
        console.log(data);
        this.portfolio = data;
        console.log(this.portfolio);
      }
    )
    // this.userService.getPortfolios().subscribe( (data) =>{
    //   console.log(data);
    //   this.portfolios = data;
      
      
    // })
  },
  error => console.log(error));
  }
  // newPortfolio(): void {
  //   console.log('in newPortfolio()');
  //   this.submitted = false;
  //   this.portfolio = new Portfolio();
  //   console.log('this is the portfolio being created' +this.portfolio);
    
  //  // this.portfolio.belongsTo= this.user.email;

  // }
  //bug fix team add function to use for create porfolio button in user home html 
  onSubmit() {
    console.log("in on submit");
    this.createPortfolio();
  }

}
