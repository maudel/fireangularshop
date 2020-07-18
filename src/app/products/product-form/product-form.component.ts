import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../core/services/product.service';
import { Product } from '../../core/models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product = {} as Product;
  enviar = true;
  image$: Observable<any>;
  form: FormGroup;

  constructor(private ps: ProductService,
              private storage: AngularFireStorage

    ) { }

  ngOnInit(): void {

  }
addProduct() {
  this.ps.addProduct(this.product);
  this.product = {};
}
actualizar() {
  console.log('actualiza')
}

uploadFile(event) {
  console.log('sube imagen')
}
}


