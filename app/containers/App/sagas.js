import { take, call, put, fork, cancel, select } from 'redux-saga/effects';
import { takeLatest, throttle } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';

export function cancelByLocationChange(watchingConstant, func) {
  return function* cancelByLocationChangeGenerater() {
    const watcherFork = yield fork(takeLatest, watchingConstant, func);
    yield take(LOCATION_CHANGE);
    yield cancel(watcherFork);
  };
}
