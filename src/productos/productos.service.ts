import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Producto } from './interfaces/producto.interface';
import { CreateProductoDto } from './dto/create-producto.dto';
import { SCHEMA_DB } from 'constantes';

@Injectable()
export class ProductosService {

  private itemsPerPage = 10;

  constructor(@InjectModel(SCHEMA_DB.producto) private readonly productoModel: Model<Producto>) {}

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const createProducto = new this.productoModel(createProductoDto);
    return await createProducto.save();
  }

  async findAll(pagina: number = 1): Promise<Producto[]> {

    pagina = pagina * this.itemsPerPage;
    return await this.productoModel
                    .find()
                    .skip(pagina - this.itemsPerPage)
                    .limit(this.itemsPerPage)
                    .populate(SCHEMA_DB.linea)
                    .exec();
  }

  async findPerType( tipo: string, pagina: number = 1 ) {
    pagina = pagina * this.itemsPerPage;

    return await this.productoModel
                    .find({ linea: tipo })
                    .populate(SCHEMA_DB.linea)
                    .skip(pagina - this.itemsPerPage)
                    .limit(this.itemsPerPage)
                    .exec();

  }

  async search( termino: string ) {

    const buscarRegex = new RegExp(termino, 'i');

    return await this.productoModel.find( { producto: buscarRegex } ).exec();

  }
}