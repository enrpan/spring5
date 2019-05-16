import { Region } from './region';
import { Factura } from '../facturas/models/factura';

export class Cliente {
  id: number;
  nombre: string = "Quique";
  apellido: string;
  createAt: string;
  email: string;
  foto: string;
  region: Region;
  facturas: Array<Factura> = [];  // Es igual que facturas: Factura[] = [];
}
