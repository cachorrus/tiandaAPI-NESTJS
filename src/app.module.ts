import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { LineasModule } from './lineas/lineas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { OrdenesModule } from './ordenes/ordenes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://user:user123@ds249311.mlab.com:49311/tienda_nestjs'), // ('mongodb://localhost:27017/tienda'),
    ProductosModule,
    LineasModule,
    UsuariosModule,
    AuthModule,
    OrdenesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
