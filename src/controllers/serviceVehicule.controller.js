import { createServiceVehicule } from "../utils/serviceVehicule.util.js";

export const createServiceVehiculeController = async (req, res) => {
    const { nom, prix } = req.body;

    if (!nom || !prix) {
        return res.status(400).json({ message: 'Nom et prix sont requis.' });
    }

    try {
        const serviceData = { nom, prix };
        const newService = await createServiceVehicule(serviceData);
        return res.status(201).json({ message: 'Service créé avec succès', service: newService });
    } catch (error) {
        console.error('Erreur lors de la création du service:', error);
        return res.status(500).json({ message: 'Erreur serveur' });
    }
};