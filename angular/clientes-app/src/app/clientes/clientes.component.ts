import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { ModalService } from './detalle/modal.service';
import swal from 'sweetalert2';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  paginador: any;
  clienteSeleccionado: Cliente;

  constructor(private clienteService: ClienteService,
    public modalService: ModalService,  // Hay que ponerlo como public porque se usa en las vistas/plantillas y no solo dentro de la clase
    public authService: AuthService,   // Hay que ponerlo como public porque se usa en las vistas/plantillas y no solo dentro de la clase
    private activatedRoute: ActivatedRoute) { }

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
        (response) => {
          this.clientes = response.content as Cliente[];
          this.paginador = response;
        }
        // Al ser un único parametro y una unica linea de funcion se podria poner:
        // clientes => this.clientes = clientes
        // Si los () y sin las {}
      );
    });

    this.modalService.notificarUpload.subscribe( cliente => {
      this.clientes = this.clientes.map( clienteOriginal => {
        if ( cliente.id == clienteOriginal.id ) {
          clienteOriginal.foto = cliente.foto;
        }
        return clienteOriginal;
      })
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

  abrirModal(cliente: Cliente) {
    this.clienteSeleccionado = cliente;
    this.modalService.abrirModal();
  }

}
