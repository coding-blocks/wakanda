import * as path from 'path';
import Express from 'express';
import { createRouter } from './base/router';
import RouterMap from './routes/router.json';

const app = Express();

app.use(createRouter(RouterMap, path.join(__dirname, 'routes')));

export default app;
