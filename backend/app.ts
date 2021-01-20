import Express from 'express';
import { createConnection } from 'typeorm';
require('dotenv').config();
import ormconfig from './ormconfig';

const app = Express();

app.use((req, res) => {
  res.send('Hello World');
});

async function start() {
  await createConnection(ormconfig);
}

start();

export default app;
