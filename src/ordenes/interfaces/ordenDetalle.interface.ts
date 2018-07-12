import { Document } from 'mongoose';
import { Orden } from './orden.interface';
import { Producto } from 'productos/interfaces/producto.interface';

export interface OrdenDetalle extends Document {
    orden: Orden | string;
    producto: Producto | string;
}