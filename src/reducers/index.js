import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    form
});

export default rootReducer;