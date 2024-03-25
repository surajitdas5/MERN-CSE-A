const express = require('express')
const dbConnect = require("./db/db.config")
const interviewRouter = require("./routes/interview.routes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("", interviewRouter)

app.get("/", (req, res)=>{
    res.send("<h1>REST API!!!</h1>")
})


dbConnect()
app.listen(5000, ()=>console.log("http://localhost:5000"))