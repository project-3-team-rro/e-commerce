import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
@Injectable()
export class AuthService {

  currentUser: any;
  temporaryUser: any;

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/api/signup`, user, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`http://localhost:3000/api/login`, user, { withCredentials: true })
      .map(res => {
        this.temporaryUser = res;
        this.currentUser = JSON.parse(this.temporaryUser._body);
        res.json();
      })
      .catch(this.handleError);
  }

  logout() {
    return this.http.delete(`http://localhost:3000/api/logout`, { withCredentials: true })
      .map(res => {
        console.log('here');
        this.currentUser = null;
        res.json();
      })
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/loggedin`, { withCredentials: true })
      .map(res => {
        this.temporaryUser = res;
        this.currentUser = JSON.parse(this.temporaryUser._body);
        // this.currentUser = res.json();
        // console.log('res in the service: ', this.currentUser);
        res.json();
      })
      .catch(this.handleError);
  }

  update(user, id) {
    return this.http.post(`http://localhost:3000/api/updateprofile/${id}`, user, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }

  // getUser() {
  //   return this.http.get(`http://localhost:3000/api/userInfo`, { withCredentials: true })
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }

}
