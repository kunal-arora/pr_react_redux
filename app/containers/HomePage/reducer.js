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

import {
  LOAD_CATEGORY_PRODUCT,
  LOAD_CATEGORY_PRODUCT_SUCCESS,
} from '../AllCategories/constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  data: [],
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    // get all categories action
    case LOAD_ALL:
      return state
        .set('data', fromJS([]))
        .set('loading', true)
        .set('error', false);
      // get all categories success action
    case LOAD_ALL_SUCCESS:
    // console.log(action.categories.data.children_data);
      return state
        .set('data', fromJS(action.categories.data.children_data))
        .set('loading', false)
        .set('error', false);

    // default return
    default:
      return state;
  }
}

export default homeReducer;
