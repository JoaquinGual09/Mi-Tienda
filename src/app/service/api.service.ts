import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { producto } from '../productos/interface/producto.interfaces';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) { }


  public getdata(): Observable<producto[]> {
    return this.http.get<producto[]>(this.urlApi);
  }
}
