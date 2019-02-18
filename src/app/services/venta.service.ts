import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config.moule';
import { Venta } from '../models/venta.model';

@Injectable({
  providedIn: 'root'
})
export class VentaService {


  constructor(private http:HttpClient) { }

  VerVentas(){
    let url = URL_SERVICIOS + '/venta';
    return this.http.get(url);
  }

  verVenta(id){
    let url = URL_SERVICIOS + '/verventa/' +id;
    return this.http.get(url);
  }

  detallesventa(venta){
    let url = URL_SERVICIOS + `/detalle/${venta}`
    return this.http.get(url);
  }

  cambiarEstado(id,estado){
    let url = URL_SERVICIOS + `/venta/${id}`
    return this.http.put(url,{estado:estado});
  }

}
