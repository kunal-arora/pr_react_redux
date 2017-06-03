import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');
const makeSelect = () => createSelector(
  selectHome,
  (homeState) => homeState.getIn(['data', 'homeData'])
);


export {
  selectHome,
  makeSelect,
};
