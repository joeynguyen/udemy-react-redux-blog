import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.doFetchPosts();
  }
  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

export default connect(null, { doFetchPosts: fetchPosts })(PostsIndex);
