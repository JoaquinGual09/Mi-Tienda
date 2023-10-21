import { Component } from '@angular/core';
import { producto } from 'src/app/productos/interface/producto.interfaces';
import { CategoriaMenclothingService } from 'src/app/service/categoria-menclothing.service';
import { comprasservice } from 'src/app/service/compras.service';

@Component({
  selector: 'app-categoria-menclothing',
  templateUrl: './categoria-menclothing.component.html',

})
export class CategoriaMenclothingComponent {
  constructor(private categoriaMenclothingSvc: CategoriaMenclothingService, private comprasSvc: comprasservice) { }

  data: producto[] = [];

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.categoriaMenclothingSvc.getdata().subscribe(data => {
      this.data = data;
    })
  }

  comprarProducto(producto: producto): void {
    console.log('compra de producto', producto);
    this.comprasSvc.actualizarCarro(producto);
  }



}

