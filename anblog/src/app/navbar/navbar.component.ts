import { Component, OnInit } from '@angular/core';

import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  allCategories: Category[];
  topCategories: Category[];
  user:User;
  constructor(
    private categoryService: CategoryService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.authService.currentUser
      .subscribe(u => {
        this.user = u;
      });

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
