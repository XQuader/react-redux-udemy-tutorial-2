import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
    authenticated: AuthReducer
});

export default rootReducer;