import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilanAnnuelGeneratorComponent } from './bilan-annuel-generator.component';

const routes: Routes = [
  {
    path: '',
    component: BilanAnnuelGeneratorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilanAnnuelGeneratorRoutingModule {}
