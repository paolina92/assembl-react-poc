const DiscussionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RESOLVED_DISCUSSION_ID':
      return {discussionId:action.discussionId, error:false};
    case 'FAILED_DISCUSSION_ID':
      return {MsgError:action.ErrorMsg, error:true};
    default:
      return state;
  }
};

export default DiscussionReducer;