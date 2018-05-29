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
    // private merchandiseDetailsComponent: MerchandiseDetailsComponent
  ) { }


  allMerchandise(): any {
    // console.log('all merchandise');
    this.merchandiseService.getAllMerchandise().subscribe(merchandise => {
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
    this.user = this.appComponent.user;
    console.log(this.allMerchandise);
    console.log('-----------');
  }


}
