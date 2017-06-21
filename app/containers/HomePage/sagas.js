/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest , takeEvery, all  } from 'redux-saga/effects';
import { cancelByLocationChange } from 'containers/App/sagas';
import axios from 'axios';
// homepage constants
import { LOAD_ALL } from './constants';
// all categories constants
import { LOAD_CATEGORY_PRODUCT, LOAD_FIRST_CATEGORY_PRODUCT_SUCCESS } from '../AllCategories/constants';
// homepage actions
import { categoriesLoaded, categoriesError } from './action';
// all categories actions
import { categoryProductLoaded, categoryProductError, categoryProductFirstLoad } from '../AllCategories/action';

// all categories sagas funtion
export function* getCats() {
  console.log('getcats');
  const requestURL = `http://localhost/magento_c_e_2.1.5_w_sd/index.php/rest/V1/categories`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer nib1hg57bcqneunm4v4lu01y265e9t1m',
    },
  };
  try {
    const repos = yield call(axios.get, requestURL, config);
    // passing the first category id to the action
    yield put(categoryProductFirstLoad(repos.data.children_data[0].id));
    // passing all the categories to the action
    yield put(categoriesLoaded(repos));
  } catch (err) {
    yield put(categoriesError(err));
  }
}


// categories products sagas funtion
export function* getCatProducts(action) {
  console.log('getcat products');
  // console.log(action.payload);

  let requestURL = '';

  if (action.payload) {
    requestURL = `http://localhost/magento_c_e_2.1.5_w_sd/index.php/rest/V1/categories/${action.payload}/products`;
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer nib1hg57bcqneunm4v4lu01y265e9t1m',
    },
  };
  try {
    const products = yield call(axios.get, requestURL, config);
    yield put(categoryProductLoaded(products));
  } catch (err) {
    yield put(categoriesError(err));
  }
}

// load all sagas
export default [
  cancelByLocationChange(LOAD_ALL, getCats),
  cancelByLocationChange(LOAD_CATEGORY_PRODUCT, getCatProducts),
  cancelByLocationChange(LOAD_FIRST_CATEGORY_PRODUCT_SUCCESS, getCatProducts),
];
