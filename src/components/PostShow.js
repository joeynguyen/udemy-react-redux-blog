import React, { Component } from 'react';

class PostShow extends Component {
  render() {
    return (
      <div>Show post {this.props.params.id}</div>
    );
  }
}

export default PostShow;
