import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { ProductoSchema } from './schemas/producto.schema';
import { SCHEMA_DB } from 'constantes';

@Module({
  imports: [MongooseModule.forFeature([{ name: SCHEMA_DB.producto, schema: ProductoSchema }])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}