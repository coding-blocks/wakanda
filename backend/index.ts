require('module-alias/register');
require('dotenv').config();
import config from './config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import ormconfig from './ormconfig';

(async () => {
  await createConnection(ormconfig);

  const app = require('./app').default;

  app.listen(config.APP.PORT, config.APP.HOST, () => {
    console.log(`Server started on ${config.APP.HOST}:${config.APP.PORT}`);
  });
})();
