import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getPosts, Post } from "./posts.reducer";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/pluck";
import { NgLog } from "../angular-events-logger";
import {  PageTracking } from "../visit-page";
import { format } from "../prop";

@Component({
  selector: 'app-posts-page',
  template: `
    <div class="container">
      <app-posts [posts]="posts$ | async"></app-posts>
    </div>
  `
})
@PageTracking('blog')
@NgLog()
export class PostsPageComponent implements OnInit {
  posts$ : Observable<Post[]> = this.store.select('posts').pluck('data')
  @format
  a: string = 'hello';

  constructor( private store : Store<any> ) {
  }

  ngOnInit() {
    this.store.dispatch(getPosts());
  }

}
