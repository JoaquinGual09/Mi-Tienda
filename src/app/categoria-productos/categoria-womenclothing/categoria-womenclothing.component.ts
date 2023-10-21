import { Component } from '@angular/core';
import { producto } from 'src/app/productos/interface/producto.interfaces';
import { CategoriaWomenclothingService } from 'src/app/service/categoria-womenclothing.service';
import { comprasservice } from 'src/app/service/compras.service';

@Component({
  selector: 'app-categoria-womenclothing',
  templateUrl: './categoria-womenclothing.component.html',

})
export class CategoriaWomenclothingComponent {
  constructor(private categoriaWomenclothingSvc: CategoriaWomenclothingService, private comprasSvc: comprasservice) { }

  data: producto[] = [];

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.categoriaWomenclothingSvc.getdata().subscribe(data => {
      this.data = data;
    })
  }

  comprarProducto(producto: producto): void {
    console.log('compra de producto', producto);
    this.comprasSvc.actualizarCarro(producto);
  }
}
