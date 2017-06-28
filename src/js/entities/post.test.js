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
  const title = 'title';
  const link = 'link';
  let desc = 'desc';
  const author = user('author');
  const comments = [comment(1, 'testcomment', [], [])];
  const votes = [vote(1, author, 'UP')];
  const post1 = post(1, title, link, desc, author, comments, votes);
  it('can get its title', () => {
    expect(post1.title).toEqual(title);
  });
  it('can get its link', () => {
    expect(post1.link).toEqual(link);
  });
  it('can get its description', () => {
    expect(post1.description).toEqual(desc);
  });
  it('can get its author', () => {
    expect(post1.author).toEqual(author);
  });
  it('can get its comments', () => {
    expect(post1.author).toEqual(author);
  });
  it('can get its votes', () => {
    expect(post1.voteHandler.votes).toEqual(votes);
  });
  it('can set its description', () => {
    desc = 'newdesc';
    post1.setDescription(desc);
    expect(post1.description).toEqual(desc);
  });
});
