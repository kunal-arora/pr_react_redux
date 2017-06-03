import { combineReducers } from 'redux';
import homeReducer from '../HomePage/reducer';
// import ActiveUserReducer from './reducer-active-user';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const globalReducer = combineReducers({
  homeData: homeReducer,
});

export default globalReducer;
