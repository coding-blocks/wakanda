require('dotenv').config();
import config from './config';
import { ConnectionOptions } from 'typeorm';
import * as path from 'path';

export default {
  ...config.DB,
  name: 'default',
  type: 'postgres',
  synchronize: false,
  logging: true,
  entities: [path.join(__dirname, 'entity/**/*.{js,ts}')],
  migrations: [path.join(__dirname, 'migration/**/*.{js,ts}')],
  subscribers: [path.join(__dirname, 'subscriber/**/*.{js,ts}')],
  cli: {
    entitiesDir: 'backend/entity',
    migrationsDir: 'backend/migration',
    subscribersDir: 'backend/subscriber',
  },
} as ConnectionOptions;
