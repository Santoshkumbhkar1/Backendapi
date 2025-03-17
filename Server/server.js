//for main 

import express from 'express';
import dotenv from 'dotenv';
import connectDb  from './Db.js'; 
import authroutes from './routes/authroutes.js';


dotenv.config();
const app= express();
connectDb();
app.use(express.json());

app.use('/api/auth',authroutes);

const PORT  =5000;

app.listen(PORT ,()=>{
    console.log(`server part is running  on ${PORT}`);
})

