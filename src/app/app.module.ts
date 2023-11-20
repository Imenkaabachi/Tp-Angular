import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DefaultImagePipe } from './pipes/default-image.pipe';

import { RainbowDirective } from './color/rainbow.directive';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeComponent } from './cvTech/liste/liste.component';
import { ItemComponent } from './cvTech/item/item.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { DefImagePipe } from './cvTech/def-image.pipe';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import {ROUTING} from "./app.routing";
import { HeaderComponent } from './header/header.component';
import { DetailPersonneComponent } from './cvTech/detail-personne/detail-personne.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { LoginComponent } from './login/login.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoginInterceptorProvider} from "./login.interceptor";
import {ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import { FilterByAgePipe } from './pipes/filter-by-age.pipe';
import { SearchComponent } from './cvTech/search/search.component';
import { ProductComponent } from './produit/product/product.component';
import {ToastModule} from "primeng/toast";
import { ProductContainerComponent } from './produit/product-container/product-container.component';
import { ProductItemComponent } from './produit/product-item/product-item.component';
import { ParentComponent } from './rxjs/parent/parent.component';
import { ChildComponent } from './rxjs/child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    DefaultImagePipe,
    RainbowDirective,
      CvComponent,
      ListeComponent,
      ItemComponent,
      DetailComponent,
      DefImagePipe,
      EmbaucheComponent,
      HeaderComponent,
      DetailPersonneComponent,
      AddCvComponent,
      DeleteCvComponent,
      LoginComponent,
      FilterByAgePipe,
      SearchComponent,
      ProductComponent,
      ProductContainerComponent,
      ProductItemComponent,
      ParentComponent,
      ChildComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTING,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      toastClass: 'toast-custom-style',
      timeOut: 3000,
      extendedTimeOut: 1000,
      progressBar: true,
    }),
    BrowserAnimationsModule,
    MatTabsModule,
    ToastModule,
  ],
  // providers: [LoginInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
