import { fromJS } from 'immutable';

import {
  LOAD_DETAILS,
  LOAD_DETAILS_SUCCESS,
} from './constants';


// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  productDetails: [],
});

function productDetailsReducer(state = initialState, action) {
  switch (action.type) {
    // get all categories
    case LOAD_DETAILS:
      return state
        .set('productDetails', fromJS([]))
        .set('loading', true)
        .set('error', false);
      // get all categories success
    case LOAD_DETAILS_SUCCESS:
    // console.log(action);
      return state
        .set('productDetails', fromJS(action.productDetails.data))
        .set('loading', false)
        .set('error', false);
    default:
      return state;
  }
}

export default productDetailsReducer;
