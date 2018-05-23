import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formInfo: any = { username: '', password: '' };

  user: any;

  error: any;


  constructor( private authService: AuthService ) { }

  ngOnInit() {
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

}
