import {Router} from 'express';
import applicationController from './applicationController';

const router = Router();

router.post('/posts', applicationController.post);
router.get('/posts', applicationController.getPosts);
router.get('/postsnumber', applicationController.getPostNumber);

export default router;
