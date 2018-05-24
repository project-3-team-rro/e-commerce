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

  constructor(
    private authService: AuthService,
    private router: Router) { }

  test(): void {
    this.authService.isLoggedIn()
      .toPromise()
      .then(() => {
        this.formInfo = this.authService.currentUser;
        // console.log(this.formInfo); ===== Works !
      })
      .catch(err => {
        console.log(err);
        this.router.navigate(['/login']);
      });
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.formInfo)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err,
    );
    this.user = false;
    this.test();
    // this.router.navigate(['/merchandise']);
    // console.log(this.user);
  }

  logout() {
    this.authService.logout()
      .subscribe(
        () => {
          this.user = null;
          this.formInfo = {};
          this.router.navigate(['/login']);
        },
        (err) => this.error = err
      );
    this.test();
  }

}
