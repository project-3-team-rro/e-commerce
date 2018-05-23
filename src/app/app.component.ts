import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
<<<<<<< HEAD
import { AuthService } from './services/auth.service';
import { MerchandiseService } from './services/merchandise.service';
=======
import {AuthService} from './services/auth.service';
import {RouterModule, Routes}from '@angular/router'
import { Router } from '@angular/router'
>>>>>>> Working on user profile

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

<<<<<<< HEAD
  constructor(private authService: AuthService,
    private merchandiseService: MerchandiseService) { }
=======
  constructor(private myService: AuthService, private myRouter: Router){}
>>>>>>> Working on user profile

  formInfo: any = { username: '', password: '' };

  user: any;

  error: any;

  title = 'app';

  privateData: any = 'Hey dude';


  login() {
    this.authService.login(this.formInfo)
      .subscribe(
        (user) => {
          this.user = user;
          console.log("heyyyyy")
          this.myRouter.navigate(['/user-profile'])
        },
        (err) => this.error = err
      );
  }

  signup() {
    this.authService.signup(this.formInfo)
      .subscribe(
        (user) => {
          this.user = user;
          console.log(this.user);
        },
        (err) => this.error = err
      );
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
  }

  getPrivateData() {
    this.authService.getPrivateData()
      .subscribe(
        (data) => this.privateData = data,
        (err) => this.error = err
      );
  }

  toggle($scope) {
    $scope.myvalue = false;
    $scope.showAlert = function () {
      $scope.myvalue = true;
    };
  }


}
