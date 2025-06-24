import express from 'express'
import question from "./routes/question.routes";
import auth from "./routes/auth.route";
import router from "./routes/answer.route";



const app = express()
const PORT = 3000

app.use(express.json())

app.use(question)
app.use(auth)
app.use(router)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
