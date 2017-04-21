import { Action } from "@ngrx/store";
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL';

export interface Post {
  id : number;
  title : string;
  description : string;
}

interface State {
  data : Post[];
  isFetching : boolean;
  error : string | null;
}

const initialState : State = {
  data: [],
  isFetching: false,
  error: null
}

export function reducer( state : State = initialState, action : Action ) : State {
  switch( action.type ) {
    case GET_POSTS:
      return { ...state, isFetching: true };

    case GET_POSTS_SUCCESS:
      return { ...state, isFetching: false, data: action.payload }

    case GET_POSTS_FAIL:
      return { ...state, isFetching: false, error: action.payload }

    default:
      return state;
  }
}

export function getPosts() {
  return {
    type: GET_POSTS
  }
}

export function getPostsSuccess( posts ) {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts
  }
}
export function getPostsFail( error ) {
  return {
    type: GET_POSTS_FAIL,
    payload: error
  }
}