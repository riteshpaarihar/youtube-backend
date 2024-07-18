//require('dotenv').config({ path: "./env", })
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env',
})
connectDB();




// (async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         console.log('Successfully connected to the database');
//         app.on('error', error => console.log(error));
//         app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
//     } catch (error) {
//         console.error('Error connecting to the database:', error);
//     }
// })()