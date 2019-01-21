import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators} from '@angular/forms';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  newCategory: Category;
  ckeditorContent: string;
  mySchema = {
    "properties": {
      "email": {
        "type": "string",
        "description": "email",
        "format": "email"
      },
      "password": {
        "type": "string",
        "description": "Password",
        "widget": "password"
      },
      "post":{
        "type": "string",
        "description": "content",
        "widget": "tinymce"
      },
      "rememberMe": {
        "type": "boolean",
        "default": false,
        "description": "Remember me"
      }
    },
    "required": ["email","password","rememberMe"]
  };
  categoryForm = new FormGroup({
    name: new FormControl(''
    ),
    url: new FormControl(''
    ),
  });
  categories: Category[];
  constructor(private categoryService: CategoryService,
              private fb: FormBuilder
              ) {
  }

  ngOnInit() {
    this.categoryService.getAllCategories()
      .subscribe(c => this.categories = c);
  }

}
