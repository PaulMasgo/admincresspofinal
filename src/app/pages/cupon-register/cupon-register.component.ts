import { Component, OnInit } from '@angular/core';
import { CuponService } from 'src/app/services/cupon.service';
import { Cupon } from 'src/app/models/cupon.model';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cupon-register',
  templateUrl: './cupon-register.component.html',
  styleUrls: ['./cupon-register.component.css']
})
export class CuponRegisterComponent implements OnInit {

  constructor(public _cupoService:CuponService,public Router:Router) { }

  ngOnInit() {
  }

  registrarCupon(nombre,monto){
    swal({
      title:'Desea registrar el cupon',
      icon:'warning',
      buttons:[true,true],
      dangerMode:true
    }).then(res=>{
      if(res){
          let cupon = new Cupon(nombre,monto)
          this._cupoService.registrar(cupon)
          .subscribe(res => {
            console.log('Realizado','El cupon ha sido registrado','success');
            this.Router.navigate(['/cupon']);
          });
      }
    })
    
  }

}
