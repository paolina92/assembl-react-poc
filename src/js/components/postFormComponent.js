import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Translate} from 'react-redux-i18n';
import PostsActions from '../actions/postActions';

class PostsForm extends React.Component {
  constructor(props) {
    super(props);
    this.sendPost = this.sendPost.bind(this);
  }
  sendPost(){
    this.props.dispatch(PostsActions.fetchPosts(this.props.discussionId));
  }
  render() {
    return(<div className='post-reply' ><a onClick={this.sendPost}><Translate value='discussion.reply'/></a></div>);
  }
}

export default connect (state => state)(PostsForm);