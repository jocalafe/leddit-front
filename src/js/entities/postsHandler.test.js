import postsHandler from './postsHandler';
import post from './post';

describe('post handler factory function', () => {
  it('returns an object', () => {
    expect(postsHandler()).toEqual(expect.any(Object));
  });
});

describe('post handler object', () => {
  const posts = [post(1, 'lul'), post(2, 'lmfao')];
  const postsHandler1 = postsHandler(posts);
  it('can get its posts', () => {
    expect(postsHandler1.posts).toEqual(posts);
  });
});
