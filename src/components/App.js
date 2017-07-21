import React, {Component} from 'react';
import SearchBar from '../containers/SearchBar';

import '../less/style.less'

export default class App extends Component {
    render() {
        return (
            <div className="col-md-12">
                <SearchBar />
            </div>
        )
    }
}