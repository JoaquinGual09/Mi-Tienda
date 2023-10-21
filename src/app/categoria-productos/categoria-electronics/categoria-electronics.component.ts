import { Component, OnInit } from '@angular/core';
import { CategoriaelectronicsService } from '../../service/categoria-electronics.service';
import { comprasservice } from '../../service/compras.service';
import { producto } from 'src/app/productos/interface/producto.interfaces';


@Component({
  selector: 'app-categoria-electronics',
  templateUrl: './categoria-electronics.component.html',

})
export class CategoriaelectronicsComponent implements OnInit {

  constructor(private categoriaelectronicsSvc: CategoriaelectronicsService, private comprasSvc: comprasservice) { }

  data: producto[] = [];

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.categoriaelectronicsSvc.getdata().subscribe(data => {
      this.data = data;
    })
  }

  comprarProducto(producto: producto): void {
    console.log('compra de producto', producto);
    this.comprasSvc.actualizarCarro(producto);
  }




}
