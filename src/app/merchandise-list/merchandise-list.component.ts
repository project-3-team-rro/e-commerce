import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { MerchandiseService } from '../services/merchandise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
// import { MerchandiseDetailsComponent } from '../merchandise-details/merchandise-details.component';

@Component({
  selector: 'app-merchandise-list',
  templateUrl: './merchandise-list.component.html',
  styleUrls: ['./merchandise-list.component.css']
})

export class MerchandiseListComponent implements OnInit {

  user: any;
  allTheMerchandise: Array<any> = [];
  newItem: any = { name: '', picture: '', price: '', new: '', quantity: 0, description: '' };
  isFormShowing: Boolean = false;


  constructor(
    private merchandiseService: MerchandiseService, private authService: AuthService,
    private router: Router,
    private appComponent: AppComponent,
    private route: ActivatedRoute,
    // private merchandiseDetailsComponent: MerchandiseDetailsComponent
  ) { }


  allMerchandise() {
    // console.log('all merchandise');
    this.merchandiseService.getAllMerchandise().subscribe(merchandise => {
      console.log('=-=-=-=-=-=--=-=', merchandise);
      this.allTheMerchandise = merchandise;
    });
  }

  deleteItem(id) {
    this.merchandiseService.deleteItem(id)
      .subscribe(() => {
        this.allMerchandise();
      });
  }


  addNewItem() {
    this.merchandiseService.createItem(this.newItem).subscribe(foo => {
      this.newItem = {};
      this.allMerchandise();
    });
    this.isFormShowing = false;
  }


  toggleForm() {
    this.isFormShowing = !this.isFormShowing;
  }



  ngOnInit() {
    this.allMerchandise();
    // this.user = this.appComponent.user;
    console.log(this.allMerchandise);
    console.log('-----------');
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
  //  this.route.params
  //    .subscribe(theParams => {
  //      const theID = theParams['id'];
  //      this.getTheItem(theID);
  //    });
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


}
