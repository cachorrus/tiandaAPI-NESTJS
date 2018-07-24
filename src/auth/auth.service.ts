import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from './interfaces/jwtPayload.interface';
import { UsuariosService } from '../usuarios/usuarios.service';
import { SECRET_OR_KEY } from '../constantes';

@Injectable()
export class AuthService {

    constructor(private _usuarioService: UsuariosService) {}

    async createToken(id: string, correo: string) {
        const expiresIn = '12h';
        const user: JwtPayload = { userId: id, correo }; // req.user
        const token = jwt.sign(user, SECRET_OR_KEY, { expiresIn });

        return { expires_in: expiresIn, token };
    }

    async validateUser(correo: string): Promise<boolean> {
        if (correo) {
          return Boolean(this._usuarioService.getUserByUsername(correo));
        }

        return false;
    }
}
