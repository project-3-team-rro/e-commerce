import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { MerchandiseService } from '../services/merchandise.service';
import { Router } from '@angular/router';
import { MerchandiseListComponent } from '../merchandise-list/merchandise-list.component';


@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	search: String = '';
	resultsArray: Array<any> = [];
	merchandise: Array<any> = [];

	constructor(private merchandiseList: MerchandiseListComponent, private merchandiseService: MerchandiseService) { }

	filterMerchandise(search) {
		console.log(this.search.toLocaleLowerCase());
		this.resultsArray = this.merchandiseList.allTheMerchandise.filter(product => {
			return product.name.toLowerCase().includes(this.search.toLowerCase());
		});

	}

	ngOnInit() {
		// this.merchandise = this.merchandiseList.allTheMerchandise;
		this.resultsArray = this.merchandiseList.allTheMerchandise;
	}
}


