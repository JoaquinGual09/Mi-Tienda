import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { producto } from '../productos/interface/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriaelectronicsService {
  private urlCategoriaproductosApi ='https://fakestoreapi.com/products/category/electronics';

  constructor(private http: HttpClient) { }

  public getdata(): Observable<producto[]> {
    return this.http.get<producto[]>(this.urlCategoriaproductosApi);
  }



}
