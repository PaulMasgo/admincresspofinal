import { Component, OnInit } from '@angular/core';
import { Talla } from '../../../models/talla.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TallaService } from '../../../services/talla.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-sizes',
  templateUrl: './add-sizes.component.html',
  styles: []
})
export class AddSizesComponent implements OnInit {

  repetir:number[]=[];
  id:string;

  constructor(public route:ActivatedRoute,
              public router:Router,
              public _tallaService:TallaService ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  aumentar(numero:number){
    this.repetir=[];
    for (let i = 0; i < numero; i++) {
      this.repetir.push(i);
    }
  }

  registrar(talla,cantidad){
    console.log(talla,cantidad);
    let newTalla = new Talla(talla,cantidad,this.id);
    this._tallaService.agregar(newTalla)
    .subscribe((res:any) => {
      if(res.ok === true ){
        swal('Gurdado','La talla ha sido registrada','success');
      }else{
        swal('Error','hubo un problema por favor intente nuevamente ','error');
      }
    })
  }

  finalizar(){
    swal('Producto registrado','Los datos del producto han sido registrados','success')
    .then((res=>{
      this.router.navigate(['/products']);
    }))
  }

}
