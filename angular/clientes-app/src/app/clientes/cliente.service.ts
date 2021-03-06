import { Injectable } from '@angular/core';
import { formatDate, DatePipe } from '@angular/common';
import { Cliente } from './cliente';
import { Region } from './region';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient, private router: Router) { }

  //Método para añadir el header Authorization en las cabeceras HTTP. Se usaba antes de usar los Interceptors que es la forma "limpia" de hacerlo
  //private agregarAuthorizationHeader() {
  //  let token = this.authService.token;
  //  if ( token!=null ) {
  //    return this.httpHeaders.append('Authorization', 'Bearer ' + token);
  //  }
  //  return this.httpHeaders;
  //}

  // Método usando antes de usar el auth.interceptor
  //private isNoAutorizado(e): boolean {
  //  if (e.status==401) {  // No autenticado o expiró el token en servidor
  //
  //  if ( this.authService.isAuthenticated() ) {
  //    // Estoy autenticado pero el servidor devuelve 401 --> ha expirado el token en el servidor
  //    this.authService.logout();  // cierro sesión en front-end también
  //  }
  //
  //  this.router.navigate(['/login']);
  //  return true;
  //}
  //
  //if (e.status==403) {  // No autorizado
  //  swal.fire('Acceso denegado', `Hola ${this.authService.usuario.username} no tienes acceso a este recurso!`, 'warning');
  //  this.router.navigate(['/clientes']);
  //  return true;
  //}
  //
  //return false;
  //}

  getRegiones(): Observable<Region[]> {
    return this.http.get<Region[]>(this.urlEndPoint + '/regiones');
  }

  getClientes(page: number): Observable<any> {
    //return of(CLIENTES);

    // Una forma de hacerlo...
    //return this.http.get<Cliente[]>(this.urlEndPoint);

    // Otra forma de hacerlo...
    //  return this.http.get(this.urlEndPoint).pipe(
    //  map( function(response) { return response as Cliente[]} )
    //);
    // Que de forma resumida se puede escribir también como:
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      tap( (response: any) => {
        //let clientes = response as Cliente[];  // Hay que convertir el response a tipo Cliente porque el response es un Object
        console.log('ClienteService: tap 1');
        (response.content as Cliente[]).forEach( cliente => {
          console.log(cliente.nombre);
        }
        )
      }),
      map( (response: any) => {
        //let clientes = response as Cliente[];
        (response.content as Cliente[]).map( cliente => {
          cliente.nombre = cliente.nombre.toUpperCase();
          let datePipe = new DatePipe('es');
          // Esto de abajo es para formatear la fecha aqui en la clase service en lugar de en la vista
          //cliente.createAt = datePipe.transform(cliente.createAt, 'EEEE dd, MMMM yyyy');
          // Esto de abajo es otra forma de hacer lo mismo que con el DatePipe
          //cliente.createAt = formatDate(cliente.createAt, 'dd-MM-yyyy', 'en-US');
          return cliente;  // el map devuelve un tipo cliente ya
        });
        return response;
      }),
      tap( response => {
        //let clientes = response as Cliente[];  --> Ya no es necesaria la conversión porque el map anterior ha devuelto ya un tipo Cliente
        console.log('ClienteService: tap 2');
        (response.content as Cliente[]).forEach( cliente => {
          console.log(cliente.nombre);
        }
        )
      })
    );
  }

  create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post(this.urlEndPoint, cliente).pipe(
      map( (response: any) => response.cliente as Cliente),  // Esto es para convertir la respuesta (que es un Map) a tipo Cliente
      catchError(e => {
        if ( e.status==400 ) {   // Los BAD_REQUEST se tratan de forma diferente
          return throwError(e);
        }
        if ( e.error.mensaje ) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    )
  }

  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        if ( e.status!=401 && e.error.mensaje ) {
          this.router.navigate(['/clientes']);
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  // El tipo any es otra forma diferente al map del create para trabajar con el resultaod Map que devuelve el servidor
  update(cliente: Cliente): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente).pipe(
      catchError(e => {
        if ( e.status==400 ) {   // Los BAD_REQUEST se tratan de forma diferente
          return throwError(e);
        }
        if ( e.error.mensaje ) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    )
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        if ( e.error.mensaje ) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    )
  }

  subirFoto(archivo: File, id): Observable<HttpEvent<{}>> { // Observable<Cliente> { <-- Esto era ANTES de poner la barra de progreso
    let formData = new FormData;
    formData.append("archivo", archivo);
    formData.append("id", id);

    const req = new HttpRequest('POST', `${this.urlEndPoint}/upload`, formData, {
      reportProgress: true
    });

    return this.http.request(req);

    // Versión ANTES de poner barra de progreso
    //return this.http.post(${this.urlEndPoint}/upload`, formData).pipe(
    //  map( (response:any) => response.cliente as Cliente),
    //  catchError(e => {
    //    console.error(e.error.mensaje);
    //    swal.fire(e.error.mensaje, e.error.error, 'error');
    //    return throwError(e);
    //  })
    //);
  }
}
