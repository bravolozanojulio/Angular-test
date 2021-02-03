export interface Paciente {
  id: number;
  nombre: string;
  f_install: Date;
  usuarios: number;
  activo: boolean;
  espacio: number;
}
