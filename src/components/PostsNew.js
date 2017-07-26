import _ from 'underscore';
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from "../actions/index";

const FIELDS = {
    title: {
        label: 'Title For Post',
        type:'input'
    },
    categories: {
        label: 'Categories',
        type:'input'
    },
    content: {
        label: 'Content',
        type: 'textarea'
    }
};

class PostsNew extends Component {
    constructor(props) {
        super(props);


        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderField(field){
        const {meta : {touched, error}} = field;
        const className = `form-group ${touched && error ? ' has-error' : ''}`;

        return (
            <div className={className}>
                <label className="control-label">{field.label}</label>
                <field.type
                    {...field.input}
                    className="form-control"
                />
                <span className="text-danger">{touched ? error : ''}</span>
            </div>
        );
    }

    handleSubmit(values) {
        this.props.createPost(values, () => this.props.history.push('/'));
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSubmit)} className="col-md-12">
                <h3>Create a New Post</h3>
                {_.map(FIELDS, (field, name) => {
                    return (
                        <Field
                            key={name}
                            name={name}
                            {...field}
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

    _.each(FIELDS, (props, field) => {
        if (!values[field])
            errors[field] = 'Should not be empty';
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew)
);