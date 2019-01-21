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
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    alias: this.fb.array([
      this.fb.control('')
    ])
  });
  categoryForm = new FormGroup({
    name: new FormControl(''
    ),
    url: new FormControl(''
    ),
  });
  categories: Category[];
  constructor(private categoryService: CategoryService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.categoryService.getAllCategories()
      .subscribe(c => this.categories = c);
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  get alias() {
    return this.profileForm.get('alias') as FormArray;
  }

  addAlias() {
    this.alias.push(this.fb.control(''));
  }
}
