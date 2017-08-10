import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

function signedIn(token){
    return {
        type: 'SIGNED',
        payload: token
    }
}

export function signinUser(email, password) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/signin`, {email, password}).then(response => {
            dispatch(signedIn(response.data.token));
        }).catch(err => {
            dispatch(signedIn(err));
        });
    }
}