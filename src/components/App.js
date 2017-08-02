import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Header';
import Resources from './Resources';

import '../../style/style.less'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="col-md-12">
                    <Header/>
                    <Route path="/resources" component={Resources}/>
                </div>
            </BrowserRouter>
        )
    }
}