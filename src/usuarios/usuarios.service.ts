import { Injectable, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './interfaces/usuario.interface';
import { Model } from 'mongoose';
import { CreateUsuarioDTO } from './dto/create-usuario.dto';
import * as bcrypt from 'bcrypt';
import { SCHEMA_DB } from 'constantes';

@Injectable()
export class UsuariosService {

    constructor(@InjectModel(SCHEMA_DB.usuario) private readonly usuarioModel: Model<Usuario>) { }

    async create(createUsuarioDto: CreateUsuarioDTO ): Promise<Usuario> {
        const createUsuario = new this.usuarioModel(createUsuarioDto);
        return await createUsuario.save();
    }

    async getUsers(): Promise<Usuario[]> {
        return await this.usuarioModel.find();
    }

    async compareHash(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }

    async getUserByUsername(correo: string): Promise<Usuario> {
        return (await this.usuarioModel.find({ correo }))[0];
    }
}
