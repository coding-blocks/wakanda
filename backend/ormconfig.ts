require('dotenv').config();
import config from './config';
import { ConnectionOptions } from 'typeorm';
import * as entities from './entity';

export default {
  ...config.DB,
  type: 'postgres',
  synchronize: false,
  logging: false,
  entities: Object.values(entities),
  migrations: ['migration/**/*.ts'],
  subscribers: ['subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'backend/entity',
    migrationsDir: 'backend/migration',
    subscribersDir: 'backend/subscriber',
  },
} as ConnectionOptions;
