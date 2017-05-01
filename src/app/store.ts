import * as home from './home/home.reducer';
import * as about from './about/about.reducer';
import * as posts from './posts-page/posts.reducer';

export function todos( state = [], action ) {
  return state;
}
export const rootReducer = {
  home: home.reducer,
  about: about.reducer,
  posts: posts.reducer,
  // todos: todos
}