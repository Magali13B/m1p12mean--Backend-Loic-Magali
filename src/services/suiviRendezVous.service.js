import { SuiviRendezVousModel } from "../models/suiviRendezVous.model.js";

export const createSuiviRendezVous = async (data) => {
    const suivi = new SuiviRendezVousModel(data);
    return await suivi.save();
};

export const updateSuiviRendezVous = async (id, updateData) => {
    try {
        const updatedSuiviRendezVous = await SuiviRendezVousModel.findByIdAndUpdate(
            id,
            { 
                ...updateData,
                dateModification: Date.now()
            },
            { new: true }
        );
        if (!updatedSuiviRendezVous) {
            throw new Error('SuiviRendezVous non trouvé.');
        }
        return updatedSuiviRendezVous;
    } catch (error) {
        throw new Error(`Erreur lors de la mise à jour du SuiviRendezVous : ${error.message}`);
    }
};