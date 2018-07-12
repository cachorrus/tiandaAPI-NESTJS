import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { MongooseModule } from '@nestjs/mongoose';
import { usuarioSchema } from './schemas/usuario.schema';
import { SCHEMA_DB } from 'constantes';

@Module({
  imports: [MongooseModule.forFeature([{ name: SCHEMA_DB.usuario, schema: usuarioSchema }])],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
