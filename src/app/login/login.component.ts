import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Usuario } from '../models/usuario.models';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router,public _usuarioService:UsuarioService) { }

  ngOnInit() {
  }

  inicioSesion(correo,password){
    let usuario = new Usuario(null,correo,password)
    this._usuarioService.login(usuario)
    .subscribe((res:any) => {
      if(res.ok === true && res.usuario.tipo == 'administrador'){
        this._usuarioService.UsuarioActivo = res.usuario;
        swal('Bienvenido', `Hola ${res.usuario.nombre}` ,'success');
        localStorage.setItem('usuario',JSON.stringify(this._usuarioService.UsuarioActivo));
        this.router.navigate(['/home'])
      }else{
        swal('Error','El usuario o contraseña son incorrectos','error')
      } 
    })
  }

}
