import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
@Injectable()
export class MerchandiseService {

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getAllMerchandise() {
    return this.http.get('http://localhost:3000/api/merchandise')
      .map((res) => res.json());
  }

  getMerchandiseDetails(id) {
    return this.http.get(`http://localhost:3000/api/merchandise/${id}`)
      .map((res) => res.json());
  }

}
