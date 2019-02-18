import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from '../../services/producto.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  productos:Producto[];

  constructor(public _productoService:ProductoService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(){
    this._productoService.listarProductos()
    .subscribe((res:any) => this.productos = res.Productos)
  }
  
  buscarproductos(paraemtro:String){
    if (paraemtro.length ===0 ){
         this.cargarProductos();
    }else{
        this._productoService.buscarProductoParametro(paraemtro)
        .subscribe((res:any) => this.productos =  res.Productos)
    }
  }


  eliminar(id){
    swal({
      title:'Deseea eliminar el producto',
      icon:'warning',
      buttons:[true,true],
      dangerMode:true
    })
    .then((val)=>{
      if(val){
        this._productoService.eliminarProducto(id)
        .subscribe((res:any) => {
          swal('Realizado','producto eliminado','success')
          .then(res=>{
              let index = this.productos.findIndex(item => item._id === id);
              console.log(index);
               this.productos.splice(index,1)
          })  
        });
      }
    })
    
  }

}
