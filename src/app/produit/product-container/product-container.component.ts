import {Component, Input} from '@angular/core';
import {ProductModel} from "../product.model";

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent {
  @Input() products: ProductModel[] = [];
}
