import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to Mongdb ${connect.connection.host}`);
  } catch (error) {
    console.log("Error: ${error.message}");
    process.exit(1);
  }
};

export default connectDB;
