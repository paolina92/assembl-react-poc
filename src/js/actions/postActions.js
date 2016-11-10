import PostService from '../services/postService';

class PostActions {
  static fetchPosts(discussionId) {
    let that = this;
    return function(dispatch){
      dispatch(that._fetchPosts());
      return PostService.fetchPosts(discussionId).then(response => {
        dispatch(that._resolvedFetchPosts(response));
      }).catch(error=>{
        dispatch(that._failedFetchPosts(error));
      });
    };
  }
  static _fetchPosts() {
    return {
      type: 'FETCH_POSTS',
      payload: null
    };
  }
  static _resolvedFetchPosts(posts) {
    return {
      type: 'RESOLVED_FETCH_POSTS',
      payload: posts
    };
  }
  static _failedFetchPosts(error) {
    return {
      type: 'FAILED_FETCH_POSTS',
      error: error
    };
  }
}

export default PostActions;