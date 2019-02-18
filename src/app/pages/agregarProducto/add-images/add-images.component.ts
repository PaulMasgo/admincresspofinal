import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { ImagenService } from '../../../services/imagen.service';
import { Imagen } from 'src/app/models/imagen.models';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styles: []
})

export class AddImagesComponent implements OnInit {

  imagen:File;
  imagen2:File;
  imagen3:File;
  nombre:string;
  nombre2:string;
  nombre3:string;
  id:string;

  constructor(public _imagenService:ImagenService,public route:ActivatedRoute,public _productoService:ProductoService,public router:Router) { }

  ngOnInit() {
  }

  regitsrarImagenes(){
    let imagen = new Imagen(this.nombre,this.nombre2,this.nombre3)
    this._imagenService.registrarImagen(imagen)
    .subscribe((res:any)=>{
        console.log(res);
        this.id = res.imagen._id;
        console.log(this.id);
        this.updateproducto();
  
    })
  };
  
  updateproducto(){
    let id = this.route.snapshot.paramMap.get('id');;
    this._productoService.Subirfoto(id,this.id)
    .subscribe(res => {this.router.navigate(['/add-size',id]);swal('Paso 2:Completo','Producto Registrado','success');})
  }
  
  
  //************* Imagen 1 ****************  */
  
    seleccionarImagen(Image:File){
      if(!Image){this.imagen = null;return
      }else{ this.imagen = Image;}
    }
    subirImagen(){
      this._imagenService.subirArchivo(this.imagen)
      .then((res:any) =>{ this.nombre = res;swal('Imagen guardada','','success')});
    }
  
  //************* Imagen 2 *****************  */
  
  seleccionarImagen2(Image:File){
    if(!Image){this.imagen = null;return
    }else{this.imagen2 = Image}
  }
  subirImagen2(){
    this._imagenService.subirArchivo(this.imagen2)
    .then((res:any) => {this.nombre2 = res ; swal('Imagen guardada','','success')});
  }
  
  //**************  Imagen 3 ****************  */
  
  seleccionarImagen3(Image:File){
    if(!Image){this.imagen = null;return
    }else{ this.imagen3 = Image}
  }
  subirImagen3(){
    this._imagenService.subirArchivo(this.imagen3)
    .then((res:any) => {this.nombre3 = res;swal('Imagen guardada','','success')});
  }

 
}

