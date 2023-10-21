import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { categoria } from '../categorias/interface/categoria.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlCategoriaApi = 'https://fakestoreapi.com/products/categories';



  constructor(private http: HttpClient) { }

  public getdata(): Observable<categoria[]> {
    return this.http.get<categoria[]>(this.urlCategoriaApi);
  }


}
