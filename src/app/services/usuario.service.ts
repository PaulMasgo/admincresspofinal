import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.models';
import { URL_SERVICIOS } from '../config/config.moule';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  UsuarioActivo:Usuario;


  constructor(private http:HttpClient) { }

  
  login(usuario:Usuario){
     let url = URL_SERVICIOS + '/login'
     return this.http.post(url,usuario); 
  }

  listarUsuarios(){
    let url = URL_SERVICIOS + '/usuario'
     return this.http.get(url); 
  }

  buscarUsuarioParametro(parametro){
    let url = `${URL_SERVICIOS}/usuario/buscar/${parametro}`
    return this.http.get(url);
  }

  registrar(usuario:Usuario){
    let url = URL_SERVICIOS + '/usuario'
   return this.http.post(url,usuario); 
  }

}
