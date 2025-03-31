import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import Task from "../models/taskModel";

dotenv.config(); // Load environment variables

// Define the structure for required DB config variables
interface DBConfig {
  DB_NAME: string;
  DB_USER: string;
  DB_PASS: string;
  DB_HOST: string;
  DB_PORT: number;
}

// Function to extract required environment variables
const getRequiredEnvVars = (): DBConfig => {
  const requiredEnv = ["DB_NAME", "DB_USER", "DB_PASS", "DB_HOST", "DB_PORT"];

  // Check if required variables are missing
  requiredEnv.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  });

  return {
    DB_NAME: process.env.DB_NAME as string,
    DB_USER: process.env.DB_USER as string,
    DB_PASS: process.env.DB_PASS as string,
    DB_HOST: process.env.DB_HOST as string,
    DB_PORT: parseInt(process.env.DB_PORT as string, 10) || 5432, // Default port 5432
  };
};

// Extract the required DB config
const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT } = getRequiredEnvVars();

// Create a Sequelize instance
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
  pool: {
    max: 10, // Maximum connections
    min: 0, // Minimum connections
    acquire: 30000, // Max time (ms) a connection can be idle before being released
    idle: 10000, // Max time (ms) a connection can be idle before being closed
  },
  logging: false, // Disable logging queries in console
});

// Retry mechanism for database connection
let retryCount = 0;

const connectWithRetry = async (): Promise<void> => {
    try {
      await sequelize.authenticate();
      console.log("✅ PostgreSQL is connected via Sequelize.");
  
      await sequelize.sync(); // Sync models with database
      console.log("✅ Database models synced.");
    } catch (error) {
      console.error("❌ Sequelize connection failed:", error);
      setTimeout(connectWithRetry, 2000);
    }
  };

export default connectWithRetry;
export { sequelize };
