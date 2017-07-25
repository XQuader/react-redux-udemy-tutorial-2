import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';


import './less/style.less'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/posts/new" component={PostsNew}/>
                        <Route path="/" component={PostsIndex}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}