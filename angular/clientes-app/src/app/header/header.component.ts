import { Component } from '@angular/core';
import { AuthService } from '../usuarios/auth.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  title: string = 'App Angular'

  constructor(public authService: AuthService, // Hay que ponerlo como public porque se usa en las vistas/plantillas y no solo dentro de la clase
    private router: Router) {}

  logout(): void {
    let username = this.authService.usuario.username;
    this.authService.logout();
    swal.fire('Logout', `Hola ${username}, has cerrado sesión con éxito`, 'success');
    this.router.navigate(['/login']);
  }
}
