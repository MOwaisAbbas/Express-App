import { Router } from 'express';
import { createUserHandler, getAllUserHandler } from '../controllers/user.controller.js';


const router = Router();


router.get('/all', getAllUserHandler)
router.post("/create", createUserHandler);

export default router;

