require('dotenv').config();
import config from './config';
import { ConnectionOptions } from 'typeorm';
import * as path from 'path';

export default {
  ...config.DB,
  type: 'postgres',
  synchronize: false,
  logging: false,
  entities: [path.join(__dirname, 'entity/**/*.ts')],
  migrations: [path.join(__dirname, 'migration/**/*.ts')],
  subscribers: [path.join(__dirname, 'subscriber/**/*.ts')],
  cli: {
    entitiesDir: 'backend/entity',
    migrationsDir: 'backend/migration',
    subscribersDir: 'backend/subscriber',
  },
} as ConnectionOptions;
