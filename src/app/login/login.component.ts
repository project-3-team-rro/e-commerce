import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formInfo: any = { username: '', password: '' };

  user: any;

  error: any;

  form: Boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.formInfo)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err
      );
    this.form = false;
    this.router.navigate(['/merchandise']);
  }

  logout() {
    this.authService.logout()
      .subscribe(
        () => {
          this.user = null;
          this.formInfo = {};
        },
        (err) => this.error = err
      );
    this.form = true;
  }

}
