import express from "express";
import {QuestionController} from "../controllers/question.controller";
import {authMiddleware} from "../middlewares/auth.middleware";
import {roleMiddleware} from "../middlewares/role.middleware";
import {upload} from "../middlewares/upload.middleware";


const router = express.Router()


router.post('/question', authMiddleware, upload.single('file'), QuestionController.create)
router.get('/questions', authMiddleware, QuestionController.getAll)
router.get('/question/:id', authMiddleware, QuestionController.getById)
router.delete('/question/:id', authMiddleware, roleMiddleware(['ADMIN']), QuestionController.deleteById)


export default router
