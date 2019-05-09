import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { AuthService } from '../auth.service';

import swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    // En este caso hay que usar el pipe y el catchError porque estamos procesando las respuestas del servidor
    return next.handle(req).pipe(
      catchError( e => {
        if (e.status==401) {  // No autenticado o expiró el token en servidor

          if ( this.authService.isAuthenticated() ) {
            // Estoy autenticado pero el servidor devuelve 401 --> ha expirado el token en el servidor
            this.authService.logout();  // cierro sesión en front-end también
          }

          this.router.navigate(['/login']);
        }

        if (e.status==403) {  // No autorizado
          swal.fire('Acceso denegado', `Hola ${this.authService.usuario.username} no tienes acceso a este recurso!`, 'warning');
          this.router.navigate(['/clientes']);
        }
        return throwError(e);
      })
    );
  }
}
