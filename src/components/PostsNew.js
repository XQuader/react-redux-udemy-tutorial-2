import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from "../actions/index";

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
                <label
                    htmlFor={field.name}
                    className="control-label">{field.label}</label>
                <input
                    type="text"
                    name={field.name}
                    id={field.name}
                    {...field.input}
                    className="form-control"
                />
                <span className="text-danger">{field.meta.touched ? field.meta.error : ''}</span>
            </div>
        );
    }

    handleSubmit(values) {
        this.props.createPost(values, () => this.props.history.push('/'));
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}
                className="col-md-12">
                <Field
                    name="title"
                    label="Title For Post"
                    component={this.renderField}
                />
                <Field
                    name="categories"
                    label="Categories"
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Post Content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.title)
        errors.title = 'Should not be empty';
    if (!values.categories)
        errors.categories = 'Should not be empty';
    if (!values.content)
        errors.content = 'Should not be empty';

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew)
);