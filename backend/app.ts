import * as path from 'path';
import Express from 'express';
import { getDirRouter } from './utils/router';
import passport from './passport/setup';

const app = Express();

app.use(passport.initialize());
app.use(passport.session());

app.use(getDirRouter(path.join(__dirname, 'routes')));

export default app;
