import { createSelector } from 'reselect';

/**
 * Direct selector to the HomePage state domain
 */

const selectProductDetails = (state) => state.get('productdetail');

/**
 * Default selector used by HomePage
 */

const productDetailsSelect = () => createSelector(
  selectProductDetails,
  (productdetail) => productdetail.get('productDetails').toJS()
);


export {
  selectProductDetails,
  productDetailsSelect,
};
