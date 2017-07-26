import {FETCH_POSTS, FETCH_POST, DELETE_POST, CREATE_POST} from "../actions/index";
import _ from 'underscore';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.reduce(action.payload, (memo, item) => {
                memo[item.id] = item;
                return memo;
            }, {});
        case CREATE_POST:
        case FETCH_POST:
            return {...state, [action.payload.id] : action.payload};
        case DELETE_POST:
            return _.omit(state, action.payload);

        default:
            return state;
    }
};