import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DetalleCompraComponent } from './detalle-compra/detalle-compra.component';
import { comprasservice } from '../service/compras.service';
import { delay } from 'rxjs';
import { Router } from '@angular/router';





@Component({
  selector: 'app-formulario-compra',
  templateUrl: './formulario-compra.component.html',
  styleUrls: ['./formulario-compra.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    DetalleCompraComponent


  ],

})
export class FormularioCompraComponent {

  constructor(private compraSvc: comprasservice, private router: Router) { }

  model = {
    Nombre: '',
    Apellido: '',
    Domicilio: '',
    DNI: '',
    NumerodeTarjeta: '',
    CodigoDeSeguridad: '',
  }


  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'requiere un Email';
    }

    return this.email.hasError('email') ? 'El email no es valido' : '';
  }
  comprar(): void {
    this.router.navigate(['/Inicio']);
    delay(4000);
    this.compraSvc.resetcart();
    alert("Gracias por su Compra")
  }
}

