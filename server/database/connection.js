import mongoose from "mongoose";
import colors from 'colors'

const connect = async () =>{
    mongoose.set('strictQuery',true)
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/Auth",{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })

    console.log(`MongoDB Connected: ${db.connection.host}`.green.bold)
    return db
}

export default connect