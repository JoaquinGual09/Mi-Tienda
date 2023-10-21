import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inicio } from '../inicio/interface/inicio-interface';

@Injectable({
  providedIn: 'root'
})
export class inicioService {

  private urlCategoriaApi = 'https://fakestoreapi.com/products';



  constructor(private http: HttpClient) { }

  public getdata(): Observable<inicio[]> {
    return this.http.get<inicio[]>(this.urlCategoriaApi);
  }




}
