import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../portfolio/portfolioModel';
import { AuthService } from '../service/auth-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';
import { UserHome } from 'src/app/user-home/userModel';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  portfolios: Portfolio[] = [];
  constructor(private authService:AuthService, private userService: UserServiceService) { }

  ngOnInit(): void {

    this.authService.infoRequest().subscribe(
      data=>{console.log(data);
    });

    this.userService.getPortfolios().subscribe(data =>
      {for(let element of data){
        this.portfolios.push(element);
      }});
  }

  





}
