import axios from 'axios';

const API_KEY = '?key=xquader';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';

export function fetchPosts() {
    const url = `${ROOT_URL}/posts${API_KEY}`;
    const request = axios.get(url);

    return dispatch => {
        request.then(({data}) => dispatch({
            type: FETCH_POSTS,
            payload: data
        }));
    };
}

export function fetchPost(postId) {
    const url = `${ROOT_URL}/posts/${postId}${API_KEY}`;
    const request = axios.get(url);

    return dispatch => {
        request.then(({data}) => dispatch({
            type: FETCH_POST,
            payload: data
        }));
    };
}

export function deletePost(postId, callback) {
    const url = `${ROOT_URL}/posts/${postId}${API_KEY}`;
    const request = axios.delete(url);

    return dispatch => {
        request.then(() => {
            callback();
            dispatch({
                type: DELETE_POST,
                payload: postId
            });
        });
    };
}

export function createPost(post, callback) {
    const url = `${ROOT_URL}/posts${API_KEY}`;
    const request = axios.post(url, post);

    return dispatch => {
        request.then(({data}) => {
            callback();
            dispatch({
                type: CREATE_POST,
                payload: data
            });
        });
    };
}