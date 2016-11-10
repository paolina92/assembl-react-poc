import postReducer from '../../src/js/reducers/postReducer';

describe('Return posts state changes', () => {
  it('Should handle FETCH_POSTS', () => {
    expect(
      postReducer([],{
        type: 'FETCH_POSTS'
      }))
    .toEqual({
      payload:null,
      loading:true,
      error:null
    });
  });
  it('Should handle RESOLVED_FETCH_POSTS', () => {
    expect(
      postReducer([],{
        type: 'RESOLVED_FETCH_POSTS',
        payload:{data:'data'}
      }))
    .toEqual({
      payload:{data:'data'},
      loading:false,
      error:null
    });
  });
  it('Should handle FAILED_FETCH_POSTS', () => {
    expect(
      postReducer([],{
        type: 'FAILED_FETCH_POSTS',
        error:'Forbidden'
      }))
    .toEqual({
      payload:null,
      loading:false,
      error:'Forbidden'
    });
  });
});