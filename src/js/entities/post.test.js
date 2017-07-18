import post from './post';
import user from './user';
import comment from './comment';
import vote from './vote';

describe('post factory function', () => {
  it('should return an object', () => {
    expect(post()).toEqual(expect.any(Object));
  });
});

describe('post object', () => {
  let testPost;

  beforeEach(() => {
    testPost = post(1, 'title', 'link', 'description', user(1, 'author'),
      [comment(1, 'testcomment')], [vote(1, user(1, 'author'), 'UP')]);
  });

  it('can get its title', () => {
    expect(testPost.title).toEqual('title');
  });

  it('can get its link', () => {
    expect(testPost.link).toEqual('link');
  });

  it('can get its description', () => {
    expect(testPost.description).toEqual('description');
  });

  it('can get its author', () => {
    expect(testPost.author).toEqual(expect.any(Object));
    expect(testPost.author.id).toEqual(1);
    expect(testPost.author.name).toEqual('author');
  });

  it('has a comments handler', () => {
    expect(testPost.commentsHandler).toEqual(expect.any(Object));
  });

  it('has a votes handler', () => {
    expect(testPost.voteHandler).toEqual(expect.any(Object));
  });

  it('can set its description', () => {
    testPost.setDescription('new description');
    expect(testPost.description).toEqual('new description');
  });
});
