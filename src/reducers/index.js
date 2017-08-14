import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import AuthReducer from './AuthReducer';
import MessageReducer from './MessageReducer';

const rootReducer = combineReducers({
    form,
    auth: AuthReducer,
    message: MessageReducer
});

export default rootReducer;