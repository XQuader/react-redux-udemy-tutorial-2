import axios from 'axios';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from './types'

const ROOT_URL = 'http://localhost:3090';

function authUser(){
    return {
        type: AUTH_USER
    }
}

function authError(error){
    return {
        type: AUTH_ERROR,
        payload: error
    }
}


export function signinUser(email, password, history) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signin`, {email, password})
            .then(response => {
                dispatch(authUser());
                localStorage.setItem('token', response.data.token);
                history.push('/feature');
            })
            .catch(err => {
                console.log(err);
                dispatch(authError('Bad login info'));
            });
    }
}