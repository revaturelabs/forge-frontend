import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  router: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.isLoggedIn()){
         return true;
      }
     this.router.navigateByURL['/login'];
     return false;
  }
  public isLoggedIn():boolean {
    let status  = false;
    if(localStorage.getItem('isLoggedIn')=="true"){
      status = true;
    }
    else{
      status = false;
    }
    return status;
  }
  
}
