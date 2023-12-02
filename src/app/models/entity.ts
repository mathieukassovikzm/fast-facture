import { IFacture } from './facture';

export interface IEntity {
  /** Prénom */
  Name?: string;
  /** Nom de famille */
  FamillyName?: string;
  /** Adresse */
  Address?: string;
  /** Code postal */
  PostCode?: number;
  /** Ville */
  City?: string;
  /** Numéro de téléphone */
  Phone?: string;
  /** Email */
  Email?: string;
  /** N° de SIRET */
  NumSiret?: string;
}

export interface IUserModel extends IEntity {
  /** Titre */
  Title?: string;
  /** Taux journalié moyen */
  TJM?: number;
  /** N° TVA intra-communautaire */
  NumTva?: string;
  /** Liste des Factures */
  Factures?: IFacture[];
  /** Employeur actuel */
  CurrentEmployer?: IemployerModel;
  /** Liste des employeurs */
  Employers?: IemployerModel[];
}

export interface IemployerModel extends IEntity {}
