import HttpRequestHandler from '../utils/httpRequestHandler';

class PostService {
  static fetchPosts(discussionId){
    let fetchPostsUrl = 'discussion/' + discussionId + '/posts';
    return HttpRequestHandler.request({method:'GET', url:fetchPostsUrl}).then(response=>{
      return this._buildPostsTree(this._buildPost(response));
    });
  }
  static _buildPostsTree(postsArray){
    let postsTree = [];
    postsArray.map(post=>{
      if(post.parentId){
        let parent = postsArray.find(element=>{
          return element.id === post.parentId;
        });
        if(parent) parent.children.payload.push(post);
      }else{
        postsTree.push(post);
      }
    });
    return postsTree;
  }
  static _buildPost(response){
    let postsArray = [];
    response.posts.map(post=>{
      postsArray.push({
        id:post['@id'],
        parentId:post.parentId,
        date:post.date,
        subject:post.subject.entries[0].value,
        body:post.body.entries[0].value,
        children:{payload:[]}
      });
    });
    return postsArray;
  }
}

export default PostService;