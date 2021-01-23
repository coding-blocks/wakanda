import * as path from 'path';
import Express from 'express';
import { createRouter } from './base/router';
import RouterMap from './routes/router.json';
import passport from 'passport';

const app = Express();

app.use(passport.initialize());
app.use(passport.session());

app.use(createRouter(RouterMap, path.join(__dirname, 'routes')));

export default app;
