import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import { EffectsRunner, EffectsTestingModule } from "@ngrx/effects/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { PostsEffects } from "./posts.effects";
import { PostsService } from "./posts.service";
import { getPosts, getPostsFail, getPostsSuccess } from "app/posts-page/posts.reducer";
import { Observable } from "rxjs/Observable";

describe('PostsEffects', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      PostsEffects,
      {
        provide: PostsService,
        useValue: jasmine.createSpyObj('postsService', ['getPosts'])
      }
    ]
  }));

  function setup() {
    return {
      runner: TestBed.get(EffectsRunner),
      postsEffects: TestBed.get(PostsEffects),
      postsService: TestBed.get(PostsService)
    }
  }

  describe('posts$', () => {

    it('should retrun a GET_POSTS_SUCCESS action, on success', function () {
      const postsToReturn = [{ id: 1 }];

      const expectedResult = getPostsSuccess(postsToReturn);

      const { postsService, postsEffects, runner } = setup();

      postsService.getPosts.and.returnValue(Observable.of({ json: () => postsToReturn }));

      runner.queue(getPosts());
      postsEffects.posts$.subscribe(result => {
        expect(result).toEqual(expectedResult);
      });
    });

    // it('should return a GET_POSTS_FAIL action, on error', function () {
    //   const expectedResult = getPostsFail('error');
    //
    //   const { postsService, postsEffects, runner } = setup();
    //
    //   postsService.getPosts.and.returnValue(Observable.throw('error'));
    //   runner.queue(getPosts());
    //
    //   postsEffects.posts$.subscribe(result => {
    //     expect(result).toEqual(expectedResult);
    //   });
    // });

    it('should return a GET_POSTS_FAIL action, on error, after the de-bounce', fakeAsync(function () {
      const expectedResult = getPostsFail('error');
      const { postsService, postsEffects, runner } = setup();
      let result = null;

      postsService.getPosts.and.returnValue(Observable.throw('error'));
      runner.queue(getPosts());

      postsEffects.posts$.subscribe(_result => result = _result);
      tick(399);
      expect(result).toEqual(null);
      tick(400);
      expect(result).toEqual(expectedResult);

    }));

  });

});