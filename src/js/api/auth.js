import User from '../entities/User';

export function fetchUserLogin(userName, password) {
  return new Promise((resolve, reject) => {
    if (userName === 'test' && password === 'test') {
      resolve(new User(userName));
    } else {
      reject();
    }
  });
}
