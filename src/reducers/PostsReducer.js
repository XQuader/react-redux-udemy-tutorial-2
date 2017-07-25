import {FETCH_POSTS, CREATE_POST} from "../actions/index";
import _ from 'underscore';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.reduce(action.payload.data, (memo, item) => {
                memo[item.id] = item;
                return memo;
            }, {});
        default:
            return state;
    }
};