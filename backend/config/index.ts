export default {
  APP: {
    PORT: Number(process.env.APP_PORT) || 5566,
    HOST: process.env.APP_HOST || '0.0.0.0',
  },
  DB: {
    username: process.env.DB_USER || 'wakanda',
    password: process.env.DB_PASS || 'wakanda',
    database: process.env.DB_NAME || 'wakanda',
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT) || 5432,
  },
  ONEAUTH: {
    URL: process.env.ONEAUTH_URL || 'https://account.codingblocks.com',
    CLIENT_ID: process.env.ONEAUTH_CLIENT_ID || '5038332966',
    CLIENT_SECRET:
      process.env.ONEAUTH_CLIENT_SECRET ||
      'btJtphsJfQgsgGtGWQnvFa0IKTgUjQK1XkgKY1sBE8aLIqNLR6Pg08ElJsBtujyq',
    REDIRECT_URL: process.env.ONEAUTH_REDIRECT_URL || 'http://dev.wakanda/pages/login/callback',
  },
};
