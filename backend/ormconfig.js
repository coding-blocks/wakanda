require('dotenv').config();
const config = require('./config').default;

module.exports = {
  ...config.DB,
  type: 'postgres',
  synchronize: true,
  logging: false,
  entities: ['entity/**/*.ts'],
  migrations: ['migration/**/*.ts'],
  subscribers: ['subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'entity',
    migrationsDir: 'migration',
    subscribersDir: 'subscriber',
  },
};
