import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  extensionesPer:string[]=['gmail.com','hotmail.com','continental.edu.pe']
  tipo:string = 'admin';
  constructor(public _usuarioService:UsuarioService,
              public router:Router) { }

  ngOnInit() {
  }



  cambiartipo(tipo){
    this.tipo = tipo;
  }


  validar(nombre:string,apellido:string,correo:string,telefono:string,password:string,password2:string){

    let usuario = new Usuario(`${nombre} ${apellido}`,correo,password,telefono,null,null,this.tipo);
    let campos = [nombre,apellido,correo,telefono,password];
    let vacio = false;
    for (let i = 0; i < campos.length; i++) {
      if(campos[i].length <= 0 ){
          vacio = true;
          break;
      }
    }

    
    let correoCortado = correo.split('@');
    let extension = correoCortado[correoCortado.length -1 ];
    if(this.extensionesPer.indexOf(extension) < 0){
      swal('Error','El correo no es valido','warning')
    }else{
      if(vacio === true){
        swal('Error','Ningun campo puede estar vacio','warning')
      }else{
        if(password != password2){
          swal('Error','Las contraseñas no coinciden','warning')
        }else{
          this.registrar(usuario);
        }      
      }
    }
  }

  registrar(usuario:Usuario){
    this._usuarioService.registrar(usuario)
    .subscribe((res:any) => {
      if(res.ok === true){
        swal('Empleado Registrado','Se envio el codigo de verficacion al correo ingresado sera usado en el primer inicio de sesión' , 'success')
        this.router.navigate(['/usuarios']);
      }else{
        console.log(res);
        swal('Error','Upps algo mal intentalo nuevamente');
      }
    });
  }

}
