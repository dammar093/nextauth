import mongoose from "mongoose";

export async function connectDb() {
  try {
    mongoose.connect(process.env.MONGO_URI!)
    const connetion = mongoose.connection;
    connetion.on("connected",()=>{
      console.log("Mongodb connected");
    })
    connetion.on("error",(e)=>{
      console.log("MongoDb connection error ::",e);
      process.exit(1);
    })
  } catch (error) {
    console.log("Error while connectin db ::",error);
  }
}