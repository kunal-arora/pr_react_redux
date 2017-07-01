/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest , takeEvery, all  } from 'redux-saga/effects';
import { cancelByLocationChange } from 'containers/App/sagas';
import axios from 'axios';
// homepage constants
import { LOAD_DETAILS } from './constants';
// homepage actions
import { productLoaded, productLoadError } from './action';

// all categories sagas funtion
export function* getProductDetails(action) {
  console.log('getproduct details');
  let requestURL = '';
  if (action.payload) {
    requestURL = `http://localhost/magento_c_e_2.1.5_w_sd/index.php/rest/V1/products/${action.payload}`;
  }
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer nib1hg57bcqneunm4v4lu01y265e9t1m',
    },
  };
  try {
    const repos = yield call(axios.get, requestURL, config);
    // passing all the categories to the action
    yield put(productLoaded(repos));
  } catch (err) {
    yield put(productLoadError(err));
  }
}


// load all sagas
export default [
  cancelByLocationChange(LOAD_DETAILS, getProductDetails),
];
