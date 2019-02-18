import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config.moule';
import { HttpClient } from '@angular/common/http';
import { Imagen } from '../models/imagen.models';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(public http:HttpClient) { }

  registrarImagen(imagen:Imagen){
    let url = URL_SERVICIOS+ '/img/producto';
     return this.http.post(url,imagen);
  }

  subirArchivo(archivo:File){

    return new Promise((resolve,reject)=>{
       let formData = new FormData();
       let xhr = new XMLHttpRequest();
       formData.append('image',archivo,archivo.name);
          xhr.onreadystatechange = ()=>{
          if(xhr.readyState === 4){
              if(xhr.status === 200){
              console.log('Imagen subida');
              resolve(xhr.response);
            }else{
              console.log('fallo la subida');
              reject(xhr.response);
            }
        };
    };

    let url = URL_SERVICIOS + '/img';
    xhr.open('POST',url,true);
    xhr.send(formData);
  });

   
}

}
