import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchTerm} from '../actions/index';

class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(ev) {
        this.setState({
            term: ev.target.value
        })
    }

    handleSubmit(ev) {
        ev.preventDefault();

        this.props.searchTerm(this.state.term);
    }

    render() {
        return (
            <form className="search-bar input-group"
                  onSubmit={this.handleSubmit}>
                <input
                    className="form-control"
                    placeholder="Get a five-day forecast in your favorite cities"
                    value={this.state.term}
                    onChange={this.handleInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit"
                            className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({searchTerm}, dispatch);
}

export default connect(undefined, mapDispatchToProps)(SearchBar);