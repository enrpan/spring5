import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente()
  private titulo: string = "Crear Cliente"
  private errores: string[];

  constructor(private clienteService: ClienteService,
              private router: Router,
              private activatedRoute: ActivatedRoute)
              { }

  ngOnInit() {
    this.cargarCliente()
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['id']
      if (id) {
        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente )
      }
    })
  }

  create(): void {
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes'])
        swal.fire('Nuevo cliente', `Cliente ${cliente.nombre} creado con éxito`, 'success')
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error('Codigo de error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    )
  }

  update(): void {
    this.clienteService.update(this.cliente).subscribe(
      json => { // en este caso estamos usando el json tal cual lo devuelve el servidor
        this.router.navigate(['/clientes'])
        swal.fire('Cliente actualizado', `Cliente ${json.cliente.nombre} actualizado con éxito`, 'success')
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error('Codigo de error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    )
  }

}
