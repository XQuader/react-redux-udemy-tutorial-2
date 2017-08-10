import _ from 'underscore';
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {signinUser} from '../../actions/index';

const FIELDS = {
    email: {
        type: 'input',
        label: 'Email:',
        placeholder: 'Enter valid email'
    },
    password: {
        type: 'input',
        label: 'Password:',
        placeholder: 'Enter valid password'
    }
};

class SignIn extends Component {
    handleSubmit = ({email, password}) => {
        console.log(`${email} ${password}`);
        this.props.signinUser(email, password, this.props.history);
    };

    renderField(field){
        const {meta : {touched, error}} = field;
        const className = `form-group ${touched && error ? ' has-error' : ''}`;

        return (
            <div className={className}>
                <label className="control-label">{field.label}</label>
                <field.type
                    {...field.input}
                    placeholder={field.placeholder}
                    className="form-control"
                />
                <span className="text-danger">{touched ? error : ''}</span>
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
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    _.each(FIELDS, (props, name) => {
        if (!values[name])
            errors[name] = 'Should not be empty';
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'SignIn'
})
(
    withRouter(
        connect(null, {signinUser})(SignIn)
    )
);