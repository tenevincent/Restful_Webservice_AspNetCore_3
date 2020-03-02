import { Component, OnInit } from '@angular/core';
import { ProductsRepository } from 'src/app/repositories/products.repository';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {


  showEditProductPopUp: boolean;
  showDeletePopUp: boolean;

  formEditProduct: FormGroup;


  constructor(private formbuilder: FormBuilder, private repo: ProductsRepository, private router: Router) {



  }

  ngOnInit(): void {
    this.buildFormControls(this.formbuilder);
  }


  private buildFormControls(formbuilder: FormBuilder) {
    this.formEditProduct = formbuilder.group({
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      productPrice: ['', Validators.required]
    });
  }

  get products(): Product[] {
    return this.repo.products;
  }

  get product(): Product {
    return this.repo.product;
  }

  submitDeleteProduct(id: number) {

    this.showDeletePopUp = false;
    this.repo.deleteProduct(id);

  }


  selectProduct(id: number) {
    this.repo.getProduct(id);
    this.router.navigateByUrl("/detail");
  }



  editProduct(id: number): void {

 

    this.repo.getProductObs(id).subscribe(
      inProduct => {
        this.formEditProduct.controls["productName"].setValue(inProduct.name);
        this.formEditProduct.controls["productCategory"].setValue(inProduct.category);
        this.formEditProduct.controls["productPrice"].setValue(inProduct.price);
        // set the current product
        this.repo.getProduct(id);
      }
    );

    this.showEditProductPopUp = true;
  }

  showDeleteProduct(id: number): void {
    this.repo.getProduct(id);
    this.showDeletePopUp = true;
  }




  submitUpdateProduct(): void {

    var newProduct: Product = this.product;
    newProduct.name = this.formEditProduct.controls["productName"].value as string;
    newProduct.category = this.formEditProduct.controls["productCategory"].value as string;
    newProduct.price = this.formEditProduct.controls["productPrice"].value as number;


    this.showEditProductPopUp = false;
    this.repo.replaceProduct(newProduct);
    this.router.navigate(["productsList"]);
  }



  closePopUp() {
    this.showEditProductPopUp = false;
  }


  onCloseDeletePopUp() {
    this.showDeletePopUp = false;
  }


}
