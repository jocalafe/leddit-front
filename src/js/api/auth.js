import { testUser } from './tmpApiData';

export function fetchUserLogin(userName, password) {
  return new Promise((resolve, reject) => {
    if (userName === 'test' && password === 'test') {
      resolve(testUser);
    } else {
      reject();
    }
  });
}
