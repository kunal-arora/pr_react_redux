import {
  LOAD_DETAILS,
  LOAD_DETAILS_SUCCESS,
  LOAD_DETAILS_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function loadProduct(sku) {
  console.log(sku);
  // console.log("load all");
  return {
    type: LOAD_DETAILS,
    payload: sku,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} productDetails The repository data
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function productLoaded(productDetails) {
  // console.log(categories);
  return {
    type: LOAD_DETAILS_SUCCESS,
    productDetails,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function productLoadError(error) {
  // console.log("load error");
  return {
    type: LOAD_DETAILS_ERROR,
    error,
  };
}
