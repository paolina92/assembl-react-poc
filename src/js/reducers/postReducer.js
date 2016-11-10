const PostReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {payload:null, loading:true, error:null};
    case 'RESOLVED_FETCH_POSTS':
      return {payload:action.payload, loading:false, error:null};
    case 'FAILED_FETCH_POSTS':
      return {payload:null, loading:false, error:action.error};
    default:
      return state;
  }
};

export default PostReducer;