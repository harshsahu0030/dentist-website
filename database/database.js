import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DATABASENAME,
    });

    console.log("Database connect sucessfully");
  } catch (error) {
    console.log(`MongoDB Error: ${error}`);
  }
};
