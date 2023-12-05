import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.development';
import { RegistroComponent } from './vistas/registro/registro.component';
import { ReservarCitaComponent } from './vistas/reservar-cita/reservar-cita.component';
import { DetalleClienteComponent } from './vistas/detalle-cliente/detalle-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ReservarCitaComponent,
    DetalleClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
