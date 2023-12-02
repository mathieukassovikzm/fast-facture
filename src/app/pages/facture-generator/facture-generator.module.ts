import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { FactureGeneratorRoutingModule } from './facture-generator-routing.module';
import { FactureGeneratorComponent } from './facture-generator.component';

@NgModule({
  imports: [CommonModule, FactureGeneratorRoutingModule, PDFExportModule],
  exports: [FactureGeneratorComponent],
  declarations: [FactureGeneratorComponent],
})
export class FactureGeneratorModule {}
