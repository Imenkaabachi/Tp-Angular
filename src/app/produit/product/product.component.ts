import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {ProductService} from "../product.service";
import {ProductModel} from "../product.model";
import {MessageService} from "primeng/api";



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService],
})
export class ProductComponent {
  products$: Observable<ProductModel[]> = this.productService.products$;
  buttonDisabled: boolean = false;

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  onNoMoreProducts(){
    this.buttonDisabled = true;
    this.messageService.add({
      severity: 'info',
      summary: 'No more products',
      detail: 'There are no more products to load',
      key: 'br'
    });
  }

  loadMore(): void {
    this.productService.loadMore().pipe(
      tap(
        (isNoMoreProducts) => isNoMoreProducts&&this.onNoMoreProducts(),
      )
    ).subscribe();
  }

}
