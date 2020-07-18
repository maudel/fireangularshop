import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import {AngularMaterialModule} from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class ProductsModule { }
