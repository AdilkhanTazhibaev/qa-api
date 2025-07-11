import express from "express";
import {QuestionController} from "../controllers/question.controller";
import {AuthController} from "../controllers/auth.controller";

const router = express.Router()

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)


export default router
