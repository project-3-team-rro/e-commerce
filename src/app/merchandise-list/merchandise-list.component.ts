import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { MerchandiseService } from '../services/merchandise.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-merchandise-list',
  templateUrl: './merchandise-list.component.html',
  styleUrls: ['./merchandise-list.component.css']
})
export class MerchandiseListComponent implements OnInit {

  allTheMerchandise: Array<any> = [];

  constructor(private merchandiseService: MerchandiseService, private authService: AuthService,
    private router: Router) { }

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
  ngOnInit() {
    this.allMerchandise();
  }

}
