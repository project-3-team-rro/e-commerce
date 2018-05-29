// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../services/cart.service';
// import { AuthService } from '../services/auth.service';
// import { ActivatedRoute, Router } from '@angular/router';
// // import { userInfo } from 'os';

// @Component({
//   selector: 'app-shopping-cart',
//   templateUrl: './shopping-cart.component.html',
//   styleUrls: ['./shopping-cart.component.css']
// })
// export class ShoppingCartComponent implements OnInit {
//   allTheProducts: Array<any> = [];
//   user: any;
//   taxRate: Number = 0.05;
//   shippingRate: Number = 15.00;
//  fadeTime: Number = 300;
//   constructor(private myCartService: CartService,
//     private myAuth: AuthService,
//     private myActivated: ActivatedRoute,
//     private myRoute: Router) { }

//   ngOnInit() {
//     this.myAuth.isLoggedIn()
//       .toPromise()
//       .then(res => {
//         this.user = JSON.parse(this.myAuth.currentUser._body);
//       })
//       .catch(err => {
//         console.log('Error with user in shopping cart: ', err);
//         // this.myRoute.navigate(['/login']);
//       });

//     this.myActivated.params.subscribe((params) => {
//       this.showTheCartThings(params['id']);
//     });
//   }

//   showTheCartThings(userId) {
//     this.myCartService.getTheCartContent(userId)
//       .then(res => {
//         console.log('whatttttt: ========>  ', res);
//         this.allTheProducts = res;
//       })
//       .catch(err => {
//         console.log('error while getting the cart content: ', err);
//       });

//   }


//   increaseQuantity() {
//     let value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;

//   }

//   decreaseQuantity() {
//     let value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value < 1 ? value = 1 : '';
//     value--;
//     document.getElementById('number').value = value;

//   }

//   removeCartItem(removeButton) {


//   }

// }
