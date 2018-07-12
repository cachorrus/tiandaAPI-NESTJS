import { Document } from 'mongoose';
import { Usuario } from 'usuarios/interfaces/usuario.interface';

export interface Orden extends Document {
    readonly usuario: Usuario | string;
    readonly create_at: Date;
    // readonly orden_detalle: [OrdenDetalle | string];
}