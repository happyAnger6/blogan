import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-admin-category-item',
  templateUrl: './admin-category-item.component.html',
  styleUrls: ['./admin-category-item.component.css']
})
export class AdminCategoryItemComponent implements OnInit {
  @Input() category: Category;
  @Output() deleteFlag: EventEmitter<string> = new EventEmitter();
  editFlag: boolean = false;
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
  }

  onEdit() {
    this.editFlag = true;
  }

  onDelete() {
    this.editFlag = false;
    console.log(this.category._id);
    let _id: string = this.category._id.$oid;
    this.categoryService.deleteCategory(this.category)
      .subscribe(c => {
        this.deleteFlag.emit(_id);
        this.categoryService.delAndPublishCategory(this.category);
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
