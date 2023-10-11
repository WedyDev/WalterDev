import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexa',
  templateUrl: './indexa.component.html',
  styleUrls: ['./indexa.component.css']
})
export class IndexaComponent implements OnInit {
  variableText: string = "Full Stack"; // Inicializa la propiedad con el texto predeterminado
  textColor: string = "black"; // Inicializa el color del texto
  textVariations: string[] = ["Backend", "Frontend","Full Stack" ]; // Variaciones de texto
  variationIndex: number = 0; // Índice actual de la variación

  ngOnInit(): void {
  }

  constructor() {
    // Código para cambiar el texto aquí si es necesario
    setInterval(() => {
      this.changeTextAndColor();
    }, 2000);
  }

  private changeTextAndColor() {
    this.variableText = this.textVariations[this.variationIndex];
    this.variationIndex = (this.variationIndex + 1) % this.textVariations.length;

    if (this.variableText === "Backend") {
      this.textColor = "black";
    } else if (this.variableText === "Frontend") {
      this.textColor = "black";
    }
    else if ((this.variableText === "Full Stack"))
    {
      this.textColor = "black";
    }
  }

  downloadPdf() {
    // URL del archivo PDF
    const pdfUrl = 'assets/pdf/CV_Delgado_Walter.pdf';

    // Crea un elemento 'a' para el enlace de descarga
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'WalterDelgadoCV.pdf'; // Nombre que tendrá el archivo descargado

    // Simula un clic en el enlace para iniciar la descarga
    link.click();
  }
  applyBlur(event: Event) {
    const target = event.target as HTMLImageElement;
    target.style.filter = "blur(4px)";
    target.removeEventListener("click", this.applyBlur);
  }


}
