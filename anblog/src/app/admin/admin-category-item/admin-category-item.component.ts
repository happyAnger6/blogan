import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-admin-category-item',
  templateUrl: './admin-category-item.component.html',
  styleUrls: ['./admin-category-item.component.css']
})
export class AdminCategoryItemComponent implements OnInit {
  @Input() category: Category;
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
  }

}
