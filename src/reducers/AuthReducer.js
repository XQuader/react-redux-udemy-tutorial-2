import {AUTH_ERROR, AUTH_USER, UNAUTH_USER} from "../actions/types";

export default function (state = {authenticated: false}, action) {
    switch (action.type) {
        case AUTH_USER:
            return {...state, authenticated: true, errorMessage: ''};
        case UNAUTH_USER:
            return {...state, authenticated: false, errorMessage: ''};
        case AUTH_ERROR:
            return {...state, errorMessage: action.payload};

        default:
            return state;
    }
}