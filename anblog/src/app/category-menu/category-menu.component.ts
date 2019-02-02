import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {
  @Input() category: Category;
  @Input() allCategories: Category[];
  selectFlag: boolean = false;
  subCategories: Category[];
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
  }

  onSelect() {
    this.selectFlag = true;
    this.categoryService.getAllSubCategories(this.allCategories, this.category)
      .subscribe(c => {
        this.subCategories = c;
      });
  }

  onUnSelect() {
    this.selectFlag = false;
  }

}
