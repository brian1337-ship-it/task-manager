import express from "express";
import cors from "cors";
import { connectToDatabase, disconnectFromDatabase } from "./utils/database";
import logger from "./utils/logger";
import helmet from "helmet";
import { CORS_ORIGIN } from "./constants";
import taskRoute from "./modules/task.route";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);
app.use(helmet()); // set and hide some headers for security purposes

// routes
app.use("/api/tasks", taskRoute);

// the server instance
const server = app.listen(PORT, async () => {
  await connectToDatabase();
  logger.info(`Server listening  on port ${PORT}`);
});

// signals to listen to
const signals = ["SIGTERM", "SIGINT"];

const gracefulShutdown = (signal: string) => {
  process.on(signal, async () => {
    logger.info("Got signal", signal);
    server.close();

    // disconnect from the db
    await disconnectFromDatabase();

    logger.info("Shutting down...");

    process.exit(0);
  });
};

// if signal detected execute graceful shutdown
for (let i = 0; i < signals.length; i++) {
  gracefulShutdown(signals[i]);
}
