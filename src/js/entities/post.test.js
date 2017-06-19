import post from './post';

describe('post factory function', () => {
  it('should return an object', () => {
    expect(post()).toEqual(expect.any(Object));
  });
});

describe('post object', () => {
  const title = 'title';
  const link = 'link';
  const desc = 'desc';
  const post1 = post(title, link, desc);
  it('can get its title', () => {
    expect(post1.title).toEqual(title);
  });
})
