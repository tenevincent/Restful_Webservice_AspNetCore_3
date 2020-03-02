import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { RouterModule } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductTableComponent, ProductDetailsComponent, CategoryFilterComponent, EditProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
 
  ]
})
export class ProductModule { }
