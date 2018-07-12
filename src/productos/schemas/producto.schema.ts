import * as mongoose from 'mongoose';
import { SCHEMA_DB } from 'constantes';

export const ProductoSchema = new mongoose.Schema({
    codigo: { type: String, required: true },
    producto: { type: String, required: true },
    linea:  { type: mongoose.Schema.Types.ObjectId, ref: SCHEMA_DB.linea, required: true },
    proveedor: { type: String, required: true },
    descripcion: { type: String, required: true },
    precioCompra: { type: Number, required: true },
});
