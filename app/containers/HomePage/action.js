/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_ALL,
  LOAD_ALL_SUCCESS,
  LOAD_ALL_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function loadCategory(data) {
  // console.log(data);
  // console.log("load all");
  return {
    type: LOAD_ALL,
    payload: data,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function categoriesLoaded(repos, username) {
  // console.log("load success");
  return {
    type: LOAD_ALL_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function categoriesError(error) {
  // console.log("load error");
  return {
    type: LOAD_ALL_ERROR,
    error,
  };
}
