import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSelectionComponent } from './store/product-selection/product-selection.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductTableComponent } from './product/product-table/product-table.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

const routes: Routes = [
  { path: "productsList", component: ProductTableComponent },
  { path: "detail", component: ProductDetailsComponent },
  { path: "detail/:id", component: ProductDetailsComponent }, 
  { path: "store/:category/:page", component: ProductSelectionComponent },
  { path: "store/:categoryOrPage", component: ProductSelectionComponent },
  { path: "store", component: ProductSelectionComponent },
  { path: "", redirectTo: "/store", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
