import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public usuario:UsuarioService,public router:Router) { }

  ngOnInit() {
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
