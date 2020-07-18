import { Component, OnInit, Host, ViewChild } from '@angular/core';
import {ProductService } from '../../core/services/product.service';
import { ProductFormComponent } from '../product-form/product-form.component';
import { Product } from 'src/app/core/models/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productos: Array<Product> = [];
  constructor(
    public ps: ProductService) {


   }
@ViewChild(ProductFormComponent, {static: true}) formulario: ProductFormComponent;
  ngOnInit(): void {
    this.ps.getProducts().subscribe(arg => {
      console.log(arg);
      this.productos = arg; });
  }
onedit(product) {
  this.formulario.product = product;
  this.formulario.enviar = false;
}
ondelete(product) {
this.ps.deleteProduct(product);
}
setMyStyles(productos) {
  const styles = {
    'padding.px': '5'
  };
  return styles;
}
}
