import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-mostrar',
  templateUrl: './toolbar-mostrar.component.html',
  styleUrls: ['./toolbar-mostrar.component.css']
})
export class ToolbarMostrarComponent implements OnInit  {
  ngOnInit(): void {
  }

  downloadPdf() {
    const pdfUrl = 'assets/pdf/CV_Delgado_Walter.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'WalterDelgadoCV.pdf';

    link.click();
  }
}
