import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

// const makeSelect = () => createSelector(
//   selectGlobal,
//   (globalState) => globalState.getIn(['data', 'homeData'])
// );

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelect,
  makeSelectLocationState,
};
