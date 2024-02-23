import express from "express";
import cors from 'cors'
import morgan from 'morgan'
import connect from "./database/connection.js";
import colors from 'colors'
import router from "./router/route.js";

const app = express()

// MIDDLEWARES

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by')


const port = 5000

app.get("/",(req,res)=>{
    res.status(201).json("Home GET Request")
})

// API ROUTES

app.use("/api",router)

// SERVER STARTS ONLY WHEN WE HAVE VALID DB CONNECTION

connect().then(()=>{
    try{
        app.listen(port,()=>{
            console.log(`SERVER RUNNING ON PORT ${port}`.magenta.italic)
        })
    }
    catch(error){
        console.log("Cannot connect to the server".red.italic)
    }
}).catch(error=>{
    console.log(`Error: ${error.message}`.red.bold)
})


