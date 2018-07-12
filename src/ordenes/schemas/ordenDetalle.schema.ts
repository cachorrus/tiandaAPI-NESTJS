import { Schema } from 'mongoose';
import { SCHEMA_DB } from 'constantes';

export const OrdenDetalleSchema = new Schema({
    orden: { type: Schema.Types.ObjectId, ref: SCHEMA_DB.orden },
    producto: { type: Schema.Types.ObjectId, ref: SCHEMA_DB.producto},

});