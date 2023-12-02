import { IUserModel, IemployerModel } from '../../models/entity';

export const employeeMath: IUserModel = {
  Name: 'Mathieu',
  FamillyName: 'Le Bellec',
  Title: 'Entrepreneur individuel',
  Address: '5 Rue Jean Brulelou Dit Brito',
  PostCode: 35700,
  City: 'Rennes',
  Email: 'mathieu.lebellec.pro@gmail.com',
  NumSiret: '948 303 771 00018',
  NumTva: 'FR71948303771',
};

export const employerTTC: IemployerModel = {
  Name: 'T&T Consulting SAS',
  Address: 'Sèvres-Manufactures,20 rue TROYON',
  PostCode: 92310,
  City: 'Sevres',
  Phone: '01 41 90 16 80',
  Email: 'factures.sst@t-tconsulting.fr',
  NumSiret: '423 609 015 00049',
};
