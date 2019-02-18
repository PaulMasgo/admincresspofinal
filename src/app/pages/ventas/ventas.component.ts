import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/services/venta.service';
import { Venta } from 'src/app/models/venta.model';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventas:Venta[];
  

  constructor(public _ventasServices:VentaService) { }

  ngOnInit() {
    this.verVntas();
  }

  verVntas(){
    this._ventasServices.VerVentas()
    .subscribe((res:any) => {
        this.ventas = res.venta.reverse();
    })
  }

}
