import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-admin-category-new',
  templateUrl: './admin-category-new.component.html',
  styleUrls: ['./admin-category-new.component.css']
})
export class AdminCategoryNewComponent implements OnInit {
  newCategory: Category = new Category();
  ckeditorContent: string;
  mySchema = require('./new_category_form.json');
  categories: Category[];
  constructor(private categoryService: CategoryService,
              ) {
  }

  updateSchema() {
    let fatherArray: any[] = [];
    for (let c of this.categories){
      fatherArray.push({
        "description": c.name,
        "enum": [
          c.name
        ]
      })
    };
    this.mySchema.properties.father.oneOf = fatherArray;
  }

  ngOnInit() {
    this.categoryService.getAllCategories()
      .subscribe(c => {
        this.categories = c;
        this.updateSchema();
      });
  }

  onValid(e: any) {
    console.log(e);
  }

  iType2ModelType(t: string): number{
    if(t == "chapter")
      return 1;
    return 0;
  }

  iFlag2ModelFlag(t: string): number {
    if (t == "show")
      return 1;
    return 0;
  }

  getCategoryIdByName(categories: Category[], name: string): string{
    for (let c of categories) {
      if (c.name == name)
        return c._id;
    }
  }

  val2category(value:any, category: Category) {
    category.name = value.name;
    category.type = this.iType2ModelType(value.type);
    category.father = this.getCategoryIdByName(this.categories, value.father);
    category.url = value.url;
    category.level = value.level;
    category.showFlag = this.iFlag2ModelFlag(value.flag);
  }

  addCategory(value: any) {
    this.val2category(value, this.newCategory);
    this.categoryService.addCategory(this.newCategory)
      .subscribe(category => {
        this.categories.push(category);
        this.updateSchema();
      });
  }

}
