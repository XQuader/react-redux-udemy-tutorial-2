import {POST_MESSAGE} from "../actions/types";

export default function (state = '', action) {
    switch (action.type) {
        case POST_MESSAGE:
            return action.payload;

        default:
            return state;
    }
}