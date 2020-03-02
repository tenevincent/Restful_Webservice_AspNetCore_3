import { Component, OnInit } from '@angular/core';
import { ProductsRepository } from 'src/app/repositories/products.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  constructor(private repo: ProductsRepository,
    router: Router,
    activeRoute: ActivatedRoute) {

    let id = Number.parseInt(activeRoute.snapshot.params["id"]);
    if (id) {
      this.repo.getProduct(id);
    } else {
      router.navigateByUrl("productsList");
    }
  }

  get product(): Product {
    return this.repo.product;
  }

  ngOnInit() {
  }

}
