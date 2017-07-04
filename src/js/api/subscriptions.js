import subreddit from '../entities/subreddit';

export function fetchUserSubscriptions(userId) {
  const subscriptions = [subreddit(1, 'DOTA2'), subreddit(1, 'chelseafc')];
  return new Promise((resolve, reject) => {
    if (userId === 1) {
      resolve(subscriptions);
    } else {
      reject();
    }
  });
}
