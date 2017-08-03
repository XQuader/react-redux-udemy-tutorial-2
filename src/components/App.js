import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import '../../style/style.less'

export default class App extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    Hello
                </div>
            </div>
        )
    }
}