import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Orden } from './interfaces/orden.interface';
import { Model } from 'mongoose';
import { OrdenDetalle } from './interfaces/ordenDetalle.interface';
import { SCHEMA_DB } from 'constantes';

@Injectable()
export class OrdenesService {

    constructor(
        @InjectModel(SCHEMA_DB.orden) private ordenModel: Model<Orden>,
        @InjectModel(SCHEMA_DB.orden_detalle) private ordenDetalleModel: Model<OrdenDetalle>,
    ) {}

    async createOrden(usuario: string, productos: Array<string>): Promise<Orden> {
        const createOrden = new this.ordenModel({ usuario });

        try {
            const orderSaved = await createOrden.save();
            productos.forEach( async producto => {
                const detalle = new this.ordenDetalleModel({
                                        orden: createOrden._id,
                                        producto,
                                    });

                await detalle.save();
            });

            return orderSaved;

        } catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            throw( new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR));
        }
    }

    async findById(id: string): Promise<Orden>{

        return await this.ordenModel
                        .findById(id)
                        .populate({
                            path: SCHEMA_DB.orden_detalle,
                            populate: {
                                path: SCHEMA_DB.producto,
                                select: 'codigo producto',
                            },
                        })
                        .exec();
    }

    async findByUsuarioId(usuario: string): Promise<Orden[]> {
        return await this.ordenModel
                        .find({ usuario } )
                        .populate({
                            path: SCHEMA_DB.orden_detalle,
                            populate: {
                                path: SCHEMA_DB.producto,
                            },
                        })
                        .exec();
    }

    async borrarOrdenByIdAndUserId(id: string, usuario: string) {

        const exist = await this.ordenModel.findOneAndRemove({ _id: id, usuario }).exec();
        // console.log(exist);
        if ( exist ) {

            this.ordenDetalleModel.remove( { orden: id } ).exec();

            // return exist;
            return {
                 mensaje: 'Orden borrada',
            };
        } else {
            throw( new HttpException('No puedes eliminar esta orden', HttpStatus.BAD_REQUEST ));
        }

    }
}
