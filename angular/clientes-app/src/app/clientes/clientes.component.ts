import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      (clientes) => { this.clientes = clientes }
      // Al ser un único parametro y una unica linea de funcion se podria poner:
      // clientes => this.clientes = clientes
      // Si los () y sin las {}
    );

    // Esto es lo mismo que lo de arriba pero sin la forma abreviada
    //this.clienteService.getClientes().subscribe(
    //  function (clientes) { this.clientes = clientes }
    //);
  }

}
