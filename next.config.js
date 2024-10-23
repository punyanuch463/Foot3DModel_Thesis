module.exports = {
  reactStrictMode: true,
}

// next.config.js
const path = require('path');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: '/uploads/:path*', // This should be a URL path, not a local path
      },
    ];
  },
};