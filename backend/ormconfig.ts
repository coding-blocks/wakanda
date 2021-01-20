require('dotenv').config();
import config from './config';
import { ConnectionOptions } from 'typeorm';
let entities = [];
if ((require as any).context != null) {
  const entityContext = (require as any).context('../../wakanda/backend/entity/', true, /\.ts$/);
  entities = entityContext
    .keys()
    .map((modulePath) => entityContext(modulePath))
    .reduce((result, migrationModule) => {
      result.concat(
        Object.keys(migrationModule).map((key) => migrationModule[key]),
        [],
      );
    });
}

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
