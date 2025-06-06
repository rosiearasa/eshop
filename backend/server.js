import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';


import dotenv from 'dotenv';


dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'




const port = process.env.PORT||8001;

connectDB();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
//cookie parsermiddleware
app.use(cookieParser())

app.get('/', (req, res)=> {
res.send('API is Running...');
});
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=> console.log(`Server running on port ${port}`));