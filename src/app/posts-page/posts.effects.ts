import { PostsService } from "./posts.service";
import { Actions, Effect } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { GET_POSTS, getPostsFail, getPostsSuccess } from "./posts.reducer";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/debounceTime";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PostsEffects {
  constructor( private postsService : PostsService,
               private actions$ : Actions ) {
  }

  @Effect() posts$ = this.actions$
    .ofType(GET_POSTS)
    .debounceTime(400)
    .switchMap(_ => this.postsService.get()
      .map(posts => getPostsSuccess(posts))
      .catch(error => Observable.of(getPostsFail(error)))
    );
}