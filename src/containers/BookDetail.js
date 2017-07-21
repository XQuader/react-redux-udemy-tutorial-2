import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
    render() {
        if (this.props.book){
            return (
                <div className="book-detail col-sm-8">
                    <h3>Details for:</h3>
                    <span>{this.props.book.title}</span>
                </div>
            )
        } else {
            return <span>Select a book to get started.</span>
        }
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);