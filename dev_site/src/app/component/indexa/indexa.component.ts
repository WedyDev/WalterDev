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
}
