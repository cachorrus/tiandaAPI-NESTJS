import { Controller, Post, Body, HttpException, HttpStatus, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';
import { UsuariosService } from '../usuarios/usuarios.service';
import { CreateUsuarioDTO } from '../usuarios/dto/create-usuario.dto';
import { Usuario } from '../usuarios/interfaces/usuario.interface';

@Controller('auth')
@UseInterceptors(TransformInterceptor)
export class AuthController {

    constructor(
        private _authService: AuthService,
        private _usuarioService: UsuariosService) {}

    @Post('login')
    async loginUser(@Body() body: CreateUsuarioDTO) {
        if (!(body && body.correo && body.password)) {
            throw new HttpException('Correo y password son requeridos', HttpStatus.BAD_REQUEST);
            // return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required!' });
        }

        const user = await this._usuarioService.getUserByUsername(body.correo);

        if (user) {
            if (await this._usuarioService.compareHash(body.password, user.password)) {
                return await this._authService.createToken(user.id, user.correo);
            }
        }

        throw new HttpException('Correo y/o password incorrectos!', HttpStatus.BAD_REQUEST);
    }

    @Post('register')
    async registerUser(@Body() body: CreateUsuarioDTO): Promise<Usuario> {
        if (!(body && body.correo && body.password)) {
            throw new HttpException('Correo y password son requeridos', HttpStatus.BAD_REQUEST);
        }

        let user = await this._usuarioService.getUserByUsername(body.correo);

        if (user) {
            throw new HttpException('Este usuario ya existe', HttpStatus.BAD_REQUEST);
        } else {
            user = await this._usuarioService.create(body);
            // if (user) {
            //     user.password = 'undefined';
            // }
        }

        return user;
    }
}
