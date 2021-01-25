export default {
  APP: {
    PORT: Number(process.env.APP_PORT) || 5566,
    HOST: process.env.APP_HOST || '0.0.0.0',
    COOKIE_SECRET: process.env.COOKIE_SECRET || 'bleh',
    COOKIE_NAME: process.env.COOKIE_NAME || 'wakanda',
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
    CLIENT_ID: process.env.ONEAUTH_CLIENT_ID || '5926292294',
    CLIENT_SECRET:
      process.env.ONEAUTH_CLIENT_SECRET ||
      'axRpoUZa3fDIKFxWkm1sdMH22PavApG9gjYR6MVSMmDWtphuYtYt5MiIBCBob17J',
    REDIRECT_URL: process.env.ONEAUTH_REDIRECT_URL || 'http://localhost:5566/pages/login/callback',
  },
};
