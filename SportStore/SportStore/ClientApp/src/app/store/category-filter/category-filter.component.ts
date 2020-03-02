import { Component, OnInit } from '@angular/core';
import { NavigationServiceService } from 'src/app/repositories/navigation-service.service';

@Component({
  selector: 'store-categoryFlter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  constructor(public service: NavigationServiceService) { }


  ngOnInit() {
  }

}
