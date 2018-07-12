import {AuthGuard} from '@nestjs/passport';
import { Controller, Get, Post, Body, UseInterceptors, UsePipes, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { LineasService } from './lineas.service';
import { Linea } from './interfaces/linea.interface';
import { CrearLineaDto } from './dto/crearLineaDto.dto';
import { TransformInterceptor } from 'common/interceptors/transform.interceptor';
import { JwtPayload } from 'auth/interfaces/jwtPayload.interface';
import { Payload } from 'auth/decorators/Payload.decorator';

@Controller('lineas')
@UseInterceptors(TransformInterceptor)
@UseGuards(AuthGuard('jwt'))
export class LineasController {

    constructor(private readonly lineasService: LineasService) {}

    @Get()
    async findAll(): Promise<Linea[]> {
        return this.lineasService.findAll();
    }

    @Get('request')
    async request(@Payload() jwtPayload: JwtPayload) {
        return await jwtPayload;
    }

    @Post()
    // @UsePipes( new ValidationPipe())
    async create(@Body() createLineaDto: CrearLineaDto) {
     return this.lineasService.create(createLineaDto);
    }
}
