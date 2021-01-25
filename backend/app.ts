import * as path from 'path';
import Express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { getDirRouter } from './utils/router';
import passport from './passport/setup';
import config from './config';

const app = Express();

app.use(cookieParser());

app.use(
  session({
    secret: config.APP.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    name: config.APP.COOKIE_NAME,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(getDirRouter(path.join(__dirname, 'routes')));

export default app;
