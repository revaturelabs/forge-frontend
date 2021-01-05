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
  belongs_to: string;


  constructor(private authService:AuthService, private userService: UserServiceService, 
    private PortfolioService: PotfolioServiceService, private route: Router ) { }

  ngOnInit(): void {
    
    this.loadData();
    //added updateList route 
    // this.updateList();
    // this.authService.infoRequest().subscribe(
    //   data=>{/*console.log(data)*/;
    //     this.userService.setId(data.userId);

    //     this.userService.getPortfolios().subscribe(data =>
    //       {for(let element of data){
    //         this.portfolios.push(element);
            
    //       }
    //     });
    // });
   
  }
  loadData() {
    this.authService.infoRequest().subscribe(
      data=>{/*console.log(data)*/;
        this.userService.setId(data.userId);
        this.portfolios = [];
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
  this.id = Number(this.user.userId);
  console.log(this.id);
  this.portfolio = new Portfolio();
    this.PortfolioService.createPortfolio(this.portfolio, this.id)
    .subscribe( 
      data => {
        
        //console.log(data);
        this.portfolio = data;
        console.log(this.portfolio);
        this.loadData();
        //this.updateList();
      }
    )
  },
  error => console.log(error));
  }
  
  //bug fix team add function to use for create porfolio button in user home html 
  onSubmit() {
    console.log("in on submit");
    this.createPortfolio();
    //this.ngOnInit();
    //this.updateList();
  }
  updateList() {
    console.log("in reload");
    //this.ngOnInit();
    this.route.navigate(['/user-home']);

  }


}
