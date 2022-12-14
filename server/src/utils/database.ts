import mongoose from "mongoose";
import logger from "./logger";

const DB_CONNECTION_STRING =
    process.env.DB_CONNECTION_STRING ||
    "mongodb+srv://almogyamburg-admin:CTmv3ia0fhtvx14M@cluster0.l1cmd.mongodb.net/?retryWrites=true&w=majority";

export async function connectToDatabase() {
    try {
        await mongoose.connect(DB_CONNECTION_STRING);

        logger.info("Connect to database");
    } catch (error) {
        logger.error(error, "Failed to connect to database. Goodbye");
        process.exit(1);
    }
}

export async function disconnectFromDatabase() {
    await mongoose.connection.close();

    logger.info("Disconnect from database");

    return;
}
