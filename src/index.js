import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
};

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => render(require('./components/App').default));
    module.hot.accept('./reducers', () => store.replaceReducer(require("./reducers/index").default));
}