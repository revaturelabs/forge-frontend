import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UserServiceService } from '../service/user-service.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private userservice: UserServiceService) { }

  image ='https://i.imgflip.com/2/3txdnl.jpg';


  user = {
    'name': 'Bob bobson',
    'occupation' : 'Product Owner',
    'number'   : 12345,
    'email' : 'email@email.com',
    'github': 'githubrepo',
    'location' : 'creepy'
   };

   


  






  ngOnInit(): void {
    
 
}
  
  




}
