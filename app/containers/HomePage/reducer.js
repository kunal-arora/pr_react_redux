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
    // console.log(action.payload);
      return state
        .setIn(['data', 'homeData'], action.payload)
        .set('loading', false)
        .set('error', false);
    default:
      return state;
  }
}

export default homeReducer;
