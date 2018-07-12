export class CreateProductoDto {
    readonly codigo: string;
    readonly producto: number;
    readonly linea: string;
    readonly proveedor: string;
    readonly descripcion: string;
    readonly precioCompra: number;
}