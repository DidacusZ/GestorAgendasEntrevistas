import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css']
})
export class DetalleClienteComponent implements OnInit {
  
  datosMostrados: any[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.datosMostrados = this.clienteService.obtenerDatos();
  }
}