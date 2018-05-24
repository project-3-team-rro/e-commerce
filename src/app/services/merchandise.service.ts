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
    return this.http.get('http://localhost:3000/api/merchandise', { withCredentials: true })
      .map((res) => res.json());
  }

  getMerchandiseDetails(id) {
    return this.http.get(`http://localhost:3000/api/merchandise/${id}`, { withCredentials: true })
      .map((res) => res.json());
  }


  deleteItem(id) {
    return this.http.post(`http://localhost:3000/api/merchandise/delete/${id}`, {}, { withCredentials: true })
      .map(res => res.json());
  }

  updateItem(id, updates) {
    return this.http.post(`http://localhost:3000/api/merchandise/update/${id}`, updates, { withCredentials: true })
      .map(res => res.json());
  }

  createItem(wholeObject) {
    return this.http.post(`http://localhost:3000/api/merchandise/create`, wholeObject, { withCredentials: true })
      .map(res => res.json());
  }

}
