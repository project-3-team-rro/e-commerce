import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { MerchandiseService } from '../services/merchandise.service';
import { CartService } from '../services/cart.service';
import { Merchandise } from '../classes/merchandise';
import { ActivatedRoute, Router } from '@angular/router';
import { MerchandiseListComponent } from '../merchandise-list/merchandise-list.component';



@Component({
  selector: 'app-merchandise-details',
  templateUrl: './merchandise-details.component.html',
  styleUrls: ['./merchandise-details.component.css']
})
export class MerchandiseDetailsComponent implements OnInit {
  public merchandise: Merchandise = {};
  theMerchandise: any = {};
  theUpdate: any = {};
  user: any;
  isFormShowing: Boolean = false;
  isSeller: Boolean = false;
  allTheMerchandise: Array<any> = [];

  // comments: Array<any> = [];
  // newComment: any = {
  //   content: '',
  //   id: '',
  // };


  constructor(private authService: AuthService,
    private cartService: CartService,
    private merchandiseService: MerchandiseService,
    private route: ActivatedRoute,
    private myRouter: Router,
    // private merchandiseListComponent: MerchandiseListComponent
  ) { }

  public getCurrency(): string {
    return '$';
  }

  deleteItem(id) {
    this.merchandiseService.deleteItem(id)
      .subscribe(() => {
        // this.allMerchandise();
        this.myRouter.navigate(['/merchandise']);
        this.allMerchandise();
      });
  }

  allMerchandise(): any {
    // console.log('all merchandise');
    this.merchandiseService.getAllMerchandise().subscribe(merchandise => {
      this.allTheMerchandise = merchandise;
    });
  }


  userEqualSeller() {
    if (this.theMerchandise.seller[0] === this.user.username) {
      return true;
    }
    // console.log('Username:', this.user.username, 'Seller: ', this.theMerchandise.seller[0]);
  }

  // cartButtonShown(seller) {
  //   if (seller.seller[0] === this.user.username || seller.quantity === 0) {
  //     // console.log('quantity:', this.theMerchandise.quantity);
  //     return false;
  //   } else {
  //     console.log('quantity:', this.theMerchandise.quantity);
  //     return true;
  //   }
  // }


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
    this.allMerchandise();

  }

  addToCart(product, user) {
    // console.log('what is product: ', product, "and the user is: ", user);
    this.cartService.addToCart(product, user)
      .then(res => {
        this.myRouter.navigate(['/user', user._id, 'cart']);
      })
      .catch(err => console.log('error in add to cart: ', err));
  }



  ////////////////////////////////////////////////////////

  // addNew(id): void {
  //   this.merchandiseService.createComment(this.newComment).subscribe(foo => {
  //     this.newComment = {};
  //     console.log('yooooo', this.newComment);
  //     this.toggleForm();
  //   });
  //   // this.comments.push(newOne)
  //   // this.newComment.content = '';
  // }

  // addNew(): void {
  //   const newOne = { content: this.newComment.content };
  //   this.comments.push(newOne);
  //   this.newComment.content = '';
  //   this.toggleForm();
  //   console.log('--------------------COMMENTS-----------------', this.comments);
  // }



}
