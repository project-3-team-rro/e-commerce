import { Injectable } from '@angular/core';
import { Merchandise } from '../classes/merchandise';
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
import { of } from 'rxjs/observable/of';

import { Http } from '@angular/http';

@Injectable()
export class CartService {
  private itemsInCartSubject: BehaviorSubject<Merchandise[]> = new BehaviorSubject([]);
  public cartForCheckout = [];
  public cartTotalPrice: Number;

  constructor(private myHttp: Http) {
    // this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(product, user) {
    const ids = { prodId: product._id, userId: user._id };
    console.log('ids in the service: ', ids);
    return this.myHttp.post(`http://localhost:3000/api/cart`, ids)
      .toPromise()
      .then(res => res.json());
    // this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  getTheCartContent(userId) {
    return this.myHttp.get(`http://localhost:3000/api/user/${userId}/cart`, { withCredentials: true })
      .toPromise()
      .then(res => res.json());
  }

  // public removeFromCart(item: Merchandise) {
  //   const currentItems = [...this.itemsInCart];
  //   const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
  //   this.itemsInCartSubject.next(itemsWithoutRemoved);
  // }

  public getItems(): Observable<Merchandise[]> {
    return this.itemsInCartSubject.asObservable();
  }


  // public getTotalAmount(): Observable<number> {
  //   return this.itemsInCartSubject.map((items: Merchandise[]) => {
  //     return items.reduce((prev, curr: Merchandise) => {
  //       return prev + curr.price;
  //     }, 0);
  //   });
  // }
  // public getTotalAmount(): Observable<number> {
  //   return this.itemsInCartSubject.map((items: Merchandise[]) => {
  //     return items.reduce((prev, curr: Merchandise) => {
  //       return prev + curr.price;
  //     }, 0);
  //   });
  // }
}

