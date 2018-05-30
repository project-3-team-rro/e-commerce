import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { MerchandiseService } from '../services/merchandise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private merchandiseService: MerchandiseService, private authService: AuthService,
    private router: Router,
    private appComponent: AppComponent,
  ) { }

  ngOnInit() {
  }

}
