import { Document } from 'mongoose';

export interface Usuario extends Document {
    readonly correo: string;
    readonly password: string;
}