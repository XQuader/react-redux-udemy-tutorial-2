import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import '../../style/style.less'

function Dummy(props) {
    return <div>Hello</div>
}

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Dummy}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}