import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config.moule';
import { Cupon } from '../models/cupon.model';

@Injectable({
  providedIn: 'root'
})
export class CuponService {

  constructor(private http:HttpClient) { }

  registrar(cupon:Cupon){
    let url = URL_SERVICIOS + '/cupon'
    return this.http.post(url,cupon)
  }

  ver(){
    let url = URL_SERVICIOS + '/cupon'
    return this.http.get(url);
  }

  actualizar(id,estado){
    let url = URL_SERVICIOS + '/cupon/' +id
    return this.http.put(url,{estado:estado});
  }

}
