import { RendezVousModel } from '../models/rendezVous.model.js';
import { DemandeRendezVousModel } from '../models/demandeRendezVous.model.js';
import {SuiviRendezVousModel} from '../models/suiviRendezVous.model.js';

export const getRendezVousPrisParClient = async (clientId) => {
    return await RendezVousModel.find({ 'demandeRendezVous.client': clientId }).populate('demandeRendezVous').populate('mecanicien').populate('facture');
};

export const getDemandesEnAttenteParClient = async (clientId) => {
    return await DemandeRendezVousModel.find({ client: clientId }).populate('service').populate('modeleVehicule');
};
  
export const getDemandesParMecanicien = async (mecanicienId) => {
    return await RendezVousModel.find({ mecanicien: mecanicienId }).populate('demandeRendezVous').populate('facture');
};

export const getDetailRendezVous = async (rendezVousId) => {
    try{
        const rendezVous = await RendezVousModel.findById(rendezVousId).populate('demandeRendezVous').populate('mecanicien').populate('facture');
        if (!rendezVous) {
            throw new Error('Rendez-vous non trouvé');
        }
        const suivi = await SuiviRendezVousModel.findOne({ rendezVous: rendezVousId }).sort({ dateModification: -1 });
        if (!suivi) {
            throw new Error('Aucun suivi trouvé pour ce rendez-vous');
        }
        const demandeRendezVous = await DemandeRendezVousModel.findById(rendezVous.demandeRendezVous).populate('client').populate('service').populate('modeleVehicule');
        const etatDescription = {
            'En attente': 'Le rendez-vous est en attente de confirmation.',
            'Confirmé': 'Le rendez-vous est confirmé mais aucun travail n a encore commencé.',
            'En cours': `Travail en cours : ${suivi.progression}% terminé. Description : ${suivi.descriptionTravaux}. Estimation de sortie : ${suivi.estimationSortie ? suivi.estimationSortie.toLocaleDateString() : 'Non spécifiée'}.`,
            'Terminé': 'Le travail a été terminé.'
        };

        return {
            rendezVous,
            demandeRendezVous,
            suivi,
            etatDescription: etatDescription[suivi.etat] || 'État inconnu'
        };
    } catch (error) {
        throw new Error(error.message);
    }
};