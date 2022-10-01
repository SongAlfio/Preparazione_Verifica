import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  Macchine: string[];
  constructor() { 
    this.Macchine = [
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
    ];
  }

  ngOnInit() {
  }

}
