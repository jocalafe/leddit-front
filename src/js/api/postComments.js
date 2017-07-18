import { commentsDota, commentsCfc } from './tmpApiData';

export function fetchComments(postId) {
  return new Promise((resolve, reject) => {
    if (postId > 0 && postId <= 5) {
      resolve(commentsDota);
    } else if (postId > 5) {
      resolve(commentsCfc);
    } else {
      reject();
    }
  });
}
