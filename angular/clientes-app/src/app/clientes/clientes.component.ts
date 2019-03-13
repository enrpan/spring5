import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe ( params => {
      let page: number = +params.get('page');  // El + indica que se convierta el string a un integer
      if ( !page ) { page = 0; } // Para la primera página en la que page no está definido
      
      this.clienteService.getClientes(page).pipe(
        tap( response => {
          console.log('ClienteComponent: tap 3');
          (response.content as Cliente[]).forEach( cliente => {
            console.log(cliente.nombre);
          });
        })
      ).subscribe(
        (response) => { this.clientes = response.content as Cliente[] }
        // Al ser un único parametro y una unica linea de funcion se podria poner:
        // clientes => this.clientes = clientes
        // Si los () y sin las {}
      );
    });
  }

  delete(cliente: Cliente): void {

    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    })
    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: `¿Seguro que desea eliminar el cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter( cli => cli !== cliente )
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              `El cliente ${cliente.nombre} ha sido eliminado!`,
              'success'
            )
          }
        )
      }
    })
  }

}
