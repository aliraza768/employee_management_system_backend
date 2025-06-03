import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import router from './routes/userRoutes.js';

// Load environment variables from .env file
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1" , router)


const PORT = process.env.PORT || 4000;
connectDB()


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
