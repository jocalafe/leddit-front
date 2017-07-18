import commentsHandler from './commentsHandler';
import comment from './comment';

describe('comment handler factory function', () => {
  it('returns an object', () => {
    expect(commentsHandler()).toEqual(expect.any(Object));
  });
});

describe('comment handler object', () => {
  let testCommentsHandler;

  beforeEach(() => {
    testCommentsHandler = commentsHandler([comment(1, 'comment1')]);
  });

  it('can get its comments', () => {
    expect(testCommentsHandler.comments).toEqual(expect.any(Array));
    expect(testCommentsHandler.comments[0].id).toEqual(1);
    expect(testCommentsHandler.comments[0].text).toEqual('comment1');
  });

  it('can add a comment', () => {
    testCommentsHandler.addComment(comment(2, 'comment2'));
    expect(testCommentsHandler.comments.length).toEqual(2);
  });
  it('can delete a comment', () => {
    testCommentsHandler.deleteComment(1);
    expect(testCommentsHandler.comments.length).toEqual(0);
  });
});
