import DiscussionService from '../services/discussionService';

class DiscussionActions {
  static getDiscussionId(discussionName) {
    let that = this;
    return function(dispatch){
      if(DiscussionService[discussionName]){
        let discussionId = DiscussionService[discussionName].id;
        dispatch(that._resolvedDiscussionId(discussionId));
      }else{
        dispatch(that._failedDiscussionId('the discussion does not exist'));
      }
    };
  }
  static _resolvedDiscussionId(id) {
    return {
      type: 'RESOLVED_DISCUSSION_ID',
      discussionId: id
    };
  }
  static _failedDiscussionId(ErrorMsg) {
    return {
      type: 'FAILED_DISCUSSION_ID',
      ErrorMsg: ErrorMsg
    };
  }
}

export default DiscussionActions;