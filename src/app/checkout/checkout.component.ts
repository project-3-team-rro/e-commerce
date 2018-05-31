
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { MerchandiseService } from '../services/merchandise.service';
import { CartService } from '../services/cart.service';
import { Merchandise } from '../classes/merchandise';
import { ActivatedRoute, Router } from '@angular/router';
import { MerchandiseListComponent } from '../merchandise-list/merchandise-list.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

@Input() grandTotal: any;  
user: any;
theMerchandise: any = {};
theUpdate: any = {};

  constructor(private authService: AuthService,
    private cartService: CartService,
    private merchandiseService: MerchandiseService,
    private route: ActivatedRoute,
    private myRouter: Router) { }


  ngOnInit() {
    // from here
    this.authService.isLoggedIn()
      .toPromise()
      .then(() => {
        // don't forget to declare user up!
        this.user = JSON.parse(this.authService.currentUser._body);
      })
      .catch(err => {
        console.log('error in ngOnInit in merchendise details: ', err);
        // this.myRouter.navigate(['/login']);
      });
    // to here every component that needs to have user needs to have this exactly the same
    this.route.params
      .subscribe(theParams => {
        const theID = theParams['id'];
        this.getTheItem(theID);
      });
    this.authService.isLoggedIn()
      .toPromise()
      .then(() => {
        this.user = this.authService.currentUser;
        // console.log(this.user); ===== Works !
      })
      .catch(err => {
        console.log(err);
        // this.myRouter.navigate(['/login']);
      });

    // console.log('-----------------------------------MERCHANDISE!!!!!!!!!!!!!!!!!!!!!!', this.theMerchandise);

  }


  sendToCart() {

  }

}
