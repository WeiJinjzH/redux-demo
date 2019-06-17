import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';

const rootReducer = combineReducers({ // 把reducer都合在一起
    counter,
    user
})
export default rootReducer