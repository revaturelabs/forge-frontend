import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-user-info',
  templateUrl: './admin-user-info.component.html',
  styleUrls: ['./admin-user-info.component.css']
})
export class AdminUserInfoComponent implements OnInit {

  @Input() inputUserInfo: [];

  constructor() { }

  image ='https://i.imgflip.com/2/3txdnl.jpg';

   userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
    occupation: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')] ),
    number: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]),
    email: new FormControl('', [Validators.required]),
    github: new FormControl(''),
    image: new FormControl('')
  });

  ngOnInit(): void {
  }
}