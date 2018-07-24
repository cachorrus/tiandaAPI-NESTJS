import {AuthGuard} from '@nestjs/passport';
import { Controller, Get, Post, Body, Param, UseInterceptors, UseGuards } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { ProductosService } from './productos.service';
import { Producto } from './interfaces/producto.interface';
import { TransformInterceptor } from 'common/interceptors/transform.interceptor';

@Controller('productos')
@UseInterceptors(TransformInterceptor)
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createProductoDto: CreateProductoDto) {
   return this.productosService.create(createProductoDto);
  }

  @Get('/list/:pagina?')
  async findAll(@Param() params): Promise<Producto[]> {
    // console.log('find All', params.pagina);
    return this.productosService.findAll(params.pagina);
  }

  @Get('/porTipo/:tipo/:pagina?')
  async findPerType(@Param() params): Promise<Producto[]> {
    // console.log('por Tipo', params.tipo, params.pagina);
    return this.productosService.findPerType(params.tipo, params.pagina);
  }

  @Get('/buscar/:termino')
  async search(@Param() params): Promise<Producto[]> {
    // const termino: string = params.termino;
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // if (termino.length === 0) {
    //   throw new HttpException('favor de ingresar un termino de busqueda', HttpStatus.BAD_REQUEST);
    // }
    // console.log('search', params.termino);
    return this.productosService.search(params.termino);
  }

}