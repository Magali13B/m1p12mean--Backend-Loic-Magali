import {Router} from 'express';
import { getRendezVousClient, getDetailRendezVousController, CreerSuiviController, CreateDemandeRendezVous, CreateRendezVous } from '../controllers/rendezvous.controller.js';


const router = Router();

router.post('/screen', CreateRendezVous);
router.get('/client', getRendezVousClient);
router.get('/:id', getDetailRendezVousController);
router.post('/suivi', CreerSuiviController);
router.post('/demanderdv', CreateDemandeRendezVous);

export default router;
