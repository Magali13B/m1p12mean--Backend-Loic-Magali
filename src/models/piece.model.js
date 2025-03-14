import mongoose from 'mongoose';

const pieceSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prix: { type: Number, required: true }
});

export const pieceModelName = "Piece";

export const PieceModel = mongoose.model(pieceModelName, pieceSchema);