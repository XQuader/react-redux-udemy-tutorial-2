import axios from 'axios';
import {FETCH_USERS} from "./types";

export function fetchUsers() {
    return {
        type: FETCH_USERS,
        payload: [
            { name: 'first' },
            { name: 'second' },
            { name: 'third' }
        ]
    }
}