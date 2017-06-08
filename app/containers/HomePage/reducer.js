/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_ALL,
  LOAD_ALL_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  data: {
    homeData: false,
  },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL:
    // console.log(action.type);
      return state
      .set('loading', true)
      .set('error', false)
      .setIn(['data', 'homeData'], false);
    case LOAD_ALL_SUCCESS:
    // console.log(action.categories);
        return state
          .setIn(['data', 'homeData'], action.categories.data)
          .set('loading', false)
          .set('error', false );
    default:
      return state;
  }
}

export default homeReducer;
