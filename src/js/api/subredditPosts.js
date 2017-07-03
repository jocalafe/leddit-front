import post from '../entities/post';
import user from '../entities/user';

export function fetchPosts(subredditId) {
  const posts = [post(1, 'posttitle', 'www.facebook.com', 'desc', user('user')),
    post(2, 'posttitle2', 'www.google.com', 'desc2', user('user2'))];
  return new Promise((resolve, reject) => {
    if (subredditId === 1) {
      resolve(posts);
    } else {
      reject();
    }
  });
}
