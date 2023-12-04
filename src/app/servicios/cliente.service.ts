import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/cliente';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private firestore: AngularFirestore) {}

  agregarDatos(datos: any) {
    return this.firestore.collection('clientes').add(datos);
  }
}
