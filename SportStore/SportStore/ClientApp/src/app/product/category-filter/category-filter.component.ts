import { Component, OnInit } from '@angular/core';
import { ProductsRepository } from 'src/app/repositories/products.repository';

@Component({
  selector: 'category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  public chessCategory = "chess";

    constructor(private repo: ProductsRepository) { }

    setCategory(category: string) {
        this.repo.filter.category = category;
        this.repo.getProducts();
    }

  ngOnInit() {
  }

}
