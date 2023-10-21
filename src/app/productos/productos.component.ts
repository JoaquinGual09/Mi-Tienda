import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { comprasservice } from '../service/compras.service';
import { producto } from './interface/producto.interfaces';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']

})
export class ProductosComponent implements OnInit{

constructor(private apiService:ApiService, private comprasSvc:comprasservice){}


  data: producto [] = [];

ngOnInit(): void {
this.llenarData();
}

llenarData (){
  this.apiService.getdata().subscribe(data => {
    this.data = data;
    console.log(data);

  })
}
comprarProducto(producto:producto):void{
console.log('compra de producto',producto);
this.comprasSvc.actualizarCarro(producto);
}

}
