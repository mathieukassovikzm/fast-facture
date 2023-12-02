import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'facture-generator',
    loadChildren: () =>
      import('./pages/facture-generator/facture-generator.module').then(
        (m) => m.FactureGeneratorModule
      ),
  },
  {
    path: 'devis-generator',
    loadChildren: () =>
      import('./pages/devis-generator/devis-generator.module').then(
        (m) => m.DevisGeneratorModule
      ),
  },
  {
    path: 'bilan-annuel-generator',
    loadChildren: () =>
      import('./pages/bilan-annuel-generator/bilan-annuel-generator.module').then(
        (m) => m.BilanAnnuelGeneratorModule
      ),
  },
];
