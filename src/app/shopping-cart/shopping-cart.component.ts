<<<<<<< HEAD
// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../services/cart.service';
// import { AuthService } from '../services/auth.service';
// import { ActivatedRoute, Router } from '@angular/router';
// // import { userInfo } from 'os';
=======
// // import { Component, OnInit } from '@angular/core';
// // import { CartService } from '../services/cart.service';
// // import { AuthService } from '../services/auth.service';
// // import { ActivatedRoute, Router } from '@angular/router';
// // // import { userInfo } from 'os';
>>>>>>> 939c8eb220446d68dd895f854973f2c2c4e85a7a

// @Component({
//   selector: 'app-shopping-cart',
//   templateUrl: './shopping-cart.component.html',
//   styleUrls: ['./shopping-cart.component.css']
// })
// export class ShoppingCartComponent implements OnInit {
//   subTotal: any;
//   totalTax: any;
//  grandTotal: any;
//   quantityProduct: Array<any> = [];

//   allTheProducts: Array<any> = [];
//   user: any;
//   taxRate: any = 0.07;
//   shippingRate: any = 15.00;
//  fadeTime: any = 300;
//   constructor(private myCartService: CartService,
//     private myAuth: AuthService,
//     private myActivated: ActivatedRoute,
//     private myRoute: Router) { }
<<<<<<< HEAD
=======



  ngOnInit() {
    this.myAuth.isLoggedIn()
      .toPromise()
      .then(res => {
        this.user = this.myAuth.currentUser;
      })
      .catch(err => {
        console.log('Error with user in shopping cart: ', err);
        // this.myRoute.navigate(['/login']);
      });

    this.myActivated.params.subscribe((params) => {
      this.showTheCartThings(params['id']);
    });
  }



updateTotal(){


  this.subTotal = this.quantityProduct.reduce((a, b) => {
    return a + (b.price * b.realQuantity);
  }, 0);

  this.totalTax = this.subTotal * (this.taxRate);

  this.grandTotal = this.subTotal + this.totalTax + this.shippingRate;

  console.log("Hello you", this.subTotal);


}



  calculateTotal() {

    this.subTotal = this.allTheProducts.reduce((a, b) => {
      return a + b.price;
    }, 0);

    this.totalTax = this.subTotal * (this.taxRate);

    this.grandTotal = this.subTotal + this.totalTax + this.shippingRate;

    console.log("Hello you", this.subTotal);
  }

>>>>>>> 939c8eb220446d68dd895f854973f2c2c4e85a7a


// //   ngOnInit() {
// //     this.myAuth.isLoggedIn()
// //       .toPromise()
// //       .then(res => {
// //         this.user = JSON.parse(this.myAuth.currentUser._body);
// //       })
// //       .catch(err => {
// //         console.log('Error with user in shopping cart: ', err);
// //         // this.myRoute.navigate(['/login']);
// //       });

<<<<<<< HEAD
// //     this.myActivated.params.subscribe((params) => {
// //       this.showTheCartThings(params['id']);
// //     });
// //   }
//   showTheCartThings(userId) {
//     this.myCartService.getTheCartContent(userId)
//       .then(res => {
//         console.log('whatttttt: ========>  ', res);
//         this.allTheProducts = res;
//         console.log(this.allTheProducts);

//         this.subTotal = this.allTheProducts.reduce((a, b) => {
//           return a + b.price;
//         }, 0);

//         this.totalTax = this.subTotal * (this.taxRate);


//         this.grandTotal = this.subTotal + this.totalTax + this.shippingRate;


//         this.allTheProducts.forEach((product) => {
//           const found = this.quantityProduct.find((oneProduct) => {
//             return oneProduct.name === product.name;
//           });
//           if (found) {
//             found.realQuantity += 1;
//           } else {
//             product.realQuantity = 1;
//             this.quantityProduct.push(product);
//           }
//           console.log("heyyyyyy: ", this.quantityProduct)
//         });
//       })
//       .catch(err => {
//         console.log('error while getting the cart content: ', err);
//       });
//     }

//   // increaseQuantity(name) {
//   //   const found = this.quantityProduct.find((oneProduct) => {
//   //     return oneProduct.name === name;
//   //   });
//   //     found.realQuantity += 1;
//   // }
//   //   let value = parseInt(document.getElementById('number').value, 10);
//   //   value = isNaN(value) ? 0 : value;
//   //   value++;
//   //   document.getElementById('number').value = value;

//   // }

//   //   decreaseQuantity(name) {
//   //     const found = this.quantityProduct.find((oneProduct) => {
//   //       return oneProduct.name === name;
//   //     });
//   //       found.realQuantity -- ;
//   //   }
=======
//     this.myActivated.params.subscribe((params) => {
//       this.showTheCartThings(params['id']);
//     });
//   }

  showTheCartThings(userId) {

    
    this.myCartService.getTheCartContent(userId)
      .then(res => {
        console.log('whatttttt: ========>  ', res);
        this.allTheProducts = res;
        console.log(this.allTheProducts);


        this.calculateTotal();


//         this.allTheProducts.forEach((product) => {
//           const found = this.quantityProduct.find((oneProduct) => {
//             return oneProduct.name === product.name;
//           });
//           if (found) {
//             found.realQuantity += 1;
//           } else {
//             product.realQuantity = 1;
//             this.quantityProduct.push(product);
//           }
//           console.log("heyyyyyy: ", this.quantityProduct)
//         });
//       })
//       .catch(err => {
//         console.log('error while getting the cart content: ', err);
//       });


increaseQuantity(name) {
    const found = this.quantityProduct.find((oneProduct) => {
      return oneProduct.name === name;
    });
      found.realQuantity += 1;
      this.updateTotal();
  }

  //   let value = parseInt(document.getElementById('number').value, 10);
  //   value = isNaN(value) ? 0 : value;
  //   value++;
  //   document.getElementById('number').value = value;

//   // }


decreaseQuantity(name) {
      const found = this.quantityProduct.find((oneProduct) => {
        return oneProduct.name === name;
      });
        found.realQuantity -- ;

        this.updateTotal();

    }

  removeCartItem(name) {


    const found = this.allTheProducts.find((oneProduct) => {
      return oneProduct.name === name;
    });
      found.realQuantity.inde(name);
  }

}

    }
  removeCartItem(removeButton) {
  }
>>>>>>> 939c8eb220446d68dd895f854973f2c2c4e85a7a
