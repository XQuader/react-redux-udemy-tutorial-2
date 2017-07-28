import {combineReducers} from 'redux';
function DummyReducer(state = {}, action) {
    return state;
}

const rootReducer = combineReducers({
    dummy: DummyReducer
});

export default rootReducer;