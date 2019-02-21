import { Usuario } from './usuario.models';

export class Direccion {
    constructor(
        public Direccion:string,
        public Tipo:string,
        public Ubigeo:string,
        public Usuario:Usuario,
        public Referencia?:string,
        public _id?:String
    ){

    }     
}