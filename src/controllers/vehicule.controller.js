import { createMarqueVehicule } from "../services/marqueVehicule.service.js";
import { createTypeVehicule } from "../services/typeVehicule.service.js";
import { createModeleVehicule } from "../services/modeleVehicule.service.js";

export const CreateMarqueVehicule = async (req, res) => {
    const { nom } = req.body;
    if (!nom) {
      return res.status(400).json({ message: 'Le champs nom est requis.' });
    }
    try {
        const data = {nom};
        const marqueVoiture = await createMarqueVehicule(data);
        return res.status(201).json({ message: 'Marque de vehicule créé avec succès', marque: marqueVoiture });
    } catch (error) {
      console.error('Erreur lors de la création :', error);
      return res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
};

export const CreateTypeVehicule = async (req, res) => {
    const { nom } = req.body;
    if (!nom) {
      return res.status(400).json({ message: 'Le champs nom est requis.' });
    }
    try {
        const data = {nom};
        const typeVehicule = await createTypeVehicule(data);
        return res.status(201).json({ message: 'Type de vehicule créé avec succès', marque: typeVehicule });
    } catch (error) {
      console.error('Erreur lors de la création :', error);
      return res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
};

export const CreateModeleVehicule = async (req, res) => {
  const { nom, marqueVehicule, typeVehicule, puissance, annee } = req.body;
  if (!nom || !marqueVehicule || !typeVehicule) {
    return res.status(400).json({ message: 'Les champs nom, marque et type est requis.' });
  }
  try {
      const data = {nom, marqueVehicule, typeVehicule, puissance, annee};
      const modeleVehicule = await createModeleVehicule(data);
      return res.status(201).json({ message: 'Modèle de vehicule créé avec succès', marque: modeleVehicule });
  } catch (error) {
    console.error('Erreur lors de la création :', error);
    return res.status(500).json({ message: 'Erreur interne du serveur.' });
  }
};