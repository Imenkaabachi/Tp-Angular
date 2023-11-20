import { Injectable } from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {ProductModel} from "./product.model";
import {Store} from "./store";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private link="https://dummyjson.com/products";
  pageLength = 12;

  private store = new Store<ProductModel[]>([]);
  products$ = this.store.select((products) => products);

  constructor(
    private httpClient: HttpClient
  ) {
    this.initialize([]);
  }

  find(skip: number, limit: number): Observable<ProductModel[]> {
    const url = this.link+`?skip=${skip}&limit=${limit}`;
    return this.httpClient.get<ProductModel[]>(url);
  }


  getAllProducts():Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>(this.link);
  }

  initialize(initialProds: ProductModel[]): void {
    this.find(0, this.pageLength)
      .pipe(
        catchError(async (_) => initialProds)
      )
      .subscribe((products) => {
        this.store.update((_) => products);
      });
  }


  loadMore(): Observable<boolean> {
    const oldCount = this.store.value.length;
    return this.find(oldCount,this.pageLength)
      .pipe(
        map((products) =>{
          if(products.length === 0){
            return true;
          }
          this.store.update((currentProducts) => [
            ...currentProducts,
            ...products,
          ])
          return false
        }),
        catchError(async (_) =>{
          this.store.update((_) => [])
          return true
        })
      )
  }

}
