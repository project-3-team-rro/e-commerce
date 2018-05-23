import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { MerchandiseService } from './services/merchandise.service';
import { SearchComponent } from './search/search.component';
import { MerchandiseListComponent } from './merchandise-list/merchandise-list.component';
import { MerchandiseDetailsComponent } from './merchandise-details/merchandise-details.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'merchandise', component: MerchandiseListComponent },
  { path: 'merchandise/:id', component: MerchandiseDetailsComponent },
];
=======
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from "./services/auth.service";
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes : Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  }
]
>>>>>>> Working on user profile


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SearchComponent,
    MerchandiseListComponent,
    MerchandiseDetailsComponent,
    EditComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
=======
    UserProfileComponent
  ],
  imports: [
  HttpModule,
  BrowserModule,
  FormsModule,
  RouterModule.forRoot(routes)
>>>>>>> Working on user profile
  ],
  providers: [MerchandiseService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
