import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.development';
import { RegistroComponent } from './vistas/registro/registro.component';
import { ReservarCitaComponent } from './vistas/reservar-cita/reservar-cita.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ReservarCitaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp({"projectId":"quick-charger-369422","appId":"1:513396323129:web:58cdfaecadfef420c8eee8","storageBucket":"quick-charger-369422.appspot.com","apiKey":"AIzaSyBjbIHczpbNwbW8UzF8Dc_5vb-AyTmC6zk","authDomain":"quick-charger-369422.firebaseapp.com","messagingSenderId":"513396323129"})),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
