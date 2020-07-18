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
  this.ps.updateProduct(this.product);
  this.product = {};
  this.enviar = true;
}

uploadFile(event) {
  const file = event.target.files[0];
  
  const name = file.name;
  const fileRef = this.storage.ref(name);
  const task = this.storage.upload(name, file);
  task.snapshotChanges()
  .pipe(
    finalize(() => {
      this.image$ = fileRef.getDownloadURL();
      this.image$.subscribe(url => {
        console.log(url);
        this.product.image = url;
      });
    })
  )
  .subscribe();
}
}


