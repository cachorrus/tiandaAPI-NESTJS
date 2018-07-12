import { Module } from '@nestjs/common';
import { OrdenesService } from './ordenes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdenSchema } from './schemas/orden.schema';
import { OrdenesController } from './ordenes.controller';
import { OrdenDetalleSchema } from './schemas/ordenDetalle.schema';
import { SCHEMA_DB } from 'constantes';

@Module({
  imports: [MongooseModule.forFeature([
                                        { name: SCHEMA_DB.orden, schema: OrdenSchema },
                                        { name: SCHEMA_DB.orden_detalle, schema: OrdenDetalleSchema },
                                      ])],
  providers: [OrdenesService],
  controllers: [OrdenesController],
})
export class OrdenesModule {}
