import mongoose from "mongoose";
import logger from "./logger";
import dotenv from "dotenv";
dotenv.config();

const DB_CONNECTION_STRING = `${process.env.MONGO_URI}`;

// connect to Mongo
export async function connectToDatabase() {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    logger.info("Connected to database");
  } catch (e) {
    logger.error(e, "Failed to connect to database");
    process.exit(1);
  }
}

//  disconnect from Mongo
export async function disconnectFromDatabase() {
  await mongoose.connection.close();

  logger.info("Disconnected from database");

  return;
}
