import comment from './comment';
import user from './user';

describe('comment factory function', () => {
  it('returns an object', () => {
    expect(comment()).toEqual(expect.any(Object));
  });
});

describe('comment object', () => {
  let testComment;

  beforeEach(() => {
    testComment = comment(1, 'text', user(1, 'testUser'), [comment(2, 'text2')]);
  });

  it('can get its id', () => {
    expect(testComment.id).toEqual(1);
  });

  it('can get its text', () => {
    expect(testComment.text).toEqual('text');
  });

  it('can get its author', () => {
    expect(testComment.author.id).toEqual(1);
    expect(testComment.author.name).toEqual('testUser');
  });

  it('can get its comments', () => {
    expect(testComment.commentsHandler.comments).toEqual(expect.any(Array));
    expect(testComment.commentsHandler.comments[0].id).toEqual(2);
    expect(testComment.commentsHandler.comments[0].text).toEqual('text2');
  });

  it('can set its text', () => {
    testComment.setText('text3');
    expect(testComment.text).toEqual('text3');
  });
});
