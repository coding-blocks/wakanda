import { Router } from 'express';
import controller from './controller';
import limiter from '../../../services/ratelimiter';

const router = Router();

router.post('/presignedUrl', controller.POSTPreseignUrl);

export default router;
