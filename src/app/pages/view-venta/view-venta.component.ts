import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VentaService } from 'src/app/services/venta.service';
import { Venta } from 'src/app/models/venta.model';
import { Detalle } from 'src/app/models/detalleVenta.models';
import swal from 'sweetalert';

@Component({
  selector: 'app-view-venta',
  templateUrl: './view-venta.component.html',
  styleUrls: ['./view-venta.component.css']
})
export class ViewVentaComponent implements OnInit {

  id:string;
  Venta:Venta;
  Detalles:Detalle[];

  constructor(public route:ActivatedRoute,
              public _ventaService:VentaService) { }

  ngOnInit() {
    this.id =  this.route.snapshot.paramMap.get('id');
    this.ObtenerVentra();
    this.VerDetalles();
  }

  ObtenerVentra(){
    console.log(this.id);
    this._ventaService.verVenta(this.id)
    .subscribe((res:any) => {
        this.Venta = res.venta;
    })
  }

  cambiarEstado(estado){

    swal({
      title:'Desea cambiar el estado',
      icon:'warning',
      buttons:[true,true],
      dangerMode:true
    }).then(res1=>{
      if(res1){
              this._ventaService.cambiarEstado(this.id,estado)
        .subscribe(res =>{
          swal('Realizado','Estado Actualizado','success')
          .then(res=>{
            this.ObtenerVentra();
          })
        })
      }
    })

  
  }

  VerDetalles(){
    this._ventaService.detallesventa(this.id)
    .subscribe((res:any) => {
      console.log(res)
      this.Detalles = res.detalle
    })
  }

}
