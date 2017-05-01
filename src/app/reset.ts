export const LOG_OUT = 'LOG_OUT';
/**
 *
 * @param reducer
 * @returns {(state:any, action:any)=>any}
 */
export function reset( reducer ) {
  return function newReducer( state, action ) {

    if( action.type === LOG_OUT ) {
      state = undefined;
    }

    const nextState = reducer(state, action);

    return nextState;

  }
}