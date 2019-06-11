import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'spa-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input() public id: number;
  @Input() public name: string;
  @Input() public price: number;
  @Input() public currency: string;
  @Input() public size: number;
  @Input() public picture: string;
  @Input() public details: string;
  @Input() public description: string;



  public getCurrency(): string {
    return 'USD';
  }
}
