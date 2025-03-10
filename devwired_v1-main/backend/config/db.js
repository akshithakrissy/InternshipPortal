import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {

    const conn = await mongoose.connect(
      "mongodb+srv://dharaniya0208:bIvmCRVmsgfAL0Ub@cluster0.0ilzitb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
