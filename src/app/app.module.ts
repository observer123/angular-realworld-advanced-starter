import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutModule, AppRoutingModule, AuthModule, PostsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
