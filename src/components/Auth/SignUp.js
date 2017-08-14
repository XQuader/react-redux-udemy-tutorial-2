import _ from 'underscore';
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {signupUser} from '../../actions/index';

const FIELDS = {
    email: {
        element: 'input',
        type: 'text',
        label: 'Email:',
        placeholder: 'Enter valid email'
    },
    password: {
        element: 'input',
        type: 'password',
        label: 'Password:',
        placeholder: 'Enter valid password'
    },
    passwordConfirm: {
        element: 'input',
        type: 'password',
        label: 'Confirm Password:',
        placeholder: 'Confirm entered password'
    }
};

class SignUp extends Component {
    handleSubmit = ({email, password}) => {
        console.log(`${email} ${password}`);
        this.props.signupUser(email, password, this.props.history);
    };

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            )
        }
    }

    renderField(field){
        const {meta : {touched, error, active}} = field;
        const className = `form-group ${!active && touched && error ? ' has-error' : ''}`;

        return (
            <div className={className}>
                <label className="control-label">{field.label}</label>
                <field.element
                    {...field.input}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="form-control"
                />
                <span className="text-danger">{!active && touched && error ? error : ''}</span>
            </div>
        );
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSubmit)} className="col-md-12">
                <h3>Sign In</h3>
                {_.map(FIELDS, (props, name) => {
                    return (
                        <Field
                            key={name}
                            name={name}
                            {...props}
                            component={this.renderField}
                        />
                    )
                })}
                {this.renderAlert()}
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    _.each(FIELDS, (props, name) => {
        if (_.isEmpty(values[name])) {
            errors[name] = 'Should not be empty';
        }
    });

    if (values.password !== values.passwordConfirm ) {
        errors.passwordConfirm = 'Passwords must match';
    }

    return errors;
}

function mapStateToProps({auth: {errorMessage}}) {
    return {
        errorMessage
    }
}

export default reduxForm({
    validate,
    form: 'SignUp'
})
(
    withRouter(
        connect(mapStateToProps, {signupUser})(SignUp)
    )
);