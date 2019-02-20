import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  subCategories: Category[];
  curTopCategory: Category = null;
  curSubCategory: Category = null;
  user: User;
  constructor(
    private categoryService: CategoryService,
    private authService: AuthService,
    private route: Router
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
        this.categoryService.getAllCategoriesByLevel( 1)
          .subscribe(c => {
            this.topCategories = c;
            for (let cate of this.topCategories) {
              this.categoryService.getSubCategory(cate._id.$oid)
                .subscribe(sub => {
                  cate.subCategories = sub;
                });
            }
          });
      });
  }

  onSelectTopCategory(category: Category) {
    this.curTopCategory = category;
    this.categoryService.getSubCategory(category._id.$oid)
      .subscribe(c => {
        this.subCategories = c;
      });
    this.route.navigate(['/post/category', category._id.$oid]);
  }

  onSelectSubCategory(category: Category) {
    this.curSubCategory = category;
    this.route.navigate(['/post/category', category._id.$oid]);
  }

  onEnterCategory(id: string) {
      this.categoryService.getSubCategory(id)
        .subscribe(c => {
          this.subCategories = c;
        });
  }

  onLeaveCategory(id: string) {
    this.subCategories = null;
  }

}
