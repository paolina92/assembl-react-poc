import React from 'react';
import {connect} from 'react-redux';
import {Localize} from 'react-redux-i18n';
import PostForm from './postFormComponent';

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        {this.props.posts.payload.map((post,index) =>
          <div className={!post.parentId ? 'postContainer' : 'post'} key={index}>
            {!post.parentId && <div className='post-subject'>{post.subject}</div>}
            <div className='post-body'>{post.body}</div>
            <div className='post-date'><Localize value={post.date} dateFormat="date.format"/></div>
            <PostForm discussionId={this.props.discussionId}/>
            {post.children.payload.length > 0 && <PostList posts={post.children} discussionId={this.props.discussionId}/>}
          </div>
        )}
      </div>
    )
  }
}

export default connect (state => state)(PostList);