import express from 'express';
import cors from 'cors'


import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js'

dotenv.config();
import connectDB from './config/db.js';

const port = process.env.PORT||8001;
connectDB();
const app = express();
app.use(cors())
app.get('/', (req, res)=> {
res.send('API is Running...');
});
app.use('/api/products', productRoutes);

app.listen(port, ()=> console.log(`Server running on port ${port}`));