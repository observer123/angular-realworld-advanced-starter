import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { PostsComponent } from './posts/posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { EditorComponent } from './posts/editor/editor.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { // 設計lazy loading時, 空路由(path: '')要放在下面, 不然部分比對時會被比對到
    path: '',
    component: MainComponent,
    loadChildren: './posts/posts.module#PostsModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
