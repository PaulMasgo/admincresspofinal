import { Usuario } from './usuario.models';
import { Direccion } from './direccion.model';

export class Venta {
    constructor(
        public Fecha:String,
        public usuario:Usuario,
        public monto:Number,
        public estado ?:String,
        public boleta?:String,
        public codigo?:String,
        public descuento?:Number,
        public direccion?:Direccion,
        public _id?:string,
        public tipo?:string

    ){

    }     
}