import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { MerchandiseService } from '../services/merchandise.service';
import {CartService} from '../services/cart.service';
import {Merchandise} from '../classes/merchandise';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-merchandise-details',
  templateUrl: './merchandise-details.component.html',
  styleUrls: ['./merchandise-details.component.css']
})
export class MerchandiseDetailsComponent implements OnInit {
<<<<<<< HEAD
  public merchandise: Merchandise = {};
  theMerchandise: any = {};
  theUpdate: any = {};
  // this is the user that we gonna use in this component 
  user: any;
=======
  theMerchandise: any = {};
  theUpdate: any = {};
  isFormShowing: Boolean = false;
>>>>>>> master

  constructor(private authService: AuthService,
    private cartService: CartService,
    private merchandiseService: MerchandiseService,
    private route: ActivatedRoute,
    private myRouter: Router) { }

    public getCurrency(): string {
      return '$';
    }

  getTheItem(id) {
    this.merchandiseService.getMerchandiseDetails(id)
      .subscribe((res) => {
        this.theMerchandise = res;
      });
  }

  updateTheItem(idOfTask) {
    this.merchandiseService.updateItem(idOfTask, this.theUpdate)
      .subscribe(() => {
        this.getTheItem(idOfTask);
        this.theUpdate = {};
      });
    this.isFormShowing = false;
  }

  toggleForm() {
    this.isFormShowing = !this.isFormShowing;
  }

  ngOnInit() {
    // from here
    this.authService.isLoggedIn()
    .toPromise()
    .then( () => {
      // don't forget to declare user up!
      this.user = JSON.parse(this.authService.currentUser._body)
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

    addToCart(product, user) {
      console.log('what is product: ', product)
      this.cartService.addToCart(product, user)
      .then(res => console.log('what is this in the component: ', res) )
      .catch ( err => console.log('error in add to cart: ', err) );
    }

}
