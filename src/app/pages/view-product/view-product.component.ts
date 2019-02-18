import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from 'src/app/models/producto.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from '../../models/categoria.model';
import { TallaService } from 'src/app/services/talla.service';
import { Talla } from 'src/app/models/talla.model';
import swal from 'sweetalert';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styles: []
})
export class ViewProductComponent implements OnInit {
  
  tallas:Talla;
  categoria:Categoria[];
  producto:Producto;
  id:string;
  indexcategoria:number = 0;

  constructor(public route:ActivatedRoute,
              public _productoService:ProductoService,
              public _categoriaService:CategoriaService,
              public _tallaservice:TallaService) { }

  ngOnInit() {
    this.id =  this.route.snapshot.paramMap.get('id');
    this.listarTallas();
    this.llamarProducto();
    this.cargarCategorias();
  }

  llamarProducto(){
    this._productoService.obtenerProducto(this.id)
      .subscribe((res:any) => this.producto = res )
  }

  cargarCategorias(){
    this._categoriaService.listarCategorias()
    .subscribe((res:any) => {
    this.categoria = res
    })
  };

  listarTallas(){
    this._tallaservice.listar(this.id)
    .subscribe((res:any) =>{
      this.tallas = res.tallas
    });
  };

  cambiarCategoria(cat){
    this.indexcategoria = cat;
    console.log(this.indexcategoria);
  }

 

  actualizarProducto(nombre:string,descripcion:string,color:string,precio:number){
    let producto = new Producto(nombre,descripcion,precio,color,this.categoria[this.indexcategoria]);
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
      swal({
        title:'Desea actualizar los datos del producto?',
        buttons:[true,true],
        dangerMode:true
      }).then((val)=>{
        if(val){
          this._productoService.actualizarProducto(producto,this.id)
          .subscribe(res =>{
            console.log(res);
          })
        }
      })
      
    }
  };


  actualizarTalla(id,cantidad){
    this._tallaservice.actualizarCantidad(id,cantidad)
    .subscribe(res=>{
      console.log(res);
      swal('Realizado','Talla actualizada','success');
    })
  }

}
