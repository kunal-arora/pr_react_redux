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
  categories: [],
  catProducts: [],
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    // get all categories
    case LOAD_ALL:
      return state
        .set('categories', fromJS([]))
        .set('loading', true)
        .set('error', false);
      // get all categories success
    case LOAD_ALL_SUCCESS:
    // console.log(action.categories.data);
      return state
        .set('categories', fromJS(action.categories.data.children_data))
        .set('loading', false)
        .set('error', false);
    // all products load reducer

    case LOAD_CATEGORY_PRODUCT:
      return state
        .set('loading', true)
        .set('error', false);

    // all products success reducer
    case LOAD_CATEGORY_PRODUCT_SUCCESS:
      // console.log(action.products.data);
      return state
        .set('catProducts', fromJS(action.products.data))
        .set('loading', false)
        .set('error', false);
    // default return
    default:
      return state;
  }
}

export default homeReducer;
