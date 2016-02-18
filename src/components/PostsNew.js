import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    // handleSubmit and fields are from redux-form
    // const title = this.props.fields.title;
    // const handleSubmit = this.props.handleSubmit;
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.doCreatePost)}>
        <h3>Create a New Post</h3>

        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>Category</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validateForm(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }

  return errors;
}

// connect: 1st argument is mapStateToProps, 2nd state is mapDispatchToProps
// reduxForm: 1st argument is form config, 2nd is mapStateToProps, 3rd state is mapDispatchToProps

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  validate: validateForm
}, null, { doCreatePost: createPost })(PostsNew);
