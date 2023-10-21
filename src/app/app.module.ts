import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { carroComponent } from './carro/carro.component';
import { CategoriaelectronicsComponent } from './categoria-productos/categoria-electronics/categoria-electronics.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CategoriaJeweleryComponent } from './categoria-productos/categoria-jewelery/categoria-jewelery.component';
import { FormsModule } from '@angular/forms';
import { CategoriaMenclothingComponent } from './categoria-productos/categoria-menclothing/categoria-menclothing.component';
import { CategoriaWomenclothingComponent } from './categoria-productos/categoria-womenclothing/categoria-womenclothing.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductoComponent,
    InicioComponent,
    CategoriasComponent,
    carroComponent,
    CategoriaelectronicsComponent,
    CategoriaJeweleryComponent,
    CategoriaMenclothingComponent,
    CategoriaWomenclothingComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
