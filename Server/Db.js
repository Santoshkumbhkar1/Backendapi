//  for mongodb connection
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();



const connectDb =async()=>{
    //  for connection to mongodb

try {
    await mongoose.connect(process.env.MONGO_URI) ;
   console.log('mongo conncted securirly');
} catch (error) {
    console.log("mongodo error" ,error);
    
}

};

export default connectDb ;