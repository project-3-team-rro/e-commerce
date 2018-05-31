import { Component, OnInit } from '@angular/core';
import {MaterialModule} from '../material.module';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { IconModule } from 'angular-icon';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

import {CartService} from '../services/cart.service';


import { SearchComponent } from "../search/search.component";



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  // this is the user that we gonna use in this component ;
  formInfo: any = { username: '', password: '', role: '' };

  user: any;

  role: any;

  error: any;

  title = 'app';

  cartQuantity: any;

  form: Boolean = true;
  theMerchandise: any = {};
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private authService: AuthService,
    private myRouter: Router, private route: ActivatedRoute, private merchandiseService: MerchandiseService,
    private cartService: CartService, private router: Router ) {
    iconRegistry.addSvgIcon(
      'cart',
    sanitizer.bypassSecurityTrustUrl('assets/cart.svg'));



  }

  // unnecessary
  getTheItem(id) {
    this.merchandiseService.getMerchandiseDetails(id)
      .subscribe((res) => {
        this.theMerchandise = res;
      });
  }
  ngOnInit() {

    // this.cartService.cartQuantity
    // .subscribe((res) => {
    //   this.cartQuantity = res;
    //   console.log('<><><><><><><><><><><><><', res);
    // });


    // from here
    this.authService.isLoggedIn()
      .toPromise()
      .then((response) => {
        // don't forget to declare user up!
        this.user = response;
        this.cartService.getTheCartContent(this.authService.currentUser._id)
        .then((res) => {
          this.cartQuantity = res.length;
        });

      })
      .catch(err => {
        console.log('error in ngOnInit in merchendise details: ', err);
        this.myRouter.navigate(['/login']);
      });
    // to here every component that needs to have user needs to have this exactly the same
    this.route.params
      .subscribe(theParams => {
        const theID = theParams['id'];
        this.getTheItem(theID);
      });

  }

  logout() {
    this.authService.logout()
      .subscribe(
        () => {
          this.user = null;
          this.formInfo = {};
          this.cartQuantity = null;
          this.router.navigate(['/login']);
          this.ngOnInit();
        },
        (err) => this.error = err
      );
    this.form = true;
  }


}
