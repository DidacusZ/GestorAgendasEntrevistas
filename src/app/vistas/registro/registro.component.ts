import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/modelos/cliente';


import { ClienteService } from 'src/app/servicios/cliente.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

idCounter = 0; // Inicializa el contador de ID
  profileForm = new FormGroup({
    id: new FormControl(this.idCounter),
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
    dni: new FormControl(''),
  });

  constructor(
    private firebaseService: FirebaseService,
    private clienteService:ClienteService) {}

  datosFirebase: any[] = [];

  onSubmit() {
    //elegir la coleccion
    this.firebaseService.setCollection("clientes");

    // Incrementa el contador de ID
    this.idCounter++;
    // Actualiza el valor del ID en el formulario
    this.profileForm.patchValue({id: this.idCounter});

    // Obtén los valores del formulario
    const formData = this.profileForm.value;

    // Llama al servicio de Firebase para agregar el documento
    this.firebaseService.addDocument(formData)
      .then(() => {
        console.log('Datos guardados correctamente en Firebase');
        // Puedes resetear el formulario después de guardar si es necesario
        this.profileForm.reset();
      })
      .catch(error => {
        console.error('Error al guardar datos en Firebase:', error);
      });
  }

  ngOnInit() {
    //elegir la coleccion
    this.firebaseService.setCollection("clientes");
    // Llama al método del servicio para obtener datos
    this.firebaseService.getAllDocuments()
      .subscribe(data => {
        this.datosFirebase = data;
      });
  }
/*
  ngOnInit() {
    this.firebaseService.setCollection("clientes");
    // Llama al método del servicio para obtener datos
    this.clienteService.cargarDatos();
  }
*/
}
