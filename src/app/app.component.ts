import { Component, OnInit, Sanitizer } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';
import { MerchandiseService } from './services/merchandise.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  constructor(private authService: AuthService,
    private merchandiseService: MerchandiseService) {
     }

  formInfo: any = { username: '', password: '', role: '' };

  user: any;

  role: any;

  error: any;

  title = 'app';

  form: Boolean = true;

  ngOnInit() {}

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

  // getPrivateData() {
  //   this.authService.getPrivateData()
  //     .subscribe(
  //       (data) => this.privateData = data,
  //       (err) => this.error = err
  //     );
  // }

  toggle($scope) {
    $scope.myvalue = false;
    $scope.showAlert = function () {
      $scope.myvalue = true;
    };
  }
  showForm() {
    this.form = !this.form;
  }
}



