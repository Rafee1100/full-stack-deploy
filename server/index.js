import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

// Define api route

app.get("/api/message",(req,res)=>{
    res.json({message: "Hello from Api server"})
})

const PORT = 4000
app.listen(PORT,()=> console.log(`server is running at http://localhost:${PORT}`))
