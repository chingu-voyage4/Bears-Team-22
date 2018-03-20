import { combineReducers } from 'redux';
import apolloReducer from '../graphql/clientGraphql';
import userProfileReducer from './userProfileReducers';

const rootReducer = combineReducers({
  // combine reducers
  userProfileReducer,
  apolloReducer
});

export default rootReducer;
