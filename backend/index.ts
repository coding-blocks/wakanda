require('module-alias/register');
require('dotenv').config();
import config from './config';
import app from './app';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import ormconfig from './ormconfig';
import { getConnection } from 'typeorm';
import { Repositories } from './repositories/index';

(async () => {
  await createConnection(ormconfig);
  app.listen(config.APP.PORT, config.APP.HOST, () => {
    console.log(`Server started on ${config.APP.HOST}:${config.APP.PORT}`);
  });
})();
