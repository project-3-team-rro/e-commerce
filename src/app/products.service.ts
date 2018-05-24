import {Injectable} from '@angular/core';
import {Merchandise} from './classes/merchandise';
@Injectable()
export class ProductsService {
  public getProducts(): Merchandise[] {
    return this.products();
  }

  public getProduct(id: number): Merchandise {
    return this
      .products()
      .find((item: Merchandise) => {
        return item.id === id;
      });
  }

  private products(): Merchandise[] {
    return <Merchandise[]>[
      // <Product>{id: 1, name: 'Blue item', price: 123.09, colors: ['blue']},
      // <Product>{id: 2, name: 'Green and gray', price: 99.09, colors: ['green', 'gray']},
      // <Product>{id: 3, name: 'Green item', price: 99.09, colors: ['green']},
      // <Product>{id: 4, name: 'Blue and gray', price: 99.09, colors: ['blue', 'gray']},
      // <Product>{id: 5, name: 'Green and blue', price: 99.09, colors: ['green', 'blue']},
      // <Product>{id: 6, name: 'Green and blue', price: 99.09, colors: ['green', 'blue']},
      // <Product>{id: 7, name: 'Gray', price: 99.09, colors: ['gray']},
      // <Product>{id: 8, name: 'Blue', price: 99.09, colors: ['blue']},
      // <Product>{id: 9, name: 'All colors', price: 99.09, colors: ['gray', 'blue', 'green']},
    ];
  }
}
