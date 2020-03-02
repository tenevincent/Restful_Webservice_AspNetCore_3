import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Filter } from '../models/model/filter';
import { Supplier } from '../models/supplier.model';
import { Pagination } from '../models/model/pagination';
import { Observable } from 'rxjs';


const productsUrl = "/api/products";
const suppliersUrl = "/api/suppliers";

type productsMetadata = {
  data: Product[],
  categories: string[];
}



@Injectable({
  providedIn: 'root',
})
export class ProductsRepository {

  product: Product;
  products: Product[];
  suppliers: Supplier[] = [];
  filter: Filter = new Filter();
  categories: string[] = [];
  paginationObject = new Pagination();

  constructor(private http: HttpClient) {
    //this.filter.category = "soccer";
    this.filter.related = true;
     this.getProducts();
  }

  getProduct(id: number) {
    this.http.get<Product>(`${productsUrl}/${id}`)
      .subscribe(p => this.product = p);
  }

  getProductObs(id: number): Observable<Product> {
    return this.http.get<Product>(`${productsUrl}/${id}`);
  }



  getProducts() {
    let url = `${productsUrl}?related=${this.filter.related}`;
    if (this.filter.category) {
      url += `&category=${this.filter.category}`;
    }
    if (this.filter.search) {
      url += `&search=${this.filter.search}`;
    }
    url += "&metadata=true";

    this.http.get<productsMetadata>(url)
      .subscribe(md => {
        this.products = md.data;
        this.categories = md.categories;
      });
  }

  getSuppliers() {
    this.http.get<Supplier[]>(suppliersUrl)
      .subscribe(sups => this.suppliers = sups);
  }

  createProduct(prod: Product) {
    let data = {
      name: prod.name, category: prod.category,
      description: prod.description, price: prod.price,
      supplier: prod.supplier ? prod.supplier.supplierId : 0
    };

    this.http.post<number>(productsUrl, data)
      .subscribe(id => {
        prod.productId = id;
        this.products.push(prod);
      });
  }

  createProductAndSupplier(prod: Product, supp: Supplier) {
    let data = {
      name: supp.name, city: supp.city, state: supp.state
    };

    this.http.post<number>(suppliersUrl, data)
      .subscribe(id => {
        supp.supplierId = id;
        prod.supplier = supp;
        this.suppliers.push(supp);
        if (prod != null) {
          this.createProduct(prod);
        }
      });
  }

  replaceProduct(prod: Product) {
    let data = {
      name: prod.name, category: prod.category,
      description: prod.description, price: prod.price,
      supplier: prod.supplier ? prod.supplier.supplierId : 0
    };
    this.http.put(`${productsUrl}/${prod.productId}`, data)
      .subscribe(() => this.getProducts());
  }

  replaceSupplier(supp: Supplier) {
    let data = {
      name: supp.name, city: supp.city, state: supp.state
    };
    this.http.put(`${suppliersUrl}/${supp.supplierId}`, data)
      .subscribe(() => this.getProducts());
  }

  updateProduct(id: number, changes: Map<string, any>) {
    let patch = [];
    changes.forEach((value, key) =>
      patch.push({ op: "replace", path: key, value: value }));
    this.http.patch(`${productsUrl}/${id}`, patch)
      .subscribe(() => this.getProducts());
  }

  deleteProduct(id: number) {
    this.http.delete(`${productsUrl}/${id}`)
      .subscribe(() => this.getProducts());
  }

  deleteSupplier(id: number) {
    this.http.delete(`${suppliersUrl}/${id}`)
      .subscribe(() => {
        this.getProducts();
        this.getSuppliers();
      });
  }



}

