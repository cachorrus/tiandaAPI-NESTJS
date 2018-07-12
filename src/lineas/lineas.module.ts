import { Module } from '@nestjs/common';
import { LineasController } from './lineas.controller';
import { LineasService } from './lineas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LineaSchema } from './schemas/linea.schema';
import { SCHEMA_DB } from 'constantes';

@Module({
  imports: [MongooseModule.forFeature([{ name: SCHEMA_DB.linea, schema: LineaSchema }])],
  controllers: [LineasController],
  providers: [LineasService],
})
export class LineasModule {}
