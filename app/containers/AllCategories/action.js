import {
  LOAD_CATEGORY_PRODUCT,
  LOAD_CATEGORY_PRODUCT_SUCCESS,
  LOAD_CATEGORY_PRODUCT_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function loadCategoryProduct(id) {
  console.log("load all products");
  return {
    type: LOAD_CATEGORY_PRODUCT,
    payload: id,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} categories The repository data
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function categoryProductLoaded(products) {
  // console.log(products);
  return {
    type: LOAD_CATEGORY_PRODUCT_SUCCESS,
    products,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function categoryProductError(error) {
  // console.log("load error");
  return {
    type: LOAD_CATEGORY_PRODUCT_ERROR,
    error,
  };
}
