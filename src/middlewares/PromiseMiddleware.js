export default function ({dispatch}) {
    return next => action => {
        const isPromise = action.payload && typeof action.payload.then === 'function';

        if (isPromise) {
            action.payload.then(response => dispatch({...action, payload: response.data}));
        } else {
            return next(action);
        }
    }
}