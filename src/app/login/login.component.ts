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

  verificar(usuario:Usuario){
    console.log(usuario);
      switch (usuario.tipo) {
        case 'admin':
            this._usuarioService.UsuarioActivo = usuario;
            swal('Bienvenido', `Hola ${usuario.nombre}` ,'success');
            localStorage.setItem('usuario',JSON.stringify(this._usuarioService.UsuarioActivo));
            this.router.navigate(['/products'])        
          break;

        case 'gerente':
          this._usuarioService.UsuarioActivo = usuario;
          swal('Bienvenido', `Hola ${usuario.nombre}` ,'success');
          localStorage.setItem('usuario',JSON.stringify(this._usuarioService.UsuarioActivo));
          this.router.navigate(['/products'])        
        break;
      
        default:
          break;
      }
  }


  inicioSesion(correo,password){
    let usuario = new Usuario(null,correo,password)
    this._usuarioService.login(usuario)
    .subscribe((res:any) => {
      this.verificar(res.usuario);
    })
  }

}
