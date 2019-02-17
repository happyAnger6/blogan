import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  categories: Category[];
  category: Category;
  editFlag: boolean = false;
  editItem: number = 0;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories()
      .subscribe(c => {
        this.categories = c;
      });
  }

  onDeleteItem(c_id: string) {
    this.categories = this.categories.filter(item => item._id.$oid != c_id);
  }

  onEdit(category, i) {
    this.editFlag = true;
    this.category = category;
    this.editItem = i;
  }

  onDelete(category) {
    this.editFlag = false;
    this.categoryService.deleteCategory(category)
      .subscribe(c => {
        this.categoryService.delAndPublishCategory(category);
      });
  }
  onSave() {
    this.editFlag = false;
    this.categoryService.updateCategory(this.category)
      .subscribe();
  }

  onCancel() {
    this.editFlag = false;
  }

}
