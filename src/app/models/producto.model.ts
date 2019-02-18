import { Categoria } from './categoria.model';
import { Imagen } from './imagen.models';

export class Producto {
    constructor(
        public nombre:string,
        public descripcion:string,
        public precio:number,
        public color:string,
        public categoria:Categoria,
        public imagen?:Imagen,
        public estado?:string,
        public _id?:string
    ){ }   
}