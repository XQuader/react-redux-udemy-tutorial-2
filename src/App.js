import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import PostsIndex from './components/PostsIndex';

import './less/style.less'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={PostsIndex}/>
                </div>
            </BrowserRouter>
        )
    }
}