import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  Macchina_Cantiere: String[];
  constructor() { 
    this.Macchina_Cantiere = [
      'Escavatori',
      'Terne',
      'Pale',
      'Minipale',
      'Dumpers',
      'Bulldozer',
      'Motolivellatrici',
      'Rulli compattatori',
      'Piastre vibranti',
      'Finitrici',
    ]
  }

  ngOnInit(): void {
  }

}
