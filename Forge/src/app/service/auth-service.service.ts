import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  logout(): void{
    localStorage.setItem('isLoggedIn', 'false');
    
  }
}
