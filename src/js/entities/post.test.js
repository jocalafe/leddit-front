import post from './post';
import user from './user';

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
  const post1 = post(title, link, desc, author);
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
  desc = 'newdesc';
  post1.setDescription(desc);
  it('can set its description', () => {
    expect(post1.description).toEqual(desc);
  });
});
