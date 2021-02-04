import { Router } from 'express';
import controller from './controller';

const router = Router();

router.post('/presignedUrl', controller.POSTPreseignUrl);

export default router;
