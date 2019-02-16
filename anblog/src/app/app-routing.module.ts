import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { NoPageComponent } from './no-page/no-page.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CategoryPostsComponent } from './components/category-posts/category-posts.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './components/auth/auth.component';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'post/detail/:id', component: PostDetailComponent },
  { path: 'post/category/:id', component: CategoryPostsComponent},
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
