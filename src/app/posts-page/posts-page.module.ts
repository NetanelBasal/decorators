import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostsPageComponent } from "./posts-page.component";
import { HttpModule } from "@angular/http";
import { PostsService } from "./posts.service";
import { PostsEffects } from "./posts.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    PostsRoutingModule,
    EffectsModule.run(PostsEffects)
  ],
  declarations: [PostsComponent, PostsPageComponent],
  providers: [PostsService]
})
export class PostsPageModule {
}
