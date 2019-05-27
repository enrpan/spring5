import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Region } from './region';
import { ClienteService } from './cliente.service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente()
  regiones: Region[];
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
    });

    this.clienteService.getRegiones().subscribe(regiones => this.regiones = regiones);
  }

  create(): void {
    console.log(this.cliente);
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
    console.log(this.cliente);

    // Al editar un cliente no hay que actualizar sus facturas para no entrar en un bucle infinito (clase 183)
    this.cliente.facturas = null;

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

  compararRegion(o1:Region, o2:Region): boolean {
    if (o1===undefined && o2===undefined) {
      return true;
    }
    //return o1==null || o2==null? false: o1.id===o2.id;
    return o1===null || o2===null || o1===undefined || o2===undefined? false: o1.id===o2.id;
  }

}
