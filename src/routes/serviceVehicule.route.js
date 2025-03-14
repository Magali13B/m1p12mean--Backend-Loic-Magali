import {Router} from 'express';
import { createServiceVehiculeController } from '../controllers/serviceVehicule.controller.js';


const router = Router();

router.post('/serviceVehicule', createServiceVehiculeController);

export default router;
