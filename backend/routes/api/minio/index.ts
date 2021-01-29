import { Router } from 'express';

import { isAuthenticated } from '../../../middlewares/authentication';
import controller from './controller';

const router = Router();

router.use(isAuthenticated);
router.post('/presignedUrl', controller.POSTPreseignUrl);

export default router;
