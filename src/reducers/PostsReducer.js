import {FETCH_POSTS} from "../actions/index";
import _ from 'underscore';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.reduce(action.payload.data, (memo, item) => {
                memo[item.id] = _.omit(item, 'id');
                return memo;
            }, {});
        default:
            return state;
    }
};