import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import postActions from '../../src/js/actions/postActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Describe the fact that a post action happened', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('Should dispatch 2 async actions: FETCH_POSTS, RESOLVED_FETCH_POSTS', () => {

    nock('https://assembl2.coeus.ca/api/v1/discussion/29/')
    .get('/posts')
    .reply(200, {
      data: {
        children: ['something']
      }
    });

    const expectedActions = [ 'FETCH_POSTS', 'FAILED_FETCH_POSTS' ];
    
    const store = mockStore({}, expectedActions);
    
    return store.dispatch(postActions.fetchPosts('29'))
    .then(() => {
      expect(store.getActions().map(action => action.type))
      .toEqual(expectedActions);
    });
    
  });
  
});