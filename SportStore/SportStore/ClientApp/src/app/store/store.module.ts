import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { RatingsComponent } from './ratings/ratings.component';
 



@NgModule({
  declarations: [ProductListComponent, PaginationComponent, CategoryFilterComponent, CategoryFilterComponent, CartSummaryComponent, ProductSelectionComponent, RatingsComponent],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
