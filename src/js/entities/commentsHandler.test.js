import commentsHandler from './commentsHandler';
import comment from './comment';

describe('comment handler factory function', () => {
  it('returns an object', () => {
    expect(commentsHandler()).toEqual(expect.any(Object));
  });
});

describe('comment handler object', () => {
  let comments = [comment(1, 'lul'), comment(2, 'lmfao')];
  const commentsHandler1 = commentsHandler(comments);
  it('can get its comments', () => {
    expect(commentsHandler1.comments).toEqual(comments);
  });
  comments = [...comments, comment(3, 'lol')];
  commentsHandler1.addComment(comment(3, 'lol'));
  it('can add a comment', () => {
    expect(commentsHandler1.comments).toEqual(comments);
  });
  comments.pop();
  commentsHandler1.deleteComment(3);
  it('can delete a comment', () => {
    expect(commentsHandler1.comments).toEqual(comments);
  });
});
