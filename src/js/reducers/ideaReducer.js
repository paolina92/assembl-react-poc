const IdeaReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RESOLVED_FETCH_IDEAS':
      return action.data;
    case 'FAILED_FETCH_IDEAS':
      return action.error;
    default:
      return action;
  }
};

export default IdeaReducer;