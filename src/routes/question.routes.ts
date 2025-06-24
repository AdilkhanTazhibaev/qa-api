import express from "express";
import {QuestionController} from "../controllers/question.controller";
import {authMiddleware} from "../middlewares/auth.middleware";
import {roleMiddleware} from "../middlewares/role.middleware";


const router = express.Router()


router.post('/question', authMiddleware, QuestionController.create)
router.get('/questions', authMiddleware, QuestionController.getAll)
router.get('/question/:id', authMiddleware, QuestionController.getById)
router.delete('/question/:id', authMiddleware, roleMiddleware(['ADMIN']), QuestionController.deleteById)


export default router
