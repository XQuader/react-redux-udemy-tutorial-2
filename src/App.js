import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyCM_F3I-Q72C1bLqPUYRYBK0dVZ2QLcHeA';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({
            key: API_KEY,
            term: 'telekinesis'
        }, videos => this.setState({ videos }));
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
}