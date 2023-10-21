import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { producto } from "../productos/interface/producto.interfaces";

@Injectable(
    { providedIn: 'root' }
)
export class comprasservice {
    productos: producto[] = [];

    private carroSubject = new BehaviorSubject<producto[]>([]);
    private totalSubject = new BehaviorSubject<number>(0);
    private cantidadSubject = new BehaviorSubject<number>(0);


    get total$(): Observable<number> {
        return this.totalSubject.asObservable();
    }
    get cantidad$(): Observable<number> {
        return this.cantidadSubject.asObservable();
    }
    get carro$(): Observable<producto[]> {
        return this.carroSubject.asObservable();
    }

    actualizarCarro(producto: producto): void {
        this.añadirAlCarro(producto);
        this.cantidaDeProductos();
        this.calcTotal();
    }



    private añadirAlCarro(producto: producto): void {
        const ProductoEnCarro = this.productos.find(({ id }) => id === producto.id)
        if (ProductoEnCarro) {
            ProductoEnCarro.cantidad += 1;
        }
        else {
            this.productos.push({ ...producto, cantidad: 1 })
        }


        this.carroSubject.next(this.productos);
    }



    private cantidaDeProductos(): void {
        const cantidad = this.productos.reduce((acc, prod) => acc += prod.cantidad, 0);
        this.cantidadSubject.next(cantidad);
    }



    private calcTotal(): void {
        const total = this.productos.reduce((acc, prod) => acc += (prod.price * prod.cantidad), 0);
        this.totalSubject.next(total);
    }

    resetcart():void{
      this.carroSubject.next([]);
      this.totalSubject.next(0);
      this.cantidadSubject.next(0);
    }

}
