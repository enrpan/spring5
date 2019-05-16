import { Producto } from './producto';

export class ItemFactura {
  producto: Producto;
  cantidad: number = 1;
  importe: number;

  // En realidad el importe nos viene calculado del backend pero podemos tener este metodo para calcularlo en el frontend
  public calcularImporte(): number {
    return this.cantidad * this.producto.precio;
  }
}
