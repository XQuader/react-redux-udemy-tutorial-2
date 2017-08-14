import axios from 'axios';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, POST_MESSAGE} from './types'

const ROOT_URL = 'http://localhost:3090';

function authUserAction(){
    return {
        type: AUTH_USER
    }
}

function authErrorAction(error){
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

function postMessageAction(message) {
    return {
        type: POST_MESSAGE,
        payload: message
    }
}


export function signinUser(email, password, history) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signin`, {email, password})
            .then(response => {
                dispatch(authUserAction());
                localStorage.setItem('token', response.data.token);
                history.push('/feature');
            })
            .catch(err => {
                dispatch(authErrorAction('Bad login info'));
            });
    }
}

export function signupUser(email, password, history) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signup`, {email, password})
            .then(response => {
                dispatch(authUserAction());
                localStorage.setItem('token', response.data.token);
                history.push('/feature');
            })
            .catch(err => {
                dispatch(authErrorAction(err.response.data.error));
            });
    }
}


export function signoutUser() {
    localStorage.removeItem('token');

    return {
        type: UNAUTH_USER
    }
}

export function fetchMessage() {
    return (dispatch) => {
        axios.get(`${ROOT_URL}`, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then(response => {
                dispatch(postMessageAction(response.data.message));
            })
            .catch(() => {
                dispatch(postMessageAction(''));
            });
    }
}