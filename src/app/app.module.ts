import { BrowserModule } from '@angular/platform-browser';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MaterialModule} from './material.module';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { MerchandiseService } from './services/merchandise.service';
import { SearchComponent } from './search/search.component';
import { MerchandiseListComponent } from './merchandise-list/merchandise-list.component';
import { MerchandiseDetailsComponent } from './merchandise-details/merchandise-details.component';
// import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommentsComponent } from './comments/comments.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { IconModule } from 'angular-icon';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { LandingPageComponent } from './landing-page/landing-page.component';

import { NewCommentComponent } from './new-comment/new-comment.component';


const routes: Routes = [
	{ path: '', redirectTo: 'landing-page', pathMatch: 'full' },
	{ path: 'merchandise', component: MerchandiseListComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'merchandise/:id', component: MerchandiseDetailsComponent },
	// { path: 'user/:id/cart', component: ShoppingCartComponent },
	{ path: 'profile', component: UserProfileComponent },
	{ path: 'landing-page', component: LandingPageComponent }
];

@NgModule({

  declarations: [
    AppComponent,
    SearchComponent,
    MerchandiseListComponent,
    MerchandiseDetailsComponent,
    // ShoppingCartComponent,
    SignupComponent,
    LoginComponent,
    UserProfileComponent,
    NavBarComponent,
    FooterComponent,
    CommentsComponent,
    LandingPageComponent,
    NewCommentComponent,
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    IconModule,
    MatIconModule,
    MaterialModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],

  exports: [
    MaterialModule
  ],
  providers: [MerchandiseService, AuthService, CartService],
  bootstrap: [AppComponent]

})
export class AppModule { }
