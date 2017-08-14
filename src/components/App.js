import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import RequireAuth from './Auth/RequireAuth';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';
import SignOut from './Auth/SignOut';
import Feature from './Feature';

import '../../style/style.less'

const LoginFeature = RequireAuth(Feature);

function Dummy(props) {
    return <div>Greetings</div>
}

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/signout" component={SignOut}/>
                        <Route path="/signin" component={SignIn}/>
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/feature" component={LoginFeature}/>
                        <Route path="/" component={Dummy}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}