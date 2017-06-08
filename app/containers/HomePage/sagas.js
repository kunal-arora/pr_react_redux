/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest , takeEvery, all  } from 'redux-saga/effects';
// import request from 'utils/request';
import axios from 'axios';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_ALL } from './constants';
import { categoriesLoaded, categoriesError } from './action';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {

  console.log('getrepos');
  // Select username from store
  // const username = yield select(makeSelectUsername());
  const requestURL = 'http://localhost/magento_c_e_2.1.5_w_sd/index.php/rest/V1/categories';
  // const requestURL = 'https://jsonplaceholder.typicode.com/posts/1';

  var config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer nib1hg57bcqneunm4v4lu01y265e9t1m',
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(axios.get, requestURL, config);
    yield put(categoriesLoaded(repos));
  } catch (err) {
    yield put(categoriesError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {

  console.log('get');
  // Watches for LOAD_ALL actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_ALL, getRepos);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  githubData,
];
