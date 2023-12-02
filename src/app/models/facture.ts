import { IemployerModel } from './entity';
import { IDebourModel } from './prestation';

export interface IFacture {
  FacNumber: number;
  Debours?: IDebourModel[];
}
