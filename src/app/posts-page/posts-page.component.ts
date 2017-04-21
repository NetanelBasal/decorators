import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getPosts, Post } from "./posts.reducer";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/pluck";

@Component({
  selector: 'app-posts-page',
  template: `
    <div class="container">
      <app-posts [posts]="posts$ | async"></app-posts>
    </div>
  `
})
export class PostsPageComponent implements OnInit {
  posts$ : Observable<Post[]>;

  constructor( private store : Store<any> ) {
    this.posts$ = store.select('posts').pluck('data');
  }

  ngOnInit() {
    this.store.dispatch(getPosts());
  }

}
