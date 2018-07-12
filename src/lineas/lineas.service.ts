import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Linea } from './interfaces/linea.interface';
import { CrearLineaDto } from './dto/crearLineaDto.dto';
import { SCHEMA_DB } from 'constantes';

@Injectable()
export class LineasService {

    constructor(@InjectModel(SCHEMA_DB.linea) private readonly lineaModel: Model<Linea>) {}

    async findAll(): Promise<Linea[]> {
        return await this.lineaModel.find().exec();
    }

    async create(createLineaDto: CrearLineaDto ): Promise<any> {
        const createLinea = new this.lineaModel(createLineaDto);
        return await createLinea.save();
    }

}
