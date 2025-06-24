import express from 'express'
import question from "./routes/question.routes";
import auth from "./routes/auth.route";
import answer from "./routes/answer.route";
import like from "./routes/like.route";



const app = express()
const PORT = 3000

app.use(express.json())

app.use(question)
app.use(auth)
app.use(answer)
app.use(like)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
