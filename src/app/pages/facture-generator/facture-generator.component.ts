import { Component, OnInit } from '@angular/core';
import { IUserModel } from '../../models/entity';
import { UserService } from '../../services/user.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
@Component({
  selector: 'app-facture-generator',
  templateUrl: './facture-generator.component.html',
  styleUrls: ['./facture-generator.component.scss'],
})
export class FactureGeneratorComponent implements OnInit {
  public user: IUserModel;
  constructor(private userService: UserService) {
    this.user = this.userService.getInfosUser();
  }

  ngOnInit() {}

  generatePDF(){
    let docDefinition = {
      content: []
    }

    pdfMake.createPdf(docDefinition).open();
  }
}
