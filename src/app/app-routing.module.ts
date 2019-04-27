import {
  NgModule, Component
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  MainComponent
} from './layout/main/main.component';
import {
  LoginComponent
} from './auth/login/login.component';
import { PostsComponent } from './posts/posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { EditorComponent } from './posts/editor/editor.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: '',
      redirectTo: 'posts',
      pathMatch: 'full'
    },
    {
      path: 'posts',
      component: PostsComponent
    },
    {
      path: 'post',
      redirectTo: 'posts',
      pathMatch: 'full'
    },
    {
      path: 'post/:id',
      component: PostComponent
    },
    {
      path: 'create',
      component: EditorComponent
    }
  ]
},
{
  path: 'login',
  component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
