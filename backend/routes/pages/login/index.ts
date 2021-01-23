import { Router } from 'express';
import passport from 'passport/setup';

const router = Router();

router.get('/', passport.authenticate('oneauth'));
router.get(
  '/callback',
  passport.authenticate('oneauth', {
    failureRedirect: '/',
    successReturnToOrRedirect: '/',
  }),
);

export default router;
