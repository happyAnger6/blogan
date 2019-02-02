import { Component, OnInit } from '@angular/core';

import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  allCategories: Category[];
  topCategories: Category[];
  constructor(
    private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.categoryService.getAllCategories()
      .subscribe(c => {
        this.allCategories = c;
        this.categoryService.getAllCategoriesByLevel(this.allCategories, 1)
          .subscribe(c => {
            this.topCategories = c;
          });
      });
  }

}
