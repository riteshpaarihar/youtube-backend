import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`Connected to ${DB_NAME} database.`);
        console.log(`mongoDB connect ${connectionInstance.connection.host} `)
    } catch (error) {
        console.error(`Error connecting to ${DB_NAME} database: ${error.message}`);
        process.exit(1);
    }
}


export default connectDB;