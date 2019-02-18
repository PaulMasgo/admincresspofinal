import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Talla } from '../models/talla.model';
import { URL_SERVICIOS } from '../config/config.moule';

@Injectable({
  providedIn: 'root'
})
export class TallaService {

  constructor(public http:HttpClient) { }

  agregar(talla:Talla){
    let url = URL_SERVICIOS + '/talla';
    return this.http.post(url,talla);
  }

  listar(prodducto:string){
    let url = URL_SERVICIOS +'/talla/' + prodducto;
    return this.http.get(url); 
  }

  actualizarCantidad(id,cantidad){
    let url = URL_SERVICIOS + '/talla/cantidad/' + id;
    return this.http.put(url,{cantidad:cantidad});
  }

}