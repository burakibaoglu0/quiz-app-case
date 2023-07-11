const isProd = process.env.NODE_ENV === 'production';

const urlConfig = {
  BASE_URL: isProd ? 'https://jsonplaceholder.typicode.com/posts' : 'https://jsonplaceholder.typicode.com/posts'
};

export default urlConfig;