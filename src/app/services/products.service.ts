import {Injectable} from '@angular/core';
import {Product} from '../classes/product';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
@Injectable()
export class ProductsService {
  public getProducts(): Observable<Product[]> {
    return this.products();
  }

  public getProduct(id: number): Observable<Product> {
    return this
      .products()
      .map(_ => {
        return _.find((item: Product) => {
          return item.id === id;
        });
      });
  }

  private products(): Observable<Product[]> {
    return of(<Product[]>[
      <Product>{id: 1, name: 'Xiaomi Mi 9T ', price: 123.09, colors: ['blue'], details: "temo", picture: "https://img.zoommer.ge/images/thumbs/0102397_xiaomi-mi-9-global-version-6gb-ram-64gb-lte-blue_550.png"},
      <Product>{id: 2, name: 'Samsung Galaxy M30', price: 99.09, colors: ['green', 'gray'], picture: "https://img.zoommer.ge/images/thumbs/0099750_xiaomi-redmi-note-7-global-version-4gb-ram-64gb-lte-black_550.png"},
      <Product>{id: 3, name: 'Huawei P30 Pro', price: 99.09, colors: ['green'], picture: "https://img.zoommer.ge/images/thumbs/0101384_huawei-p30-lite-4gb-ram-128gb-lte-blue_550.png"},
      <Product>{id: 4, name: 'Xiaomi Redmi 7', price: 99.09, colors: ['blue', 'gray'], picture: "https://img.zoommer.ge/images/thumbs/0100637_xiaomi-redmi-7-global-version-3gb-ram-32gb-lte-black_550.png"},
      <Product>{id: 5, name: 'Samsung Galaxy A30 ', price: 99.09, colors: ['green', 'blue'], picture: "https://img.zoommer.ge/images/thumbs/0099794_samsung-galaxy-s10-8gb-ram-128gb-lte-g973fd-black_550.png"},
      <Product>{id: 6, name: 'Huawei P Smart', price: 99.09, colors: ['green', 'blue'], picture: "https://img.zoommer.ge/images/thumbs/0101055_huawei-p30-6gb-ram-128gb-lte-aurora-blue_550.png"},
      <Product>{id: 7, name: 'Nokia 3.1 Plus ', price: 99.09, colors: ['gray'], picture: "https://img.zoommer.ge/images/thumbs/0101027_nokia-9-pureview-6gb-ram-128gb-dual-sim-blue_550.png"},
      <Product>{id: 8, name: 'Honor 8C ', price: 99.09, colors: ['blue'], picture: "https://img.zoommer.ge/images/thumbs/0100242_honor-8c-3gb-ram-32gb-lte-blue_550.png"},
      <Product>{id: 9, name: 'Apple iPhone XS ', price: 99.09, colors: ['gray', 'blue', 'green'], picture: "https://img.zoommer.ge/images/thumbs/0094156_apple-iphone-6s-32gb-grey_550.png"},
    ]);
  }
}
