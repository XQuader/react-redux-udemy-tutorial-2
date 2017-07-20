import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

import './less/style.less'

const API_KEY = 'AIzaSyCM_F3I-Q72C1bLqPUYRYBK0dVZ2QLcHeA';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
    }

    componentDidMount() {
        this.videoSearch('telekinesis');
    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term
        }, videos => this.setState({
            videos,
            selectedVideo: videos[0]
        }));
    }

    handleVideoSelect(selectedVideo) {
        this.setState({selectedVideo});
    }

    render() {
        return (
            <div className="container-fluid row">
                <SearchBar onSearchTermChange={this.videoSearch.bind(this)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}
                           onVideoSelect={this.handleVideoSelect.bind(this)}
                />
            </div>
        )
    }
}