import { Component } from '@angular/core';
import { producto } from 'src/app/productos/interface/producto.interfaces';
import { CategoriaJeweleryService } from 'src/app/service/categoria-jewelery.service';
import { comprasservice } from 'src/app/service/compras.service';

@Component({
  selector: 'app-categoria-jewelery',
  templateUrl: './categoria-jewelery.component.html',

})
export class CategoriaJeweleryComponent {
  constructor(private categoriaJewelerySvc: CategoriaJeweleryService, private comprasSvc: comprasservice) { }

  data: producto[] = [];

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.categoriaJewelerySvc.getdata().subscribe(data => {
      this.data = data;
    })
  }

  comprarProducto(producto: producto): void {
    console.log('compra de producto', producto);
    this.comprasSvc.actualizarCarro(producto);
  }



}
