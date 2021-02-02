import { Router } from 'express';
import passport from '../../../passport/setup';
import config from '../../../config';

const router = Router();

router.get('/', passport.authenticate('oneauth'));
router.get(
  '/callback',
  passport.authenticate('oneauth', {
    failureRedirect: '/',
    successReturnToOrRedirect: config.APP.PUBLIC_URL,
  }),
);

export default router;
