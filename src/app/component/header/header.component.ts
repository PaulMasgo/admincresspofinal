import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private _usuarioService:UsuarioService,private router:Router) { }

  ngOnInit() {
    this.verificarStorage();
  }

  verificarStorage(){
    let user = localStorage.getItem('usuario');
    if(user){
      this._usuarioService.UsuarioActivo = JSON.parse(user);
    }else{
      this.router.navigate(['/login']);
    }
  }


}
