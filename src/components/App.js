import React, {Component} from 'react';
import UserList from './UserList';

import '../../style/style.less'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <UserList/>
                </div>
            </div>
        )
    }
}