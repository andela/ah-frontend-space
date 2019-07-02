export default {
  post: jest.fn(() => Promise((resolve, reject) => {
    resolve({ data: {} });
    reject({ errors: {} });
  })),
};
