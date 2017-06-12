export function fetchUserLogin(userName, password) {
  return new Promise((resolve, reject) => {
    if (userName === 'test' && password === 'test') {
      resolve({ isAuthenticated: true });
    } else {
      reject();
    }
  });
}
