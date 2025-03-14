import {Router} from 'express';
import { createServiceVehiculeController } from '../controllers/serviceVehicule.controller.js';
import { CreateMarqueVehicule, CreateTypeVehicule, CreateModeleVehicule } from '../controllers/vehicule.controller.js';


const router = Router();

router.post('/marqueVehicule', CreateMarqueVehicule);
router.post('/typeVehicule', CreateTypeVehicule);
router.post('/modeleVehicule', CreateModeleVehicule);

export default router;
