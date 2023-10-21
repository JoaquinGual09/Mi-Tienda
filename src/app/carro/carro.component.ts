import { Component } from "@angular/core";
import { comprasservice } from "../service/compras.service";


@Component({
    selector: 'app-carro',
    template: `
       <ng-container   *ngIf="{total:Total$ |async, cantidad: Cantidad$ | async} as datacarro"c>
        <ng-container *ngIf="datacarro.total"><button class="botonCompra" routerLink="FormularioDeCompra" >Comprar</button>
            {{datacarro.total | currency}}
            ({{datacarro.cantidad}})
        </ng-container>
       </ng-container>`,


})

export class carroComponent {

    Cantidad$ = this.comprasSvc.cantidad$;
    Total$ = this.comprasSvc.total$;
    Carro$ = this.comprasSvc.carro$;


    constructor(private comprasSvc: comprasservice) { }
}
