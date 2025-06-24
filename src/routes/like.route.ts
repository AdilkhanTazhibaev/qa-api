import express from "express";
import {LikeController} from "../controllers/like.controller";
import {authMiddleware} from "../middlewares/auth.middleware";

const router = express.Router()

router.post('/like/:questionId', authMiddleware, LikeController.toggle)
router.delete('/like/:questionId', authMiddleware, LikeController.toggle)
router.get('/likes/:questionId', authMiddleware, LikeController.getList)


export default router
