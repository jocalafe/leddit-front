import comment from './comment';
import user from './user';

describe('comment factory function', () => {
  it('returns an object', () => {
    expect(comment()).toEqual(expect.any(Object));
  });
});

describe('comment object', () => {
  const id = 1;
  let text = 'comment text';
  const comments = [comment(2, 'text2')];
  const author = user('testUser');
  const comment1 = comment(id, text, author, comments);

  it('can get its id', () => {
    expect(comment1.id).toEqual(id);
  });
  it('can get its text', () => {
    expect(comment1.text).toEqual(text);
  });
  it('can get its author', () => {
    expect(comment1.author).toEqual(author);
  });
  it('can get its comments', () => {
    expect(comment1.commentsHandler.comments).toEqual(comments);
  });
  text = 'new comment text';
  comment1.setText(text);
  it('can set its text', () => {
    expect(comment1.text).toEqual(text);
  });
});
