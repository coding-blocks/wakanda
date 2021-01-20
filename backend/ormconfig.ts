require('dotenv').config();
import config from './config';
import { ConnectionOptions } from 'typeorm';

export default {
  ...config.DB,
  type: 'postgres',
  synchronize: true,
  logging: false,
  entities: ['entity/**/*.ts'],
  migrations: ['migration/**/*.ts'],
  subscribers: ['subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'backend/entity',
    migrationsDir: 'backend/migration',
    subscribersDir: 'backend/subscriber',
  },
} as ConnectionOptions;
