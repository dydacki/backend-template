import { Router } from 'express';
import { login } from '../controllers/authenticationController';
import { validateBodyResource } from '../middleware/validationHandler';
import { createSessionSchema } from '../schemas/sessionSchema';

const router = Router();
router.post('/login', validateBodyResource(createSessionSchema), login);
export default router;
