import { Document } from 'mongoose';

export interface Linea extends Document {
  readonly linea: string;
  readonly icono: string;
}