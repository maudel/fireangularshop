import { Component, OnInit, Host, ViewChild } from '@angular/core';
import {ProductService } from '../../services/product.service';
import { ProductFormComponent } from '../product-form/product-form.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productos:Array<any>=[]
  constructor(
    public ps:ProductService) {
       
    
   }
@ViewChild(ProductFormComponent, {static:true}) formulario:ProductFormComponent;
  ngOnInit(): void {
    this.ps.getProducts().subscribe(arg =>{
      console.log(arg)
      this.productos=arg});
  }
onedit(product){
  this.formulario.product=product;
  this.formulario.enviar=false;
}
ondelete(product){
this.ps.deleteProduct(product)
}
setMyStyles(productos) {
  let styles = {
    'padding.px':'5'
  };
  return styles;
}
}
