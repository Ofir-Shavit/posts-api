import {Router} from 'express';
import applicationRoutes from './application';

const router = Router();

router.use('/', applicationRoutes);

export default router;
