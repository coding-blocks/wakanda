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
    port: Number(process.env.DB_PORT) || 3306,
  },
};
