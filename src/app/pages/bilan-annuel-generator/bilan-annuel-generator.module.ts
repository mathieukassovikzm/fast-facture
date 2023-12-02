import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BilanAnnuelGeneratorRoutingModule } from './bilan-annuel-generator-routing.module';
import { BilanAnnuelGeneratorComponent } from './bilan-annuel-generator.component';

@NgModule({
  imports: [CommonModule, BilanAnnuelGeneratorRoutingModule],
  declarations: [BilanAnnuelGeneratorComponent],
})
export class BilanAnnuelGeneratorModule {}
