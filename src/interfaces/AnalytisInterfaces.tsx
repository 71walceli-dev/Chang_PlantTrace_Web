import { Produccion } from '../views/Produccion';
export interface IAnalytics {
    Trees: IProyectoPlantas[];
    Lecturas: IProyectoLecturas[];
    Produccion: IProduccionProyecto[];
  }
  export interface IProyectoPlantas {
    Victoria: string;
    Plantas: number;
  }
  export interface IProyectoLecturas {
    Victoria: string;
    E1: number;
    E2: number;
    E3: number;
    E4: number;
    E5: number;
  }
  export interface IProduccionProyecto {
    Victoria: string;
    qq: number;
  }