import { Component, OnInit } from '@angular/core';
import { MerchandiseService } from '../services/merchandise.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  allTheMerchandise: Array<any> = [];
  newItem: any = { name: '', picture: '', price: '', new: '', quantity: 0, description: '' };
  isFormShowing: Boolean = false;

  constructor(private merchandiseService: MerchandiseService) { }

  ngOnInit() {
  }

  allMerchandise(): any {
    // console.log('all merchandise');
    this.merchandiseService.getAllMerchandise().subscribe(merchandise => {
      this.allTheMerchandise = merchandise;
    });
  }

  addNewItem() {
    this.merchandiseService.createItem(this.newItem).subscribe(foo => {
      this.newItem = {};
      this.allMerchandise();
    });
    this.isFormShowing = false;
    location.reload();
  }


  toggleForm() {
    this.isFormShowing = !this.isFormShowing;
  }



}
