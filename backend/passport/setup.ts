import passport, { use } from 'passport';
import { Strategy as OneauthStrategy } from 'passport-oneauth';
import config from '../config';
import { User } from '../entity';
import { OneauthUser } from '../services/oneauth';
import { upsertUser } from '../utils/user';
import Repositories from '../repositories/index';

passport.serializeUser((user: User, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (userId: number, done) => {
  try {
    const user = await Repositories.user.findOne(userId);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(
  new OneauthStrategy(
    {
      authorizationURL: `${config.ONEAUTH.URL}/oauth/authorize`,
      tokenURL: `${config.ONEAUTH.URL}/oauth/token`,
      clientID: config.ONEAUTH.CLIENT_ID,
      clientSecret: config.ONEAUTH.CLIENT_SECRET,
      callbackURL: config.ONEAUTH.REDIRECT_URL,
      include: ['demographic'],
    },
    async (_accessToken, _refreshToken, profile: any, done) => {
      const oneauthUser: OneauthUser = profile._json;
      try {
        const user = await upsertUser(oneauthUser);
        return done(null, user);
      } catch (e) {
        done(e);
      }
    },
  ),
);

export default passport;
