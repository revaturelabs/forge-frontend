import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {

this.authService.infoRequest().subscribe(
  
  data=>{console.log(data);


});
  }

  





}
