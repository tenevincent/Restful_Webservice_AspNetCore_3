import { Component, OnInit } from '@angular/core';
import { ProductsRepository } from 'src/app/repositories/products.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {


  formEditProduct: FormGroup;



  constructor(private formbuilder: FormBuilder, private repo: ProductsRepository, private router: Router, private activeRoute: ActivatedRoute) {


    this.formEditProduct = formbuilder.group({
      productName: [''],
      productCategory: [this.product.category],
      productPrice: [this.product.price]
    })

  }



  ngOnInit() {

    let id = Number.parseInt(this.activeRoute.snapshot.params["id"]);
    if (id) {
      this.repo.getProduct(id);
    } else {
      this.router.navigateByUrl("/");
    }

  }

  editProduct() {
    this.repo.replaceProduct(this.repo.product);

    this.router.navigate([""]);
  }

  get product(): Product {
    return this.repo.product;
  }


}
