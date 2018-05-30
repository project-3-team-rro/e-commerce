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

  userLoggedIn: Boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.isLoggedIn()
      .toPromise()
      .then(() => {
        this.user = this.authService.currentUser;
        console.log('user in the login component is: ', this.user);

        if (this.user === null || this.user === undefined) {
          console.log('user here: ', this.user);
          this.router.navigate(['/login']);
        } else {
          console.log('user there: ', this.user);
        }
      })
      .catch(err => {
        console.log(err);
        // this.router.navigate(['/merchandise']);
      });
  }

  login() {
    this.authService.login(this.formInfo)
      .subscribe(
        (user) => this.user = this.router.navigate(['/landing-page']),
        (err) => this.error = err,
      // (user) => console.log('user signed in' user)
    );
    // this.user = true;
    // this.router.navigate(['/merchandise']);
    // console.log(this.user);
  }

  logout() {
    console.log('whatttttttt');
    this.authService.logout()
      .subscribe(
        () => {
          console.log('user signed out', this.user);
          this.formInfo = {};
          this.router.navigate(['/']);
        },
        (err) => this.error = err
      );
  }

}
