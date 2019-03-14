import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'paginator-nav',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit {

  @Input() paginador: any;
  paginas: number[];

  constructor() { }

  ngOnInit() {
    this.paginas = new Array(this.paginador.totalPages).fill(0).map((_valor, indice) => indice+1); //El "_" antes de "valor" es para que se quite el warning por no usar esa variable nunca
  }

}