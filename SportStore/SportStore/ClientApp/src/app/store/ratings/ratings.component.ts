import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'store-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  @Input()
  product: Product;

  get stars(): boolean[] {
    if (this.product != null && this.product.ratings != null) {
      let total = this.product.ratings.map(r => r.stars)
        .reduce((prev, curr) => prev + curr, 0);
      let count = Math.round(total / this.product.ratings.length);
      return Array(5).fill(false).map((value, index) => {
        return index < count;
      });
    } else {
      return [];
    }
  }

  ngOnInit() {
  }

}
