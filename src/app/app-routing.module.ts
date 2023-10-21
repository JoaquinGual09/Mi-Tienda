import { CategoriaelectronicsComponent } from './categoria-productos/categoria-electronics/categoria-electronics.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriaJeweleryComponent } from './categoria-productos/categoria-jewelery/categoria-jewelery.component';
import { CategoriaMenclothingComponent } from './categoria-productos/categoria-menclothing/categoria-menclothing.component';
import { CategoriaWomenclothingComponent } from './categoria-productos/categoria-womenclothing/categoria-womenclothing.component';
import { FormularioCompraComponent } from './formulario-compra/formulario-compra.component';

const routes: Routes = [
  { path: "", redirectTo: '/Inicio', pathMatch: "full" },
  { path: "Inicio", component: InicioComponent },
  { path: 'PRODUCTOS', component: ProductosComponent },
  { path: 'Categorias/electronics', component: CategoriaelectronicsComponent },
  { path: 'Categorias/jewelery',component:CategoriaJeweleryComponent},
  { path: "Categorias/men's clothing",component:CategoriaMenclothingComponent},
  { path: "Categorias/women's clothing",component:CategoriaWomenclothingComponent},
  { path: 'FormularioDeCompra',component:FormularioCompraComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
