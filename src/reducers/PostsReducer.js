import {FETCH_POSTS, FETCH_POST} from "../actions/index";
import _ from 'underscore';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.reduce(action.payload.data, (memo, item) => {
                memo[item.id] = item;
                return memo;
            }, {});
        case FETCH_POST:
            return {...state, [action.payload.data.id] : action.payload.data};

        default:
            return state;
    }
};