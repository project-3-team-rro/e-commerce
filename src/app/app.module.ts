import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { MerchandiseService } from './services/merchandise.service';
import { SearchComponent } from './search/search.component';
import { MerchandiseListComponent } from './merchandise-list/merchandise-list.component';
import { MerchandiseDetailsComponent } from './merchandise-details/merchandise-details.component';
<<<<<<< HEAD
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
=======
import { EditComponent } from './edit/edit.component';

>>>>>>> master

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'merchandise', component: MerchandiseListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'merchandise/:id', component: MerchandiseDetailsComponent },
  { path: 'user/:id/cart', component: ShoppingCartComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MerchandiseListComponent,
    MerchandiseDetailsComponent,
<<<<<<< HEAD
    ShoppingCartComponent,
    SignupComponent,
    LoginComponent
=======
    EditComponent,
>>>>>>> master
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MerchandiseService, AuthService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
