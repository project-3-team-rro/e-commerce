import { Component, OnInit } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { IconModule } from 'angular-icon';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MerchandiseService } from '../services/merchandise.service';
import { SearchComponent } from '../search/search.component';


declare var jquery: any;
declare var $: any;
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

  form: Boolean = true;
  theMerchandise: any = {};
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private authService: AuthService,
    private myRouter: Router, private route: ActivatedRoute, private merchandiseService: MerchandiseService) {
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

  }

  logout() {
    this.authService.logout()
      .subscribe(
        () => {
          this.user = null;
          this.formInfo = {};
        },
        (err) => this.error = err
      );
    this.form = true;
  }

}
