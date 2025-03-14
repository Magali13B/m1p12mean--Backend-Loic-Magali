import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'; 
import serviceVehiculeRoute from './routes/serviceVehicule.route.js';
import vehiculeRoute from './routes/vehicule.routes.js';
import rendezVousRoute from './routes/rendezvous.routes.js';
import connectDB from './config/database.js';

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api', serviceVehiculeRoute);
app.use('/api/vehicule', vehiculeRoute);
app.use('/api/rdv', rendezVousRoute);

export default app;
