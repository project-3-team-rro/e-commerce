import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;

  constructor(
    private myService: AuthService,
    private myRouter: Router,
    private appComponent: AppComponent) { }

  ngOnInit() {
    this.myService.isLoggedIn()
      .toPromise()
      .then(userFromDb => {
        console.log(userFromDb);
      })// if all good, we have user
      .catch(error => {
        console.log(error);
        // this.myRouter.navigate(['/'])
      }); // error, redirect to login page again
    this.user = this.appComponent.user;
  }

}
