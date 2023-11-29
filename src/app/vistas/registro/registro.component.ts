import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  formularioCliente: FormGroup;

  listaFormularioCliente: FormGroup[]=[];

  constructor(private libreriaFb: FormBuilder, private clienteSvc: ClienteService) {
    this.formularioCliente = this.libreriaFb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formularioCliente.valid) {
      const nuevoCliente: Cliente = { id: 0, ...this.formularioCliente.value };
      this.listaFormularioCliente.push(this.libreriaFb.group(this.formularioCliente.value));
      this.clienteSvc.registrarCliente(nuevoCliente);
      this.formularioCliente.reset();
    }
    console.log(this.formularioCliente.value);
    console.log(this.listaFormularioCliente);
  }

}
