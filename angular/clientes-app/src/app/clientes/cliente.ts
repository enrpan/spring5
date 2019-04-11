import { Region } from './region';

export class Cliente {
  id: number;
  nombre: string = "Quique";
  apellido: string;
  createAt: string;
  email: string;
  foto: string;
  region: Region;
}
