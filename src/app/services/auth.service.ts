import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
@Injectable()
export class AuthService {

  currentUser: any;
  temporaryUser: any;

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${environment.backendUrl}/api/signup`, user, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${environment.backendUrl}/api/login`, user, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.delete(`${environment.backendUrl}/api/logout`, { withCredentials: true })
      .map(res => {
        console.log('here');
        this.currentUser = null;
        res.json();
      })
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${environment.backendUrl}/api/loggedin`, { withCredentials: true })
      .map(res => {
        this.temporaryUser = res;
        this.currentUser = JSON.parse(this.temporaryUser._body);
        // this.currentUser = res.json();
        // console.log('res in the service: ', this.currentUser);
        return this.currentUser;
      })
      .catch(this.handleError);
  }

  update(user, id) {
    return this.http.post(`${environment.backendUrl}/api/updateprofile/${id}`, user, { withCredentials: true })
      .map(res => res.json())
      .catch(this.handleError);
  }

  // getUser() {
  //   return this.http.get(`${environment.backendUrl}/api/userInfo`, { withCredentials: true })
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }

  // ========================COMMENTS===============================
  getThreads() {
    return this.http.get(`${environment.backendUrl}/api/comments`)
      .map(res => res.json())
      .catch(this.handleError);
  }


  newThread(thread) {
    const options = {
      'Content-Type': 'application/json',
      'withCredentials': true
    };

    return this.http.post(`${environment.backendUrl}/api/comments`, thread, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

}
