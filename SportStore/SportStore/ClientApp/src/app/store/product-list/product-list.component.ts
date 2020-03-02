import { Component, OnInit } from '@angular/core';
import { ProductsRepository } from 'src/app/repositories/products.repository';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'store-productList',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private repo: ProductsRepository) { }

  get products(): Product[] {
      if (this.repo.products != null && this.repo.products.length > 0) {
          let pageIndex = (this.repo.paginationObject.currentPage - 1)
              * this.repo.paginationObject.productsPerPage;
          return this.repo.products.slice(pageIndex,
              pageIndex + this.repo.paginationObject.productsPerPage);
      }
  }

  ngOnInit() {
  }

}
