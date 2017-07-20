import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyCM_F3I-Q72C1bLqPUYRYBK0dVZ2QLcHeA';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.handleVideoSelect = this.handleVideoSelect.bind(this);
    }

    componentDidMount() {
        YTSearch({
            key: API_KEY,
            term: 'telekinesis'
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
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}
                           onVideoSelect={this.handleVideoSelect}
                />
            </div>
        )
    }
}