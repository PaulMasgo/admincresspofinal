import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../models/categoria.model';
import { Producto } from '../../../models/producto.model';
import { CategoriaService } from '../../../services/categoria.service';
import { ProductoService } from '../../../services/producto.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styles: []
})
export class AddProductComponent implements OnInit {

  categoria:Categoria[]=[]
  codigoCategoria:Categoria;

  constructor(public  _categoriaService:CategoriaService, public _productoservice:ProductoService,public router: Router) { }

  ngOnInit() {
    this.cargarCategorias();
  }

  registrarProducto(nombre:string,descripcion:string,color:string,precio:number){
    let producto = new Producto(nombre,descripcion,precio,color,this.codigoCategoria);
    let vacio = false;
    let campos:any = [nombre,descripcion,color,precio];

    for (let i = 0; i < campos.length; i++) {
      if(campos[i].length <=0 ){
        vacio = true;
        break;
      }
    }
    if(vacio===true){
      swal('Error nungun campo puede quedar vacio');
    }else{
      this.enviarProducto(producto);
      
    }
  };

  enviarProducto(producto:Producto){
    this._productoservice.agregar(producto)
    .subscribe((res:any) => {
      if(res.ok === true){
        swal('Paso 1:Completo','Datos del producto registrados','success');
        this.router.navigate(['/add-image', res.producto._id])
      }else{
        swal('Upps!','algo salio mal intentalo nuevamente','error');
      }
    });
  }
  
  cargarCategorias(){
    this._categoriaService.listarCategorias()
    .subscribe((res:any) => {
    this.categoria = res;
    this.codigoCategoria = res[0]._id;
    })
  };

  obtenerCodigo(codigo){
    this.codigoCategoria = codigo;
    console.log(this.codigoCategoria);
  };
}
