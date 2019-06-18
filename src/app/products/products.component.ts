import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from "./../store/market";

@Component({
  selector: 'app-products',
  template: `
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" *ngFor="let product of products">
            <div class="my-list">
                <img src="https://cdn2.gsmarena.com/vv/bigpic/lenovo-p2.jpg" alt="" />
                <h3>{{product.name}}</h3>
                <span>$</span>
                <span class="pull-right">{{product.price}}</span>
                <div class="offer">5%-იანი ფასდაკლების ბარათით გამოდის $ {{0.5 * product.price}}</div>
                <div class="detail">
                    <p>{{product.name}} </p>
                    <img src="https://cdn2.gsmarena.com/vv/bigpic/lenovo-p2.jpg" alt="" />
                    <a [routerLink]="['/product',product.id]" class="btn btn-info">დათვალიერება</a>
                </div>
            </div>    
  `,
  styles: [ ]
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS

  constructor() { }

  ngOnInit() {
  }

}
