import {combineReducers} from 'redux';
import CommentsReducer from './CommentsReducer';

const rootReducer = combineReducers({
    comments: CommentsReducer
});

export default rootReducer;