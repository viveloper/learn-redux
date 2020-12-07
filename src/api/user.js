export const fetchUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Hong',
      });
    }, 500);
  });
};
