import { Component, EventEmitter, Input, Output } from '@angular/core';
import { producto } from '../interface/producto.interfaces';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
@Input() producto!:producto;
@Output() clickComprar = new EventEmitter<producto>();

onClick():void{
 this.clickComprar.emit(this.producto);
}
}

