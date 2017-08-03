import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from "../actions/index";

class UserList extends Component {
    renderUser(user) {
        return (
            <div key={user.name} className="card card-block">
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">Cheese Factory</p>
                <a className="btn btn-primary">Email</a>
            </div>
        )
    }

    render() {
        return (
            <div className="card">
                {this.props.users.map(this.renderUser)}
            </div>
        )
    }

    componentWillMount() {
        this.props.fetchUsers();
    }
}

function mapStateToProps({users}) {
    return {users};
}

export default connect(mapStateToProps, {fetchUsers})(UserList);