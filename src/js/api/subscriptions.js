import { subscriptions } from './tmpApiData';

export function fetchUserSubscriptions(userId) {
  return new Promise((resolve, reject) => {
    if (userId === 1) {
      resolve(subscriptions);
    } else {
      reject();
    }
  });
}
