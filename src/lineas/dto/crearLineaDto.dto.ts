import { IsString } from 'class-validator';

export class CrearLineaDto {

    @IsString()
    readonly linea: string;

    @IsString()
    readonly icono: string;
}