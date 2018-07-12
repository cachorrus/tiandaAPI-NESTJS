import * as mongoose from 'mongoose';

export const LineaSchema = new mongoose.Schema({
    linea: { type: String, required: true },
    icono: { type: String, required: true },
});
