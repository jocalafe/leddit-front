import comment from './comment';

describe('comment factory function', () => {
  it('returns an object', () => {
    expect(comment()).toEqual(expect.any(Object));
  });
});

describe('comment object', () => {
  let text = 'comment text';
  const comment1 = comment(text);
  it('can get its text', () => {
    expect(comment1.text).toEqual(text);
  });
  it('can get its text', () => {
    expect(comment1.text).toEqual(text);
  });
  text = 'new comment text';
  comment1.setText(text);
  it('can set its text', () => {
    expect(comment1.text).toEqual(text);
  });
});
