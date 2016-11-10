import React, {Component} from 'react';
import {connect}  from 'react-redux';
import PostsActions from '../actions/postActions';
import Loading from '../components/loadingComponent';
import Error from '../components/errorComponent';
import PostList from '../components/postListComponent';

class MessagesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchPosts(this.props.discussionId);
  }
  render() {
    const {payload,loading,error} = this.props.posts;
    return(
      <div className='messages-container'>
        {loading && <Loading/>}
        {payload && <PostList discussionId={this.props.discussionId}/>}
        {error && <Error errorMessage={this.props.posts.error}/>}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    discussionId: state.discussion.discussionId,
    posts: state.posts
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (id) => {
      dispatch(PostsActions.fetchPosts(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);