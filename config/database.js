import mongoose from "mongoose";

export const connectDB = async () => {
    const {connection} = await mongoose.connect(process.env.Mongo_URI);

    console.log(`Databse is connect with ${connection.host}`);


};