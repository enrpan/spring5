import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);

    // Una forma de hacerlo...
    //return this.http.get<Cliente[]>(this.urlEndPoint);

    // Otra forma de hacerlo...
    //  return this.http.get(this.urlEndPoint).pipe(
    //  map( function(response) { return response as Cliente[]} )
    //);
    // Que de forma resumida se puede escribir también como:
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Cliente[] )
    );
    
  }

}
