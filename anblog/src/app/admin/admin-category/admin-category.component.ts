import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  tabFlag: number = 0;
  constructor(){}

  ngOnInit() {
  }

  onSelectTab(tabFlag) {
    this.tabFlag = tabFlag;
  }

}
