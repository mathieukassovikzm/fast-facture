import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevisGeneratorComponent } from './devis-generator.component';

const routes: Routes = [
  {
    path: '',
    component: DevisGeneratorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevisGeneratorRoutingModule {}
