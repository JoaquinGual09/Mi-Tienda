import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { producto } from '../productos/interface/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriaWomenclothingService {

  private urlCategoriaproductosApi ="https://fakestoreapi.com/products/category/women's clothing";

  constructor(private http: HttpClient) { }

  public getdata(): Observable<producto[]> {
    return this.http.get<producto[]>(this.urlCategoriaproductosApi);
  }
}
