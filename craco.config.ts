import path from 'path';

module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      // your other aliases go here
    },
  },
};
