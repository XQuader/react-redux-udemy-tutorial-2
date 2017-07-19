import React, {Component} from 'react';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyCM_F3I-Q72C1bLqPUYRYBK0dVZ2QLcHeA';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <SearchBar />
            </div>
        )
    }
}