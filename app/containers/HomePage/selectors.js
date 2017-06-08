import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');
const makeSelect = () => createSelector(
  selectHome,
  (homeState) => homeState.getIn(['data', 'homeData'])
);

// const getCats = () => createSelector(
//   selectHome,
//   (getState) => getState.getIn(['data', 'categories'])
// );


export {
  selectHome,
  makeSelect,
};
