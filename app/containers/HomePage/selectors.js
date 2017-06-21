import { createSelector } from 'reselect';

/**
 * Direct selector to the HomePage state domain
 */

const selectHome = (state) => state.get('home');

/**
 * Default selector used by HomePage
 */

const makeSelect = () => createSelector(
  selectHome,
  (home) => home.get('categories').toJS()
);

const catProductsSelect = () => createSelector(
  selectHome,
  (home) => home.get('catProducts').toJS()
);

export {
  selectHome,
  makeSelect,
  catProductsSelect,
};
