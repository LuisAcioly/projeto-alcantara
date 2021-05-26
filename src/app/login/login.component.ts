import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public user: User = new User();
  public loginError: string = 'none';
  public userError: string = 'none';
  public passwordError: string = 'none';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  actionLogin(){
      this.userError = 'none';
      this.passwordError = 'none';
      this.loginError = 'none';

      if(this.user.name === '' && this.user.password === ''){
        this.userError = 'flex';
        this.passwordError = 'flex';
      }
      else if(this.user.name === ''){
        this.userError = 'flex';
      }
      else if(this.user.password === ''){
        this.passwordError = 'flex';
      }
      else{
        var authenticated = this.authService.actionLogin(this.user);

        if(!authenticated){
          this.loginError = 'flex';
        }
      }
  }

}
