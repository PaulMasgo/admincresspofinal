import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.models';
import { URL_SERVICIOS } from 'src/app/config/config.moule';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  usuarioV:Usuario
  
  constructor(public usuario:UsuarioService,public router:Router) { }

  ngOnInit() {
    this.ObtenerUsuario();
  }

  ObtenerUsuario(){
    this.usuarioV = this.usuario.UsuarioActivo;
    if((this.usuarioV.imagen.indexOf('https'))<0){
      this.usuarioV.imagen = URL_SERVICIOS + '/img/usuarios/' + this.usuarioV.imagen
    } 
  }
  

  cerrarSesion(){
    swal({
      title:'¿Desea cerrar la sesión?',
      icon:'info',
      buttons:[true,true],
      dangerMode:true
    }).then((res)=>{
      if(res){
        this.usuario.UsuarioActivo = null;
        localStorage.removeItem('usuario');
        this.router.navigateByUrl('login');
        swal('Sesión cerrada','','success');
      }
    })
  }

}
