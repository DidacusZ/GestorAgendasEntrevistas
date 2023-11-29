import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  listaClientes:Cliente[]=[

    {
    id:1,
    nombre:"Diego",
    apellidos:"de la prada",
    telefono:"627149124",
    email:"admin@google.com",
    dni:"353823026F"
    },
    {
      id:2,
      nombre:"Pepe",
      apellidos:"de la prada",
      telefono:"74563462",
      email:"ppn@google.com",
      dni:"4545347347K"
      }
  ];

  

  registrarCliente(cliente: Cliente) {
    this.listaClientes.push(cliente);
  }

  constructor() { }
}
