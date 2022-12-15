import {combineReducers} from 'redux';
import vediosReducer from './vediosReducers';
// import errorReducer from './errorReducer';
// import authReducer from './authReducer';

export default combineReducers({
    vedios:vediosReducer,
    // error:errorReducer,
    // auth:authReducer
});