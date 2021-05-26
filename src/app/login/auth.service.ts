import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedUser: boolean = false;

  constructor(private router: Router) { 
    
  }

  actionLogin(user: User) {
    if(user.name === "concert" && user.password === "prova"){
      this.authenticatedUser = true;
      console.log("asudhasuidas")
      this.router.navigate(['dashboard']);
    }
    else{
      this.authenticatedUser = false;
    }

    return this.authenticatedUser;
  }

  userIsAuthenticated(){
    return this.authenticatedUser;
  }
}
