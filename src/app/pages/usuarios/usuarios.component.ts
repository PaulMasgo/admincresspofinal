import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.models';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[];

  constructor(public _usuariosService:UsuarioService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this._usuariosService.listarUsuarios()
    .subscribe((res:any) =>{
      this.usuarios = res.usuarios
    })
  }


  buscar(paraemtro:String){
    if (paraemtro.length ===0 ){
         this.listar();
    }else{
        this._usuariosService.buscarUsuarioParametro(paraemtro)
        .subscribe((res:any) => this.usuarios =  res.usuarios)
    }
  }



}
