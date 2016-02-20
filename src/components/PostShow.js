import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostShow extends Component {
  componentWillMount() {
    this.props.doFetchPost(this.props.params.id);
  }
  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }
    console.log(post);
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  };
}

export default connect(mapStateToProps, { doFetchPost: fetchPost} )(PostShow);
