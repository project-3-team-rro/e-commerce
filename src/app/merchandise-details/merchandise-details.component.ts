import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { MerchandiseService } from '../services/merchandise.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-merchandise-details',
  templateUrl: './merchandise-details.component.html',
  styleUrls: ['./merchandise-details.component.css']
})
export class MerchandiseDetailsComponent implements OnInit {
  theMerchandise: any = {};
  theUpdate: any = {};
  isFormShowing: Boolean = false;

  constructor(private authService: AuthService,
    private merchandiseService: MerchandiseService,
    private route: ActivatedRoute) { }

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
    this.route.params
      .subscribe(theParams => {
        const theID = theParams['id'];
        this.getTheItem(theID);
      });

  }

}
