import Express from 'express';
import { createConnection } from 'typeorm';
require('dotenv').config();
import config from './config';

const app = Express();

app.use((req, res) => {
  res.send('Hello World');
});

async function start() {
  await createConnection({
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
  });
}

start();

export default app;
