import comment from '../entities/comment';
import user from '../entities/user';

export function fetchComments(postId) {
  const comments = [comment(1, 'lmao', user('testuser'),
    [comment(11, 'lul', user('test2'), [comment(21, 'rofl')]), comment(12, 'lils')]),
    comment(2, 'lmeo')];
  return new Promise((resolve, reject) => {
    if (postId === 1) {
      resolve(comments);
    } else {
      reject();
    }
  });
}
