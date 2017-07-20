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
    }

    render () {
        return (
            <div className="col-md-12">
                <input onChange={this.handleInputChange}
                       value={this.state.term}
                       className="col-md-4"
                />
            </div>
        )
    }
}