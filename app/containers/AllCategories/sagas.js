import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_CATEGORIES } from 'containers/App/constants';

import request from 'utils/request';


export function* fetchAllCategories() {

  const requestURL = `http://localhost/magento_c_e_2.1.5_w_sd/index.php/rest/V1/categories`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(AllCategoriesLoaded());
  } catch (err) {
    yield put(AllCategoriesLoadingError(err));
  }
}

function* getAllCategories() {
  yield takeLatest("LOAD_CATEGORIES", fetchAllCategories);
}



export default [
  getAllCategories,
];
