import express from "express";
import {authMiddleware} from "../middlewares/auth.middleware";
import {CommentController} from "../controllers/comment.controller";


const router = express.Router()


router.post('/comment', authMiddleware, CommentController.create)

export default router
