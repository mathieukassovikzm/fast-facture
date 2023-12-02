import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureGeneratorComponent } from './facture-generator.component';

const routes: Routes = [
  {
    path: '',
    component: FactureGeneratorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactureGeneratorRoutingModule {}
