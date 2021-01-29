import * as path from 'path';
import Express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import morgan from 'morgan';
import { TypeormStore } from 'typeorm-store';
import cookieParser from 'cookie-parser';
import { getDirRouter } from './utils/router';
import passport from './passport/setup';
import config from './config';
import { getConnection } from 'typeorm';
import { Session } from './entity/session';

const app = Express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    store: new TypeormStore({ repository: getConnection().getRepository(Session) }),
    secret: config.APP.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    name: config.APP.COOKIE_NAME,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(getDirRouter(path.join(__dirname, 'routes')));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).json({
    errors: [
      {
        title: err.title || err.name,
        code: err.code,
        detail: err.detail,
      },
    ],
  });
});

export default app;
