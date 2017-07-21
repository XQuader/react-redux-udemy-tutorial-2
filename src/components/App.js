import React, {Component} from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

import '../less/style.less'

export default class App extends Component {
    render() {
        return (
            <div>
                <BookList />
                <BookDetail />
            </div>
        )
    }
}