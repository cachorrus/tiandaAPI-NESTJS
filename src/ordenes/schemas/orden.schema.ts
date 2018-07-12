import * as mongoose from 'mongoose';
import { SCHEMA_DB } from 'constantes';

export const OrdenSchema = new mongoose.Schema({
    usuario : { type: mongoose.Schema.Types.ObjectId, ref: SCHEMA_DB.usuario , required: true },
    create_at: { type: Date, default: Date.now},
    // orden_detalle: [ {type: mongoose.Schema.Types.ObjectId, ref: SCHEMA_DB.ORDEN_DETALLE} ],
}, { toJSON: { virtuals: true } });

// Specifying a virtual with a `ref` property is how you enable virtual population
// http://thecodebarbarian.com/mongoose-virtual-populate
OrdenSchema.virtual(SCHEMA_DB.orden_detalle, {
    ref: SCHEMA_DB.orden_detalle,
    localField: '_id',
    foreignField: SCHEMA_DB.orden,
});
