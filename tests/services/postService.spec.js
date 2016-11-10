import postService from '../../src/js/services/postService';
import postApiMock from '../mocks/postApi';

let postsArray = [];

describe('Build the post structure and the posts tree', () => {
  it('Should create the posts array with its children', () => {
    let expectedResponse = [
    {
      id:'local:Content/3380',
      parentId:null,
      date:'2014-11-25T18:05:28Z',
      subject:'LEZs',
      body:'Implementing low emission zones will help shift citizen behaviour toward the purchase of low emission cars, electric solutions, bicycles, public transport and other sustainable transport options. It may require some infrastructure updates such as providing recharging stations for electric cars, putting in more bike racks, updating bus routes but the payoffs could be enormous!',
      children:{payload:[]}
    },
    {
      id:'local:Content/1380',
      parentId:'local:Content/3380',
      date:'2011-11-25T18:05:28Z',
      subject:'Trump President!',
      body:'C\'est compliqué...',
      children:{payload:[]}
    },
    {
      id:'local:Content/1180',
      parentId:'local:Content/3380',
      date:'2015-12-25T18:05:28Z',
      subject:'Il neige',
      body:'C\'est beau en hivers.',
      children:{payload:[]}
    }];
    postsArray = expectedResponse;
    expect(postService._buildPost(postApiMock)).toEqual(expectedResponse);
  });
  it('Should create the post tree', () => {
    let expectedResponse = [{
      id:'local:Content/3380',
      parentId:null,
      date:'2014-11-25T18:05:28Z',
      subject:'LEZs',
      body:'Implementing low emission zones will help shift citizen behaviour toward the purchase of low emission cars, electric solutions, bicycles, public transport and other sustainable transport options. It may require some infrastructure updates such as providing recharging stations for electric cars, putting in more bike racks, updating bus routes but the payoffs could be enormous!',
      children:{payload:[
        {
          id:'local:Content/1380',
          parentId:'local:Content/3380',
          date:'2011-11-25T18:05:28Z',
          subject:'Trump President!',
          body:'C\'est compliqué...',
          children:{payload:[]}
        },
        {
          id:'local:Content/1180',
          parentId:'local:Content/3380',
          date:'2015-12-25T18:05:28Z',
          subject:'Il neige',
          body:'C\'est beau en hivers.',
          children:{payload:[]}
        }
      ]}
    }];
    expect(postService._buildPostsTree(postsArray)).toEqual(expectedResponse);
  });
});