import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PotfolioServiceService } from '../service/potfolio-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

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