import { Router } from 'express';
import { createUserHandler } from '../controllers/user.controller.js';


const router = Router();

router.post("/create", createUserHandler);

export default router;

