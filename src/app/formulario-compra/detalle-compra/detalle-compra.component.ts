import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { comprasservice } from 'src/app/service/compras.service';

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.scss'],
  standalone: true,
  imports: [
      CommonModule
  ],
})
export class DetalleCompraComponent {

  constructor(private compraSvc: comprasservice) { }

  total$ = this.compraSvc.total$;
  cart$ = this.compraSvc.carro$;
}
