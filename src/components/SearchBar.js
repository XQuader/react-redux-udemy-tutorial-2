import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(ev) {
        this.setState({
            term : ev.target.value
        });
        this.props.onSearchTermChange(ev.target.value);
    }

    render () {
        return (
            <div className="search-bar">
                <input onChange={this.handleInputChange}
                       value={this.state.term}
                />
            </div>
        )
    }
}