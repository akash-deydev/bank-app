import mongoose from "mongoose";

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully...");
  } catch (error) {
    console.log(error);
  }
}

export default connectToMongoDB;
