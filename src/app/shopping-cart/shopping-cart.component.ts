import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { userInfo } from 'os';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  allTheProducts: Array<any> = [];
  user: any;
  constructor( private myCartService: CartService, 
    private myAuth: AuthService,
  private myActivated: ActivatedRoute,
private myRoute: Router ) { }

  ngOnInit() {
    this.myAuth.isLoggedIn()
    .toPromise()
    .then( res => {
      this.user = JSON.parse(this.myAuth.currentUser._body);
    } )
    .catch( err => {
      console.log('Error with user in shopping cart: ', err);
      this.myRoute.navigate(['/login']);
    });

    this.myActivated.params.subscribe((params) => {
      this.showTheCartThings(params['id']);
    });
  }

  showTheCartThings(userId) {
    this.myCartService.getTheCartContent(userId)
    .then( res => {
      console.log('whatttttt: ========>  ', res);
      this.allTheProducts = res;
    } )
    .catch( err => {
      console.log('error while getting the cart content: ', err);
    } );

  }

}
