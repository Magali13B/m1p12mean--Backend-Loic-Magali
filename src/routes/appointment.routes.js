import {Router} from 'express';
import { getAppointmentById, getPendingAppointmentsByClientId, createAppointment } from '../controllers/appointment.controller.js';

const router = Router();

router.post('/appointments', createAppointment);


router.get('/client/:clientId', getAppointmentById);

router.get('/client/:clientId/pending', getPendingAppointmentsByClientId);


export default router;