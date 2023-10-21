import { Component } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { categoria } from './interface/categoria.interfaces';





@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

  constructor(private categoriaSvc: CategoriaService) { }

  data: categoria[] = []

  ngOnInit(): void {
    this.llenarData();
  }



  llenarData() {
    this.categoriaSvc.getdata().subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }
}
