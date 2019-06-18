import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from "./../store/market";
import { Product } from "./../store/product.model"
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import * as Cart from "./../store/actions";

@Component({
  selector: 'app-product',
  template: 
  `
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="my-list">
          <img src="https://cdn2.gsmarena.com/vv/bigpic/lenovo-p2.jpg" alt="" />
          <h3>{{product.name}}</h3>
          <span>$</span>
          <span class="pull-right">{{product.price}}</span>
          <div class="offer">
            5%-იანი ფასდაკლების ბარათით გამოდის $ {{0.5 * product.price}}
          </div>
          <div class="offer">
            <a (click)="addToCart(product)" class="btn btn-info">ყუთში დამატება</a>
          </div>
      </div>
    </div>
  `,
  styles: [ ]
})
export class ProductComponent implements OnInit {

  product:Product

  constructor(private route: ActivatedRoute, private store: Store<any>) { }

  ngOnInit() {
    this.route.params.subscribe((p)=>{
        let id = p['id']
        let result = Array.prototype.filter.call(PRODUCTS,(v)=>v.id == id)
        if (result.length > 0) {
          this.product = result[0]
        }
    })
  }

  addToCart(product) {
        this.store.dispatch(new Cart.AddProduct(product))
  }

}
