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

	formInfo: any = {
		email: "",
		password: "",
		address:{
			street: "",
			streetSecondLine: "",
			city: "",
			state: "",
			zip: ""
		}
	};

	user: any = {
		email: "",
		password: "",
		address:{
			street: "",
			streetSecondLine: "",
			city: "",
			state: "",
			zip: ""
		}
	}
	error: any;

	constructor(
		private myService: AuthService,
		private myRouter: Router,
		private appComponent: AppComponent) { }

	ngOnInit() {
		this.myService.isLoggedIn()
			.toPromise()
			.then(() => {
				this.user = this.myService.currentUser;
				if (!this.user.address) { this.user.address= {}; }
				
				// if(this.user.message === "Unauthorized"){
				//   this.myRouter.navigate(['/login'])
				// }
				console.log('user form profile component: ', this.user);
			})// if all good, we have user
			.catch(error => {
				console.log(error);
				// this.myRouter.navigate(['/']);
			}); // error, redirect to login page again
		// this.user = this.appComponent.user;\
	}

	update(theId) {
		console.log(this.formInfo);
		this.myService.update(this.formInfo, theId)
			.subscribe(
				(user) => {
					this.user = user;
					// console.log(this.user);
				},
				(err) => this.error = this.myRouter.navigate(['/login']),
		);
	}
}