import express  from "express";
import connectDB from './config/db.js';
import dotenv from "dotenv";
import setMiddleware from "./middleware/formDataMiddle.js";
import cloudinary  from 'cloudinary';

const app = express();

dotenv.config();
connectDB();
setMiddleware(app);
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });



const port = process.env.PORT; 

app.listen(port,()=>{
    console.log('app is running on port ' + port);
})