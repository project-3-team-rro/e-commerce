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

  user: any = false;

  error: any;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.isLoggedIn()
      .toPromise()
      .then(() => {
        this.formInfo = this.authService.currentUser;
        // console.log(this.formInfo); ===== Works!
      })
      .catch(err => {
        console.log(err);
        // this.router.navigate(['/merchandise']);
      });
  }

  login() {
    this.authService.login(this.formInfo)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err,
      // (user) => console.log('user signed in' user)
    );
    // this.user = true;
    // this.router.navigate(['/merchandise']);
    // console.log(this.user);
  }

  logout() {
    this.authService.logout()
      .subscribe(
        () => {
          this.formInfo = {};
        },
        (err) => this.error = err
      );
    this.user = true;
    console.log('user signed out', this.user);
    this.router.navigate(['/']);
  }

}
