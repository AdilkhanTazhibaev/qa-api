import express from "express";
import {authMiddleware} from "../middlewares/auth.middleware";
import {AnswerController} from "../controllers/answer.controller";


const router = express.Router()


router.post('/answer', authMiddleware, AnswerController.create)
router.get('/answers', authMiddleware, AnswerController.getListByUserId)
router.get('/answers/:questionId', authMiddleware, AnswerController.getListByQuestionId)

export default router
