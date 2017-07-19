import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(ev) {
        this.setState({
            term : ev.target.value
        });
    }

    render () {
        return <input onChange={this.handleChange}
                      value={this.state.term}/>
    }
}

export default SearchBar;