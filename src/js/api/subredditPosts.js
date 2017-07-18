import { postsDota, postsCfc } from './tmpApiData';

export function fetchPosts(subredditId) {
  return new Promise((resolve, reject) => {
    if (subredditId === 1) {
      resolve(postsDota);
    } else if (subredditId === 2) {
      resolve(postsCfc);
    } else {
      reject();
    }
  });
}
