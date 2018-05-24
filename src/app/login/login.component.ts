import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formInfo: any = { username: '', password: '' };

  user: any;

  error: any;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
  }
  login() {
      this.authService.login(this.formInfo)
        .subscribe(
          (user) => this.user = user,
          (err) => this.error = err
        );
    }

}
