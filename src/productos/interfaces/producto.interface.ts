import { Document } from 'mongoose';
import { Linea } from 'lineas/interfaces/linea.interface';

export interface Producto extends Document {
  readonly codigo: string;
  readonly producto: string;
  readonly linea: Linea | string;
  readonly proveedor: string;
  readonly descripcion: string;
  readonly precioCompra: number;
}