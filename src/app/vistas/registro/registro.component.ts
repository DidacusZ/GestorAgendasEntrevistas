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

idCounter = 0; // Inicializa el contador de ID
  profileForm = new FormGroup({
    id: new FormControl(this.idCounter),
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
    dni: new FormControl(''),
  });

  onSubmit() {
    // Incrementa el contador de ID
    this.idCounter++;
    // Actualiza el valor del ID en el formulario
    this.profileForm.patchValue({id: this.idCounter});
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  constructor(private clienteService: ClienteService) {}

  datosFormulario: any = {}; // Asigna tus datos del formulario aquí

  guardarDatos() {
    this.clienteService.agregarDatos(this.datosFormulario)
      .then(() => {
        console.log('Datos guardados correctamente');
      })
      .catch((error: any) => {
        console.error('Error al guardar datos:', error);
      });
  }
}
