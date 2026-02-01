import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:3000",
            // add production url
        ],
        credentials: true,
        methods: ['GET','POST'],
        allowedHeaders:["Content-Type", "Authorization"]
    }
))

// Define api route

app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from Api server" })
})

const PORT = 4000
app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`))
