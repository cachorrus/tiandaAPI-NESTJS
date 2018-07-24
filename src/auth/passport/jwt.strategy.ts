import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { JwtPayload } from '../interfaces/jwtPayload.interface';
import { SECRET_OR_KEY } from '../../constantes';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        // passReqToCallback: true,
        secretOrKey: SECRET_OR_KEY,
      });
  }

  async validate(payload: JwtPayload, done: VerifiedCallback) {
    // console.log(payload);
    const isValid = await this.authService.validateUser(payload.correo);
    if (!isValid) {
        return done(new UnauthorizedException('sin autorizacion'), false);
    }
    done(null, payload);
  }
}