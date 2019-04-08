import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ModalService } from './modal.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() cliente: Cliente;
  titulo: string = "Detalle del cliente";
  private fotoSeleccionada: File;
  progreso: number = 0;

  constructor(private clienteService: ClienteService,
    private modalService: ModalService) { }
    // private activatedRoute: ActivatedRoute) { } Esto solo sera necesario cuando no era una pantalla modal

  ngOnInit() {
    //Este contenido era para cuando esto no se mostraba como un dialogo modal
    //this.activatedRoute.paramMap.subscribe(params => {
    //  let id:number = +params.get('id');  // El + es para convertir a numero
    //  if ( id ) {
    //    this.clienteService.getCliente(id).subscribe(cliente => {
    //      this.cliente = cliente;
    //    });
    //  }
    //});
  }

  seleccionarFoto(event) {
    this.fotoSeleccionada = event.target.files[0];
    this.progreso = 0;
    console.log(this.fotoSeleccionada);
    if ( this.fotoSeleccionada.type.indexOf('image')<0) {
      swal.fire('Error seleccionar imagen: ', 'El archivo debe ser del tipo imagen', 'error');
      this.fotoSeleccionada = null;
    }
  }

  subirFoto() {
    if (!this.fotoSeleccionada) {
      swal.fire('Error Upload: ', 'Debe seleccionar una foto', 'error');
    } else {
      this.clienteService.subirFoto(this.fotoSeleccionada, this.cliente.id)
      .subscribe( event => {
        if ( event.type === HttpEventType.UploadProgress ) {
          this.progreso = Math.round((event.loaded/event.total)*100);
        } else if ( event.type === HttpEventType.Response ) {
          let response: any = event.body;
          this.cliente = response.cliente as Cliente;

          // Lanzamos evento para que los subscriptores se enteren del cambio en el cliente (foto)
          this.modalService.notificarUpload.emit(this.cliente);

          swal.fire('La foto se ha subido completamente!', response.mensaje, 'success');
        }
      });
    }
  }

  cerrarModal() {
    this.modalService.cerrarModal();
    this.fotoSeleccionada = null;
    this.progreso = 0;
  }

}
