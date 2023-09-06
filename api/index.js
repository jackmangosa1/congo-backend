import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import CityRouter from "./routes/city.js"
import AuthRouter from "./routes/auth.js"
import UserRouter from "./routes/user.js"
import cookieParser from "cookie-parser"
import ThingsToDoRouter from "./routes/thingsTodo.js"
import FoodAndDrinksCategoryRouter from "./routes/foodAndDrinksCategory.js"
import FoodAndDrinksRouter from "./models/FoodAndDrinks.js"

const app = express()
dotenv.config()
const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log('Connected to Mongo DB!')
    } catch(error){
        throw error
    }
}
app.use(cookieParser())
app.use(express.json())
app.use('/api/cities', CityRouter)
app.use('/api/auth', AuthRouter)
app.use('/api/users', UserRouter)
app.use('/api/thingsToDo', ThingsToDoRouter)
app.use('/api/foodAndDrinksCategory', FoodAndDrinksCategoryRouter)
app.use('/api/foodAndDrinks', FoodAndDrinksRouter)

app.use((err, req, res, next) =>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
        
    })
})

app.listen(8800, () =>{
    connect()
    console.log('Connected to backend!')
})