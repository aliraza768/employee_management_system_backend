// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import router from './routes/userRoutes.js';
import morgan from 'morgan';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json())

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(morgan("dev"));

// Parse JSON payloads
app.use(express.json());

// Register routes
app.use("/api/v1", router);

// Connect to DB and start server
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
