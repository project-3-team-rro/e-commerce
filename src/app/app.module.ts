import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { MerchandiseService } from './services/merchandise.service';
import { SearchComponent } from './search/search.component';
import { MerchandiseListComponent } from './merchandise-list/merchandise-list.component';
import { MerchandiseDetailsComponent } from './merchandise-details/merchandise-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'merchandise', component: MerchandiseListComponent },
  { path: 'merchandise/:id', component: MerchandiseDetailsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MerchandiseListComponent,
    MerchandiseDetailsComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MerchandiseService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
