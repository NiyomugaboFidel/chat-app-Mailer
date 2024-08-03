import express from 'express'
import { getAllChat } from '../controllers/chat.controllers.js';
import authMiddleware from '../middlewares/auth.middleware.js';
const router = express.Router()

router.get('/',authMiddleware,getAllChat);

export default router