import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: "", redirectTo: '/Inicio', pathMatch: "full" },
  { path: "Inicio", component: InicioComponent },
  { path: 'PRODUCTOS', component: ProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
