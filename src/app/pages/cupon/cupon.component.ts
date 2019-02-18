import { Component, OnInit } from '@angular/core';
import { CuponService } from 'src/app/services/cupon.service';
import { Cupon } from 'src/app/models/cupon.model';

@Component({
  selector: 'app-cupon',
  templateUrl: './cupon.component.html',
  styleUrls: ['./cupon.component.css']
})
export class CuponComponent implements OnInit {

  cupones:Cupon[]

  constructor(public _cupoService:CuponService) { }

  ngOnInit() {
    this.listarCupones();
  }


  listarCupones(){
    this._cupoService.ver()
    .subscribe((res:any) =>{
      this.cupones = res.data;
    })
  }

  cambiarDesactivado(id)
  {
    this._cupoService.actualizar(id,false)
    .subscribe((res:any)=>{
        this.listarCupones();
    })
  }

  cambiarActivado(id)
  {
    this._cupoService.actualizar(id,true)
    .subscribe((res:any)=>{
      this.listarCupones();
    })
  }


}
