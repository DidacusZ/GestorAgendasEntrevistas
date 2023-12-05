import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/cliente';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private datosFirebase: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  // Método para cargar los datos desde Firebase
  cargarDatos() {
    this.firebaseService.getAllDocuments().subscribe(data => {
      this.datosFirebase = data;
    });
  }

  // Método para obtener los datos
  obtenerDatos(): any[] {
    return this.datosFirebase;
  }
}
