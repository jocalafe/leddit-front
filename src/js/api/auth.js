import user from '../entities/user';

export function fetchUserLogin(userName, password) {
  return new Promise((resolve, reject) => {
    if (userName === 'test' && password === 'test') {
      resolve(user(1, userName));
    } else {
      reject();
    }
  });
}
