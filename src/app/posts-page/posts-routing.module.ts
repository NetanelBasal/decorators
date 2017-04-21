import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsPageComponent } from "./posts-page.component";

const routes : Routes = [
  {
    path: '',
    component: PostsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
