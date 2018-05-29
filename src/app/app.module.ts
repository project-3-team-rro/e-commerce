import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { UserProfileComponent } from './user-profile/user-profile.component';
// import { CommentsComponent } from './comments/comments.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule } from 'angular-icon';
import {MatIconModule} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';




const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'merchandise', component: MerchandiseListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'merchandise/:id', component: MerchandiseDetailsComponent },
  { path: 'user/:id/cart', component: ShoppingCartComponent },
  { path: 'profile', component: UserProfileComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MerchandiseListComponent,
    MerchandiseDetailsComponent,
    ShoppingCartComponent,
    SignupComponent,
    LoginComponent,
    UserProfileComponent,

    // CommentsComponent,
    NavBarComponent,
    FooterComponent


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
    MatIconModule
  ],
  providers: [MerchandiseService, AuthService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
