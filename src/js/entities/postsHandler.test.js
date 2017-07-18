import postsHandler from './postsHandler';
import post from './post';

describe('post handler factory function', () => {
  it('returns an object', () => {
    expect(postsHandler()).toEqual(expect.any(Object));
  });
});

describe('post handler object', () => {
  let testPostHandler;

  beforeEach(() => {
    testPostHandler = postsHandler([post(1, 'post1')]);
  });

  it('can get its posts', () => {
    expect(testPostHandler.posts).toEqual(expect.any(Array));
    expect(testPostHandler.posts[0].id).toEqual(1);
    expect(testPostHandler.posts[0].title).toEqual('post1');
  });
});
