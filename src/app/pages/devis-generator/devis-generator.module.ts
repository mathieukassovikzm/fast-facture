import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevisGeneratorComponent } from './devis-generator.component';
import { DevisGeneratorRoutingModule } from './devis-generator-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DevisGeneratorRoutingModule
  ],
  exports: [DevisGeneratorComponent],
  declarations: [DevisGeneratorComponent]
})
export class DevisGeneratorModule { }
