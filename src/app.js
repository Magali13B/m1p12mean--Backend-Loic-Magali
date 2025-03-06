import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'; // Assurez-vous que l'extension .js est incluse
import connectDB from './config/database.js'; // Même chose pour database.js

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

export default app;
