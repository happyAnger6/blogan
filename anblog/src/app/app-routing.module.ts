import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { NoPageComponent } from './no-page/no-page.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: 'post/detail/:id', component: PostDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NoPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
