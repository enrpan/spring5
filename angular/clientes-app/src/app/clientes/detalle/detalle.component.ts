import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  cliente: Cliente;
  titulo: string = "Detalle del cliente";

  constructor(private clienteService: ClienteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id:number = +params.get('id');  // El + es para convertir a numero
      if ( id ) {
        this.clienteService.getCliente(id).subscribe(cliente => {
          this.cliente = cliente;
        })
      }
    })
  }

}
