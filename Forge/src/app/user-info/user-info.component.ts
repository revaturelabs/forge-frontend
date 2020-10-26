import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() inputUserInfo: []; // decorate the property with @Input()
  @Output() updateUserInfo = new EventEmitter<FormGroup>();

  constructor(private modalService: NgbModal) { }

  image ='https://i.imgflip.com/2/3txdnl.jpg';
  user = {
    'name': 'Bob bobson',
    'occupation' : 'Product Owner',
    'number'   : 12345,
    'email' : 'email@email.com',
    'github': 'githubrepo',
    'location' : 'creepy'
   };

   userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
    occupation: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')] ),
    number: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]),
    email: new FormControl('', [Validators.required]),
    github: new FormControl(''),
    image: new FormControl('')
  });

  ngOnInit(): void {}

  ngOnchanges(){
    console.log(this.inputUserInfo)
  }

  onSubmit(){
    console.log('in on submit')
    this.updateUserInfo.emit(this.userForm.value);
    this.userForm.reset();
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  
}